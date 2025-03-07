1. get namespace 

```
curl 'https://devspaces.apps.cluster-4b8dt.4b8dt.sandbox2633.opentlc.com/api/kubernetes/namespace' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9,pt-BR;q=0.8,pt;q=0.7,es-419;q=0.6,es;q=0.5' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -b 'JSESSIONID=5C3E340A92BBA22E2B5901740445495F; ajs_user_id=3d5cbfed48ce23d2f0dc0a0baa3ec2ee93867b2b; ajs_anonymous_id=382059f0-a948-47ac-8922-0065d055ffcb; analytics_session_id=1738259971145; analytics_session_id.last_access=1738259998390; 0f7237e9231e46a9b32612344566983e=f925f7f7445004887e8476808d0ed670; _oauth_proxy=dXNlcjFAY2x1c3Rlci5sb2NhbHxDZnVocTJ6dzJ3MTdKZkVjZGJrcTFnS1Y4WEJpZ2ZWeGxqOWFWRWw2aDZPaFRzSmp4VTZHeEh4SE44azB0bEk3ekJjU0NmczJwSVhlYjRnN1BBZGczNWJrfC02MjEzNTU5NjgwMHw=|1741359531|JRgUFghJoIPVDa9BgxtsLJDIU0A=' \
  -H 'Pragma: no-cache' \
  -H 'Referer: https://devspaces.apps.cluster-4b8dt.4b8dt.sandbox2633.opentlc.com/dashboard/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"'
```

2. get workspaces

```
curl 'https://devspaces.apps.cluster-4b8dt.4b8dt.sandbox2633.opentlc.com/dashboard/api/namespace/user1-devspaces/devworkspaces' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9,pt-BR;q=0.8,pt;q=0.7,es-419;q=0.6,es;q=0.5' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -b 'ajs_user_id=3d5cbfed48ce23d2f0dc0a0baa3ec2ee93867b2b; ajs_anonymous_id=382059f0-a948-47ac-8922-0065d055ffcb; analytics_session_id=1738259971145; analytics_session_id.last_access=1738259998390; 0f7237e9231e46a9b32612344566983e=f925f7f7445004887e8476808d0ed670; _oauth_proxy=dXNlcjFAY2x1c3Rlci5sb2NhbHxDZnVocTJ6dzJ3MTdKZkVjZGJrcTFnS1Y4WEJpZ2ZWeGxqOWFWRWw2aDZPaFRzSmp4VTZHeEh4SE44azB0bEk3ekJjU0NmczJwSVhlYjRnN1BBZGczNWJrfC02MjEzNTU5NjgwMHw=|1741359531|JRgUFghJoIPVDa9BgxtsLJDIU0A=' \
  -H 'Pragma: no-cache' \
  -H 'Referer: https://devspaces.apps.cluster-4b8dt.4b8dt.sandbox2633.opentlc.com/dashboard/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"'
```
