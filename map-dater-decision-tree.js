/* Map Dater Decision Tree (USSR-first)
 * Usage:
 *   1) Include this file in index.html BEFORE your app.js:
 *        <script src="map-dater-decision-tree.js"></script>
 *        <script src="app.js"></script>
 *   2) In app.js, read:
 *        const NODES = window.MapDaterTree.nodes;
 *        let currentId = window.MapDaterTree.start;
 */

window.MapDaterTree = {
  start: "Q1",
  nodes: {
    /* --- A. Top-level anchor --- */
    Q1: { id: "Q1", section: "Anchor", text: "Does the Soviet Union (USSR) exist on the map?",
      answers: [
        { label: "Yes", next: "B_intro" },
        { label: "No",  next: "Q2" },
        { label: "Not sure", next: "Q2" }
      ]
    },
    Q2: { id: "Q2", section: "Anchor", text: "Does the Ottoman Empire exist?",
      answers: [
        { label: "Yes", next: "D_intro" },
        { label: "No",  next: "Q3" },
        { label: "Not sure", next: "Q3" }
      ]
    },
    Q3: { id: "Q3", section: "Anchor", text: "Is Saudi Arabia shown by that name?",
      answers: [
        { label: "Yes", next: "C_intro" },
        { label: "No",  next: "D_intro" },
        { label: "Not sure", next: "Hint_split" }
      ]
    },
    Hint_split: { id: "Hint_split", section: "Hint",
      text: "If you're not sure, try quick tells: Do you see South Sudan (2011+)? Do you see Zaire (1971–1997)?",
      answers: [
        { label: "I see South Sudan", next: "R22" },
        { label: "I see Zaire", next: "R27" },
        { label: "Neither / keep going", next: "D_intro" }
      ]
    },

    /* --- B. USSR exists (1922–1991) --- */
    B_intro: { id: "B_intro", section: "1922–1991", text: "USSR exists → 1922–1991. Let's narrow further.",
      answers: [ { label: "Continue", next: "Q_B1_SA" } ]
    },
    Q_B1_SA: { id: "Q_B1_SA", section: "1922–1991", text: "Is Saudi Arabia shown by that name?",
      answers: [
        { label: "Yes", next: "Q_B2_Pakistan" },
        { label: "No",  next: "R1" },
        { label: "Not sure", next: "Q_B2_Pakistan" }
      ]
    },
    Q_B2_Pakistan: { id: "Q_B2_Pakistan", section: "1922–1991", text: "Is Pakistan present?",
      answers: [
        { label: "Yes", next: "Q_B3_Bangladesh" },
        { label: "No",  next: "Q_B3_Bangladesh" },
        { label: "Not sure", next: "Q_B3_Bangladesh" }
      ]
    },
    Q_B3_Bangladesh: { id: "Q_B3_Bangladesh", section: "1922–1991", text: "Is Bangladesh present?",
      answers: [
        { label: "Yes", next: "Q_B4_Korea" },
        { label: "No",  next: "Q_B4_Korea" },
        { label: "Not sure", next: "Q_B4_Korea" }
      ]
    },
    Q_B4_Korea: { id: "Q_B4_Korea", section: "1922–1991", text: "Is Korea split (North and South)?",
      answers: [
        { label: "Yes", next: "Q_B5_Vietnam" },
        { label: "No",  next: "Q_B5_Vietnam" },
        { label: "Not sure", next: "Q_B5_Vietnam" }
      ]
    },
    Q_B5_Vietnam: { id: "Q_B5_Vietnam", section: "1922–1991", text: "How many Vietnams are shown?",
      answers: [
        { label: "Two (North & South)", next: "R2" },
        { label: "One unified Vietnam",  next: "R3" },
        { label: "One but it's DRV/odd", next: "R4" },
        { label: "Not sure", next: "Q_B6_Kampuchea" }
      ]
    },
    Q_B6_Kampuchea: { id: "Q_B6_Kampuchea", section: "1922–1991", text: "Is Cambodia labelled 'Kampuchea'?",
      answers: [
        { label: "Yes", next: "R5" },
        { label: "No",  next: "Q_B7_PersiaIran" },
        { label: "Not sure", next: "Q_B7_PersiaIran" }
      ]
    },
    Q_B7_PersiaIran: { id: "Q_B7_PersiaIran", section: "1922–1991", text: "Is the country called 'Persia' or 'Iran'?",
      answers: [
        { label: "Persia", next: "R6" },
        { label: "Iran",   next: "Q_B8_Canada" },
        { label: "Not sure", next: "Q_B8_Canada" }
      ]
    },
    Q_B8_Canada: { id: "Q_B8_Canada", section: "1922–1991", text: "Does Canada include Newfoundland & Labrador?",
      answers: [
        { label: "Yes", next: "Q_B9_UAR" },
        { label: "No",  next: "R9" },
        { label: "Not sure", next: "Q_B9_UAR" }
      ]
    },
    Q_B9_UAR: { id: "Q_B9_UAR", section: "1922–1991", text: "Is there a 'United Arab Republic' (Egypt + Syria)?",
      answers: [
        { label: "Yes", next: "R10" },
        { label: "No",  next: "Q_B10_Tanganyika" },
        { label: "Not sure", next: "Q_B10_Tanganyika" }
      ]
    },
    Q_B10_Tanganyika: { id: "Q_B10_Tanganyika", section: "1922–1991", text: "South of Lake Victoria: Tanganyika/Tanzania?",
      answers: [
        { label: "British Tanganyika Territory", next: "R11" },
        { label: "Tanganyika (independent)", next: "R12" },
        { label: "Tanzania", next: "R13" },
        { label: "Not sure", next: "Q_B11_USA_town" }
      ]
    },
    Q_B11_USA_town: { id: "Q_B11_USA_town", section: "1922–1991", text: "On I-25 between Albuquerque & El Paso:",
      answers: [
        { label: "Hot Springs", next: "R14" },
        { label: "Truth or Consequences", next: "R15" },
        { label: "Not sure", next: "Q_B12_Micronesia" }
      ]
    },
    Q_B12_Micronesia: { id: "Q_B12_Micronesia", section: "1922–1991", text: "Capital of Micronesia shown as:",
      answers: [
        { label: "Kolonia", next: "R16" },
        { label: "Palikir", next: "R17" },
        { label: "Not sure", next: "Q_B13_UV_BF" }
      ]
    },
    Q_B13_UV_BF: { id: "Q_B13_UV_BF", section: "1922–1991", text: "Is 'Upper Volta' or 'Burkina Faso' shown?",
      answers: [
        { label: "Upper Volta",  next: "R18" },
        { label: "Burkina Faso", next: "R19" },
        { label: "Not sure", next: "Q_B14_Yemen_Germany" }
      ]
    },
    Q_B14_Yemen_Germany: { id: "Q_B14_Yemen_Germany", section: "1922–1991", text: "How many Yemens + how many Germanys?",
      answers: [
        { label: "Four total", next: "R20" },
        { label: "Two total",  next: "R21" },
        { label: "Not sure", next: "R3" }
      ]
    },

    /* --- C. Post-1991 --- */
    C_intro: { id: "C_intro", section: "1991–present", text: "Likely 1991–present. Let's refine.",
      answers: [ { label: "Continue", next: "Q_C1_Sudan" } ]
    },
    Q_C1_Sudan: { id: "Q_C1_Sudan", section: "1991–present", text: "Are there two Sudans (Sudan & South Sudan)?",
      answers: [
        { label: "Yes", next: "R22" },
        { label: "No",  next: "Q_C2_SerbiaMontenegro" },
        { label: "Not sure", next: "Q_C2_SerbiaMontenegro" }
      ]
    },
    Q_C2_SerbiaMontenegro: { id: "Q_C2_SerbiaMontenegro", section: "1991–present", text: "Serbia & Montenegro appear as:",
      answers: [
        { label: "One country (Serbia and Montenegro)", next: "R24" },
        { label: "Two separate countries", next: "R25" },
        { label: "Part of 'Yugoslavia' or similar", next: "Q_C3_Timor" },
        { label: "Not sure", next: "Q_C3_Timor" }
      ]
    },
    Q_C3_Timor: { id: "Q_C3_Timor", section: "1991–present", text: "Is East Timor / Timor-Leste independent?",
      answers: [
        { label: "Yes", next: "R26" },
        { label: "No",  next: "Q_C4_HK_Zaire" },
        { label: "Not sure", next: "Q_C4_HK_Zaire" }
      ]
    },
    Q_C4_HK_Zaire: { id: "Q_C4_HK_Zaire", section: "1991–present", text: "Clues: Hong Kong handover or Zaire?",
      answers: [
        { label: "Hong Kong under PRC (post-1997)", next: "R28" },
        { label: "Zaire shown", next: "R27" },
        { label: "Neither / Not sure", next: "Q_C5_Crimea" }
      ]
    },
    Q_C5_Crimea: { id: "Q_C5_Crimea", section: "1991–present", text: "Is Crimea marked disputed/annexed?",
      answers: [
        { label: "Yes", next: "R23" },
        { label: "No / Not sure", next: "R25" }
      ]
    },

    /* --- D. Pre-1922 (older maps) --- */
    D_intro: { id: "D_intro", section: "Pre-1922", text: "Likely pre-1922. Let's refine with older features.",
      answers: [ { label: "Continue", next: "Q_D1_AH" } ]
    },
    Q_D1_AH: { id: "Q_D1_AH", section: "Pre-1922", text: "Is Austria-Hungary shown as one country?",
      answers: [
        { label: "Yes", next: "R30" },
        { label: "No",  next: "Q_D2_Norway" },
        { label: "Not sure", next: "Q_D2_Norway" }
      ]
    },
    Q_D2_Norway: { id: "Q_D2_Norway", section: "Pre-1922", text: "Is Norway part of Sweden?",
      answers: [
        { label: "Yes", next: "R31" },
        { label: "No",  next: "Q_D3_SouthAfrica" },
        { label: "Not sure", next: "Q_D3_SouthAfrica" }
      ]
    },
    Q_D3_SouthAfrica: { id: "Q_D3_SouthAfrica", section: "Pre-1922", text: "Does the Union of South Africa exist?",
      answers: [
        { label: "Yes", next: "R32" },
        { label: "No",  next: "Q_D4_Albania" },
        { label: "Not sure", next: "Q_D4_Albania" }
      ]
    },
    Q_D4_Albania: { id: "Q_D4_Albania", section: "Pre-1922", text: "Is Albania independent?",
      answers: [
        { label: "Yes", next: "R33" },
        { label: "No",  next: "Q_D5_ConstIstan" },
        { label: "Not sure", next: "Q_D5_ConstIstan" }
      ]
    },
    Q_D5_ConstIstan: { id: "Q_D5_ConstIstan", section: "Pre-1922", text: "Is the city labelled Constantinople (not Istanbul)?",
      answers: [
        { label: "Yes", next: "R29" },
        { label: "No",  next: "Q_D6_Bolivia" },
        { label: "Not sure", next: "Q_D6_Bolivia" }
      ]
    },
    Q_D6_Bolivia: { id: "Q_D6_Bolivia", section: "Pre-1922", text: "Is Bolivia landlocked (no coastline)?",
      answers: [
        { label: "Yes", next: "R35" },
        { label: "No",  next: "R36" },
        { label: "Not sure", next: "Q_D7_Budapest" }
      ]
    },
    Q_D7_Budapest: { id: "Q_D7_Budapest", section: "Pre-1922", text: "Does the map say 'Budapest' or 'Buda and Pest'?",
      answers: [
        { label: "Buda and Pest (separate)", next: "R37" },
        { label: "Budapest", next: "R38" },
        { label: "Not sure", next: "Q_D8_RussiaSea" }
      ]
    },
    Q_D8_RussiaSea: { id: "Q_D8_RussiaSea", section: "Pre-1922", text: "Does Russia border the Sea of Japan?",
      answers: [
        { label: "No", next: "R39" },
        { label: "Yes", next: "R40" },
        { label: "Not sure", next: "Q_D9_USBorder" }
      ]
    },
    Q_D9_USBorder: { id: "Q_D9_USBorder", section: "Pre-1922", text: "U.S. southern border: pre-Gadsden or post-Gadsden Purchase?",
      answers: [
        { label: "Pre-Gadsden", next: "R41" },
        { label: "Post-Gadsden", next: "R42" },
        { label: "Not sure", next: "Q_D10_Texas" }
      ]
    },
    Q_D10_Texas: { id: "Q_D10_Texas", section: "Pre-1922", text: "Texas is…",
      answers: [
        { label: "Part of Mexico", next: "R43" },
        { label: "Independent Republic", next: "R44" },
        { label: "A U.S. state", next: "R45" },
        { label: "Not sure", next: "Q_D11_Florida" }
      ]
    },
    Q_D11_Florida: { id: "Q_D11_Florida", section: "Pre-1922", text: "Florida is part of…",
      answers: [
        { label: "Spain", next: "R46" },
        { label: "United States", next: "R47" },
        { label: "Not sure", next: "Q_D12_GranCol" }
      ]
    },
    Q_D12_GranCol: { id: "Q_D12_GranCol", section: "Pre-1922", text: "Venezuela and Ecuador appear…",
      answers: [
        { label: "Separate countries", next: "R48" },
        { label: "As part of 'Gran Colombia'", next: "R49" },
        { label: "Not sure", next: "Q_D13_Paraguay" }
      ]
    },
    Q_D13_Paraguay: { id: "Q_D13_Paraguay", section: "Pre-1922", text: "Paraguay is…",
      answers: [
        { label: "Independent", next: "R50" },
        { label: "Not clearly independent", next: "R29" },
        { label: "Not sure", next: "R29" }
      ]
    },

    /* --- Results (selection) --- */
    R1:  { id: "R1",  result: true, title: "1922–1932", details: "USSR exists but Saudi Arabia not yet unified." },
    R2:  { id: "R2",  result: true, title: "~1954–1976", details: "Vietnam split into North & South (Geneva Accords to reunification)." },
    R3:  { id: "R3",  result: true, title: "1976–1991", details: "Unified Vietnam during the USSR era." },
    R4:  { id: "R4",  result: true, title: "~1945–1954", details: "Early DRV era before the North/South split." },
    R5:  { id: "R5",  result: true, title: "~1975–1989", details: "Cambodia labelled 'Kampuchea'." },
    R6:  { id: "R6",  result: true, title: "1922–1935", details: "Iran still called Persia." },
    R9:  { id: "R9",  result: true, title: "1922–1949", details: "Canada missing Newfoundland." },
    R10: { id: "R10", result: true, title: "1958–1961", details: "United Arab Republic exists." },
    R11: { id: "R11", result: true, title: "Pre-1961", details: "British Tanganyika Territory." },
    R12: { id: "R12", result: true, title: "1961–1964", details: "Independent Tanganyika." },
    R13: { id: "R13", result: true, title: "1964–1991", details: "Tanzania exists." },
    R14: { id: "R14", result: true, title: "~1948–1949", details: "Town still called Hot Springs." },
    R15: { id: "R15", result: true, title: "1950–1991", details: "Truth or Consequences exists." },
    R16: { id: "R16", result: true, title: "Pre-1989", details: "Micronesian capital Kolonia." },
    R17: { id: "R17", result: true, title: "1989–1991", details: "Micronesian capital Palikir." },
    R18: { id: "R18", result: true, title: "1960–1984", details: "Upper Volta era." },
    R19: { id: "R19", result: true, title: "1984–1991", details: "Burkina Faso before USSR collapse." },
    R20: { id: "R20", result: true, title: "1949–1990", details: "Two Germanys + two Yemens." },
    R21: { id: "R21", result: true, title: "1990–1991", details: "German reunification + unified Yemen." },
    R22: { id: "R22", result: true, title: "2011–present", details: "South Sudan independent." },
    R23: { id: "R23", result: true, title: "~2014–present", details: "Crimea annexed/disputed." },
    R24: { id: "R24", result: true, title: "2003–2006", details: "Serbia and Montenegro union." },
    R25: { id: "R25", result: true, title: "2006–present", details: "Serbia and Montenegro split." },
    R26: { id: "R26", result: true, title: "2002–present", details: "Timor-Leste independent." },
    R27: { id: "R27", result: true, title: "1971–1997", details: "Zaire period (DR Congo)." },
    R28: { id: "R28", result: true, title: "1997–present", details: "Hong Kong under PRC." },
    R29: { id: "R29", result: true, title: "Pre-1922", details: "Constantinople/Ottoman features." },
    R30: { id: "R30", result: true, title: "1867–1918", details: "Austria-Hungary exists." },
    R31: { id: "R31", result: true, title: "1814–1905", details: "Norway part of Sweden." },
    R32: { id: "R32", result: true, title: "1910–1922", details: "Union of South Africa." },
    R33: { id: "R33", result: true, title: "1912+", details: "Albania independent." },
    R35: { id: "R35", result: true, title: "Post-1879", details: "Bolivia landlocked." },
    R36: { id: "R36", result: true, title: "Pre-1879", details: "Bolivia with coastline." },
    R37: { id: "R37", result: true, title: "Pre-1873", details: "Buda & Pest separate." },
    R38: { id: "R38", result: true, title: "1873+", details: "Budapest unified." },
    R39: { id: "R39", result: true, title: "Pre-1858", details: "Russia not yet on Sea of Japan." },
    R40: { id: "R40", result: true, title: "1858+", details: "Russia reaches Pacific." },
    R41: { id: "R41", result: true, title: "Pre-1854", details: "Before Gadsden Purchase." },
    R42: { id: "R42", result: true, title: "1854+", details: "After Gadsden Purchase." },
    R43: { id: "R43", result: true, title: "1821–1836", details: "Texas part of Mexico." },
    R44: { id: "R44", result: true, title: "1836–1845", details: "Republic of Texas." },
    R45: { id: "R45", result: true, title: "1845+", details: "Texas in U.S." },
    R46: { id: "R46", result: true, title: "Pre-1821", details: "Florida under Spain." },
    R47: { id: "R47", result: true, title: "1821+", details: "Florida in U.S." },
    R48: { id: "R48", result: true, title: "Post-1830", details: "Venezuela/Ecuador separate." },
    R49: { id: "R49", result: true, title: "1819–1830", details: "Gran Colombia exists." },
    R50: { id: "R50", result: true, title: "1811+", details: "Paraguay independent." }
  }
};
