### A simple multipart/form parser.

- Takes body (in buffer) and boundary argument
- Splits the head and data from each field
- Return an array of objects with name, fileName, contentType and body