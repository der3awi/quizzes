import { Question } from "./types";

export const respiratoryCategories = [
  "Anatomy & Histology",
  "Physiology & Mechanics",
  "PFTs & Spirometry",
  "Obstructive Lung Diseases",
  "Restrictive & ARDS",
  "Pharmacology & Therapeutics",
];

// 100 Core Practice Questions (IFOM / Step 1 Calibrated)
export const respiratoryTblCoreQuestions: Question[] = [
  {
    "cat": 0,
    "q": "A 29-year-old man presents with loss of smell following a viral upper respiratory infection. Biopsy of the superior nasal mucosa is performed. Which of the following histological findings is characteristic of this region?",
    "a": [
      "Pseudostratified ciliated columnar epithelium with abundant goblet cells",
      "Non-ciliated pseudostratified columnar epithelium with serous Bowman's glands",
      "Simple cuboidal ciliated epithelium with secretory Clara cells",
      "Stratified squamous keratinized epithelium with coarse vibrissae",
      "Pseudostratified ciliated epithelium with mucous glands and serous demilunes"
    ],
    "c": 1,
    "r": "Olfactory epithelium (upper 1/3 of the nasal cavity) consists of pseudostratified columnar epithelium that is NOT ciliated, lacks goblet cells, and contains serous olfactory (Bowman's) glands, bipolar neurons, supporting cells, and basal stem cells."
  },
  {
    "cat": 0,
    "q": "A 19-year-old skier inhales subfreezing air during a race. Which histological feature within the lamina propria of the inferior two-thirds of the nasal cavity directly warms the inspired gas?",
    "a": [
      "Serous acini of Bowman's olfactory glands",
      "Discontinuous plates of hyaline cartilage",
      "Rich vascular networks and capillary loops",
      "Bipolar neurons and sustentacular cells",
      "Circularly arranged smooth muscle bundles"
    ],
    "c": 2,
    "r": "The lamina propria of the respiratory mucosa (inferior 2/3 of the nasal cavity) contains rich vascular networks and capillary loops that warm inhaled air, whereas conchae humidify the air and mucus glands trap particles."
  },
  {
    "cat": 0,
    "q": "A pathologist examines a cross-section of a lower respiratory airway containing pseudostratified ciliated columnar epithelium, a continuous ring of smooth muscle, submucosal glands with adipose tissue, and discontinuous cartilage plates. Which structure is being examined?",
    "a": [
      "Distal trachea",
      "Lobar bronchus",
      "Terminal bronchiole",
      "Respiratory bronchiole",
      "Alveolar duct"
    ],
    "c": 1,
    "r": "Bronchi are distinguished from the trachea and bronchioles by having discontinuous hyaline cartilage plates, a distinct muscularis layer of smooth muscle, and a submucosa with loose connective tissue, compound tubuloalveolar glands, and adipose tissue."
  },
  {
    "cat": 0,
    "q": "As the bronchial tree branches distally from the segmental bronchi toward the alveolar sacs, which of the following components persists furthest into the gas-exchanging zone?",
    "a": [
      "Submucosal tubuloalveolar glands",
      "Discontinuous hyaline cartilage plates",
      "Mucin-secreting goblet cells",
      "Motile ciliated epithelial cells",
      "Parenchymal elastic connective fibers"
    ],
    "c": 4,
    "r": "According to the bronchial tree histological progression chart, goblet cells, glands, and cartilage disappear at the bronchus-bronchiole transition, ciliated cells terminate in the bronchioles, smooth muscle reaches the alveolar ducts, and elastic fibers persist all the way through the alveoli."
  },
  {
    "cat": 0,
    "q": "An electron micrograph of the alveolar septum demonstrates two distinct regions of the blood-air barrier: a thin region (0.1–1.5 μm) and a thicker region. Which structure is uniquely interposed within the thicker portion to permit tissue fluid accumulation?",
    "a": [
      "Fused alveolar and capillary basal laminae",
      "Type I squamous alveolar epithelial cells",
      "Interstitial connective tissue cells and fibers",
      "Continuous non-fenestrated capillary endothelium",
      "Monomolecular film of dipalmitoylphosphatidylcholine"
    ],
    "c": 2,
    "r": "The Thin Blood-Air Barrier consists of surfactant, Type I pneumocytes, fused basal laminae, and capillary endothelium for gas exchange. The Thick Blood-Air Barrier contains connective tissue (CT) cells and fibers between the alveolar and capillary basement membranes, allowing accumulation of tissue fluid."
  },
  {
    "cat": 0,
    "q": "A 3-year-old child aspirates a peanut. Bronchoscopy reveals the foreign body lodged in the right mainstem bronchus. Which anatomical feature uniquely characterizes the left lung and bronchial tree compared to the right?",
    "a": [
      "Presence of an intermediate bronchus",
      "Division into three lobar bronchi",
      "Presence of a horizontal interlobar fissure",
      "Presence of a cardiac notch and two lobar bronchi",
      "Wider, shorter, and more vertical main bronchus"
    ],
    "c": 3,
    "r": "The right lung features three lobar bronchi and an intermediate bronchus, whereas the left lung uniquely possesses a cardiac notch and divides into only two lobar bronchi (superior and inferior)."
  },
  {
    "cat": 1,
    "q": "During quiet resting breathing, a healthy 25-year-old man completes a normal tidal expiration and pauses before his next breath. What is the approximate intrapleural pressure at this point?",
    "a": [
      "-30.0 mmHg relative to atmospheric pressure",
      "-6.0 mmHg relative to atmospheric pressure",
      "-2.5 mmHg relative to atmospheric pressure",
      "0.0 mmHg relative to atmospheric pressure",
      "+50.0 mmHg relative to atmospheric pressure"
    ],
    "c": 2,
    "r": "In the Mechanics of Respiration lecture, intrapleural pressure is about -2.5 mmHg at the end of normal expiration, -6 mmHg at the end of normal inspiration, -30 mmHg at the end of maximum inspiration, and >+50 mmHg at the end of maximum expiration."
  },
  {
    "cat": 1,
    "q": "A healthy volunteer performs a maximal inspiratory effort against a closed glottis, followed by a maximal forced expiratory effort. Which pair of intrapleural pressures corresponds to the end of maximum inspiration and maximum expiration, respectively?",
    "a": [
      "-6 mmHg and +10 mmHg",
      "-2.5 mmHg and -6 mmHg",
      "-15 mmHg and +25 mmHg",
      "-30 mmHg and >+50 mmHg",
      "-50 mmHg and +30 mmHg"
    ],
    "c": 3,
    "r": "Intrapleural pressure reaches approximately -30 mmHg at the end of maximum inspiration and exceeds +50 mmHg at the end of maximum expiration."
  },
  {
    "cat": 1,
    "q": "A 22-year-old woman experiencing an acute panic attack breathes rapidly and deeply while seated at rest. Which of the following best defines her ventilatory state and resulting blood gas change?",
    "a": [
      "Ventilation exceeding metabolic demand, causing hypocapnia",
      "Ventilation matching heightened oxygen consumption, maintaining normocapnia",
      "Ventilation falling below metabolic demand, causing hypercapnia",
      "Increased anatomical dead space ventilation, causing hypoxemia",
      "Decreased alveolar ventilation, causing respiratory acidosis"
    ],
    "c": 0,
    "r": "Hyperventilation is defined in the Mechanics of Respiration lecture as ventilation in excess of the metabolic demands of the tissue, resulting in hypocapnia (low levels of arterial CO2)."
  },
  {
    "cat": 3,
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
    "cat": 3,
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
    "cat": 3,
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
    "cat": 4,
    "q": "A 64-year-old retired shipyard worker presents with progressive exertional dyspnea. Chest imaging reveals calcified pleural plaques and lower-lobe interstitial fibrosis. Under the 'PAINT' classification of restrictive lung disease, which two anatomical compartments are affected?",
    "a": [
      "Pericardial and Alveolar compartments",
      "Pleural and Interstitial compartments",
      "Parenchymal and Neuromuscular compartments",
      "Pulmonary vascular and Tracheal compartments",
      "Pharyngeal and Thoracic cage compartments"
    ],
    "c": 1,
    "r": "In the Restrictive Lung Disease lecture (PAINT mnemonic: Pleural, Alveolar, Interstitial, Neuromuscular, Thoracic cage), pleural plaques/mesothelioma/effusions are classified under Pleural causes, while pneumoconioses (asbestosis, coal, silica, beryllium) are classified under Interstitial causes."
  },
  {
    "cat": 1,
    "q": "The lungs constantly exhibit an inward elastic recoil that opposes inflation. Which two components account for the total elastic recoil forces of the lungs?",
    "a": [
      "Tracheal cartilage rings and bronchial smooth muscle tone",
      "Parenchymal elastin-collagen fibers and alveolar fluid surface tension",
      "Intrapleural fluid viscosity and atmospheric barometric pressure",
      "Diaphragmatic tendon tension and external intercostal contraction",
      "Pulmonary capillary hydrostatic pressure and plasma oncotic pressure"
    ],
    "c": 1,
    "r": "The elastic forces of the lungs are divided into two parts: (1) elastic forces of the lung tissue itself (elastin and collagen fibers in the parenchyma) and (2) elastic forces caused by surface tension of the fluid lining the alveoli."
  },
  {
    "cat": 1,
    "q": "During inspiration, how does the mechanical arrangement of elastin and collagen fibers in the lung parenchyma change as the lungs expand from a deflated state?",
    "a": [
      "Linear fibers coil into relaxed helices, reducing recoil force",
      "Contracted, kinked fibers stretch and unkink, exerting greater elastic force",
      "Collagen fibers depolymerize enzymatically, increasing tissue compliance",
      "Elastin cross-links break irreversibly, lowering transpulmonary pressure",
      "Fibers actively shorten via calcium-dependent cross-bridge cycling"
    ],
    "c": 1,
    "r": "In deflated lungs, elastin and collagen fibers are in an elastically contracted and kinked state; when the lungs expand, the fibers become stretched and unkinked, elongating and exerting greater elastic recoil force."
  },
  {
    "cat": 1,
    "q": "Which pressure gradient directly represents the recoil pressure (transpulmonary pressure) that tends to collapse the lungs at any given instant of respiration?",
    "a": [
      "Atmospheric pressure minus intra-alveolar pressure",
      "Intra-alveolar pressure minus intrapleural pressure",
      "Intrapleural pressure minus atmospheric pressure",
      "Pulmonary arterial pressure minus left atrial pressure",
      "Intra-alveolar pressure plus intrapleural pressure"
    ],
    "c": 1,
    "r": "Transpulmonary pressure (recoil pressure) is the difference between intra-alveolar pressure and intrapleural pressure (the pressure difference between the alveoli and the outer surfaces of the lungs)."
  },
  {
    "cat": 1,
    "q": "In an excised pair of healthy adult human lungs (removed from the thoracic cage), a 1 cm H2O increase in transpulmonary pressure is applied and held for 15 seconds. By how much will the lung volume expand?",
    "a": [
      "50 mL",
      "110 mL",
      "200 mL",
      "350 mL",
      "500 mL"
    ],
    "c": 2,
    "r": "Normal compliance of both lungs combined (lungs alone, removed from the thorax) is approximately 200 mL/cm H2O; a 1 cm H2O increase in transpulmonary pressure expands lung volume by 200 mL after 10 to 20 seconds."
  },
  {
    "cat": 1,
    "q": "An anesthetized, paralyzed patient is mechanically ventilated. When measuring the compliance of the combined lung-thorax system compared to the excised lungs alone, what value is expected?",
    "a": [
      "400 mL/cm H2O, or roughly double that of the lungs alone",
      "200 mL/cm H2O, or equal to that of the lungs alone",
      "110 mL/cm H2O, or roughly half that of the lungs alone",
      "55 mL/cm H2O, or roughly one-fourth that of the lungs alone",
      "20 mL/cm H2O, or roughly one-tenth that of the lungs alone"
    ],
    "c": 2,
    "r": "Combined lung-thorax compliance in a relaxed or paralyzed person is about 110 mL/cm H2O—nearly half that of the lungs alone (200 mL/cm H2O) because almost twice as much pressure is required to inflate the lungs when enclosed inside the thoracic cage."
  },
  {
    "cat": 1,
    "q": "When a subject inflates their lungs to extreme high expansion volumes approaching total lung capacity, how does the combined lung-thorax compliance change relative to the compliance of the lungs alone?",
    "a": [
      "It increases to more than double that of the lungs alone",
      "It remains constant at roughly half that of the lungs alone",
      "It falls to less than one-fifth that of the lungs alone",
      "It becomes infinite as alveolar surface tension drops to zero",
      "It equals the compliance of a saline-filled lung preparation"
    ],
    "c": 2,
    "r": "At extreme lung volumes (very high expansion or very low compression), chest wall limitations become extreme, reducing combined lung-thorax compliance to less than one-fifth (<1/5) that of the lungs alone."
  },
  {
    "cat": 1,
    "q": "In a physiology laboratory, pressure-volume curves are recorded for an air-filled lung and a saline-filled lung. Why does the saline-filled lung require significantly lower transpulmonary pressure to achieve the same volume expansion?",
    "a": [
      "Saline hydrolyzes parenchymal collagen cross-links",
      "Saline abolishes the alveolar air-fluid interface and surface tension",
      "Saline stimulates Type II pneumocytes to release surfactant",
      "Saline relaxes bronchiolar smooth muscle via muscarinic blockade",
      "Saline increases the radial traction of respiratory bronchioles"
    ],
    "c": 1,
    "r": "Saline-filled lungs require much less pleural/transpulmonary pressure to expand than air-filled lungs because filling the alveoli with saline eliminates the air-fluid interface and abolishes surface tension forces, leaving only tissue elastic forces."
  },
  {
    "cat": 1,
    "q": "Two connected alveoli have different radii (r1 < r2). How does pulmonary surfactant prevent the smaller alveolus from collapsing into the larger alveolus?",
    "a": [
      "It increases surface tension in the smaller alveolus to resist collapse",
      "It concentrates more densely in the smaller alveolus, lowering its surface tension",
      "It dilates thelarger alveolus until both radii exceed critical closing volume",
      "It equalizes the radius of curvature prior to inspiration",
      "It blocks airflow between adjacent alveoli via the pores of Kohn"
    ],
    "c": 1,
    "r": "With surfactant present, smaller alveoli have a higher concentration of surfactant per unit area and therefore lower surface tension. This equalizes pressure between small and large alveoli and allows the smaller alveolus to inflate at a faster rate until equal in size."
  },
  {
    "cat": 1,
    "q": "An arterial blood sample is drawn from a healthy subject breathing room air. What are the relative proportions of oxygen transported dissolved in plasma versus bound to hemoglobin?",
    "a": [
      "70% dissolved in plasma; 30% bound to hemoglobin",
      "23% dissolved in plasma; 77% bound to hemoglobin",
      "11% dissolved in plasma; 89% bound to hemoglobin",
      "7% dissolved in plasma; 93% bound to hemoglobin",
      "2% dissolved in plasma; 98% bound to hemoglobin"
    ],
    "c": 4,
    "r": "Oxygen is transported in the blood in two forms: 2% dissolved in the plasma and 98% bound to hemoglobin."
  },
  {
    "cat": 1,
    "q": "Given an oxygen solubility coefficient of 0.003 mL O2 / 100 mL blood / mmHg, what is the difference in dissolved oxygen content between 100 mL of arterial blood (PaO2 = 100 mmHg) and 100 mL of mixed venous blood (PvO2 = 40 mmHg)?",
    "a": [
      "0.018 mL O2 / 100 mL blood",
      "0.120 mL O2 / 100 mL blood",
      "0.180 mL O2 / 100 mL blood",
      "0.300 mL O2 / 100 mL blood",
      "1.800 mL O2 / 100 mL blood"
    ],
    "c": 2,
    "r": "Arterial dissolved O2 = 0.003 × 100 = 0.30 mL O2/100 mL blood. Venous dissolved O2 = 0.003 × 40 = 0.12 mL O2/100 mL blood. The arteriovenous difference in dissolved O2 is 0.30 - 0.12 = 0.18 mL O2/100 mL blood."
  },
  {
    "cat": 1,
    "q": "During vigorous exercise, skeletal muscle capillary blood exhibits an elevated P50 on the oxygen-hemoglobin dissociation curve. Which set of local conditions produces this change?",
    "a": [
      "Decreased PCO2, increased pH, decreased 2,3-DPG, and decreased temperature",
      "Increased PCO2, decreased pH, increased 2,3-DPG, and increased temperature",
      "Decreased PCO2, decreased pH, depleted 2,3-DPG, and hypothermia",
      "Increased PCO2, increased pH, fetal hemoglobin, and myoglobin",
      "Normal PCO2, increased pH, increased 2,3-DPG, and decreased temperature"
    ],
    "c": 1,
    "r": "An elevated P50 reflects a rightward shift of the O2-Hb dissociation curve (lower O2 affinity, increased tissue O2 unloading), which is caused by high CO2, high [H+] (low pH), high 2,3-DPG, and high temperature."
  },
  {
    "cat": 1,
    "q": "A trauma patient receives a massive transfusion of red blood cells stored for several weeks in a blood bank. How does this transfused blood behave regarding oxygen transport, and by what mechanism?",
    "a": [
      "Shifts the curve right due to accumulation of lactic acid",
      "Shifts the curve left due to depletion of 2,3-diphosphoglycerate",
      "Shifts the curve right due to breakdown of fetal hemoglobin",
      "Shifts the curve left due to excessive carbaminohemoglobin formation",
      "Shifts the curve right due to increased erythrocyte carbonic anhydrase"
    ],
    "c": 1,
    "r": "Stored blood in a blood bank has low 2,3-DPG levels, which shifts the O2-Hb dissociation curve to the left (low P50, increased affinity, impaired O2 unloading to tissues). HbF also shifts the curve left due to poor binding of 2,3-DPG."
  },
  {
    "cat": 1,
    "q": "As carbon dioxide diffuses from peripheral tissues into red blood cells, roughly 70% is converted into bicarbonate ions (HCO3-). What transport process occurs across the erythrocyte membrane to maintain electrical neutrality?",
    "a": [
      "HCO3- is pumped into the cell in exchange for Na+ efflux",
      "HCO3- diffuses into plasma in exchange for Cl- entering the cell",
      "H+ ions diffuse into plasma in exchange for K+ entering the cell",
      "CO2 is actively cotransported with Cl- out of the erythrocyte",
      "Carbamino compounds diffuse out in exchange for plasma albumin"
    ],
    "c": 1,
    "r": "Carbonic anhydrase hydrates CO2 to H2CO3, which dissociates into H+ (buffered by hemoglobin) and HCO3-. About 70% of HCO3- diffuses out of the RBC into the plasma in exchange for Cl- entering the RBC (the chloride shift)."
  },
  {
    "cat": 1,
    "q": "According to the gas transport lecture diagram, in what proportions is carbon dioxide carried in venous blood among its three transport forms?",
    "a": [
      "98% bicarbonate, 2% dissolved CO2, and 0% carbaminohemoglobin",
      "70% bicarbonate, 23% carbaminohemoglobin, and 7% dissolved CO2",
      "50% bicarbonate, 30% dissolved CO2, and 20% carbaminohemoglobin",
      "70% carbaminohemoglobin, 23% bicarbonate, and 7% dissolved CO2",
      "85% bicarbonate, 10% dissolved CO2, and 5% carbonic acid"
    ],
    "c": 1,
    "r": "The CO2 transport diagram shows 70% transported as HCO3-, 23% as Hgb·CO2 (carbamino), and 7% as dissolved CO2."
  },
  {
    "cat": 1,
    "q": "A neurophysiology experiment records spontaneous rhythmic action potentials from inspiratory neurons in the dorsal aspect of the medulla. Which specific structure initiates this rhythmic discharge?",
    "a": [
      "Pneumotaxic center in the upper pons",
      "Apneustic center in the lower pons",
      "Pre-Bötzinger complex in the medulla",
      "Ventral respiratory group in the medulla",
      "Fastigial nucleus in the cerebellum"
    ],
    "c": 2,
    "r": "The dorsal respiratory group (DRG) is the rhythmicity center responsible for inspiration, and its rhythmic discharge is initiated in the Pre-Bötzinger complex in the medulla."
  },
  {
    "cat": 1,
    "q": "During heavy exercise, the respiratory center increases the breathing frequency. How does the medullary inspiratory ramp signal modify its output to increase the respiratory rate?",
    "a": [
      "By slowing the rate of rise of the inspiratory ramp signal",
      "By causing earlier cessation of the ramp, shortening inspiration and expiration",
      "By prolonging the limiting point of the ramp via apneustic stimulation",
      "By silencing the dorsal respiratory group during quiet inspiration",
      "By uncoupling the pneumotaxic center from the dorsal respiratory group"
    ],
    "c": 1,
    "r": "The inspiratory ramp controls breathing rate via the limiting point at which the ramp suddenly ceases: the earlier the ramp ceases, the shorter the duration of inspiration (which also shortens expiration), thereby increasing the frequency of respiration."
  },
  {
    "cat": 1,
    "q": "Which functional characteristic distinguishes the Ventral Respiratory Group (VRG) from the Dorsal Respiratory Group (DRG)?",
    "a": [
      "The VRG drives quiet resting inspiration and discharges rhythmically",
      "The VRG mediates forced expiration and exhibits reciprocal inhibition with the DRG",
      "The VRG is located in the upper pons and inhibits the apneustic center",
      "The VRG senses cerebrospinal fluid pH directly on the medullary surface",
      "The VRG innervates the carotid body via the glossopharyngeal nerve"
    ],
    "c": 1,
    "r": "The VRG is located in the ventral aspect of the medulla, contains expiratory and some inspiratory neurons, is responsible for forced expiration, and exhibits reciprocal innervation (inactivated when the DRG is stimulated and vice versa)."
  },
  {
    "cat": 1,
    "q": "During a clinical physiology demonstration, a subject who hyperventilates develops tachycardia, whereas during breath-holding (hypoventilation) the subject develops bradycardia. What brainstem mechanism explains this coupling?",
    "a": [
      "Direct vagal motor innervation from pulmonary stretch receptors to the SA node",
      "Radiation of impulses between the medullary respiratory, cardiac, and vasomotor centers",
      "Inhibition of the sympathetic chain ganglia by hypocapnic cerebrospinal fluid",
      "Baroreceptor reflex activation secondary to negative intrapleural pressure",
      "Cerebellar coordination of heart rate with pharyngeal swallowing reflexes"
    ],
    "c": 1,
    "r": "Stimulation or inhibition of the cardiac or vasomotor center in the medulla results in stimulation or inhibition of the respiratory center because impulses radiate between them; thus, hyperventilation is associated with tachycardia and hypoventilation with bradycardia."
  },
  {
    "cat": 1,
    "q": "A patient suffers a focal stroke affecting a higher brain center, resulting in an inability to coordinate breathing with swallowing and speaking, leading to aspiration during speech. Which structure is most likely damaged?",
    "a": [
      "Anterior hypothalamus",
      "Limbic system",
      "Cerebellum",
      "Primary motor cortex",
      "Medullary vasomotor center"
    ],
    "c": 2,
    "r": "According to the Higher Centers slide in the Neural Control of Respiration lecture: the cerebral cortex mediates voluntary hyperventilation/apnea, the hypothalamus increases respiration for heat loss, the limbic system mediates emotional effects, and the cerebellum coordinates breathing with swallowing and talking."
  },
  {
    "cat": 1,
    "q": "A 68-year-old man with acute hypoxemic respiratory failure has a PaO2 of 52 mmHg. Which chemoreceptor cells and cranial nerve afferents are primarily responsible for sensing this drop in arterial oxygen tension and signaling the medulla?",
    "a": [
      "Central medullary neurons signaling via the phrenic nerve (C3–C5)",
      "Carotid body Type I glomus cells via CN IX and aortic bodies via CN X",
      "Carotid sinus baroreceptors via CN X and aortic arch receptors via CN IX",
      "Bronchiolar neuroendocrine cells signaling via the recurrent laryngeal nerve",
      "Alveolar Type II pneumocytes signaling via pulmonary sympathetic afferents"
    ],
    "c": 1,
    "r": "Peripheral chemoreceptors (Type I glomus cells) respond primarily to hypoxia (as well as hypercapnia and acidosis). Carotid bodies transmit impulses via the glossopharyngeal nerve (CN IX) and aortic bodies transmit via the vagus nerve (CN X) to the medulla."
  },
  {
    "cat": 1,
    "q": "In an experiment where a subject breathes gas mixtures of progressively lower oxygen concentrations while arterial PCO2 and pH are clamped at normal levels, below what arterial PO2 threshold does alveolar ventilation begin to rise steeply?",
    "a": [
      "Below 400 mmHg",
      "Below 250 mmHg",
      "Below 150 mmHg",
      "Below 100 to 60 mmHg",
      "Only below 20 mmHg"
    ],
    "c": 3,
    "r": "When PCO2 and [H+] are kept normal, carotid body nerve impulse firing and alveolar ventilation remain nearly flat as PaO2 drops from 500 to 100 mmHg, then increase steeply as PaO2 falls below 100–60 mmHg."
  },
  {
    "cat": 1,
    "q": "A patient develops acute respiratory acidosis with an arterial PCO2 of 65 mmHg. How are the central chemoreceptors on the ventral surface of the medulla stimulated in this setting?",
    "a": [
      "Arterial H+ ions rapidly diffuse across the blood-brain barrier into the CSF",
      "Arterial CO2 crosses the blood-brain barrier and generates H+ in the CSF via carbonic anhydrase",
      "Arterial HCO3- is actively pumped into the CSF to depolarize chemoreceptor neurons",
      "Decreased CSF PO2 directly opens voltage-gated calcium channels on glomus cells",
      "Vagal afferents release acetylcholine directly onto the fourth ventricle choroid plexus"
    ],
    "c": 1,
    "r": "Blood H+ ions cannot cross the blood-brain barrier (BBB). Instead, CO2 crosses the BBB into the CSF and reacts with H2O via carbonic anhydrase to form H2CO3 -> H+ + HCO3-, stimulating central chemoreceptors both directly (by CO2) and indirectly (by H+)."
  },
  {
    "cat": 1,
    "q": "In an upright subject, pulmonary blood flow varies from apex to base across West's zones. Which pressure relationship correctly defines Zone 2 (middle lung) versus Zone 3 (lung base)?",
    "a": [
      "Zone 2: PA >= Pa > Pv; Zone 3: Pa > PA > Pv",
      "Zone 2: Pa > PA > Pv; Zone 3: Pa > Pv > PA",
      "Zone 2: Pa > Pv > PA; Zone 3: PA >= Pa > Pv",
      "Zone 2: Pv > Pa > PA; Zone 3: Pa > PA > Pv",
      "Zone 2: PA > Pv > Pa; Zone 3: Pv > Pa > PA"
    ],
    "c": 1,
    "r": "In West's lung zones: Zone 1 (apex, lowest flow) has PA >= Pa > Pv; Zone 2 (mid lung, intermittent flow) has Pa > PA > Pv; Zone 3 (base, continuous high flow) has Pa > Pv > PA."
  },
  {
    "cat": 1,
    "q": "A healthy 24-year-old medical student stands upright at rest. Which of West's pulmonary blood flow zones are physiologically present in his lungs?",
    "a": [
      "Zone 1 in the apices and Zone 2 in the bases",
      "Zone 1 in the apices, Zone 2 in the mid-lung, and Zone 3 in the bases",
      "Zone 2 in the apices and Zone 3 in all lower lung regions",
      "Zone 3 uniformly throughout both lungs from apex to base",
      "Zone 1 throughout the lungs during inspiration and Zone 3 during expiration"
    ],
    "c": 2,
    "r": "Normally, healthy upright lungs have only Zones 2 and 3 blood flow: Zone 2 (intermittent flow) in the apices and Zone 3 (continuous flow) in all the lower areas. Zone 1 occurs only under abnormal conditions (e.g., positive pressure ventilation or severe hemorrhage/hypotension)."
  },
  {
    "cat": 1,
    "q": "During transition from rest to heavy exercise, pulmonary vascular resistance falls markedly, preventing a large rise in pulmonary arterial pressure. Which two microvascular mechanisms at the lung base and throughout the lung mediate this fall in resistance?",
    "a": [
      "Arteriolar smooth muscle hypertrophy and collateral bronchial shunting",
      "Capillary recruitment and distension of pulmonary vessels",
      "Alveolar hypocapnic vasodilation and lymphatic valve opening",
      "Sympathetic beta-2 vasodilation and parasympatholytic blockade",
      "Closure of West Zone 3 vessels and expansion of West Zone 1"
    ],
    "c": 1,
    "r": "Higher vascular pressures (at the base of the upright lung and during increased cardiac output) promote recruitment of previously closed capillaries and distension of open pulmonary vessels, reducing vascular resistance and increasing blood flow."
  },
  {
    "cat": 1,
    "q": "Why is sub-toxic carbon monoxide (CO) selected as the test gas to measure the diffusing capacity of the lung (DLCO)?",
    "a": [
      "CO is strictly perfusion-limited and equilibrates with plasma in 0.05 seconds",
      "CO is diffusion-limited due to high hemoglobin affinity, keeping capillary PCO near zero",
      "CO is insoluble in the alveolar-capillary membrane and remains in dead space",
      "CO selectively binds to Type I pneumocytes without entering erythrocytes",
      "CO diffuses 20 times faster than carbon dioxide across aqueous membranes"
    ],
    "c": 1,
    "r": "Carbon monoxide (CO) is a diffusion-limited gas because it binds avidly to hemoglobin without building up significant partial pressure in the plasma; comparing predetermined inhaled CO with exhaled CO directly measures capillary diffusion across the respiratory membrane."
  },
  {
    "cat": 1,
    "q": "According to Fick's Law of Diffusion, which combination of changes will cause the greatest reduction in the rate of gas transfer across the alveolar-capillary membrane?",
    "a": [
      "Increased surface area, increased gas solubility, and decreased membrane thickness",
      "Decreased surface area, increased membrane thickness, and decreased pressure gradient",
      "Decreased molecular weight, increased surface area, and increased pressure gradient",
      "Increased diffusion coefficient, decreased membrane thickness, and high ΔP",
      "Increased alveolar ventilation, capillary recruitment, and thinner basal lamina"
    ],
    "c": 1,
    "r": "Fick's Law states that diffusion rate is directly proportional to surface area (A), diffusion coefficient (solubility / sqrt(MW)), and partial pressure gradient (P1 - P2), and inversely proportional to membrane thickness (T)."
  },
  {
    "cat": 1,
    "q": "Although carbon dioxide has a slightly larger molecular weight than oxygen, CO2 diffuses across the respiratory membrane approximately 20 times faster than O2. What property accounts for this difference?",
    "a": [
      "The alveolar-capillary partial pressure gradient is 20 times larger for CO2",
      "CO2 is roughly 20 to 24 times more soluble in the fluid of the respiratory membrane",
      "Active anion exchangers transport CO2 across Type I alveolar cells",
      "O2 diffusion is restricted exclusively to the thick blood-air barrier",
      "Hemoglobin binds CO2 with a 200-fold higher affinity than O2"
    ],
    "c": 1,
    "r": "CO2 has a much higher solubility in water and biological tissues than O2 (~20–24 times greater), giving CO2 a diffusion coefficient and diffusing capacity roughly 20 times higher than that of oxygen despite a smaller partial pressure gradient."
  },
  {
    "cat": 2,
    "q": "A healthy adult male breathes quietly at rest, finishes a normal tidal expiration, and then inhales maximally to total lung capacity. What is the name, formula, and normal value of the volume inhaled during this maneuver?",
    "a": [
      "Vital Capacity (VC) = IRV + VT + ERV; ~4600 mL",
      "Inspiratory Capacity (IC) = VT + IRV; ~3500 mL",
      "Functional Residual Capacity (FRC) = ERV + RV; ~2300 mL",
      "Inspiratory Reserve Volume (IRV) = IC - VT; ~3000 mL",
      "Total Lung Capacity (TLC) = VC + RV; ~5800 mL"
    ],
    "c": 1,
    "r": "Inspiratory Capacity (IC) is the maximum volume of air a person can breathe in starting from the normal resting expiratory level. It equals VT (500 mL) + IRV (3000 mL) = 3500 mL."
  },
  {
    "cat": 2,
    "q": "At the end of a normal quiet expiration, the inward elastic recoil of the lungs balances the outward recoil of the chest wall. What is the volume of air remaining in the lungs at this equilibrium point in a healthy adult male?",
    "a": [
      "Residual Volume (RV); ~1200 mL",
      "Expiratory Reserve Volume (ERV); ~1100 mL",
      "Functional Residual Capacity (FRC = ERV + RV); ~2300 mL",
      "Inspiratory Capacity (IC = VT + IRV); ~3500 mL",
      "Vital Capacity (VC = IRV + VT + ERV); ~4600 mL"
    ],
    "c": 2,
    "r": "Functional Residual Capacity (FRC) is the amount of air remaining in the lungs at the end of a normal tidal expiration. It equals ERV (1100 mL) + RV (1200 mL) = ~2300 mL."
  },
  {
    "cat": 2,
    "q": "When interpreting spirometric reference values for Vital Capacity (~4600 mL in healthy men), which of the following demographic and positional variations is physiologically accurate?",
    "a": [
      "Values are 20–25% higher in women than in men of equal height",
      "Values are higher in the supine position than in the standing position",
      "Values are 20–25% lower in women and higher when standing and in athletic individuals",
      "Values are higher in asthenic, sedentary individuals than in trained athletes",
      "Values are independent of age, body size, posture, and ethnic background"
    ],
    "c": 2,
    "r": "All pulmonary volumes and capacities are approximately 20–25% less in women than in men, greater in large and athletic people than in small and asthenic people, and Vital Capacity is higher during standing than lying down and higher in western populations."
  },
  {
    "cat": 2,
    "q": "A pulmonologist orders a helium dilution test for a patient. Which set of lung volumes and capacities CANNOT be measured by direct spirometry alone and requires this indirect technique?",
    "a": [
      "Tidal Volume (VT), Inspiratory Reserve Volume (IRV), and Inspiratory Capacity (IC)",
      "Expiratory Reserve Volume (ERV), Vital Capacity (VC), and Tidal Volume (VT)",
      "Residual Volume (RV), Functional Residual Capacity (FRC), and Total Lung Capacity (TLC)",
      "Forced Vital Capacity (FVC), FEV1, and Peak Expiratory Flow Rate (PEFR)",
      "Inspiratory Capacity (IC), Vital Capacity (VC), and Maximal Voluntary Ventilation (MVV)"
    ],
    "c": 2,
    "r": "Because Residual Volume (RV) remains in the lungs after maximal forced expiration, RV and any capacity that includes RV (FRC = ERV + RV and TLC = VC + RV) cannot be measured directly with a spirometer and require helium dilution."
  },
  {
    "cat": 2,
    "q": "At the end of a normal expiration, a patient is connected to a spirometer containing 3000 mL of gas (Vi_Spir) with an initial helium concentration (Ci_He) of 10%. After equilibration, the final helium concentration (Cf_He) is 6%, and the patient's measured ERV is 800 mL. What is the patient's Residual Volume (RV)?",
    "a": [
      "800 mL",
      "1200 mL",
      "1500 mL",
      "2000 mL",
      "2800 mL"
    ],
    "c": 1,
    "r": "First calculate FRC: FRC = [(Ci_He / Cf_He) - 1] × Vi_Spir = [(10 / 6) - 1] × 3000 = 0.667 × 3000 = 2000 mL. Since RV = FRC - ERV, RV = 2000 mL - 800 mL = 1200 mL."
  },
  {
    "cat": 2,
    "q": "A subject takes a single breath of 100% O2 and exhales while expired nitrogen concentration is plotted against expired volume (VE = 500 mL). On the nitrogen washout graph, the gray area (pre-alveolar dead space washout) is 30 units and the pink area (alveolar plateau) is 70 units. What is the anatomical dead space (VD)?",
    "a": [
      "100 mL",
      "150 mL",
      "214 mL",
      "300 mL",
      "350 mL"
    ],
    "c": 1,
    "r": "From the single-breath Nitrogen Washout formula: VD = (Gray area × VE) / (Pink area + Gray area) = (30 × 500 mL) / (70 + 30) = 15,000 / 100 = 150 mL."
  },
  {
    "cat": 2,
    "q": "An intubated patient has a tidal volume (VT) of 600 mL, an arterial PCO2 (PaCO2) of 50 mmHg, and a mixed expired PCO2 (PECO2) of 30 mmHg (inspired PiCO2 = 0). What is the patient's physiological dead space (VD)?",
    "a": [
      "150 mL",
      "180 mL",
      "200 mL",
      "240 mL",
      "360 mL"
    ],
    "c": 3,
    "r": "Using the Bohr equation for physiological dead space: VD = VT × [(PaCO2 - PECO2) / PaCO2] = 600 × [(50 - 30) / 50] = 600 × (20 / 50) = 600 × 0.4 = 240 mL."
  },
  {
    "cat": 2,
    "q": "In a healthy resting individual whose alveolar ventilation and perfusion are well matched, how does the volume of physiological dead space compare to the anatomical dead space?",
    "a": [
      "Physiological dead space is roughly twice the anatomical dead space",
      "Physiological dead space is equal to the anatomical dead space (~150 mL)",
      "Physiological dead space is zero, whereas anatomical dead space is 150 mL",
      "Anatomical dead space exceeds physiological dead space by 500 mL",
      "Physiological dead space equals the Functional Residual Capacity"
    ],
    "c": 1,
    "r": "Physiological dead space = anatomical dead space + alveolar dead space. In a healthy person, alveolar dead space is negligible (near zero), so physiological dead space equals anatomical dead space (~150 mL)."
  },
  {
    "cat": 2,
    "q": "During pulmonary function testing, a patient is instructed to breathe as deeply and rapidly as possible for 15 seconds, and the total expired volume is multiplied by 4 to express the result per minute. Which parameter is being measured, and what is its normal adult range?",
    "a": [
      "Peak Expiratory Flow Rate (PEFR); normal 400–600 L/min",
      "Maximal Voluntary Ventilation (MVV / MBC); normal 125–170 L/min",
      "Resting Minute Ventilation (VE); normal 6–8 L/min",
      "Forced Expiratory Flow 25–75%; normal 300–450 L/min",
      "Timed Vital Capacity (FVC); normal 4.6–5.8 L/min"
    ],
    "c": 1,
    "r": "Maximal Breathing Capacity (MBC) or Maximal Voluntary Ventilation (MVV) is recorded by breathing as deeply and rapidly as possible for 15 seconds and expressed for 1 minute; the normal value is 125–170 L/min."
  },
  {
    "cat": 2,
    "q": "A patient uses a hand-held meter that records the maximal airflow over 10 milliseconds at the start of a forced exhalation (normal 400–600 L/min). For which condition is this measurement clinically reliable versus unreliable?",
    "a": [
      "Reliable in small airway emphysema; unreliable in large airway asthma",
      "Reliable in large airway asthma; unreliable in small airway emphysema",
      "Reliable in interstitial pulmonary fibrosis; unreliable in tracheal stenosis",
      "Reliable in neuromuscular paralysis; unreliable in acute bronchospasm",
      "Reliable in panacinar emphysema; unreliable in chronic bronchitis"
    ],
    "c": 1,
    "r": "Peak Expiratory Flow Rate (PEFR, normal 400–600 L/min) is reduced and clinically useful in large airway obstruction (such as asthma), but is NOT reliable in isolated small airway obstruction (such as emphysema)."
  },
  {
    "cat": 2,
    "q": "A healthy 28-year-old man performs a Forced Vital Capacity (FVC) maneuver, exhaling his entire vital capacity in under 3 seconds. What are the normal cumulative percentages of FVC exhaled at 1, 2, and 3 seconds (FEV1, FEV2, FEV3)?",
    "a": [
      "55%, 75%, and 85%",
      "70%, 80%, and 90%",
      "83%, 90%, and 97%",
      "90%, 95%, and 100%",
      "65%, 83%, and 92%"
    ],
    "c": 2,
    "r": "In a normal Timed Vital Capacity (FVC) test, the FVC is exhaled in <3 seconds, with FEV1 = 83%, FEV2 = 90%, and FEV3 = 97% of FVC."
  },
  {
    "cat": 2,
    "q": "When examining a clinical Maximum Flow-Volume Loop as plotted in the PFT lecture, how are inspiration and expiration represented along the x-axis (volume) and y-axis (flow)?",
    "a": [
      "Inspiration plots above the x-axis moving right; expiration plots below moving left",
      "Inspiration plots below the x-axis moving left; expiration plots above moving right",
      "Both limbs plot above the x-axis, with time on the x-axis and volume on the y-axis",
      "Inspiration starts at Total Lung Capacity on the left and moves right toward Residual Volume",
      "Expiration starts at Residual Volume on the right and moves left toward Total Lung Capacity"
    ],
    "c": 1,
    "r": "On the standard Flow-Volume loop, the trace moves left during inhalation as lung volume increases toward TLC (with negative flow below the x-axis) and moves right during exhalation as volume decreases toward RV (with positive flow above the x-axis)."
  },
  {
    "cat": 2,
    "q": "On the descending expiratory limb of a normal flow-volume loop, three points are labeled MEF 75%, MEF 50%, and MEF 25%. What does MEF 75% represent?",
    "a": [
      "Instantaneous expiratory flow when 75% of the vital capacity has already been exhaled",
      "Instantaneous expiratory flow when 75% of the vital capacity remains to be exhaled",
      "Mean expiratory force generated during the first 75 milliseconds of exhalation",
      "Maximal inspiratory flow achieved at 75% of Total Lung Capacity",
      "Percentage of Residual Volume trapped at 75% of maximal expiratory pressure"
    ],
    "c": 1,
    "r": "After Peak Expiratory Flow (PEF), the expiratory limb declines through MEF 75%, MEF 50%, and MEF 25%, which represent the flow rates when 75%, 50%, and 25% of Vital Capacity remain in the lungs to be exhaled."
  },
  {
    "cat": 2,
    "q": "A 65-year-old chronic smoker undergoes pulmonary function testing. Which combination of spirometric values and flow-volume loop features confirms an obstructive defect?",
    "a": [
      "FEV1/FVC = 0.88, decreased RV and TLC, and a rightward-shifted witch-hat loop",
      "FEV1/FVC = 0.58, increased RV and TLC, and a leftward-shifted loop with a concave expiratory limb",
      "FEV1/FVC = 0.83, normal RV and TLC, and a linear descending expiratory limb",
      "FEV1/FVC = 0.92, increased FEF 25–75%, and a rightward-shifted loop",
      "FEV1/FVC = 0.62, decreased RV and FRC, and a convex expiratory limb"
    ],
    "c": 1,
    "r": "Obstructive lung disease produces an FEV1/FVC ratio <0.8, markedly reduced FEV1, increased RV, FRC, and TLC (air trapping/hyperinflation), a leftward shift of the flow-volume loop toward larger volumes, and a concave (scooped-out) expiratory curve."
  },
  {
    "cat": 2,
    "q": "On a forced expiratory spirogram (volume vs. time curve), a patient with severe COPD takes more than 6 seconds to exhale and shows 'notching' and flattening of the curve's slope. What mechanical event causes this finding?",
    "a": [
      "Reflex laryngospasm of the upper airway during inspiration",
      "Dynamic airway collapse and increased resistance during forced expiration",
      "Accelerated elastic recoil of fibrotic lung parenchyma",
      "Fatigue of the external intercostal muscles during inhalation",
      "Excessive surfactant secretion in the terminal bronchioles"
    ],
    "c": 1,
    "r": "In obstructive disease, positive intrathoracic pressure during forced expiration compresses small airways lacking cartilage, causing dynamic airway collapse, increased airway resistance, notching/flattening of the FEV1 slope, and prolonged expiration (>3 seconds)."
  },
  {
    "cat": 2,
    "q": "Both acute bronchial asthma and advanced emphysema produce a concave expiratory limb on the flow-volume loop. How does the underlying mechanism of the severe concave scoop in emphysema differ from that of acute asthma?",
    "a": [
      "Emphysema causes reversible smooth muscle spasm in large cartilaginous bronchi",
      "Emphysema destroys alveolar elastic recoil, causing small airway collapse during expiration",
      "Emphysema produces mucosal edema and mucus plugging confined to the trachea",
      "Emphysema increases radial traction on respiratory bronchioles, accelerating PEF",
      "Emphysema selectively flattens the inspiratory limb while sparing PEF"
    ],
    "c": 1,
    "r": "In acute asthma, reduced PEF and a concave curve result from reversible narrowing/bronchospasm of airways. In emphysema, markedly reduced PEF and a severe concave curve result from loss of alveolar elastic recoil (loss of radial traction) causing small airway collapse during expiration."
  },
  {
    "cat": 2,
    "q": "A 58-year-old woman with idiopathic pulmonary fibrosis undergoes flow-volume loop testing. Which morphological contour and positional shift on the volume axis will her loop demonstrate?",
    "a": [
      "Leftward shift toward 8 L with a deep concave expiratory scoop",
      "Rightward shift toward lower volumes with a tall, narrowed 'witch-hat' contour",
      "Symmetrical flattening of both inspiratory and expiratory limbs at normal lung volumes",
      "Leftward shift with doubled Vital Capacity and elevated Residual Volume",
      "Rightward shift with an FEV1/FVC ratio of 0.45 and prolonged expiratory time"
    ],
    "c": 1,
    "r": "Restrictive lung disease reduces TLC, FRC, RV, and VC, shifting the flow-volume loop to the right (toward lower lung volumes) and producing a narrowed, miniature 'witch-hat' shape with preserved or high FEV1/FVC ratio."
  },
  {
    "cat": 2,
    "q": "When comparing the lung volume subdivisions of a patient with severe COPD against a patient with severe idiopathic pulmonary fibrosis, which of the following parameters is decreased in BOTH patients?",
    "a": [
      "Total Lung Capacity (TLC)",
      "Functional Residual Capacity (FRC)",
      "Residual Volume (RV)",
      "Inspiratory Reserve Volume (IRV)",
      "RV/TLC ratio"
    ],
    "c": 3,
    "r": "In obstructive disease, TLC, FRC, and RV are increased due to air trapping, which encroaches upon and decreases IRV, ERV, IC, and VC. In restrictive disease, all lung volumes and capacities (including IRV, ERV, IC, VC, RV, FRC, and TLC) are decreased."
  },
  {
    "cat": 2,
    "q": "A 52-year-old man presents with progressive exertional dyspnea. Spirometry shows FVC = 54% of predicted, FEV1 = 51% of predicted, FEV1/FVC = 0.89, and TLC = 56% of predicted. Which diagnosis is most consistent with these findings?",
    "a": [
      "Centriacinar emphysema",
      "Chronic obstructive bronchitis",
      "Interstitial pulmonary fibrosis",
      "Acute extrinsic asthma",
      "Cystic fibrosis bronchiectasis"
    ],
    "c": 2,
    "r": "Proportionate reductions in both FEV1 and FVC yielding a normal or elevated FEV1/FVC ratio (0.89 >= 0.80) alongside a reduced Total Lung Capacity (56% predicted) are diagnostic of restrictive lung disease (e.g., pulmonary fibrosis)."
  },
  {
    "cat": 2,
    "q": "Which spirometric index measures the average flow rate over the middle half of a forced exhalation and serves as a sensitive indicator of small-to-medium airway obstruction?",
    "a": [
      "Peak Expiratory Flow Rate (PEFR)",
      "Maximal Voluntary Ventilation (MVV)",
      "Forced Expiratory Flow 25–75% (FEF 25–75%)",
      "Expiratory Reserve Volume (ERV)",
      "Inspiratory Capacity (IC)"
    ],
    "c": 2,
    "r": "FEF 25–75% measures the Forced Expiratory Flow over the middle 50% of the FVC and reflects the patency of medium and small airways, decreasing early in obstructive lung disease."
  },
  {
    "cat": 2,
    "q": "Patient A (a 65-year-old smoker with panacinar emphysema) and Patient B (a 62-year-old man with cryptogenic fibrosing alveolitis) both have a DLCO of 45% predicted. What are the respective mechanisms causing the low DLCO in each patient?",
    "a": [
      "Patient A: thickened alveolar basement membrane; Patient B: loss of capillary surface area",
      "Patient A: loss of alveolar-capillary surface area; Patient B: thickened alveolar-capillary barrier",
      "Patient A: carboxyhemoglobinemia; Patient B: pulmonary arteriovenous malformation",
      "Patient A: increased pulmonary capillary blood volume; Patient B: severe anemia",
      "Patient A: high anatomical dead space; Patient B: reversible bronchospasm"
    ],
    "c": 1,
    "r": "DLCO is reduced in both emphysema and pulmonary fibrosis, but via opposite variables in Fick's Law: emphysema destroys alveolar walls (reducing surface area A), whereas pulmonary fibrosis thickens the interstitium (increasing barrier thickness T)."
  },
  {
    "cat": 2,
    "q": "A 45-year-old patient undergoes Maximal Breathing Capacity (MBC / MVV) testing and achieves 65 L/min (normal 125–170 L/min). Which of the following conditions is a recognized cause of a reduced MBC?",
    "a": [
      "Aerobic endurance training in a tall athlete",
      "Myasthenia gravis or muscular dystrophy",
      "Isolated mild allergic rhinitis",
      "Living at sea level in a western population",
      "Standing upright during the spirometry maneuver"
    ],
    "c": 1,
    "r": "According to the PFT lecture, MBC/MVV is decreased in poor effort, neuromuscular diseases, obstructive and restrictive lung diseases, heart diseases, and obesity."
  },
  {
    "cat": 3,
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
    "cat": 3,
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
    "cat": 3,
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
    "cat": 3,
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
    "cat": 3,
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
    "cat": 3,
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
    "cat": 3,
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
    "cat": 3,
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
    "cat": 3,
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
    "cat": 3,
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
    "cat": 3,
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
    "cat": 3,
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
    "cat": 3,
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
    "cat": 3,
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
    "cat": 3,
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
    "cat": 3,
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
    "cat": 3,
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
    "cat": 3,
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
    "cat": 3,
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
    "cat": 3,
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
    "cat": 3,
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
    "cat": 3,
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
  },
  {
    "cat": 4,
    "q": "Which primary mechanical and volumetric abnormality defines all restrictive pulmonary diseases?",
    "a": [
      "Increased expiratory airway resistance with elevated Residual Volume",
      "Reduced expansion of lung parenchyma with decreased Total Lung Capacity",
      "Reversible bronchial smooth muscle hyperresponsiveness with normal TLC",
      "Isolated destruction of upper-lobe respiratory bronchioles",
      "Hypertrophy of bronchial submucosal glands with chronic sputum production"
    ],
    "c": 1,
    "r": "Restrictive lung disease is defined by reduced expansion of the lung parenchyma, decreased lung compliance, and a decreased Total Lung Capacity (TLC)."
  },
  {
    "cat": 4,
    "q": "In the pathology lecture on restrictive lung disease, the acronym 'PAINT' is used to remember the anatomical compartments that cause restriction. Which list correctly identifies all five components?",
    "a": [
      "Pulmonary artery, Airway, Infection, Neoplasia, and Trachea",
      "Pleural, Alveolar, Interstitial, Neuromuscular, and Thoracic cage",
      "Parenchymal, Allergic, Idiopathic, Necrotizing, and Thrombotic",
      "Pericardial, Asthmatic, Inflammatory, Neurogenic, and Traumatic",
      "Pneumothorax, Atelectasis, Infarction, Nodular, and Tuberculous"
    ],
    "c": 1,
    "r": "The PAINT mnemonic stands for Pleural, Alveolar, Interstitial, Neuromuscular, and Thoracic cage abnormalities."
  },
  {
    "cat": 4,
    "q": "A 17-year-old boy with severe thoracolumbar scoliosis and a 12-year-old boy with Duchenne muscular dystrophy both exhibit restrictive patterns on spirometry. Under the PAINT classification, into which respective categories do their conditions fall?",
    "a": [
      "Scoliosis: Pleural; Muscular dystrophy: Alveolar",
      "Scoliosis: Thoracic cage; Muscular dystrophy: Neuromuscular",
      "Scoliosis: Interstitial; Muscular dystrophy: Thoracic cage",
      "Scoliosis: Neuromuscular; Muscular dystrophy: Interstitial",
      "Scoliosis: Alveolar; Muscular dystrophy: Pleural"
    ],
    "c": 1,
    "r": "Scoliosis (and marked obesity) restricts chest wall expansion and falls under Thoracic cage abnormalities, while muscular dystrophy weakens the respiratory muscles and falls under Neuromuscular abnormalities."
  },
  {
    "cat": 4,
    "q": "A 71-year-old man with decompensated left ventricular heart failure undergoes pulmonary function testing, which reveals a reduced Total Lung Capacity and reduced Vital Capacity. Why does congestive cardiac failure produce restrictive mechanics?",
    "a": [
      "Left atrial enlargement compresses and paralyzes the bilateral phrenic nerves",
      "Pulmonary venous congestion and interstitial edema stiffen the lung parenchyma",
      "Chronic low cardiac output causes necrosis of tracheal hyaline cartilage",
      "Natriuretic peptides induce irreversible peribronchiolar collagen deposition",
      "Cardiomegaly converts the entire pulmonary circulation into West Zone 1"
    ],
    "c": 1,
    "r": "Congestive cardiac failure causes pulmonary venous congestion and interstitial/alveolar fluid accumulation, which reduces lung compliance (stiffens the lung) and restricts lung expansion."
  },
  {
    "cat": 4,
    "q": "When describing interstitial lung diseases such as idiopathic pulmonary fibrosis, how is the pulmonary 'interstitium' defined anatomically?",
    "a": [
      "The potential space between the parietal and visceral pleural membranes",
      "The connective tissue space between the alveolar epithelial and capillary endothelial basement membranes",
      "The conducting lumen extending from the terminal bronchiole to the alveolar duct",
      "The loose submucosal layer containing tubuloalveolar glands in the bronchi",
      "The fascial plane separating the internal and innermost intercostal muscles"
    ],
    "c": 1,
    "r": "The pulmonary interstitium is the connective tissue space situated between the alveolar epithelial basement membrane and the capillary endothelial basement membrane."
  },
  {
    "cat": 4,
    "q": "In the Restrictive Lung Disease lecture, the professor highlights an alternative clinical name for Idiopathic Pulmonary Fibrosis (IPF) and compares it to 'Fever of Unknown Origin (FUO)'. What is this synonymous term for IPF?",
    "a": [
      "Extrinsic allergic alveolitis",
      "Cryptogenic fibrosing alveolitis",
      "Obliterative bronchiolitis",
      "Centrilobular emphysema",
      "Desquamative alveolar proteinosis"
    ],
    "c": 1,
    "r": "On the Restrictive Lung Disease lecture slides, Idiopathic Pulmonary Fibrosis (IPF) is explicitly paired with its synonym 'Cryptogenic fibrosing alveolitis' (with the note: 'Think of cryptogenic fibrosing alveolitis as FUO!')."
  },
  {
    "cat": 4,
    "q": "A patient with advanced idiopathic pulmonary fibrosis complains of severe shortness of breath during minimal exertion. What is the primary mechanical limitation responsible for dyspnea in restrictive lung disease?",
    "a": [
      "Premature collapse of respiratory bronchioles during forced expiration",
      "Difficulty taking air into the lungs due to stiff, non-compliant parenchyma",
      "Obstruction of the mainstem bronchi by viscid mucopurulent plugs",
      "Progressive hyperinflation pushing the diaphragm flat at rest",
      "Loss of elastic recoil causing air trapping at the end of exhalation"
    ],
    "c": 1,
    "r": "Unlike obstructive disease (difficulty exhaling air out of the lungs), restrictive lung disease is characterized by difficulty taking air INTO the lungs (inspiration) due to reduced compliance (stiff lungs) or chest wall/neuromuscular resistance."
  },
  {
    "cat": 4,
    "q": "A 48-year-old man admitted with gram-negative urosepsis develops acute, severe refractory hypoxemia. Chest X-ray reveals diffuse bilateral fluffy infiltrates ('white-out'), and his lungs are described pathologically as 'waterlogged'. Which two major pathways can initiate this syndrome?",
    "a": [
      "Type I IgE hypersensitivity and Type IV delayed T-cell hypersensitivity",
      "Direct alveolar insults (e.g., inhalation) and indirect capillary insults (e.g., sepsis)",
      "Left-sided mitral valve stenosis and right-sided tricuspid regurgitation",
      "Bronchial mucous gland hypertrophy and goblet cell metaplasia",
      "Alpha-1-antitrypsin deficiency and centriacinar elastase release"
    ],
    "c": 1,
    "r": "Acute Respiratory Distress Syndrome (ARDS) presents with bilateral fluffy alveolar infiltrates ('white-out' / waterlogged lungs) and is initiated either by direct insults to the alveoli (e.g., toxic gas inhalation, aspiration) or indirect insults via the pulmonary capillaries (e.g., sepsis)."
  },
  {
    "cat": 4,
    "q": "A patient with ARDS dies 5 days after the onset of septic shock. Autopsy of the 'wet' lungs during this first phase (Days 4–7) will predominantly demonstrate which set of pathological features?",
    "a": [
      "Permanent honeycomb cysts, dense collagen scars, and a 'burnt lung' appearance",
      "Interstitial and alveolar edema, neutrophil influx, and increased cytokine release",
      "Extensive fibroblast proliferation, empyema, and obliterative intimal fibrosis",
      "Non-caseating epithelioid granulomas with multinucleated giant cells",
      "Uniform destruction of the acinus without inflammatory cell infiltration"
    ],
    "c": 1,
    "r": "The first phase of ARDS is the Exudative ('Wet') Phase (Days 4–7), which is characterized by interstitial and alveolar edema, neutrophil influx, and increased cytokine release ('wet lung')."
  },
  {
    "cat": 4,
    "q": "An ICU patient remains on mechanical ventilation 14 days into the course of ARDS. Which pathological phase is occurring at this timeframe (Days 7–21), and what are its defining features?",
    "a": [
      "Exudative ('Wet') Phase; pure transudative alveolar fluid accumulation",
      "Proliferative ('Filling Pus') Phase; fibroblast activation, pus/empyema, intimal/alveolar fibrosis, and high pneumothorax risk",
      "Fibrotic ('Hardening') Phase; acellular collagenous remodeling and 'burnt lung'",
      "Latent Resolution Phase; complete restoration of Type I pneumocytes",
      "Vascular Shunt Phase; isolated dilation of bronchial arteries"
    ],
    "c": 1,
    "r": "The second phase of ARDS is the Proliferative ('Filling Pus') Phase (Days 7–21), characterized by fibroblast activation, pus/empyema accumulation, intimal and alveolar fibrosis, and a high risk of pneumothorax."
  },
  {
    "cat": 4,
    "q": "During day 16 of mechanical ventilation for ARDS (proliferative phase), a patient suddenly develops hypotension, absent unilateral breath sounds, and a pneumothorax. Why are patients in this phase at markedly increased risk for pneumothorax?",
    "a": [
      "Excessive surfactant production causes spontaneous overdistension of alveoli",
      "Fibrotic, stiff, non-compliant, and cystic lung parenchyma ruptures easily under positive pressure",
      "Hypertrophied bronchial smooth muscle traps air selectively in the pleural cavity",
      "Loss of alpha-1-antitrypsin dissolves the parietal pleura",
      "Negative intrapleural pressure exceeds -60 mmHg during passive expiration"
    ],
    "c": 1,
    "r": "In the proliferative phase of ARDS (Days 7–21), ongoing alveolar fibrosis renders the lung parenchyma stiff, non-compliant, and cystic, making it highly susceptible to barotrauma and alveolar rupture (pneumothorax)."
  },
  {
    "cat": 4,
    "q": "A survivor of severe ARDS remains oxygen-dependent 4 weeks (>21 days) after initial presentation. What is the name of this third phase of ARDS, and what gross/histological changes characterize the lungs?",
    "a": [
      "Exudative Phase; 'waterlogged lung' filled with protein-poor transudate",
      "Fibrotic ('Hardening') Phase; diffuse pulmonary fibrosis, loss of alveolar architecture, and cystic remodeling ('burnt lung')",
      "Proliferative Phase; acute neutrophil chemotaxis and reversible interstitial edema",
      "Hepatization Phase; red-to-gray consolidation with complete architectural preservation",
      "Bronchiectatic Phase; dilation of cartilaginous airways with mucus plugging"
    ],
    "c": 1,
    "r": "The third (final) phase of ARDS occurs after 21 days (>21 days) and is termed the Fibrotic ('Hardening') Phase, characterized by diffuse pulmonary fibrosis, permanent loss of alveolar architecture, and emphysematous cystic remodeling ('burnt lung')."
  },
  {
    "cat": 4,
    "q": "Why does acute alveolar flooding during the exudative phase of ARDS produce severe arterial hypoxemia that is refractory to supplemental oxygen?",
    "a": [
      "Edema fluid converts all perfused lung bases into West Zone 1 dead space",
      "Fluid-filled alveoli block oxygen diffusion into perfused capillaries, creating a right-to-left intrapulmonary shunt",
      "Inflammatory cytokines oxidize hemoglobin iron into methemoglobin",
      "Alveolar fluid selectively impairs CO2 elimination while accelerating O2 uptake",
      "Pulmonary capillary thrombosis completely halts right ventricular cardiac output"
    ],
    "c": 1,
    "r": "In ARDS, proteinaceous edema fluid floods the alveoli and physically blocks oxygen from diffusing into the perfused pulmonary capillaries, creating a severe right-to-left intrapulmonary shunt (perfused but unventilated alveoli)."
  },
  {
    "cat": 4,
    "q": "A 42-year-old pigeon breeder presents with recurrent episodes of fever, cough, and dyspnea several hours after cleaning his bird loft. Lung biopsy shows interstitial mononuclear infiltrates and poorly formed non-caseating granulomas. Under the PAINT classification, how is this condition categorized?",
    "a": [
      "Pleural restriction (mesothelial plaque disease)",
      "Interstitial restriction (hypersensitivity pneumonitis / extrinsic allergic alveolitis)",
      "Neuromuscular restriction (phrenic nerve demyelination)",
      "Thoracic cage restriction (ankylosing spondylitis)",
      "Obstructive airway disease (extrinsic atopic asthma)"
    ],
    "c": 1,
    "r": "On the Restrictive Lung Disease lecture slide, Hypersensitivity pneumonitis / extrinsic allergic alveolitis is explicitly listed under the Interstitial category alongside pneumoconioses and cryptogenic fibrosing alveolitis (IPF)."
  },
  {
    "cat": 4,
    "q": "A 39-year-old African American woman presents with bilateral hilar lymphadenopathy, uveitis, erythema nodosum, and non-caseating granulomas on transbronchial biopsy. How will her pulmonary function test parameters compare to normal reference values?",
    "a": [
      "FEV1/FVC < 0.65, increased TLC, increased RV, and decreased DLCO",
      "Decreased FVC, decreased FEV1, normal or increased FEV1/FVC ratio, and decreased TLC",
      "Normal FVC, markedly decreased FEV1, increased FRC, and leftward-shifted flow-volume loop",
      "Increased FVC, increased TLC, increased DLCO, and concave expiratory flow-volume curve",
      "Isolated decrease in PEFR with normal TLC and normal RV"
    ],
    "c": 1,
    "r": "Sarcoidosis is a classic intrinsic interstitial restrictive lung disease. On PFTs, restrictive diseases show decreased FVC, proportionately decreased FEV1, a normal or increased FEV1/FVC ratio (>=0.80), decreased RV, FRC, and TLC, and a rightward-shifted narrowed flow-volume loop."
  }
];

