import { serve } from "https://deno.land/std@0.131.0/http/server.ts"

console.log(`Function "telegram-bot" up and running!`)

addEventListener(
    "fetch", event => {
        let url = new URL(event.request.url);
        url.hostname = Deno.env.get('HOSTNAME');                        
        url.protocol = "https";
        let request = new Request(url, event.request);
        event.respondWith(
            fetch(request)
        )
    }
)
