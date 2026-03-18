export type Lang = "de" | "en";

export const translations = {
  nav: {
    features: { de: "Features", en: "Features" },
    rooms: { de: "Räume", en: "Rooms" },
    tech: { de: "Tech Stack", en: "Tech Stack" },
    quickstart: { de: "Quickstart", en: "Quickstart" },
    github: { de: "GitHub", en: "GitHub" },
  },
  hero: {
    badge: {
      de: "Open Source · MIT Lizenz",
      en: "Open Source · MIT License",
    },
    titlePre: { de: "Ein", en: "A" },
    titleHighlight: { de: "Pixel-Art-Office", en: "pixel-art office" },
    titlePost: { de: "für deine AI-Agents.", en: "for your AI agents." },
    sub: {
      de: "Echtzeit-Präsenz, thematische Räume, Task-Routing und ein Retro-Workspace, in dem dein Agent-Team tatsächlich lebt. Sieh auf einen Blick, wer arbeitet, wer blockiert ist und was in der Queue steht.",
      en: "Live presence states, themed rooms, task routing, and a retro-styled workspace where your agent team actually lives. See who's working, who's blocked, and what's queued — at a glance.",
    },
    ctaPrimary: { de: "Loslegen →", en: "Get Started →" },
    ctaSecondary: { de: "⭐ GitHub", en: "⭐ GitHub" },
    trustStates: { de: "✓ 6 Präsenz-Status", en: "✓ 6 presence states" },
    trustRooms: { de: "✓ 5 Räume", en: "✓ 5 themed rooms" },
    trustQueue: { de: "✓ Task-Queue", en: "✓ Task queue" },
  },
  about: {
    label: { de: "Was ist das?", en: "What is this?" },
    title: {
      de: "Ein gemeinsamer Workspace, in dem AI-Agents tatsächlich leben.",
      en: "A shared workspace where AI agents actually live.",
    },
    text: {
      de: "Agent Office ist ein Pixel-Art-Büro, das deinem AI-Agent-Team ein visuelles Zuhause gibt. Statt abstrakter Dashboards sitzen deine Agents in thematischen Räumen mit Live-Präsenz-Indikatoren. Sieh auf einen Blick, wer aktiv ist, wer blockiert ist und welche Tasks in der Queue stehen — wie ein echtes Büro, aber für AI.",
      en: "Agent Office is a pixel-art virtual office that gives your AI agent team a visual home. Instead of abstract dashboards, your agents sit in themed rooms with live presence indicators. See at a glance who's active, who's blocked, and what tasks are queued — like a real office, but for AI.",
    },
  },
  presence: {
    title: {
      de: "6 Präsenz-Status. Immer wissen, was passiert.",
      en: "6 Presence States. Always Know What's Happening.",
    },
    sub: {
      de: "Jeder Agent sendet seinen Status in Echtzeit.",
      en: "Every agent broadcasts their status in real time.",
    },
    states: [
      {
        name: { de: "Aktiv", en: "Active" },
        desc: {
          de: "Führt gerade einen Task aus",
          en: "Currently executing a task",
        },
      },
      {
        name: { de: "Verfügbar", en: "Available" },
        desc: {
          de: "Bereit für neue Aufgaben",
          en: "Ready for new work",
        },
      },
      {
        name: { de: "Im Meeting", en: "In Meeting" },
        desc: {
          de: "Koordiniert mit anderen Agents",
          en: "Coordinating with other agents",
        },
      },
      {
        name: { de: "Pausiert", en: "Paused" },
        desc: {
          de: "Token-sparende Pause zwischen Tasks",
          en: "Token-saving pause between tasks",
        },
      },
      {
        name: { de: "Blockiert", en: "Blocked" },
        desc: {
          de: "Wartet auf externe Abhängigkeit",
          en: "Waiting on external dependency",
        },
      },
      {
        name: { de: "Feierabend", en: "Off Hours" },
        desc: {
          de: "Außerhalb der Bürozeiten",
          en: "Outside office hours",
        },
      },
    ],
  },
  rooms: {
    title: { de: "5 Räume. Ein Office.", en: "5 Themed Rooms. One Office." },
    sub: {
      de: "Jeder Raum hat einen Zweck. Agents sitzen dort, wo ihre Arbeit stattfindet.",
      en: "Each room serves a purpose. Agents sit where their work happens.",
    },
    items: [
      {
        name: { de: "Planungsstudio", en: "Planning Studio" },
        team: { de: "Produkt + UX", en: "Product + UX" },
        icon: "📋",
      },
      {
        name: { de: "Werft", en: "Shipyard" },
        team: { de: "Build", en: "Build" },
        icon: "🔨",
      },
      {
        name: { de: "Systeme", en: "Systems Bay" },
        team: { de: "Plattform", en: "Platform" },
        icon: "⚙️",
      },
      {
        name: { de: "Commons", en: "Commons" },
        team: { de: "Gemeinsam", en: "Shared" },
        icon: "🏠",
      },
      {
        name: { de: "Signalraum", en: "Signal Room" },
        team: { de: "Ops", en: "Ops" },
        icon: "📡",
      },
    ],
  },
  features: {
    title: {
      de: "Alles, was dein Agent-Team braucht.",
      en: "Everything Your Agent Team Needs.",
    },
    items: [
      {
        title: { de: "Agent-Verwaltung", en: "Agent CRUD" },
        desc: {
          de: "Agents direkt über die UI erstellen, bearbeiten und löschen. Räume, Rollen und Sprites zuweisen.",
          en: "Create, edit, delete agents from UI. Assign rooms, roles, and sprites.",
        },
        color: "teal" as const,
      },
      {
        title: { de: "Task-Queue & Routing", en: "Task Queue & Routing" },
        desc: {
          de: "Tasks mit Prioritäten zuweisen. An Agent-Runtime, Work-Tracker oder beides routen.",
          en: "Assign tasks with priority levels. Route to agent runtime, work tracker, or both.",
        },
        color: "purple" as const,
      },
      {
        title: { de: "Activity Feed", en: "Activity Feed" },
        desc: {
          de: "Chronologisches Log aller Zuweisungen, Präsenz-Änderungen und System-Events.",
          en: "Chronological log of assignments, presence changes, and system events.",
        },
        color: "yellow" as const,
      },
      {
        title: { de: "Arbeitstag-Erkennung", en: "Workday Awareness" },
        desc: {
          de: "Berliner Bürozeiten. Agents wechseln automatisch in den Feierabend-Modus.",
          en: "Berlin-timezone office hours. Agents auto-switch to off-hours outside the window.",
        },
        color: "teal" as const,
      },
      {
        title: { de: "Dual Backend", en: "Dual Backend" },
        desc: {
          de: "Postgres als Primär-DB mit automatischem JSON-Fallback. Null Konfiguration zum Start.",
          en: "Postgres primary with automatic JSON file fallback. Zero-config to get started.",
        },
        color: "purple" as const,
      },
      {
        title: {
          de: "Barrierefrei (WCAG 2.1 AA)",
          en: "Accessible (WCAG 2.1 AA)",
        },
        desc: {
          de: "Keyboard-Navigation, Screen-Reader-Support, Fokus-Indikatoren, Reduced-Motion.",
          en: "Keyboard nav, screen reader support, focus indicators, reduced motion respect.",
        },
        color: "yellow" as const,
      },
    ],
  },
  tech: {
    title: { de: "Gebaut mit", en: "Built With" },
  },
  quickstart: {
    title: {
      de: "In 60 Sekunden startklar.",
      en: "Up and Running in 60 Seconds.",
    },
    note: {
      de: "Der interaktive Setup-Wizard führt dich durch Backend- und Timezone-Konfiguration.",
      en: "Interactive setup wizard guides you through backend & timezone config.",
    },
  },
  cta: {
    label: "Built by Pixel & Process",
    title: {
      de: "Gib deinen Agents einen Arbeitsplatz.",
      en: "Give your agents a place to work.",
    },
    sub: {
      de: "Open Source, MIT-lizenziert. Klonen, hacken, zu deinem machen.",
      en: "Open source, MIT licensed. Clone it, hack it, make it yours.",
    },
    ctaPrimary: { de: "Repository klonen", en: "Clone Repository" },
    ctaSecondary: { de: "Dokumentation lesen", en: "Read the Docs" },
  },
  footer: {
    copy: {
      de: "© 2026 Pixel & Process. MIT-Lizenz.",
      en: "© 2026 Pixel & Process. MIT License.",
    },
    imprint: { de: "Impressum", en: "Legal" },
    privacy: { de: "Datenschutz", en: "Privacy" },
  },
} as const;
