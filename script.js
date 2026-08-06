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
      { type: "image", src: "projects/0011/0011_10_ergebnis.webp", alt: "Project 0011 image 10" },
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
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function encodePath(path) {
  return path.split("/").map(encodeURIComponent).join("/");
}

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

// Same source as the hero grid's autoplay/muted video, but with visible
// controls and sound on so it can actually be played with audio.
function createSoundVideoEl(hero) {
  const video = document.createElement("video");
  video.src = encodePath(hero.src);
  video.controls = true;
  video.playsInline = true;
  video.setAttribute("aria-label", hero.alt || "");
  return video;
}

// Whether a spawned image gets inverted: an explicit `invert: true/false` on
// the media item (in the `projects` array, next to its `src`) always wins;
// otherwise it falls back to automatic near-white detection below.
function applyInversion(img, mediaItem) {
  if (img.tagName !== "IMG") return;
  if (mediaItem.invert === false) return;
  if (mediaItem.invert === true) {
    img.classList.add("tile-inverted");
    return;
  }
  invertIfMostlyWhite(img);
}

// Only very light/white images get inverted (dark ones stay as-is) — average
// brightness is sampled from a small downscaled copy for speed.
const WHITE_INVERT_THRESHOLD = 210; // 0-255, higher = only near-white qualifies

function invertIfMostlyWhite(img) {
  if (img.tagName !== "IMG") return;

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

      if (avgBrightness > WHITE_INVERT_THRESHOLD) img.classList.add("tile-inverted");
    } catch (err) {
      // Canvas can throw if the image ever loads cross-origin; skip silently.
    }
  }

  if (img.complete) analyze();
  else img.addEventListener("load", analyze);
}

// ---------------------------------------------------------------------------
// Homepage: static grid of all featured hero images
// ---------------------------------------------------------------------------

const FEATURED = ["0009", "0011", "0006", "0008", "0004", "0010", "0005"];
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
  "0010": { width: 20, overlay: true, topGapBelow: "0008", gapRightOf: "0004" },
  "0005": { width: 30, overlay: true, topGapBelow: "0004", gapLeftOf: "0010" },
};