// 14 Dedicated Gross Anatomy Clinical Vignettes
export const respiratoryGrossAnatomyQuestions: Question[] = [
  {
    "cat": 0,
    "q": "A 44-year-old woman undergoes total thyroidectomy for multinodular goiter. In the post-anesthesia care unit, she exhibits respiratory distress with high-pitched inspiratory stridor, and bedside fiberoptic laryngoscopy reveals that both vocal cords are completely motionless, fixed in a position slightly narrower than the neutral respiratory position. Which of the following injuries has occurred?",
    "a": [
      "Isolated bilateral transection of the external branch of the superior laryngeal nerve",
      "Complete bilateral transection of the recurrent laryngeal nerves",
      "Incomplete or progressive traction injury to the right recurrent laryngeal nerve alone",
      "Direct surgical transection of the internal branch of the superior laryngeal nerve",
      "Spasm of the cricothyroid muscle due to parathyroid devascularization"
    ],
    "c": 1,
    "r": "Complete injury of the recurrent laryngeal nerves leaves the vocal folds motionless in a position slightly narrower than the usual neutral respiratory position. They can neither adduct for phonation nor abduct for increased respiratory airflow, resulting in severe stridor (high-pitched, noisy respiration)."
  },
  {
    "cat": 0,
    "q": "A 52-year-old man undergoes parathyroid re-exploration. During surgical dissection near the inferior thyroid artery, the right recurrent laryngeal nerve is bruised by a retractor, suffering an incomplete (partial) traction lesion. According to the classical neurological principle detailed in the lecture, how does vocal fold motor impairment manifest in incomplete or progressive lesions?",
    "a": [
      "Adduction is lost first, whereas abduction is preserved until complete transection",
      "Vocal cord tensor function is lost while adduction and abduction remain unaffected",
      "Abduction is lost before adduction, and during recovery adduction returns before abduction",
      "Both cords hyperabduct into a wide paramedian position causing persistent aspiration",
      "The vocal fold remains permanently hyperadducted in the phonatory midline position"
    ],
    "c": 2,
    "r": "The lecture notes emphasize that in progressive lesions or incomplete injury of the recurrent laryngeal nerve, abduction of the vocal ligaments is lost before adduction; conversely, during subsequent clinical recovery, adduction returns before abduction."
  },
  {
    "cat": 0,
    "q": "A 38-year-old opera singer undergoes subtotal thyroidectomy. Following the procedure, she can speak comfortably during ordinary conversation but complains that she can no longer sing high notes and notes that her voice has become distinctly flat and monotonous. Which nerve and muscle pair was damaged during ligation of the superior thyroid artery?",
    "a": [
      "Internal laryngeal nerve and thyroarytenoid muscle",
      "External laryngeal nerve and cricothyroid muscle",
      "Recurrent laryngeal nerve and posterior cricoarytenoid muscle",
      "Internal laryngeal nerve and interarytenoid muscle",
      "External laryngeal nerve and lateral cricoarytenoid muscle"
    ],
    "c": 1,
    "r": "The external branch of the superior laryngeal nerve (external laryngeal nerve) travels alongside the superior thyroid artery and supplies only one intrinsic muscle: the cricothyroid (the primary tensor of the vocal folds). Injury paralyzes the cricothyroid, causing a monotonous voice and loss of pitch modulation."
  },
  {
    "cat": 0,
    "q": "An awake fiberoptic endotracheal intubation is planned for an adult male in the operating room. To anesthetize the superior laryngeal mucosa and abolish the cough reflex down to the level of the vocal cords (including the piriform fossa), a local anesthetic block is placed at the thyrohyoid membrane. Accidental injury to this specific sensory nerve would cause which clinical hazard?",
    "a": [
      "Permanent vocal cord abduction leading to immediate airway occlusion",
      "Loss of the protective cough mechanism, allowing foreign bodies to enter the larynx",
      "Loss of general somatic sensation over the posterior third of the tongue",
      "Motor paralysis of all intrinsic laryngeal muscles except the cricothyroid",
      "Paralysis of the middle and inferior pharyngeal constrictor muscles"
    ],
    "c": 1,
    "r": "The internal branch of the superior laryngeal nerve pierces the thyrohyoid membrane (accompanied by the superior laryngeal artery) and provides sensory innervation down to the vocal folds, including the piriform fossa. Injury causes anesthesia of the superior laryngeal mucosa, abolishing the protective reflex so foreign bodies can easily enter the larynx."
  },
  {
    "cat": 0,
    "q": "A 16-year-old high school wrestler receives a blunt blow to the anterior nasal dorsum, resulting in brisk arterial epistaxis from the anteroinferior portion of the nasal septum (Kiesselbach's area / Little's area). An anterior nasal pack is placed. Which set of five arteries forms the extensive anastomotic network at this site?",
    "a": [
      "Anterior ethmoidal, posterior ethmoidal, sphenopalatine, greater palatine, and superior labial (septal branch)",
      "Maxillary, facial, superficial temporal, ascending pharyngeal, and lingual arteries",
      "Infraorbital, posterior superior alveolar, descending palatine, dorsal nasal, and angular arteries",
      "Internal carotid, external carotid, middle meningeal, superior thyroid, and labial arteries",
      "Anterior cerebral, middle cerebral, ophthalmic, lacrimal, and supraorbital arteries"
    ],
    "c": 0,
    "r": "Kiesselbach's area (Little's area) on the anterior nasal septum is supplied by an anastomotic arterial plexus composed of five vessels: the anterior ethmoidal and posterior ethmoidal arteries (from the ophthalmic artery), the sphenopalatine and greater palatine arteries (from the maxillary artery), and the septal branch of the superior labial artery (from the facial artery)."
  },
  {
    "cat": 0,
    "q": "A 23-year-old man presents with high fever, bilateral periorbital edema, chemosis, and ophthalmoplegia 5 days after squeezing an infected furuncle in his nasal vestibule. Contrast MRI confirms septic cavernous sinus thrombosis. By which venous pathway did the infection spread posteriorly from the nasal cavity into the cavernous sinus?",
    "a": [
      "Inferior petrosal sinus draining directly into the internal jugular vein",
      "Ethmoidal veins draining via the superior ophthalmic vein into the cavernous sinus",
      "Greater palatine vein traversing the incisive canal into the pterygoid plexus",
      "Deep facial vein traversing the mandibular canal to the sigmoid sinus",
      "Sphenopalatine veins emptying into the superior sagittal sinus via foramen spinosum"
    ],
    "c": 1,
    "r": "Nasal venous drainage connects to the intracranial dural venous sinuses. The anterior and posterior ethmoidal veins drain into the superior ophthalmic vein, which empties directly into the cavernous sinus on either side of the hypophyseal fossa. (Anterior veins also drain into the facial vein, and an emissary vein may traverse the foramen cecum to the superior sagittal sinus)."
  },
  {
    "cat": 0,
    "q": "A 30-year-old woman presents with severe facial pressure over her cheeks, purulent nasal discharge, and toothache involving her upper molars. Coronal CT imaging demonstrates mucosal thickening and fluid retention within the maxillary sinus. Under endoscopic evaluation of the lateral nasal wall, into which specific anatomical structure does the maxillary sinus naturally drain?",
    "a": [
      "Spheno-ethmoidal recess directly above the superior concha",
      "Lateral wall of the superior meatus posterior to the ethmoidal bulla",
      "Semilunar hiatus within the middle meatus, inferior to the ethmoidal bulla",
      "Anterior region of the inferior meatus beneath the inferior concha",
      "Frontonasal duct in the ethmoidal infundibulum at the cribriform plate"
    ],
    "c": 2,
    "r": "The ostium of the maxillary sinus opens into the middle meatus within the floor of the semilunar hiatus (hiatus semilunaris), usually just inferior to the center of the ethmoidal bulla. The superior meatus receives posterior ethmoidal cells, the spheno-ethmoidal recess receives the sphenoidal sinus, and the inferior meatus receives the nasolacrimal duct."
  },
  {
    "cat": 0,
    "q": "A 32-year-old driver involved in a high-speed motor vehicle collision sustains blunt thoracic trauma. On physical examination, an isolated anterior segment of his right thoracic cage moves inward during spontaneous inspiration and pushes outward during expiration. Which of the following mechanical injuries defines this flail chest presentation?",
    "a": [
      "Unilateral costochondral separation of ribs 1 through 3 from the clavicle",
      "Multiple rib fractures involving at least two adjacent ribs fractured in two or more places",
      "Complete transverse fracture through the sternal angle of Louis without rib involvement",
      "Paradoxical spasm of the internal intercostal muscles along the midaxillary line",
      "Diaphragmatic rupture leading to herniation of the stomach into the thoracic cage"
    ],
    "c": 1,
    "r": "The lecture notes and illustrations highlight flail chest, which occurs when multiple rib fractures produce a free-floating paradoxical segment. During inspiration (negative intrathoracic pressure), the flail segment is sucked inward, and during expiration, it balloons outward."
  },
  {
    "cat": 0,
    "q": "A 4-year-old boy lying flat on his back in bed chokes while eating peanuts. Chest radiography and bronchoscopy are performed to retrieve the aspirated foreign body. Based on the bronchopulmonary segment anatomy emphasized in the lecture, where is an aspirated peanut most likely to lodge when aspirated in the SUPINE position?",
    "a": [
      "Right upper lobe apical segment",
      "Right middle lobe lateral segment",
      "Right lower lobe superior segment",
      "Left lower lobe posterior basal segment",
      "Left upper lobe lingular segment"
    ],
    "c": 2,
    "r": "The Lower Respiratory Tract lecture explicitly highlights peanut aspiration patterns based on body position: While supine: enters the superior segment of the right lower lobe. While lying on the right side: enters the right upper lobe. While upright: enters the right lower lobe (basal segments)."
  },
  {
    "cat": 0,
    "q": "A 68-year-old bedridden man with post-stroke dysphagia aspirates a piece of hard candy while resting in bed turned onto his right side. Computed tomography of the chest reveals bronchial obstruction. According to the aspiration guidelines in the lecture slides, which lobe is the most probable location of the foreign body?",
    "a": [
      "Left lower lobe",
      "Left upper lobe",
      "Right upper lobe",
      "Right middle lobe",
      "Right lower lobe (anterior basal segment)"
    ],
    "c": 2,
    "r": "The lecture specifically states that when aspirating a foreign body while lying on the right side, the object usually enters the right upper lobe."
  },
  {
    "cat": 0,
    "q": "During clinical evaluation of chest wall excursion in an athlete, a pulmonologist notes elevation of the sternum and an increase in the anterior-posterior (A-P) diameter of the thoracic cage during inspiration. Which ribs and muscle components drive this classic \"pump-handle\" motion?",
    "a": [
      "Ribs 11 and 12 via contraction of the innermost intercostal muscle slips",
      "Ribs 7 to 10 via contraction of the external intercostal muscles at the costotransverse joints",
      "Ribs 2 to 6 via contraction of the intercartilaginous part of the internal intercostals",
      "Costal cartilage flaring of ribs 8 to 10 widening the infrasternal angle",
      "Isolated contraction of the central tendon of the thoracoabdominal diaphragm"
    ],
    "c": 2,
    "r": "In the lower respiratory anatomy lecture, the \"pump-handle\" movement increases the A-P diameter through movement of the 2nd to 6th ribs (with the 1st rib fixed) driven by contraction of the intercartilaginous internal intercostals at the costovertebral joints, tilting the sternum up and forward at the manubriosternal joint. In contrast, the \"bucket-handle\" movement involves ribs 7–10 and external intercostals to increase the transverse diameter."
  },
  {
    "cat": 0,
    "q": "A resident prepares to perform a needle thoracocentesis to drain an exudative pleural effusion. To avoid injuring the intercostal vein, artery, and nerve (VAN), the needle must be placed correctly within the intercostal space. Where does the intercostal neurovascular bundle lie within the thoracic wall?",
    "a": [
      "Along the superior border of the rib, superficial to the external intercostal muscle",
      "Along the inferior border of the rib (costal groove), between internal and innermost intercostals",
      "Directly within the center of the intercostal space, deep to the endothoracic fascia",
      "Along the superior border of the lower rib, between the external and internal intercostals",
      "Directly on the anterior surface of the costal cartilage, superficial to the pectoralis major"
    ],
    "c": 1,
    "r": "The intercostal vein, artery, and nerve run together in the costal groove along the inferior border of each rib, situated between the internal intercostal and innermost intercostal muscle layers. To prevent neurovascular laceration, thoracocentesis needles are introduced immediately above the superior margin of the lower rib."
  },
  {
    "cat": 0,
    "q": "A thoracic surgeon reviews an anatomical specimen of the left lung mediastinal surface. Which set of structural impressions is uniquely found carved into the medial surface of the left lung?",
    "a": [
      "Azygos vein arch, superior vena cava, and inferior vena cava",
      "Arch of the aorta, descending thoracic aorta, and cardiac impression",
      "Right atrium, superior vena cava, and right phrenic nerve groove",
      "Intermediate bronchus, horizontal fissure, and azygos arch",
      "Hepatic dome impression, inferior vena cava, and right mainstem bronchus"
    ],
    "c": 1,
    "r": "The left lung mediastinal surface features distinct impressions for the arch of the aorta, descending aorta, left pulmonary artery, left main bronchus, pulmonary veins, and the large cardiac impression (formed by the left ventricle), alongside the pulmonary ligament. The azygos vein, SVC, and IVC leave impressions on the right lung."
  },
  {
    "cat": 0,
    "q": "A patient suspected of having a pleural effusion is positioned for diagnostic thoracocentesis. According to the thoracic surface anatomy landmarks provided in the lecture, what are the normal inferior reflection levels of the lungs compared to the parietal pleura along the midclavicular, midaxillary, and posterior lines, respectively?",
    "a": [
      "Midclavicular: ribs 4 vs 6; Midaxillary: ribs 6 vs 8; Posterior: ribs 8 vs 10",
      "Midclavicular: ribs 6 vs 8; Midaxillary: ribs 8 vs 10; Posterior: ribs 10 vs 12",
      "Midclavicular: ribs 8 vs 8; Midaxillary: ribs 10 vs 10; Posterior: ribs 12 vs 12",
      "Midclavicular: ribs 6 vs 6; Midaxillary: ribs 8 vs 8; Posterior: ribs 10 vs 10",
      "Midclavicular: ribs 8 vs 10; Midaxillary: ribs 10 vs 12; Posterior: ribs 12 vs 14"
    ],
    "c": 1,
    "r": "The surface anatomy diagram indicates the lungs reach: rib 6 at the midclavicular line, rib 8 at the midaxillary line, and rib 10 posteriorly. The parietal pleura extends approximately two ribs lower: rib 8 at the midclavicular line, rib 10 at the midaxillary line, and rib 12 posteriorly, creating the costodiaphragmatic recess."
  }
];

