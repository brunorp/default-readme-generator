let fs = require("fs");
var createStream = fs.createWriteStream("README.md");
createStream.write("# default-readme-generator\r\n \r\n");
createStream.write("Global module made with Node.js that creates a default readme with all possible possibilities including title, table, fenced code blocks and syntax highlighting, among others.\r\n \r\n");
createStream.write("## Installation\r\n \r\n");
createStream.write(" ```bash npm install default-readme-generator ``` \r\n \r\n");
createStream.write("## Usage\r\n");
createStream.write("in cmd, choose a folder and run the command:\r\n \r\n");
createStream.write(" ```bash npm install default-readme-generator ``` \r\n \r\n");
createStream.write("## Contributing\r\n \r\n");
createStream.write("Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.\r\n \r\n");
createStream.write("Please make sure to update tests as appropriate.\r\n \r\n");
createStream.write("## License\r\n \r\n");
createStream.write("[MIT](https://choosealicense.com/licenses/mit/)\r\n \r\n");
createStream.write("# Another featuress\r\n \r\n");
createStream.write("## Italic \r\n _italic text_\r\n \r\n");
createStream.write("## Strong \r\n **strong text**\r\n \r\n");
createStream.write("## Order list \r\n \r\n 1. Item one \r\n 2. Item two \r\n 3. Item three \r\n \r\n");
createStream.write("## Unorderer list \r\n \r\n * Item one \r\n * Item two \r\n * Item three \r\n \r\n");
createStream.write("_this list also can be writted with '*' or '-' or '+'_ \r\n \r\n");
createStream.write("## Table\r\n \r\n");
createStream.write("Attempt | #1 | #2 | #3 | #4 | #5 | #6 | #7 | #8 | #9 | #10 | #11 \r\n");
createStream.write("--- | --- | --- | --- |--- |--- |--- |--- |--- |--- |--- |--- \r\n");
createStream.write("Seconds | 301 | 283 | 290 | 286 | 289 | 285 | 287 | 287 | 272 | 276 | 269 \r\n \r\n");
createStream.write("## Font size\r\n \r\n");
createStream.write("# h1\r\n ");
createStream.write("## h2\r\n ");
createStream.write("### h3\r\n ");
createStream.write("#### h4\r\n ");
createStream.write("##### h5\r\n ");
createStream.write("###### h6\r\n ");   

createStream.end();


