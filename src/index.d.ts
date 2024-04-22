
type headObj = {
  name: string;
  contentType: string | null;
  fileName: string | null;
}

declare function parseFormBuffer(buffer: Buffer, boundary: string): Buffer & headObj;