// 25 Dedicated Respiratory Pharmacology Questions
export const respiratoryPharmaQuestions: Question[] = [
  {
    "cat": 5,
    "q": "A 32-year-old woman with moderate persistent asthma requires daily use of an inhaled corticosteroid (ICS). Which of the following best describes the primary anti-inflammatory mechanism of action of ICS in asthma?",
    "a": [
      "Direct and immediate relaxation of pre-contracted bronchial smooth muscle cells",
      "Inhibition of inflammatory cell influx (macrophages, eosinophils) and mediator release",
      "Competitive antagonism of cysteinyl leukotriene-1 (LTD4) cell-surface receptors",
      "Irreversible blockade of postganglionic parasympathetic muscarinic M3 receptors",
      "Direct stabilization of sensitized mast cell membranes preventing degranulation"
    ],
    "c": 1,
    "r": "Inhaled corticosteroids are not direct bronchodilators; their therapeutic effect is mediated by inhibiting the influx of inflammatory cells (macrophages, eosinophils, and lymphocytes) and suppressing inflammatory mediator transcription."
  },
  {
    "cat": 5,
    "q": "A 28-year-old patient who recently initiated high-dose inhaled budesonide reports hoarseness of voice and develops white, curd-like plaques over the tongue. Which strategy is recommended to reduce these adverse effects?",
    "a": [
      "Replacing the inhaled steroid with oral theophylline maintenance",
      "Using a spacer device with the inhaler and rinsing the mouth after use",
      "Taking an oral broad-spectrum antibiotic concurrently with each puff",
      "Doubling the inhalation frequency while halving the delivered drug dose",
      "Taking the inhaler actuation exclusively immediately following meals"
    ],
    "c": 1,
    "r": "Local adverse effects of inhaled corticosteroids—such as dysphonia and oral candidiasis (thrush)—occur due to oropharyngeal drug deposition and can be minimized by using a spacer device and rinsing the mouth after inhalation."
  },
  {
    "cat": 5,
    "q": "A 24-year-old runner uses an inhaled formulation of cromolyn sodium (cromoglicate) before exercising. Which pharmacological characteristic correctly describes this drug?",
    "a": [
      "It rapidly relieves acute severe bronchospasm during sudden attacks",
      "It is insoluble, poorly absorbed from the GIT, and acts prophylactically",
      "It functions as an antagonist at cysteinyl leukotriene receptor sites",
      "It causes extensive systemic hepatic microsomal enzyme inhibition",
      "It possesses high oral bioavailability with extensive renal clearance"
    ],
    "c": 1,
    "r": "Cromoglicate (cromolyn) is poorly absorbed from the gastrointestinal tract and must be given by inhalation. It stabilizes mast cells prophylactically but is ineffective in acute attacks because it does not reverse active bronchospasm."
  },
  {
    "cat": 5,
    "q": "A 34-year-old woman with nasal polyps and chronic rhinosinusitis develops severe bronchospasm after ingesting aspirin. Which class of maintenance agents is most specifically effective for this condition?",
    "a": [
      "Leukotriene receptor antagonists (e.g., montelukast)",
      "Inhaled short-acting beta-2 agonists monotherapy",
      "Short-acting antimuscarinic agents (e.g., ipratropium)",
      "Centrally acting opioid cough suppressants",
      "Over-the-counter expectorants (e.g., guaifenesin)"
    ],
    "c": 0,
    "r": "Leukotriene receptor antagonists (LTRAs) such as montelukast competitively block LTD4 receptors and are particularly effective in patients where leukotrienes play a central pathophysiological role, notably aspirin- and NSAID-induced asthma."
  },
  {
    "cat": 5,
    "q": "Which of the following anti-asthma medications is an orally administered leukotriene receptor antagonist dosed once daily?",
    "a": [
      "Zafirlukast",
      "Salmeterol",
      "Montelukast",
      "Aminophylline",
      "Ipratropium"
    ],
    "c": 2,
    "r": "Montelukast (Singulair) is administered orally once daily, whereas zafirlukast is typically dosed twice daily."
  },
  {
    "cat": 5,
    "q": "A 20-year-old man with severe, poorly controlled persistent allergic asthma exhibits high serum total IgE levels despite adherence to high-dose ICS and LABA. Subcutaneous omalizumab is prescribed. What is its mechanism of action?",
    "a": [
      "Competitive antagonism of cysteinyl leukotriene 1 receptors",
      "Selective binding to circulating IgE to prevent allergic mediator release",
      "Blockade of interleukin-5 receptors expressed on circulating eosinophils",
      "Selective inhibition of bronchial cyclic GMP-specific phosphodiesterase",
      "Direct opening of large-conductance calcium-activated potassium channels"
    ],
    "c": 1,
    "r": "Omalizumab is a subcutaneously administered monoclonal antibody that binds to free circulating IgE, preventing it from binding to mast cells and basophils and thereby limiting the release of allergic mediators."
  },
  {
    "cat": 5,
    "q": "A 19-year-old man uses inhaled albuterol (salbutamol) for acute symptom relief. Which set of pharmacodynamic properties and adverse effects is characteristic of this short-acting agent?",
    "a": [
      "Onset within 15–30 minutes, lasts 12 hours; produces bradycardia and hypouricemia",
      "Onset within minutes, lasts 4–6 hours; produces tremor, tachycardia, and hypokalemia",
      "Onset within 1–2 hours, lasts 24 hours; causes marked urinary retention and hyperkalemia",
      "Onset within 30 minutes, lasts 8 hours; produces dose-dependent metabolic acidosis",
      "Onset within seconds, lasts 1 hour; produces reflex bradycardia and sedation"
    ],
    "c": 1,
    "r": "Salbutamol acts within a few minutes, reaches maximum bronchodilation at 30 minutes, and lasts 4–6 hours. Its common adverse effects include fine skeletal muscle tremors, tachycardia, hyperglycemia, and hypokalemia (due to intracellular potassium shift)."
  },
  {
    "cat": 5,
    "q": "Why is salmeterol contraindicated as a rescue monotherapy during an acute, severe asthmatic bronchospasm?",
    "a": [
      "It induces immediate mast cell degranulation upon airway contact",
      "It has a slow onset of action (15–30 minutes) and is meant for prophylaxis",
      "It undergoes instantaneous first-pass hepatic degradation when inhaled",
      "It directly stimulates vagal M3 receptors, provoking reflex bronchospasm",
      "It lacks selectivity and triggers life-threatening alpha-1 vasoconstriction"
    ],
    "c": 1,
    "r": "Salmeterol is a long-acting beta-2 agonist (LABA) with a slow onset of action (15–30 minutes) and prolonged duration (12 hours). It is used for maintenance and nocturnal asthma prophylaxis, not acute attacks."
  },
  {
    "cat": 5,
    "q": "A 48-year-old hospitalized patient receives intravenous aminophylline for an acute severe asthma attack. Which statement regarding the pharmacokinetics and toxicities of this drug is correct?",
    "a": [
      "It has a very broad therapeutic margin and is eliminated entirely by renal filtration",
      "It is metabolized in the liver (t½ ~8 hours) with a narrow index; high doses cause arrhythmias and convulsions",
      "It is an insoluble powder that cannot be administered parenterally",
      "It acts as a potent selective agonist at cardiac M2 muscarinic receptors",
      "It undergoes extensive ester hydrolysis in the bloodstream within minutes"
    ],
    "c": 1,
    "r": "Theophylline (and IV aminophylline) is metabolized by the liver with an elimination half-life of approximately 8 hours. Because of its narrow therapeutic window, elevated serum concentrations can provoke nausea, vomiting, cardiac arrhythmias, and convulsions."
  },
  {
    "cat": 5,
    "q": "Inhaled antimuscarinic bronchodilators such as ipratropium and oxitropium exert their clinical benefit in airway disease primarily by which mechanism?",
    "a": [
      "Stimulating cyclic AMP synthesis in bronchial vascular smooth muscle",
      "Blocking vagus nerve-mediated M3 receptor bronchospasm and mucus hypersecretion",
      "Inactivating the central respiratory chemoreceptors in the medulla oblongata",
      "Competitively blocking beta-2 receptors to prevent reflex tachyarrhythmias",
      "Dissolving disulfide cross-links within luminal mucoprotein networks"
    ],
    "c": 1,
    "r": "Synthetic atropine derivatives like ipratropium and oxitropium block vagally mediated M3 acetylcholine receptors in bronchial smooth muscle, preventing bronchospasm and hypersecretion."
  },
  {
    "cat": 5,
    "q": "A 45-year-old man initiating multidrug therapy for active pulmonary tuberculosis has a genetic polymorphism causing slow drug acetylation. Which drug's metabolism and toxicity profile is directly affected?",
    "a": [
      "Rifampicin",
      "Isoniazid",
      "Ethambutol",
      "Pyrazinamide",
      "Streptomycin"
    ],
    "c": 1,
    "r": "Isoniazid (INH) is metabolized by hepatic N-acetyltransferase 2 (NAT2). Genetically determined slow acetylators clear the drug more slowly, predisposing them to prolonged action and higher toxicity (e.g., peripheral neuropathy)."
  },
  {
    "cat": 5,
    "q": "A patient taking isoniazid for active tuberculosis develops symmetric tingling, numbness, and burning pain in both feet. Which agent should always be co-administered prophylactically to prevent this adverse effect?",
    "a": [
      "Folic acid (vitamin B9)",
      "Pyridoxine (vitamin B6)",
      "Cyanocobalamin (vitamin B12)",
      "Ascorbic acid (vitamin C)",
      "Thiamine (vitamin B1)"
    ],
    "c": 1,
    "r": "Peripheral neuropathy is the most common adverse effect of isoniazid and is prevented by prophylactic co-administration of pyridoxine (vitamin B6, 25–50 mg daily)."
  },
  {
    "cat": 5,
    "q": "A 29-year-old woman with active pulmonary tuberculosis begins standard anti-TB therapy. Two weeks later, she notes that her urine, sweat, and tears have become bright orange-red. Which drug is responsible?",
    "a": [
      "Isoniazid",
      "Pyrazinamide",
      "Rifampicin",
      "Ethambutol",
      "Streptomycin"
    ],
    "c": 2,
    "r": "Rifampicin is known for harmlessly discoloring body fluids (urine, sweat, tears, sputum) a red-orange hue. Patients must be warned in advance."
  },
  {
    "cat": 5,
    "q": "A patient maintained on chronic warfarin anticoagulation starts treatment for tuberculosis with a regimen including rifampin. What pharmacokinetic drug interaction must the physician anticipate?",
    "a": [
      "Inhibition of renal tubular warfarin excretion causing bleeding",
      "Hepatic microsomal enzyme induction decreasing warfarin efficacy and lowering INR",
      "Displacement of warfarin from albumin binding sites causing hemorrhage",
      "Direct chelation of warfarin in the gut lumen preventing oral absorption",
      "Inhibition of hepatic cytochromes leading to elevated warfarin blood levels"
    ],
    "c": 1,
    "r": "Rifampicin is a potent hepatic microsomal enzyme inducer that accelerates the hepatic clearance of co-administered agents such as warfarin, oral contraceptives, and azole antifungals, reducing their clinical efficacy."
  },
  {
    "cat": 5,
    "q": "Why is rifampicin strictly avoided as a monotherapy in the management of active tuberculosis?",
    "a": [
      "It lacks bactericidal activity against extracellular bacilli",
      "Resistant mycobacterial strains emerge rapidly when it is used alone",
      "It causes severe nephrotoxicity unless combined with an aminoglycoside",
      "It fails to penetrate the blood-brain barrier into the cerebrospinal fluid",
      "It must be converted into an active molecule by ethambutol"
    ],
    "c": 1,
    "r": "Because resistant bacterial mutants rapidly emerge during single-agent treatment, rifampicin is never administered as monotherapy for active tuberculosis."
  },
  {
    "cat": 5,
    "q": "Which first-line anti-tuberculosis agent exerts bactericidal activity against intracellular dividing bacilli specifically during the first 2–3 months of therapy and frequently causes hyperuricemia?",
    "a": [
      "Pyrazinamide",
      "Streptomycin",
      "Ethambutol",
      "Isoniazid",
      "Rifampicin"
    ],
    "c": 0,
    "r": "Pyrazinamide is bactericidal against intracellular organisms during the initial 2–3 months of therapy. Its characteristic adverse effects include hyperuricemia, joint aches, hepatitis, and rarely acute gout."
  },
  {
    "cat": 5,
    "q": "A 50-year-old man undergoing anti-TB therapy presents with blurred vision and difficulty distinguishing red and green colors. Which drug must be promptly discontinued?",
    "a": [
      "Streptomycin",
      "Isoniazid",
      "Rifampin",
      "Ethambutol",
      "Pyrazinamide"
    ],
    "c": 3,
    "r": "The primary adverse effect of ethambutol is optic (retrobulbar) neuritis, manifesting as reduced visual acuity, central scotomas, and loss of red-green color discrimination. Monthly visual testing is recommended."
  },
  {
    "cat": 5,
    "q": "Which first-line anti-tuberculosis agent is an aminoglycoside that must be administered parenterally by intramuscular (IM) injection and carries major risks of ototoxicity and nephrotoxicity?",
    "a": [
      "Streptomycin",
      "Capreomycin",
      "Ethambutol",
      "Cycloserine",
      "Amikacin"
    ],
    "c": 0,
    "r": "Streptomycin is a bactericidal aminoglycoside that inhibits bacterial protein synthesis, is given by IM injection, and carries significant ototoxic and nephrotoxic risks."
  },
  {
    "cat": 5,
    "q": "A 3-year-old child presents with fever and exudative tonsillitis caused by Streptococcus pyogenes (group A beta-hemolytic). To prevent subsequent acute rheumatic fever, penicillin therapy must be continued for what minimum duration?",
    "a": [
      "Exactly 24 hours",
      "3 consecutive days",
      "5 consecutive days",
      "7 consecutive days",
      "10 consecutive days"
    ],
    "c": 4,
    "r": "In follicular tonsillitis/pharyngitis caused by Streptococcus pyogenes, antibiotic therapy must be maintained for a full 10-day course specifically to eradicate the pathogen and prevent the development of acute rheumatic fever."
  },
  {
    "cat": 5,
    "q": "A 22-year-old university student is diagnosed with atypical pneumonia characterized by a dry hacking cough and patchy bilateral infiltrates. Which class of antimicrobial agents represents the first-line treatment of choice?",
    "a": [
      "Macrolides (e.g., azithromycin)",
      "Aminopenicillins (e.g., ampicillin)",
      "First-generation cephalosporins (e.g., cephalexin)",
      "Carbapenems (e.g., imipenem-cilastatin)",
      "Natural penicillins (e.g., benzylpenicillin)"
    ],
    "c": 0,
    "r": "Atypical pneumonia (commonly caused by Mycoplasma pneumoniae or Chlamydia) lacks a typical peptidoglycan bacterial cell wall, rendering beta-lactams ineffective. Macrolides (such as azithromycin), tetracyclines (doxycycline), or respiratory fluoroquinolones are the drugs of choice."
  },
  {
    "cat": 5,
    "q": "A 38-year-old HIV-positive patient with a CD4 count below 200/μL presents with exertional dyspnea, dry cough, and bilateral perihilar infiltrates caused by Pneumocystis jirovecii (carinii). What is the first-line therapeutic agent?",
    "a": [
      "Oral amoxicillin-clavulanic acid",
      "Co-trimoxazole (trimethoprim-sulfamethoxazole)",
      "Intravenous vancomycin monotherapy",
      "Inhaled tobramycin solution",
      "Oral metronidazole maintenance"
    ],
    "c": 1,
    "r": "Co-trimoxazole (TMP-SMX), administered orally or intravenously, is the treatment of choice for Pneumocystis pneumonia in immunocompromised individuals."
  },
  {
    "cat": 5,
    "q": "Why are opioid cough suppressants such as codeine and methadone strictly contraindicated in patients with asthma and chronic obstructive pulmonary disease (COPD)?",
    "a": [
      "They induce acute crystal-induced tubulopathy and renal failure",
      "They provoke bronchospasm, depress respiration, and cause thick sputum retention",
      "They trigger hepatic cytochrome P450 enzymes, reducing bronchodilator levels",
      "They accelerate bronchial mucociliary clearance to excessively high rates",
      "They selectively block pulmonary beta-2 adrenergic receptors"
    ],
    "c": 1,
    "r": "Opioids are contraindicated in COPD and asthma because they suppress the central respiratory drive, can provoke bronchospasm, and cause thickening and retention of sputum, which impairs airway clearance."
  },
  {
    "cat": 5,
    "q": "A 62-year-old patient with inoperable advanced bronchogenic carcinoma suffers from an exhausting, severe, intractable cough. Which long-acting synthetic opioid with a half-life of ~24 hours is specifically indicated?",
    "a": [
      "Methadone",
      "Guaifenesin",
      "Dextromethorphan",
      "Ambroxol",
      "Pholcodine"
    ],
    "c": 0,
    "r": "Methadone is a synthetic opioid with actions similar to morphine but with a prolonged duration of action of approximately 24 hours. It is specifically highlighted for managing severe, intractable cough in patients with advanced lung cancer."
  },
  {
    "cat": 5,
    "q": "A 56-year-old patient with bronchiectasis and thick, tenacious bronchial secretions is prescribed carbocysteine. By which biochemical mechanism does this mucolytic agent reduce sputum viscosity?",
    "a": [
      "Cleaving disulfide bonds between mucoprotein chains to liquefy secretions",
      "Stimulating vagal efferent pathways to increase watery serous secretions",
      "Suppressing the medullary cough reflex center to reduce mechanical shearing",
      "Coating the mucosal lining to prevent irritation of sensory cough receptors",
      "Enhancing the systemic synthesis of pulmonary surfactant by Type II pneumocytes"
    ],
    "c": 0,
    "r": "Respiratory mucus consists of water and glycoproteins cross-linked by disulfide bonds. Carbocysteine opens (cleaves) these disulfide bonds, reducing mucus viscosity and thickness to facilitate expectoration."
  },
  {
    "cat": 5,
    "q": "Which FDA-approved expectorant drug acts by increasing the volume of bronchial secretions and reducing mucus viscosity to promote productive expulsion from the respiratory tract?",
    "a": [
      "Guaifenesin",
      "Codeine",
      "Benzonatate",
      "Dextromethorphan",
      "Pholcodine"
    ],
    "c": 0,
    "r": "Guaifenesin is an FDA-approved expectorant that increases the volume and reduces the viscosity of bronchial secretions, promoting effective productive clearance."
  }
];

// Combined 139 High-Yield Questions
export const respiratoryTblQuestions: Question[] = [
  ...respiratoryTblCoreQuestions,
  ...respiratoryGrossAnatomyQuestions,
  ...respiratoryPharmaQuestions,
];
