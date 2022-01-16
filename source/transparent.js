var BingParams = new URLSearchParams(window.location.search);

let query = BingParams.get("q");
let search = query.split(" ");

if (search.includes("transparent")) {
    if (!BingParams.has("qft")) {
        console.log("Edge Transparent Search: Adding filter.....")
        window.location.href = `${window.location.href}&qft=+filterui:photo-transparent`;
    }
}