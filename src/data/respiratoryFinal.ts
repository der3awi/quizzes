import { Question } from "./types";

// Categories:
// 0: Airway Anatomy & Defense
// 1: Mechanics & Gas Exchange
// 2: PFTs & Acid-Base
// 3: Obstructive & Interstitial
// 4: Vascular, Infection & ICU

export const respiratoryFinalCategories = [
  'Airway Anatomy & Defense',
  'Mechanics & Gas Exchange',
  'PFTs & Acid-Base',
  'Obstructive & Interstitial',
  'Vascular, Infection & ICU'
];

export const respiratoryFinalCoreQuestions: Question[] = [
  {
    cat: 0,
    q: "A 4-year-old child accidentally aspirates a small plastic bead while running. Bronchoscopic extraction is planned. Due to the anatomical geometry of the tracheobronchial tree, in which bronchus is the foreign body most likely lodged, and why?",
    a: [
      "Left main bronchus, because it branches at a sharper horizontal angle",
      "Right main bronchus, because it is wider, shorter, and runs more vertically",
      "Right middle lobe bronchus, because of its superior angulation from the bronchus intermedius",
      "Left superior lobar bronchus, because cardiac pulsation draws aspirated particles toward the left apex",
      "Equal probability between right and left main bronchi in pediatric patients under 6 years"
    ],
    c: 1,
    r: "The right main bronchus is wider, shorter (~2.5 cm vs 5 cm), and more vertical than the left main bronchus, making it the preferential pathway for aspirated foreign bodies."
  },
  {
    cat: 0,
    q: "A patient undergoes surgical resection of a squamous cell carcinoma involving the right lung hilum. During the dissection, the surgeon identifies the relationships of structures at the right lung hilum. Which of the following anatomical orientations accurately describes the right pulmonary hilum from superior to inferior?",
    a: [
      "Pulmonary artery, eparterial bronchus, pulmonary veins",
      "Eparterial bronchus, pulmonary artery, hyparterial bronchus, inferior pulmonary vein",
      "Superior pulmonary vein, pulmonary artery, main bronchus, lymph nodes",
      "Pulmonary artery, hyparterial bronchus, eparterial bronchus, inferior pulmonary vein",
      "Main bronchus, superior pulmonary vein, inferior pulmonary vein, pulmonary artery"
    ],
    c: 1,
    r: "On the right side, the eparterial bronchus arises above the pulmonary artery; thus from superior to inferior the hilum displays: eparterial bronchus, pulmonary artery, hyparterial bronchus, and inferior pulmonary vein."
  },
  {
    cat: 0,
    q: "A 32-year-old male presents with recurrent sino-pulmonary infections and situs inversus totalis. Genetic testing confirms a mutation in DNAH5 encoding an axonemal dynein heavy chain (Kartagener syndrome). Which cellular defense mechanism in the respiratory tree is directly paralyzed by this defect?",
    a: [
      "Surfactant recycling and re-uptake by alveolar type II pneumocytes",
      "Coordinated metachronal ciliary beat frequency clearing the mucociliary escalator",
      "Secretory IgA dimerization and transport across bronchial epithelium",
      "Alveolar macrophage phagocytosis and lysosomal acidification",
      "Club cell (Clara cell) production of uteroglobin and surfactant apoproteins"
    ],
    c: 1,
    r: "Dynein arms generate the sliding force between peripheral doublet microtubules in respiratory cilia (9+2 arrangement). Mutations cause primary ciliary dyskinesia, abolishing the mucociliary escalator."
  },
  {
    cat: 1,
    q: "A 24-year-old medical student breathes normally at rest. At the end of a quiet, unforced tidal expiration (Functional Residual Capacity, FRC), which of the following mechanical conditions accurately describes the respiratory system?",
    a: [
      "Intrapleural pressure is positive (+4 cm H2O) relative to atmospheric pressure",
      "Transpulmonary pressure is zero because alveolar pressure equals intrapleural pressure",
      "Inward elastic recoil of the lungs is exactly balanced by the outward spring-like recoil of the chest wall",
      "Alveolar pressure reaches its lowest negative nadir during the respiratory cycle",
      "Airway resistance peaks due to dynamic radial traction collapse of terminal bronchioles"
    ],
    c: 2,
    r: "At FRC, the inward collapsing elastic recoil of the lungs is precisely equal and opposite to the outward expanding spring recoil of the thoracic cage. Net respiratory system recoil is zero and alveolar pressure equals atmospheric (0 cm H2O)."
  },
  {
    cat: 1,
    q: "A premature infant born at 28 weeks gestation exhibits severe tachypnea, nasal flaring, and intercostal retractions. Grunting respirations are heard. Based on the Law of Laplace (P = 2T / r), why are small alveoli in surfactant-deficient lungs prone to collapse into adjacent larger alveoli?",
    a: [
      "Small alveoli have lower surface tension, creating an outward pressure gradient",
      "For a constant surface tension (T), smaller radius (r) creates higher collapsing pressure (P)",
      "Surfactant molecules repel water dipoles only when the alveolus expands above functional capacity",
      "Larger alveoli possess thicker basement membranes that physically compress smaller neighbor units",
      "Interdependence of alveolar walls prevents microatelectasis when surface tension increases"
    ],
    c: 1,
    r: "By Laplace's law for spherical bubbles, P = 2T/r. Without pulmonary surfactant (dipalmitoylphosphatidylcholine), surface tension T remains high and constant; therefore smaller radius r generates much higher collapsing pressure P, driving gas into larger alveoli and causing diffuse microatelectasis."
  },
  {
    cat: 1,
    q: "A 55-year-old male with severe emphysema undergoes physiological testing. Which of the following changes in static lung compliance and resting Functional Residual Capacity (FRC) would be expected in this patient?",
    a: [
      "Decreased compliance; decreased FRC",
      "Decreased compliance; increased FRC",
      "Increased compliance; decreased FRC",
      "Increased compliance; increased FRC",
      "Normal compliance; decreased FRC"
    ],
    c: 3,
    r: "Destruction of alveolar elastance in emphysema increases lung compliance (the lung is more easily distended but fails to recoil). Because inward lung recoil is weakened, the chest wall expands outward to a new, higher resting equilibrium point, markedly increasing FRC."
  },
  {
    cat: 2,
    q: "An arterial blood gas (ABG) drawn on room air at sea level reveals: pH 7.24, PaCO2 64 mmHg, PaO2 58 mmHg, HCO3- 26 mEq/L. Which primary acid-base disturbance and compensatory state is present?",
    a: [
      "Acute uncompensated respiratory acidosis",
      "Chronic compensated respiratory acidosis",
      "Mixed metabolic and respiratory acidosis",
      "Acute respiratory alkalosis with renal compensation",
      "Normal anion gap metabolic acidosis with respiratory compensation"
    ],
    c: 0,
    r: "The pH < 7.35 with elevated PaCO2 indicates respiratory acidosis. In acute respiratory acidosis, for every 10 mmHg elevation of PaCO2 above 40, HCO3- increases by ~1 mEq/L (expected HCO3- = 24 + [2.4 x 1] = ~26.4). Since HCO3- is 26, this represents an acute, uncompensated respiratory acidosis (e.g., acute hypoventilation / opioid toxicity / neuromuscular crisis)."
  },
  {
    cat: 2,
    q: "A 68-year-old retired boilermaker presents with progressive exertional dyspnea. Pulmonary function testing demonstrates: FEV1/FVC ratio of 0.84 (normal > 0.70), FVC 54% of predicted, Total Lung Capacity (TLC) 58% of predicted, and DLCO 45% of predicted. These findings are most characteristic of which pathophysiological process?",
    a: [
      "Extrapulmonary restrictive disease (e.g., severe kyphoscoliosis)",
      "Intrinsic parenchymal restrictive pulmonary disease (e.g., asbestosis / idiopathic pulmonary fibrosis)",
      "Severe chronic obstructive pulmonary disease (GOLD Stage IV)",
      "Isolated asthma with complete bronchodilator reversibility",
      "Chronic pulmonary thromboembolic disease without parenchymal involvement"
    ],
    c: 1,
    r: "A preserved or increased FEV1/FVC ratio (>0.70) with reduced TLC and FVC confirms a restrictive ventilatory defect. A concomitantly reduced DLCO (<80%) distinguishes intrinsic parenchymal restriction (fibrosis, asbestosis, silicosis) from chest wall / neuromuscular extrapulmonary restriction (where DLCO remains normal)."
  },
  {
    cat: 2,
    q: "During cardiopulmonary exercise testing, a patient's diffusing capacity of the lung for carbon monoxide (DLCO) increases from 25 mL/min/mmHg at rest to 48 mL/min/mmHg at peak workload. What physiological mechanism accounts for this recruitment during heavy exercise?",
    a: [
      "Thickening of the alveolar-capillary blood-gas barrier",
      "Decreased cardiac output slowing red blood cell transit time through the capillaries",
      "Capillary distension and recruitment of previously under-perfused apical pulmonary capillaries",
      "Shift of the hemoglobin-oxygen dissociation curve to the left due to alkalosis",
      "Increased functional dead space expanding gas mixing time"
    ],
    c: 2,
    r: "During exercise, elevated pulmonary artery pressure and cardiac output recruit previously closed apical capillary beds and distend perfused capillaries (Zone 1 to Zone 2/3 transition). This markedly expands the functional surface area available for gas diffusion, doubling DLCO."
  },
  {
    cat: 3,
    q: "A 48-year-old male with a 30-pack-year smoking history complains of a chronic morning cough productive of copious clear-to-white sputum for the past 3 consecutive years, lasting at least 4 months each year. Histopathological examination of his bronchial biopsy would most characteristically show:",
    a: [
      "Non-caseating granulomas surrounded by multinucleated Langhans giant cells",
      "Extensive subepithelial smooth muscle hyperplasia with Charcot-Leyden crystals",
      "Reid index > 0.50 due to hypertrophy and hyperplasia of submucosal mucus-secreting glands",
      "Panacinar alveolar septal destruction centered predominantly in the lower lung lobes",
      "Diffuse alveolar damage with hyaline membranes lining dilated alveolar ducts"
    ],
    c: 2,
    r: "Chronic bronchitis is defined clinically as a productive cough for >= 3 consecutive months in >= 2 consecutive years. Pathologically, the Reid index (ratio of bronchial submucosal gland thickness to total bronchial wall thickness) increases from normal (<0.4) to >0.5."
  },
  {
    cat: 3,
    q: "A 21-year-old collegiate athlete experiences acute shortness of breath and wheezing 10 minutes into cold-weather track practice. Inhaled albuterol promptly relieves his symptoms. Which pharmacological and cellular event mediated this therapeutic response?",
    a: [
      "Inhibition of muscarinic M3 receptors causing intracellular inositol trisphosphate (IP3) depletion",
      "Stimulation of beta-2 adrenergic receptors coupling to Gs, increasing cAMP and activating protein kinase A (PKA)",
      "Direct degradation of leukotriene C4, D4, and E4 in the bronchial smooth muscle membrane",
      "Antagonism of adenosine A2B receptors preventing histamine degranulation",
      "Upregulation of endothelin-1 clearance by neutral endopeptidase"
    ],
    c: 1,
    r: "Albuterol is a selective beta-2 adrenergic agonist. Gs protein activation stimulates adenylyl cyclase, raising intracellular cAMP. Protein kinase A phosphorylates and inactivates myosin light-chain kinase (MLCK) and facilitates Ca2+ efflux, producing rapid bronchodilation."
  },
  {
    cat: 3,
    q: "A 62-year-old woman presents with progressive exertional dyspnea and persistent dry cough. High-resolution computed tomography (HRCT) of the chest reveals peripheral, subpleural reticular opacities with traction bronchiectasis and honeycombing predominantly in the bilateral basilar lung fields. Which histological diagnosis corresponds to this radiographic UIP pattern?",
    a: [
      "Idiopathic Pulmonary Fibrosis (Usual Interstitial Pneumonia)",
      "Hypersensitivity pneumonitis with centrilobular ground-glass nodules",
      "Cryptogenic organizing pneumonia (BOOP)",
      "Desquamative interstitial pneumonia (DIP) with pigmented macrophages",
      "Pulmonary alveolar proteinosis with PAS-positive lipoproteinaceous material"
    ],
    c: 0,
    r: "The characteristic HRCT pattern of subpleural basilar honeycombing, reticular opacities, and traction bronchiectasis without atypical features defines Usual Interstitial Pneumonia (UIP), the pathognomonic hallmark of Idiopathic Pulmonary Fibrosis (IPF)."
  },
  {
    cat: 4,
    q: "A 64-year-old female develops acute right pleuritic chest pain, dyspnea, and hemoptysis on postoperative day 4 following a total hip arthroplasty. CT pulmonary angiography confirms an occlusive saddle pulmonary thromboembolism. What hemodynamic consequence is the primary cause of immediate death in massive pulmonary embolism?",
    a: [
      "Acute left ventricular free-wall rupture from ischemic necrosis",
      "Acute right ventricular failure and cardiogenic shock due to severe afterload mismatch",
      "Massive bronchial artery hemorrhage into the pleural cavity",
      "Bronchospasm-induced asphyxiation from systemic leukotriene release",
      "Left atrial myxoma embolization occluding the mitral valve orifice"
    ],
    c: 1,
    r: "Sudden occlusion of >50% of the pulmonary arterial bed abruptly elevates right ventricular afterload. The thin-walled right ventricle dilates, shifts the interventricular septum leftward (impeding LV filling), and causes acute RV ischemia, failure, and cardiogenic shock."
  },
  {
    cat: 4,
    q: "A 38-year-old male with severe acute necrotizing pancreatitis develops acute respiratory distress within 48 hours of admission. His PaO2/FiO2 ratio is 140 on invasive mechanical ventilation with 10 cm H2O PEEP. Chest radiograph demonstrates diffuse bilateral alveolar infiltrates with no cardiomegaly. Pulmonary capillary wedge pressure (PCWP) is 12 mmHg. What is the initiating pathophysiological event in this condition (ARDS)?",
    a: [
      "Retrograde hydrostatic fluid transudation due to elevated left ventricular end-diastolic pressure",
      "Neutrophil-mediated endothelial and alveolar epithelial injury resulting in non-cardiogenic protein-rich exudative edema",
      "Diffuse microvascular thrombosis caused by hereditary antithrombin III deficiency",
      "Direct aspiration of gastric acid into the distal terminal bronchioles",
      "Autoimmune destruction of pulmonary capillary basement membrane type IV collagen"
    ],
    c: 1,
    r: "ARDS is non-cardiogenic pulmonary edema (PCWP <= 18 mmHg, PaO2/FiO2 <= 300) initiated by systemic inflammation (pancreatitis, sepsis, trauma). Activated neutrophils release proteases and ROS, disrupting alveolar-capillary membranes and filling alveoli with protein-rich exudate and hyaline membranes."
  },
  {
    cat: 4,
    q: "A 70-year-old nursing home resident presents with high fever, productive cough with rust-colored sputum, and rigors. Physical examination reveals bronchial breath sounds and dullness to percussion over the right middle lobe. Gram stain of the sputum demonstrates lancet-shaped Gram-positive diplococci. What is the primary virulence factor responsible for the pathogenicity of this organism (Streptococcus pneumoniae)?",
    a: [
      "Exotoxin A inhibiting protein synthesis via elongation factor-2 ADP-ribosylation",
      "Antiphagocytic polysaccharide capsule",
      "Filamentous hemagglutinin mediating tracheal ciliary adherence",
      "Outer membrane lipooligosaccharide triggering endotoxic shock",
      "Lecithinase (alpha-toxin) disrupting endothelial cell membranes"
    ],
    c: 1,
    r: "Streptococcus pneumoniae relies primarily on its polysaccharide capsule, which inhibits complement C3b deposition and prevents opsonophagocytosis by host alveolar macrophages and neutrophils."
  },

  // Expansion Practice Slots / Template Question Bank
  {
    cat: 0,
    q: "Which embryonic pharyngeal pouch and foregut diverticulum derivative gives rise to the epithelial lining of the larynx, trachea, bronchi, and alveoli during human organogenesis?",
    a: [
      "Second pharyngeal pouch endoderm",
      "Respiratory diverticulum (laryngotracheal groove) originating from ventral foregut endoderm",
      "Neural crest ectoderm migrating from the fourth rhombomere",
      "Splanchnic mesoderm forming the pulmonary vascular plexuses",
      "Somatic lateral plate mesoderm giving rise to the visceral pleura"
    ],
    c: 1,
    r: "The respiratory diverticulum appears as an outgrowth from the ventral wall of the foregut endoderm around the 4th week. Its endoderm forms the epithelial lining and glands of the larynx, trachea, bronchi, and alveoli."
  },
  {
    cat: 1,
    q: "In an upright standing subject, how do the ventilation-to-perfusion ratio (V/Q), alveolar ventilation, and blood flow compare between the lung apex (Zone 1) and base (Zone 3)?",
    a: [
      "Both ventilation and perfusion are highest at the apex; V/Q is lowest at the apex",
      "Both ventilation and perfusion are highest at the base; however, blood flow increases more steeply, making V/Q highest at the apex (~3.0) and lowest at the base (~0.6)",
      "Perfusion is equal across all zones, while ventilation is preferentially directed toward Zone 1",
      "V/Q is identical throughout all lung zones due to active hypoxic vasoconstriction",
      "Apex blood flow exceeds basal flow due to negative intrapleural pressures at the thoracic inlet"
    ],
    c: 1,
    r: "Due to gravity, both ventilation and perfusion increase from apex to base. However, perfusion increases much more rapidly than ventilation down the lung; consequently, V/Q is highest at the apex (~3.0) and lowest at the base (~0.6)."
  },
  {
    cat: 2,
    q: "A patient with suspected carbon monoxide poisoning is brought to the emergency department. Pulse oximetry reads 98% on room air, but arterial blood co-oximetry reveals a carboxyhemoglobin level of 34%. How does carbon monoxide affect the oxygen-hemoglobin dissociation curve and total arterial oxygen content (CaO2)?",
    a: [
      "Shifts curve to the right; maintains normal CaO2",
      "Shifts curve to the left and flattens plateau; decreases CaO2 without changing PaO2",
      "Shifts curve to the right; markedly decreases PaO2 and increases methemoglobin",
      "Has no effect on hemoglobin affinity; directly dissolves in plasma reducing PaO2",
      "Shifts curve downward without changing oxygen affinity of remaining unoccupied heme groups"
    ],
    c: 1,
    r: "CO binds hemoglobin with ~240x greater affinity than O2, displacing O2 and decreasing oxygen-carrying capacity (CaO2). Furthermore, binding alters hemoglobin cooperativity, shifting the curve to the left and impeding oxygen release to peripheral tissues."
  },
  {
    cat: 3,
    q: "A 45-year-old male nonsmoker presents with exertional dyspnea and early-onset emphysema. Serum protein electrophoresis shows marked reduction in the alpha-1 globulin band. Genotype confirms homozygous PiZZ mutation. Which mechanism leads to both pulmonary panacinar emphysema and hepatic cirrhosis in this disorder?",
    a: [
      "Uninhibited neutrophil elastase degrades alveolar elastin, while misfolded mutant alpha-1 antitrypsin polymerizes within hepatocytes",
      "Excess collagenase activity in pulmonary septa combined with copper deposition in liver parenchymal cells",
      "Excessive hepatic synthesis of antiproteases triggering cytotoxic immune response in biliary ducts",
      "Overactive pulmonary matrix metalloproteinases induced by tobacco smoke aldehydes",
      "Defective lysosomal storage of glycogen in type II pneumocytes and Kupffer cells"
    ],
    c: 0,
    r: "Alpha-1 antitrypsin deficiency (PiZZ) produces a mutant protein that polymerizes and accumulates in endoplasmic reticulum of hepatocytes (PAS-positive diastase-resistant globules, leading to cirrhosis), while uninhibited neutrophil elastase in the lungs digests elastic tissue, causing panacinar emphysema."
  },
  {
    cat: 4,
    q: "A 52-year-old female presents with bilateral hilar lymphadenopathy, erythema nodosum, and blurred vision (anterior uveitis). Serum calcium is elevated at 11.4 mg/dL. What enzymatic activity inside non-caseating granulomas is responsible for hypercalcemia in this disease (sarcoidosis)?",
    a: [
      "1-alpha-hydroxylase producing excess active 1,25-dihydroxycholecalciferol (calcitriol)",
      "25-hydroxylase overproducing calcidiol in hepatic sinusoids",
      "Parathyroid hormone-related peptide (PTHrP) cleavage by macrophage elastase",
      "Osteoclast alkaline phosphatase activating RANKL receptors directly",
      "Calcitonin degradation by epithelioid histiocytes in pulmonary lymph nodes"
    ],
    c: 0,
    r: "Activated alveolar macrophages within sarcoid non-caseating granulomas constitutively express 1-alpha-hydroxylase independent of PTH regulation. This converts 25-hydroxyvitamin D to active 1,25-(OH)2D (calcitriol), boosting intestinal calcium absorption and causing hypercalcemia/hypercalciuria."
  }
];