// Absolute positions (px, relative to the #hero-grid stage's top-left
// corner) for each project's media images once its hero is clicked. Key by
// project code, then by the image's index in that project's `media` array
// (0-based). Only add entries for images you want to move — anything left
// out falls back to the auto grid below (MEDIA_GRID_* constants), so you
// can adjust one image at a time:
//   PROJECT_MEDIA_LAYOUT["0009"][3] = { left: 900, top: 1200, width: 420 };
// `width` is optional per entry (defaults to MEDIA_TILE_WIDTH).
const PROJECT_MEDIA_LAYOUT = {
  "0009": {
    0: { left: 247, top: 566, width: 769 },
    1: { left: 1179, top: 251, width: 476 },
    2: { left: 617, top: 279, width: 1090 },
    3: { left: 448, top: -15, width: 429 },
    4: { left: 800, top: -6, width: 920 },
    5: { left: 156, top: 520, width: 872 },
    6: { left: 1022, top: 249, width: 527 },
    7: { left: 1064, top: 252, width: 482 },
    8: { left: 7, top: 80, width: 688 },
    9: { left: 597, top: -3, width: 445 },
    10: { left: 1046, top: 248, width: 497 },
    11: { left: 28, top: 125, width: 569 },
    12: { left: 579, top: -7, width: 461 },
    13: { left: 1043, top: 253, width: 501 },
    14: { left: 24, top: 164, width: 546 },
    15: { left: 577, top: -1, width: 466 },
    16: { left: 1043, top: 425, width: 1168 },
    17: { left: 217, top: -43, width: 1297 },
    18: { left: 1184, top: 38, width: 496 },
    19: { left: 136, top: 168, width: 830 },
    20: { left: 1546, top: 193, width: 569 },
    21: { left: 666, top: 148, width: 629 },
  },
  "0011": {
    0: { left: 403, top: 44, width: 577 },
    1: { left: 641, top: 284, width: 496 },
    2: { left: 1222, top: 288, width: 527 },
    3: { left: 643, top: 286, width: 496 },
    4: { left: 1223, top: 290, width: 519 },
    5: { left: 645, top: 286, width: 495 },
    6: { left: 1228, top: 290, width: 517 },
    7: { left: 640, top: 239, width: 1113 },
    8: { left: 1019, top: 44, width: 1005 },
    9: { left: 769, top: 341, width: 878 },
    10: { left: 562, top: 209, width: 548 },
    11: { left: 1334, top: 211, width: 555 },
    12: { left: 530, top: 209, width: 589 },
    13: { left: 1172, top: 323, width: 879 },
    14: { left: 527, top: 176, width: 596 },
    15: { left: 1328, top: 207, width: 599 },
    16: { left: 524, top: 173, width: 599 },
    17: { left: 1170, top: 327, width: 880 },
    18: { left: 523, top: 169, width: 600 },
    19: { left: 1183, top: 345, width: 851 },
    20: { left: 250, top: 151, width: 1031 },
    21: { left: 1328, top: 182, width: 615 },
    22: { left: 1327, top: 177, width: 617 },
    23: { left: 1325, top: 177, width: 619 },
  },
  "0006": {
    0: { left: 866, top: 1011, width: 475 },
    1: { left: 853, top: 1004, width: 1392 },
    2: { left: 579, top: 844, width: 520 },
    3: { left: 1573, top: 1034, width: 612 },
    4: { left: 728, top: 941, width: 1161 },
    5: { left: 729, top: 942, width: 1157 },
    6: { left: 462, top: 744, width: 524 },
    7: { left: 1567, top: 977, width: 655 },
    8: { left: 873, top: 791, width: 609 },
    9: { left: 1564, top: 882, width: 659 },
    10: { left: 443, top: 761, width: 688 },
    11: { left: 872, top: 728, width: 618 },
    12: { left: 1557, top: 879, width: 666 },
    13: { left: 872, top: 773, width: 620 },
    14: { left: 512, top: 1115, width: 593 },
    15: { left: 1160, top: 818, width: 591 },
    16: { left: 1831, top: 1146, width: 639 },
  },
  "0008": {
    0: { left: 360, top: 1294, width: 1647 },
    1: { left: 380, top: 0, width: 340 },
  },
  "0004": {
    0: { left: 75, top: 1911, width: 527 },
    1: { left: 971, top: 1685, width: 407 },
    2: { left: 1265, top: 1828, width: 492 },
    3: { left: 1601, top: 1579, width: 461 },
    4: { left: 632, top: 1551, width: 828 },
    5: { left: 158, top: 1716, width: 542 },
    6: { left: 813, top: 1576, width: 533 },
    7: { left: 1455, top: 1869, width: 495 },
  },
  "0010": {
    0: { left: 126, top: 1892, width: 1169 },
    1: { left: 672, top: 2059, width: 1107 },
    2: { left: 720, top: 1769, width: 1039 },
    3: { left: 388, top: 2000, width: 513 },
    4: { left: 980, top: 2092, width: 510 },
    5: { left: 1262, top: 1852, width: 449 },
    6: { left: 655, top: 1916, width: 572 },
    7: { left: 122, top: 1847, width: 1112 },
    8: { left: 1063, top: 1806, width: 715 },
    9: { left: 386, top: 2054, width: 517 },
    10: { left: 1053, top: 1754, width: 669 },
    11: { left: 1092, top: 2264, width: 937 },
    12: { left: 1211, top: 1866, width: 432 },
    13: { left: 288, top: 1881, width: 659 },
    14: { left: 913, top: 1759, width: 828 },
    15: { left: 292, top: 2012, width: 584 },
  },
  "0005": {
    0: { left: 274, top: 2424, width: 421 },
    1: { left: 962, top: 2536, width: 660 },
    2: { left: 1423, top: 2350, width: 708 },
    3: { left: 252, top: 2119, width: 954 },
    4: { left: 243, top: 2637, width: 500 },
    5: { left: 924, top: 2513, width: 720 },
    6: { left: 71, top: 2260, width: 740 },
    7: { left: 809, top: 2257, width: 855 },
    8: { left: 1634, top: 2321, width: 737 },
    9: { left: 195, top: 2214, width: 735 },
    10: { left: 954, top: 2235, width: 654 },
    11: { left: 1681, top: 2306, width: 695 },
    12: { left: 808, top: 2422, width: 456 },
  },
};

const MEDIA_TILE_WIDTH = 340; // default width in px, matches .project-media-tile
const MEDIA_GRID_COLUMNS = 3;
const MEDIA_GRID_GAP = 40;
const MEDIA_GRID_ROW_HEIGHT = 260; // rough row spacing for the auto grid only

