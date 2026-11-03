import { Question } from "./types";

export const respiratoryCategories = [
  "Anatomy & Histology",
  "Physiology & Mechanics",
  "PFTs & Spirometry",
  "Obstructive Lung Diseases",
  "Restrictive & ARDS",
  "Pharmacology & Therapeutics",
];

// 100 Core Practice Questions
export const respiratoryTblCoreQuestions: Question[] = [
  {
    "cat": 0,
    "q": "A 24-year-old medical student is examining a histological section of the nasal cavity. Which of the following regions is lined by skin composed of stratified squamous epithelium and contains coarse hairs known as vibrissae?",
    "a": [
      "Olfactory region (upper 1/3 of nasal cavity)",
      "Respiratory region (inferior 2/3 of nasal mucosa)",
      "Nasal vestibule",
      "Sphenoethmoidal recess",
      "Nasopharynx"
    ],
    "c": 2,
    "r": "According to the histology lecture, the nasal cavity consists of the nasal vestibule (lined by skin with stratified squamous epithelium and vibrissae/hairs), the respiratory region (inferior 2/3), and the olfactory region (upper 1/3)."
  },
  {
    "cat": 0,
    "q": "Which of the following fractions and anatomical structures accurately describes the respiratory region versus the olfactory region of the nasal cavity?",
    "a": [
      "Respiratory region occupies the upper 1/3; Olfactory region occupies the inferior 2/3",
      "Respiratory region occupies the inferior 2/3; Olfactory region occupies the upper 1/3",
      "Respiratory region occupies the anterior 1/2; Olfactory region occupies the posterior 1/2",
      "Respiratory region is restricted to the superior concha; Olfactory region lines the inferior meatus",
      "Both regions occupy equal 1/2 proportions and are separated by the limen nasi"
    ],
    "c": 1,
    "r": "The respiratory region is the largest portion, occupying the inferior 2/3 of the nasal mucosa, whereas the olfactory region occupies the upper 1/3."
  },
  {
    "cat": 0,
    "q": "During a histology lab exam, a slide from the upper 1/3 of the nasal mucosa is shown. Which of the following features is uniquely characteristic of the olfactory mucosa compared to the respiratory mucosa?",
    "a": [
      "Pseudostratified columnar epithelium with abundant goblet cells and motile cilia",
      "Simple cuboidal epithelium with Clara cells and discontinuous cartilage plates",
      "Pseudostratified columnar epithelium that is NOT ciliated, lacks goblet cells, and contains serous Bowman's glands",
      "Stratified squamous keratinized epithelium with mucous glands and serous demilunes",
      "Pseudostratified ciliated columnar epithelium with compound tubuloalveolar mucous glands"
    ],
    "c": 2,
    "r": "Olfactory epithelium is pseudostratified columnar epithelium that is NOT ciliated, has NO goblet cells, contains serous olfactory (Bowman's) glands, and houses olfactory receptor cells (bipolar neurons), supporting cells, and basal (stem) cells."
  },
  {
    "cat": 0,
    "q": "Which of the following cell types found within the olfactory epithelium of the nasal cavity functions as stem cells capable of regenerating the epithelium?",
    "a": [
      "Brush cells with short microvilli",
      "Olfactory receptor bipolar neurons",
      "Supporting (sustentacular) cells",
      "Basal cells",
      "Serous cells of Bowman's glands"
    ],
    "c": 3,
    "r": "In the olfactory epithelium, the three main cell types listed are olfactory receptor cells (bipolar neurons), supporting cells, and basal cells (which act as stem cells)."
  },
  {
    "cat": 0,
    "q": "A patient inhaling cold, dry air relies on the respiratory mucosa of the nasal cavity to condition the inspired gas. Which histological feature in the lamina propria of the respiratory mucosa is directly responsible for warming the inhaled air?",
    "a": [
      "Serous Bowman's glands",
      "Rich vascular networks and capillary loops",
      "Discontinuous hyaline cartilage plates",
      "Brush cells with short microvilli",
      "Elastic and reticular fiber bundles"
    ],
    "c": 1,
    "r": "The lamina propria of the respiratory mucosa contains rich vascular networks and capillary loops that allow warming of inhaled air by the blood, while conchae (turbinates) humidify the air and mucus glands with serous demilunes trap particles."
  },
  {
    "cat": 0,
    "q": "Which of the following lists accurately represents the cell types that constitute the respiratory epithelium (pseudostratified columnar ciliated epithelium) of the conducting airways?",
    "a": [
      "Goblet cells, ciliated cells, brush cells (with short microvilli), and basal cells",
      "Type I pneumocytes, Type II pneumocytes, and alveolar macrophages",
      "Bipolar neurons, supporting cells, and serous acinar cells",
      "Simple squamous cells, endothelial cells, and pericytes",
      "Stratified squamous cells, keratinocytes, and Langerhans cells"
    ],
    "c": 0,
    "r": "The respiratory epithelium is a pseudostratified columnar ciliated epithelium resting on a basal lamina, containing goblet cells, ciliated cells, brush cells (with short microvilli), and basal cells."
  },
  {
    "cat": 0,
    "q": "When examining a histological cross-section of the lower respiratory tract, which structural feature allows you to definitively distinguish a bronchus from the trachea?",
    "a": [
      "Complete absence of hyaline cartilage and submucosal glands",
      "Replacement of pseudostratified ciliated columnar epithelium by simple squamous epithelium",
      "Presence of a muscularis layer of smooth muscle, compound tubuloalveolar glands with adipose tissue in the submucosa, and discontinuous cartilage plates",
      "Presence of C-shaped rings of elastic cartilage bridged posteriorly by skeletal muscle",
      "Absence of smooth muscle cells between the mucosa and submucosa"
    ],
    "c": 2,
    "r": "In the bronchus, the cartilage layer consists of discontinuous hyaline cartilage plates (unlike C-shaped rings in the trachea), a distinct muscularis layer of smooth muscle (continuous in larger bronchi, less organized in smaller bronchi), and a submucosa with loose CT, compound tubuloalveolar glands, and adipose tissue."
  },
  {
    "cat": 0,
    "q": "Which of the following airways marks the final purely conducting structure before the transition to the gas-exchanging respiratory zone?",
    "a": [
      "Lobar (secondary) bronchus",
      "Segmental (tertiary) bronchus",
      "Terminal bronchiole",
      "Respiratory bronchiole",
      "Alveolar duct"
    ],
    "c": 2,
    "r": "The conducting system ends at the terminal bronchioles. The gas-exchange system (respiratory bronchiolar unit) begins with the respiratory bronchioles, alveolar ducts, alveolar sacs, and alveoli."
  },
  {
    "cat": 0,
    "q": "According to the histology of the bronchial tree, what two structures combine to form the functional unit of pulmonary structure known as the 'respiratory bronchiolar unit'?",
    "a": [
      "Segmental bronchus and terminal bronchiole",
      "Terminal bronchiole and bronchial glands",
      "Respiratory bronchiole and the alveoli",
      "Trachea and paired main bronchi",
      "Pleural cavity and interlobular septum"
    ],
    "c": 2,
    "r": "The functional unit of the pulmonary structure is the respiratory bronchiolar unit, which is made of the respiratory bronchiole and the alveoli."
  },
  {
    "cat": 0,
    "q": "As the airways branch progressively from the trachea down to the alveoli, which of the following structural trends shown in the histological summary diagram is correct?",
    "a": [
      "Hyaline cartilage and submucosal glands persist into the respiratory bronchioles",
      "Goblet cells disappear before ciliated cells, while smooth muscle and elastic fibers extend further distally than cartilage and glands",
      "Ciliated cells disappear in the lobar bronchi, whereas goblet cells extend down to the alveolar sacs",
      "Elastic fibers are restricted to the trachea and main bronchi and are absent in the alveoli",
      "Smooth muscle terminates at the segmental bronchus prior to the terminal bronchiole"
    ],
    "c": 1,
    "r": "As shown in the respiratory histology summary chart, goblet cells, glands, and hyaline cartilage terminate around the level of the segmental bronchus/bronchiole transition, ciliated cells extend into the terminal/respiratory bronchioles, smooth muscle extends to the alveolar ducts, and elastic fibers persist all the way through the alveoli."
  },
  {
    "cat": 0,
    "q": "A histological electron micrograph shows the 'Thin Blood-Air Barrier' (0.1–1.5 μm thickness) optimized for rapid gaseous exchange. Which of the following lists its exact structural layers in order?",
    "a": [
      "Mucus blanket, ciliated columnar cell, lamina propria, and fenestrated capillary",
      "Thin layer of surfactant, alveolar epithelium (Type I pneumocytes), fused basal laminae (alveolar + capillary basement membranes), and capillary endothelium",
      "Type II pneumocytes, interstitial connective tissue fibers, lymphatics, and venular endothelium",
      "Stratified squamous epithelium, elastic lamina, smooth muscle, and adventitia",
      "Surfactant layer, Clara cell membrane, loose connective tissue, and arterial media"
    ],
    "c": 1,
    "r": "The Thin Blood-Air Barrier allows gaseous exchange and is composed of: (1) a thin layer of surfactant, (2) alveolar epithelium (Type I pneumocytes), (3) fused basal laminae (basement membrane of alveolar epithelium + basement membrane of capillaries), and (4) endothelium of capillaries."
  },
  {
    "cat": 0,
    "q": "In contrast to the thin blood-air barrier, what additional component is present in the 'Thick Blood-Air Barrier', and what is the primary physiological role of this thicker region?",
    "a": [
      "Hyaline cartilage plates; prevents alveolar collapse during forced expiration",
      "Connective tissue (CT) cells and fibers between the alveolar basement membrane and capillary basal lamina; allows accumulation of tissue fluid",
      "Mucous glands with serous demilunes; humidifies alveolar gas",
      "Skeletal muscle fibers; actively contracts alveoli during exhalation",
      "Bipolar neurons; senses alveolar oxygen tension"
    ],
    "c": 1,
    "r": "The Thick Blood-Air Barrier consists of Type I alveolar cells, alveolar basement membrane, connective tissue (CT) cells and fibers, basal lamina of capillary endothelial cells, and endothelial cells. Its specific function noted in the lecture is that it 'allows accumulation of tissue fluid'."
  },
  {
    "cat": 0,
    "q": "When comparing the right and left bronchial tree on an anatomical diagram of the lower respiratory tract, which of the following structures is uniquely present on the left lung or left bronchial tree?",
    "a": [
      "Intermediate bronchus",
      "Three lobar bronchi (superior, middle, inferior)",
      "Cardiac notch and two lobar bronchi (left superior and left inferior)",
      "Horizontal fissure separating the middle lobe",
      "Absence of a main bronchus"
    ],
    "c": 2,
    "r": "As shown in the anatomical diagram, the right lung has three lobar bronchi (right superior, right middle, right inferior) and an intermediate bronchus, whereas the left lung features the cardiac notch and only two lobar bronchi (left superior and left inferior)."
  },
  {
    "cat": 1,
    "q": "The elastic recoil properties of the lungs constantly act against lung inflation and must be overcome for ventilation to take place. According to the lecture on elastic properties of the lungs, what are the two primary causes of these elastic forces?",
    "a": [
      "Airway resistance in the trachea and turbulent flow in the bronchi",
      "Elastic forces of the lung tissue itself (elastin and collagen fibers) and elastic forces caused by surface tension of the fluid lining the alveoli",
      "Contraction of the diaphragm and external intercostal muscles",
      "Intrapleural fluid viscosity and atmospheric barometric pressure",
      "Pulmonary capillary hydrostatic pressure and plasma colloid osmotic pressure"
    ],
    "c": 1,
    "r": "The elastic properties of the lungs that act against inflation are divided into two parts: (1) elastic forces of the lung tissue itself (determined mainly by elastin and collagen fibers in lung parenchyma) and (2) elastic forces caused by surface tension of the fluid lining the inside walls of the alveoli."
  },
  {
    "cat": 1,
    "q": "How do the elastin and collagen fibers in the lung parenchyma behave mechanically when transitioning from a deflated lung to an expanded lung?",
    "a": [
      "They are stretched and linear in deflated lungs, and coil into relaxed helices upon lung expansion",
      "They are in an elastically contracted and kinked state in deflated lungs, and become stretched and unkinked when the lungs expand, exerting even more elastic force",
      "They undergo enzymatic degradation during inspiration and resynthesis during expiration",
      "They exert maximum recoil force at residual volume and zero recoil force at total lung capacity",
      "They actively contract via calcium-dependent cross-bridge cycling during inspiration"
    ],
    "c": 1,
    "r": "In deflated lungs, elastin and collagen fibers are in an elastically contracted and kinked state; when the lungs expand, the fibers become stretched and unkinked, thereby elongating and exerting even more elastic force."
  },
  {
    "cat": 1,
    "q": "How is transpulmonary pressure (also termed recoil pressure) defined in respiratory mechanics?",
    "a": [
      "The pressure difference between the atmosphere and the alveoli",
      "The pressure difference between the inside of the alveoli and the outer surface of the lungs (pleural space)",
      "The pressure difference between the pleural cavity and the body surface",
      "The sum of alveolar pressure and intrapleural pressure during forced expiration",
      "The hydrostatic pressure gradient between the pulmonary artery and left atrium"
    ],
    "c": 1,
    "r": "Transpulmonary pressure (also known as recoil pressure) is defined as the pressure difference between the inside of the alveoli and the outer surface of the lungs (pleural space)."
  },
  {
    "cat": 1,
    "q": "In a healthy adult, what is the normal compliance value for both lungs combined (lungs alone, removed from the thorax), and how long does it take for the volume change to occur after a 1 cm H2O increase in transpulmonary pressure?",
    "a": [
      "50 mL/cm H2O; occurs instantaneously (<0.5 seconds)",
      "110 mL/cm H2O; occurs after 1 to 2 seconds",
      "200 mL/cm H2O; expands by 200 mL after 10 to 20 seconds",
      "500 mL/cm H2O; expands by 500 mL after 60 seconds",
      "1000 mL/cm H2O; occurs after 5 seconds"
    ],
    "c": 2,
    "r": "Normal adult lung compliance for both lungs combined is approximately 200 mL of air per cm H2O transpulmonary pressure; a 1 cm H2O increase expands lung volume by 200 mL after 10–20 seconds."
  },
  {
    "cat": 1,
    "q": "When measuring the combined compliance of the lung-thorax system in a totally relaxed or paralyzed person, how does the normal value compare to that of the lungs alone?",
    "a": [
      "It is about 400 mL/cm H2O, which is twice that of the lungs alone",
      "It is identical to the lungs alone at 200 mL/cm H2O because the thoracic cage offers zero elastic resistance",
      "It is about 110 mL/cm H2O, which is almost exactly half that of the lungs alone (200 mL/cm H2O) because nearly twice as much pressure is needed to inflate the lungs inside the thoracic cage",
      "It is about 20 mL/cm H2O at resting functional residual capacity",
      "It cannot be measured in a relaxed or paralyzed person"
    ],
    "c": 2,
    "r": "Combined lung-thorax compliance is about 110 mL/cm H2O—almost half that of the lungs alone (200 mL/cm H2O) because nearly twice as much pressure is required to inflate the lungs when enclosed inside the thoracic cage."
  },
  {
    "cat": 1,
    "q": "At extreme lung volumes (very high expansion or very low compression volumes), what happens to the combined compliance of the lung-thorax system?",
    "a": [
      "It increases to 5 times that of the lungs alone",
      "It remains linear and unchanged at 110 mL/cm H2O",
      "Chest limitations become extreme, reducing combined compliance to less than one-fifth (<1/5) that of the lungs alone",
      "Surface tension drops to zero, causing compliance to become infinite",
      "Transpulmonary pressure reverses sign and becomes zero"
    ],
    "c": 2,
    "r": "At very high expansion or very low compression volumes, chest limitations become extreme, reducing the combined lung-thorax compliance to less than one-fifth that of the lungs alone."
  },
  {
    "cat": 1,
    "q": "On a compliance diagram comparing air-filled lungs to saline-filled lungs, why do saline-filled lungs require much less pleural (transpulmonary) pressure to expand?",
    "a": [
      "Saline dissolves collagen and elastin fibers in the lung parenchyma",
      "Saline eliminates the air-fluid interface, thereby abolishing surface tension forces in the alveoli",
      "Saline stimulates Type II pneumocytes to secrete 10 times more surfactant",
      "Saline bronchodilates the terminal bronchioles via beta-2 receptor activation",
      "Saline increases the radius of the thoracic cage"
    ],
    "c": 1,
    "r": "Saline-filled lungs require much less pleural pressure to expand than air-filled lungs due to the absence of surface tension (only tissue elastic forces remain)."
  },
  {
    "cat": 1,
    "q": "Consider two connected alveoli of different sizes (one smaller, one larger). According to Laplace's Law, what happens in the presence of surfactant versus in the absence of surfactant?",
    "a": [
      "Without surfactant, the larger alveolus has higher pressure and collapses into the smaller alveolus",
      "With surfactant, smaller alveoli have more surfactant per area and lower surface tension, which equalizes pressure and allows the smaller alveolus to inflate at a faster rate until equal in size",
      "With surfactant, surface tension is higher in smaller alveoli, causing them to empty into larger alveoli",
      "Without surfactant, both alveoli have equal collapse pressure regardless of their radii",
      "Surfactant increases surface tension equally in both alveoli to prevent overinflation"
    ],
    "c": 1,
    "r": "Without surfactant, smaller alveoli have the same surface tension as larger alveoli but higher pressure (due to smaller radius), making them harder to inflate and likely to collapse. With surfactant, smaller alveoli have more surfactant per area and lower surface tension, equalizing pressure between small and large alveoli and allowing the smaller alveolus to inflate at a faster rate until equal in size."
  },
  {
    "cat": 1,
    "q": "In what two forms is oxygen transported in the arterial blood, and what are their respective percentages?",
    "a": [
      "Dissolved in plasma (70%) and bound to hemoglobin (30%)",
      "Dissolved in plasma (7%) and bound to hemoglobin (93%)",
      "Dissolved in plasma (2%) and bound to hemoglobin (98%)",
      "Dissolved in plasma (23%) and bound to plasma proteins (77%)",
      "Bound to carbonic anhydrase (11%) and bound to hemoglobin (89%)"
    ],
    "c": 2,
    "r": "According to the Gas Transport lecture, oxygen is transported in the blood in two forms: dissolved in the plasma (2%) and bound to hemoglobin (98%)."
  },
  {
    "cat": 1,
    "q": "Given that the solubility of oxygen in blood is 0.003 mL / 100 mL blood / mmHg, what is the volume of dissolved oxygen in 100 mL of arterial blood (PO2 = 100 mmHg) and 100 mL of venous blood (PO2 = 40 mmHg)?",
    "a": [
      "Arterial = 3.0 mL O2/100 mL; Venous = 1.2 mL O2/100 mL",
      "Arterial = 0.3 mL O2/100 mL; Venous = 0.12 mL O2/100 mL",
      "Arterial = 20.0 mL O2/100 mL; Venous = 15.0 mL O2/100 mL",
      "Arterial = 0.03 mL O2/100 mL; Venous = 0.012 mL O2/100 mL",
      "Arterial = 1.34 mL O2/100 mL; Venous = 0.40 mL O2/100 mL"
    ],
    "c": 1,
    "r": "Dissolved O2 = solubility × PO2. In arterial blood (PO2 = 100 mmHg): 0.003 × 100 = 0.3 mL O2 / 100 mL blood. In venous blood (PO2 = 40 mmHg): 0.003 × 40 = 0.12 mL O2 / 100 mL blood."
  },
  {
    "cat": 1,
    "q": "A shift of the oxygen-hemoglobin dissociation curve to the right indicates a lower affinity of hemoglobin for oxygen (high P50) and increased release of oxygen to tissues. Which of the following combinations of factors shifts the curve to the right?",
    "a": [
      "Low CO2, low [H+] (high pH), low 2,3-DPG, low temperature, and HbF",
      "High CO2, high [H+] (low pH), high 2,3-DPG, and high temperature",
      "Stored blood in a blood bank, hypothermia, and acute respiratory alkalosis",
      "High pH, presence of myoglobin, and fetal hemoglobin (HbF)",
      "Low temperature, high CO2, and low 2,3-DPG"
    ],
    "c": 1,
    "r": "Factors that shift the O2-Hb dissociation curve to the right (decreased affinity, high P50, increased O2 release to tissues) are: high CO2, high H+ ions (low pH), high 2,3-diphosphoglycerate (2,3-DPG), and high temperature."
  },
  {
    "cat": 1,
    "q": "Why do stored blood from a blood bank and Fetal Hemoglobin (HbF) both cause a leftward shift of the oxygen-hemoglobin dissociation curve (low P50, higher O2 affinity)?",
    "a": [
      "Both exhibit excessive binding of carbon dioxide to the heme iron moiety",
      "Blood bank storage depletes 2,3-DPG (also seen in acidosis), and HbF has poor binding of 2,3-DPG",
      "Both increase red blood cell intracellular temperature and hydrogen ion concentration",
      "Both convert ferric iron (Fe3+) into ferrous iron (Fe2+) irreversibly",
      "Both inhibit carbonic anhydrase inside the red blood cell"
    ],
    "c": 1,
    "r": "As explicitly stated on the 'Shift of the curve to the left' slide: low 2,3-diphosphoglycerate (due to acidosis or in a blood bank), myoglobin, and HbF (which has poor binding of 2,3-diphosphoglycerate) shift the curve to the left."
  },
  {
    "cat": 1,
    "q": "During carbon dioxide transport from peripheral tissues to the lungs, what is the primary form in which CO2 is carried in the blood, and what ionic exchange occurs across the red blood cell membrane?",
    "a": [
      "Dissolved CO2 (70%); sodium-potassium pump exchanges Na+ for K+",
      "Bicarbonate (70%); HCO3- diffuses out of the RBC into plasma in exchange for chloride (Cl-) entering the RBC (chloride shift)",
      "Carbaminohemoglobin (70%); H+ diffuses out of the RBC in exchange for Ca2+",
      "Carbonic acid (70%); H2CO3 is actively pumped into platelets",
      "Dissolved CO2 (98%); Cl- diffuses out of the RBC into the plasma"
    ],
    "c": 1,
    "r": "Transport as bicarbonate (HCO3-) is the main form of CO2 transport (~70%). CO2 diffuses into RBCs, reacts with H2O via carbonic anhydrase to form H2CO3, which dissociates into H+ (buffered by Hb) and HCO3-. About 70% of HCO3- diffuses into the plasma in exchange for Cl- (chloride shift)."
  },
  {
    "cat": 1,
    "q": "In the lecture on carbon dioxide transport, CO2 also binds directly to proteins (both plasma proteins and hemoglobin) to form carbamino compounds. According to the slide diagrams and text, what percentages are given for CO2 transport forms?",
    "a": [
      "70% HCO3-, 23% Hgb·CO2 (or ~11% carried as carbamino-CO2 in text), and 7% dissolved CO2",
      "98% HCO3-, 2% dissolved CO2, and 0% carbamino compounds",
      "50% dissolved CO2, 25% HCO3-, and 25% carbamino-CO2",
      "83% HCO3-, 15% dissolved CO2, and 2% carbamino-CO2",
      "10% HCO3-, 70% Hgb·CO2, and 20% dissolved CO2"
    ],
    "c": 0,
    "r": "The slide diagram shows CO2 transported as: 7% dissolved CO2, 23% Hgb·CO2, and 70% HCO3- (while the text slide notes about 11% of CO2 is carried to the lung as carbamino-CO2 bound to plasma proteins and hemoglobin)."
  },
  {
    "cat": 1,
    "q": "The respiratory center is a collection of neurons in the medulla and pons arranged into four major groups. Which group is located in the dorsal aspect of the medulla, contains inspiratory neurons, and is called the 'rhythmicity center'?",
    "a": [
      "Ventral respiratory group (VRG)",
      "Pneumotaxic center",
      "Apneustic center",
      "Dorsal respiratory group (DRG)",
      "Cerebellar fastigial nucleus"
    ],
    "c": 3,
    "r": "The dorsal respiratory group (DRG), found at the dorsal aspect of the medulla, contains inspiratory neurons, is responsible for inspiration, and is called the rhythmicity center because it discharges impulses rhythmically."
  },
  {
    "cat": 1,
    "q": "Where is the rhythmic discharge of the dorsal respiratory group (DRG) initiated within the medulla?",
    "a": [
      "Edinger-Westphal nucleus",
      "Pre-Bötzinger complex",
      "Locus coeruleus",
      "Area postrema",
      "Superior olivary nucleus"
    ],
    "c": 1,
    "r": "According to the Neural Control of Respiration lecture, the rhythmic discharge of the dorsal group is initiated in the Pre-Bötzinger complex in the medulla."
  },
  {
    "cat": 1,
    "q": "How does the inspiratory 'ramp signal' control the frequency (rate) of respiration?",
    "a": [
      "By prolonging the inspiratory ramp indefinitely to increase respiratory rate",
      "By controlling the limiting point at which the ramp suddenly ceases: the earlier the ramp ceases, the shorter the duration of inspiration and expiration, thereby increasing the frequency of respiration",
      "By activating the ventral respiratory group during quiet resting inspiration",
      "By inhibiting the pneumotaxic center during heavy exercise",
      "By decreasing the rate of increase of the ramp signal during heavy respiration"
    ],
    "c": 1,
    "r": "The inspiratory ramp is controlled in two ways: (1) controlling the rate of increase of the ramp signal (so lungs fill rapidly during heavy respiration), and (2) controlling the limiting point at which the ramp suddenly ceases. The earlier the ramp ceases, the shorter the duration of inspiration (which also shortens expiration), thereby increasing the frequency of respiration."
  },
  {
    "cat": 1,
    "q": "Which of the following statements accurately describes the Ventral Respiratory Group (VRG) in the medulla?",
    "a": [
      "It is active exclusively during quiet resting inspiration and contains only inspiratory neurons",
      "It is found in the ventral aspect of the medulla, contains expiratory and some inspiratory neurons, is responsible for forced expiration, and exhibits reciprocal innervation (inactivated when the dorsal group is stimulated and vice versa)",
      "It is located in the upper pons and inhibits the apneustic center",
      "It senses CSF hydrogen ion concentration directly on the dorsal surface of the spinal cord",
      "It coordinates breathing with swallowing and talking via the cerebellum"
    ],
    "c": 1,
    "r": "The ventral group is found in the ventral aspect of the medulla, contains expiratory neurons and some inspiratory neurons, is responsible for forced expiration, and is inactivated when the dorsal group is stimulated and vice versa (reciprocal innervation)."
  },
  {
    "cat": 1,
    "q": "According to the lecture on Neural Control of Respiration, why is hyperventilation physiologically associated with tachycardia and hypoventilation associated with bradycardia?",
    "a": [
      "Lung stretch receptors directly innervate the sinoatrial node via sympathetic fibers",
      "Stimulation or inhibition of the cardiac or vasomotor center in the medulla results in stimulation or inhibition of the respiratory center because impulses radiate between them",
      "Hypoventilation causes massive catecholamine release from the adrenal medulla",
      "Hyperventilation blocks the glossopharyngeal nerve from reaching the medulla",
      "The cerebellum inhibits the vagus nerve only during voluntary apnea"
    ],
    "c": 1,
    "r": "Under 'Other brainstem centers', the lecture states: Stimulation or inhibition of the cardiac or vasomotor center in the medulla results also in stimulation or inhibition of the respiratory center (impulses radiate between them). That is why hyperventilation is associated with tachycardia and hypoventilation is associated with bradycardia."
  },
  {
    "cat": 1,
    "q": "Which higher brain center is specifically paired with its correct respiratory function according to the lecture?",
    "a": [
      "Hypothalamus – coordinates breathing with swallowing and talking",
      "Cerebellum – coordinates breathing with swallowing and talking",
      "Limbic system – brings voluntary hyperventilation or voluntary apnea",
      "Cerebral cortex – stimulates heat loss by increasing respiration",
      "Medullary vasomotor center – mediates emotional changes in respiration"
    ],
    "c": 1,
    "r": "From the Higher Centers slide: Cerebral cortex = voluntary modification (voluntary hyperventilation or apnea); Hypothalamus = stimulates heat loss by increasing respiration; Limbic system = emotions affect respiration; Cerebellum = coordinates breathing with swallowing and talking."
  },
  {
    "cat": 1,
    "q": "Peripheral chemoreceptors are located in the carotid and aortic bodies. What is their main stimulus, and through which cranial nerves do they transmit impulses to the medulla?",
    "a": [
      "Main stimulus: Hypercapnia; Carotid bodies via Vagus nerve (CN X), Aortic bodies via Glossopharyngeal nerve (CN IX)",
      "Main stimulus: Hypoxia; Carotid bodies via Glossopharyngeal nerve (CN IX), Aortic bodies via Vagus nerve (CN X)",
      "Main stimulus: Alkalosis; Both carotid and aortic bodies via Phrenic nerve",
      "Main stimulus: CSF H+ concentration; Carotid bodies via Facial nerve (CN VII), Aortic bodies via Accessory nerve (CN XI)",
      "Main stimulus: Arterial hypertension; Carotid bodies via Trigeminal nerve (CN V)"
    ],
    "c": 1,
    "r": "Peripheral chemoreceptors in the carotid and aortic bodies are stimulated by: (1) Hypoxia (main stimulus), (2) Hypercapnia, and (3) Acidosis. Carotid bodies send impulses through the glossopharyngeal nerve (CN IX) to the medulla, while aortic bodies send impulses through the vagus nerve (CN X) to the medulla."
  },
  {
    "cat": 1,
    "q": "In the histological diagram of the carotid body, which cell type is the primary oxygen-sensing chemoreceptor cell that synapses with glossopharyngeal afferent axons?",
    "a": [
      "Type I (glomus) cell",
      "Type II sustentacular cell",
      "Type I squamous pneumocyte",
      "Brush cell",
      "Kulchitsky neuroendocrine cell"
    ],
    "c": 0,
    "r": "The carotid body diagram shows Type I (glomus) cells containing neurotransmitter vesicles synapsing directly with glossopharyngeal afferent axons, surrounded by Type II cells."
  },
  {
    "cat": 1,
    "q": "Based on the graphs of arterial PO2 versus carotid body nerve impulses and alveolar ventilation (when arterial PCO2 and [H+] remain normal), below what arterial PO2 threshold do carotid body nerve impulses and alveolar ventilation rise steeply?",
    "a": [
      "Below 500 mmHg",
      "Below 300 mmHg",
      "Below 100 to 60 mmHg",
      "Only below 10 mmHg",
      "Linearly between 500 mmHg and 200 mmHg"
    ],
    "c": 2,
    "r": "As shown in both curves ('Decreased Arterial Oxygen Stimulates the Chemoreceptors' and 'Effect of Low Arterial PO2 to Stimulate Alveolar Ventilation'), nerve impulses and ventilation remain nearly flat from 500 down to 100 mmHg, and then rise steeply as arterial PO2 falls below 100–60 mmHg."
  },
  {
    "cat": 1,
    "q": "Central chemoreceptors are located on the anterolateral (ventral) surface of the medulla in contact with the cerebrospinal fluid (CSF). How are they stimulated by arterial chemical changes?",
    "a": [
      "Hydrogen ions (H+) in the arterial blood rapidly cross the blood-brain barrier (BBB) to stimulate them directly",
      "H+ ions in the blood CANNOT cross the BBB; instead, CO2 crosses the BBB, reacts with H2O in the CSF (catalyzed by carbonic anhydrase) to form H2CO3, which dissociates into H+ and HCO3-, and CO2 stimulates central chemoreceptors both directly (by CO2 itself) and indirectly (by H+)",
      "Decreased arterial PO2 directly depolarizes the central chemoreceptors in the CSF",
      "Bicarbonate ions (HCO3-) in the blood actively pump H+ across the BBB",
      "Central chemoreceptors are completely insensitive to changes in arterial PCO2"
    ],
    "c": 1,
    "r": "Central chemoreceptors are stimulated by high CO2 in blood (and therefore CSF) and high H+ ions in the CSF (NOT in the blood, because blood H+ cannot cross the BBB). CO2 crosses the BBB, reacts with H2O via carbonic anhydrase to form H2CO3 -> H+ + HCO3-. As the slide states, CO2 stimulates central chemoreceptors directly (by CO2 itself) and indirectly (by H+)."
  },
  {
    "cat": 1,
    "q": "In an upright individual, gravity creates a vertical hydrostatic pressure gradient in the pulmonary circulation. Which of the following correctly describes the relationship between alveolar pressure (PA), pulmonary arterial pressure (Pa), and pulmonary venous pressure (Pv) across West's lung zones?",
    "a": [
      "Zone 1 (Apex): Pa > Pv > PA; Zone 2: Pa > PA > Pv; Zone 3 (Base): PA >= Pa > Pv",
      "Zone 1 (Apex): PA >= Pa > Pv (lowest flow); Zone 2 (Mid): Pa > PA > Pv (medium/intermittent flow); Zone 3 (Base): Pa > Pv > PA (highest/continuous flow)",
      "Zone 1 (Apex): Pv > Pa > PA; Zone 2: PA > Pv > Pa; Zone 3: Pa = Pv = PA",
      "Zone 1 (Base): PA >= Pa > Pv; Zone 3 (Apex): Pa > Pv > PA",
      "All three zones have identical pressures (Pa > Pv > PA) in the upright position"
    ],
    "c": 1,
    "r": "From the 'Blood Flow Distribution in the Lung' diagram: Zone 1 (Apex, lowest blood flow) has PA >= Pa > Pv; Zone 2 (Middle, medium/intermittent flow) has Pa > PA > Pv; Zone 3 (Base, highest/continuous flow) has Pa > Pv > PA."
  },
  {
    "cat": 1,
    "q": "In a healthy upright person at rest, which blood flow zones are normally present in the lungs?",
    "a": [
      "Only Zone 1 in the apices and Zone 2 in the bases",
      "Only Zones 2 and 3—Zone 2 (intermittent flow) in the apices, and Zone 3 (continuous flow) in all the lower areas",
      "Zone 1 throughout the entire lung during inspiration, and Zone 3 during expiration",
      "Only Zone 3 from apex to base",
      "Zones 1, 2, and 3 in equal one-third vertical proportions"
    ],
    "c": 1,
    "r": "As explicitly stated beneath the Lung Zones diagram: 'Normally, the lungs have only zones 2 and 3 blood flow—zone 2 (intermittent flow) in the apices, and zone 3 (continuous flow) in all the lower areas.'"
  },
  {
    "cat": 1,
    "q": "Why does the base of the upright lung (Zone 3) exhibit the lowest vascular resistance and highest blood flow?",
    "a": [
      "Alveolar pressure (PA) exceeds arterial pressure (Pa), compressing the capillaries",
      "Higher vascular pressures at the base promote recruitment and distension of pulmonary vessels, reducing vascular resistance and increasing blood flow",
      "Sympathetic vasoconstriction is selectively active at the lung apex",
      "Hypoxic pulmonary vasoconstriction occurs exclusively at the lung base",
      "Surfactant concentration is lowest at the base of the lung"
    ],
    "c": 1,
    "r": "At the base of the upright lung, higher hydrostatic vascular pressures promote recruitment (opening of previously closed capillaries) and distension (widening of open capillaries) of pulmonary vessels, reducing vascular resistance and increasing blood flow (Zone 3)."
  },
  {
    "cat": 1,
    "q": "Why is Carbon Monoxide (CO) used in Pulmonary Function Testing to measure the Diffusing Capacity of the lung (DLCO)?",
    "a": [
      "CO is a perfusion-limited gas that equilibrates within 0.01 seconds in the capillary",
      "CO is a diffusion-limited gas, allowing the machine to compare predetermined inhaled CO with measured exhaled CO to calculate capillary diffusion across the respiratory membrane",
      "CO does not bind to hemoglobin and remains 100% dissolved in plasma",
      "CO selectively measures anatomical dead space via the Bohr equation",
      "CO is used because it is 20 times more soluble in water than carbon dioxide"
    ],
    "c": 1,
    "r": "Carbon monoxide (CO) is a diffusion-limited gas. In the DLCO test, the machine compares the predetermined inhaled CO with the measured exhaled CO to calculate capillary diffusion. Reduced DLCO indicates an impaired diffusion barrier (such as loss of surface area in emphysema or increased barrier thickness in fibrosis)."
  },
  {
    "cat": 2,
    "q": "A 25-year-old male undergoes resting spirometry. He breathes in maximally starting from the normal expiratory level, distending his lungs to the maximum amount. Which pulmonary capacity is being measured, what is its formula, and what is its normal adult value?",
    "a": [
      "Vital Capacity (VC) = IRV + VT + ERV; ~4600 mL",
      "Inspiratory Capacity (IC) = VT + IRV; ~3500 mL",
      "Functional Residual Capacity (FRC) = ERV + RV; ~2300 mL",
      "Total Lung Capacity (TLC) = VC + RV; ~5800 mL",
      "Inspiratory Reserve Volume (IRV) = IC - ERV; ~3000 mL"
    ],
    "c": 1,
    "r": "The inspiratory capacity (IC) is the amount of air a person can breathe in, beginning at the normal expiratory level and distending the lungs to the maximum amount. It equals tidal volume (VT) plus inspiratory reserve volume (IRV) and is about 3500 mL."
  },
  {
    "cat": 2,
    "q": "What is the normal value and formula for Functional Residual Capacity (FRC), and how is it defined?",
    "a": [
      "The amount of air remaining in the lungs after maximal forced expiration; equals RV (~1200 mL)",
      "The amount of air remaining in the lungs at the end of normal expiration; equals ERV + RV (~2300 mL)",
      "The maximum volume of air expired after maximal inspiration; equals IC + ERV (~4600 mL)",
      "The maximum volume to which the lungs can be expanded; equals VC + RV (~5800 mL)",
      "The volume of air inspired or expired with each normal breath; equals VT (~500 mL)"
    ],
    "c": 1,
    "r": "Functional residual capacity (FRC) is the amount of air that remains in the lungs at the end of normal expiration. It equals Expiratory Reserve Volume (ERV) + Residual Volume (RV), and is about 2300 milliliters."
  },
  {
    "cat": 2,
    "q": "Which of the following statements regarding Vital Capacity (VC) and general pulmonary volumes/capacities is explicitly stated in the lecture?",
    "a": [
      "VC is about 4600 mL (IRV + VT + ERV), is higher during standing, higher in western populations, and all pulmonary volumes and capacities are about 20 to 25% less in women than in men",
      "VC is about 3500 mL, is higher in the supine position than standing, and is equal between men and women",
      "VC includes Residual Volume (RV) and cannot be measured with a direct spirometer",
      "All pulmonary volumes and capacities are 50% greater in asthenic people than in athletic people",
      "Total lung capacity is about 4600 mL, while vital capacity is about 5800 mL"
    ],
    "c": 0,
    "r": "Vital capacity (VC = IRV + VT + ERV = IC + ERV) is about 4600 mL (while TLC is ~5800 mL). It differs according to age, gender, body size, position (higher during standing), and ethnic background (higher in western population). Furthermore, all pulmonary volumes and capacities are about 20 to 25% less in women than in men, and greater in large and athletic people than in small and asthenic people."
  },
  {
    "cat": 2,
    "q": "Why is the Helium Dilution Technique required to measure Residual Volume (RV), Functional Residual Capacity (FRC), and Total Lung Capacity (TLC)?",
    "a": [
      "Helium rapidly diffuses across the alveolar-capillary membrane into pulmonary blood",
      "RV remains in the lungs even after maximal forced expiration and cannot be exhaled into a standard spirometer; therefore, FRC (and subsequently RV and TLC) must be measured indirectly via helium dilution",
      "Helium stimulates surfactant secretion to open collapsed airways",
      "Spirometers can only measure volumes smaller than 500 mL",
      "Helium reacts with carbon dioxide in the anatomical dead space"
    ],
    "c": 1,
    "r": "Because Residual Volume (RV) cannot be expired into a spirometer, any capacity containing RV (namely FRC and TLC) must be measured indirectly using the helium dilution technique."
  },
  {
    "cat": 2,
    "q": "A patient expires normally (leaving FRC in the lungs) and immediately breathes from a spirometer of known initial volume (Vi_Spir = 3000 mL) containing an initial helium concentration (Ci_He = 10%). After equilibrium, the final helium concentration (Cf_He) is 6%. Using the lecture's helium dilution formula, what is the patient's FRC?",
    "a": [
      "1500 mL",
      "2000 mL",
      "2300 mL",
      "3000 mL",
      "5000 mL"
    ],
    "c": 1,
    "r": "Using the lecture formula: FRC = [(Ci_He / Cf_He) - 1] × Vi_Spir = [(10 / 6) - 1] × 3000 mL = (0.667) × 3000 mL = 2000 mL."
  },
  {
    "cat": 2,
    "q": "Once Functional Residual Capacity (FRC) has been determined via the helium dilution technique, which two equations from the lecture are used to calculate Residual Volume (RV) and Total Lung Capacity (TLC)?",
    "a": [
      "RV = FRC + ERV; TLC = VC - RV",
      "RV = FRC - ERV; TLC = IC + FRC (or VC + RV)",
      "RV = TLC - FRC; TLC = IRV + ERV",
      "RV = IC - ERV; TLC = FRC + ERV",
      "RV = VC - IC; TLC = FRC - RV"
    ],
    "c": 1,
    "r": "From the Helium Dilution slide: RV = FRC - ERV, and TLC = IC + FRC (or TLC = VC + RV)."
  },
  {
    "cat": 2,
    "q": "In the single-breath Nitrogen Washout test used to measure anatomical dead space (VD), the subject takes a single breath of pure oxygen (100% O2) and expires while nitrogen concentration is plotted against expired air volume (VE). What is the formula for VD from the graph's areas?",
    "a": [
      "VD = (Pink area × VE) / (Gray area)",
      "VD = (Gray area × VE) / (Pink area + Gray area)",
      "VD = (Gray area + Pink area) / VE",
      "VD = VE - (Gray area × Pink area)",
      "VD = (Pink area × VE) / (Pink area + Gray area)"
    ],
    "c": 1,
    "r": "According to the Nitrogen Washout slide formula: VD = (Gray area × VE) / (Pink area + Gray area)."
  },
  {
    "cat": 2,
    "q": "A patient has a Tidal Volume (VT) of 500 mL, an arterial PCO2 (PaCO2) of 40 mmHg, and an expired PCO2 (PECO2) of 28 mmHg (with inspired PiCO2 = 0). Using the Bohr physiological dead space equation from the lecture, what is the patient's physiological dead space (VD)?",
    "a": [
      "100 mL",
      "150 mL",
      "200 mL",
      "250 mL",
      "350 mL"
    ],
    "c": 1,
    "r": "Using the physiological dead space equation: VD = VT × [(PaCO2 - PECO2) / PaCO2] = 500 × [(40 - 28) / 40] = 500 × (12 / 40) = 500 × 0.3 = 150 mL."
  },
  {
    "cat": 2,
    "q": "How is Maximal Breathing Capacity (MBC), also known as Maximal Voluntary Ventilation (MVV), measured in the pulmonary function laboratory, and what is its normal adult range?",
    "a": [
      "Recorded for 10 milliseconds of maximal expiration and expressed for 1 minute; normal is 400–600 L/min",
      "Recorded by breathing as deeply and rapidly as possible for 15 seconds and expressed for 1 minute; normal is 125–170 L/min",
      "Recorded over 3 seconds of forced exhalation after maximal inspiration; normal is 4.6 L/min",
      "Recorded during quiet resting breathing for 60 seconds; normal is 6–8 L/min",
      "Recorded during a single breath-hold of carbon monoxide for 10 seconds; normal is 25 mL/min/mmHg"
    ],
    "c": 1,
    "r": "Maximal Breathing Capacity (MBC) / Maximal Voluntary Ventilation (MVV) is the maximal air respired per minute, recorded for 15 seconds and expressed for 1 minute. Its normal value is 125–170 L/min."
  },
  {
    "cat": 2,
    "q": "Which of the following statements accurately describes Peak Expiratory Flow Rate (PEFR)?",
    "a": [
      "It is recorded for 15 seconds using a helium spirometer and has a normal value of 125–170 L/min",
      "It is the greatest airflow rate during forced exhalation (10 msec maximal expiration expressed for 1 minute, normal 400–600 L/min), is reduced in large airway obstruction (e.g., asthma), but is NOT reliable in small airway obstruction (e.g., emphysema)",
      "It is highly sensitive and specific for isolated small airway collapse in early panacinar emphysema",
      "It is normally increased above 800 L/min in severe bronchial asthma",
      "It represents the flow rate over the middle 50% of the forced vital capacity (FEF 25–75%)"
    ],
    "c": 1,
    "r": "PEFR is the greatest airflow rate during forced exhalation, recorded using a peak flow meter (10 msec maximal expiration expressed for 1 minute), with a normal value of 400–600 L/min. It is reduced in large airway obstruction (e.g., asthma), but is not reliable in small airway obstruction (e.g., emphysema)."
  },
  {
    "cat": 2,
    "q": "During a Timed Vital Capacity / Forced Vital Capacity (FVC) maneuver in a healthy adult, the total FVC is normally exhaled in less than 3 seconds. What are the normal percentages of FVC expired in the first, second, and third seconds (FEV1, FEV2, and FEV3)?",
    "a": [
      "FEV1 = 50%, FEV2 = 75%, FEV3 = 90%",
      "FEV1 = 70%, FEV2 = 80%, FEV3 = 85%",
      "FEV1 = 83%, FEV2 = 90%, FEV3 = 97%",
      "FEV1 = 95%, FEV2 = 98%, FEV3 = 100%",
      "FEV1 = 60%, FEV2 = 83%, FEV3 = 97%"
    ],
    "c": 2,
    "r": "According to the PFT lecture, FVC is normally exhaled in <3 seconds, and the normal fractions are: FEV1 = 83% of FVC, FEV2 = 90% of FVC, and FEV3 = 97% of FVC."
  },
  {
    "cat": 2,
    "q": "On a standard clinical Maximum Flow-Volume Loop presented in the lecture, how are the x-axis (volume) and y-axis (flow rate) oriented during inspiration and expiration?",
    "a": [
      "Trace moves right during inhalation (positive y-axis) and left during exhalation (negative y-axis)",
      "Trace moves left during inhalation as lung volume increases (with negative flow below the x-axis), and moves right during exhalation as lung volume decreases (with positive flow above the x-axis)",
      "Volume is plotted on the y-axis and time in seconds is plotted on the x-axis",
      "Inspiration and expiration both plot above the x-axis as positive values",
      "The loop starts at 0 L (Residual Volume) on the far left and ends at Total Lung Capacity on the far right"
    ],
    "c": 1,
    "r": "On the Flow-Volume loop, the x-axis represents lung volume (moving left during inhalation as volume increases toward TLC, and moving right during exhalation as volume decreases toward RV). The y-axis represents flow rate: negative below the x-axis during inspiration, and positive above the x-axis during expiration."
  },
  {
    "cat": 2,
    "q": "What do the labels MEF 75%, MEF 50%, and MEF 25% on the expiratory limb of a normal flow-volume loop represent?",
    "a": [
      "Maximal Expiratory Force measured in mmHg at 75, 50, and 25 seconds",
      "Mean Expiratory Flow (or maximal expiratory flow) when 75%, 50%, and 25% of the Vital Capacity remains to be exhaled",
      "Minute Expiratory Fraction during exercise testing",
      "Minimal Inspiratory Flow at 75%, 50%, and 25% of Residual Volume",
      "Mean Elastic Force of the chest wall"
    ],
    "c": 1,
    "r": "On the flow-volume loop diagram, after the rapid rise to Peak Expiratory Flow (PEF), there is a gradual decline in expiratory flow marked by MEF (Mean/Maximal Expiratory Flow) at 75%, 50%, and 25% of vital capacity."
  },
  {
    "cat": 2,
    "q": "A 62-year-old smoker undergoes spirometry and flow-volume loop testing. Which combination of findings is diagnostic of an obstructive lung disease pattern?",
    "a": [
      "FEV1/FVC > 0.85, decreased RV, decreased TLC, and a rightward shift of the flow-volume loop",
      "FEV1/FVC < 0.8 (80%), markedly decreased FEV1, increased RV, FRC, and TLC, leftward shift of the flow-volume loop, and a concave (scooped-out) expiratory curve with reduced PEF and FEF 25–75",
      "Proportionate reduction in both FEV1 and FVC with normal FEV1/FVC ratio and a narrowed 'witch-hat' loop shifted to the right",
      "Increased FEF 25–75, increased PEF, and decreased Functional Residual Capacity",
      "Normal FEV1, increased FVC, and absence of air trapping"
    ],
    "c": 1,
    "r": "Obstructive lung disease is defined by an FEV1/FVC ratio < 0.8 (<80%), markedly decreased FEV1, increased RV, FRC, and TLC due to air trapping, a leftward shift of the flow-volume loop (toward higher lung volumes, up to 8 L), and a concave (scooped-out) expiratory limb with reduced PEF and FEF 25–75."
  },
  {
    "cat": 2,
    "q": "Why does the forced expiratory volume (FEV1) volume-time curve show characteristic 'notching' and flattening of its slope in patients with obstructive lung disease?",
    "a": [
      "Because of premature closure of the vocal cords during inspiration",
      "Because of dynamic airway collapse and increased airway resistance during forced expiration",
      "Because of excessive chest wall elastic recoil accelerating airflow",
      "Because of neuromuscular paralysis of the diaphragm",
      "Because of increased alveolar surfactant concentration"
    ],
    "c": 1,
    "r": "In obstructive lung disease, the slope of the FEV1 curve shows notching/flattening and prolonged expiration (>3 seconds) due to dynamic airway collapse and increased airway resistance during forced expiration."
  },
  {
    "cat": 2,
    "q": "When comparing the flow-volume loops of acute asthma versus emphysema in the lecture, how are their expiratory curves described?",
    "a": [
      "Acute asthma shows a convex expiratory curve, whereas emphysema shows a normal linear curve",
      "Acute asthma shows reduced PEF with a concave curve from narrowed airways; emphysema shows a markedly reduced PEF and a severe concave curve due to loss of elastic recoil causing small airway collapse during expiration",
      "Acute asthma shifts the loop to the far right, whereas emphysema shifts the loop to the far left",
      "Emphysema preserves normal PEF because only large cartilaginous bronchi are affected",
      "Both conditions increase Peak Expiratory Flow above 600 L/min"
    ],
    "c": 1,
    "r": "As contrasted in the PFT lecture: Acute asthma shows reduced PEF with a concave curve from narrowed airways, whereas emphysema shows markedly reduced PEF and a severe concave curve due to loss of elastic recoil causing small airway collapse during expiration."
  },
  {
    "cat": 2,
    "q": "In a patient with pure restrictive lung disease (such as idiopathic pulmonary fibrosis), how is the flow-volume loop altered compared to normal?",
    "a": [
      "It shifts to the left with a deep concave scoop and a TLC of 8 L",
      "It shifts to the right (toward lower lung volumes) and forms a narrowed, miniature ('witch-hat') loop with reduced TLC, RV, and FVC, but preserved or high expiratory flow relative to lung volume",
      "It shows isolated flattening of the inspiratory limb with normal TLC",
      "It shows doubled Vital Capacity and doubled Residual Volume",
      "It is completely identical to the loop seen in chronic bronchitis"
    ],
    "c": 1,
    "r": "In restrictive lung disease, lung expansion, compliance, and volumes (TLC, FRC, RV, VC) are all decreased. The flow-volume loop shifts to the right (lower lung volumes) and displays a narrowed/smaller 'witch-hat' shape."
  },
  {
    "cat": 2,
    "q": "Which of the following lung volumes or capacities is DECREASED in BOTH obstructive lung disease and restrictive lung disease according to the comparative bar charts in the lecture?",
    "a": [
      "Total Lung Capacity (TLC)",
      "Functional Residual Capacity (FRC)",
      "Residual Volume (RV)",
      "Inspiratory Reserve Volume (IRV) (as well as Vital Capacity / Expiratory Reserve Volume)",
      "Ratio of RV to TLC"
    ],
    "c": 3,
    "r": "In obstructive lung disease, TLC, FRC, and RV are increased (hyperinflation/air trapping), which encroaches upon and decreases IRV, ERV, IC, and VC. In restrictive lung disease, all volumes and capacities (TLC, FRC, RV, IRV, ERV, IC, VC) are decreased."
  },
  {
    "cat": 2,
    "q": "A 55-year-old patient presents with dyspnea. Spirometry reveals FVC = 55% of predicted, FEV1 = 52% of predicted, and an FEV1/FVC ratio of 0.88 (88%). Total Lung Capacity (TLC) is 58% of predicted. What pattern do these results indicate?",
    "a": [
      "Severe obstructive lung disease",
      "Pure restrictive lung disease",
      "Normal pulmonary function",
      "Isolated upper airway foreign body",
      "Acute bronchospasm"
    ],
    "c": 1,
    "r": "In restrictive lung disease, both FEV1 and FVC are decreased proportionately, resulting in a normal or increased FEV1/FVC ratio (>=0.80), accompanied by a decreased Total Lung Capacity (TLC)."
  },
  {
    "cat": 2,
    "q": "Which parameter on spirometry represents the Forced Expiratory Flow over the middle 50% of the Forced Vital Capacity, and what is its clinical significance?",
    "a": [
      "PEFR; reflects large upper airway patency only",
      "FEF 25–75%; reflects airflow in medium-to-small airways and is decreased in obstructive lung diseases",
      "MVV; reflects diaphragmatic endurance over 15 seconds",
      "DLCO; reflects alveolar capillary hemoglobin concentration",
      "ERV; reflects resting expiratory reserve"
    ],
    "c": 1,
    "r": "FEF 25–75% is the Forced Expiratory Flow over the middle 50% of the FVC. It is decreased in obstructive lung diseases and is a sensitive indicator of small/medium airway obstruction."
  },
  {
    "cat": 2,
    "q": "Two patients (Patient X with severe emphysema and Patient Y with severe idiopathic pulmonary fibrosis) both undergo Diffusing Capacity of the Lung for Carbon Monoxide (DLCO) testing. Both patients demonstrate a significantly reduced DLCO. Based on the lecture, what are the respective mechanisms for the reduced DLCO in Patient X and Patient Y?",
    "a": [
      "Patient X: increased membrane thickness; Patient Y: loss of alveolar surface area",
      "Patient X: loss of alveolar-capillary surface area (destruction of alveolar walls); Patient Y: increased diffusion barrier thickness (interstitial fibrosis)",
      "Patient X: high carboxyhemoglobin; Patient Y: polycythemia",
      "Patient X: increased pulmonary capillary blood volume; Patient Y: bronchodilation",
      "Both patients have reduced DLCO solely due to inspiratory muscle weakness"
    ],
    "c": 1,
    "r": "According to Fick's law and the PFT lecture on DLCO, a reduced DLCO indicates an impaired diffusion barrier, such as loss of surface area in emphysema (Patient X) or increased barrier thickness in pulmonary fibrosis (Patient Y)."
  },
  {
    "cat": 2,
    "q": "All of the following conditions are listed in the lecture as causes of a decreased Maximal Breathing Capacity (MBC / MVV) EXCEPT:",
    "a": [
      "Poor patient effort",
      "Neuromuscular diseases",
      "Obstructive and restrictive lung diseases",
      "Heart diseases and obesity",
      "Athletic training in a tall young adult"
    ],
    "c": 4,
    "r": "MBC/MVV is decreased in poor effort, neuromuscular diseases, obstructive and restrictive lung diseases, heart diseases, and obesity. It is increased/greater in large and athletic individuals."
  },
  {
    "cat": 3,
    "q": "What is the fundamental pathophysiological defect that characterizes all obstructive lung diseases?",
    "a": [
      "Reduced expansion of lung parenchyma with decreased total lung capacity",
      "Increase in resistance to airflow, predominantly during expiration, resulting in a reduced FEV1",
      "Primary fibrotic thickening of the alveolar-capillary basement membrane",
      "Paralysis of the phrenic nerve with preserved airway caliber",
      "Excessive elastic recoil of the lung parenchyma"
    ],
    "c": 1,
    "r": "In obstructive lung disease, the core defect is an increase in resistance to airflow (predominantly during expiration) with a markedly reduced FEV1 and FEV1/FVC < 0.8."
  },
  {
    "cat": 3,
    "q": "Which historical acronym was previously used in clinical medicine to describe Chronic Obstructive Pulmonary Disease (COPD), and which two major pathological entities are grouped under it?",
    "a": [
      "ARDS; Acute bronchitis and bronchiectasis",
      "COAD (Chronic Obstructive Airways Disease); Chronic bronchitis and emphysema",
      "PAINT; Pleurisy and interstitial pneumonitis",
      "COLD; Cystic fibrosis and asthma",
      "IRDS; Hyaline membrane disease and sarcoidosis"
    ],
    "c": 1,
    "r": "COPD was previously termed COAD (Chronic Obstructive Airways Disease) and encompasses chronic bronchitis and emphysema."
  },
  {
    "cat": 3,
    "q": "A 54-year-old male smoker presents with a chronic productive cough. According to the lecture, what is the exact clinical definition required to diagnose Chronic Bronchitis?",
    "a": [
      "Cough with sputum production for at least 1 month in 3 consecutive years",
      "Cough with sputum production for at least 3 months in 2 consecutive years",
      "Episodic wheezing and dry cough occurring at night for 6 months",
      "Permanent enlargement of airspaces distal to the terminal bronchiole",
      "Daily hemoptysis lasting more than 2 weeks"
    ],
    "c": 1,
    "r": "Chronic bronchitis is clinically defined as cough with sputum production for at least 3 months in 2 consecutive years."
  },
  {
    "cat": 3,
    "q": "In the pathogenesis of chronic bronchitis, where does the initial inflammatory lesion begin, and what is the primary histological hallmark seen in the larger airways?",
    "a": [
      "Begins in the pleural mesothelium; hallmark is calcification of cartilage rings",
      "Begins in the bronchioles (bronchiolar inflammation); hallmark is mucus hypersecretion and hypertrophy of bronchial submucosal mucous glands",
      "Begins in the pulmonary artery intima; hallmark is plexiform lesions",
      "Begins in the alveolar Type I pneumocytes; hallmark is loss of elastin without mucus production",
      "Begins in the olfactory mucosa; hallmark is atrophy of Bowman's glands"
    ],
    "c": 1,
    "r": "In chronic bronchitis, the initial inflammatory process begins in the bronchioles (bronchiolar inflammation), and the primary histological hallmark is mucus hypersecretion and hypertrophy of bronchial mucous glands."
  },
  {
    "cat": 3,
    "q": "Long-standing chronic irritation and inflammation of the bronchial mucosa in a middle-aged male smoker with chronic bronchitis can lead to which sequential neoplastic transformation?",
    "a": [
      "Goblet cell hyperplasia -> Adenocarcinoma in situ",
      "Squamous metaplasia -> Squamous cell carcinoma",
      "Smooth muscle hypertrophy -> Leiomyosarcoma",
      "Cartilage ossification -> Chondrosarcoma",
      "Serous demilune atrophy -> Mesothelioma"
    ],
    "c": 1,
    "r": "In chronic bronchitis, long-standing inflammation of the bronchial epithelium leads to squamous metaplasia, which can progress to dysplasia and eventually squamous cell carcinoma."
  },
  {
    "cat": 3,
    "q": "Patients with chronic bronchitis are prone to recurrent low-grade bacterial and viral infections that cause acute exacerbations. Which specific group of 4 organisms (2 bacteria, 2 viruses) is explicitly listed in the lecture slides as common causes?",
    "a": [
      "Staphylococcus aureus, Pseudomonas aeruginosa, Influenza B, and Parainfluenza virus",
      "Haemophilus influenzae, Streptococcus pneumoniae, Respiratory syncytial virus (RSV), and Adenovirus",
      "Klebsiella pneumoniae, Moraxella catarrhalis, Rhinovirus, and Coronavirus",
      "Mycoplasma pneumoniae, Legionella pneumophila, Cytomegalovirus, and Epstein-Barr virus",
      "Mycobacterium tuberculosis, Bordetella pertussis, Measles virus, and Varicella-zoster virus"
    ],
    "c": 1,
    "r": "The Obstructive Lung Disease lecture explicitly lists Haemophilus influenzae, Streptococcus pneumoniae, Respiratory Syncytial Virus (RSV), and Adenovirus as the common bacterial and viral causes of recurrent low-grade infections in chronic bronchitis."
  },
  {
    "cat": 3,
    "q": "Why are bronchodilators clinically effective in relieving symptoms in many patients with chronic bronchitis, even though the disease is primarily characterized by structural mucosal gland hypertrophy and mucus hypersecretion?",
    "a": [
      "Bronchodilators dissolve mucin disulfide bonds directly in the airway lumen",
      "Chronic bronchial irritation induces a reversible bronchoconstrictive (bronchospastic) component",
      "Bronchodilators regenerate destroyed alveolar elastin fibers",
      "Bronchodilators convert squamous metaplasia back into ciliated columnar epithelium",
      "Bronchodilators selectively constrict the pulmonary arteries"
    ],
    "c": 1,
    "r": "Although chronic bronchitis is primarily a structural mucosal disease, chronic bronchial irritation induces a reversible bronchoconstrictive component that responds to bronchodilator therapy."
  },
  {
    "cat": 3,
    "q": "In the clinical classification of COPD phenotypes, a patient with predominant chronic bronchitis is classically described as a 'Blue Bloater'. Which type of respiratory failure and blood gas abnormality characterizes this phenotype?",
    "a": [
      "Type 1 respiratory failure: hypoxemia without hypercapnia",
      "Type 2 respiratory failure: hypercapnia, hypoxemia, and cyanosis",
      "Compensated respiratory alkalosis with hyperoxia",
      "Isolated metabolic acidosis with normal arterial PO2 and PCO2",
      "Normal blood gases maintained by extreme hyperventilation"
    ],
    "c": 1,
    "r": "'Blue bloaters' (predominant chronic bronchitis) develop Type 2 respiratory failure characterized by hypercapnia (high PaCO2), hypoxemia (low PaO2), and cyanosis."
  },
  {
    "cat": 3,
    "q": "Why do patients with chronic bronchitis develop an enlarged ('barrel-shaped') thorax?",
    "a": [
      "Massive bilateral pleural effusions pushing the ribs outward",
      "Incomplete expulsion of air during expiration resulting in chronic air trapping and hyperinflation",
      "Hypertrophy of the pectoralis major and intercostal muscles",
      "Osteophytic overgrowth of the thoracic vertebrae",
      "Accumulation of fibrotic scar tissue expanding the interstitium"
    ],
    "c": 1,
    "r": "Patients with chronic bronchitis (and COPD) develop an enlarged thorax due to incomplete expulsion of air resulting in chronic air trapping (increased RV, FRC, and TLC)."
  },
  {
    "cat": 3,
    "q": "How is Emphysema defined pathologically in the lecture?",
    "a": [
      "Hyperplasia of goblet cells in the trachea and mainstem bronchi",
      "Enlargement of alveolar air spaces accompanied by destruction of elastin in the alveolar walls",
      "Permanent dilation of bronchi and bronchioles caused by necrotizing bacterial infection",
      "Accumulation of proteinaceous edema fluid in the alveolar spaces",
      "Interstitial deposition of collagen fibers between the alveolar and capillary basement membranes"
    ],
    "c": 1,
    "r": "Emphysema is defined pathologically as the abnormal, permanent enlargement of alveolar air spaces accompanied by destruction of elastin in the alveolar walls."
  },
  {
    "cat": 3,
    "q": "Why is emphysema classified as an OBSTRUCTIVE lung disease even though the primary destructive lesion is the loss of elastin in the alveolar walls rather than mucosal plugging of large bronchi?",
    "a": [
      "Destroyed elastin fragments calcify and form stony broncholiths inside the trachea",
      "Respiratory bronchioles lack cartilage and are normally held open during expiration by the radial traction of elastic tissue in the walls of adjacent alveoli; when alveolar elastin is lost, the respiratory bronchioles collapse during expiration",
      "Loss of elastin causes severe spasm of the cricothyroid muscle in the larynx",
      "Alveolar destruction triggers massive submucosal gland hypertrophy in the mainstem bronchus",
      "Emphysema is actually a restrictive disease that is misclassified on spirometry"
    ],
    "c": 1,
    "r": "As highlighted in the lecture: Respiratory bronchioles are held open by elastic tissue in the walls of adjacent alveoli (radial traction); when this elastic tissue is lost in emphysema, the respiratory bronchioles collapse during expiration, causing airflow obstruction."
  },
  {
    "cat": 3,
    "q": "According to the Obstructive Lung Disease lecture, approximately what proportion of the lung must be structurally damaged in emphysema before clinical symptoms (such as dyspnea) first appear?",
    "a": [
      "5% of the lung",
      "One-tenth (10%) of the lung",
      "One-third (1/3 or ~33%) of the lung",
      "Three-quarters (75%) of the lung",
      "90% of the lung"
    ],
    "c": 2,
    "r": "The lecture specifically notes that approximately one-third (1/3) of the lung must be affected in emphysema before clinical symptoms first appear."
  },
  {
    "cat": 3,
    "q": "In the classification of COPD phenotypes, a patient with predominant emphysema is classically termed a 'Pink Puffer'. How do 'Pink Puffers' maintain gaseous exchange, and what type of respiratory failure do they exhibit?",
    "a": [
      "They hypoventilate and develop early severe hypercapnia and cyanosis (Type 2 respiratory failure)",
      "They overventilate (hyperventilate) to maintain relatively normal gaseous exchange initially, and develop Type 1 respiratory failure (hypoxemia without hypercapnia)",
      "They develop acute pulmonary edema with pink frothy sputum in the first week of disease",
      "They rely on carboxyhemoglobin to give their skin a cherry-pink color",
      "They exhibit normal FEV1/FVC ratios and increased DLCO"
    ],
    "c": 1,
    "r": "'Pink puffers' (emphysema phenotype) overventilate/hyperventilate to maintain gaseous exchange and present with Type 1 respiratory failure (hypoxemia without hypercapnia), lacking the cyanosis and edema of 'blue bloaters'."
  },
  {
    "cat": 3,
    "q": "Which anatomical subtype of emphysema predominantly affects the respiratory bronchioles while sparing the distal alveoli, and is identified as the MOST common form in cigarette smokers?",
    "a": [
      "Panacinar (panlobular) emphysema",
      "Centriacinar (centrilobular) emphysema",
      "Paraseptal (distal acinar) emphysema",
      "Irregular airspace emphysema",
      "Bullous congenital lobar emphysema"
    ],
    "c": 1,
    "r": "Centriacinar (centrilobular) emphysema affects the central/proximal parts of the acinus (respiratory bronchioles) while sparing distal alveoli, and is explicitly highlighted as the most common form in smokers."
  },
  {
    "cat": 3,
    "q": "A 38-year-old non-smoker presents with early-onset lower-lobe predominant emphysema and liver cirrhosis due to inherited alpha-1-antitrypsin (AAT) deficiency. Which morphological pattern of emphysema is classically associated with alpha-1-antitrypsin deficiency?",
    "a": [
      "Centriacinar (centrilobular) emphysema",
      "Panacinar (panlobular) emphysema",
      "Bronchiolar squamous metaplasia",
      "Subpleural paraseptal fibrosis",
      "Hyaline membrane disease"
    ],
    "c": 1,
    "r": "Panacinar (panlobular) emphysema involves uniform enlargement and destruction of the entire acinus (from respiratory bronchiole to terminal blind alveoli) and is classically caused by alpha-1-antitrypsin deficiency."
  },
  {
    "cat": 3,
    "q": "Why do patients with advanced emphysema classically experience progressive weight loss and cachexia?",
    "a": [
      "Malabsorption of fats due to pancreatic insufficiency",
      "Markedly increased work of breathing and caloric expenditure required to overcome airflow obstruction and progressive dyspnea",
      "Chronic diarrhea caused by Adenovirus",
      "Hyperthyroidism induced by chronic hypoxia",
      "Renal wasting of amino acids"
    ],
    "c": 1,
    "r": "In advanced emphysema, patients develop progressive dyspnea and weight loss due to the markedly increased work of breathing."
  },
  {
    "cat": 3,
    "q": "As emphysema and chronic bronchitis progress over years, destruction of pulmonary capillaries and chronic hypoxic pulmonary vasoconstriction lead to pulmonary hypertension. What is the specific cardiovascular complication that results from this process?",
    "a": [
      "Left ventricular hypertrophy and aortic stenosis",
      "Right heart failure (cor pulmonale)",
      "Infective endocarditis of the mitral valve",
      "Pericardial tamponade",
      "Coarctation of the aorta"
    ],
    "c": 1,
    "r": "Chronic progression of COPD/emphysema leads to pulmonary hypertension and subsequent right heart failure (cor pulmonale)."
  },
  {
    "cat": 3,
    "q": "What change in sputum character is specifically noted during an acute infectious exacerbation of emphysema or chronic bronchitis?",
    "a": [
      "Clear, watery serous transudate",
      "Purulent sputum (thick, yellow/green neutrophil-rich sputum)",
      "Rust-colored sputum containing Curschmann spirals only",
      "Chylous milky sputum",
      "Complete cessation of sputum production"
    ],
    "c": 1,
    "r": "Infectious exacerbations are characterized by the production of purulent sputum."
  },
  {
    "cat": 3,
    "q": "Which of the following sets of conditions are explicitly grouped together in the lecture as common obstructive lung diseases alongside COPD?",
    "a": [
      "Sarcoidosis, asbestosis, and silicosis",
      "Asthma, bronchiectasis, and cystic fibrosis (or bronchiolitis)",
      "Scoliosis, muscular dystrophy, and obesity",
      "ARDS, pulmonary edema, and lobar pneumonia",
      "Kyphoscoliosis, ankylosing spondylitis, and pleural effusion"
    ],
    "c": 1,
    "r": "Besides COPD (chronic bronchitis and emphysema), the common obstructive lung diseases listed in the lecture are asthma, bronchiectasis, and cystic fibrosis (as well as bronchiolitis)."
  },
  {
    "cat": 3,
    "q": "In the immunopathology and treatment of bronchial asthma, which of the following best describes the nature of the airway obstruction compared to emphysema?",
    "a": [
      "Irreversible destruction of alveolar walls with loss of DLCO",
      "Reversible bronchoconstriction, airway hyperresponsiveness, mucosal edema, and eosinophilic/Th2-mediated inflammation",
      "Fixed fibrotic obliteration of the pleural cavity",
      "Suppurative necrotizing destruction of medium-sized cartilage plates",
      "Absence of smooth muscle contraction"
    ],
    "c": 1,
    "r": "Asthma is characterized by reversible airflow obstruction due to bronchial smooth muscle contraction (bronchospasm), airway inflammation (mast cells, eosinophils, IgE/Th2 cytokines), and mucosal edema."
  },
  {
    "cat": 3,
    "q": "Which autonomic nervous system receptor and neurotransmitter pathway is the primary target for bronchodilation when regulating bronchial tone in asthma and COPD?",
    "a": [
      "Stimulation of parasympathetic M3 muscarinic receptors by acetylcholine",
      "Stimulation of sympathetic beta-2 adrenergic receptors (producing bronchodilation) or blockade of parasympathetic muscarinic receptors",
      "Stimulation of alpha-1 adrenergic receptors on bronchial glands",
      "Activation of histamine H1 receptors and leukotriene CysLT1 receptors",
      "Blockade of beta-2 adrenergic receptors with non-selective beta-blockers"
    ],
    "c": 1,
    "r": "Bronchial tone is regulated by parasympathetic cholinergic (vagal M3) fibers causing bronchoconstriction and sympathetic/circulating epinephrine acting on beta-2 adrenergic receptors causing bronchodilation. Thus, beta-2 agonists and muscarinic antagonists are key bronchodilators."
  },
  {
    "cat": 3,
    "q": "In a patient with an acute asthma attack, what happens to the Peak Expiratory Flow (PEF) and the Forced Vital Capacity (FVC) time?",
    "a": [
      "PEF increases above 600 L/min and FVC is exhaled in <1 second",
      "PEF is significantly reduced (<400 L/min) and the time required to exhale FVC is prolonged (>3 seconds)",
      "PEF remains completely normal while TLC drops to 2 L",
      "FEV1/FVC ratio rises above 0.95",
      "Residual Volume drops to zero"
    ],
    "c": 1,
    "r": "In large/medium airway obstruction such as acute asthma, PEFR (normal 400–600 L/min) is reduced, the expiratory flow-volume curve becomes concave, and FVC exhalation time is prolonged beyond the normal <3 seconds."
  },
  {
    "cat": 4,
    "q": "What is the hallmark pathophysiological definition of Restrictive Lung Disease?",
    "a": [
      "Increased resistance to expiratory airflow with hyperinflation",
      "Reduced expansion of lung parenchyma accompanied by decreased Total Lung Capacity (TLC)",
      "Isolated destruction of respiratory bronchioles in the upper lobes",
      "Reversible bronchospasm triggered by cold air or allergens",
      "Mucus gland hypertrophy for 3 months in 2 consecutive years"
    ],
    "c": 1,
    "r": "Restrictive lung disease is defined by reduced expansion of the lung parenchyma, decreased lung compliance, and a decreased Total Lung Capacity (TLC)."
  },
  {
    "cat": 4,
    "q": "In the Restrictive Lung Disease lecture, the mnemonic 'PAINT' is used to categorize the anatomical causes of restriction. What do the letters in 'PAINT' stand for?",
    "a": [
      "Pulmonary artery, Airway, Infection, Neoplasia, Trachea",
      "Pleural, Alveolar, Interstitial, Neuromuscular, Thoracic cage abnormalities",
      "Parenchymal, Allergic, Idiopathic, Necrotizing, Thrombotic",
      "Pericardial, Asthma, Inflammatory, Neurogenic, Traumatic",
      "Pneumothorax, Atelectasis, Infarction, Nodular, Tuberculosis"
    ],
    "c": 1,
    "r": "The mnemonic PAINT stands for: Pleural, Alveolar, Interstitial, Neuromuscular, and Thoracic cage abnormalities."
  },
  {
    "cat": 4,
    "q": "Which of the following pairs correctly matches an extrapulmonary restrictive lung disorder with its category in the 'PAINT' classification?",
    "a": [
      "Scoliosis and marked obesity – Thoracic cage / compressive abnormalities; Muscular dystrophy – Neuromuscular disorder",
      "Asbestosis – Neuromuscular disorder; Sarcoidosis – Thoracic cage abnormality",
      "Chronic bronchitis – Pleural abnormality; Emphysema – Interstitial abnormality",
      "Asthma – Alveolar abnormality; Bronchiectasis – Thoracic cage abnormality",
      "Silicosis – Neuromuscular disorder; Kyphoscoliosis – Alveolar disorder"
    ],
    "c": 0,
    "r": "Scoliosis and marked obesity are Thoracic cage / chest wall compressive causes of restriction, while muscular dystrophy is a Neuromuscular cause of restriction. Asbestosis and sarcoidosis are intrinsic/interstitial lung diseases."
  },
  {
    "cat": 4,
    "q": "Why does Congestive Cardiac Failure (left-sided heart failure) present with restrictive pulmonary mechanics on pulmonary function testing?",
    "a": [
      "It causes destruction of bronchial hyaline cartilage plates",
      "Pulmonary venous congestion and interstitial/alveolar fluid accumulation stiffen the lung parenchyma and reduce lung compliance",
      "It paralyzes the diaphragm by compressing the phrenic nerve",
      "It causes alpha-1-antitrypsin deficiency in the lower lobes",
      "It selectively dilates the anatomical dead space"
    ],
    "c": 1,
    "r": "Congestive cardiac failure causes pulmonary venous congestion and interstitial/alveolar edema, which reduces parenchymal compliance and restricts lung expansion."
  },
  {
    "cat": 4,
    "q": "How is the pulmonary 'interstitium' defined anatomically in the Restrictive Lung Disease lecture?",
    "a": [
      "The potential space between the parietal pleura and visceral pleura",
      "The connective tissue space located between the alveolar epithelial basement membrane and the capillary endothelial basement membrane",
      "The lumen of the terminal and respiratory bronchioles",
      "The submucosal layer of the trachea containing compound tubuloalveolar glands",
      "The space between the external and internal intercostal muscles"
    ],
    "c": 1,
    "r": "The pulmonary interstitium is defined as the connective tissue space between the alveolar epithelial basement membrane and the capillary endothelial basement membrane."
  },
  {
    "cat": 4,
    "q": "Which systemic granulomatous disorder and which occupational pneumoconiosis are specifically listed in the PFT and Restrictive Lung Disease lectures as classic examples of intrinsic interstitial restrictive lung disease?",
    "a": [
      "Sarcoidosis and Asbestosis",
      "Bronchiectasis and Cystic fibrosis",
      "Centriacinar emphysema and Chronic bronchitis",
      "Muscular dystrophy and Guillain-Barré syndrome",
      "Obesity hypoventilation and Pectus excavatum"
    ],
    "c": 0,
    "r": "Pulmonary fibrosis, asbestosis, and sarcoidosis are explicitly listed as classic intrinsic causes of restrictive lung disease."
  },
  {
    "cat": 4,
    "q": "In a patient with restrictive lung disease, what is the primary mechanical limitation that causes the symptom of shortness of breath (dyspnea)?",
    "a": [
      "Difficulty expelling air from the lungs due to premature bronchiolar collapse",
      "Difficulty taking air INTO the lung (inspiration) due to lung tissue stiffness (reduced compliance) or chest wall/neuromuscular resistance",
      "Overproduction of mucus plugs in the mainstem bronchus",
      "Laryngeal stridor during inspiration",
      "Air trapping increasing Residual Volume above 4 liters"
    ],
    "c": 1,
    "r": "Whereas obstructive lung disease is characterized by difficulty exhaling air out of the lung, restrictive lung disease is characterized by difficulty taking air into the lung due to stiff, non-compliant parenchyma or chest wall/neuromuscular restriction."
  },
  {
    "cat": 4,
    "q": "A 45-year-old ICU patient with severe sepsis develops acute refractory hypoxemia. Chest radiograph shows diffuse, bilateral fluffy alveolar infiltrates ('white-out' appearance), and the lungs are described pathologically as 'waterlogged'. What is the diagnosis, and what are the two major categories of insults that initiate its inflammatory cascade?",
    "a": [
      "Chronic bronchitis; initiated by cigarette smoke and Adenovirus",
      "Acute Respiratory Distress Syndrome (ARDS); initiated by direct insults to alveoli (e.g., toxic inhalation/aspiration) and indirect insults via pulmonary capillaries (e.g., sepsis)",
      "Panacinar emphysema; initiated by protease-antiprotease imbalance",
      "Spontaneous pneumothorax; initiated by apical subpleural bleb rupture",
      "Bronchial asthma; initiated by IgE cross-linking on mast cells"
    ],
    "c": 1,
    "r": "ARDS presents with diffuse bilateral fluffy alveolar infiltrates ('white-out' / waterlogged lungs) and is initiated by two major categories of etiology: direct insults to the alveoli (e.g., smoke/toxic gas inhalation, aspiration) and indirect blood-borne insults via the pulmonary capillaries (e.g., sepsis)."
  },
  {
    "cat": 4,
    "q": "According to the Restrictive Lung Disease lecture on ARDS, what is the FIRST pathological phase of ARDS, what is its typical timeframe, and what are its key hallmarks?",
    "a": [
      "Fibrotic ('Hardening') Phase; >21 days; diffuse collagen deposition and cystic remodeling",
      "Exudative ('Wet') Phase; Days 4 to 7 (or acute onset up to day 7); characterized by interstitial and alveolar edema, neutrophil influx, and increased cytokine release ('wet lung')",
      "Proliferative ('Filling Pus') Phase; Days 7 to 21; fibroblast activation and empyema",
      "Latent Asymptomatic Phase; Weeks 1 to 4; isolated goblet cell metaplasia",
      "Resolution Phase; Days 1 to 3; complete clearance of alveolar fluid without inflammation"
    ],
    "c": 1,
    "r": "The first phase of ARDS in the lecture is the Exudative ('Wet') Phase (timeframe noted as days 4–7), characterized by interstitial edema, alveolar edema, neutrophil influx, and increased cytokine release ('wet lung')."
  },
  {
    "cat": 4,
    "q": "What is the SECOND phase of ARDS described in the lecture, what is its timeframe, and what are its major pathological features?",
    "a": [
      "Exudative ('Wet') Phase; Days 1 to 4; pure transudative fluid",
      "Proliferative ('Filling Pus') Phase; Days 7 to 21; characterized by fibroblast activation, pus/empyema accumulation, intimal and alveolar fibrosis, and a high risk of pneumothorax",
      "Fibrotic ('Hardening') Phase; >21 days; burnt lung appearance",
      "Bronchiectatic Phase; Months 3 to 6; cartilage destruction",
      "Vascular Shunt Phase; Hours 1 to 12; isolated Zone 1 expansion"
    ],
    "c": 1,
    "r": "The second phase of ARDS is the Proliferative ('Filling Pus') Phase, occurring from days 7 to 21, characterized by fibroblast activation, pus/empyema accumulation, intimal and alveolar fibrosis, and high pneumothorax risk."
  },
  {
    "cat": 4,
    "q": "Why is the risk of pneumothorax markedly elevated during the Proliferative phase (days 7–21) of ARDS?",
    "a": [
      "Surfactant overproduction causes the alveoli to hyperinflate spontaneously",
      "The lung parenchyma becomes stiff, non-compliant, fibrotic, and cystic, making it highly vulnerable to barotrauma and alveolar rupture (especially during mechanical ventilation)",
      "Staphylococcus aureus erodes directly through the ribs and intercostal muscles",
      "Intrapleural pressure becomes +50 cm H2O during quiet inspiration",
      "Elastic fibers unkink and dissolve the visceral pleura"
    ],
    "c": 1,
    "r": "During the proliferative phase of ARDS, fibroblast activation and alveolar fibrosis make the lung parenchyma stiff, non-compliant, and cystic, elevating the risk of pneumothorax from barotrauma/rupture."
  },
  {
    "cat": 4,
    "q": "What is the THIRD (final) phase of ARDS according to the lecture, when does it occur, and what descriptive term is applied to the lungs?",
    "a": [
      "Exudative Phase; <7 days; 'waterlogged lung'",
      "Fibrotic ('Hardening') Phase; occurring after 21 days (>21 days); characterized by diffuse pulmonary fibrosis, permanent loss of alveolar architecture, and emphysematous cystic remodeling ('burnt lung')",
      "Granulomatous Phase; occurring at 14 days; 'cheese-like lung'",
      "Metaplastic Phase; occurring at 2 years; 'smoker's lung'",
      "Congestive Phase; occurring at 10 days; 'nutmeg lung'"
    ],
    "c": 1,
    "r": "The third phase of ARDS is the Fibrotic ('Hardening') Phase, occurring after 21 days (>21 days), characterized by diffuse pulmonary fibrosis, permanent loss of alveolar architecture, and emphysematous cystic remodeling ('burnt lung')."
  },
  {
    "cat": 4,
    "q": "How does acute alveolar flooding during the exudative ('waterlogged') phase of ARDS cause severe hypoxemia?",
    "a": [
      "It converts all pulmonary blood flow into West Zone 1 (alveolar dead space)",
      "Protein-rich edema fluid filling the alveoli physically blocks oxygen diffusion into perfused pulmonary capillaries, creating a right-to-left intrapulmonary shunt and V/Q mismatch",
      "It inhibits hemoglobin synthesis in the bone marrow",
      "It shifts the oxygen-hemoglobin dissociation curve to the far left by increasing HbF",
      "It selectively blocks carbon dioxide diffusion while sparing oxygen diffusion"
    ],
    "c": 1,
    "r": "In ARDS, increased alveolar-capillary permeability causes proteinaceous edema fluid to flood the alveoli, physically blocking oxygen diffusion into perfused capillaries (intrapulmonary shunt) and severely impairing gas exchange."
  },
  {
    "cat": 4,
    "q": "According to Fick's Law of Diffusion covered in the Pulmonary Circulation and Gas Exchange lecture, the rate of gas transfer across the respiratory membrane is directly proportional to which factors, and inversely proportional to which factor?",
    "a": [
      "Directly proportional to membrane thickness; inversely proportional to surface area and partial pressure gradient",
      "Directly proportional to surface area, diffusion coefficient (gas solubility / sqrt(MW)), and partial pressure difference (P1 - P2); inversely proportional to membrane thickness",
      "Directly proportional to molecular weight and membrane thickness; inversely proportional to gas solubility",
      "Directly proportional to Residual Volume; inversely proportional to Peak Expiratory Flow Rate",
      "Directly proportional to alveolar nitrogen concentration; inversely proportional to cardiac output"
    ],
    "c": 1,
    "r": "Fick's Law states that gas diffusion across the respiratory membrane is directly proportional to available surface area (A), gas diffusion coefficient/solubility (D), and partial pressure gradient (ΔP), and inversely proportional to membrane thickness (T)."
  },
  {
    "cat": 4,
    "q": "When comparing the diffusing capacities of Carbon Dioxide (CO2) and Oxygen (O2) across the alveolar-capillary respiratory membrane, why does CO2 diffuse approximately 20 times faster than O2?",
    "a": [
      "CO2 has a much smaller molecular weight than O2",
      "The partial pressure gradient for CO2 (~5–6 mmHg) is much larger than that for O2 (~60 mmHg)",
      "CO2 has a much higher solubility in the fluid/tissue of the respiratory membrane than O2, giving it a ~20-fold higher diffusion coefficient",
      "Active transport pumps selectively carry CO2 across Type I pneumocytes",
      "O2 can only diffuse through the thick blood-air barrier, whereas CO2 uses the thin blood-air barrier"
    ],
    "c": 2,
    "r": "Although O2 and CO2 have similar molecular weights, CO2 is ~20–24 times more soluble in water/tissue membranes than O2, giving CO2 a diffusing capacity roughly 20 times greater than that of oxygen."
  }
];