export const respiratoryFinalPastQuestions: Question[] = [
  {
    cat: 0,
    q: "[PAST RECALL 2025] During a percutaneous tracheostomy performed between the 2nd and 3rd tracheal rings, which vascular structure is most at risk of torrential hemorrhage if an anatomical variation is present in the pretracheal space?",
    a: [
      "Superior thyroid artery anterior branch",
      "Thyroidea ima artery originating from the brachiocephalic trunk or aortic arch",
      "Internal thoracic artery perforator",
      "Ascending cervical artery",
      "Transverse cervical vein"
    ],
    c: 1,
    r: "The thyroidea ima artery is present in ~3-10% of individuals, arising from the brachiocephalic artery or aortic arch and ascending in midline pretracheal fascia to the thyroid isthmus. It is a critical risk during midline emergency airways."
  },
  {
    cat: 1,
    q: "[PAST RECALL 2025] A patient at an altitude of 4,000 meters experiences hypoxemia and hyperventilates. The alveolar gas equation is PAO2 = (Patm - PH2O) * FiO2 - (PaCO2 / R). If barometric pressure is 460 mmHg, water vapor pressure is 47 mmHg, PaCO2 is 24 mmHg, and R = 0.8 on room air (FiO2 0.21), what is the calculated alveolar PO2 (PAO2)?",
    a: [
      "42 mmHg",
      "57 mmHg",
      "71 mmHg",
      "86 mmHg",
      "102 mmHg"
    ],
    c: 1,
    r: "PAO2 = (460 - 47) * 0.21 - (24 / 0.8) = 413 * 0.21 - 30 = 86.73 - 30 = 56.73 mmHg (~57 mmHg)."
  },
  {
    cat: 2,
    q: "[PAST RECALL 2024] A 50-year-old male presents with acute dyspnea. Spirometry demonstrates: FEV1 62% of predicted, FVC 85% of predicted, and FEV1/FVC ratio 0.58. Following inhalation of 400 mcg of albuterol, repeat spirometry shows an increase in FEV1 of 240 mL and 14% over baseline. How is this response classified according to ATS/ERS criteria?",
    a: [
      "Negative bronchodilator responsiveness",
      "Positive bronchodilator reversibility confirming significant reversible airflow obstruction",
      "Fixed irreversible airflow limitation characteristic of advanced silicosis",
      "Submaximal effort requiring repeating plethysmography",
      "Pure restrictive impairment requiring diffusion study"
    ],
    c: 1,
    r: "A positive bronchodilator response is defined as an increase in FEV1 or FVC of >12% and at least 200 mL compared to pre-bronchodilator values. This patient demonstrated +14% and +240 mL, confirming reversibility (hallmark of asthma)."
  },
  {
    cat: 3,
    q: "[PAST RECALL 2024] A 35-year-old male presents with recurrent episodes of hemoptysis, glomerulonephritis with hematuria, and iron deficiency anemia. Renal biopsy confirms linear IgG deposition along the glomerular basement membrane. What autoantigen is targeted in this disorder (Goodpasture syndrome)?",
    a: [
      "Non-collagenous domain 1 (NC1) of alpha-3 chain of type IV collagen",
      "Neutrophil myeloperoxidase (MPO-ANCA)",
      "Proteinase 3 (PR3-ANCA)",
      "Double-stranded DNA and Smith antigen",
      "Extracellular domain of desmoglein-3"
    ],
    c: 0,
    r: "Goodpasture syndrome (anti-GBM disease) is mediated by pathogenic autoantibodies directed against the non-collagenous domain (NC1) of the alpha-3 chain of type IV collagen present in both pulmonary alveolar and renal glomerular basement membranes."
  },
  {
    cat: 4,
    q: "[PAST RECALL 2023] A 60-year-old male chronic smoker presents with hoarseness of voice, right pupil miosis, partial ptosis of the right upper eyelid, and right facial anhidrosis (Horner syndrome). Chest CT identifies an apical lung mass invading the lower trunk of the brachial plexus and cervical sympathetic ganglion. What is the clinical eponym for this neoplasm?",
    a: [
      "Pancoast tumor (Superior Pulmonary Sulcus tumor)",
      "Hamartoma with chondroid differentiation",
      "Carcinoid tumor producing Cushing syndrome",
      "Mesothelioma of the diaphragmatic reflection",
      "Solitary fibrous tumor of the pleura"
    ],
    c: 0,
    r: "A Pancoast tumor is a bronchogenic carcinoma (usually squamous or adenocarcinoma) arising at the apex of the lung in the superior sulcus. It invades the cervical sympathetic chain (causing Horner syndrome) and lower brachial plexus roots C8-T1 (causing ulnar pain/atrophy)."
  },
  {
    cat: 4,
    q: "[PAST RECALL 2023] A 44-year-old male with human immunodeficiency virus (HIV) infection and CD4+ T-cell count of 110 cells/uL presents with non-productive cough, low-grade fever, and marked exertional desaturation. Chest X-ray reveals bilateral perihilar ground-glass opacities. Induced sputum silver methenamine stain reveals disc-shaped, crushed-ping-pong-ball cysts. What is the treatment of choice?",
    a: [
      "Trimethoprim-sulfamethoxazole (TMP-SMX) plus adjunctive corticosteroids if PaO2 < 70 mmHg",
      "Amphotericin B deoxycholate alone",
      "Levofloxacin combined with piperacillin-tazobactam",
      "Ganciclovir followed by foscarnet maintenance",
      "Inhaled pentamidine monotherapy without steroids"
    ],
    c: 0,
    r: "Pneumocystis jirovecii pneumonia (PCP) in immunocompromised patients (CD4 < 200) is treated first-line with high-dose TMP-SMX. Adjunctive systemic corticosteroids (prednisone) are indicated if arterial PO2 on room air is <70 mmHg or A-a gradient >=35 mmHg to prevent deterioration from lysis of organisms."
  }
];