function getMediaPosition(code, index) {
  const override = (PROJECT_MEDIA_LAYOUT[code] || {})[index];

  // Anything without an explicit override spawns near the top of the page
  // (not below the hero) so it's immediately visible for positioning,
  // instead of needing a scroll to go find it.
  const col = index % MEDIA_GRID_COLUMNS;
  const row = Math.floor(index / MEDIA_GRID_COLUMNS);
  const baseLeft = col * (MEDIA_TILE_WIDTH + MEDIA_GRID_GAP);
  const baseTop = row * (MEDIA_GRID_ROW_HEIGHT + MEDIA_GRID_GAP);

  return {
    left: override && override.left !== undefined ? override.left : baseLeft,
    top: override && override.top !== undefined ? override.top : baseTop,
    width: override && override.width !== undefined ? override.width : MEDIA_TILE_WIDTH,
  };
}

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

// Builds the draggable project info card once. The handle drags the whole
// box (pointer events scoped to it only); the content area scrolls on its
// own via `overflow-y: auto`, so the two never fight over pointer input.
function createInfoBox(onMove) {
  const el = document.createElement("div");
  el.className = "info-box";
  el.hidden = true;

  const handle = document.createElement("div");
  handle.className = "info-box-handle";

  const content = document.createElement("div");
  content.className = "info-box-content";

  // Native scrollbar is hidden via CSS; this dot tracks scroll progress
  // along the content area instead.
  const scrollTrack = document.createElement("div");
  scrollTrack.className = "info-box-scrollbar";
  scrollTrack.hidden = true;
  const scrollDot = document.createElement("div");
  scrollDot.className = "info-box-scrollbar-dot";
  scrollTrack.appendChild(scrollDot);

  el.appendChild(handle);
  el.appendChild(content);
  el.appendChild(scrollTrack);
  makeDraggable(el, handle, onMove);

  function updateScrollIndicator() {
    const scrollable = content.scrollHeight > content.clientHeight + 1;
    scrollTrack.hidden = !scrollable;
    if (!scrollable) return;

    scrollTrack.style.top = content.offsetTop + "px";
    scrollTrack.style.height = content.offsetHeight + "px";

    const maxDotTravel = content.offsetHeight - scrollDot.offsetHeight;
    const progress = content.scrollTop / (content.scrollHeight - content.clientHeight);
    scrollDot.style.top = progress * maxDotTravel + "px";
  }

  content.addEventListener("scroll", updateScrollIndicator);

  function setContent(project) {
    handle.textContent = project.title || project.code;

    const metaParts = [project.year, project.location, project.type].filter(Boolean);
    const bodyParts = [];

    if (metaParts.length) {
      bodyParts.push(`<p class="info-box-meta">${metaParts.join(" — ")}</p>`);
    }

    if (project.text) {
      bodyParts.push(
        project.text
          .split(/\n+/)
          .filter(Boolean)
          .map((para) => `<p>${para}</p>`)
          .join("")
      );
    } else {
      bodyParts.push(`<p class="info-box-empty">Project text coming soon.</p>`);
    }

    if (project.collaborators && project.collaborators.length) {
      bodyParts.push("<hr>");
      bodyParts.push(`<p>In collaboration with: ${project.collaborators.join(", ")}</p>`);
    }

    content.innerHTML = bodyParts.join("");
    content.scrollTop = 0;
    // Layout needs a tick to settle before content's height is measurable.
    requestAnimationFrame(updateScrollIndicator);
  }

  return { el, setContent };
}

// Per-project preferred side for the info box ("left" or "right" of the
// hero tile). Anything not listed here defaults to "right".
const INFO_BOX_SIDE = {
  "0006": "left",
  "0004": "left",
  "0005": "left",
};

// Places the info box beside `tile` within `stage`'s coordinate space. By
// default it flips to the other side of the tile if it would overflow the
// stage; pass `forceSide: true` (used for explicit INFO_BOX_SIDE entries)
// to keep it on the requested side regardless, just clamped on-stage.
function positionInfoBoxNextTo(box, tile, stage, side = "right", forceSide = false) {
  const gap = 32;
  const boxWidth = box.offsetWidth || 360;

  let left;
  if (side === "left") {
    left = tile.offsetLeft - gap - boxWidth;
    if (!forceSide && left < 0) left = tile.offsetLeft + tile.offsetWidth + gap;
  } else {
    left = tile.offsetLeft + tile.offsetWidth + gap;
    if (!forceSide && left + boxWidth > stage.clientWidth) left = tile.offsetLeft - gap - boxWidth;
  }
  left = Math.max(0, Math.min(left, stage.clientWidth - boxWidth));

  box.style.left = left + "px";
  box.style.top = tile.offsetTop + "px";
}

