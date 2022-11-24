defmodule Plausible.Ingestion.RequestTest do
  use Plausible.DataCase, async: true

  import Phoenix.ConnTest

  alias Plausible.Ingestion.Request

  test "request cannot be built from conn without payload" do
    conn = build_conn(:post, "/api/events", %{})
    assert {:error, changeset} = Request.build(conn)

    errors = Keyword.keys(changeset.errors)
    assert :event_name in errors
    assert :hostname in errors
    assert :domain in errors
  end

  test "request cannot be built from non-json payload" do
    conn = build_conn(:post, "/api/events", "defnotjson")
    assert {:error, changeset} = Request.build(conn)
    assert changeset.errors[:request]
  end

  test "request can be built from URL alone" do
    payload = %{
      name: "pageview",
      url: "http://dummy.site"
    }

    conn = build_conn(:post, "/api/events", payload)
    assert {:ok, request} = Request.build(conn)

    assert request.domains == ["dummy.site"]
    assert request.event_name == "pageview"
    assert request.pathname == "/"
    assert request.remote_ip == "127.0.0.1"
    assert %NaiveDateTime{} = request.timestamp
    assert request.uri.host == "dummy.site"
    assert request.uri.scheme == "http"
    assert request.props == %{}
  end

  test "request can be built with domain" do
    payload = %{
      name: "pageview",
      domain: "dummy.site",
      url: "http://dummy.site/index"
    }

    conn = build_conn(:post, "/api/events", payload)
    assert {:ok, request} = Request.build(conn)
    assert request.domains == ["dummy.site"]
    assert request.uri.host == "dummy.site"
  end

  test "request can be built with domain using shorthands" do
    payload = %{
      n: "pageview",
      d: "dummy.site",
      u: "http://dummy.site/index"
    }

    conn = build_conn(:post, "/api/events", payload)
    assert {:ok, request} = Request.build(conn)
    assert request.domains == ["dummy.site"]
    assert request.uri.host == "dummy.site"
  end

  test "request can be built with multiple domains" do
    payload = %{
      n: "pageview",
      d: "dummy.site,crash.site",
      u: "http://dummy.site/index"
    }

    conn = build_conn(:post, "/api/events", payload)
    assert {:ok, request} = Request.build(conn)
    assert request.domains == ["dummy.site", "crash.site"]
    assert request.uri.host == "dummy.site"
  end

  #### : XXX finished here
  test "hostname is none if uri not provided" do
    payload = %{
      name: "pageview",
      domain: "dummy.site",
      url: "about:config"
    }

    conn = build_conn(:post, "/api/events", payload)
    assert {:ok, request} = Request.build(conn)
  end
end
