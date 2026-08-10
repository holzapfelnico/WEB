// ---------------------------------------------------------------------------
// Project data
// Per-project fields, filled in as content becomes available:
//   title          — project name
//   year           — e.g. "2024"
//   location       — e.g. "Munich, Germany"
//   type           — e.g. "Competition", "Thesis"
//   collaborators  — array of names, e.g. ["Jane Doe", "John Smith"]
//   text           — body/description text
// `hero` is what appears as a tile on the homepage grid.
// `media` is the full gallery for the project.
// File paths are plain, human-readable filenames — they get URL-encoded
// automatically at render time, so spaces/umlauts/parentheses are fine.
// ---------------------------------------------------------------------------

const projects = [
  {
    code: "0001",
    disabled: true,
    title: "",
    year: "",
    location: "",
    type: "",
    collaborators: [],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    hero: { type: "image", src: "starter_img/0001.jpg", alt: "Project 0001" },
    media: [
      { type: "image", src: "projects/0001/0001_1_Seite_1_ergebnis.webp", alt: "Project 0001 image 1" },
      { type: "image", src: "projects/0001/0001_1_Seite_2_ergebnis.webp", alt: "Project 0001 image 2" },
      { type: "image", src: "projects/0001/0001_1_Seite_3_ergebnis.webp", alt: "Project 0001 image 3" },
      { type: "image", src: "projects/0001/0001_3_ergebnis.webp", alt: "Project 0001 image 4" },
    ],
  },
  {
    code: "0002",
    disabled: true,
    title: "",
    year: "",
    location: "",
    type: "",
    collaborators: [],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    hero: { type: "image", src: "hero_img/hero_0002_ergebnis.webp", alt: "Project 0002" },
    media: [
      { type: "image", src: "projects/0002/Lageplan Grünwald_ergebnis.webp", alt: "Project 0002 Lageplan" },
      { type: "image", src: "projects/0002/Modell 1_ergebnis.webp", alt: "Project 0002 model view" },
      { type: "image", src: "projects/0002/Perspektive dos im Walde_ergebnis.webp", alt: "Project 0002 forest perspective" },
      { type: "image", src: "projects/0002/Perspektive Ring_ergebnis.webp", alt: "Project 0002 ring perspective" },
      { type: "image", src: "projects/0002/project0002_2 _ergebnis.webp", alt: "Project 0002 additional view" },
      { type: "image", src: "projects/0002/Schnitt_ergebnis.webp", alt: "Project 0002 section drawing" },
    ],
  },
  {
    code: "0003",
    title: "",
    year: "",
    location: "",
    type: "",
    collaborators: [],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    hero: { type: "image", src: "hero_img/hero_0003_ergebnis.webp", alt: "Project 0003" },
    media: [
      { type: "image", src: "projects/0003/project0003_01_ergebnis.webp", alt: "Project 0003 image 01" },
      { type: "image", src: "projects/0003/project0003_02_ergebnis.webp", alt: "Project 0003 image 02" },
      { type: "image", src: "projects/0003/project0003_03_ergebnis.webp", alt: "Project 0003 image 03" },
      { type: "image", src: "projects/0003/project0003_04_ergebnis.webp", alt: "Project 0003 image 04" },
      { type: "image", src: "projects/0003/project0003_05_ergebnis.webp", alt: "Project 0003 image 05" },
      { type: "image", src: "projects/0003/project0003_06_ergebnis.webp", alt: "Project 0003 image 06" },
      { type: "image", src: "projects/0003/project0003_07_ergebnis.webp", alt: "Project 0003 image 07" },
      { type: "image", src: "projects/0003/project0003_08_ergebnis.webp", alt: "Project 0003 image 08" },
      { type: "image", src: "projects/0003/project0003_09_ergebnis.webp", alt: "Project 0003 image 09" },
      { type: "image", src: "projects/0003/project0003_10_ergebnis.webp", alt: "Project 0003 animation 10" },
      { type: "image", src: "projects/0003/project0003_11_ergebnis.webp", alt: "Project 0003 image 11" },
      { type: "image", src: "projects/0003/project0003_12_ergebnis.webp", alt: "Project 0003 image 12" },
      { type: "image", src: "projects/0003/project0003_13_ergebnis.webp", alt: "Project 0003 image 13" },
      { type: "image", src: "projects/0003/project0003_14_ergebnis.webp", alt: "Project 0003 image 14" },
      { type: "image", src: "projects/0003/project0003_15_ergebnis.webp", alt: "Project 0003 image 15" },
    ],
  },
  {
    code: "0004",
    title: "0004_STACKED // MAGAZINE STANDS",
    year: "",
    date: "01-2024",
    location: "",
    type: "",
    collaborators: [],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    hero: { type: "image", src: "hero_img/hero_0004_ergebnis.webp", alt: "Project 0004" },
    media: [
      { type: "image", src: "projects/0004/0004_01_ergebnis.webp", alt: "Project 0004 image 01" },
      { type: "video", src: "projects/0004/0004_03.mp4", poster: "projects/0004/0004_01_ergebnis.webp", alt: "Project 0004 video 03" },
      { type: "image", src: "projects/0004/0004_04_ergebnis.webp", alt: "Project 0004 image 04" },
      { type: "image", src: "projects/0004/0004_05_ergebnis.webp", alt: "Project 0004 image 05" },
      { type: "image", src: "projects/0004/0004_06_ergebnis.webp", alt: "Project 0004 image 06", invert: false },
      { type: "image", src: "projects/0004/0004_07_ergebnis.webp", alt: "Project 0004 image 07" },
      { type: "image", src: "projects/0004/0004_08_ergebnis.webp", alt: "Project 0004 image 08" },
      { type: "image", src: "projects/0004/project0004_09_ergebnis.webp", alt: "Project 0004 image 09" },
    ],
  },
  {
    code: "0005",
    title: "0005_RAVAGES OF TIME // POPUP THEATRE ONTOP OF A RUIN",
    year: "",
    date: "06-2023",
    location: "",
    type: "",
    collaborators: [],
    text: "The architectural installation \"Ravages of Time\" addresses the decay of historical sites over time and emphasizes the significance of maintenance and revitalization projects. Throughout its duration, the installation provides a space for music and theater. The hall on the ground floor of the ruin can be utilized as an exhibition space or cloakroom, depending on the event. A spiral staircase restores the lost connection to the tower's roof.\nResting on the historical outer walls of Torre Rinalda is a lightweight construction of steel pipes. These form a framework that abstractly extends the ruin and restores the historical proportions of the watchtower. A textile attached to the framework makes visible the environmental influences that have destructed the ruin over time. The space enveloped by the installation accommodates both spectators and a stage.\nThe flexible steel construction allows for easy assembly and disassembly, adapting effortlessly to various ruins. In this way, other tower ruins along the coast of Apulia could also be transformed into temporary cultural sites.",
    hero: { type: "image", src: "hero_img/hero_0005_ergebnis.webp", alt: "Project 0005" },
    media: [
      { type: "image", src: "projects/0005/0005_01_ergebnis.webp", alt: "Project 0005 image 01" },
      { type: "image", src: "projects/0005/0005_02_ergebnis.webp", alt: "Project 0005 image 02" },
      { type: "image", src: "projects/0005/0005_03_ergebnis.webp", alt: "Project 0005 image 03" },
      { type: "image", src: "projects/0005/0005_04_ergebnis.webp", alt: "Project 0005 image 04" },
      { type: "image", src: "projects/0005/0005_05_ergebnis.webp", alt: "Project 0005 image 05" },
      { type: "image", src: "projects/0005/0005_06_ergebnis.webp", alt: "Project 0005 image 06" },
      { type: "image", src: "projects/0005/0005_07_ergebnis.webp", alt: "Project 0005 image 07" },
      { type: "image", src: "projects/0005/0005_08_ergebnis.webp", alt: "Project 0005 image 08" },
      { type: "image", src: "projects/0005/0005_09_ergebnis.webp", alt: "Project 0005 image 09" },
      { type: "image", src: "projects/0005/0005_10_ergebnis.webp", alt: "Project 0005 image 10" },
      { type: "image", src: "projects/0005/0005_11_ergebnis.webp", alt: "Project 0005 image 11" },
      { type: "image", src: "projects/0005/0005_12_ergebnis.webp", alt: "Project 0005 image 12" },
      { type: "image", src: "projects/0005/0005_13_ergebnis.webp", alt: "Project 0005 image 13" },
    ],
  },
  {
    code: "0006",
    title: "0006_A HOUSE IN MOTION // TRANSFORMING A 1960s CHURCH INTO A ACROBATS HOUSING",
    year: "2024",
    date: "02-2024",
    location: "Munich",
    type: "",
    collaborators: ["Lotte Becher"],
    text: "St. Mauritius Church, constructed in response to growing congregations in the 1960s, initially began as a simple tent structure and gradually developed into a permanent building in the course of broader societal transformations. Today, however, the church is confronted with an opposing trend: declining membership and a reduced demand for ecclesiastical space. While society has continuously evolved, the architecture of the church has remained a snapshot of its time of origin—an edifice in stasis. With our project, we reintroduce movement into this space. At times, that which appears immobile can, in fact, be transformed. The design proposes a situational and fragmentary approach to the existing structure. The airspace is reimagined as a lived space. Through this process of transformation, a house for female circus artists emerges. The church forms part of an urban ensemble in which diverse building functions are arranged along a central axis of movement. This axis connects green spaces from east to west, creating a vibrant and highly frequented environment.\nThe central atrium constitutes the most public area of the ensemble and is activated by a café and a canteen. A large swing installation offers the public a playful point of entry into the world of acrobatics. The former parish center is converted into a rehearsal space with an integrated water basin, while the church space to the south becomes both an arena and a training area for acrobates. A suspended circulation structure within the church makes the vertical volume accessible and serves as a launch point for trapeze, rope, and aerial silk performers.\nLightweight insertions densify the side aisles and create new programmatic zones. The arena connects, via shared corner spaces, to the more private areas of the building, which accommodate sleeping quarters and sanitary facilities. Externally, the building is extended by an open winter garden element that functions as a circulation space. This addition dissolves the introverted character of the existing façade and establishes a dialogue with the surrounding orchard meadow. A house in motion.",
    hero: { type: "image", src: "hero_img/hero_0006_ergebnis.webp", alt: "Project 0006" },
    media: [
      { type: "image", src: "projects/0006/0006_01_ergebnis.webp", alt: "Project 0006 image 01" },
      { type: "image", src: "projects/0006/0006_02_ergebnis.webp", alt: "Project 0006 image 02" },
      { type: "image", src: "projects/0006/0006_03_ergebnis.webp", alt: "Project 0006 image 03" },
      { type: "image", src: "projects/0006/0006_04_ergebnis.webp", alt: "Project 0006 image 04" },
      { type: "image", src: "projects/0006/0006_08_ergebnis.webp", alt: "Project 0006 image 08" },
      { type: "image", src: "projects/0006/0006_09_ergebnis.webp", alt: "Project 0006 image 09" },
      { type: "image", src: "projects/0006/0006_10_ergebnis.webp", alt: "Project 0006 image 10" },
      { type: "image", src: "projects/0006/0006_11_ergebnis.webp", alt: "Project 0006 image 11" },
      { type: "image", src: "projects/0006/0006_12_ergebnis.webp", alt: "Project 0006 image 12" },
      { type: "image", src: "projects/0006/0006_13_ergebnis.webp", alt: "Project 0006 image 13" },
      { type: "image", src: "projects/0006/0006_14_ergebnis.webp", alt: "Project 0006 image 14" },
      { type: "image", src: "projects/0006/0006_15_ergebnis.webp", alt: "Project 0006 image 15" },
      { type: "image", src: "projects/0006/0006_16_ergebnis.webp", alt: "Project 0006 image 16" },
      { type: "image", src: "projects/0006/0006_17_ergebnis.webp", alt: "Project 0006 image 17" },
      { type: "image", src: "projects/0006/0006_18_ergebnis.webp", alt: "Project 0006 image 18" },
      { type: "image", src: "projects/0006/0006_19_ergebnis.webp", alt: "Project 0006 image 19" },
      { type: "image", src: "projects/0006/0006_20_ergebnis.webp", alt: "Project 0006 image 20" },
    ],
  },
  {
    code: "0007",
    title: "",
    year: "",
    location: "",
    type: "",
    collaborators: [],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    hero: { type: "image", src: "hero_img/hero_0007_ergebnis.webp", alt: "Project 0007" },
    media: [
      { type: "image", src: "projects/0007/0007_01_ergebnis.webp", alt: "Project 0007 image 01" },
      { type: "image", src: "projects/0007/0007_02_ergebnis.webp", alt: "Project 0007 image 02" },
      { type: "image", src: "projects/0007/0007_03_ergebnis.webp", alt: "Project 0007 image 03" },
      { type: "image", src: "projects/0007/0007_04_ergebnis.webp", alt: "Project 0007 image 04" },
      { type: "image", src: "projects/0007/0007_05_ergebnis.webp", alt: "Project 0007 image 05" },
      { type: "image", src: "projects/0007/0007_06_ergebnis.webp", alt: "Project 0007 image 06" },
      { type: "image", src: "projects/0007/0007_07_ergebnis.webp", alt: "Project 0007 image 07" },
      { type: "image", src: "projects/0007/0007_08_ergebnis.webp", alt: "Project 0007 image 08" },
      { type: "image", src: "projects/0007/0007_09_ergebnis.webp", alt: "Project 0007 image 09" },
      { type: "image", src: "projects/0007/0007_10_ergebnis.webp", alt: "Project 0007 image 10" },
      { type: "image", src: "projects/0007/0007_11_ergebnis.webp", alt: "Project 0007 image 11" },
      { type: "image", src: "projects/0007/0007_12_ergebnis.webp", alt: "Project 0007 image 12" },
    ],
  },
  {
    code: "0008",
    title: "0008_CONVIVIUM // SOLAWI_UNLEARNING CONVENIENCE",
    year: "2025",
    date: "07-2025",
    location: "Egenhofen",
    type: "",
    collaborators: ["Lotte Becher", "Clara Rimkeit"],
    text: "In preparation for the 2026 exhibition CONVIVIUM at the Architekturmuseum TUM in the Pinakothek der Moderne, a series of short films was produced exploring contemporary forms of food production. Set against a world shaped by increasingly efficient systems of production and transport, where the landscapes that sustain our food often remain invisible, the film focuses on solidarity-based agriculture as an alternative model. While this approach may appear less convenient than established supply chains, it reintroduces qualities that efficiency alone cannot provide: direct relationships between producers and consumers, seasonal awareness, and a tangible understanding of the labour embedded in food. Here, inconvenience becomes a value in itself, slowing down consumption and grounding it within the rhythms of a specific place.",
    hero: { type: "video", src: "hero_img/hero_0008.mp4", alt: "Project 0008" },
    media: [
      { type: "video", src: "projects/0008/project_0008_1.mp4", alt: "Project 0008 video 1" },
    ],
  },
  {
    code: "0009",
    title: "0009_PALIMPSEST // RESEARCH_RESOURCE_RESET_REUSE // TRANSFORMATION OF A COURTHOUSE",
    year: "2025",
    date: "02-2026",
    location: "Munich",
    type: "",
    collaborators: ["Jonathan Hanssen"],
    text: "The proposal pursues a transformative strategy of continuously adapting and extending the Munich Criminal Justice Centre. The existing building is understood as both a material bank and a constructive resource. From 39,000 m² of office space, a diverse housing mix comprising 370 apartments is created. New uses and building volumes emerge not through complete replacement, but through selective dismantling, redistribution, and on-site reuse of existing building components. This transformation unfolds in three phases:\n1. Research\nLiving in the Justice Centre – A Palimpsest investigates the constructive relationship between old and new across multiple scales. At the urban scale, the project examines the relationship between the large-scale complex, built in the 1970s, and its surrounding context. The Justice Centre, consisting of the main building along Nymphenburger Straße and the Public Prosecutor’s Office to the north, divides the site and reinforces a heterogeneous urban fabric in which different building typologies appear to coexist without meaningful spatial relationships due to their differing scales and lack of connection.\nThe main building is composed of a podium structure and the administrative tower above.\n2. Reset & Resource\nThe analysis of the existing structure reveals that the podium level, due to its excessive depth and unfavorable orientation, is only partially suitable for residential use. With a building depth of 31 metres, it is difficult to achieve economically viable and high-quality apartment layouts.\nBased on these findings, the podium is stripped back to its primary structural frame, while the floor slabs are reorganized. The podium is fundamentally restructured through a reduced building depth, adjusted floor-to-floor heights, and a clear structural grid tailored to future residential use. Despite the selective demolition, the total gross floor area increases to 41,000 m².\n3. Re-Pair & Reuse\nBuilding components recovered during the dismantling process are catalogued and reused according to their material properties. Green doors and yellow wall panels—formerly cladding elements of the building core—are reintroduced as non-permanent components within the interior fit-out of the apartments.\nThe precast reinforced concrete elements recovered from the dismantled podium are reintegrated into a new building volume—the Garden House—as reused structural and façade components. The Garden House adopts a 5-metre structural grid derived from the dimensions of the reclaimed façade elements. Only new vertical support elements are inserted as spacers between the layers of reused concrete components, ensuring floor-to-floor heights appropriate for residential use.\nPositioned typologically and in scale between the perimeter block buildings of the neighbourhood and the linear volumes of the Criminal Justice Centre, the Garden House acts as a mediating element within the ensemble. It translates the robust structural logic of the main building into a finer and more open architectural language, establishing both a spatial and constructive dialogue between different scales.\nThe floor plans of the main building are developed through the superimposition of the existing primary structure—columns, load-bearing core walls, and existing staircases—with a secondary, reconfigurable lightweight construction system. This generates three distinct residential typologies: living around (A) an existing shear wall, (B) an existing column, and (C) an existing staircase. These typologies represent adaptive variations within a permanent structural framework.\nRather than producing a homogenized transformation, the project results in a legible and reversible architectural assemblage in which old and new building elements enter into a deliberate spatial and constructive dialogue.",
    hero: { type: "image", src: "hero_img/hero_0009.gif", alt: "Project 0009" },
    media: [
      { type: "image", src: "projects/0009/0009_2_ergebnis.webp", alt: "Project 0009 image 2" },
      { type: "image", src: "projects/0009/0009_4_ergebnis.webp", alt: "Project 0009 image 4" },
      { type: "image", src: "projects/0009/0009_5_ergebnis.webp", alt: "Project 0009 image 5" },
      { type: "image", src: "projects/0009/0009_6_ergebnis.webp", alt: "Project 0009 image 6" },
      { type: "image", src: "projects/0009/0009_7_ergebnis.webp", alt: "Project 0009 image 7" },
      { type: "image", src: "projects/0009/0009_8_ergebnis.webp", alt: "Project 0009 image 8" },
      { type: "image", src: "projects/0009/0009_9_ergebnis.webp", alt: "Project 0009 image 9" },
      { type: "image", src: "projects/0009/0009_10_ergebnis.webp", alt: "Project 0009 image 10" },
      { type: "image", src: "projects/0009/0009_11_ergebnis.webp", alt: "Project 0009 image 11" },
      { type: "image", src: "projects/0009/0009_12_ergebnis.webp", alt: "Project 0009 image 12" },
      { type: "image", src: "projects/0009/0009_13_ergebnis.webp", alt: "Project 0009 image 13" },
      { type: "image", src: "projects/0009/0009_14_ergebnis.webp", alt: "Project 0009 image 14" },
      { type: "image", src: "projects/0009/0009_15_ergebnis.webp", alt: "Project 0009 image 15" },
      { type: "image", src: "projects/0009/0009_16_ergebnis.webp", alt: "Project 0009 image 16" },
      { type: "image", src: "projects/0009/0009_17_ergebnis.webp", alt: "Project 0009 image 17" },
      { type: "image", src: "projects/0009/0009_18_ergebnis.webp", alt: "Project 0009 image 18" },
      { type: "image", src: "projects/0009/0009_19_ergebnis.webp", alt: "Project 0009 image 19" },
      { type: "image", src: "projects/0009/0009_20_ergebnis.webp", alt: "Project 0009 image 20" },
      { type: "image", src: "projects/0009/0009_21_ergebnis.webp", alt: "Project 0009 image 21" },
      { type: "image", src: "projects/0009/0009_22_ergebnis.webp", alt: "Project 0009 image 22" },
      { type: "image", src: "projects/0009/0009_23_ergebnis.webp", alt: "Project 0009 image 23" },
      { type: "image", src: "projects/0009/0009_24_ergebnis.webp", alt: "Project 0009 image 24" },
    ],
  },
  {
    code: "0010",
    title: "0010_1860 MUNICH E.V._A NEW GYMNASIUM IN TIMBER",
    year: "",
    date: "02-2026",
    location: "",
    type: "",
    collaborators: [],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    hero: { type: "image", src: "hero_img/hero_0010_ergebnis.webp", alt: "Project 0010" },
    media: [
      { type: "image", src: "projects/0010/0010_01_ergebnis.webp", alt: "Project 0010 image 1" },
      { type: "image", src: "projects/0010/0010_02_ergebnis.webp", alt: "Project 0010 image 2" },
      { type: "image", src: "projects/0010/0010_03_ergebnis.webp", alt: "Project 0010 image 3" },
      { type: "image", src: "projects/0010/0010_04_ergebnis.webp", alt: "Project 0010 image 4" },
      { type: "image", src: "projects/0010/0010_05_ergebnis.webp", alt: "Project 0010 image 5" },
      { type: "image", src: "projects/0010/0010_06_ergebnis.webp", alt: "Project 0010 image 6" },
      { type: "image", src: "projects/0010/0010_07_ergebnis.webp", alt: "Project 0010 image 7" },
      { type: "image", src: "projects/0010/0010_08_ergebnis.webp", alt: "Project 0010 image 8" },
      { type: "image", src: "projects/0010/0010_09_ergebnis.webp", alt: "Project 0010 image 9" },
      { type: "image", src: "projects/0010/0010_10_ergebnis.webp", alt: "Project 0010 image 10" },
      { type: "image", src: "projects/0010/0010_11_ergebnis.webp", alt: "Project 0010 image 11" },
      { type: "image", src: "projects/0010/0011_12_ergebnis.webp", alt: "Project 0010 image 12" },
      { type: "image", src: "projects/0010/0011_13_ergebnis.webp", alt: "Project 0010 image 13" },
      { type: "image", src: "projects/0010/0011_14_ergebnis.webp", alt: "Project 0010 image 14" },
      { type: "image", src: "projects/0010/0011_15_ergebnis.webp", alt: "Project 0010 image 15" },
      { type: "image", src: "projects/0010/0011_16_ergebnis.webp", alt: "Project 0010 image 16" },
    ],
  },
  {
    code: "0011",
    title: "0011_RADIATOR // RETHINKING FRITZ-PFLAUM HUT",
    year: "2026",
    date: "07-2026",
    location: "Tirol",
    type: "",
    collaborators: ["Laura Schieferdecker", "Jonas Wald"],
    text: "The project examines the labour and energy involved in transporting materials to the mountain. The design starts with the ascent. The existing woodshed is reinterpreted as the first resting point and is complemented by two additional elements: a water basin and a bench. Each constructed out of locally found materials. Together, these structure the path into spatial and temporal sequences, framing the ascent as an integral part of the architectural experience. This concept culminates at the mountain hut in the form of a wood-fired stove, which serves as the spatial and functional heart of the building. The heat generated through cooking is distributed and made accessible for multiple uses. The interior of the house is being stripped back and reorganised into two open rooms on the ground and upper floor. The stove creates distinct zones within these spaces, providing areas for cooking, socialising, drying clothes and warming up. The existing hut is largely retained and carefully repaired to preserve its character and material continuity. The later extension has been dismantled and its stone reused in the construction of the stove, embedding the site's material history within the new addition. Three essential additions complement the building: a vestibule, an outhouse and a woodshed.",
    hero: { type: "image", src: "hero_img/hero_0011_ergebnis.webp", alt: "Project 0011" },
    media: [
      { type: "image", src: "projects/0011/0011_0_ergebnis.webp", alt: "Project 0011 image 0" },
      { type: "image", src: "projects/0011/0011_1_ergebnis.webp", alt: "Project 0011 image 1" },
      { type: "image", src: "projects/0011/0011_2_ergebnis.webp", alt: "Project 0011 image 2" },
      { type: "image", src: "projects/0011/0011_3_ergebnis.webp", alt: "Project 0011 image 3" },
      { type: "image", src: "projects/0011/0011_4_ergebnis.webp", alt: "Project 0011 image 4" },
      { type: "image", src: "projects/0011/0011_5_ergebnis.webp", alt: "Project 0011 image 5" },
      { type: "image", src: "projects/0011/0011_6_ergebnis.webp", alt: "Project 0011 image 6" },
      { type: "image", src: "projects/0011/0011_07_ergebnis.webp", alt: "Project 0011 image 7" },
      { type: "image", src: "projects/0011/0011_08_ergebnis.webp", alt: "Project 0011 image 8" },
      { type: "image", src: "projects/0011/0011_09_ergebnis.webp", alt: "Project 0011 image 9" },
      { type: "image", src: "projects/0011/0011_10.gif", alt: "Project 0011 image 10" },
      { type: "image", src: "projects/0011/0011_11_ergebnis.webp", alt: "Project 0011 image 11" },
      { type: "image", src: "projects/0011/0011_12_ergebnis.webp", alt: "Project 0011 image 12" },
      { type: "image", src: "projects/0011/0011_13_ergebnis.webp", alt: "Project 0011 image 13" },
      { type: "image", src: "projects/0011/0011_14_ergebnis.webp", alt: "Project 0011 image 14" },
      { type: "image", src: "projects/0011/0011_15_ergebnis.webp", alt: "Project 0011 image 15" },
      { type: "image", src: "projects/0011/0011_16_ergebnis.webp", alt: "Project 0011 image 16" },
      { type: "image", src: "projects/0011/0011_17_ergebnis.webp", alt: "Project 0011 image 17" },
      { type: "image", src: "projects/0011/0011_18_ergebnis.webp", alt: "Project 0011 image 18" },
      { type: "image", src: "projects/0011/0011_19_ergebnis.webp", alt: "Project 0011 image 19" },
      { type: "image", src: "projects/0011/0011_20_ergebnis.webp", alt: "Project 0011 image 20" },
      { type: "image", src: "projects/0011/0011_21_ergebnis.webp", alt: "Project 0011 image 21" },
      { type: "image", src: "projects/0011/0011_22_ergebnis.webp", alt: "Project 0011 image 22" },
      { type: "image", src: "projects/0011/0011_23_ergebnis.webp", alt: "Project 0011 image 23" },
    ],
  },
  {
    code: "0012",
    title: "0012_ST. PETER_REFURBISHMENT OF A RURAL HOUSE IN THE BLACK FOREST",
    year: "",
    date: "(ongoing)",
    location: "",
    type: "",
    collaborators: [],
    text: "Ongoing",
    hero: { type: "image", src: "hero_img/hero_0012_ergebnis.webp", alt: "Project 0012" },
    media: [{ type: "image", src: "projects/0012/2.jpg", alt: "Project 0012 image 1" }],
  },
];