// Set right after an actual drag/resize so the click event that follows the
// pointerup doesn't also get treated as a "spawn the next image" click (see
// the document click listener in initHeroGrid). A plain, un-dragged click
// still spawns — only real movement suppresses it.
let suppressNextSpawnClick = false;

function makeDraggable(box, handle, onMove) {
  let dragging = false;
  let startX = 0;
  let startY = 0;
  let originLeft = 0;
  let originTop = 0;
  let moved = false;

  handle.addEventListener("pointerdown", (e) => {
    dragging = true;
    moved = false;
    handle.classList.add("info-box-handle--dragging");
    handle.setPointerCapture(e.pointerId);
    startX = e.clientX;
    startY = e.clientY;
    originLeft = box.offsetLeft;
    originTop = box.offsetTop;
  });

  handle.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) moved = true;
    box.style.left = originLeft + dx + "px";
    box.style.top = originTop + dy + "px";
  });

  function endDrag(e) {
    if (!dragging) return;
    dragging = false;
    handle.classList.remove("info-box-handle--dragging");
    if (handle.hasPointerCapture(e.pointerId)) handle.releasePointerCapture(e.pointerId);
    if (moved) {
      suppressNextSpawnClick = true;
      if (onMove) onMove();
    }
  }

  handle.addEventListener("pointerup", endDrag);
  handle.addEventListener("pointercancel", endDrag);
}

// Scales `box` by width only (height follows automatically via the media's
// own `height: auto`), dragging from a small corner handle. Stops the
// pointerdown from bubbling up to the box's own drag listener so grabbing
// the corner resizes instead of moving the whole tile.
function makeResizable(box, handle, onMove) {
  let resizing = false;
  let startX = 0;
  let startWidth = 0;

  handle.addEventListener("pointerdown", (e) => {
    e.stopPropagation();
    resizing = true;
    handle.setPointerCapture(e.pointerId);
    startX = e.clientX;
    startWidth = box.offsetWidth;
  });

  handle.addEventListener("pointermove", (e) => {
    if (!resizing) return;
    e.stopPropagation();
    const newWidth = Math.max(60, startWidth + (e.clientX - startX));
    box.style.width = newWidth + "px";
  });

  function endResize(e) {
    if (!resizing) return;
    resizing = false;
    if (handle.hasPointerCapture(e.pointerId)) handle.releasePointerCapture(e.pointerId);
    suppressNextSpawnClick = true;
    if (onMove) onMove();
  }

  handle.addEventListener("pointerup", (e) => {
    e.stopPropagation();
    endResize(e);
  });
  handle.addEventListener("pointercancel", endResize);
}

