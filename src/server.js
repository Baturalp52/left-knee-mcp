const { McpServer } = require("@modelcontextprotocol/sdk/server/mcp.js");
const { StdioServerTransport } = require("@modelcontextprotocol/sdk/server/stdio.js");
const { registerTools } = require("./tools/registerTools");

async function startServer() {
  const server = new McpServer({
    name: "left-knee-mcp",
    version: "0.2.0",
  });

  registerTools(server);

  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Left Knee MCP server is running on stdio.");
}

module.exports = {
  startServer,
};