// ---------------------------------------------------------------------------
// Info overlay content — shown from the nav's INFO link. `text` is the bio
// copy (split into paragraphs like a project's `text`); `cv` is a list of
// { company, city, year } entries, most recent first.
// ---------------------------------------------------------------------------

const SITE_INFO = {
  text: "Hey, I'm Nicolas & welcome to my portfolio :-)\nTake your time to look around. Always open for interesting inputs, collabs or projects. Feel free to get in touch!",
  cv: [
    { company: "david chipperfield architects", city: "london", year: "2024" },
    { company: "blackspace", city: "munich", year: "2023" },
    { company: "oitoo", city: "porto", year: "2022" },
    { company: "auer weber", city: "munich", year: "2021" },
    { company: "studio ga", city: "munich", year: "2019" },
    { company: "kaan-architekten", city: "munich", year: "2018" },
    { company: "cl-map", city: "munich", year: "2017" },
    { company: "zwingl/dilg", city: "munich", year: "2015" },
  ],
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function encodePath(path) {
  return path.split("/").map(encodeURIComponent).join("/");
}

// Small autoplay/muted/looping tile used on the homepage grid.
function createHeroMediaEl(hero) {
  if (hero.type === "video") {
    const video = document.createElement("video");
    video.src = encodePath(hero.src);
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.setAttribute("aria-label", hero.alt || "");
    return video;
  }
  const img = document.createElement("img");
  img.src = encodePath(hero.src);
  img.alt = hero.alt || "";
  img.loading = "lazy";
  return img;
}

// Full-size element for a lightbox slide — videos get visible controls
// (and sound) since this is the main viewing experience, not a background loop.
function createSlideMediaEl(item) {
  if (item.type === "video") {
    const video = document.createElement("video");
    video.src = encodePath(item.src);
    video.controls = true;
    video.playsInline = true;
    if (item.poster) video.poster = encodePath(item.poster);
    video.setAttribute("aria-label", item.alt || "");
    return video;
  }
  const img = document.createElement("img");
  img.src = encodePath(item.src);
  img.alt = item.alt || "";
  applyInversion(img, item);
  return img;
}

// Whether a slide image gets inverted: an explicit `invert: true/false` on
// the media item (in the `projects` array, next to its `src`) always wins;
// otherwise it falls back to automatic near-white detection below — keeps
// mostly-white images from washing out against the lightbox's black backdrop.
function applyInversion(img, item) {
  if (item.invert === false) return;
  if (item.invert === true) {
    img.classList.add("slide-inverted");
    return;
  }
  invertIfMostlyWhite(img);
}

// Only very light/white images get inverted (dark ones stay as-is) — average
// brightness is sampled from a small downscaled copy for speed.
const WHITE_INVERT_THRESHOLD = 210; // 0-255, higher = only near-white qualifies

function invertIfMostlyWhite(img) {
  function analyze() {
    try {
      const size = 32;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, size, size);
      const { data } = ctx.getImageData(0, 0, size, size);

      let total = 0;
      for (let i = 0; i < data.length; i += 4) {
        total += (data[i] + data[i + 1] + data[i + 2]) / 3;
      }
      const avgBrightness = total / (data.length / 4);

      if (avgBrightness > WHITE_INVERT_THRESHOLD) img.classList.add("slide-inverted");
    } catch (err) {
      // Canvas can throw if the image ever loads cross-origin; skip silently.
    }
  }

  if (img.complete) analyze();
  else img.addEventListener("load", analyze);
}

