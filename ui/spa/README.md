# Single Page Web App

 This is a react-based SPA whose main feature is that it's pages are compiled
on the server and sent down to the client before being hydrated. This is a thin
server, as in, no business logic lives here, only enough code to serve the
ready-to-hydrate isomorphic app over express.


# To Deploy

To run docker locally.
`docker run -it -d -p 3000:3000 {imageid}`
where `{imageid}` is the id from the image.

See ../../README.md