// 25 Dedicated Respiratory Pharmacology Questions
export const respiratoryPharmaQuestions: Question[] = [
  {
    "cat": 5,
    "q": "A 35-year-old healthcare worker has a positive tuberculin skin test after exposure to a patient with cavitary lung disease. He is completely asymptomatic with a normal chest radiograph. What percentage of primary Mycobacterium tuberculosis infections follow this latent course?",
    "a": [
      "Less than 5% of infected individuals",
      "Approximately 25% of infected individuals",
      "Approximately 50% of infected individuals",
      "Approximately 75% of infected individuals",
      "Greater than 95% of infected individuals"
    ],
    "c": 4,
    "r": "According to the Tuberculosis lecture, >95% of primary tuberculosis infections result in latent (asymptomatic) infection, whereas <5% progress directly to active primary tuberculosis."
  },
  {
    "cat": 5,
    "q": "A 61-year-old man with chronic bronchitis presents in November with a history of frequent wintertime infectious exacerbations. According to the lecture on respiratory infections, what antimicrobial strategy is indicated for patients with recurrent winter exacerbations?",
    "a": [
      "Continuous intravenous carbapenem therapy year-round",
      "Suppressive antibiotic chemotherapy during colder months",
      "Withholding antibiotics until respiratory failure develops",
      "Triple-drug anti-tuberculous therapy for six months",
      "Aerosolized antifungal prophylaxis prior to winter"
    ],
    "c": 1,
    "r": "In the Treatment of Respiratory Bacterial Infections lecture, patients with chronic bronchitis who suffer recurrent acute exacerbations during colder months are managed with suppressive chemotherapy (prophylactic antibiotics), and acute exacerbations are treated at the first sign of chest infection."
  },
  {
    "cat": 5,
    "q": "A 14-year-old boy with a history of atopic dermatitis presents with episodic wheezing and dyspnea triggered by house-dust mites and grass pollen. Which immunopathological profile best characterizes his asthma phenotype?",
    "a": [
      "T2-low neutrophilic inflammation mediated by IL-17 and TNF-alpha",
      "T2-high eosinophilic inflammation mediated by IL-4, IL-5, IL-13, and IgE",
      "CD8+ cytotoxic T-lymphocyte destruction of alveolar Type I pneumocytes",
      "Immune-complex deposition with complement C3a activation in capillaries",
      "Pauci-granulocytic remodeling without adaptive immune activation"
    ],
    "c": 1,
    "r": "Extrinsic (allergic) asthma typically presents in younger atopic patients triggered by inhaled allergens (dust mites, pollens, grass, animal dander) and is driven by a T2-high immune response involving Th2 cytokines (IL-4, IL-5, IL-13), IgE class switching, mast cells, and eosinophils."
  },
  {
    "cat": 5,
    "q": "Which pathophysiological abnormality is shared across all chronic obstructive airway diseases, including asthma, chronic bronchitis, emphysema, and bronchiectasis?",
    "a": [
      "Primary reduction in parenchymal compliance with low Residual Volume",
      "Increased resistance to expiratory airflow with a reduced FEV1",
      "Diffuse collagen deposition within the alveolar-capillary interstitium",
      "Destruction of hyaline cartilage rings in the upper trachea",
      "Proportionate reduction in FEV1 and FVC with an FEV1/FVC ratio >0.85"
    ],
    "c": 1,
    "r": "The unifying hallmark of all obstructive lung diseases is an increase in resistance to airflow (predominantly during expiration), resulting in a reduced FEV1 and FEV1/FVC <0.8."
  },
  {
    "cat": 5,
    "q": "In clinical pathology, the term Chronic Obstructive Pulmonary Disease (COPD, formerly COAD) specifically encompasses which two overlapping entities?",
    "a": [
      "Bronchial asthma and bronchiectasis",
      "Chronic bronchitis and emphysema",
      "Cystic fibrosis and obliterative bronchiolitis",
      "Sarcoidosis and hypersensitivity pneumonitis",
      "Acute bronchitis and lobar pneumonia"
    ],
    "c": 1,
    "r": "COPD (previously termed COAD, Chronic Obstructive Airways Disease) specifically groups together chronic bronchitis and emphysema."
  },
  {
    "cat": 5,
    "q": "A 56-year-old male smoker presents to the clinic complaining of a chronic morning cough. Which historical criterion is required to establish a clinical diagnosis of chronic bronchitis?",
    "a": [
      "Dry, non-productive cough lasting at least 2 months in 3 consecutive years",
      "Cough with sputum production for at least 3 months in 2 consecutive years",
      "Recurrent wheezing and dyspnea occurring at least twice weekly for 1 year",
      "Purulent sputum production accompanied by hemoptysis for 4 weeks",
      "Radiographic evidence of permanent airspace enlargement over 6 months"
    ],
    "c": 1,
    "r": "Chronic bronchitis is defined clinically as a persistent cough with sputum production for at least 3 months in 2 consecutive years."
  },
  {
    "cat": 5,
    "q": "In a middle-aged smoker developing chronic bronchitis, where does the earliest inflammatory lesion originate, and what structural change predominates in the larger bronchi?",
    "a": [
      "Originates in the alveoli; predominance of Type II pneumocyte hyperplasia",
      "Originates in the bronchioles; predominance of submucosal mucous gland hypertrophy",
      "Originates in the trachea; predominance of hyaline cartilage calcification",
      "Originates in the visceral pleura; predominance of mesothelial fibrosis",
      "Originates in the pulmonary arterioles; predominance of intimal elastosis"
    ],
    "c": 1,
    "r": "In chronic bronchitis, the initial inflammatory process begins in the small airways (bronchiolar inflammation), while the primary histological hallmark in the larger airways is mucus hypersecretion and hypertrophy of bronchial submucosal mucous glands."
  },
  {
    "cat": 5,
    "q": "A bronchial biopsy from a 60-year-old man with a 40-pack-year smoking history and chronic bronchitis shows replacement of the normal ciliated columnar epithelium by multilayered flat cells. For which malignancy does this lesion directly predispose the patient?",
    "a": [
      "Peripheral bronchoalveolar adenocarcinoma",
      "Bronchogenic squamous cell carcinoma",
      "Pleural malignant mesothelioma",
      "Bronchial carcinoid neuroendocrine tumor",
      "Pulmonary leiomyosarcoma"
    ],
    "c": 1,
    "r": "Long-standing chronic irritation and inflammation of the bronchial mucosa in chronic bronchitis induces squamous metaplasia, which can progress through dysplasia to squamous cell carcinoma."
  },
  {
    "cat": 5,
    "q": "A 59-year-old man with chronic bronchitis presents with an acute exacerbation characterized by increased dyspnea and purulent sputum. Which set of bacterial and viral pathogens is explicitly highlighted in the pathology lecture as the most common causes?",
    "a": [
      "Klebsiella pneumoniae, Pseudomonas aeruginosa, Influenza A, and Rhinovirus",
      "Haemophilus influenzae, Streptococcus pneumoniae, RSV, and Adenovirus",
      "Staphylococcus aureus, Moraxella catarrhalis, Parainfluenza, and Coronavirus",
      "Legionella pneumophila, Mycoplasma pneumoniae, CMV, and EBV",
      "Mycobacterium tuberculosis, Nocardia asteroides, Measles, and Varicella"
    ],
    "c": 1,
    "r": "The Obstructive Lung Disease lecture specifically lists Haemophilus influenzae, Streptococcus pneumoniae, Respiratory Syncytial Virus (RSV), and Adenovirus as the common causes of recurrent low-grade infections in chronic bronchitis."
  },
  {
    "cat": 5,
    "q": "Although chronic bronchitis is fundamentally a disease of mucosal inflammation and mucous gland hypertrophy, inhaled bronchodilators often provide partial symptomatic relief. What explains this therapeutic response?",
    "a": [
      "Beta-2 agonists enzymatically cleave mucin glycoproteins in the airway lumen",
      "Chronic bronchial irritation induces a reversible bronchoconstrictive component",
      "Antimuscarinic agents reverse squamous metaplasia back to ciliated epithelium",
      "Bronchodilators restore destroyed alveolar elastin and radial traction",
      "Beta-2 agonists constrict bronchial mucosal capillaries to halt mucus secretion"
    ],
    "c": 1,
    "r": "Chronic bronchial irritation in chronic bronchitis induces a superimposed reversible bronchoconstrictive (smooth muscle spasm) component that responds to bronchodilators."
  },
  {
    "cat": 5,
    "q": "A 62-year-old overweight smoker with a chronic productive cough presents with peripheral edema and duskiness of the lips and nailbeds ('Blue Bloater'). Which arterial blood gas classification characterizes his condition?",
    "a": [
      "Type 1 respiratory failure with isolated hypoxemia and hypocapnia",
      "Type 2 respiratory failure with hypercapnia, hypoxemia, and cyanosis",
      "Uncompensated respiratory alkalosis with normal arterial oxygenation",
      "Pure metabolic acidosis secondary to renal bicarbonate wasting",
      "Normal PaO2 and PaCO2 maintained by compensatory hyperventilation"
    ],
    "c": 1,
    "r": "'Blue bloaters' (predominant chronic bronchitis phenotype) fail to maintain adequate alveolar ventilation, developing Type 2 respiratory failure characterized by hypercapnia, hypoxemia, and cyanosis."
  },
  {
    "cat": 5,
    "q": "On physical examination, a patient with advanced COPD has an increased anteroposterior chest diameter ('barrel chest'). What mechanical alteration produces this thoracic deformity?",
    "a": [
      "Bilateral exudative pleural effusions expanding the costophrenic angles",
      "Incomplete expiratory air expulsion resulting in chronic air trapping",
      "Ossification of the costochondral junctions and ankylosis of the spine",
      "Compensatory hypertrophy of the pectoralis and serratus anterior muscles",
      "Subpleural collagen deposition pulling the rib cage outward"
    ],
    "c": 1,
    "r": "In chronic bronchitis and emphysema, airway obstruction impedes expiration, leading to incomplete expulsion of air, chronic air trapping (elevated RV, FRC, and TLC), and an enlarged barrel-shaped thorax."
  },
  {
    "cat": 5,
    "q": "A lung autopsy specimen reveals permanent enlargement of the airspaces distal to the terminal bronchiole accompanied by destruction of the alveolar walls without obvious fibrosis. What specific structural protein loss drives this lesion?",
    "a": [
      "Loss of Type IV collagen in the capillary basement membrane",
      "Destruction of elastin fibers within the alveolar walls",
      "Depletion of hyaline cartilage matrix in segmental bronchi",
      "Loss of dystrophin in the diaphragmatic skeletal muscle",
      "Deficiency of mucin-5AC in bronchial goblet cells"
    ],
    "c": 1,
    "r": "Emphysema is defined pathologically as the enlargement of alveolar air spaces accompanied by destruction of elastin in the alveolar walls."
  },
  {
    "cat": 5,
    "q": "Emphysema primarily destroys alveolar walls rather than causing mucus plugging of large bronchi, yet it produces severe expiratory airflow obstruction on spirometry. What mechanical phenomenon explains this obstruction?",
    "a": [
      "Sloughed alveolar pneumocytes form obstructive casts in the mainstem bronchi",
      "Loss of alveolar elastic fibers abolishes radial traction holding respiratory bronchioles open",
      "Alveolar destruction triggers vagally mediated spasm of the tracheal smooth muscle",
      "Hyperinflated bullae compress the superior vena cava and main pulmonary artery",
      "Compensatory goblet cell hyperplasia obliterates the lumen of lobar bronchi"
    ],
    "c": 1,
    "r": "Respiratory bronchioles lack cartilage plates and rely on the radial traction of elastic tissue in adjacent alveolar walls to stay open during expiration. When alveolar elastin is destroyed in emphysema, the respiratory bronchioles collapse during exhalation."
  },
  {
    "cat": 5,
    "q": "A 55-year-old smoker has early emphysematous changes on high-resolution chest CT but denies shortness of breath at rest. Approximately what fraction of the lung parenchyma must be damaged before clinical symptoms first manifest?",
    "a": [
      "Roughly one-twentieth (5%)",
      "Roughly one-tenth (10%)",
      "Roughly one-third (33%)",
      "Roughly two-thirds (67%)",
      "Roughly four-fifths (80%)"
    ],
    "c": 2,
    "r": "According to the Obstructive Lung Disease lecture, approximately one-third (1/3) of the lung must be affected by emphysema before clinical symptoms appear."
  },
  {
    "cat": 5,
    "q": "A 68-year-old thin man with severe emphysema breathes through pursed lips with visible accessory muscle use, lacks cyanosis, and is described clinically as a 'Pink Puffer'. Which blood gas pattern and ventilatory mechanism characterize this phenotype?",
    "a": [
      "Hypoventilation resulting in Type 2 respiratory failure (hypercapnia and cyanosis)",
      "Overventilation maintaining gas exchange with Type 1 respiratory failure (hypoxemia without hypercapnia)",
      "Severe metabolic alkalosis with compensatory hypoventilation and hypercapnia",
      "Normal PaO2 and elevated DLCO secondary to polycythemia",
      "Acute intrapulmonary shunting from protein-rich alveolar edema"
    ],
    "c": 1,
    "r": "'Pink puffers' (predominant emphysema) overventilate (hyperventilate) to maintain relatively normal gas exchange and exhibit Type 1 respiratory failure (hypoxemia without hypercapnia)."
  },
  {
    "cat": 5,
    "q": "A 60-year-old man with a 45-pack-year smoking history undergoes lung resection. Histopathology shows focal destruction restricted to the central respiratory bronchioles of the upper lobes while the distal alveoli are spared. What is the diagnosis?",
    "a": [
      "Panacinar (panlobular) emphysema",
      "Centriacinar (centrilobular) emphysema",
      "Paraseptal (distal acinar) emphysema",
      "Cryptogenic fibrosing alveolitis",
      "Cylindrical bronchiectasis"
    ],
    "c": 1,
    "r": "Centriacinar (centrilobular) emphysema selectively damages the respiratory bronchioles while sparing distal alveoli, and is the most common anatomical form of emphysema in cigarette smokers."
  },
  {
    "cat": 5,
    "q": "A 36-year-old man with no smoking history presents with basilar-predominant dyspnea and elevated liver transaminases due to alpha-1-antitrypsin deficiency. Which histological pattern of airspace destruction is expected in his lungs?",
    "a": [
      "Selective destruction of respiratory bronchioles with sparing of distal alveoli",
      "Uniform enlargement and destruction of the entire acinus from respiratory bronchiole to terminal alveoli",
      "Isolated subpleural bleb formation along the interlobular septa in the lung apices",
      "Dense interstitial collagen deposition with honeycomb cyst formation",
      "Hypertrophy of bronchial submucosal glands with normal alveolar walls"
    ],
    "c": 1,
    "r": "Alpha-1-antitrypsin deficiency classically causes panacinar (panlobular) emphysema, in which the entire acinus (from the respiratory bronchiole to the terminal blind alveoli) is uniformly enlarged and destroyed."
  },
  {
    "cat": 5,
    "q": "A 70-year-old man with advanced emphysema has lost 9 kg over the past year despite an adequate appetite and no evidence of malignancy. What is the primary pathophysiological cause of his weight loss?",
    "a": [
      "Exocrine pancreatic insufficiency causing steatorrhea",
      "Markedly increased caloric expenditure from the high work of breathing",
      "Chronic mesenteric ischemia secondary to atherosclerosis",
      "Systemic hyperthyroidism induced by chronic hypoxemia",
      "Protein-losing enteropathy from right ventricular failure"
    ],
    "c": 1,
    "r": "Patients with advanced emphysema experience progressive dyspnea and weight loss directly due to the markedly increased work of breathing required to overcome airflow limitation and hyperinflation."
  },
  {
    "cat": 5,
    "q": "A 66-year-old man with a 20-year history of severe COPD develops jugular venous distension, hepatomegaly, and bilateral ankle edema. Loss of the pulmonary capillary bed and chronic hypoxic vasoconstriction have caused which complication?",
    "a": [
      "Constrictive pericarditis",
      "Right heart failure (cor pulmonale)",
      "High-output left ventricular failure",
      "Calcific aortic valve stenosis",
      "Subacute bacterial endocarditis"
    ],
    "c": 1,
    "r": "Chronic progression of COPD/emphysema causes pulmonary hypertension (via capillary bed destruction and hypoxic pulmonary vasoconstriction), culminating in right ventricular hypertrophy and right heart failure (cor pulmonale)."
  },
  {
    "cat": 5,
    "q": "A 63-year-old man with emphysema presents to the emergency department with worsening dyspnea and fever. Which change in sputum character specifically signals an acute infectious exacerbation?",
    "a": [
      "Transition to pink, frothy serous transudate",
      "Transition to thick, purulent sputum",
      "Complete cessation of mucus production",
      "Appearance of milky chylous effusion",
      "Expectoration of calcified broncholiths"
    ],
    "c": 1,
    "r": "In the Obstructive Lung Disease lecture, infectious exacerbations of COPD/emphysema are specifically marked by the development of purulent sputum."
  },
  {
    "cat": 5,
    "q": "Which of the following groups consists entirely of disorders classified under the obstructive lung disease category in your pathology lectures?",
    "a": [
      "Asthma, bronchiectasis, cystic fibrosis, and bronchiolitis",
      "Sarcoidosis, asbestosis, silicosis, and berylliosis",
      "Kyphoscoliosis, muscular dystrophy, obesity, and ARDS",
      "Mesothelioma, pleural effusion, pneumothorax, and pneumonia",
      "Cryptogenic fibrosing alveolitis, farmer's lung, and coal worker's lung"
    ],
    "c": 0,
    "r": "Alongside COPD (chronic bronchitis and emphysema), the lectures classify asthma, bronchiectasis, cystic fibrosis, and bronchiolitis as obstructive lung diseases."
  },
  {
    "cat": 5,
    "q": "A 21-year-old college student develops acute wheezing, cough, and chest tightness while jogging in cold air. Administration of an inhaled medication completely normalizes his FEV1 within 15 minutes. What feature distinguishes his disorder from emphysema?",
    "a": [
      "Permanent destruction of alveolar walls with reduced DLCO",
      "Reversible airway smooth muscle contraction and mucosal inflammation",
      "Irreversible fibrosis of the peribronchiolar interstitium",
      "Loss of radial traction on the respiratory bronchioles",
      "Chronic hypercapnic respiratory failure at baseline"
    ],
    "c": 1,
    "r": "Bronchial asthma is characterized by episodic, reversible airway obstruction driven by bronchial smooth muscle contraction (spasm), mucosal edema/inflammation, and mucus hypersecretion, triggered by allergens or non-allergic stimuli (cold air, exercise, infections)."
  },
  {
    "cat": 5,
    "q": "In regulating bronchial smooth muscle tone, which autonomic receptor pathways mediate bronchoconstriction versus bronchodilation?",
    "a": [
      "Beta-2 adrenergic receptors mediate constriction; M3 muscarinic receptors mediate dilation",
      "M3 muscarinic receptors mediate constriction; Beta-2 adrenergic receptors mediate dilation",
      "Alpha-1 adrenergic receptors mediate dilation; nicotinic receptors mediate constriction",
      "Beta-1 adrenergic receptors mediate dilation; H2 histamine receptors mediate constriction",
      "Vagal cholinergic fibers mediate dilation; circulating epinephrine mediates constriction"
    ],
    "c": 1,
    "r": "Parasympathetic vagal fibers release acetylcholine onto muscarinic (M3) receptors to cause bronchoconstriction, whereas sympathetic/circulating epinephrine stimulates beta-2 adrenergic receptors to cause bronchodilation."
  },
  {
    "cat": 5,
    "q": "A 32-year-old woman with severe allergic asthma remains poorly controlled despite high-dose inhaled corticosteroids and long-acting beta-2 agonists. She has markedly elevated serum IgE levels. Which targeted biologic therapy binds circulating IgE to prevent mast cell and basophil activation?",
    "a": [
      "Mepolizumab (anti-IL-5 monoclonal antibody)",
      "Omalizumab (anti-IgE monoclonal antibody)",
      "Isoniazid (mycolic acid synthesis inhibitor)",
      "Benzonatate (peripheral stretch receptor anesthetic)",
      "Rifampicin (bacterial RNA polymerase inhibitor)"
    ],
    "c": 1,
    "r": "In the Immunopathology and Treatment of Asthma lectures, Omalizumab is a recombinant humanized monoclonal antibody that binds free circulating IgE, preventing IgE from binding to high-affinity FcεRI receptors on mast cells and basophils in severe allergic (T2-high) asthma."
  }
];