// The last slide in every project's rotation — same info previously shown
// in the draggable info card, now just another stop in the sequence.
function buildInfoSlide(project) {
  const wrap = document.createElement("div");
  wrap.className = "lightbox-info";

  const heading = document.createElement("h2");
  heading.className = "lightbox-info-title";
  heading.textContent = project.title || project.code;
  wrap.appendChild(heading);

  const metaParts = [project.year, project.location, project.type].filter(Boolean);
  if (metaParts.length) {
    const meta = document.createElement("p");
    meta.className = "lightbox-info-meta";
    meta.textContent = metaParts.join(" — ");
    wrap.appendChild(meta);
  }

  if (project.text) {
    project.text
      .split(/\n+/)
      .filter(Boolean)
      .forEach((para) => {
        const p = document.createElement("p");
        p.textContent = para;
        wrap.appendChild(p);
      });
  } else {
    const empty = document.createElement("p");
    empty.className = "lightbox-info-empty";
    empty.textContent = "Project text coming soon.";
    wrap.appendChild(empty);
  }

  if (project.collaborators && project.collaborators.length) {
    wrap.appendChild(document.createElement("hr"));
    const collab = document.createElement("p");
    collab.textContent = `In collaboration with: ${project.collaborators.join(", ")}`;
    wrap.appendChild(collab);
  }

  return wrap;
}