function initHeroGrid() {
  const stage = document.getElementById("hero-grid");
  if (!stage) return;

  const gallery = document.getElementById("project-gallery");
  const backButton = document.getElementById("back-button");
  const saveLayoutButton = document.getElementById("save-layout-button");
  const infoBox = createInfoBox(() => updateStageMinHeight());
  stage.appendChild(infoBox.el);

  const heroProjects = FEATURED.map((code) => projects.find((p) => p.code === code)).filter(Boolean);
  const mediaLoaded = [];
  const tiles = [];

  // While project mode is open, each click on the isolated hero spawns the
  // next image from that project's `media` array (starting position from
  // PROJECT_MEDIA_LAYOUT / the auto grid), one at a time, so it can be
  // dragged and resized into place before the next one appears.
  let projectModeCode = null;
  let mediaSpawnIndex = 0;
  let spawnedMedia = [];

  // Overlay hero tiles and the info box/media tiles are all position:
  // absolute, so they don't contribute to #hero-grid's own height. Left
  // alone, the page collapses to almost nothing once the other (in-flow)
  // hero tiles are hidden in project mode, which clamps scrolling and
  // makes the freshly-opened hero land wherever the collapsed page allows
  // rather than where it was scrolled to. Explicitly sizing the stage to
  // fit everything currently placed in it keeps scrolling accurate.
  function updateStageMinHeight() {
    if (!projectModeCode) {
      stage.style.minHeight = "";
      return;
    }
    let maxBottom = 0;
    const openTile = tiles.find((t) => t.dataset.code === projectModeCode);
    const candidates = [openTile, !infoBox.el.hidden ? infoBox.el : null, ...spawnedMedia].filter(Boolean);
    candidates.forEach((el) => {
      const bottom = el.offsetTop + el.offsetHeight;
      if (bottom > maxBottom) maxBottom = bottom;
    });
    const desired = maxBottom + 96;
    // Only ever grow while a project is open. Shrinking would pull the
    // document height out from under the current scroll position and the
    // browser clamps it back, which reads as the page suddenly jumping —
    // e.g. right after the hero scroll settles and the first media image
    // (which needs far less space than the topped-up hero scroll target)
    // spawns in and recomputes this.
    const current = parseFloat(stage.style.minHeight) || 0;
    stage.style.minHeight = Math.max(desired, current) + "px";
  }

  // The browser clamps scrollTo to the document's actual scrollable range,
  // so if the page isn't tall enough to reach targetY plus a full viewport
  // below it, the scroll falls short. Top up the stage's height directly
  // (only ever growing, per updateStageMinHeight's rule) rather than trying
  // to model the exact layout needed to reach it.
  function ensureScrollReachable(targetY) {
    const neededDocHeight = targetY + window.innerHeight;
    const currentDocHeight = document.documentElement.scrollHeight;
    if (currentDocHeight < neededDocHeight) {
      const currentMinHeight = parseFloat(stage.style.minHeight) || stage.offsetHeight;
      stage.style.minHeight = currentMinHeight + (neededDocHeight - currentDocHeight) + "px";
    }
  }

  function clearSpawnedMedia() {
    spawnedMedia.forEach((el) => el.remove());
    spawnedMedia = [];
    mediaSpawnIndex = 0;
  }

  function spawnNextMedia() {
    const project = projects.find((p) => p.code === projectModeCode);
    if (!project) return;

    const index = mediaSpawnIndex;

    // 0008's first spawn is a bigger, sound-enabled repeat of its own hero
    // video (the hero grid version is muted/autoplaying) rather than the
    // next `media` entry; every click after that steps through `media` as
    // usual, just shifted by one slot.
    const isHeroRepeat = project.code === "0008" && index === 0;
    const mediaListIndex = project.code === "0008" ? index - 1 : index;
    if (!isHeroRepeat && (!project.media || mediaListIndex < 0 || mediaListIndex >= project.media.length)) return;

    const mediaItem = isHeroRepeat ? project.hero : project.media[mediaListIndex];

    const wrap = document.createElement("div");
    wrap.className = "project-media-tile" + (isHeroRepeat ? " project-media-tile--interactive" : "");
    wrap.dataset.mediaIndex = index;

    const mediaEl = isHeroRepeat ? createSoundVideoEl(mediaItem) : createHeroMediaEl(mediaItem);
    mediaEl.draggable = false;
    wrap.appendChild(mediaEl);
    applyInversion(mediaEl, mediaItem);

    const resizeHandle = document.createElement("div");
    resizeHandle.className = "project-media-tile-resize";
    wrap.appendChild(resizeHandle);

    const pos = getMediaPosition(projectModeCode, index);
    wrap.style.left = pos.left + "px";
    wrap.style.top = pos.top + "px";
    wrap.style.width = pos.width + "px";

    stage.appendChild(wrap);
    makeDraggable(wrap, wrap, () => updateStageMinHeight());
    makeResizable(wrap, resizeHandle, () => updateStageMinHeight());
    spawnedMedia.push(wrap);

    mediaSpawnIndex += 1;
    updateStageMinHeight();

    // The media has no rendered height yet (width is set, height is auto,
    // driven by the image's natural size once it loads) — recompute once
    // it's known so the scrollable area accounts for its real height.
    waitForMedia(mediaEl).then(() => updateStageMinHeight());
  }

  // Reads the current on-screen position/size of every spawned media tile
  // and writes it to the clipboard (and console) as a PROJECT_MEDIA_LAYOUT
  // block, ready to paste back in once you're happy with the arrangement.
  function saveCurrentLayout() {
    if (!projectModeCode || !spawnedMedia.length) return;

    const entries = spawnedMedia
      .map((el) => {
        const index = el.dataset.mediaIndex;
        const left = Math.round(el.offsetLeft);
        const top = Math.round(el.offsetTop);
        const width = Math.round(el.offsetWidth);
        return `    ${index}: { left: ${left}, top: ${top}, width: ${width} },`;
      })
      .join("\n");

    const block = `"${projectModeCode}": {\n${entries}\n  },`;

    console.log(block);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(block).catch(() => {});
    }
  }

  // Clicking a hero image hides every other hero image, leaving just the
  // one clicked, and opens the draggable info card beside it. Media images
  // for the project spawn one at a time on subsequent clicks of the hero.
  function openProject(code) {
    tiles.forEach((t) => t.classList.toggle("hero-tile--hidden", t.dataset.code !== code));

    backButton.hidden = false;
    saveLayoutButton.hidden = false;
    const clickedTile = tiles.find((t) => t.dataset.code === code);

    const project = projects.find((p) => p.code === code);
    if (project) {
      infoBox.setContent(project);
      infoBox.el.hidden = false;
      if (clickedTile) {
        const forcedSide = INFO_BOX_SIDE[code];
        positionInfoBoxNextTo(infoBox.el, clickedTile, stage, forcedSide || "right", Boolean(forcedSide));
      }
    }

    const isFreshOpen = projectModeCode !== code;
    if (isFreshOpen) clearSpawnedMedia();
    projectModeCode = code;
    updateStageMinHeight();

    // 0008 skips the extra click: the bigger, sound-enabled hero repeat
    // spawns immediately on open rather than waiting for a second click.
    if (isFreshOpen && code === "0008") spawnNextMedia();

    // Scroll the hero just below the sticky nav (not to the raw document
    // top — that would tuck it under the header) so it lands fully visible
    // every time, regardless of where it sat in the index before opening.
    if (clickedTile) {
      const header = document.querySelector(".site-header");
      const headerHeight = header ? header.offsetHeight : 0;
      const targetY = Math.max(0, clickedTile.getBoundingClientRect().top + window.scrollY - headerHeight - 16);
      ensureScrollReachable(targetY);
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  }

  // Tile activation branches: the first click on a hero opens project mode;
  // once that project is already open, clicking it again spawns the next
  // media image instead of re-triggering the open animation.
  function activateTile(code) {
    if (projectModeCode === code) {
      spawnNextMedia();
    } else {
      openProject(code);
    }
  }

  function closeProject() {
    tiles.forEach((t) => t.classList.remove("hero-tile--hidden"));
    gallery.classList.remove("project-gallery--active");
    gallery.innerHTML = "";
    infoBox.el.hidden = true;
    backButton.hidden = true;
    saveLayoutButton.hidden = true;
    projectModeCode = null;
    clearSpawnedMedia();
    updateStageMinHeight();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  backButton.addEventListener("click", closeProject);
  saveLayoutButton.addEventListener("click", saveCurrentLayout);

  // Once project mode is open, ANY click on the page spawns the next media
  // image — including clicks on already-spawned images. Only an actual
  // drag/resize (tracked via suppressNextSpawnClick) blocks the click that
  // follows it; a plain click on an image still spawns. The info box and
  // the fixed buttons/nav stay excluded outright.
  document.addEventListener("click", (e) => {
    if (!projectModeCode) return;
    if (suppressNextSpawnClick) {
      suppressNextSpawnClick = false;
      return;
    }
    if (
      e.target.closest(
        ".info-box, #back-button, #save-layout-button, .site-header, .project-media-tile--interactive"
      )
    ) {
      return;
    }
    spawnNextMedia();
  });

  heroProjects.forEach((project) => {
    const tile = document.createElement("div");
    tile.className = "hero-tile";
    tile.dataset.code = project.code;
    tile.tabIndex = 0;
    tile.setAttribute("role", "button");
    tile.setAttribute("aria-label", `Open project ${project.code}`);
    tile.addEventListener("click", (e) => {
      // Once this project is already open, let the click bubble up to the
      // document-level listener above (which spawns the next image).
      // Otherwise this is the opening click — handle it here and stop it
      // from also being treated as a spawn trigger.
      if (projectModeCode === project.code) return;
      e.stopPropagation();
      openProject(project.code);
    });
    tile.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        activateTile(project.code);
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
    mediaLoaded.push(waitForMedia(mediaEl));
    markHeroOrientation(mediaEl, tile);

    const marquee = buildMarquee(project);
    tile.appendChild(marquee);

    stage.appendChild(tile);
    tiles.push(tile);

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

// ---------------------------------------------------------------------------
// Init
// ---------------------------------------------------------------------------

initHeroGrid();