// Combined 125 High-Yield Questions
export const respiratoryTblQuestions: Question[] = [
  {
    "cat": 0,
    "q": "A 24-year-old medical student is examining a histological section of the nasal cavity. Which of the following regions is lined by skin composed of stratified squamous epithelium and contains coarse hairs known as vibrissae?",
    "a": [
      "Olfactory region (upper 1/3 of nasal cavity)",
      "Respiratory region (inferior 2/3 of nasal mucosa)",
      "Nasal vestibule",
      "Sphenoethmoidal recess",
      "Nasopharynx"
    ],
    "c": 2,
    "r": "According to the histology lecture, the nasal cavity consists of the nasal vestibule (lined by skin with stratified squamous epithelium and vibrissae/hairs), the respiratory region (inferior 2/3), and the olfactory region (upper 1/3)."
  },
  {
    "cat": 0,
    "q": "Which of the following fractions and anatomical structures accurately describes the respiratory region versus the olfactory region of the nasal cavity?",
    "a": [
      "Respiratory region occupies the upper 1/3; Olfactory region occupies the inferior 2/3",
      "Respiratory region occupies the inferior 2/3; Olfactory region occupies the upper 1/3",
      "Respiratory region occupies the anterior 1/2; Olfactory region occupies the posterior 1/2",
      "Respiratory region is restricted to the superior concha; Olfactory region lines the inferior meatus",
      "Both regions occupy equal 1/2 proportions and are separated by the limen nasi"
    ],
    "c": 1,
    "r": "The respiratory region is the largest portion, occupying the inferior 2/3 of the nasal mucosa, whereas the olfactory region occupies the upper 1/3."
  },
  {
    "cat": 0,
    "q": "During a histology lab exam, a slide from the upper 1/3 of the nasal mucosa is shown. Which of the following features is uniquely characteristic of the olfactory mucosa compared to the respiratory mucosa?",
    "a": [
      "Pseudostratified columnar epithelium with abundant goblet cells and motile cilia",
      "Simple cuboidal epithelium with Clara cells and discontinuous cartilage plates",
      "Pseudostratified columnar epithelium that is NOT ciliated, lacks goblet cells, and contains serous Bowman's glands",
      "Stratified squamous keratinized epithelium with mucous glands and serous demilunes",
      "Pseudostratified ciliated columnar epithelium with compound tubuloalveolar mucous glands"
    ],
    "c": 2,
    "r": "Olfactory epithelium is pseudostratified columnar epithelium that is NOT ciliated, has NO goblet cells, contains serous olfactory (Bowman's) glands, and houses olfactory receptor cells (bipolar neurons), supporting cells, and basal (stem) cells."
  },
  {
    "cat": 0,
    "q": "Which of the following cell types found within the olfactory epithelium of the nasal cavity functions as stem cells capable of regenerating the epithelium?",
    "a": [
      "Brush cells with short microvilli",
      "Olfactory receptor bipolar neurons",
      "Supporting (sustentacular) cells",
      "Basal cells",
      "Serous cells of Bowman's glands"
    ],
    "c": 3,
    "r": "In the olfactory epithelium, the three main cell types listed are olfactory receptor cells (bipolar neurons), supporting cells, and basal cells (which act as stem cells)."
  },
  {
    "cat": 0,
    "q": "A patient inhaling cold, dry air relies on the respiratory mucosa of the nasal cavity to condition the inspired gas. Which histological feature in the lamina propria of the respiratory mucosa is directly responsible for warming the inhaled air?",
    "a": [
      "Serous Bowman's glands",
      "Rich vascular networks and capillary loops",
      "Discontinuous hyaline cartilage plates",
      "Brush cells with short microvilli",
      "Elastic and reticular fiber bundles"
    ],
    "c": 1,
    "r": "The lamina propria of the respiratory mucosa contains rich vascular networks and capillary loops that allow warming of inhaled air by the blood, while conchae (turbinates) humidify the air and mucus glands with serous demilunes trap particles."
  },
  {
    "cat": 0,
    "q": "Which of the following lists accurately represents the cell types that constitute the respiratory epithelium (pseudostratified columnar ciliated epithelium) of the conducting airways?",
    "a": [
      "Goblet cells, ciliated cells, brush cells (with short microvilli), and basal cells",
      "Type I pneumocytes, Type II pneumocytes, and alveolar macrophages",
      "Bipolar neurons, supporting cells, and serous acinar cells",
      "Simple squamous cells, endothelial cells, and pericytes",
      "Stratified squamous cells, keratinocytes, and Langerhans cells"
    ],
    "c": 0,
    "r": "The respiratory epithelium is a pseudostratified columnar ciliated epithelium resting on a basal lamina, containing goblet cells, ciliated cells, brush cells (with short microvilli), and basal cells."
  },
  {
    "cat": 0,
    "q": "When examining a histological cross-section of the lower respiratory tract, which structural feature allows you to definitively distinguish a bronchus from the trachea?",
    "a": [
      "Complete absence of hyaline cartilage and submucosal glands",
      "Replacement of pseudostratified ciliated columnar epithelium by simple squamous epithelium",
      "Presence of a muscularis layer of smooth muscle, compound tubuloalveolar glands with adipose tissue in the submucosa, and discontinuous cartilage plates",
      "Presence of C-shaped rings of elastic cartilage bridged posteriorly by skeletal muscle",
      "Absence of smooth muscle cells between the mucosa and submucosa"
    ],
    "c": 2,
    "r": "In the bronchus, the cartilage layer consists of discontinuous hyaline cartilage plates (unlike C-shaped rings in the trachea), a distinct muscularis layer of smooth muscle (continuous in larger bronchi, less organized in smaller bronchi), and a submucosa with loose CT, compound tubuloalveolar glands, and adipose tissue."
  },
  {
    "cat": 0,
    "q": "Which of the following airways marks the final purely conducting structure before the transition to the gas-exchanging respiratory zone?",
    "a": [
      "Lobar (secondary) bronchus",
      "Segmental (tertiary) bronchus",
      "Terminal bronchiole",
      "Respiratory bronchiole",
      "Alveolar duct"
    ],
    "c": 2,
    "r": "The conducting system ends at the terminal bronchioles. The gas-exchange system (respiratory bronchiolar unit) begins with the respiratory bronchioles, alveolar ducts, alveolar sacs, and alveoli."
  },
  {
    "cat": 0,
    "q": "According to the histology of the bronchial tree, what two structures combine to form the functional unit of pulmonary structure known as the 'respiratory bronchiolar unit'?",
    "a": [
      "Segmental bronchus and terminal bronchiole",
      "Terminal bronchiole and bronchial glands",
      "Respiratory bronchiole and the alveoli",
      "Trachea and paired main bronchi",
      "Pleural cavity and interlobular septum"
    ],
    "c": 2,
    "r": "The functional unit of the pulmonary structure is the respiratory bronchiolar unit, which is made of the respiratory bronchiole and the alveoli."
  },
  {
    "cat": 0,
    "q": "As the airways branch progressively from the trachea down to the alveoli, which of the following structural trends shown in the histological summary diagram is correct?",
    "a": [
      "Hyaline cartilage and submucosal glands persist into the respiratory bronchioles",
      "Goblet cells disappear before ciliated cells, while smooth muscle and elastic fibers extend further distally than cartilage and glands",
      "Ciliated cells disappear in the lobar bronchi, whereas goblet cells extend down to the alveolar sacs",
      "Elastic fibers are restricted to the trachea and main bronchi and are absent in the alveoli",
      "Smooth muscle terminates at the segmental bronchus prior to the terminal bronchiole"
    ],
    "c": 1,
    "r": "As shown in the respiratory histology summary chart, goblet cells, glands, and hyaline cartilage terminate around the level of the segmental bronchus/bronchiole transition, ciliated cells extend into the terminal/respiratory bronchioles, smooth muscle extends to the alveolar ducts, and elastic fibers persist all the way through the alveoli."
  },
  {
    "cat": 0,
    "q": "A histological electron micrograph shows the 'Thin Blood-Air Barrier' (0.1–1.5 μm thickness) optimized for rapid gaseous exchange. Which of the following lists its exact structural layers in order?",
    "a": [
      "Mucus blanket, ciliated columnar cell, lamina propria, and fenestrated capillary",
      "Thin layer of surfactant, alveolar epithelium (Type I pneumocytes), fused basal laminae (alveolar + capillary basement membranes), and capillary endothelium",
      "Type II pneumocytes, interstitial connective tissue fibers, lymphatics, and venular endothelium",
      "Stratified squamous epithelium, elastic lamina, smooth muscle, and adventitia",
      "Surfactant layer, Clara cell membrane, loose connective tissue, and arterial media"
    ],
    "c": 1,
    "r": "The Thin Blood-Air Barrier allows gaseous exchange and is composed of: (1) a thin layer of surfactant, (2) alveolar epithelium (Type I pneumocytes), (3) fused basal laminae (basement membrane of alveolar epithelium + basement membrane of capillaries), and (4) endothelium of capillaries."
  },
  {
    "cat": 0,
    "q": "In contrast to the thin blood-air barrier, what additional component is present in the 'Thick Blood-Air Barrier', and what is the primary physiological role of this thicker region?",
    "a": [
      "Hyaline cartilage plates; prevents alveolar collapse during forced expiration",
      "Connective tissue (CT) cells and fibers between the alveolar basement membrane and capillary basal lamina; allows accumulation of tissue fluid",
      "Mucous glands with serous demilunes; humidifies alveolar gas",
      "Skeletal muscle fibers; actively contracts alveoli during exhalation",
      "Bipolar neurons; senses alveolar oxygen tension"
    ],
    "c": 1,
    "r": "The Thick Blood-Air Barrier consists of Type I alveolar cells, alveolar basement membrane, connective tissue (CT) cells and fibers, basal lamina of capillary endothelial cells, and endothelial cells. Its specific function noted in the lecture is that it 'allows accumulation of tissue fluid'."
  },
  {
    "cat": 0,
    "q": "When comparing the right and left bronchial tree on an anatomical diagram of the lower respiratory tract, which of the following structures is uniquely present on the left lung or left bronchial tree?",
    "a": [
      "Intermediate bronchus",
      "Three lobar bronchi (superior, middle, inferior)",
      "Cardiac notch and two lobar bronchi (left superior and left inferior)",
      "Horizontal fissure separating the middle lobe",
      "Absence of a main bronchus"
    ],
    "c": 2,
    "r": "As shown in the anatomical diagram, the right lung has three lobar bronchi (right superior, right middle, right inferior) and an intermediate bronchus, whereas the left lung features the cardiac notch and only two lobar bronchi (left superior and left inferior)."
  },
  {
    "cat": 1,
    "q": "The elastic recoil properties of the lungs constantly act against lung inflation and must be overcome for ventilation to take place. According to the lecture on elastic properties of the lungs, what are the two primary causes of these elastic forces?",
    "a": [
      "Airway resistance in the trachea and turbulent flow in the bronchi",
      "Elastic forces of the lung tissue itself (elastin and collagen fibers) and elastic forces caused by surface tension of the fluid lining the alveoli",
      "Contraction of the diaphragm and external intercostal muscles",
      "Intrapleural fluid viscosity and atmospheric barometric pressure",
      "Pulmonary capillary hydrostatic pressure and plasma colloid osmotic pressure"
    ],
    "c": 1,
    "r": "The elastic properties of the lungs that act against inflation are divided into two parts: (1) elastic forces of the lung tissue itself (determined mainly by elastin and collagen fibers in lung parenchyma) and (2) elastic forces caused by surface tension of the fluid lining the inside walls of the alveoli."
  },
  {
    "cat": 1,
    "q": "How do the elastin and collagen fibers in the lung parenchyma behave mechanically when transitioning from a deflated lung to an expanded lung?",
    "a": [
      "They are stretched and linear in deflated lungs, and coil into relaxed helices upon lung expansion",
      "They are in an elastically contracted and kinked state in deflated lungs, and become stretched and unkinked when the lungs expand, exerting even more elastic force",
      "They undergo enzymatic degradation during inspiration and resynthesis during expiration",
      "They exert maximum recoil force at residual volume and zero recoil force at total lung capacity",
      "They actively contract via calcium-dependent cross-bridge cycling during inspiration"
    ],
    "c": 1,
    "r": "In deflated lungs, elastin and collagen fibers are in an elastically contracted and kinked state; when the lungs expand, the fibers become stretched and unkinked, thereby elongating and exerting even more elastic force."
  },
  {
    "cat": 1,
    "q": "How is transpulmonary pressure (also termed recoil pressure) defined in respiratory mechanics?",
    "a": [
      "The pressure difference between the atmosphere and the alveoli",
      "The pressure difference between the inside of the alveoli and the outer surface of the lungs (pleural space)",
      "The pressure difference between the pleural cavity and the body surface",
      "The sum of alveolar pressure and intrapleural pressure during forced expiration",
      "The hydrostatic pressure gradient between the pulmonary artery and left atrium"
    ],
    "c": 1,
    "r": "Transpulmonary pressure (also known as recoil pressure) is defined as the pressure difference between the inside of the alveoli and the outer surface of the lungs (pleural space)."
  },
  {
    "cat": 1,
    "q": "In a healthy adult, what is the normal compliance value for both lungs combined (lungs alone, removed from the thorax), and how long does it take for the volume change to occur after a 1 cm H2O increase in transpulmonary pressure?",
    "a": [
      "50 mL/cm H2O; occurs instantaneously (<0.5 seconds)",
      "110 mL/cm H2O; occurs after 1 to 2 seconds",
      "200 mL/cm H2O; expands by 200 mL after 10 to 20 seconds",
      "500 mL/cm H2O; expands by 500 mL after 60 seconds",
      "1000 mL/cm H2O; occurs after 5 seconds"
    ],
    "c": 2,
    "r": "Normal adult lung compliance for both lungs combined is approximately 200 mL of air per cm H2O transpulmonary pressure; a 1 cm H2O increase expands lung volume by 200 mL after 10–20 seconds."
  },
  {
    "cat": 1,
    "q": "When measuring the combined compliance of the lung-thorax system in a totally relaxed or paralyzed person, how does the normal value compare to that of the lungs alone?",
    "a": [
      "It is about 400 mL/cm H2O, which is twice that of the lungs alone",
      "It is identical to the lungs alone at 200 mL/cm H2O because the thoracic cage offers zero elastic resistance",
      "It is about 110 mL/cm H2O, which is almost exactly half that of the lungs alone (200 mL/cm H2O) because nearly twice as much pressure is needed to inflate the lungs inside the thoracic cage",
      "It is about 20 mL/cm H2O at resting functional residual capacity",
      "It cannot be measured in a relaxed or paralyzed person"
    ],
    "c": 2,
    "r": "Combined lung-thorax compliance is about 110 mL/cm H2O—almost half that of the lungs alone (200 mL/cm H2O) because nearly twice as much pressure is required to inflate the lungs when enclosed inside the thoracic cage."
  },
  {
    "cat": 1,
    "q": "At extreme lung volumes (very high expansion or very low compression volumes), what happens to the combined compliance of the lung-thorax system?",
    "a": [
      "It increases to 5 times that of the lungs alone",
      "It remains linear and unchanged at 110 mL/cm H2O",
      "Chest limitations become extreme, reducing combined compliance to less than one-fifth (<1/5) that of the lungs alone",
      "Surface tension drops to zero, causing compliance to become infinite",
      "Transpulmonary pressure reverses sign and becomes zero"
    ],
    "c": 2,
    "r": "At very high expansion or very low compression volumes, chest limitations become extreme, reducing the combined lung-thorax compliance to less than one-fifth that of the lungs alone."
  },
  {
    "cat": 1,
    "q": "On a compliance diagram comparing air-filled lungs to saline-filled lungs, why do saline-filled lungs require much less pleural (transpulmonary) pressure to expand?",
    "a": [
      "Saline dissolves collagen and elastin fibers in the lung parenchyma",
      "Saline eliminates the air-fluid interface, thereby abolishing surface tension forces in the alveoli",
      "Saline stimulates Type II pneumocytes to secrete 10 times more surfactant",
      "Saline bronchodilates the terminal bronchioles via beta-2 receptor activation",
      "Saline increases the radius of the thoracic cage"
    ],
    "c": 1,
    "r": "Saline-filled lungs require much less pleural pressure to expand than air-filled lungs due to the absence of surface tension (only tissue elastic forces remain)."
  },
  {
    "cat": 1,
    "q": "Consider two connected alveoli of different sizes (one smaller, one larger). According to Laplace's Law, what happens in the presence of surfactant versus in the absence of surfactant?",
    "a": [
      "Without surfactant, the larger alveolus has higher pressure and collapses into the smaller alveolus",
      "With surfactant, smaller alveoli have more surfactant per area and lower surface tension, which equalizes pressure and allows the smaller alveolus to inflate at a faster rate until equal in size",
      "With surfactant, surface tension is higher in smaller alveoli, causing them to empty into larger alveoli",
      "Without surfactant, both alveoli have equal collapse pressure regardless of their radii",
      "Surfactant increases surface tension equally in both alveoli to prevent overinflation"
    ],
    "c": 1,
    "r": "Without surfactant, smaller alveoli have the same surface tension as larger alveoli but higher pressure (due to smaller radius), making them harder to inflate and likely to collapse. With surfactant, smaller alveoli have more surfactant per area and lower surface tension, equalizing pressure between small and large alveoli and allowing the smaller alveolus to inflate at a faster rate until equal in size."
  },
  {
    "cat": 1,
    "q": "In what two forms is oxygen transported in the arterial blood, and what are their respective percentages?",
    "a": [
      "Dissolved in plasma (70%) and bound to hemoglobin (30%)",
      "Dissolved in plasma (7%) and bound to hemoglobin (93%)",
      "Dissolved in plasma (2%) and bound to hemoglobin (98%)",
      "Dissolved in plasma (23%) and bound to plasma proteins (77%)",
      "Bound to carbonic anhydrase (11%) and bound to hemoglobin (89%)"
    ],
    "c": 2,
    "r": "According to the Gas Transport lecture, oxygen is transported in the blood in two forms: dissolved in the plasma (2%) and bound to hemoglobin (98%)."
  },
  {
    "cat": 1,
    "q": "Given that the solubility of oxygen in blood is 0.003 mL / 100 mL blood / mmHg, what is the volume of dissolved oxygen in 100 mL of arterial blood (PO2 = 100 mmHg) and 100 mL of venous blood (PO2 = 40 mmHg)?",
    "a": [
      "Arterial = 3.0 mL O2/100 mL; Venous = 1.2 mL O2/100 mL",
      "Arterial = 0.3 mL O2/100 mL; Venous = 0.12 mL O2/100 mL",
      "Arterial = 20.0 mL O2/100 mL; Venous = 15.0 mL O2/100 mL",
      "Arterial = 0.03 mL O2/100 mL; Venous = 0.012 mL O2/100 mL",
      "Arterial = 1.34 mL O2/100 mL; Venous = 0.40 mL O2/100 mL"
    ],
    "c": 1,
    "r": "Dissolved O2 = solubility × PO2. In arterial blood (PO2 = 100 mmHg): 0.003 × 100 = 0.3 mL O2 / 100 mL blood. In venous blood (PO2 = 40 mmHg): 0.003 × 40 = 0.12 mL O2 / 100 mL blood."
  },
  {
    "cat": 1,
    "q": "A shift of the oxygen-hemoglobin dissociation curve to the right indicates a lower affinity of hemoglobin for oxygen (high P50) and increased release of oxygen to tissues. Which of the following combinations of factors shifts the curve to the right?",
    "a": [
      "Low CO2, low [H+] (high pH), low 2,3-DPG, low temperature, and HbF",
      "High CO2, high [H+] (low pH), high 2,3-DPG, and high temperature",
      "Stored blood in a blood bank, hypothermia, and acute respiratory alkalosis",
      "High pH, presence of myoglobin, and fetal hemoglobin (HbF)",
      "Low temperature, high CO2, and low 2,3-DPG"
    ],
    "c": 1,
    "r": "Factors that shift the O2-Hb dissociation curve to the right (decreased affinity, high P50, increased O2 release to tissues) are: high CO2, high H+ ions (low pH), high 2,3-diphosphoglycerate (2,3-DPG), and high temperature."
  },
  {
    "cat": 1,
    "q": "Why do stored blood from a blood bank and Fetal Hemoglobin (HbF) both cause a leftward shift of the oxygen-hemoglobin dissociation curve (low P50, higher O2 affinity)?",
    "a": [
      "Both exhibit excessive binding of carbon dioxide to the heme iron moiety",
      "Blood bank storage depletes 2,3-DPG (also seen in acidosis), and HbF has poor binding of 2,3-DPG",
      "Both increase red blood cell intracellular temperature and hydrogen ion concentration",
      "Both convert ferric iron (Fe3+) into ferrous iron (Fe2+) irreversibly",
      "Both inhibit carbonic anhydrase inside the red blood cell"
    ],
    "c": 1,
    "r": "As explicitly stated on the 'Shift of the curve to the left' slide: low 2,3-diphosphoglycerate (due to acidosis or in a blood bank), myoglobin, and HbF (which has poor binding of 2,3-diphosphoglycerate) shift the curve to the left."
  },
  {
    "cat": 1,
    "q": "During carbon dioxide transport from peripheral tissues to the lungs, what is the primary form in which CO2 is carried in the blood, and what ionic exchange occurs across the red blood cell membrane?",
    "a": [
      "Dissolved CO2 (70%); sodium-potassium pump exchanges Na+ for K+",
      "Bicarbonate (70%); HCO3- diffuses out of the RBC into plasma in exchange for chloride (Cl-) entering the RBC (chloride shift)",
      "Carbaminohemoglobin (70%); H+ diffuses out of the RBC in exchange for Ca2+",
      "Carbonic acid (70%); H2CO3 is actively pumped into platelets",
      "Dissolved CO2 (98%); Cl- diffuses out of the RBC into the plasma"
    ],
    "c": 1,
    "r": "Transport as bicarbonate (HCO3-) is the main form of CO2 transport (~70%). CO2 diffuses into RBCs, reacts with H2O via carbonic anhydrase to form H2CO3, which dissociates into H+ (buffered by Hb) and HCO3-. About 70% of HCO3- diffuses into the plasma in exchange for Cl- (chloride shift)."
  },
  {
    "cat": 1,
    "q": "In the lecture on carbon dioxide transport, CO2 also binds directly to proteins (both plasma proteins and hemoglobin) to form carbamino compounds. According to the slide diagrams and text, what percentages are given for CO2 transport forms?",
    "a": [
      "70% HCO3-, 23% Hgb·CO2 (or ~11% carried as carbamino-CO2 in text), and 7% dissolved CO2",
      "98% HCO3-, 2% dissolved CO2, and 0% carbamino compounds",
      "50% dissolved CO2, 25% HCO3-, and 25% carbamino-CO2",
      "83% HCO3-, 15% dissolved CO2, and 2% carbamino-CO2",
      "10% HCO3-, 70% Hgb·CO2, and 20% dissolved CO2"
    ],
    "c": 0,
    "r": "The slide diagram shows CO2 transported as: 7% dissolved CO2, 23% Hgb·CO2, and 70% HCO3- (while the text slide notes about 11% of CO2 is carried to the lung as carbamino-CO2 bound to plasma proteins and hemoglobin)."
  },
  {
    "cat": 1,
    "q": "The respiratory center is a collection of neurons in the medulla and pons arranged into four major groups. Which group is located in the dorsal aspect of the medulla, contains inspiratory neurons, and is called the 'rhythmicity center'?",
    "a": [
      "Ventral respiratory group (VRG)",
      "Pneumotaxic center",
      "Apneustic center",
      "Dorsal respiratory group (DRG)",
      "Cerebellar fastigial nucleus"
    ],
    "c": 3,
    "r": "The dorsal respiratory group (DRG), found at the dorsal aspect of the medulla, contains inspiratory neurons, is responsible for inspiration, and is called the rhythmicity center because it discharges impulses rhythmically."
  },
  {
    "cat": 1,
    "q": "Where is the rhythmic discharge of the dorsal respiratory group (DRG) initiated within the medulla?",
    "a": [
      "Edinger-Westphal nucleus",
      "Pre-Bötzinger complex",
      "Locus coeruleus",
      "Area postrema",
      "Superior olivary nucleus"
    ],
    "c": 1,
    "r": "According to the Neural Control of Respiration lecture, the rhythmic discharge of the dorsal group is initiated in the Pre-Bötzinger complex in the medulla."
  },
  {
    "cat": 1,
    "q": "How does the inspiratory 'ramp signal' control the frequency (rate) of respiration?",
    "a": [
      "By prolonging the inspiratory ramp indefinitely to increase respiratory rate",
      "By controlling the limiting point at which the ramp suddenly ceases: the earlier the ramp ceases, the shorter the duration of inspiration and expiration, thereby increasing the frequency of respiration",
      "By activating the ventral respiratory group during quiet resting inspiration",
      "By inhibiting the pneumotaxic center during heavy exercise",
      "By decreasing the rate of increase of the ramp signal during heavy respiration"
    ],
    "c": 1,
    "r": "The inspiratory ramp is controlled in two ways: (1) controlling the rate of increase of the ramp signal (so lungs fill rapidly during heavy respiration), and (2) controlling the limiting point at which the ramp suddenly ceases. The earlier the ramp ceases, the shorter the duration of inspiration (which also shortens expiration), thereby increasing the frequency of respiration."
  },
  {
    "cat": 1,
    "q": "Which of the following statements accurately describes the Ventral Respiratory Group (VRG) in the medulla?",
    "a": [
      "It is active exclusively during quiet resting inspiration and contains only inspiratory neurons",
      "It is found in the ventral aspect of the medulla, contains expiratory and some inspiratory neurons, is responsible for forced expiration, and exhibits reciprocal innervation (inactivated when the dorsal group is stimulated and vice versa)",
      "It is located in the upper pons and inhibits the apneustic center",
      "It senses CSF hydrogen ion concentration directly on the dorsal surface of the spinal cord",
      "It coordinates breathing with swallowing and talking via the cerebellum"
    ],
    "c": 1,
    "r": "The ventral group is found in the ventral aspect of the medulla, contains expiratory neurons and some inspiratory neurons, is responsible for forced expiration, and is inactivated when the dorsal group is stimulated and vice versa (reciprocal innervation)."
  },
  {
    "cat": 1,
    "q": "According to the lecture on Neural Control of Respiration, why is hyperventilation physiologically associated with tachycardia and hypoventilation associated with bradycardia?",
    "a": [
      "Lung stretch receptors directly innervate the sinoatrial node via sympathetic fibers",
      "Stimulation or inhibition of the cardiac or vasomotor center in the medulla results in stimulation or inhibition of the respiratory center because impulses radiate between them",
      "Hypoventilation causes massive catecholamine release from the adrenal medulla",
      "Hyperventilation blocks the glossopharyngeal nerve from reaching the medulla",
      "The cerebellum inhibits the vagus nerve only during voluntary apnea"
    ],
    "c": 1,
    "r": "Under 'Other brainstem centers', the lecture states: Stimulation or inhibition of the cardiac or vasomotor center in the medulla results also in stimulation or inhibition of the respiratory center (impulses radiate between them). That is why hyperventilation is associated with tachycardia and hypoventilation is associated with bradycardia."
  },
  {
    "cat": 1,
    "q": "Which higher brain center is specifically paired with its correct respiratory function according to the lecture?",
    "a": [
      "Hypothalamus – coordinates breathing with swallowing and talking",
      "Cerebellum – coordinates breathing with swallowing and talking",
      "Limbic system – brings voluntary hyperventilation or voluntary apnea",
      "Cerebral cortex – stimulates heat loss by increasing respiration",
      "Medullary vasomotor center – mediates emotional changes in respiration"
    ],
    "c": 1,
    "r": "From the Higher Centers slide: Cerebral cortex = voluntary modification (voluntary hyperventilation or apnea); Hypothalamus = stimulates heat loss by increasing respiration; Limbic system = emotions affect respiration; Cerebellum = coordinates breathing with swallowing and talking."
  },
  {
    "cat": 1,
    "q": "Peripheral chemoreceptors are located in the carotid and aortic bodies. What is their main stimulus, and through which cranial nerves do they transmit impulses to the medulla?",
    "a": [
      "Main stimulus: Hypercapnia; Carotid bodies via Vagus nerve (CN X), Aortic bodies via Glossopharyngeal nerve (CN IX)",
      "Main stimulus: Hypoxia; Carotid bodies via Glossopharyngeal nerve (CN IX), Aortic bodies via Vagus nerve (CN X)",
      "Main stimulus: Alkalosis; Both carotid and aortic bodies via Phrenic nerve",
      "Main stimulus: CSF H+ concentration; Carotid bodies via Facial nerve (CN VII), Aortic bodies via Accessory nerve (CN XI)",
      "Main stimulus: Arterial hypertension; Carotid bodies via Trigeminal nerve (CN V)"
    ],
    "c": 1,
    "r": "Peripheral chemoreceptors in the carotid and aortic bodies are stimulated by: (1) Hypoxia (main stimulus), (2) Hypercapnia, and (3) Acidosis. Carotid bodies send impulses through the glossopharyngeal nerve (CN IX) to the medulla, while aortic bodies send impulses through the vagus nerve (CN X) to the medulla."
  },
  {
    "cat": 1,
    "q": "In the histological diagram of the carotid body, which cell type is the primary oxygen-sensing chemoreceptor cell that synapses with glossopharyngeal afferent axons?",
    "a": [
      "Type I (glomus) cell",
      "Type II sustentacular cell",
      "Type I squamous pneumocyte",
      "Brush cell",
      "Kulchitsky neuroendocrine cell"
    ],
    "c": 0,
    "r": "The carotid body diagram shows Type I (glomus) cells containing neurotransmitter vesicles synapsing directly with glossopharyngeal afferent axons, surrounded by Type II cells."
  },
  {
    "cat": 1,
    "q": "Based on the graphs of arterial PO2 versus carotid body nerve impulses and alveolar ventilation (when arterial PCO2 and [H+] remain normal), below what arterial PO2 threshold do carotid body nerve impulses and alveolar ventilation rise steeply?",
    "a": [
      "Below 500 mmHg",
      "Below 300 mmHg",
      "Below 100 to 60 mmHg",
      "Only below 10 mmHg",
      "Linearly between 500 mmHg and 200 mmHg"
    ],
    "c": 2,
    "r": "As shown in both curves ('Decreased Arterial Oxygen Stimulates the Chemoreceptors' and 'Effect of Low Arterial PO2 to Stimulate Alveolar Ventilation'), nerve impulses and ventilation remain nearly flat from 500 down to 100 mmHg, and then rise steeply as arterial PO2 falls below 100–60 mmHg."
  },
  {
    "cat": 1,
    "q": "Central chemoreceptors are located on the anterolateral (ventral) surface of the medulla in contact with the cerebrospinal fluid (CSF). How are they stimulated by arterial chemical changes?",
    "a": [
      "Hydrogen ions (H+) in the arterial blood rapidly cross the blood-brain barrier (BBB) to stimulate them directly",
      "H+ ions in the blood CANNOT cross the BBB; instead, CO2 crosses the BBB, reacts with H2O in the CSF (catalyzed by carbonic anhydrase) to form H2CO3, which dissociates into H+ and HCO3-, and CO2 stimulates central chemoreceptors both directly (by CO2 itself) and indirectly (by H+)",
      "Decreased arterial PO2 directly depolarizes the central chemoreceptors in the CSF",
      "Bicarbonate ions (HCO3-) in the blood actively pump H+ across the BBB",
      "Central chemoreceptors are completely insensitive to changes in arterial PCO2"
    ],
    "c": 1,
    "r": "Central chemoreceptors are stimulated by high CO2 in blood (and therefore CSF) and high H+ ions in the CSF (NOT in the blood, because blood H+ cannot cross the BBB). CO2 crosses the BBB, reacts with H2O via carbonic anhydrase to form H2CO3 -> H+ + HCO3-. As the slide states, CO2 stimulates central chemoreceptors directly (by CO2 itself) and indirectly (by H+)."
  },
  {
    "cat": 1,
    "q": "In an upright individual, gravity creates a vertical hydrostatic pressure gradient in the pulmonary circulation. Which of the following correctly describes the relationship between alveolar pressure (PA), pulmonary arterial pressure (Pa), and pulmonary venous pressure (Pv) across West's lung zones?",
    "a": [
      "Zone 1 (Apex): Pa > Pv > PA; Zone 2: Pa > PA > Pv; Zone 3 (Base): PA >= Pa > Pv",
      "Zone 1 (Apex): PA >= Pa > Pv (lowest flow); Zone 2 (Mid): Pa > PA > Pv (medium/intermittent flow); Zone 3 (Base): Pa > Pv > PA (highest/continuous flow)",
      "Zone 1 (Apex): Pv > Pa > PA; Zone 2: PA > Pv > Pa; Zone 3: Pa = Pv = PA",
      "Zone 1 (Base): PA >= Pa > Pv; Zone 3 (Apex): Pa > Pv > PA",
      "All three zones have identical pressures (Pa > Pv > PA) in the upright position"
    ],
    "c": 1,
    "r": "From the 'Blood Flow Distribution in the Lung' diagram: Zone 1 (Apex, lowest blood flow) has PA >= Pa > Pv; Zone 2 (Middle, medium/intermittent flow) has Pa > PA > Pv; Zone 3 (Base, highest/continuous flow) has Pa > Pv > PA."
  },
  {
    "cat": 1,
    "q": "In a healthy upright person at rest, which blood flow zones are normally present in the lungs?",
    "a": [
      "Only Zone 1 in the apices and Zone 2 in the bases",
      "Only Zones 2 and 3—Zone 2 (intermittent flow) in the apices, and Zone 3 (continuous flow) in all the lower areas",
      "Zone 1 throughout the entire lung during inspiration, and Zone 3 during expiration",
      "Only Zone 3 from apex to base",
      "Zones 1, 2, and 3 in equal one-third vertical proportions"
    ],
    "c": 1,
    "r": "As explicitly stated beneath the Lung Zones diagram: 'Normally, the lungs have only zones 2 and 3 blood flow—zone 2 (intermittent flow) in the apices, and zone 3 (continuous flow) in all the lower areas.'"
  },
  {
    "cat": 1,
    "q": "Why does the base of the upright lung (Zone 3) exhibit the lowest vascular resistance and highest blood flow?",
    "a": [
      "Alveolar pressure (PA) exceeds arterial pressure (Pa), compressing the capillaries",
      "Higher vascular pressures at the base promote recruitment and distension of pulmonary vessels, reducing vascular resistance and increasing blood flow",
      "Sympathetic vasoconstriction is selectively active at the lung apex",
      "Hypoxic pulmonary vasoconstriction occurs exclusively at the lung base",
      "Surfactant concentration is lowest at the base of the lung"
    ],
    "c": 1,
    "r": "At the base of the upright lung, higher hydrostatic vascular pressures promote recruitment (opening of previously closed capillaries) and distension (widening of open capillaries) of pulmonary vessels, reducing vascular resistance and increasing blood flow (Zone 3)."
  },
  {
    "cat": 1,
    "q": "Why is Carbon Monoxide (CO) used in Pulmonary Function Testing to measure the Diffusing Capacity of the lung (DLCO)?",
    "a": [
      "CO is a perfusion-limited gas that equilibrates within 0.01 seconds in the capillary",
      "CO is a diffusion-limited gas, allowing the machine to compare predetermined inhaled CO with measured exhaled CO to calculate capillary diffusion across the respiratory membrane",
      "CO does not bind to hemoglobin and remains 100% dissolved in plasma",
      "CO selectively measures anatomical dead space via the Bohr equation",
      "CO is used because it is 20 times more soluble in water than carbon dioxide"
    ],
    "c": 1,
    "r": "Carbon monoxide (CO) is a diffusion-limited gas. In the DLCO test, the machine compares the predetermined inhaled CO with the measured exhaled CO to calculate capillary diffusion. Reduced DLCO indicates an impaired diffusion barrier (such as loss of surface area in emphysema or increased barrier thickness in fibrosis)."
  },
  {
    "cat": 2,
    "q": "A 25-year-old male undergoes resting spirometry. He breathes in maximally starting from the normal expiratory level, distending his lungs to the maximum amount. Which pulmonary capacity is being measured, what is its formula, and what is its normal adult value?",
    "a": [
      "Vital Capacity (VC) = IRV + VT + ERV; ~4600 mL",
      "Inspiratory Capacity (IC) = VT + IRV; ~3500 mL",
      "Functional Residual Capacity (FRC) = ERV + RV; ~2300 mL",
      "Total Lung Capacity (TLC) = VC + RV; ~5800 mL",
      "Inspiratory Reserve Volume (IRV) = IC - ERV; ~3000 mL"
    ],
    "c": 1,
    "r": "The inspiratory capacity (IC) is the amount of air a person can breathe in, beginning at the normal expiratory level and distending the lungs to the maximum amount. It equals tidal volume (VT) plus inspiratory reserve volume (IRV) and is about 3500 mL."
  },
  {
    "cat": 2,
    "q": "What is the normal value and formula for Functional Residual Capacity (FRC), and how is it defined?",
    "a": [
      "The amount of air remaining in the lungs after maximal forced expiration; equals RV (~1200 mL)",
      "The amount of air remaining in the lungs at the end of normal expiration; equals ERV + RV (~2300 mL)",
      "The maximum volume of air expired after maximal inspiration; equals IC + ERV (~4600 mL)",
      "The maximum volume to which the lungs can be expanded; equals VC + RV (~5800 mL)",
      "The volume of air inspired or expired with each normal breath; equals VT (~500 mL)"
    ],
    "c": 1,
    "r": "Functional residual capacity (FRC) is the amount of air that remains in the lungs at the end of normal expiration. It equals Expiratory Reserve Volume (ERV) + Residual Volume (RV), and is about 2300 milliliters."
  },
  {
    "cat": 2,
    "q": "Which of the following statements regarding Vital Capacity (VC) and general pulmonary volumes/capacities is explicitly stated in the lecture?",
    "a": [
      "VC is about 4600 mL (IRV + VT + ERV), is higher during standing, higher in western populations, and all pulmonary volumes and capacities are about 20 to 25% less in women than in men",
      "VC is about 3500 mL, is higher in the supine position than standing, and is equal between men and women",
      "VC includes Residual Volume (RV) and cannot be measured with a direct spirometer",
      "All pulmonary volumes and capacities are 50% greater in asthenic people than in athletic people",
      "Total lung capacity is about 4600 mL, while vital capacity is about 5800 mL"
    ],
    "c": 0,
    "r": "Vital capacity (VC = IRV + VT + ERV = IC + ERV) is about 4600 mL (while TLC is ~5800 mL). It differs according to age, gender, body size, position (higher during standing), and ethnic background (higher in western population). Furthermore, all pulmonary volumes and capacities are about 20 to 25% less in women than in men, and greater in large and athletic people than in small and asthenic people."
  },
  {
    "cat": 2,
    "q": "Why is the Helium Dilution Technique required to measure Residual Volume (RV), Functional Residual Capacity (FRC), and Total Lung Capacity (TLC)?",
    "a": [
      "Helium rapidly diffuses across the alveolar-capillary membrane into pulmonary blood",
      "RV remains in the lungs even after maximal forced expiration and cannot be exhaled into a standard spirometer; therefore, FRC (and subsequently RV and TLC) must be measured indirectly via helium dilution",
      "Helium stimulates surfactant secretion to open collapsed airways",
      "Spirometers can only measure volumes smaller than 500 mL",
      "Helium reacts with carbon dioxide in the anatomical dead space"
    ],
    "c": 1,
    "r": "Because Residual Volume (RV) cannot be expired into a spirometer, any capacity containing RV (namely FRC and TLC) must be measured indirectly using the helium dilution technique."
  },
  {
    "cat": 2,
    "q": "A patient expires normally (leaving FRC in the lungs) and immediately breathes from a spirometer of known initial volume (Vi_Spir = 3000 mL) containing an initial helium concentration (Ci_He = 10%). After equilibrium, the final helium concentration (Cf_He) is 6%. Using the lecture's helium dilution formula, what is the patient's FRC?",
    "a": [
      "1500 mL",
      "2000 mL",
      "2300 mL",
      "3000 mL",
      "5000 mL"
    ],
    "c": 1,
    "r": "Using the lecture formula: FRC = [(Ci_He / Cf_He) - 1] × Vi_Spir = [(10 / 6) - 1] × 3000 mL = (0.667) × 3000 mL = 2000 mL."
  },
  {
    "cat": 2,
    "q": "Once Functional Residual Capacity (FRC) has been determined via the helium dilution technique, which two equations from the lecture are used to calculate Residual Volume (RV) and Total Lung Capacity (TLC)?",
    "a": [
      "RV = FRC + ERV; TLC = VC - RV",
      "RV = FRC - ERV; TLC = IC + FRC (or VC + RV)",
      "RV = TLC - FRC; TLC = IRV + ERV",
      "RV = IC - ERV; TLC = FRC + ERV",
      "RV = VC - IC; TLC = FRC - RV"
    ],
    "c": 1,
    "r": "From the Helium Dilution slide: RV = FRC - ERV, and TLC = IC + FRC (or TLC = VC + RV)."
  },
  {
    "cat": 2,
    "q": "In the single-breath Nitrogen Washout test used to measure anatomical dead space (VD), the subject takes a single breath of pure oxygen (100% O2) and expires while nitrogen concentration is plotted against expired air volume (VE). What is the formula for VD from the graph's areas?",
    "a": [
      "VD = (Pink area × VE) / (Gray area)",
      "VD = (Gray area × VE) / (Pink area + Gray area)",
      "VD = (Gray area + Pink area) / VE",
      "VD = VE - (Gray area × Pink area)",
      "VD = (Pink area × VE) / (Pink area + Gray area)"
    ],
    "c": 1,
    "r": "According to the Nitrogen Washout slide formula: VD = (Gray area × VE) / (Pink area + Gray area)."
  },
  {
    "cat": 2,
    "q": "A patient has a Tidal Volume (VT) of 500 mL, an arterial PCO2 (PaCO2) of 40 mmHg, and an expired PCO2 (PECO2) of 28 mmHg (with inspired PiCO2 = 0). Using the Bohr physiological dead space equation from the lecture, what is the patient's physiological dead space (VD)?",
    "a": [
      "100 mL",
      "150 mL",
      "200 mL",
      "250 mL",
      "350 mL"
    ],
    "c": 1,
    "r": "Using the physiological dead space equation: VD = VT × [(PaCO2 - PECO2) / PaCO2] = 500 × [(40 - 28) / 40] = 500 × (12 / 40) = 500 × 0.3 = 150 mL."
  },
  {
    "cat": 2,
    "q": "How is Maximal Breathing Capacity (MBC), also known as Maximal Voluntary Ventilation (MVV), measured in the pulmonary function laboratory, and what is its normal adult range?",
    "a": [
      "Recorded for 10 milliseconds of maximal expiration and expressed for 1 minute; normal is 400–600 L/min",
      "Recorded by breathing as deeply and rapidly as possible for 15 seconds and expressed for 1 minute; normal is 125–170 L/min",
      "Recorded over 3 seconds of forced exhalation after maximal inspiration; normal is 4.6 L/min",
      "Recorded during quiet resting breathing for 60 seconds; normal is 6–8 L/min",
      "Recorded during a single breath-hold of carbon monoxide for 10 seconds; normal is 25 mL/min/mmHg"
    ],
    "c": 1,
    "r": "Maximal Breathing Capacity (MBC) / Maximal Voluntary Ventilation (MVV) is the maximal air respired per minute, recorded for 15 seconds and expressed for 1 minute. Its normal value is 125–170 L/min."
  },
  {
    "cat": 2,
    "q": "Which of the following statements accurately describes Peak Expiratory Flow Rate (PEFR)?",
    "a": [
      "It is recorded for 15 seconds using a helium spirometer and has a normal value of 125–170 L/min",
      "It is the greatest airflow rate during forced exhalation (10 msec maximal expiration expressed for 1 minute, normal 400–600 L/min), is reduced in large airway obstruction (e.g., asthma), but is NOT reliable in small airway obstruction (e.g., emphysema)",
      "It is highly sensitive and specific for isolated small airway collapse in early panacinar emphysema",
      "It is normally increased above 800 L/min in severe bronchial asthma",
      "It represents the flow rate over the middle 50% of the forced vital capacity (FEF 25–75%)"
    ],
    "c": 1,
    "r": "PEFR is the greatest airflow rate during forced exhalation, recorded using a peak flow meter (10 msec maximal expiration expressed for 1 minute), with a normal value of 400–600 L/min. It is reduced in large airway obstruction (e.g., asthma), but is not reliable in small airway obstruction (e.g., emphysema)."
  },
  {
    "cat": 2,
    "q": "During a Timed Vital Capacity / Forced Vital Capacity (FVC) maneuver in a healthy adult, the total FVC is normally exhaled in less than 3 seconds. What are the normal percentages of FVC expired in the first, second, and third seconds (FEV1, FEV2, and FEV3)?",
    "a": [
      "FEV1 = 50%, FEV2 = 75%, FEV3 = 90%",
      "FEV1 = 70%, FEV2 = 80%, FEV3 = 85%",
      "FEV1 = 83%, FEV2 = 90%, FEV3 = 97%",
      "FEV1 = 95%, FEV2 = 98%, FEV3 = 100%",
      "FEV1 = 60%, FEV2 = 83%, FEV3 = 97%"
    ],
    "c": 2,
    "r": "According to the PFT lecture, FVC is normally exhaled in <3 seconds, and the normal fractions are: FEV1 = 83% of FVC, FEV2 = 90% of FVC, and FEV3 = 97% of FVC."
  },
  {
    "cat": 2,
    "q": "On a standard clinical Maximum Flow-Volume Loop presented in the lecture, how are the x-axis (volume) and y-axis (flow rate) oriented during inspiration and expiration?",
    "a": [
      "Trace moves right during inhalation (positive y-axis) and left during exhalation (negative y-axis)",
      "Trace moves left during inhalation as lung volume increases (with negative flow below the x-axis), and moves right during exhalation as lung volume decreases (with positive flow above the x-axis)",
      "Volume is plotted on the y-axis and time in seconds is plotted on the x-axis",
      "Inspiration and expiration both plot above the x-axis as positive values",
      "The loop starts at 0 L (Residual Volume) on the far left and ends at Total Lung Capacity on the far right"
    ],
    "c": 1,
    "r": "On the Flow-Volume loop, the x-axis represents lung volume (moving left during inhalation as volume increases toward TLC, and moving right during exhalation as volume decreases toward RV). The y-axis represents flow rate: negative below the x-axis during inspiration, and positive above the x-axis during expiration."
  },
  {
    "cat": 2,
    "q": "What do the labels MEF 75%, MEF 50%, and MEF 25% on the expiratory limb of a normal flow-volume loop represent?",
    "a": [
      "Maximal Expiratory Force measured in mmHg at 75, 50, and 25 seconds",
      "Mean Expiratory Flow (or maximal expiratory flow) when 75%, 50%, and 25% of the Vital Capacity remains to be exhaled",
      "Minute Expiratory Fraction during exercise testing",
      "Minimal Inspiratory Flow at 75%, 50%, and 25% of Residual Volume",
      "Mean Elastic Force of the chest wall"
    ],
    "c": 1,
    "r": "On the flow-volume loop diagram, after the rapid rise to Peak Expiratory Flow (PEF), there is a gradual decline in expiratory flow marked by MEF (Mean/Maximal Expiratory Flow) at 75%, 50%, and 25% of vital capacity."
  },
  {
    "cat": 2,
    "q": "A 62-year-old smoker undergoes spirometry and flow-volume loop testing. Which combination of findings is diagnostic of an obstructive lung disease pattern?",
    "a": [
      "FEV1/FVC > 0.85, decreased RV, decreased TLC, and a rightward shift of the flow-volume loop",
      "FEV1/FVC < 0.8 (80%), markedly decreased FEV1, increased RV, FRC, and TLC, leftward shift of the flow-volume loop, and a concave (scooped-out) expiratory curve with reduced PEF and FEF 25–75",
      "Proportionate reduction in both FEV1 and FVC with normal FEV1/FVC ratio and a narrowed 'witch-hat' loop shifted to the right",
      "Increased FEF 25–75, increased PEF, and decreased Functional Residual Capacity",
      "Normal FEV1, increased FVC, and absence of air trapping"
    ],
    "c": 1,
    "r": "Obstructive lung disease is defined by an FEV1/FVC ratio < 0.8 (<80%), markedly decreased FEV1, increased RV, FRC, and TLC due to air trapping, a leftward shift of the flow-volume loop (toward higher lung volumes, up to 8 L), and a concave (scooped-out) expiratory limb with reduced PEF and FEF 25–75."
  },
  {
    "cat": 2,
    "q": "Why does the forced expiratory volume (FEV1) volume-time curve show characteristic 'notching' and flattening of its slope in patients with obstructive lung disease?",
    "a": [
      "Because of premature closure of the vocal cords during inspiration",
      "Because of dynamic airway collapse and increased airway resistance during forced expiration",
      "Because of excessive chest wall elastic recoil accelerating airflow",
      "Because of neuromuscular paralysis of the diaphragm",
      "Because of increased alveolar surfactant concentration"
    ],
    "c": 1,
    "r": "In obstructive lung disease, the slope of the FEV1 curve shows notching/flattening and prolonged expiration (>3 seconds) due to dynamic airway collapse and increased airway resistance during forced expiration."
  },
  {
    "cat": 2,
    "q": "When comparing the flow-volume loops of acute asthma versus emphysema in the lecture, how are their expiratory curves described?",
    "a": [
      "Acute asthma shows a convex expiratory curve, whereas emphysema shows a normal linear curve",
      "Acute asthma shows reduced PEF with a concave curve from narrowed airways; emphysema shows a markedly reduced PEF and a severe concave curve due to loss of elastic recoil causing small airway collapse during expiration",
      "Acute asthma shifts the loop to the far right, whereas emphysema shifts the loop to the far left",
      "Emphysema preserves normal PEF because only large cartilaginous bronchi are affected",
      "Both conditions increase Peak Expiratory Flow above 600 L/min"
    ],
    "c": 1,
    "r": "As contrasted in the PFT lecture: Acute asthma shows reduced PEF with a concave curve from narrowed airways, whereas emphysema shows markedly reduced PEF and a severe concave curve due to loss of elastic recoil causing small airway collapse during expiration."
  },
  {
    "cat": 2,
    "q": "In a patient with pure restrictive lung disease (such as idiopathic pulmonary fibrosis), how is the flow-volume loop altered compared to normal?",
    "a": [
      "It shifts to the left with a deep concave scoop and a TLC of 8 L",
      "It shifts to the right (toward lower lung volumes) and forms a narrowed, miniature ('witch-hat') loop with reduced TLC, RV, and FVC, but preserved or high expiratory flow relative to lung volume",
      "It shows isolated flattening of the inspiratory limb with normal TLC",
      "It shows doubled Vital Capacity and doubled Residual Volume",
      "It is completely identical to the loop seen in chronic bronchitis"
    ],
    "c": 1,
    "r": "In restrictive lung disease, lung expansion, compliance, and volumes (TLC, FRC, RV, VC) are all decreased. The flow-volume loop shifts to the right (lower lung volumes) and displays a narrowed/smaller 'witch-hat' shape."
  },
  {
    "cat": 2,
    "q": "Which of the following lung volumes or capacities is DECREASED in BOTH obstructive lung disease and restrictive lung disease according to the comparative bar charts in the lecture?",
    "a": [
      "Total Lung Capacity (TLC)",
      "Functional Residual Capacity (FRC)",
      "Residual Volume (RV)",
      "Inspiratory Reserve Volume (IRV) (as well as Vital Capacity / Expiratory Reserve Volume)",
      "Ratio of RV to TLC"
    ],
    "c": 3,
    "r": "In obstructive lung disease, TLC, FRC, and RV are increased (hyperinflation/air trapping), which encroaches upon and decreases IRV, ERV, IC, and VC. In restrictive lung disease, all volumes and capacities (TLC, FRC, RV, IRV, ERV, IC, VC) are decreased."
  },
  {
    "cat": 2,
    "q": "A 55-year-old patient presents with dyspnea. Spirometry reveals FVC = 55% of predicted, FEV1 = 52% of predicted, and an FEV1/FVC ratio of 0.88 (88%). Total Lung Capacity (TLC) is 58% of predicted. What pattern do these results indicate?",
    "a": [
      "Severe obstructive lung disease",
      "Pure restrictive lung disease",
      "Normal pulmonary function",
      "Isolated upper airway foreign body",
      "Acute bronchospasm"
    ],
    "c": 1,
    "r": "In restrictive lung disease, both FEV1 and FVC are decreased proportionately, resulting in a normal or increased FEV1/FVC ratio (>=0.80), accompanied by a decreased Total Lung Capacity (TLC)."
  },
  {
    "cat": 2,
    "q": "Which parameter on spirometry represents the Forced Expiratory Flow over the middle 50% of the Forced Vital Capacity, and what is its clinical significance?",
    "a": [
      "PEFR; reflects large upper airway patency only",
      "FEF 25–75%; reflects airflow in medium-to-small airways and is decreased in obstructive lung diseases",
      "MVV; reflects diaphragmatic endurance over 15 seconds",
      "DLCO; reflects alveolar capillary hemoglobin concentration",
      "ERV; reflects resting expiratory reserve"
    ],
    "c": 1,
    "r": "FEF 25–75% is the Forced Expiratory Flow over the middle 50% of the FVC. It is decreased in obstructive lung diseases and is a sensitive indicator of small/medium airway obstruction."
  },
  {
    "cat": 2,
    "q": "Two patients (Patient X with severe emphysema and Patient Y with severe idiopathic pulmonary fibrosis) both undergo Diffusing Capacity of the Lung for Carbon Monoxide (DLCO) testing. Both patients demonstrate a significantly reduced DLCO. Based on the lecture, what are the respective mechanisms for the reduced DLCO in Patient X and Patient Y?",
    "a": [
      "Patient X: increased membrane thickness; Patient Y: loss of alveolar surface area",
      "Patient X: loss of alveolar-capillary surface area (destruction of alveolar walls); Patient Y: increased diffusion barrier thickness (interstitial fibrosis)",
      "Patient X: high carboxyhemoglobin; Patient Y: polycythemia",
      "Patient X: increased pulmonary capillary blood volume; Patient Y: bronchodilation",
      "Both patients have reduced DLCO solely due to inspiratory muscle weakness"
    ],
    "c": 1,
    "r": "According to Fick's law and the PFT lecture on DLCO, a reduced DLCO indicates an impaired diffusion barrier, such as loss of surface area in emphysema (Patient X) or increased barrier thickness in pulmonary fibrosis (Patient Y)."
  },
  {
    "cat": 2,
    "q": "All of the following conditions are listed in the lecture as causes of a decreased Maximal Breathing Capacity (MBC / MVV) EXCEPT:",
    "a": [
      "Poor patient effort",
      "Neuromuscular diseases",
      "Obstructive and restrictive lung diseases",
      "Heart diseases and obesity",
      "Athletic training in a tall young adult"
    ],
    "c": 4,
    "r": "MBC/MVV is decreased in poor effort, neuromuscular diseases, obstructive and restrictive lung diseases, heart diseases, and obesity. It is increased/greater in large and athletic individuals."
  },
  {
    "cat": 3,
    "q": "What is the fundamental pathophysiological defect that characterizes all obstructive lung diseases?",
    "a": [
      "Reduced expansion of lung parenchyma with decreased total lung capacity",
      "Increase in resistance to airflow, predominantly during expiration, resulting in a reduced FEV1",
      "Primary fibrotic thickening of the alveolar-capillary basement membrane",
      "Paralysis of the phrenic nerve with preserved airway caliber",
      "Excessive elastic recoil of the lung parenchyma"
    ],
    "c": 1,
    "r": "In obstructive lung disease, the core defect is an increase in resistance to airflow (predominantly during expiration) with a markedly reduced FEV1 and FEV1/FVC < 0.8."
  },
  {
    "cat": 3,
    "q": "Which historical acronym was previously used in clinical medicine to describe Chronic Obstructive Pulmonary Disease (COPD), and which two major pathological entities are grouped under it?",
    "a": [
      "ARDS; Acute bronchitis and bronchiectasis",
      "COAD (Chronic Obstructive Airways Disease); Chronic bronchitis and emphysema",
      "PAINT; Pleurisy and interstitial pneumonitis",
      "COLD; Cystic fibrosis and asthma",
      "IRDS; Hyaline membrane disease and sarcoidosis"
    ],
    "c": 1,
    "r": "COPD was previously termed COAD (Chronic Obstructive Airways Disease) and encompasses chronic bronchitis and emphysema."
  },
  {
    "cat": 3,
    "q": "A 54-year-old male smoker presents with a chronic productive cough. According to the lecture, what is the exact clinical definition required to diagnose Chronic Bronchitis?",
    "a": [
      "Cough with sputum production for at least 1 month in 3 consecutive years",
      "Cough with sputum production for at least 3 months in 2 consecutive years",
      "Episodic wheezing and dry cough occurring at night for 6 months",
      "Permanent enlargement of airspaces distal to the terminal bronchiole",
      "Daily hemoptysis lasting more than 2 weeks"
    ],
    "c": 1,
    "r": "Chronic bronchitis is clinically defined as cough with sputum production for at least 3 months in 2 consecutive years."
  },
  {
    "cat": 3,
    "q": "In the pathogenesis of chronic bronchitis, where does the initial inflammatory lesion begin, and what is the primary histological hallmark seen in the larger airways?",
    "a": [
      "Begins in the pleural mesothelium; hallmark is calcification of cartilage rings",
      "Begins in the bronchioles (bronchiolar inflammation); hallmark is mucus hypersecretion and hypertrophy of bronchial submucosal mucous glands",
      "Begins in the pulmonary artery intima; hallmark is plexiform lesions",
      "Begins in the alveolar Type I pneumocytes; hallmark is loss of elastin without mucus production",
      "Begins in the olfactory mucosa; hallmark is atrophy of Bowman's glands"
    ],
    "c": 1,
    "r": "In chronic bronchitis, the initial inflammatory process begins in the bronchioles (bronchiolar inflammation), and the primary histological hallmark is mucus hypersecretion and hypertrophy of bronchial mucous glands."
  },
  {
    "cat": 3,
    "q": "Long-standing chronic irritation and inflammation of the bronchial mucosa in a middle-aged male smoker with chronic bronchitis can lead to which sequential neoplastic transformation?",
    "a": [
      "Goblet cell hyperplasia -> Adenocarcinoma in situ",
      "Squamous metaplasia -> Squamous cell carcinoma",
      "Smooth muscle hypertrophy -> Leiomyosarcoma",
      "Cartilage ossification -> Chondrosarcoma",
      "Serous demilune atrophy -> Mesothelioma"
    ],
    "c": 1,
    "r": "In chronic bronchitis, long-standing inflammation of the bronchial epithelium leads to squamous metaplasia, which can progress to dysplasia and eventually squamous cell carcinoma."
  },
  {
    "cat": 3,
    "q": "Patients with chronic bronchitis are prone to recurrent low-grade bacterial and viral infections that cause acute exacerbations. Which specific group of 4 organisms (2 bacteria, 2 viruses) is explicitly listed in the lecture slides as common causes?",
    "a": [
      "Staphylococcus aureus, Pseudomonas aeruginosa, Influenza B, and Parainfluenza virus",
      "Haemophilus influenzae, Streptococcus pneumoniae, Respiratory syncytial virus (RSV), and Adenovirus",
      "Klebsiella pneumoniae, Moraxella catarrhalis, Rhinovirus, and Coronavirus",
      "Mycoplasma pneumoniae, Legionella pneumophila, Cytomegalovirus, and Epstein-Barr virus",
      "Mycobacterium tuberculosis, Bordetella pertussis, Measles virus, and Varicella-zoster virus"
    ],
    "c": 1,
    "r": "The Obstructive Lung Disease lecture explicitly lists Haemophilus influenzae, Streptococcus pneumoniae, Respiratory Syncytial Virus (RSV), and Adenovirus as the common bacterial and viral causes of recurrent low-grade infections in chronic bronchitis."
  },
  {
    "cat": 3,
    "q": "Why are bronchodilators clinically effective in relieving symptoms in many patients with chronic bronchitis, even though the disease is primarily characterized by structural mucosal gland hypertrophy and mucus hypersecretion?",
    "a": [
      "Bronchodilators dissolve mucin disulfide bonds directly in the airway lumen",
      "Chronic bronchial irritation induces a reversible bronchoconstrictive (bronchospastic) component",
      "Bronchodilators regenerate destroyed alveolar elastin fibers",
      "Bronchodilators convert squamous metaplasia back into ciliated columnar epithelium",
      "Bronchodilators selectively constrict the pulmonary arteries"
    ],
    "c": 1,
    "r": "Although chronic bronchitis is primarily a structural mucosal disease, chronic bronchial irritation induces a reversible bronchoconstrictive component that responds to bronchodilator therapy."
  },
  {
    "cat": 3,
    "q": "In the clinical classification of COPD phenotypes, a patient with predominant chronic bronchitis is classically described as a 'Blue Bloater'. Which type of respiratory failure and blood gas abnormality characterizes this phenotype?",
    "a": [
      "Type 1 respiratory failure: hypoxemia without hypercapnia",
      "Type 2 respiratory failure: hypercapnia, hypoxemia, and cyanosis",
      "Compensated respiratory alkalosis with hyperoxia",
      "Isolated metabolic acidosis with normal arterial PO2 and PCO2",
      "Normal blood gases maintained by extreme hyperventilation"
    ],
    "c": 1,
    "r": "'Blue bloaters' (predominant chronic bronchitis) develop Type 2 respiratory failure characterized by hypercapnia (high PaCO2), hypoxemia (low PaO2), and cyanosis."
  },
  {
    "cat": 3,
    "q": "Why do patients with chronic bronchitis develop an enlarged ('barrel-shaped') thorax?",
    "a": [
      "Massive bilateral pleural effusions pushing the ribs outward",
      "Incomplete expulsion of air during expiration resulting in chronic air trapping and hyperinflation",
      "Hypertrophy of the pectoralis major and intercostal muscles",
      "Osteophytic overgrowth of the thoracic vertebrae",
      "Accumulation of fibrotic scar tissue expanding the interstitium"
    ],
    "c": 1,
    "r": "Patients with chronic bronchitis (and COPD) develop an enlarged thorax due to incomplete expulsion of air resulting in chronic air trapping (increased RV, FRC, and TLC)."
  },
  {
    "cat": 3,
    "q": "How is Emphysema defined pathologically in the lecture?",
    "a": [
      "Hyperplasia of goblet cells in the trachea and mainstem bronchi",
      "Enlargement of alveolar air spaces accompanied by destruction of elastin in the alveolar walls",
      "Permanent dilation of bronchi and bronchioles caused by necrotizing bacterial infection",
      "Accumulation of proteinaceous edema fluid in the alveolar spaces",
      "Interstitial deposition of collagen fibers between the alveolar and capillary basement membranes"
    ],
    "c": 1,
    "r": "Emphysema is defined pathologically as the abnormal, permanent enlargement of alveolar air spaces accompanied by destruction of elastin in the alveolar walls."
  },
  {
    "cat": 3,
    "q": "Why is emphysema classified as an OBSTRUCTIVE lung disease even though the primary destructive lesion is the loss of elastin in the alveolar walls rather than mucosal plugging of large bronchi?",
    "a": [
      "Destroyed elastin fragments calcify and form stony broncholiths inside the trachea",
      "Respiratory bronchioles lack cartilage and are normally held open during expiration by the radial traction of elastic tissue in the walls of adjacent alveoli; when alveolar elastin is lost, the respiratory bronchioles collapse during expiration",
      "Loss of elastin causes severe spasm of the cricothyroid muscle in the larynx",
      "Alveolar destruction triggers massive submucosal gland hypertrophy in the mainstem bronchus",
      "Emphysema is actually a restrictive disease that is misclassified on spirometry"
    ],
    "c": 1,
    "r": "As highlighted in the lecture: Respiratory bronchioles are held open by elastic tissue in the walls of adjacent alveoli (radial traction); when this elastic tissue is lost in emphysema, the respiratory bronchioles collapse during expiration, causing airflow obstruction."
  },
  {
    "cat": 3,
    "q": "According to the Obstructive Lung Disease lecture, approximately what proportion of the lung must be structurally damaged in emphysema before clinical symptoms (such as dyspnea) first appear?",
    "a": [
      "5% of the lung",
      "One-tenth (10%) of the lung",
      "One-third (1/3 or ~33%) of the lung",
      "Three-quarters (75%) of the lung",
      "90% of the lung"
    ],
    "c": 2,
    "r": "The lecture specifically notes that approximately one-third (1/3) of the lung must be affected in emphysema before clinical symptoms first appear."
  },
  {
    "cat": 3,
    "q": "In the classification of COPD phenotypes, a patient with predominant emphysema is classically termed a 'Pink Puffer'. How do 'Pink Puffers' maintain gaseous exchange, and what type of respiratory failure do they exhibit?",
    "a": [
      "They hypoventilate and develop early severe hypercapnia and cyanosis (Type 2 respiratory failure)",
      "They overventilate (hyperventilate) to maintain relatively normal gaseous exchange initially, and develop Type 1 respiratory failure (hypoxemia without hypercapnia)",
      "They develop acute pulmonary edema with pink frothy sputum in the first week of disease",
      "They rely on carboxyhemoglobin to give their skin a cherry-pink color",
      "They exhibit normal FEV1/FVC ratios and increased DLCO"
    ],
    "c": 1,
    "r": "'Pink puffers' (emphysema phenotype) overventilate/hyperventilate to maintain gaseous exchange and present with Type 1 respiratory failure (hypoxemia without hypercapnia), lacking the cyanosis and edema of 'blue bloaters'."
  },
  {
    "cat": 3,
    "q": "Which anatomical subtype of emphysema predominantly affects the respiratory bronchioles while sparing the distal alveoli, and is identified as the MOST common form in cigarette smokers?",
    "a": [
      "Panacinar (panlobular) emphysema",
      "Centriacinar (centrilobular) emphysema",
      "Paraseptal (distal acinar) emphysema",
      "Irregular airspace emphysema",
      "Bullous congenital lobar emphysema"
    ],
    "c": 1,
    "r": "Centriacinar (centrilobular) emphysema affects the central/proximal parts of the acinus (respiratory bronchioles) while sparing distal alveoli, and is explicitly highlighted as the most common form in smokers."
  },
  {
    "cat": 3,
    "q": "A 38-year-old non-smoker presents with early-onset lower-lobe predominant emphysema and liver cirrhosis due to inherited alpha-1-antitrypsin (AAT) deficiency. Which morphological pattern of emphysema is classically associated with alpha-1-antitrypsin deficiency?",
    "a": [
      "Centriacinar (centrilobular) emphysema",
      "Panacinar (panlobular) emphysema",
      "Bronchiolar squamous metaplasia",
      "Subpleural paraseptal fibrosis",
      "Hyaline membrane disease"
    ],
    "c": 1,
    "r": "Panacinar (panlobular) emphysema involves uniform enlargement and destruction of the entire acinus (from respiratory bronchiole to terminal blind alveoli) and is classically caused by alpha-1-antitrypsin deficiency."
  },
  {
    "cat": 3,
    "q": "Why do patients with advanced emphysema classically experience progressive weight loss and cachexia?",
    "a": [
      "Malabsorption of fats due to pancreatic insufficiency",
      "Markedly increased work of breathing and caloric expenditure required to overcome airflow obstruction and progressive dyspnea",
      "Chronic diarrhea caused by Adenovirus",
      "Hyperthyroidism induced by chronic hypoxia",
      "Renal wasting of amino acids"
    ],
    "c": 1,
    "r": "In advanced emphysema, patients develop progressive dyspnea and weight loss due to the markedly increased work of breathing."
  },
  {
    "cat": 3,
    "q": "As emphysema and chronic bronchitis progress over years, destruction of pulmonary capillaries and chronic hypoxic pulmonary vasoconstriction lead to pulmonary hypertension. What is the specific cardiovascular complication that results from this process?",
    "a": [
      "Left ventricular hypertrophy and aortic stenosis",
      "Right heart failure (cor pulmonale)",
      "Infective endocarditis of the mitral valve",
      "Pericardial tamponade",
      "Coarctation of the aorta"
    ],
    "c": 1,
    "r": "Chronic progression of COPD/emphysema leads to pulmonary hypertension and subsequent right heart failure (cor pulmonale)."
  },
  {
    "cat": 3,
    "q": "What change in sputum character is specifically noted during an acute infectious exacerbation of emphysema or chronic bronchitis?",
    "a": [
      "Clear, watery serous transudate",
      "Purulent sputum (thick, yellow/green neutrophil-rich sputum)",
      "Rust-colored sputum containing Curschmann spirals only",
      "Chylous milky sputum",
      "Complete cessation of sputum production"
    ],
    "c": 1,
    "r": "Infectious exacerbations are characterized by the production of purulent sputum."
  },
  {
    "cat": 3,
    "q": "Which of the following sets of conditions are explicitly grouped together in the lecture as common obstructive lung diseases alongside COPD?",
    "a": [
      "Sarcoidosis, asbestosis, and silicosis",
      "Asthma, bronchiectasis, and cystic fibrosis (or bronchiolitis)",
      "Scoliosis, muscular dystrophy, and obesity",
      "ARDS, pulmonary edema, and lobar pneumonia",
      "Kyphoscoliosis, ankylosing spondylitis, and pleural effusion"
    ],
    "c": 1,
    "r": "Besides COPD (chronic bronchitis and emphysema), the common obstructive lung diseases listed in the lecture are asthma, bronchiectasis, and cystic fibrosis (as well as bronchiolitis)."
  },
  {
    "cat": 3,
    "q": "In the immunopathology and treatment of bronchial asthma, which of the following best describes the nature of the airway obstruction compared to emphysema?",
    "a": [
      "Irreversible destruction of alveolar walls with loss of DLCO",
      "Reversible bronchoconstriction, airway hyperresponsiveness, mucosal edema, and eosinophilic/Th2-mediated inflammation",
      "Fixed fibrotic obliteration of the pleural cavity",
      "Suppurative necrotizing destruction of medium-sized cartilage plates",
      "Absence of smooth muscle contraction"
    ],
    "c": 1,
    "r": "Asthma is characterized by reversible airflow obstruction due to bronchial smooth muscle contraction (bronchospasm), airway inflammation (mast cells, eosinophils, IgE/Th2 cytokines), and mucosal edema."
  },
  {
    "cat": 3,
    "q": "Which autonomic nervous system receptor and neurotransmitter pathway is the primary target for bronchodilation when regulating bronchial tone in asthma and COPD?",
    "a": [
      "Stimulation of parasympathetic M3 muscarinic receptors by acetylcholine",
      "Stimulation of sympathetic beta-2 adrenergic receptors (producing bronchodilation) or blockade of parasympathetic muscarinic receptors",
      "Stimulation of alpha-1 adrenergic receptors on bronchial glands",
      "Activation of histamine H1 receptors and leukotriene CysLT1 receptors",
      "Blockade of beta-2 adrenergic receptors with non-selective beta-blockers"
    ],
    "c": 1,
    "r": "Bronchial tone is regulated by parasympathetic cholinergic (vagal M3) fibers causing bronchoconstriction and sympathetic/circulating epinephrine acting on beta-2 adrenergic receptors causing bronchodilation. Thus, beta-2 agonists and muscarinic antagonists are key bronchodilators."
  },
  {
    "cat": 3,
    "q": "In a patient with an acute asthma attack, what happens to the Peak Expiratory Flow (PEF) and the Forced Vital Capacity (FVC) time?",
    "a": [
      "PEF increases above 600 L/min and FVC is exhaled in <1 second",
      "PEF is significantly reduced (<400 L/min) and the time required to exhale FVC is prolonged (>3 seconds)",
      "PEF remains completely normal while TLC drops to 2 L",
      "FEV1/FVC ratio rises above 0.95",
      "Residual Volume drops to zero"
    ],
    "c": 1,
    "r": "In large/medium airway obstruction such as acute asthma, PEFR (normal 400–600 L/min) is reduced, the expiratory flow-volume curve becomes concave, and FVC exhalation time is prolonged beyond the normal <3 seconds."
  },
  {
    "cat": 4,
    "q": "What is the hallmark pathophysiological definition of Restrictive Lung Disease?",
    "a": [
      "Increased resistance to expiratory airflow with hyperinflation",
      "Reduced expansion of lung parenchyma accompanied by decreased Total Lung Capacity (TLC)",
      "Isolated destruction of respiratory bronchioles in the upper lobes",
      "Reversible bronchospasm triggered by cold air or allergens",
      "Mucus gland hypertrophy for 3 months in 2 consecutive years"
    ],
    "c": 1,
    "r": "Restrictive lung disease is defined by reduced expansion of the lung parenchyma, decreased lung compliance, and a decreased Total Lung Capacity (TLC)."
  },
  {
    "cat": 4,
    "q": "In the Restrictive Lung Disease lecture, the mnemonic 'PAINT' is used to categorize the anatomical causes of restriction. What do the letters in 'PAINT' stand for?",
    "a": [
      "Pulmonary artery, Airway, Infection, Neoplasia, Trachea",
      "Pleural, Alveolar, Interstitial, Neuromuscular, Thoracic cage abnormalities",
      "Parenchymal, Allergic, Idiopathic, Necrotizing, Thrombotic",
      "Pericardial, Asthma, Inflammatory, Neurogenic, Traumatic",
      "Pneumothorax, Atelectasis, Infarction, Nodular, Tuberculosis"
    ],
    "c": 1,
    "r": "The mnemonic PAINT stands for: Pleural, Alveolar, Interstitial, Neuromuscular, and Thoracic cage abnormalities."
  },
  {
    "cat": 4,
    "q": "Which of the following pairs correctly matches an extrapulmonary restrictive lung disorder with its category in the 'PAINT' classification?",
    "a": [
      "Scoliosis and marked obesity – Thoracic cage / compressive abnormalities; Muscular dystrophy – Neuromuscular disorder",
      "Asbestosis – Neuromuscular disorder; Sarcoidosis – Thoracic cage abnormality",
      "Chronic bronchitis – Pleural abnormality; Emphysema – Interstitial abnormality",
      "Asthma – Alveolar abnormality; Bronchiectasis – Thoracic cage abnormality",
      "Silicosis – Neuromuscular disorder; Kyphoscoliosis – Alveolar disorder"
    ],
    "c": 0,
    "r": "Scoliosis and marked obesity are Thoracic cage / chest wall compressive causes of restriction, while muscular dystrophy is a Neuromuscular cause of restriction. Asbestosis and sarcoidosis are intrinsic/interstitial lung diseases."
  },
  {
    "cat": 4,
    "q": "Why does Congestive Cardiac Failure (left-sided heart failure) present with restrictive pulmonary mechanics on pulmonary function testing?",
    "a": [
      "It causes destruction of bronchial hyaline cartilage plates",
      "Pulmonary venous congestion and interstitial/alveolar fluid accumulation stiffen the lung parenchyma and reduce lung compliance",
      "It paralyzes the diaphragm by compressing the phrenic nerve",
      "It causes alpha-1-antitrypsin deficiency in the lower lobes",
      "It selectively dilates the anatomical dead space"
    ],
    "c": 1,
    "r": "Congestive cardiac failure causes pulmonary venous congestion and interstitial/alveolar edema, which reduces parenchymal compliance and restricts lung expansion."
  },
  {
    "cat": 4,
    "q": "How is the pulmonary 'interstitium' defined anatomically in the Restrictive Lung Disease lecture?",
    "a": [
      "The potential space between the parietal pleura and visceral pleura",
      "The connective tissue space located between the alveolar epithelial basement membrane and the capillary endothelial basement membrane",
      "The lumen of the terminal and respiratory bronchioles",
      "The submucosal layer of the trachea containing compound tubuloalveolar glands",
      "The space between the external and internal intercostal muscles"
    ],
    "c": 1,
    "r": "The pulmonary interstitium is defined as the connective tissue space between the alveolar epithelial basement membrane and the capillary endothelial basement membrane."
  },
  {
    "cat": 4,
    "q": "Which systemic granulomatous disorder and which occupational pneumoconiosis are specifically listed in the PFT and Restrictive Lung Disease lectures as classic examples of intrinsic interstitial restrictive lung disease?",
    "a": [
      "Sarcoidosis and Asbestosis",
      "Bronchiectasis and Cystic fibrosis",
      "Centriacinar emphysema and Chronic bronchitis",
      "Muscular dystrophy and Guillain-Barré syndrome",
      "Obesity hypoventilation and Pectus excavatum"
    ],
    "c": 0,
    "r": "Pulmonary fibrosis, asbestosis, and sarcoidosis are explicitly listed as classic intrinsic causes of restrictive lung disease."
  },
  {
    "cat": 4,
    "q": "In a patient with restrictive lung disease, what is the primary mechanical limitation that causes the symptom of shortness of breath (dyspnea)?",
    "a": [
      "Difficulty expelling air from the lungs due to premature bronchiolar collapse",
      "Difficulty taking air INTO the lung (inspiration) due to lung tissue stiffness (reduced compliance) or chest wall/neuromuscular resistance",
      "Overproduction of mucus plugs in the mainstem bronchus",
      "Laryngeal stridor during inspiration",
      "Air trapping increasing Residual Volume above 4 liters"
    ],
    "c": 1,
    "r": "Whereas obstructive lung disease is characterized by difficulty exhaling air out of the lung, restrictive lung disease is characterized by difficulty taking air into the lung due to stiff, non-compliant parenchyma or chest wall/neuromuscular restriction."
  },
  {
    "cat": 4,
    "q": "A 45-year-old ICU patient with severe sepsis develops acute refractory hypoxemia. Chest radiograph shows diffuse, bilateral fluffy alveolar infiltrates ('white-out' appearance), and the lungs are described pathologically as 'waterlogged'. What is the diagnosis, and what are the two major categories of insults that initiate its inflammatory cascade?",
    "a": [
      "Chronic bronchitis; initiated by cigarette smoke and Adenovirus",
      "Acute Respiratory Distress Syndrome (ARDS); initiated by direct insults to alveoli (e.g., toxic inhalation/aspiration) and indirect insults via pulmonary capillaries (e.g., sepsis)",
      "Panacinar emphysema; initiated by protease-antiprotease imbalance",
      "Spontaneous pneumothorax; initiated by apical subpleural bleb rupture",
      "Bronchial asthma; initiated by IgE cross-linking on mast cells"
    ],
    "c": 1,
    "r": "ARDS presents with diffuse bilateral fluffy alveolar infiltrates ('white-out' / waterlogged lungs) and is initiated by two major categories of etiology: direct insults to the alveoli (e.g., smoke/toxic gas inhalation, aspiration) and indirect blood-borne insults via the pulmonary capillaries (e.g., sepsis)."
  },
  {
    "cat": 4,
    "q": "According to the Restrictive Lung Disease lecture on ARDS, what is the FIRST pathological phase of ARDS, what is its typical timeframe, and what are its key hallmarks?",
    "a": [
      "Fibrotic ('Hardening') Phase; >21 days; diffuse collagen deposition and cystic remodeling",
      "Exudative ('Wet') Phase; Days 4 to 7 (or acute onset up to day 7); characterized by interstitial and alveolar edema, neutrophil influx, and increased cytokine release ('wet lung')",
      "Proliferative ('Filling Pus') Phase; Days 7 to 21; fibroblast activation and empyema",
      "Latent Asymptomatic Phase; Weeks 1 to 4; isolated goblet cell metaplasia",
      "Resolution Phase; Days 1 to 3; complete clearance of alveolar fluid without inflammation"
    ],
    "c": 1,
    "r": "The first phase of ARDS in the lecture is the Exudative ('Wet') Phase (timeframe noted as days 4–7), characterized by interstitial edema, alveolar edema, neutrophil influx, and increased cytokine release ('wet lung')."
  },
  {
    "cat": 4,
    "q": "What is the SECOND phase of ARDS described in the lecture, what is its timeframe, and what are its major pathological features?",
    "a": [
      "Exudative ('Wet') Phase; Days 1 to 4; pure transudative fluid",
      "Proliferative ('Filling Pus') Phase; Days 7 to 21; characterized by fibroblast activation, pus/empyema accumulation, intimal and alveolar fibrosis, and a high risk of pneumothorax",
      "Fibrotic ('Hardening') Phase; >21 days; burnt lung appearance",
      "Bronchiectatic Phase; Months 3 to 6; cartilage destruction",
      "Vascular Shunt Phase; Hours 1 to 12; isolated Zone 1 expansion"
    ],
    "c": 1,
    "r": "The second phase of ARDS is the Proliferative ('Filling Pus') Phase, occurring from days 7 to 21, characterized by fibroblast activation, pus/empyema accumulation, intimal and alveolar fibrosis, and high pneumothorax risk."
  },
  {
    "cat": 4,
    "q": "Why is the risk of pneumothorax markedly elevated during the Proliferative phase (days 7–21) of ARDS?",
    "a": [
      "Surfactant overproduction causes the alveoli to hyperinflate spontaneously",
      "The lung parenchyma becomes stiff, non-compliant, fibrotic, and cystic, making it highly vulnerable to barotrauma and alveolar rupture (especially during mechanical ventilation)",
      "Staphylococcus aureus erodes directly through the ribs and intercostal muscles",
      "Intrapleural pressure becomes +50 cm H2O during quiet inspiration",
      "Elastic fibers unkink and dissolve the visceral pleura"
    ],
    "c": 1,
    "r": "During the proliferative phase of ARDS, fibroblast activation and alveolar fibrosis make the lung parenchyma stiff, non-compliant, and cystic, elevating the risk of pneumothorax from barotrauma/rupture."
  },
  {
    "cat": 4,
    "q": "What is the THIRD (final) phase of ARDS according to the lecture, when does it occur, and what descriptive term is applied to the lungs?",
    "a": [
      "Exudative Phase; <7 days; 'waterlogged lung'",
      "Fibrotic ('Hardening') Phase; occurring after 21 days (>21 days); characterized by diffuse pulmonary fibrosis, permanent loss of alveolar architecture, and emphysematous cystic remodeling ('burnt lung')",
      "Granulomatous Phase; occurring at 14 days; 'cheese-like lung'",
      "Metaplastic Phase; occurring at 2 years; 'smoker's lung'",
      "Congestive Phase; occurring at 10 days; 'nutmeg lung'"
    ],
    "c": 1,
    "r": "The third phase of ARDS is the Fibrotic ('Hardening') Phase, occurring after 21 days (>21 days), characterized by diffuse pulmonary fibrosis, permanent loss of alveolar architecture, and emphysematous cystic remodeling ('burnt lung')."
  },
  {
    "cat": 4,
    "q": "How does acute alveolar flooding during the exudative ('waterlogged') phase of ARDS cause severe hypoxemia?",
    "a": [
      "It converts all pulmonary blood flow into West Zone 1 (alveolar dead space)",
      "Protein-rich edema fluid filling the alveoli physically blocks oxygen diffusion into perfused pulmonary capillaries, creating a right-to-left intrapulmonary shunt and V/Q mismatch",
      "It inhibits hemoglobin synthesis in the bone marrow",
      "It shifts the oxygen-hemoglobin dissociation curve to the far left by increasing HbF",
      "It selectively blocks carbon dioxide diffusion while sparing oxygen diffusion"
    ],
    "c": 1,
    "r": "In ARDS, increased alveolar-capillary permeability causes proteinaceous edema fluid to flood the alveoli, physically blocking oxygen diffusion into perfused capillaries (intrapulmonary shunt) and severely impairing gas exchange."
  },
  {
    "cat": 4,
    "q": "According to Fick's Law of Diffusion covered in the Pulmonary Circulation and Gas Exchange lecture, the rate of gas transfer across the respiratory membrane is directly proportional to which factors, and inversely proportional to which factor?",
    "a": [
      "Directly proportional to membrane thickness; inversely proportional to surface area and partial pressure gradient",
      "Directly proportional to surface area, diffusion coefficient (gas solubility / sqrt(MW)), and partial pressure difference (P1 - P2); inversely proportional to membrane thickness",
      "Directly proportional to molecular weight and membrane thickness; inversely proportional to gas solubility",
      "Directly proportional to Residual Volume; inversely proportional to Peak Expiratory Flow Rate",
      "Directly proportional to alveolar nitrogen concentration; inversely proportional to cardiac output"
    ],
    "c": 1,
    "r": "Fick's Law states that gas diffusion across the respiratory membrane is directly proportional to available surface area (A), gas diffusion coefficient/solubility (D), and partial pressure gradient (ΔP), and inversely proportional to membrane thickness (T)."
  },
  {
    "cat": 4,
    "q": "When comparing the diffusing capacities of Carbon Dioxide (CO2) and Oxygen (O2) across the alveolar-capillary respiratory membrane, why does CO2 diffuse approximately 20 times faster than O2?",
    "a": [
      "CO2 has a much smaller molecular weight than O2",
      "The partial pressure gradient for CO2 (~5–6 mmHg) is much larger than that for O2 (~60 mmHg)",
      "CO2 has a much higher solubility in the fluid/tissue of the respiratory membrane than O2, giving it a ~20-fold higher diffusion coefficient",
      "Active transport pumps selectively carry CO2 across Type I pneumocytes",
      "O2 can only diffuse through the thick blood-air barrier, whereas CO2 uses the thin blood-air barrier"
    ],
    "c": 2,
    "r": "Although O2 and CO2 have similar molecular weights, CO2 is ~20–24 times more soluble in water/tissue membranes than O2, giving CO2 a diffusing capacity roughly 20 times greater than that of oxygen."
  },
  {
    "cat": 5,
    "q": "A 35-year-old healthcare worker has a positive tuberculin skin test after exposure to a patient with cavitary lung disease. He is completely asymptomatic with a normal chest radiograph. What percentage of primary Mycobacterium tuberculosis infections follow this latent course?",
    "a": [
      "Less than 5% of infected individuals",
      "Approximately 25% of infected individuals",
      "Approximately 50% of infected individuals",
      "Approximately 75% of infected individuals",
      "Greater than 95% of infected individuals"
    ],
    "c": 4,
    "r": "According to the Tuberculosis lecture, >95% of primary tuberculosis infections result in latent (asymptomatic) infection, whereas <5% progress directly to active primary tuberculosis."
  },
  {
    "cat": 5,
    "q": "A 61-year-old man with chronic bronchitis presents in November with a history of frequent wintertime infectious exacerbations. According to the lecture on respiratory infections, what antimicrobial strategy is indicated for patients with recurrent winter exacerbations?",
    "a": [
      "Continuous intravenous carbapenem therapy year-round",
      "Suppressive antibiotic chemotherapy during colder months",
      "Withholding antibiotics until respiratory failure develops",
      "Triple-drug anti-tuberculous therapy for six months",
      "Aerosolized antifungal prophylaxis prior to winter"
    ],
    "c": 1,
    "r": "In the Treatment of Respiratory Bacterial Infections lecture, patients with chronic bronchitis who suffer recurrent acute exacerbations during colder months are managed with suppressive chemotherapy (prophylactic antibiotics), and acute exacerbations are treated at the first sign of chest infection."
  },
  {
    "cat": 5,
    "q": "A 14-year-old boy with a history of atopic dermatitis presents with episodic wheezing and dyspnea triggered by house-dust mites and grass pollen. Which immunopathological profile best characterizes his asthma phenotype?",
    "a": [
      "T2-low neutrophilic inflammation mediated by IL-17 and TNF-alpha",
      "T2-high eosinophilic inflammation mediated by IL-4, IL-5, IL-13, and IgE",
      "CD8+ cytotoxic T-lymphocyte destruction of alveolar Type I pneumocytes",
      "Immune-complex deposition with complement C3a activation in capillaries",
      "Pauci-granulocytic remodeling without adaptive immune activation"
    ],
    "c": 1,
    "r": "Extrinsic (allergic) asthma typically presents in younger atopic patients triggered by inhaled allergens (dust mites, pollens, grass, animal dander) and is driven by a T2-high immune response involving Th2 cytokines (IL-4, IL-5, IL-13), IgE class switching, mast cells, and eosinophils."
  },
  {
    "cat": 5,
    "q": "Which pathophysiological abnormality is shared across all chronic obstructive airway diseases, including asthma, chronic bronchitis, emphysema, and bronchiectasis?",
    "a": [
      "Primary reduction in parenchymal compliance with low Residual Volume",
      "Increased resistance to expiratory airflow with a reduced FEV1",
      "Diffuse collagen deposition within the alveolar-capillary interstitium",
      "Destruction of hyaline cartilage rings in the upper trachea",
      "Proportionate reduction in FEV1 and FVC with an FEV1/FVC ratio >0.85"
    ],
    "c": 1,
    "r": "The unifying hallmark of all obstructive lung diseases is an increase in resistance to airflow (predominantly during expiration), resulting in a reduced FEV1 and FEV1/FVC <0.8."
  },
  {
    "cat": 5,
    "q": "In clinical pathology, the term Chronic Obstructive Pulmonary Disease (COPD, formerly COAD) specifically encompasses which two overlapping entities?",
    "a": [
      "Bronchial asthma and bronchiectasis",
      "Chronic bronchitis and emphysema",
      "Cystic fibrosis and obliterative bronchiolitis",
      "Sarcoidosis and hypersensitivity pneumonitis",
      "Acute bronchitis and lobar pneumonia"
    ],
    "c": 1,
    "r": "COPD (previously termed COAD, Chronic Obstructive Airways Disease) specifically groups together chronic bronchitis and emphysema."
  },
  {
    "cat": 5,
    "q": "A 56-year-old male smoker presents to the clinic complaining of a chronic morning cough. Which historical criterion is required to establish a clinical diagnosis of chronic bronchitis?",
    "a": [
      "Dry, non-productive cough lasting at least 2 months in 3 consecutive years",
      "Cough with sputum production for at least 3 months in 2 consecutive years",
      "Recurrent wheezing and dyspnea occurring at least twice weekly for 1 year",
      "Purulent sputum production accompanied by hemoptysis for 4 weeks",
      "Radiographic evidence of permanent airspace enlargement over 6 months"
    ],
    "c": 1,
    "r": "Chronic bronchitis is defined clinically as a persistent cough with sputum production for at least 3 months in 2 consecutive years."
  },
  {
    "cat": 5,
    "q": "In a middle-aged smoker developing chronic bronchitis, where does the earliest inflammatory lesion originate, and what structural change predominates in the larger bronchi?",
    "a": [
      "Originates in the alveoli; predominance of Type II pneumocyte hyperplasia",
      "Originates in the bronchioles; predominance of submucosal mucous gland hypertrophy",
      "Originates in the trachea; predominance of hyaline cartilage calcification",
      "Originates in the visceral pleura; predominance of mesothelial fibrosis",
      "Originates in the pulmonary arterioles; predominance of intimal elastosis"
    ],
    "c": 1,
    "r": "In chronic bronchitis, the initial inflammatory process begins in the small airways (bronchiolar inflammation), while the primary histological hallmark in the larger airways is mucus hypersecretion and hypertrophy of bronchial submucosal mucous glands."
  },
  {
    "cat": 5,
    "q": "A bronchial biopsy from a 60-year-old man with a 40-pack-year smoking history and chronic bronchitis shows replacement of the normal ciliated columnar epithelium by multilayered flat cells. For which malignancy does this lesion directly predispose the patient?",
    "a": [
      "Peripheral bronchoalveolar adenocarcinoma",
      "Bronchogenic squamous cell carcinoma",
      "Pleural malignant mesothelioma",
      "Bronchial carcinoid neuroendocrine tumor",
      "Pulmonary leiomyosarcoma"
    ],
    "c": 1,
    "r": "Long-standing chronic irritation and inflammation of the bronchial mucosa in chronic bronchitis induces squamous metaplasia, which can progress through dysplasia to squamous cell carcinoma."
  },
  {
    "cat": 5,
    "q": "A 59-year-old man with chronic bronchitis presents with an acute exacerbation characterized by increased dyspnea and purulent sputum. Which set of bacterial and viral pathogens is explicitly highlighted in the pathology lecture as the most common causes?",
    "a": [
      "Klebsiella pneumoniae, Pseudomonas aeruginosa, Influenza A, and Rhinovirus",
      "Haemophilus influenzae, Streptococcus pneumoniae, RSV, and Adenovirus",
      "Staphylococcus aureus, Moraxella catarrhalis, Parainfluenza, and Coronavirus",
      "Legionella pneumophila, Mycoplasma pneumoniae, CMV, and EBV",
      "Mycobacterium tuberculosis, Nocardia asteroides, Measles, and Varicella"
    ],
    "c": 1,
    "r": "The Obstructive Lung Disease lecture specifically lists Haemophilus influenzae, Streptococcus pneumoniae, Respiratory Syncytial Virus (RSV), and Adenovirus as the common causes of recurrent low-grade infections in chronic bronchitis."
  },
  {
    "cat": 5,
    "q": "Although chronic bronchitis is fundamentally a disease of mucosal inflammation and mucous gland hypertrophy, inhaled bronchodilators often provide partial symptomatic relief. What explains this therapeutic response?",
    "a": [
      "Beta-2 agonists enzymatically cleave mucin glycoproteins in the airway lumen",
      "Chronic bronchial irritation induces a reversible bronchoconstrictive component",
      "Antimuscarinic agents reverse squamous metaplasia back to ciliated epithelium",
      "Bronchodilators restore destroyed alveolar elastin and radial traction",
      "Beta-2 agonists constrict bronchial mucosal capillaries to halt mucus secretion"
    ],
    "c": 1,
    "r": "Chronic bronchial irritation in chronic bronchitis induces a superimposed reversible bronchoconstrictive (smooth muscle spasm) component that responds to bronchodilators."
  },
  {
    "cat": 5,
    "q": "A 62-year-old overweight smoker with a chronic productive cough presents with peripheral edema and duskiness of the lips and nailbeds ('Blue Bloater'). Which arterial blood gas classification characterizes his condition?",
    "a": [
      "Type 1 respiratory failure with isolated hypoxemia and hypocapnia",
      "Type 2 respiratory failure with hypercapnia, hypoxemia, and cyanosis",
      "Uncompensated respiratory alkalosis with normal arterial oxygenation",
      "Pure metabolic acidosis secondary to renal bicarbonate wasting",
      "Normal PaO2 and PaCO2 maintained by compensatory hyperventilation"
    ],
    "c": 1,
    "r": "'Blue bloaters' (predominant chronic bronchitis phenotype) fail to maintain adequate alveolar ventilation, developing Type 2 respiratory failure characterized by hypercapnia, hypoxemia, and cyanosis."
  },
  {
    "cat": 5,
    "q": "On physical examination, a patient with advanced COPD has an increased anteroposterior chest diameter ('barrel chest'). What mechanical alteration produces this thoracic deformity?",
    "a": [
      "Bilateral exudative pleural effusions expanding the costophrenic angles",
      "Incomplete expiratory air expulsion resulting in chronic air trapping",
      "Ossification of the costochondral junctions and ankylosis of the spine",
      "Compensatory hypertrophy of the pectoralis and serratus anterior muscles",
      "Subpleural collagen deposition pulling the rib cage outward"
    ],
    "c": 1,
    "r": "In chronic bronchitis and emphysema, airway obstruction impedes expiration, leading to incomplete expulsion of air, chronic air trapping (elevated RV, FRC, and TLC), and an enlarged barrel-shaped thorax."
  },
  {
    "cat": 5,
    "q": "A lung autopsy specimen reveals permanent enlargement of the airspaces distal to the terminal bronchiole accompanied by destruction of the alveolar walls without obvious fibrosis. What specific structural protein loss drives this lesion?",
    "a": [
      "Loss of Type IV collagen in the capillary basement membrane",
      "Destruction of elastin fibers within the alveolar walls",
      "Depletion of hyaline cartilage matrix in segmental bronchi",
      "Loss of dystrophin in the diaphragmatic skeletal muscle",
      "Deficiency of mucin-5AC in bronchial goblet cells"
    ],
    "c": 1,
    "r": "Emphysema is defined pathologically as the enlargement of alveolar air spaces accompanied by destruction of elastin in the alveolar walls."
  },
  {
    "cat": 5,
    "q": "Emphysema primarily destroys alveolar walls rather than causing mucus plugging of large bronchi, yet it produces severe expiratory airflow obstruction on spirometry. What mechanical phenomenon explains this obstruction?",
    "a": [
      "Sloughed alveolar pneumocytes form obstructive casts in the mainstem bronchi",
      "Loss of alveolar elastic fibers abolishes radial traction holding respiratory bronchioles open",
      "Alveolar destruction triggers vagally mediated spasm of the tracheal smooth muscle",
      "Hyperinflated bullae compress the superior vena cava and main pulmonary artery",
      "Compensatory goblet cell hyperplasia obliterates the lumen of lobar bronchi"
    ],
    "c": 1,
    "r": "Respiratory bronchioles lack cartilage plates and rely on the radial traction of elastic tissue in adjacent alveolar walls to stay open during expiration. When alveolar elastin is destroyed in emphysema, the respiratory bronchioles collapse during exhalation."
  },
  {
    "cat": 5,
    "q": "A 55-year-old smoker has early emphysematous changes on high-resolution chest CT but denies shortness of breath at rest. Approximately what fraction of the lung parenchyma must be damaged before clinical symptoms first manifest?",
    "a": [
      "Roughly one-twentieth (5%)",
      "Roughly one-tenth (10%)",
      "Roughly one-third (33%)",
      "Roughly two-thirds (67%)",
      "Roughly four-fifths (80%)"
    ],
    "c": 2,
    "r": "According to the Obstructive Lung Disease lecture, approximately one-third (1/3) of the lung must be affected by emphysema before clinical symptoms appear."
  },
  {
    "cat": 5,
    "q": "A 68-year-old thin man with severe emphysema breathes through pursed lips with visible accessory muscle use, lacks cyanosis, and is described clinically as a 'Pink Puffer'. Which blood gas pattern and ventilatory mechanism characterize this phenotype?",
    "a": [
      "Hypoventilation resulting in Type 2 respiratory failure (hypercapnia and cyanosis)",
      "Overventilation maintaining gas exchange with Type 1 respiratory failure (hypoxemia without hypercapnia)",
      "Severe metabolic alkalosis with compensatory hypoventilation and hypercapnia",
      "Normal PaO2 and elevated DLCO secondary to polycythemia",
      "Acute intrapulmonary shunting from protein-rich alveolar edema"
    ],
    "c": 1,
    "r": "'Pink puffers' (predominant emphysema) overventilate (hyperventilate) to maintain relatively normal gas exchange and exhibit Type 1 respiratory failure (hypoxemia without hypercapnia)."
  },
  {
    "cat": 5,
    "q": "A 60-year-old man with a 45-pack-year smoking history undergoes lung resection. Histopathology shows focal destruction restricted to the central respiratory bronchioles of the upper lobes while the distal alveoli are spared. What is the diagnosis?",
    "a": [
      "Panacinar (panlobular) emphysema",
      "Centriacinar (centrilobular) emphysema",
      "Paraseptal (distal acinar) emphysema",
      "Cryptogenic fibrosing alveolitis",
      "Cylindrical bronchiectasis"
    ],
    "c": 1,
    "r": "Centriacinar (centrilobular) emphysema selectively damages the respiratory bronchioles while sparing distal alveoli, and is the most common anatomical form of emphysema in cigarette smokers."
  },
  {
    "cat": 5,
    "q": "A 36-year-old man with no smoking history presents with basilar-predominant dyspnea and elevated liver transaminases due to alpha-1-antitrypsin deficiency. Which histological pattern of airspace destruction is expected in his lungs?",
    "a": [
      "Selective destruction of respiratory bronchioles with sparing of distal alveoli",
      "Uniform enlargement and destruction of the entire acinus from respiratory bronchiole to terminal alveoli",
      "Isolated subpleural bleb formation along the interlobular septa in the lung apices",
      "Dense interstitial collagen deposition with honeycomb cyst formation",
      "Hypertrophy of bronchial submucosal glands with normal alveolar walls"
    ],
    "c": 1,
    "r": "Alpha-1-antitrypsin deficiency classically causes panacinar (panlobular) emphysema, in which the entire acinus (from the respiratory bronchiole to the terminal blind alveoli) is uniformly enlarged and destroyed."
  },
  {
    "cat": 5,
    "q": "A 70-year-old man with advanced emphysema has lost 9 kg over the past year despite an adequate appetite and no evidence of malignancy. What is the primary pathophysiological cause of his weight loss?",
    "a": [
      "Exocrine pancreatic insufficiency causing steatorrhea",
      "Markedly increased caloric expenditure from the high work of breathing",
      "Chronic mesenteric ischemia secondary to atherosclerosis",
      "Systemic hyperthyroidism induced by chronic hypoxemia",
      "Protein-losing enteropathy from right ventricular failure"
    ],
    "c": 1,
    "r": "Patients with advanced emphysema experience progressive dyspnea and weight loss directly due to the markedly increased work of breathing required to overcome airflow limitation and hyperinflation."
  },
  {
    "cat": 5,
    "q": "A 66-year-old man with a 20-year history of severe COPD develops jugular venous distension, hepatomegaly, and bilateral ankle edema. Loss of the pulmonary capillary bed and chronic hypoxic vasoconstriction have caused which complication?",
    "a": [
      "Constrictive pericarditis",
      "Right heart failure (cor pulmonale)",
      "High-output left ventricular failure",
      "Calcific aortic valve stenosis",
      "Subacute bacterial endocarditis"
    ],
    "c": 1,
    "r": "Chronic progression of COPD/emphysema causes pulmonary hypertension (via capillary bed destruction and hypoxic pulmonary vasoconstriction), culminating in right ventricular hypertrophy and right heart failure (cor pulmonale)."
  },
  {
    "cat": 5,
    "q": "A 63-year-old man with emphysema presents to the emergency department with worsening dyspnea and fever. Which change in sputum character specifically signals an acute infectious exacerbation?",
    "a": [
      "Transition to pink, frothy serous transudate",
      "Transition to thick, purulent sputum",
      "Complete cessation of mucus production",
      "Appearance of milky chylous effusion",
      "Expectoration of calcified broncholiths"
    ],
    "c": 1,
    "r": "In the Obstructive Lung Disease lecture, infectious exacerbations of COPD/emphysema are specifically marked by the development of purulent sputum."
  },
  {
    "cat": 5,
    "q": "Which of the following groups consists entirely of disorders classified under the obstructive lung disease category in your pathology lectures?",
    "a": [
      "Asthma, bronchiectasis, cystic fibrosis, and bronchiolitis",
      "Sarcoidosis, asbestosis, silicosis, and berylliosis",
      "Kyphoscoliosis, muscular dystrophy, obesity, and ARDS",
      "Mesothelioma, pleural effusion, pneumothorax, and pneumonia",
      "Cryptogenic fibrosing alveolitis, farmer's lung, and coal worker's lung"
    ],
    "c": 0,
    "r": "Alongside COPD (chronic bronchitis and emphysema), the lectures classify asthma, bronchiectasis, cystic fibrosis, and bronchiolitis as obstructive lung diseases."
  },
  {
    "cat": 5,
    "q": "A 21-year-old college student develops acute wheezing, cough, and chest tightness while jogging in cold air. Administration of an inhaled medication completely normalizes his FEV1 within 15 minutes. What feature distinguishes his disorder from emphysema?",
    "a": [
      "Permanent destruction of alveolar walls with reduced DLCO",
      "Reversible airway smooth muscle contraction and mucosal inflammation",
      "Irreversible fibrosis of the peribronchiolar interstitium",
      "Loss of radial traction on the respiratory bronchioles",
      "Chronic hypercapnic respiratory failure at baseline"
    ],
    "c": 1,
    "r": "Bronchial asthma is characterized by episodic, reversible airway obstruction driven by bronchial smooth muscle contraction (spasm), mucosal edema/inflammation, and mucus hypersecretion, triggered by allergens or non-allergic stimuli (cold air, exercise, infections)."
  },
  {
    "cat": 5,
    "q": "In regulating bronchial smooth muscle tone, which autonomic receptor pathways mediate bronchoconstriction versus bronchodilation?",
    "a": [
      "Beta-2 adrenergic receptors mediate constriction; M3 muscarinic receptors mediate dilation",
      "M3 muscarinic receptors mediate constriction; Beta-2 adrenergic receptors mediate dilation",
      "Alpha-1 adrenergic receptors mediate dilation; nicotinic receptors mediate constriction",
      "Beta-1 adrenergic receptors mediate dilation; H2 histamine receptors mediate constriction",
      "Vagal cholinergic fibers mediate dilation; circulating epinephrine mediates constriction"
    ],
    "c": 1,
    "r": "Parasympathetic vagal fibers release acetylcholine onto muscarinic (M3) receptors to cause bronchoconstriction, whereas sympathetic/circulating epinephrine stimulates beta-2 adrenergic receptors to cause bronchodilation."
  },
  {
    "cat": 5,
    "q": "A 32-year-old woman with severe allergic asthma remains poorly controlled despite high-dose inhaled corticosteroids and long-acting beta-2 agonists. She has markedly elevated serum IgE levels. Which targeted biologic therapy binds circulating IgE to prevent mast cell and basophil activation?",
    "a": [
      "Mepolizumab (anti-IL-5 monoclonal antibody)",
      "Omalizumab (anti-IgE monoclonal antibody)",
      "Isoniazid (mycolic acid synthesis inhibitor)",
      "Benzonatate (peripheral stretch receptor anesthetic)",
      "Rifampicin (bacterial RNA polymerase inhibitor)"
    ],
    "c": 1,
    "r": "In the Immunopathology and Treatment of Asthma lectures, Omalizumab is a recombinant humanized monoclonal antibody that binds free circulating IgE, preventing IgE from binding to high-affinity FcεRI receptors on mast cells and basophils in severe allergic (T2-high) asthma."
  }
];