// ---------------------------------------------------------------------------
// Homepage: static grid of all featured hero images
// ---------------------------------------------------------------------------

const FEATURED = ["0009", "0011", "0006", "0008", "0004", "0012", "0010", "0005"];
const MARQUEE_SPEED = 90; // pixels per second — same for every marquee, regardless of text length

// Fixed width + horizontal center (both % of page width) per project —
// no randomness. 0009 stays first and is sized larger than the rest.
// 0006 is pulled out of the normal stacked flow and placed as an overlay
// beside 0011 (left of it, vertically aligned with it) per the sketch.
const HERO_LAYOUT = {
  "0009": { width: 45, center: 45 },
  "0011": { width: 40, center: 60 },
  "0006": { width: 20, overlay: true, alignWith: "0011", topOffset: 120, gapLeftOf: "0011" },
  "0008": { width: 30, overlay: true, topGapBelow: "0011", alignRightWith: "0011" },
  "0004": { width: 22, overlay: true, topGapBelow: "0006", gapLeftOf: "0008", topAdjust: 70 },
  "0012": { width: 20, overlay: true, topGapBelow: "0008", gapRightOf: "0004" },
  "0005": { width: 30, overlay: true, topGapBelow: "0012", gapRightOf: "0004" },
  "0010": { width: 20, overlay: true, belowOf: "0004" },
};

