const translation = {
  createApp: 'Neue App erstellen',
  types: {
    all: 'Alle',
    assistant: 'Assistent',
    completion: 'Vervollständigung',
    workflow: 'Arbeitsablauf',
    agent: 'Agent',
    chatbot: 'Chatbot',
    basic: 'Grundlegend',
    advanced: 'Chatflow',
  },
  modes: {
    completion: 'Textgenerator',
    chat: 'Basisassistent',
  },
  createFromConfigFile: 'App aus Konfigurationsdatei erstellen',
  deleteAppConfirmTitle: 'Diese App löschen?',
  deleteAppConfirmContent:
    'Das Löschen der App ist unwiderruflich. Nutzer werden keinen Zugang mehr zu Ihrer App haben, und alle Prompt-Konfigurationen und Logs werden dauerhaft gelöscht.',
  appDeleted: 'App gelöscht',
  appDeleteFailed: 'Löschen der App fehlgeschlagen',
  join: 'Treten Sie der Gemeinschaft bei',
  communityIntro:
    'Diskutieren Sie mit Teammitgliedern, Mitwirkenden und Entwicklern auf verschiedenen Kanälen.',
  roadmap: 'Sehen Sie unseren Fahrplan',
  appNamePlaceholder: 'Bitte geben Sie den Namen der App ein',
  newApp: {
    startToCreate: 'Lassen Sie uns mit Ihrer neuen App beginnen',
    captionName: 'App-Symbol & Name',
    captionAppType: 'Welchen Typ von App möchten Sie erstellen?',
    previewDemo: 'Vorschau-Demo',
    chatApp: 'Assistent',
    chatAppIntro:
      'Ich möchte eine Chat-basierte Anwendung bauen. Diese App verwendet ein Frage-Antwort-Format und ermöglicht mehrere Runden kontinuierlicher Konversation.',
    agentAssistant: 'Neuer Agentenassistent',
    completeApp: 'Textgenerator',
    completeAppIntro:
      'Ich möchte eine Anwendung erstellen, die hochwertigen Text basierend auf Aufforderungen generiert, wie z.B. das Erstellen von Artikeln, Zusammenfassungen, Übersetzungen und mehr.',
    showTemplates: 'Ich möchte aus einer Vorlage wählen',
    hideTemplates: 'Zurück zur Modusauswahl',
    Create: 'Erstellen',
    Cancel: 'Abbrechen',
    nameNotEmpty: 'Name darf nicht leer sein',
    appTemplateNotSelected: 'Bitte wählen Sie eine Vorlage',
    appTypeRequired: 'Bitte wählen Sie einen App-Typ',
    appCreated: 'App erstellt',
    appCreateFailed: 'Erstellen der App fehlgeschlagen',
    basic: 'Grundlegend',
    chatbotType: 'Chatbot-Orchestrierungsmethode',
    workflowDescription: 'Erstellen Sie eine Anwendung, die qualitativ hochwertigen Text auf der Grundlage von Workflow-Orchestrierungen mit einem hohen Maß an Anpassung generiert. Es ist für erfahrene Benutzer geeignet.',
    advancedFor: 'Für Fortgeschrittene',
    startFromTemplate: 'Aus Vorlage erstellen',
    appNamePlaceholder: 'Geben Sie Ihrer App einen Namen',
    startFromBlank: 'Aus Leer erstellen',
    basicTip: 'Für Anfänger können Sie später zu Chatflow wechseln',
    basicDescription: 'Basic Orchestrate ermöglicht die Orchestrierung einer Chatbot-App mit einfachen Einstellungen, ohne die Möglichkeit, integrierte Eingabeaufforderungen zu ändern. Es ist für Anfänger geeignet.',
    workflowWarning: 'Derzeit in der Beta-Phase',
    advancedDescription: 'Workflow Orchestrate orchestriert Chatbots in Form von Workflows und bietet ein hohes Maß an Individualisierung, einschließlich der Möglichkeit, integrierte Eingabeaufforderungen zu bearbeiten. Es ist für erfahrene Benutzer geeignet.',
    basicFor: 'FÜR ANFÄNGER',
    completionWarning: 'Diese Art von App wird nicht mehr unterstützt.',
    chatbotDescription: 'Erstellen Sie eine chatbasierte Anwendung. Diese App verwendet ein Frage-und-Antwort-Format, das mehrere Runden kontinuierlicher Konversation ermöglicht.',
    captionDescription: 'Beschreibung',
    advanced: 'Chatflow',
    useTemplate: 'Diese Vorlage verwenden',
    agentDescription: 'Erstellen Sie einen intelligenten Agenten, der autonom Werkzeuge auswählen kann, um die Aufgaben zu erledigen',
    completionDescription: 'Erstellen Sie eine Anwendung, die qualitativ hochwertigen Text auf der Grundlage von Eingabeaufforderungen generiert, z. B. zum Generieren von Artikeln, Zusammenfassungen, Übersetzungen und mehr.',
    appDescriptionPlaceholder: 'Geben Sie die Beschreibung der App ein',
    caution: 'Vorsicht',
    Confirm: 'Bestätigen',
    appCreateDSLErrorTitle: 'Inkompatibilität der Version',
    appCreateDSLErrorPart2: 'Möchten Sie fortfahren?',
    appCreateDSLErrorPart4: 'Systemgestützte DSL-Version:',
    appCreateDSLErrorPart1: 'Es wurde ein signifikanter Unterschied bei den DSL-Versionen festgestellt. Das Erzwingen des Imports kann zu Fehlfunktionen der Anwendung führen.',
    appCreateDSLErrorPart3: 'Aktuelle DSL-Version der Anwendung:',
    appCreateDSLWarning: 'Achtung: Ein unterschiedlicher DSL-Versionsunterschied kann sich auf bestimmte Funktionen auswirken',
    learnMore: 'Weitere Informationen',
    optional: 'Wahlfrei',
    noTemplateFound: 'Keine Vorlagen gefunden',
    workflowUserDescription: 'Autonome KI-Arbeitsabläufe visuell per Drag-and-Drop erstellen.',
    foundResults: '{{count}} Befund',
    chatbotShortDescription: 'LLM-basierter Chatbot mit einfacher Einrichtung',
    completionUserDescription: 'Erstellen Sie schnell einen KI-Assistenten für Textgenerierungsaufgaben mit einfacher Konfiguration.',
    noAppsFound: 'Keine Apps gefunden',
    advancedShortDescription: 'Workflow optimiert für mehrstufige Chats',
    forAdvanced: 'FÜR FORTGESCHRITTENE',
    chooseAppType: 'App-Typ auswählen',
    completionShortDescription: 'KI-Assistent für Textgenerierungsaufgaben',
    forBeginners: 'Einfachere App-Typen',
    noIdeaTip: 'Keine Ideen? Schauen Sie sich unsere Vorlagen an',
    workflowShortDescription: 'Agentischer Ablauf für intelligente Automatisierungen',
    noTemplateFoundTip: 'Versuchen Sie, mit verschiedenen Schlüsselwörtern zu suchen.',
    advancedUserDescription: 'Workflow mit Speicherfunktionen und Chatbot-Oberfläche.',
    chatbotUserDescription: 'Erstellen Sie schnell einen LLM-basierten Chatbot mit einfacher Konfiguration. Sie können später zu Chatflow wechseln.',
    foundResult: '{{count}} Ergebnis',
    agentUserDescription: 'Ein intelligenter Agent, der in der Lage ist, iteratives Denken zu führen und autonome Werkzeuge zu verwenden, um Aufgabenziele zu erreichen.',
    agentShortDescription: 'Intelligenter Agent mit logischem Denken und autonomer Werkzeugnutzung',
    dropDSLToCreateApp: 'Ziehen Sie die DSL-Datei hierher, um die App zu erstellen',
  },
  editApp: 'App bearbeiten',
  editAppTitle: 'App-Informationen bearbeiten',
  editDone: 'App-Informationen wurden aktualisiert',
  editFailed: 'Aktualisierung der App-Informationen fehlgeschlagen',
  iconPicker: {
    ok: 'OK',
    cancel: 'Abbrechen',
    emoji: 'Emoji',
    image: 'Bild',
  },
  switch: 'Zu Workflow-Orchestrierung wechseln',
  switchTipStart: 'Eine neue App-Kopie wird für Sie erstellt, und die neue Kopie wird zur Workflow-Orchestrierung wechseln. Die neue Kopie wird ',
  switchTip: 'nicht erlauben',
  switchTipEnd: ' zur Basis-Orchestrierung zurückzuwechseln.',
  switchLabel: 'Die zu erstellende App-Kopie',
  removeOriginal: 'Ursprüngliche App löschen',
  switchStart: 'Wechsel starten',
  typeSelector: {
    all: 'ALLE Typen',
    chatbot: 'Chatbot',
    agent: 'Agent',
    workflow: 'Workflow',
    completion: 'Vervollständigung',
    advanced: 'Chatflow',
  },
  tracing: {
    title: 'Anwendungsleistung nachverfolgen',
    description: 'Konfiguration eines Drittanbieter-LLMOps-Anbieters und Nachverfolgung der Anwendungsleistung.',
    config: 'Konfigurieren',
    collapse: 'Einklappen',
    expand: 'Ausklappen',
    tracing: 'Nachverfolgung',
    disabled: 'Deaktiviert',
    disabledTip: 'Bitte zuerst den Anbieter konfigurieren',
    enabled: 'In Betrieb',
    tracingDescription: 'Erfassung des vollständigen Kontexts der Anwendungsausführung, einschließlich LLM-Aufrufe, Kontext, Prompts, HTTP-Anfragen und mehr, auf einer Nachverfolgungsplattform von Drittanbietern.',
    configProviderTitle: {
      configured: 'Konfiguriert',
      notConfigured: 'Anbieter konfigurieren, um Nachverfolgung zu aktivieren',
      moreProvider: 'Weitere Anbieter',
    },
    arize: {
      title: 'Arize',
      description: 'Unternehmensgerechte LLM-Observierbarkeit, Online- und Offline-Bewertung, Überwachung und Experimentierung—unterstützt durch OpenTelemetry. Speziell für LLM- und agentenbasierte Anwendungen entwickelt.',
    },
    phoenix: {
      title: 'Phoenix',
      description: 'Open-Source- und OpenTelemetry-basierte Plattform für Observierbarkeit, Bewertung, Prompt-Engineering und Experimentierung für Ihre LLM-Workflows und -Agenten.',
    },
    langsmith: {
      title: 'LangSmith',
      description: 'Eine All-in-One-Entwicklerplattform für jeden Schritt des LLM-gesteuerten Anwendungslebenszyklus.',
    },
    langfuse: {
      title: 'Langfuse',
      description: 'Traces, Bewertungen, Prompt-Management und Metriken zum Debuggen und Verbessern Ihrer LLM-Anwendung.',
    },
    inUse: 'In Verwendung',
    configProvider: {
      title: 'Konfigurieren ',
      placeholder: 'Geben Sie Ihren {{key}} ein',
      project: 'Projekt',
      publicKey: 'Öffentlicher Schlüssel',
      secretKey: 'Geheimer Schlüssel',
      viewDocsLink: '{{key}}-Dokumentation ansehen',
      removeConfirmTitle: '{{key}}-Konfiguration entfernen?',
      removeConfirmContent: 'Die aktuelle Konfiguration wird verwendet. Das Entfernen wird die Nachverfolgungsfunktion ausschalten.',
    },
    view: 'Ansehen',
    opik: {
      description: 'Opik ist eine Open-Source-Plattform zum Bewerten, Testen und Überwachen von LLM-Anwendungen.',
      title: 'Opik',
    },
    weave: {
      title: 'Weben',
      description: 'Weave ist eine Open-Source-Plattform zur Bewertung, Testung und Überwachung von LLM-Anwendungen.',
    },
    aliyun: {
      title: 'Cloud-Monitor',
      description: 'Die vollständig verwaltete und wartungsfreie Observability-Plattform von Alibaba Cloud ermöglicht eine sofortige Überwachung, Verfolgung und Bewertung von Dify-Anwendungen.',
    },
  },
  answerIcon: {
    descriptionInExplore: 'Gibt an, ob das web app Symbol zum Ersetzen 🤖 in Explore verwendet werden soll',
    title: 'Verwenden Sie das web app Symbol, um es zu ersetzen 🤖',
    description: 'Gibt an, ob das web app Symbol zum Ersetzen 🤖 in der freigegebenen Anwendung verwendet werden soll',
  },
  importFromDSLUrlPlaceholder: 'DSL-Link hier einfügen',
  duplicate: 'Duplikat',
  importFromDSL: 'Import von DSL',
  importDSL: 'DSL-Datei importieren',
  importFromDSLUrl: 'Von URL',
  exportFailed: 'Fehler beim Exportieren von DSL.',
  importFromDSLFile: 'Aus DSL-Datei',
  export: 'DSL exportieren',
  duplicateTitle: 'App duplizieren',
  mermaid: {
    handDrawn: 'Handgezeichnet',
    classic: 'Klassisch',
  },
  openInExplore: 'In Explore öffnen',
  newAppFromTemplate: {
    sidebar: {
      Recommended: 'Empfohlen',
      Assistant: 'Assistent',
      Writing: 'Schrift',
      Workflow: 'Arbeitsablauf',
      Programming: 'Programmieren',
      Agent: 'Agent',
      HR: 'HR',
    },
    byCategories: 'NACH KATEGORIEN',
    searchAllTemplate: 'Alle Vorlagen durchsuchen...',
  },
  showMyCreatedAppsOnly: 'Nur meine erstellten Apps anzeigen',
  appSelector: {
    placeholder: 'Wählen Sie eine App aus...',
    params: 'APP-PARAMETER',
    label: 'APP',
    noParams: 'Keine Parameter erforderlich',
  },
  structOutput: {
    required: 'Erforderlich',
    structured: 'Strukturiert',
    structuredTip: 'Strukturierte Ausgaben ist eine Funktion, die sicherstellt, dass das Modell immer Antworten generiert, die Ihrem bereitgestellten JSON-Schema entsprechen.',
    modelNotSupportedTip: 'Das aktuelle Modell unterstützt diese Funktion nicht und wird automatisch auf Eingabeinjektion heruntergestuft.',
    modelNotSupported: 'Modell nicht unterstützt',
    configure: 'Konfigurieren',
    notConfiguredTip: 'Die strukturierte Ausgabe wurde bisher nicht konfiguriert.',
    moreFillTip: 'Maximal 10 Ebenen der Verschachtelung anzeigen',
    LLMResponse: 'LLM-Antwort',
  },
  accessItemsDescription: {
    anyone: 'Jeder kann auf die Webanwendung zugreifen.',
    specific: 'Nur bestimmte Gruppen oder Mitglieder können auf die Webanwendung zugreifen.',
    organization: 'Jeder in der Organisation kann auf die Webanwendung zugreifen.',
    external: 'Nur authentifizierte externe Benutzer können auf die Webanwendung zugreifen.',
  },
  accessControlDialog: {
    accessItems: {
      anyone: 'Jeder mit dem Link',
      specific: 'Spezifische Gruppen oder Mitglieder',
      organization: 'Nur Mitglieder innerhalb des Unternehmens',
      external: 'Authentifizierte externe Benutzer',
    },
    operateGroupAndMember: {
      searchPlaceholder: 'Gruppen und Mitglieder suchen',
      allMembers: 'Alle Mitglieder',
      expand: 'Erweitern',
      noResult: 'Kein Ergebnis',
    },
    title: 'Zugriffskontrolle für Webanwendungen',
    description: 'Webanwendungszugriffsberechtigungen festlegen',
    accessLabel: 'Wer hat Zugang',
    groups_one: '{{count}} GRUPPE',
    members_one: '{{count}} MITGLIED',
    members_other: '{{count}} MITGLIEDER',
    noGroupsOrMembers: 'Keine Gruppen oder Mitglieder ausgewählt',
    webAppSSONotEnabledTip: 'Bitte kontaktieren Sie den Unternehmensadministrator, um die Authentifizierungsmethode der Webanwendung zu konfigurieren.',
    updateSuccess: 'Erfolgreich aktualisiert',
    groups_other: '{{count}} GRUPPEN',
  },
  publishApp: {
    title: 'Wer kann auf die Webanwendung zugreifen?',
    notSetDesc: 'Derzeit kann niemand auf die Webanwendung zugreifen. Bitte setzen Sie die Berechtigungen.',
    notSet: 'Nicht festgelegt',
  },
  accessControl: 'Zugriffskontrolle für Webanwendungen',
  noAccessPermission: 'Keine Berechtigung zum Zugriff auf die Webanwendung',
  maxActiveRequests: 'Maximale gleichzeitige Anfragen',
  maxActiveRequestsPlaceholder: 'Geben Sie 0 für unbegrenzt ein',
  maxActiveRequestsTip: 'Maximale Anzahl gleichzeitiger aktiver Anfragen pro App (0 für unbegrenzt)',
}

export default translation
