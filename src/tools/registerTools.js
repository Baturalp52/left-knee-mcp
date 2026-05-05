const { formatResult } = require("../utils/formatResult");
const { normalizeLanguage, normalizeAudience } = require("../utils/normalizers");
const {
  buildOverview,
  buildStructuredFindings,
  buildQuestions,
  buildRedFlags,
} = require("../content/builders");

const commonInputSchema = {
  language: {
    type: "string",
    description: "Response language: 'en' (default) or 'tr'",
  },
  audience: {
    type: "string",
    description: "Explanation depth: 'patient' (default) or 'doctor'",
  },
};

function registerTools(server) {
  server.registerTool(
    "hello_world",
    {
      description: "Say hello from the left knee MCP server",
      inputSchema: {},
    },
    async () => formatResult("Hello from Left Knee MCP. MRI queue detected, humor enabled.")
  );

  server.registerTool(
    "knee_report_overview",
    {
      description:
        "Summarize left-knee MRI findings in patient or doctor mode, English by default",
      inputSchema: commonInputSchema,
    },
    async ({ language, audience }) => {
      const lang = normalizeLanguage(language);
      const mode = normalizeAudience(audience);
      return formatResult(buildOverview(lang, mode));
    }
  );

  server.registerTool(
    "knee_structured_findings",
    {
      description:
        "Return structured knee-report findings mapped by anatomical structures (en default)",
      inputSchema: {
        language: {
          type: "string",
          description: "Response language: 'en' (default) or 'tr'",
        },
      },
    },
    async ({ language }) => {
      const lang = normalizeLanguage(language);
      return formatResult(buildStructuredFindings(lang));
    }
  );

  server.registerTool(
    "knee_followup_questions",
    {
      description:
        "Generate practical follow-up questions for next appointment in patient or doctor mode",
      inputSchema: commonInputSchema,
    },
    async ({ language, audience }) => {
      const lang = normalizeLanguage(language);
      const mode = normalizeAudience(audience);
      return formatResult(buildQuestions(lang, mode));
    }
  );

  server.registerTool(
    "knee_watchouts",
    {
      description: "Provide non-diagnostic watch-out points in English or Turkish",
      inputSchema: {
        language: {
          type: "string",
          description: "Response language: 'en' (default) or 'tr'",
        },
      },
    },
    async ({ language }) => {
      const lang = normalizeLanguage(language);
      return formatResult(buildRedFlags(lang));
    }
  );
}

module.exports = {
  registerTools,
};