function waitForMedia(el) {
  return new Promise((resolve) => {
    if (el.tagName === "IMG") {
      if (el.complete) resolve();
      else {
        el.addEventListener("load", resolve);
        el.addEventListener("error", resolve);
      }
    } else {
      if (el.readyState >= 1) resolve();
      else {
        el.addEventListener("loadedmetadata", resolve);
        el.addEventListener("error", resolve);
      }
    }
  });
}

// Tags `tile` as portrait once `el`'s real dimensions are known, so the
// mobile layout (see styles.css) can pair portrait hero images two-up
// instead of forcing every image to full width.
function markHeroOrientation(el, tile) {
  function apply() {
    const w = el.naturalWidth || el.videoWidth;
    const h = el.naturalHeight || el.videoHeight;
    if (w && h) tile.classList.toggle("hero-tile--portrait", h > w);
  }

  if (el.tagName === "IMG") {
    if (el.complete) apply();
    else el.addEventListener("load", apply);
  } else {
    if (el.readyState >= 1) apply();
    else el.addEventListener("loadedmetadata", apply);
  }
}

function initHeroGrid() {
  const stage = document.getElementById("hero-grid");
  if (!stage) return;

  const backButton = document.getElementById("back-button");
  const lightbox = document.getElementById("project-lightbox");
  const slideEl = document.getElementById("lightbox-slide");
  const counterEl = document.getElementById("lightbox-counter");

  const heroProjects = FEATURED.map((code) => projects.find((p) => p.code === code)).filter(Boolean);
  const mediaLoaded = [];

  // Rotation for the open project: hero first, then the info slide, then
  // every media item, looping back to the hero once the rotation completes.
  let currentProject = null;
  let currentSlides = [];
  let slideIndex = 0;

  function buildSlides(project) {
    const slides = [{ kind: "hero", item: project.hero }, { kind: "info" }];
    (project.media || []).forEach((item) => slides.push({ kind: "media", item }));
    return slides;
  }

  function renderSlide() {
    const slide = currentSlides[slideIndex];
    slideEl.innerHTML = "";
    slideEl.appendChild(slide.kind === "info" ? buildInfoSlide(currentProject) : createSlideMediaEl(slide.item));
    counterEl.textContent = `${slideIndex + 1} / ${currentSlides.length}`;
  }

  function openProject(code) {
    const project = projects.find((p) => p.code === code);
    if (!project) return;
    currentProject = project;
    currentSlides = buildSlides(project);
    slideIndex = 0;
    renderSlide();
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
    backButton.hidden = false;
  }

  function closeProject() {
    lightbox.hidden = true;
    document.body.classList.remove("lightbox-open");
    backButton.hidden = true;
    slideEl.innerHTML = "";
    currentSlides = [];
    currentProject = null;
  }

  function advanceSlide() {
    if (!currentSlides.length) return;
    slideIndex = (slideIndex + 1) % currentSlides.length;
    renderSlide();
  }

  backButton.addEventListener("click", closeProject);

  // Any click on the open lightbox advances to the next slide, except on a
  // video element — that needs its controls (play/seek/volume) clickable.
  lightbox.addEventListener("click", (e) => {
    if (e.target.closest("video")) return;
    advanceSlide();
  });

  // Nav index list — every project's number (not just the featured ones on
  // the homepage grid), linking straight into its lightbox.
  const indexList = document.getElementById("project-index-list");
  if (indexList) {
    projects.forEach((project) => {
      const link = document.createElement("button");
      link.type = "button";
      link.className = "project-index-link";
      link.textContent = project.code;
      link.setAttribute("aria-label", `Open project ${project.code}`);
      if (project.disabled) {
        link.classList.add("project-index-link--disabled");
        link.disabled = true;
      } else {
        link.addEventListener("click", () => openProject(project.code));
      }
      indexList.appendChild(link);
    });
  }

  heroProjects.forEach((project) => {
    const tile = document.createElement("div");
    tile.className = "hero-tile";
    tile.dataset.code = project.code;
    tile.tabIndex = 0;
    tile.setAttribute("role", "button");
    tile.setAttribute("aria-label", `Open project ${project.code}`);
    tile.addEventListener("click", () => openProject(project.code));
    tile.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openProject(project.code);
      }
    });

    const layout = HERO_LAYOUT[project.code] || { width: 30, center: 50 };
    tile.style.width = layout.width + "%";
    if (layout.overlay) {
      // Removed from normal flow entirely — positioned relative to the
      // grid itself, aligned vertically with another tile below.
      tile.style.position = "absolute";
      if (layout.left !== undefined) tile.style.left = layout.left + "%";
    } else {
      const offset = layout.center - layout.width / 2;
      tile.style.marginLeft = offset + "%";
    }

    const mediaEl = createHeroMediaEl(project.hero);
    mediaEl.draggable = false;
    tile.appendChild(mediaEl);
    if (mediaEl.tagName === "VIDEO") {
      // Mobile browsers sometimes ignore the `autoplay` attribute on
      // elements built dynamically in JS — kicking playback explicitly
      // once it's in the DOM makes it reliable there too.
      mediaEl.play().catch(() => {});
    }
    mediaLoaded.push(waitForMedia(mediaEl));
    markHeroOrientation(mediaEl, tile);

    const marquee = buildMarquee(project);
    tile.appendChild(marquee);

    const codeLabel = document.createElement("div");
    codeLabel.className = "hero-tile-code";
    codeLabel.append(project.code);
    if (project.date) {
      const dateLabel = document.createElement("span");
      dateLabel.className = "hero-tile-date";
      dateLabel.textContent = " " + project.date;
      codeLabel.appendChild(dateLabel);
    }
    tile.appendChild(codeLabel);

    stage.appendChild(tile);

    // Duration must scale with the actual rendered text width so every
    // marquee moves at the same speed instead of longer titles racing by
    // faster. Only measurable once the track is laid out in the document.
    const track = marquee.querySelector(".hero-marquee-track");
    const distance = track.scrollWidth / 2;
    track.style.animationDuration = `${distance / MARQUEE_SPEED}s`;
  });

  // Overlay tiles don't participate in the flow, so their vertical
  // position has to be copied from the tile they should align with. This
  // is only measurable correctly once every image (including tiles above
  // it, whose natural aspect-ratio height determines where later tiles
  // land) has finished loading — before that, images are still collapsed
  // and offsetTop reads too small.
  const HERO_GAP_PX = 48; // matches .hero-grid's `gap: 3rem`

  Promise.all(mediaLoaded).then(() => {
    heroProjects.forEach((project) => {
      const layout = HERO_LAYOUT[project.code];
      if (!layout || !layout.overlay) return;
      const tile = stage.querySelector(`[data-code="${project.code}"]`);
      if (!tile) return;

      // --- Vertical positioning (pick exactly one) --------------------
      if (layout.belowOf) {
        // Directly underneath another tile, sharing its left edge.
        const ref = stage.querySelector(`[data-code="${layout.belowOf}"]`);
        if (ref) {
          tile.style.left = ref.offsetLeft + "px";
          tile.style.top = ref.offsetTop + ref.offsetHeight + HERO_GAP_PX + "px";
        }
      } else if (layout.topGapBelow) {
        // Keeps its own horizontal position, only pushed down enough to
        // clear another tile's bottom edge by the standard gap — used
        // when normal-flow position has no awareness of an overlay tile.
        // topAdjust nudges the result further (negative = up, positive = down).
        const ref = stage.querySelector(`[data-code="${layout.topGapBelow}"]`);
        if (ref) {
          tile.style.top = ref.offsetTop + ref.offsetHeight + HERO_GAP_PX + (layout.topAdjust || 0) + "px";
        }
      } else if (layout.alignWith) {
        const ref = stage.querySelector(`[data-code="${layout.alignWith}"]`);
        if (ref) {
          // topOffsetRatio pushes it down by a fraction of the reference
          // tile's own height (e.g. 0.5 = halfway down); topOffset is a
          // plain fixed pixel nudge. Only one is used per tile.
          const extra = layout.topOffsetRatio ? ref.offsetHeight * layout.topOffsetRatio : layout.topOffset || 0;
          tile.style.top = ref.offsetTop + extra + "px";
        }
      }

      // --- Horizontal positioning (pick exactly one; skipped if belowOf
      // already fixed the left edge above) -----------------------------
      if (!layout.belowOf) {
        if (layout.gapLeftOf) {
          // Gap matching the same 3rem (48px) used between stacked tiles,
          // measured back from another tile's left edge.
          const gapRef = stage.querySelector(`[data-code="${layout.gapLeftOf}"]`);
          if (gapRef) tile.style.left = gapRef.offsetLeft - HERO_GAP_PX - tile.offsetWidth + "px";
        } else if (layout.alignRightWith) {
          // Shares its right edge with another tile's right edge.
          const rightRef = stage.querySelector(`[data-code="${layout.alignRightWith}"]`);
          if (rightRef) tile.style.left = rightRef.offsetLeft + rightRef.offsetWidth - tile.offsetWidth + "px";
        } else if (layout.alignLeftWith) {
          // Shares its left edge with another tile's left edge.
          const leftRef = stage.querySelector(`[data-code="${layout.alignLeftWith}"]`);
          if (leftRef) tile.style.left = leftRef.offsetLeft + "px";
        } else if (layout.gapRightOf) {
          // Sits to the right of another tile with the standard gap.
          const gapRef = stage.querySelector(`[data-code="${layout.gapRightOf}"]`);
          if (gapRef) tile.style.left = gapRef.offsetLeft + gapRef.offsetWidth + HERO_GAP_PX + "px";
        }
      }
    });
  });
}

// A continuously scrolling title strip along the bottom of a hero image.
// The label is repeated several times, then that whole block is duplicated
// once — animating the track by exactly -50% of its width loops it
// seamlessly, right to left, forever.
function buildMarquee(project) {
  const label = project.title || project.code;
  const unit = `${label} • `;
  const half = unit.repeat(8);

  const marquee = document.createElement("div");
  marquee.className = "hero-marquee";

  const track = document.createElement("div");
  track.className = "hero-marquee-track";
  track.setAttribute("aria-hidden", "true");

  const halfA = document.createElement("span");
  halfA.textContent = half;
  const halfB = document.createElement("span");
  halfB.textContent = half;

  track.appendChild(halfA);
  track.appendChild(halfB);
  marquee.appendChild(track);
  return marquee;
}

// Nav "INFO" link — toggles a translucent, blurred overlay with a bio text
// area on top and a CV area below. Independent of the project lightbox.
function initInfoOverlay() {
  const link = document.getElementById("info-link");
  const overlay = document.getElementById("info-overlay");
  if (!link || !overlay) return;

  const textEl = document.getElementById("info-overlay-text");
  const cvEl = document.getElementById("info-overlay-cv-body");

  SITE_INFO.text
    .split(/\n+/)
    .filter(Boolean)
    .forEach((para) => {
      const p = document.createElement("p");
      p.textContent = para;
      textEl.appendChild(p);
    });
  if (!textEl.children.length) {
    const empty = document.createElement("p");
    empty.className = "info-overlay-empty";
    empty.textContent = "Bio coming soon.";
    textEl.appendChild(empty);
  }

  SITE_INFO.cv.forEach((entry) => {
    const item = document.createElement("div");
    item.className = "info-overlay-cv-entry";

    const company = document.createElement("span");
    company.className = "info-overlay-cv-entry-company";
    company.textContent = entry.city ? `${entry.company} (${entry.city})` : entry.company;
    const year = document.createElement("span");
    year.className = "info-overlay-cv-entry-year";
    year.textContent = entry.year;
    item.appendChild(company);
    item.appendChild(year);

    cvEl.appendChild(item);
  });
  if (!cvEl.children.length) {
    const empty = document.createElement("p");
    empty.className = "info-overlay-empty";
    empty.textContent = "CV coming soon.";
    cvEl.appendChild(empty);
  }

  function openInfo() {
    overlay.hidden = false;
    document.body.classList.add("info-open");
  }

  function closeInfo() {
    overlay.hidden = true;
    document.body.classList.remove("info-open");
  }

  link.addEventListener("click", (e) => {
    e.preventDefault();
    if (overlay.hidden) openInfo();
    else closeInfo();
  });

  // Clicking the blurred backdrop closes it; clicking inside the panel
  // (reading text, scrolling) does not — same click-to-dismiss zone as the
  // panel's own `cursor: default` vs. the backdrop's `cursor: pointer`.
  overlay.addEventListener("click", (e) => {
    if (e.target.closest(".info-overlay-panel")) return;
    closeInfo();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !overlay.hidden) closeInfo();
  });
}

// The nav is `position: fixed` (see styles.css), so the page content needs
// a matching top offset — measured rather than hardcoded since the nav's
// height varies with viewport width (mobile's title uses `font-size: 3vw`).
function syncHeaderHeight() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  document.documentElement.style.setProperty("--header-height", header.offsetHeight + "px");
}

// ---------------------------------------------------------------------------
// Init
// ---------------------------------------------------------------------------

initHeroGrid();
initInfoOverlay();
syncHeaderHeight();
window.addEventListener("resize", syncHeaderHeight);
