import { Question } from "./types";

// Categories for Respiratory Final Examination Simulation:
// 0: Anatomy, Embryology & Congenital
// 1: Mechanics, Volumes & PFTs
// 2: Gas Exchange, ABGs & Environment
// 3: Pathology, Infections & Pharm

export const respiratoryFinalCategories = [
  "Anatomy, Embryology & Congenital",
  "Mechanics, Volumes & PFTs",
  "Gas Exchange, ABGs & Environment",
  "Pathology, Infections & Pharm",
];

// 100 USMLE & IFOM Calibrated Board Questions
export const respiratoryFinalCoreQuestions: Question[] = [
  {
    "cat": 3,
    "q": "A 4-month-old male infant is brought to the pediatric clinic due to chronic failure to thrive, persistent productive cough, and greasy, foul-smelling stools. Laboratory evaluation reveals exocrine pancreatic insufficiency with a fecal elastase concentration of 65 mcg/g (normal >200 mcg/g). Genetic analysis confirms a homozygous F508del mutation in the CFTR gene on chromosome 7.<span class='q-stem-bold'>Which of the following cellular transport abnormalities in the respiratory epithelium directly accounts for the dehydration of the airway surface liquid and formation of hyperviscous mucus in this infant?</span>",
    "a": [
      "Impaired chloride secretion with compensatory downregulation of epithelial sodium channels",
      "Decreased chloride ion secretion coupled with unregulated hyperactivation of epithelial sodium channels",
      "Accelerated secretion of bicarbonate ions promoting excessive osmotic luminal water reabsorption",
      "Excessive apical extrusion of potassium ions causing secondary osmotic transudation into the submucosa",
      "Primary defect in ciliary dynein arms preventing active clearance of normally hydrated secretions"
    ],
    "c": 1,
    "r": "In healthy airway epithelium, the CFTR channel secretes chloride and tonically downregulates/inhibits the epithelial sodium channel (ENaC). In cystic fibrosis, mutated CFTR fails to secrete chloride and loses its inhibitory regulation over ENaC, leading to hyperactivated ENaC channels that excessively reabsorb sodium and water from the airway lumen."
  },
  {
    "cat": 3,
    "q": "A 6-week-old female infant is evaluated following an abnormal newborn screening test demonstrating elevated immunoreactive trypsinogen (IRT). The infant was delivered at 39 weeks of gestation, currently weighs 4.4 kg, and has been feeding well without vomiting or respiratory symptoms. A quantitative pilocarpine iontophoresis sweat test is performed on both forearms.<span class='q-stem-bold'>According to international consensus guidelines taught in the curriculum, which of the following sweat chloride concentrations is unequivocally diagnostic of cystic fibrosis?</span>",
    "a": [
      "A sweat chloride concentration greater than or equal to 30 mmol/L",
      "A sweat chloride concentration greater than or equal to 45 mmol/L",
      "A sweat chloride concentration greater than or equal to 60 mmol/L",
      "A sweat chloride concentration greater than or equal to 75 mmol/L",
      "A sweat chloride concentration greater than or equal to 90 mmol/L"
    ],
    "c": 2,
    "r": "The quantitative pilocarpine iontophoresis sweat chloride test is the gold standard for CF diagnosis. Results >= 60 mmol/L are diagnostic of CF; 30-59 mmol/L is intermediate/borderline; and < 30 mmol/L makes CF unlikely."
  },
  {
    "cat": 1,
    "q": "A 52-year-old male with progressive exertional dyspnea is evaluated in the pulmonary clinic. Helium dilution testing reveals a residual volume (RV) of 1,200 mL and an expiratory reserve volume (ERV) of 1,100 mL. Standard spirometry reveals an inspiratory capacity (IC) of 3,500 mL.<span class='q-stem-bold'>What is this patient's calculated Total Lung Capacity (TLC)?</span>",
    "a": [
      "4,600 mL",
      "4,700 mL",
      "5,800 mL",
      "6,900 mL",
      "3,500 mL"
    ],
    "c": 2,
    "r": "Total Lung Capacity (TLC) = Vital Capacity (VC) + Residual Volume (RV). Vital capacity = IC + ERV = 3,500 + 1,100 = 4,600 mL. TLC = 4,600 + 1,200 = 5,800 mL."
  },
  {
    "cat": 3,
    "q": "A 61-year-old male with a 45 pack-year smoking history presents with worsening shortness of breath and chronic productive cough. Physical examination reveals an increased anteroposterior chest diameter ('barrel chest'), hyperresonance to percussion, and distant heart sounds. Spirometry confirms severe airflow limitation. Microscopic examination of lung parenchyma demonstrates destruction of alveolar septa predominantly centered around the respiratory bronchioles in the upper lung lobes, with relative sparing of distal alveoli.<span class='q-stem-bold'>Which of the following is the most likely diagnosis and underlying pathological distribution?</span>",
    "a": [
      "Centriacinar emphysema, predominantly affecting the upper lung zones associated with cigarette smoke.",
      "Panacinar emphysema, predominantly affecting the lower lung zones associated with alpha-1-antitrypsin deficiency.",
      "Distal acinar emphysema, predominantly affecting the subpleural margins associated with spontaneous pneumothorax.",
      "Chronic bronchitis, predominantly characterized by marked hypertrophy of bronchial smooth muscle and mucus glands.",
      "Idiopathic pulmonary fibrosis, predominantly characterized by fibroblastic foci and peripheral honeycombing."
    ],
    "c": 0,
    "r": "Emphysema in cigarette smokers is predominantly centriacinar (centrilobular) emphysema, which primarily affects the respiratory bronchioles of the upper lobes."
  },
  {
    "cat": 3,
    "q": "A medical student observes a professor discussing pulmonary pathology. The professor asks: 'If emphysema is fundamentally a disease characterized by the loss and destruction of alveolar walls, why does it manifest functionally as an obstructive airways disorder with prolonged expiration and air trapping?'<span class='q-stem-bold'>Which of the following best explains the precise pathophysiological mechanism of expiratory obstruction in emphysema?</span>",
    "a": [
      "Loss of alveolar radial traction and elastic recoil causes premature dynamic collapse of small airways during expiration.",
      "Excessive goblet cell hyperplasia in large bronchi causes mechanical lumen obstruction with thick mucus plugs.",
      "Severe hypertrophy of peribronchial smooth muscle leads to irreversible tonic bronchospasm.",
      "Extensive peri-bronchiolar fibrosis rigidly constricts bronchiolar lumens during both phases of respiration.",
      "Hypersecretion of surfactant creates excessive airway wall surface tension that collapses terminal bronchioles."
    ],
    "c": 0,
    "r": "Alveolar walls provide radial tethering (elastic traction) that holds small non-cartilaginous bronchioles open. Destruction of alveolar septa eliminates this tethering, leading to premature dynamic airway collapse during active expiration."
  },
  {
    "cat": 3,
    "q": "A 34-year-old non-smoking male accountant presents with progressive exertional dyspnea and wheezing over the past 2 years. His father died of liver cirrhosis and respiratory failure at age 42. High-resolution CT of the chest demonstrates diffuse, severe emphysematous changes that are most pronounced in the lower lobes bilaterally. Laboratory evaluation reveals abnormal liver enzymes with elevated ALT and AST.<span class='q-stem-bold'>Which of the following is the underlying molecular defect causing this patient's disease?</span>",
    "a": [
      "Unchecked elastase activity due to a deficiency in an antiprotease enzyme synthesized by hepatocytes.",
      "Defective cystic fibrosis transmembrane conductance regulator causing dehydration of respiratory mucus.",
      "Autoantibodies against the non-collagenous domain of type IV collagen in alveolar basement membranes.",
      "Congenital deficiency of dynein arms causing immotile cilia and bronchiectasis.",
      "Constitutive overactivation of the epidermal growth factor receptor kinase in bronchiolar epithelium."
    ],
    "c": 0,
    "r": "Panacinar emphysema focused in the lower lobes combined with liver disease is classic for alpha-1-antitrypsin (AAT) deficiency, resulting in unchecked neutrophil elastase destruction of alveolar elastic tissue."
  },
  {
    "cat": 3,
    "q": "A 58-year-old male with a 35 pack-year smoking history presents to his family physician complaining of a persistent cough that produces copious white-to-yellow sputum almost every morning. He notes that this cough has occurred for at least 4 consecutive months each year over the past 3 consecutive years. On exam, he is cyanotic and overweight, with bilateral coarse crackles and expiratory rhonchi.<span class='q-stem-bold'>What is the standard clinical diagnostic definition met by this patient?</span>",
    "a": [
      "Chronic bronchitis: persistent productive cough for at least 3 consecutive months in at least 2 consecutive years.",
      "Bronchiectasis: irreversible permanent dilation of bronchi demonstrated on high-resolution chest CT scan.",
      "Emphysema: permanent enlargement of airspaces distal to terminal bronchioles with wall destruction.",
      "Asthma: documented airway hyperresponsiveness with at least 12% and 200 mL reversibility after bronchodilator.",
      "Simple chronic bronchitis: presence of hyperactive bronchial constriction without mucus production."
    ],
    "c": 0,
    "r": "Chronic bronchitis is clinically defined as a persistent cough productive of sputum for at least 3 months in at least 2 consecutive years."
  },
  {
    "cat": 1,
    "q": "A 63-year-old former shipyard worker presents with progressive exertional dyspnea and dry cough. Physical exam demonstrates bilateral end-inspiratory fine velcro crackles and digital clubbing. Chest radiography reveals reticular interstitial opacities and pleural plaques. Spirometry is performed.<span class='q-stem-bold'>Which of the following sets of pulmonary function findings is characteristic of this patient's restrictive pulmonary disorder?</span>",
    "a": [
      "Decreased FVC, decreased FEV1, normal or increased FEV1/FVC ratio, and decreased TLC.",
      "Normal FVC, markedly decreased FEV1, decreased FEV1/FVC ratio (<0.70), and increased TLC.",
      "Increased FVC, increased FEV1, markedly decreased FEV1/FVC ratio, and increased FRC.",
      "Decreased FVC, normal FEV1, markedly decreased FEV1/FVC ratio (<0.60), and normal TLC.",
      "Normal FVC, normal FEV1, normal FEV1/FVC ratio, and markedly increased residual volume."
    ],
    "c": 0,
    "r": "Restrictive lung disorders (e.g., asbestosis, idiopathic pulmonary fibrosis, sarcoidosis) demonstrate reduced FVC, reduced FEV1, a preserved or increased FEV1/FVC ratio (>=0.80), and decreased Total Lung Capacity (TLC)."
  },
  {
    "cat": 1,
    "q": "A 48-year-old woman with systemic sclerosis is referred for flow-volume loop spirometry. The technician reviews the generated flow-volume loop. Compared to a healthy reference loop, her curve shows a markedly reduced vital capacity with preserved peak expiratory flow relative to her smaller lung volume. The loop appears tall and narrow, and the entire curve is shifted along the horizontal axis.<span class='q-stem-bold'>Based on the spirometry lecture, which of the following describes the axis shift and configuration of the flow-volume loop in restrictive disease?</span>",
    "a": [
      "The loop shifts to the right along the volume axis with a narrowed horizontal width and reduced TLC.",
      "The loop shifts to the left along the volume axis with a wide horizontal width and increased RV.",
      "The loop demonstrates a scooped-out concave expiratory limb with an extreme shift to the left.",
      "The loop demonstrates flattening of both the inspiratory and expiratory limbs with no horizontal shift.",
      "The loop shifts downward below the horizontal zero-flow baseline with a normal vital capacity."
    ],
    "c": 0,
    "r": "In restrictive lung disease, reduced lung compliance and volume shift the flow-volume loop to the right along the volume axis with a narrowed, miniature ('witch-hat') profile."
  },
  {
    "cat": 1,
    "q": "A 19-year-old college student with acute asthma exacerbation performs spirometry during her clinic visit. The resulting flow-volume curve is compared against her baseline tracing obtained when she was asymptomatic 6 months earlier.<span class='q-stem-bold'>Which of the following specific changes in the expiratory portion of the flow-volume loop is most characteristic of acute asthma?</span>",
    "a": [
      "Reduced peak expiratory flow with a concave ('scooped-out') appearance of the expiratory curve.",
      "Sharp, rapid expiratory ascent with an abnormally elevated linear downward slope and normal RV.",
      "Selective amputation and flattening of only the inspiratory flow curve below the horizontal axis.",
      "Complete horizontal symmetric narrowing of the loop without altering peak flow rates.",
      "Shift of the entire curve to the right along the volume axis due to pulmonary stiffness."
    ],
    "c": 0,
    "r": "In acute asthma, narrowed airways increase resistance and impair expiratory flow, producing a reduced PEF and a concave ('scooped-out') expiratory curve."
  },
  {
    "cat": 3,
    "q": "A 66-year-old male with a 50 pack-year smoking history presents with a 2-month history of worsening cough and hemoptysis. A chest radiograph demonstrates a 4-cm centrally located hilar mass obstructing the right main bronchus with secondary distal atelectasis. Bronchoscopy with biopsy of the mass is performed. Histopathology reveals sheets of polygonal malignant epithelial cells with abundant eosinophilic cytoplasm, prominent intercellular bridges, and swirling foci of keratinization ('keratin pearls').<span class='q-stem-bold'>Which of the following is the most likely diagnosis?</span>",
    "a": [
      "Squamous cell carcinoma",
      "Adenocarcinoma",
      "Small cell lung carcinoma",
      "Large cell neuroendocrine carcinoma",
      "Bronchial carcinoid tumor"
    ],
    "c": 0,
    "r": "Squamous cell carcinoma of the lung is classically a central hilar mass in smokers characterized histologically by keratin pearls and intercellular bridges."
  },
  {
    "cat": 3,
    "q": "A 5-year-old unimmunized boy is brought to the emergency department by his parents with acute onset of high fever (39.8°C / 103.6°F), severe throat pain, and difficulty swallowing. On physical examination, the child appears toxic, anxious, and sits leaning forward with his neck extended and mouth open, exhibiting continuous drooling. He has inspiratory stridor, a muffled 'hot potato' voice, and no cough. Lateral neck radiography demonstrates marked swelling of the supraglottic tissues ('thumbprint sign').<span class='q-stem-bold'>Which of the following represents the most appropriate immediate step in the management of this child?</span>",
    "a": [
      "Direct pharyngeal inspection using a wooden tongue blade to confirm cherry-red epiglottic swelling",
      "Administration of nebulized racemic epinephrine and high-dose oral dexamethasone in the triage area",
      "Immediate placement of an intravenous catheter to obtain blood cultures and start broad-spectrum antibiotics",
      "Controlled airway examination and endotracheal intubation in an operating room with a surgical team on standby",
      "Emergent flexible fiberoptic laryngoscopy performed bedside while keeping the child in the supine position"
    ],
    "c": 3,
    "r": "Acute epiglottitis (classic 'three Ds': dysphagia, drooling, distress, plus 'thumbprint sign') is a life-threatening airway emergency. The immediate priority is controlled endotracheal intubation in the operating room with an experienced surgical airway team on standby; agitating maneuvers (tongue blades, IV sticks) must be avoided."
  },
  {
    "cat": 3,
    "q": "A 68-year-old male with long-standing smoking history presents with severe sharp right-sided chest pain that worsens markedly with deep inspiration, coughing, and sneezing. Physical exam reveals a localized pleural friction rub over the right lateral chest wall. Chest CT confirms a peripheral subpleural tumor invading into the parietal pleura with an associated exudative effusion.<span class='q-stem-bold'>Based on the symptoms and mechanisms presented in the lecture, what is the underlying mechanism of this patient's pleuritic chest pain?</span>",
    "a": [
      "Localized pleural inflammation and friction synchronized with respiratory chest wall movement.",
      "Mechanical ulceration of the major bronchial mucosa causing bronchospasm.",
      "Direct stretching of the visceral pleura, which is richly supplied with somatic nociceptive pain fibers.",
      "Spontaneous erosion into the pulmonary arterial trunk producing ischemic chest pain.",
      "Irritation of vagal sensory endings located exclusively within the alveolar parenchyma."
    ],
    "c": 0,
    "r": "Pleuritic chest pain is localized pleural pain synchronized with respiration, caused by inflammation or malignant invasion of the somatic-innervated parietal pleura."
  },
  {
    "cat": 3,
    "q": "During a public health outbreak briefing regarding influenza vaccination, an epidemiologist explains that achieving an 85% immunization rate in a metropolitan area will prevent widespread transmission and protect infants under 6 months of age and individuals with severe combined immunodeficiency who cannot receive live vaccines.<span class='q-stem-bold'>Which of the following immunological and epidemiological principles is being described?</span>",
    "a": [
      "Herd immunity, where high population coverage denies pathogens sufficient eligible hosts to sustain transmission.",
      "Passive artificial immunity, where circulating maternal antibodies provide lasting lifelong sterilizing immunity.",
      "Antigenic shift, where genetic reassortment creates a novel hemagglutinin subtype in non-immune individuals.",
      "Cross-reactive cell-mediated cytotoxicity, where non-specific natural killer cells eliminate all related respiratory viruses.",
      "Original antigenic sin, where memory B cells persistently dominate over naive antibody repertoires."
    ],
    "c": 0,
    "r": "Herd (community) immunity occurs when a critical threshold of the population is immunized, depriving a pathogen of eligible hosts to sustain chains of transmission and indirectly protecting unimmunized individuals."
  },
  {
    "cat": 0,
    "q": "A male neonate born at 39 weeks of gestation develops profound cyanosis and severe sternal retractions immediately upon delivery in the labor suite. When the infant cries vigorously, his cyanosis resolves promptly and his oxygen saturation rises to 98% on room air. However, as soon as he calms down and closes his mouth, severe hypoxemia and cyanosis recur. Attempts to gently advance a 6-French catheter through either anterior naris into the nasopharynx meet firm bony obstruction at a depth of 1.5 cm.<span class='q-stem-bold'>Which of the following congenital anomalies is the primary cause of this newborn's cyclical respiratory distress?</span>",
    "a": [
      "Congenital laryngomalacia with dynamic inspiratory collapse of supraglottic cartilaginous structures",
      "Bilateral choanal atresia due to persistence of the embryological bucconasal membrane",
      "Congenital tracheal stenosis secondary to complete circumferential cartilaginous rings",
      "Unilateral cleft palate with secondary posterior displacement of the tongue into the hypopharynx",
      "Congenital pulmonary airway malformation resulting in large communicating parenchymal cysts"
    ],
    "c": 1,
    "r": "Newborns are obligate nasal breathers. Bilateral choanal atresia causes cyclical cyanosis that worsens at rest/feeding and resolves when crying (oral breathing), confirmed by failure to pass a nasal catheter into the nasopharynx."
  },
  {
    "cat": 3,
    "q": "A 10-year-old boy with asthma uses a metered-dose inhaler (MDI) containing fluticasone. His pediatrician notices white curd-like plaques on his buccal mucosa and posterior pharynx that easily scrape off leaving an erythematous base. The pediatrician emphasizes proper inhaler technique and prescribes an add-on device.<span class='q-stem-bold'>Which of the following best describes the clinical benefit of using a spacer device with an inhaled corticosteroid MDI?</span>",
    "a": [
      "It decreases oropharyngeal drug impaction, reducing local candidiasis, and improves lung deposition.",
      "It accelerates aerosol particle velocity to ensure rapid drug absorption through the gastric mucosa.",
      "It chemically conjugates the steroid to albumin to extend its plasma elimination half-life.",
      "It converts the pressurized liquid suspension into a heated vapor to prevent bronchospasm.",
      "It completely eliminates the need for daily maintenance dosing by creating a pulmonary depot."
    ],
    "c": 0,
    "r": "Spacer devices slow aerosol droplet velocity and trap large particles in the chamber, decreasing oropharyngeal impaction (preventing oral thrush and hoarseness) while enhancing lower airway delivery."
  },
  {
    "cat": 3,
    "q": "A 45-year-old immigrant from Southeast Asia with active pulmonary tuberculosis is started on standard four-drug therapy (isoniazid, rifampicin, pyrazinamide, and ethambutol). At his 2-week clinic visit, the patient expresses extreme panic, reporting that his urine and tears have turned bright reddish-orange.<span class='q-stem-bold'>Which of the prescribed medications is responsible for this patient's presentation, and what is the appropriate management?</span>",
    "a": [
      "Rifampicin; this is a benign, harmless adverse effect, and the patient should be reassured.",
      "Isoniazid; this indicates severe hepatic failure requiring immediate drug cessation.",
      "Pyrazinamide; this indicates acute urate nephropathy requiring intravenous hydration.",
      "Ethambutol; this represents retrobulbar optic leakage requiring urgent ophthalmologic surgery.",
      "Rifampicin; this indicates acute rhabdomyolysis and myoglobinuria requiring hemodialysis."
    ],
    "c": 0,
    "r": "Rifampicin imparts a harmless reddish-orange discoloration to urine, tears, and sweat; reassuring the patient prevents unnecessary non-adherence."
  },
  {
    "cat": 0,
    "q": "A newborn female born at 37 weeks of gestation to a mother whose pregnancy was complicated by polyhydramnios presents 20 minutes after birth with copious, frothy oral secretions and mild tachypnea. During her initial attempted feeding, the infant coughs, chokes, and turns transiently cyanotic. A chest radiograph demonstrates a coiled radiopaque feeding tube in the blind-ending upper esophageal pouch and significant gastric distension with bowel gas.<span class='q-stem-bold'>Failure of which of the following embryological events between the 4th and 5th weeks of gestation is responsible for this anomaly?</span>",
    "a": [
      "Failure of recanalization of the endodermal core filling the primitive laryngeal lumen",
      "Faulty longitudinal partitioning of the foregut by the tracheoesophageal septum",
      "Defective cranial closure of the pleuroperitoneal folds within the pericardioperitoneal canals",
      "Incomplete branching morphogenesis of the secondary and tertiary bronchial lung buds",
      "Premature regression of the distal segment of the left fourth aortic vascular arch"
    ],
    "c": 1,
    "r": "Proximal esophageal atresia with a distal tracheoesophageal fistula (Type C, ~86.6% of cases) results from faulty partitioning of the primitive foregut by the tracheoesophageal folds/septum during weeks 4–5 of gestation."
  },
  {
    "cat": 3,
    "q": "A 42-year-old woman undergoing treatment for pulmonary tuberculosis develops numbness, tingling, and burning pain in both feet in a stocking-glove distribution. Physical examination reveals decreased sensation to pinprick and vibration over the bilateral lower extremities.<span class='q-stem-bold'>Which of the following medications is most likely responsible for this neurological complication, and which cofactor deficiency mediates this process?</span>",
    "a": [
      "Isoniazid; mediated by competition with and deficiency of pyridoxine (vitamin B6).",
      "Rifampicin; mediated by impaired intestinal absorption of cyanocobalamin (vitamin B12).",
      "Ethambutol; mediated by inhibition of thiamine pyrophosphokinase (vitamin B1).",
      "Pyrazinamide; mediated by depletion of nicotinic acid (vitamin B3).",
      "Streptomycin; mediated by oxidative damage to peripheral Schwann cell mitochondria."
    ],
    "c": 0,
    "r": "Isoniazid (INH) promotes excretion of pyridoxine (vitamin B6) and inhibits pyridoxal phosphokinase, causing peripheral neuropathy that is prevented by vitamin B6 supplementation."
  },
  {
    "cat": 3,
    "q": "A 31-year-old male presents with a persistent, non-productive dry nocturnal cough following an uncomplicated viral upper respiratory tract infection. He seeks an over-the-counter antitussive that will suppress his cough reflex without causing drowsiness, significant constipation, or opioid addiction potential. He is recommended dextromethorphan.<span class='q-stem-bold'>Which of the following describes the mechanism of action of dextromethorphan in treating cough?</span>",
    "a": [
      "Centrally acting suppression of the medullary cough center via NMDA/sigma receptor antagonism.",
      "Peripheral anesthetization of stretch receptors in the respiratory mucosa and pleura.",
      "Cleavage of disulfide bonds in cross-linked mucoprotein oligomers within bronchial secretions.",
      "Competitive blockade of muscarinic M3 receptors on postganglionic parasympathetic nerve terminals.",
      "Selective stimulation of beta-2 adrenergic receptors resulting in bronchial smooth muscle relaxation."
    ],
    "c": 0,
    "r": "Dextromethorphan is a centrally acting antitussive that suppresses the medullary cough center without significant opioid analgesia, sedation, or dependence at standard doses."
  },
  {
    "cat": 3,
    "q": "A 50-year-old patient with cystic fibrosis is admitted with thick, tenacious, viscous mucus secretions that are difficult to expectorate. The medical team administers an inhaled mucolytic agent whose biochemical mechanism relies on reducing the viscosity of bronchial secretions by breaking mucus polymers.<span class='q-stem-bold'>Which of the following agents acts through this exact biochemical mechanism?</span>",
    "a": [
      "N-acetylcysteine, which hydrolyzes disulfide bonds in mucoproteins.",
      "Guaifenesin, which acts as an irritant to stimulate respiratory tract fluid flow.",
      "Codeine, which binds mu-opioid receptors in the brainstem solitary tract.",
      "Dextromethorphan, which blocks glutamate transmission in bronchial ganglia.",
      "Ambroxol, which acts primarily by inhibiting pulmonary surfactant production."
    ],
    "c": 0,
    "r": "N-acetylcysteine contains a free sulfhydryl group that directly cleaves disulfide bonds (-S-S-) in mucoproteins, liquefying thick respiratory secretions."
  },
  {
    "cat": 1,
    "q": "A premature neonate delivered at 28 weeks of gestation develops severe tachypnea, grunting, nasal flaring, and intercostal retractions within 30 minutes of birth. Arterial blood gas shows severe hypoxemia and respiratory acidosis. Chest radiograph reveals diffuse ground-glass reticulogranular opacities with prominent air bronchograms. The attending neonatologist explains that the neonate's respiratory distress syndrome is primarily due to deficiency of a phospholipid-rich substance that coats alveolar surfaces.<span class='q-stem-bold'>According to the physics and physiology presented in the lecture, what is the primary role of this substance in the alveoli?</span>",
    "a": [
      "It reduces surface tension, thereby increasing pulmonary compliance and preventing alveolar collapse.",
      "It increases surface tension, thereby increasing elastic recoil and accelerating expiratory flow.",
      "It increases alveolar transpulmonary pressure to exceed atmospheric barometric pressure.",
      "It chemically degrades collagen and elastin fibers within the interalveolar interstitium.",
      "It prevents pulmonary capillary leakage by directly occluding endothelial tight junctions."
    ],
    "c": 0,
    "r": "Pulmonary surfactant (produced by Type II pneumocytes) reduces alveolar surface tension, increasing lung compliance, reducing the work of breathing, and preventing end-expiratory atelectasis."
  },
  {
    "cat": 0,
    "q": "A 26-year-old primigravida presents to the labor and delivery unit in active premature labor at 22 weeks of gestation. Ultrasound confirms intact fetal membranes and a single live fetus with normal anatomical morphology. The obstetrical and neonatal intensive care teams counsel the parents regarding the developmental status of the fetal respiratory system and the physiological threshold for extrauterine survival.<span class='q-stem-bold'>Which stage of pulmonary maturation is active at this gestational age, and what is its hallmark anatomical development?</span>",
    "a": [
      "Pseudoglandular stage, characterized by formation of the bronchial tree up to terminal bronchioles",
      "Canalicular stage, characterized by formation of respiratory bronchioles and capillary vascularization",
      "Terminal sac stage, characterized by extensive thinning of type I pneumocytes and mature alveoli",
      "Alveolar stage, characterized by multiplication of definitive alveoli from secondary connective septa",
      "Embryonic stage, characterized by initial outpouching of the respiratory diverticulum from foregut"
    ],
    "c": 1,
    "r": "The canalicular stage occurs from weeks 16 to 26 of gestation, characterized by enlargement of bronchial lumina, formation of respiratory bronchioles and alveolar ducts, and prominent capillary vascularization."
  },
  {
    "cat": 3,
    "q": "A 35-year-old male with chronic asthma inadvertently sprays an organophosphate insecticide in an enclosed garden shed. Within 20 minutes, he develops severe dyspnea, wheezing, diffuse rhonchi, profuse oral secretions, diaphoresis, and pinpoint pupils. His severe bronchoconstriction and hypersecretion are mediated by massive acetylcholine accumulation stimulating airway receptors.<span class='q-stem-bold'>Which of the following receptor types and autonomic pathways mediates this profound bronchoconstriction and mucus hypersecretion?</span>",
    "a": [
      "Muscarinic M3 receptors stimulated by postganglionic parasympathetic vagal fibers.",
      "Beta-2 adrenergic receptors stimulated by sympathetic postganglionic adrenergic fibers.",
      "Alpha-1 adrenergic receptors stimulated by circulating systemic epinephrine.",
      "Nicotinic neuronal receptors on pulmonary vascular endothelial cells.",
      "Histamine H2 receptors on respiratory pseudostratified ciliated columnar cells."
    ],
    "c": 0,
    "r": "Parasympathetic vagal fibers release acetylcholine onto muscarinic M3 receptors on bronchial smooth muscle and glands, inducing bronchoconstriction and mucus secretion."
  },
  {
    "cat": 3,
    "q": "A 15-month-old girl is brought to the pediatric urgent care clinic by her father due to a 2-day history of clear rhinorrhea, low-grade fever (38.1°C / 100.6°F), and progressive hoarseness. Her father notes that over the past 6 hours, she developed a harsh, barking, 'seal-like' cough and noisy breathing that becomes markedly pronounced whenever she cries or becomes agitated. On physical examination, the child has clear lungs bilaterally, inspiratory stridor at rest, and mild subcostal retractions without drooling or dysphagia.<span class='q-stem-bold'>Which of the following infectious pathogens is the most common etiology of this patient's clinical syndrome?</span>",
    "a": [
      "Human parainfluenza virus types 1 and 2 causing subglottic inflammatory edema",
      "Group A beta-hemolytic Streptococcus producing severe tonsillopharyngeal exudates",
      "Respiratory syncytial virus causing extensive bronchiolar epithelial necrosis and plugging",
      "Bordetella pertussis causing toxin-mediated lymphocytic leukocytosis and paroxysms",
      "Haemophilus influenzae type b causing life-threatening supraglottic cellulitis"
    ],
    "c": 0,
    "r": "Croup (acute laryngotracheobronchitis) presents in children under 3 years with hoarseness, barking 'seal-like' cough, and inspiratory stridor due to subglottic edema, most commonly caused by Parainfluenza virus types 1 and 2."
  },
  {
    "cat": 3,
    "q": "A 22-year-old previously healthy female university student presents with a 10-day history of low-grade fever, non-productive dry hacking cough, sore throat, and bilateral ear pain. Her room-mate had similar symptoms two weeks ago. Physical examination reveals an erythematous posterior pharynx, mild bullous myringitis, and minimal bilateral scattered crackles. Chest radiograph reveals bilateral patchy, diffuse reticular infiltrates that appear significantly worse than suggested by her physical examination.<span class='q-stem-bold'>Which of the following is the most likely pathogen responsible for this presentation of 'walking pneumonia', and what is the first-line oral antibiotic class?</span>",
    "a": [
      "Mycoplasma pneumoniae; treated with a Macrolide (e.g., azithromycin) or Tetracycline (doxycycline).",
      "Streptococcus pneumoniae; treated with a First-generation Cephalosporin (cefazolin).",
      "Klebsiella pneumoniae; treated with an Aminoglycoside (gentamicin) monotherapy.",
      "Pseudomonas aeruginosa; treated with high-dose oral Amoxicillin.",
      "Staphylococcus aureus; treated with oral Vancomycin."
    ],
    "c": 0,
    "r": "Mycoplasma pneumoniae causes atypical 'walking' pneumonia with diffuse interstitial infiltrates worse than physical signs. Lacking a peptidoglycan cell wall, it is treated with macrolides or tetracyclines."
  },
  {
    "cat": 3,
    "q": "A 59-year-old male heavy smoker presents with left shoulder pain radiating down his medial forearm, weakness of his left hand grip, and droopiness of his left eyelid. Physical exam reveals left-sided ptosis, miosis, and facial anhidrosis. Chest radiography reveals an ill-defined focal soft-tissue mass at the extreme apex of the left lung.<span class='q-stem-bold'>Which of the following structures is most likely compressed by this apical tumor to cause his pupillary and eyelid abnormalities?</span>",
    "a": [
      "Cervicothoracic (stellate) sympathetic chain ganglion",
      "Oculomotor nerve (CN III) in the superior orbital fissure",
      "Recurrent laryngeal nerve looping under the aortic arch",
      "Phrenic nerve traversing along the anterior scalene muscle",
      "Facial nerve (CN VII) within the stylomastoid foramen"
    ],
    "c": 0,
    "r": "Apical Pancoast (superior sulcus) tumors compress the cervicothoracic (stellate) sympathetic ganglion, causing ipsilateral Horner syndrome (ptosis, miosis, anhidrosis)."
  },
  {
    "cat": 3,
    "q": "A 64-year-old male with central small cell lung carcinoma is admitted with confusion, lethargy, and seizures. Laboratory evaluation reveals serum sodium of 116 mEq/L (normal 135–145), serum osmolality of 245 mOsm/kg (normal 275–295), and urine osmolality of 520 mOsm/kg. He is euvolemic on examination with no peripheral edema or jugular venous distension.<span class='q-stem-bold'>Which of the following paraneoplastic endocrinopathies is responsible for this patient's severe hyponatremia?</span>",
    "a": [
      "Ectopic secretion of Arginine Vasopressin (Antidiuretic Hormone) causing SIADH.",
      "Ectopic secretion of Parathyroid Hormone-related Protein (PTHrP) causing hypercalcemia.",
      "Ectopic secretion of Adrenocorticotropic Hormone (ACTH) causing secondary hyperaldosteronism.",
      "Autoantibodies directed against presynaptic P/Q-type voltage-gated calcium channels.",
      "Hypersecretion of Calcitonin by neuroendocrine medullary carcinoma cells."
    ],
    "c": 0,
    "r": "Small cell lung carcinoma (SCLC) frequently secretes ectopic ADH (arginine vasopressin), causing euvolemic hyponatremia with concentrated urine (SIADH)."
  },
  {
    "cat": 1,
    "q": "A 60-year-old male with severe emphysema undergoes whole-body plethysmography. Spirometry demonstrates FEV1/FVC of 0.45. Plethysmographic assessment demonstrates a markedly elevated Total Lung Capacity (TLC) of 135% of predicted and a Residual Volume (RV) of 190% of predicted.<span class='q-stem-bold'>Which of the following best explains why residual volume and total lung capacity are increased in this patient?</span>",
    "a": [
      "Severe loss of pulmonary elastic recoil promotes premature small airway closure and significant air trapping.",
      "Active contraction of the diaphragm maintains excessive negative intrapleural pressure at end-expiration.",
      "Proliferation of dense myofibroblasts deposits excessive collagen in the peribronchial spaces.",
      "Reflex hyperventilation increases tidal volume beyond physiological inspiratory capacity limits.",
      "Hypertrophy of chest wall skeletal musculature prevents the ribcage from returning to its neutral resting position."
    ],
    "c": 0,
    "r": "Loss of elastic recoil and alveolar radial tethering in emphysema results in premature small airway closure during expiration, trapping air and elevating RV, FRC, and TLC."
  },
  {
    "cat": 0,
    "q": "A 3-year-old boy is brought to the emergency department after accidentally choking on a raw peanut while running. He has sudden coughing and localized right-sided expiratory wheezing. Chest radiograph demonstrates hyperlucency and air-trapping in the right lower lung lobe during expiration. Flexible bronchoscopy is planned for foreign body retrieval.<span class='q-stem-bold'>Which of the following anatomical features of the right primary bronchus accounts for the predilection of aspirated foreign bodies to lodge in the right bronchial tree?</span>",
    "a": [
      "The right primary bronchus is wider, shorter, and runs more vertically than the left main bronchus.",
      "The right primary bronchus is narrower, longer, and branches at a sharper horizontal angle.",
      "The right primary bronchus lacks hyaline cartilage rings, allowing greater luminal distensibility.",
      "The right primary bronchus passes directly beneath the aortic arch, narrowing its entrance.",
      "The right primary bronchus receives a higher velocity jet of air due to the leftward cardiac tilt."
    ],
    "c": 0,
    "r": "The right main bronchus is wider, shorter (~2.5 cm), and oriented more vertically than the left main bronchus, making it the favored path for aspirated foreign objects."
  },
  {
    "cat": 3,
    "q": "A 71-year-old male with chronic obstructive pulmonary disease presents with high fever, shaking chills, pleuritic chest pain, and productive cough with rust-colored sputum. Physical exam reveals bronchial breath sounds and dullness to percussion over the right middle lobe. Sputum Gram stain reveals abundant lancet-shaped gram-positive diplococci with surrounding halos. Culture demonstrates alpha-hemolytic colonies that are sensitive to optochin and soluble in bile.<span class='q-stem-bold'>Which of the following is the causative organism, and what is its primary virulence factor?</span>",
    "a": [
      "Streptococcus pneumoniae; polysaccharide capsule that inhibits phagocytosis.",
      "Staphylococcus aureus; protein A that binds the Fc portion of IgG.",
      "Klebsiella pneumoniae; hyperviscous mucoid exopolysaccharide capsule.",
      "Haemophilus influenzae; polyribosylribitol phosphate (PRP) capsule.",
      "Pseudomonas aeruginosa; exotoxin A that ADP-ribosylates elongation factor 2."
    ],
    "c": 0,
    "r": "Streptococcus pneumoniae is an alpha-hemolytic, optochin-sensitive, bile-soluble gram-positive lancet diplococcus whose main virulence factor is its antiphagocytic polysaccharide capsule."
  },
  {
    "cat": 3,
    "q": "A 50-year-old male receiving rifampicin, isoniazid, pyrazinamide, and ethambutol for active cavitary tuberculosis complains of exquisite pain, swelling, and redness in his right first metatarsophalangeal joint. Serum uric acid is elevated at 10.4 mg/dL (normal 3.5–7.2). Arthrocentesis reveals needle-shaped, negatively birefringent crystals under polarized light microscopy.<span class='q-stem-bold'>Which of the anti-tuberculosis drugs in this patient's regimen is notorious for competing with uric acid for renal tubular secretion, thereby precipitating acute gout?</span>",
    "a": [
      "Pyrazinamide",
      "Rifampicin",
      "Isoniazid",
      "Ethambutol",
      "Streptomycin"
    ],
    "c": 0,
    "r": "Pyrazinamide competes with uric acid for renal proximal tubular secretion, leading to hyperuricemia and acute gouty arthritis."
  },
  {
    "cat": 3,
    "q": "A 30-year-old male on quadruple anti-tuberculosis therapy undergoes routine vision screening. He reports difficulty distinguishing between the red and green signals at traffic intersections. Automated perimetry confirms a bilateral central scotoma with decreased visual acuity.<span class='q-stem-bold'>Which of the following medications is responsible for this adverse drug reaction, and what monitoring parameter is indicated?</span>",
    "a": [
      "Ethambutol; causes retrobulbar optic neuritis and requires baseline and periodic red-green visual acuity testing.",
      "Isoniazid; causes toxic retinopathy and requires routine slit-lamp biomicroscopy.",
      "Rifampicin; causes corneal orange staining and requires monthly intraocular pressure measurements.",
      "Pyrazinamide; causes macular degeneration and requires baseline fluorescein angiography.",
      "Ciprofloxacin; causes retinal detachment and requires annual B-scan ocular ultrasound."
    ],
    "c": 0,
    "r": "Ethambutol causes dose-dependent retrobulbar optic neuritis manifesting as central scotoma and red-green color blindness."
  },
  {
    "cat": 3,
    "q": "A 35-year-old female living with HIV and stable on an antiretroviral therapy (ART) regimen including efavirenz (a non-nucleoside reverse transcriptase inhibitor) is diagnosed with active pulmonary tuberculosis. Two weeks after starting standard RIPE therapy, her plasma HIV-1 RNA viral load spikes significantly.<span class='q-stem-bold'>Which of the following pharmacological interactions explains this treatment failure of her antiretroviral therapy?</span>",
    "a": [
      "Rifampicin is a potent inducer of hepatic cytochrome P450 enzymes (CYP3A4), accelerating ART clearance.",
      "Isoniazid irreversibly inhibits hepatic CYP2C19, causing toxic intracellular ART accumulation.",
      "Pyrazinamide binds tightly to efavirenz in the gastrointestinal lumen, forming an unabsorbable chelate.",
      "Ethambutol promotes renal tubular hypersecretion of reverse transcriptase inhibitors.",
      "Rifampicin directly blocks retroviral CD4 coreceptor binding sites on peripheral T lymphocytes."
    ],
    "c": 0,
    "r": "Rifampicin potently induces hepatic CYP450 enzymes (including CYP3A4), accelerating the hepatic metabolism and clearance of co-administered antiretrovirals."
  },
  {
    "cat": 3,
    "q": "A 16-year-old boy presents to the emergency room with an acute severe asthma attack. He is tachypneic, speaking in short broken sentences, with widespread expiratory and inspiratory wheezing. He is immediately treated with nebulized albuterol. Within minutes, his dyspnea eases and peak expiratory flow improves significantly.<span class='q-stem-bold'>Which of the following intracellular signaling events is primarily responsible for the rapid bronchodilation induced by albuterol?</span>",
    "a": [
      "Activation of adenylyl cyclase, increasing intracellular cyclic AMP (cAMP) and activating protein kinase A.",
      "Direct blockade of voltage-gated L-type calcium channels on airway epithelial ciliated borders.",
      "Inhibition of phosphodiesterase-4, preventing degradation of cyclic GMP (cGMP) in mast cells.",
      "Antagonism of cysteinyl leukotriene CysLT1 receptors on bronchiolar vascular smooth muscle.",
      "Dephosphorylation and nuclear translocation of cytoplasmic glucocorticoid receptors."
    ],
    "c": 0,
    "r": "Albuterol stimulates Gs-coupled beta-2 adrenergic receptors, activating adenylyl cyclase to raise intracellular cAMP and activate PKA, relaxing bronchial smooth muscle."
  },
  {
    "cat": 3,
    "q": "A 12-year-old girl with mild persistent asthma and aspirin-exacerbated respiratory disease (AERD) experiences recurrent bronchospasm and rhinorrhea. Her pediatric allergist prescribes montelukast as daily oral maintenance therapy.<span class='q-stem-bold'>Which of the following represents the primary mechanism of action of montelukast?</span>",
    "a": [
      "Selective competitive antagonism of the cysteinyl leukotriene-1 (CysLT1) receptor.",
      "Direct inhibition of the 5-lipoxygenase (5-LOX) enzyme preventing arachidonate conversion.",
      "Irreversible acetylation of cyclooxygenase-1 and cyclooxygenase-2 enzymes.",
      "Stabilization of pulmonary mast cell membranes preventing degranulation of histamine.",
      "Recombinant monoclonal antibody binding circulating free immunoglobulin E (IgE)."
    ],
    "c": 0,
    "r": "Montelukast is a selective competitive antagonist of CysLT1 receptors, blocking the bronchoconstrictive and inflammatory effects of leukotrienes C4, D4, and E4."
  },
  {
    "cat": 0,
    "q": "A thoracic surgeon reviews anatomical landmarks prior to performing a right middle lobectomy for a localized benign pulmonary lesion. The surgeon identifies the horizontal and oblique fissures of the lung.<span class='q-stem-bold'>Which of the following anatomical descriptions accurately distinguishes the right lung from the left lung?</span>",
    "a": [
      "The right lung has three lobes and two fissures (oblique and horizontal), whereas the left lung has two lobes.",
      "The right lung has two lobes and a deep cardiac notch, whereas the left lung has three lobes.",
      "The right lung is longer and narrower than the left lung due to the position of the underlying liver.",
      "The right lung contains the lingula, an anatomical homologue to the left upper lobe apex.",
      "The right lung has a single pulmonary vein entering the left atrium, whereas the left has three."
    ],
    "c": 0,
    "r": "The right lung consists of 3 lobes separated by 2 fissures (oblique and horizontal), whereas the left lung has 2 lobes separated by 1 oblique fissure and features a cardiac notch and lingula."
  },
  {
    "cat": 1,
    "q": "A 68-year-old male with severe emphysema and an 80 pack-year smoking history undergoes pulmonary compliance testing. A 62-year-old female with idiopathic pulmonary fibrosis (IPF) undergoes identical testing. The compliance curves (change in lung volume dV plotted against change in transpulmonary pressure dP) are compared to a healthy normal baseline curve.<span class='q-stem-bold'>Which of the following correctly pairs the disease state with its corresponding alteration in static pulmonary compliance?</span>",
    "a": [
      "Emphysema demonstrates increased compliance (steep curve); Pulmonary fibrosis demonstrates decreased compliance (flattened curve).",
      "Emphysema demonstrates decreased compliance; Pulmonary fibrosis demonstrates increased compliance.",
      "Both emphysema and pulmonary fibrosis demonstrate identically increased compliance.",
      "Both emphysema and pulmonary fibrosis demonstrate identically decreased compliance.",
      "Emphysema maintains normal compliance; Pulmonary fibrosis demonstrates isolated chest wall hyper-compliance."
    ],
    "c": 0,
    "r": "Loss of elastic tissue in emphysema increases lung compliance (steep curve), whereas interstitial collagen deposition in pulmonary fibrosis decreases lung compliance (stiff, flattened curve)."
  },
  {
    "cat": 3,
    "q": "A 2-year-old boy is brought to the emergency department at 2:00 AM in late autumn with sudden-onset harsh, barking cough, inspiratory stridor, and hoarseness. His symptoms worsen when he is agitated. His mother states he had a mild runny nose and low-grade fever for the preceding two days. On physical exam, he has mild subcostal retractions and clear breath sounds bilaterally. An anteroposterior soft-tissue neck radiograph reveals symmetric subglottic narrowing ('steeple sign').<span class='q-stem-bold'>Which of the following viral agents is the most frequent cause of this clinical syndrome (croup / acute laryngotracheobronchitis)?</span>",
    "a": [
      "Parainfluenza virus",
      "Respiratory syncytial virus",
      "Adenovirus",
      "Coxsackievirus A",
      "Rhinovirus"
    ],
    "c": 0,
    "r": "Acute laryngotracheobronchitis (croup) with barking cough and subglottic 'steeple sign' is most frequently caused by Parainfluenza virus."
  },
  {
    "cat": 3,
    "q": "A 29-year-old pregnant woman at 18 weeks of gestation presents with acute bacterial maxillary sinusitis and fever. She has a documented severe IgE-mediated anaphylactic reaction to amoxicillin (developed urticaria, angioedema, and airway compromise during childhood). She is prescribed an oral macrolide antibiotic.<span class='q-stem-bold'>Which of the following describes the mechanism of antibacterial action of macrolide antibiotics (e.g., azithromycin, clarithromycin)?</span>",
    "a": [
      "Reversible binding to the 50S ribosomal subunit, inhibiting peptide translocation.",
      "Binding to the 30S ribosomal subunit, causing misreading of mRNA codons.",
      "Inhibition of bacterial DNA gyrase (topoisomerase II) preventing DNA supercoiling.",
      "Blockade of dihydrofolate reductase preventing tetrahydrofolic acid synthesis.",
      "Inhibition of transpeptidase enzymes preventing peptidoglycan cell wall cross-linking."
    ],
    "c": 0,
    "r": "Macrolides bind reversibly to the 23S rRNA of the 50S bacterial ribosomal subunit, blocking translocation during protein synthesis."
  },
  {
    "cat": 0,
    "q": "A 24-year-old male presents to the emergency department with severe headache, high spiking fever, and progressive periorbital edema 5 days after developing a painful furuncle in the anterior vestibule of his nose. Physical examination reveals chemosis, bilateral proptosis, and restricted extraocular eye movements. High-resolution contrast-enhanced CT of the head confirms septic thrombosis of the superior sagittal and cavernous sinuses.<span class='q-stem-bold'>Which of the following venous communications provides the direct anatomical conduit through the anterior cranial fossa for the intracranial spread of this infection?</span>",
    "a": [
      "An emissary vein traversing the foramen cecum",
      "An emissary vein traversing the foramen rotundum",
      "A posterior ethmoidal vein entering superior petrosal",
      "The infraorbital vein draining into maxillary plexus",
      "The sphenopalatine vein entering the pterygoid fossa"
    ],
    "c": 0,
    "r": "In some individuals, an emissary vein traverses the foramen cecum in the frontal bone anterior to the crista galli, directly connecting nasal veins with the superior sagittal sinus."
  },
  {
    "cat": 0,
    "q": "A 32-year-old male undergoes surgical excision of an obstructing polyp from the posterior nasal septum and adjacent hard palate under local anesthesia. The operating otolaryngologist plans a selective nerve block to achieve complete anesthesia of the mucosa covering the posterior aspect of the nasal septum and anterior hard palate.<span class='q-stem-bold'>Which of the following nerves must be selectively anesthetized to block general sensation across this specific mucosal territory?</span>",
    "a": [
      "The anterior ethmoidal nerve from ophthalmic division",
      "The greater petrosal nerve from the facial trunk",
      "The nasopalatine nerve from the maxillary division",
      "The olfactory nerve filaments within cribriform plate",
      "The superior cervical ganglion sympathetic gray rami"
    ],
    "c": 2,
    "r": "General sensation to the posterior nasal septum and anterior hard palate is supplied by the nasopalatine nerve (branch of the maxillary nerve, CN V2)."
  },
  {
    "cat": 0,
    "q": "An 11-year-old boy is brought to the outpatient clinic with mild, recurrent bleeding from his right nostril over the past two days. His mother notes that the bleeding typically follows vigorous digital trauma (nose picking) during dry weather. Anterior rhinoscopy reveals minor mucosal oozing and crusted excoriations localized exclusively to the anterior margin of the nasal vestibule.<span class='q-stem-bold'>Which of the following vascular structures was most likely torn to produce this child's clinical presentation?</span>",
    "a": [
      "Deep venous plexus located within the nasal vestibule",
      "Major sphenopalatine arterial trunk in posterior septum",
      "Pterygoid venous plexus situated in infratemporal fossa",
      "Ruptured septal branch of the anterior ethmoidal artery",
      "Superior ophthalmic vein draining to cavernous sinus"
    ],
    "c": 0,
    "r": "While arterial ruptures cause pulsatile spurting, mild epistaxis from nose picking typically tears the veins located in the nasal vestibule."
  },
  {
    "cat": 0,
    "q": "A male neonate born at 39 weeks of gestation is examined in the newborn nursery. Inspection reveals an accessory nostril located superior to the normal left nostril, displaying a smaller but similar contour to the native aperture. On probing, the tract ends blindly at a depth of 2 mm. The underlying left nasal ala appears depressed, while the primary bilateral nostrils are equal in projection and diameter.<span class='q-stem-bold'>Which of the following congenital anomalies best classifies this infant's developmental physical finding?</span>",
    "a": [
      "Choanal atresia with posterior bony membranous septation",
      "Congenital arhinia due to failure of placode formation",
      "Nasal dermoid sinus cyst with intracranial extension",
      "Supernumerary nostril ending blindly above native ala",
      "Unilateral cleft lip with primary maxillary clefting"
    ],
    "c": 3,
    "r": "Supernumerary (accessory) nostril is a rare congenital anomaly characterized by a blind-ending accessory aperture above the native nostril with mild alar depression."
  },
  {
    "cat": 1,
    "q": "A 45-year-old male is seated quietly in an environmental physiology suite. During the onset of unforced, spontaneous inspiration, contraction and descent of his diaphragm increase the craniocaudal and transverse dimensions of his thoracic cavity.<span class='q-stem-bold'>Which of the following physical laws directly explains the resulting reduction in intrapulmonary (alveolar) pressure relative to atmospheric pressure that drives airflow inward?</span>",
    "a": [
      "Boyle's law relating inverse pressure to gas volume",
      "Charles's law relating gas volume to Kelvin temperature",
      "Dalton's law of additive partial pressures in gas mixtures",
      "Fick's law of passive molecular diffusion through barriers",
      "Henry's law relating dissolved gas volume to pressure"
    ],
    "c": 0,
    "r": "Boyle's law (P1V1 = P2V2) states that at constant temperature, gas pressure is inversely proportional to volume; thoracic expansion lowers intrapulmonary pressure below atmospheric pressure."
  },
  {
    "cat": 1,
    "q": "A 28-year-old healthy male volunteer undergoes esophageal manometry and spirometric assessment during an investigation of chest wall mechanics. At the end of a normal tidal expiration (functional residual capacity), with the glottis open and no airflow occurring, his intrapulmonary alveolar pressure is 0 cmH2O and his intrapleural pressure is measured at -5 cmH2O.<span class='q-stem-bold'>Which of the following mathematical differences defines this subject's transpulmonary (recoil) pressure under these resting conditions?</span>",
    "a": [
      "Alveolar pressure minus atmospheric barometric pressure",
      "Alveolar pressure minus intrapleural pleural pressure",
      "Barometric pressure minus transdiaphragmatic pressure",
      "Intrapleural pressure minus alveolar airway pressure",
      "Intrapleural pressure minus transthoracic wall pressure"
    ],
    "c": 1,
    "r": "Transpulmonary (recoil) pressure is the difference between alveolar pressure and intrapleural pressure (Ptp = Palv - Ppl)."
  },
  {
    "cat": 1,
    "q": "A 35-year-old male undergoes lung function testing in a clinical pulmonary physiology laboratory. Stepwise increments in his transpulmonary pressure are recorded while measuring resulting lung volume changes under quasi-static conditions.<span class='q-stem-bold'>In a normal, healthy adult, by what volume will the lungs expand for each 1 cmH2O increase in transpulmonary pressure?</span>",
    "a": [
      "Approximately 50 milliliters of air per cmH2O",
      "Approximately 100 milliliters of air per cmH2O",
      "Approximately 200 milliliters of air per cmH2O",
      "Approximately 500 milliliters of air per cmH2O",
      "Approximately 1000 milliliters of air per cmH2O"
    ],
    "c": 2,
    "r": "Normal total compliance of both lungs combined in an adult is approximately 200 mL of air per cmH2O of transpulmonary pressure."
  },
  {
    "cat": 1,
    "q": "An experimental histology laboratory investigates the mechanical behavior of human pulmonary parenchymal tissue strips under alternating deflation and inflation tensions in a tissue bath.<span class='q-stem-bold'>Which of the following structural arrangements best describes the conformational state of elastin and collagen fibers within the lung parenchyma during resting deflation?</span>",
    "a": [
      "Cross-linked covalent lattices resisting any initial tension",
      "Degraded soluble fragments suspended in surfactant film",
      "Elastically contracted and kinked conformational arrangements",
      "Fully elongated rigid rods transmitting maximal recoil force",
      "Hyperphosphorylated fibrillar complexes anchored to laminin"
    ],
    "c": 2,
    "r": "In deflated lungs, parenchymal elastin and collagen fibers reside in an elastically contracted and kinked state; upon inflation, they unkink and stretch."
  },
  {
    "cat": 1,
    "q": "A neonatologist explains the biophysical principles governing alveolar stability to a medical student rotating in the neonatal intensive care unit. She presents the formula derived from the Law of LaPlace for spherical structures (P = 2T / r), where P is distending pressure, T is wall surface tension, and r is alveolar radius.<span class='q-stem-bold'>According to this physical law, what would occur in interconnected alveoli of differing radii if surface tension were constant throughout the lung?</span>",
    "a": [
      "Collapsing pressure would remain identical across all units",
      "Larger alveoli would require higher pressures to stay open",
      "Larger alveoli would empty into smaller neighboring units",
      "Smaller alveoli would require higher distending pressures",
      "Surface tension would spontaneously drop to zero in all units"
    ],
    "c": 3,
    "r": "By LaPlace's Law (P = 2T/r), smaller alveoli have a smaller radius and generate higher inward collapsing pressures, requiring higher distending pressures to remain open unless surfactant lowers T."
  },
  {
    "cat": 1,
    "q": "A female infant is delivered via urgent cesarean section at 29 weeks of gestation due to placental abruption. Within 20 minutes of birth, the neonate develops severe tachypnea (respiratory rate 78/min), prominent subcostal retractions, expiratory grunting, and cyanosis on room air. Chest radiography reveals diffuse bilateral 'ground-glass' reticulogranular opacities with prominent air bronchograms.<span class='q-stem-bold'>At what gestational age does the physiological synthesis of pulmonary surfactant typically begin in the developing human fetus?</span>",
    "a": [
      "After the sixteenth week of intrauterine pregnancy",
      "After the twentieth week of intrauterine pregnancy",
      "After the twenty-fourth week of intrauterine pregnancy",
      "After the thirty-second week of intrauterine pregnancy",
      "After the thirty-seventh week of intrauterine pregnancy"
    ],
    "c": 3,
    "r": "Physiological synthesis of pulmonary surfactant by Type II pneumocytes begins after the 32nd week of pregnancy; infants born prior are at high risk for IRDS."
  },
  {
    "cat": 1,
    "q": "A premature infant with severe infant respiratory distress syndrome (IRDS) is found to have extensive alveolar atelectasis accompanied by marked fluid retention in both the pulmonary interstitium and alveolar spaces.<span class='q-stem-bold'>Failure of surfactant to stimulate the functional maturation of which of the following transport channels directly accounts for this persistent intra-alveolar fluid retention?</span>",
    "a": [
      "Aquaporin-1 water channels on pulmonary capillary endothelia",
      "Cystic fibrosis transmembrane conductance regulator channels",
      "Epithelial sodium channels (ENaC) on alveolar pneumocytes",
      "Sodium-potassium-chloride cotransporters on bronchioles",
      "Voltage-gated calcium channels on bronchial smooth muscle"
    ],
    "c": 2,
    "r": "Surfactant is required for the functional maturation of epithelial sodium channels (ENaC), which reabsorb sodium and water from the alveoli after birth."
  },
  {
    "cat": 1,
    "q": "A 60-year-old male hospitalized in the intensive care unit is being managed for acute hypoxemic respiratory failure. During a clinical discussion on factors that suppress alveolar type II pneumocyte metabolic activity, several clinical conditions are evaluated.<span class='q-stem-bold'>Which of the following clinical conditions or interventions is explicitly recognized to cause a decrease in pulmonary surfactant production?</span>",
    "a": [
      "Antenatal maternal administration of dexamethasone",
      "Chronic inhalation of 100% supplemental oxygen",
      "Moderate endurance exercise in cool environments",
      "Reflex sympathetic stimulation of beta-2 receptors",
      "Thyroid hormone supplementation in mild hypothyroidism"
    ],
    "c": 1,
    "r": "Surfactant production is decreased by pulmonary artery occlusion, main bronchus occlusion, chronic inhalation of 100% oxygen, and cigarette smoking."
  },
  {
    "cat": 1,
    "q": "A 25-year-old male medical student undergoes baseline pulmonary function testing as part of a physiology laboratory demonstration. Starting from the end of a normal, quiet expiration (normal expiratory level), he is instructed to inspire with maximal effort, distending his lungs to their greatest possible volume.<span class='q-stem-bold'>Which of the following lung capacities did this student just demonstrate, and what is its typical average normal value?</span>",
    "a": [
      "Functional residual capacity averaging 2300 milliliters",
      "Inspiratory capacity averaging 3500 milliliters",
      "Total lung capacity averaging 5800 milliliters",
      "Vital capacity averaging 4600 milliliters",
      "Volume of tidal breathing averaging 500 milliliters"
    ],
    "c": 1,
    "r": "Inspiratory Capacity (IC = VT + IRV) is the maximum volume inspired starting from the normal end-expiratory level, averaging ~3,500 mL."
  },
  {
    "cat": 1,
    "q": "A 30-year-old healthy male volunteer sits upright and breathes quietly into a closed-circuit spirometer. At the exact nadir of an unforced, resting tidal expiration, airflow ceases momentarily prior to the initiation of the next breath.<span class='q-stem-bold'>Which of the following pulmonary capacities represents the volume of air remaining within his respiratory system at this specific physiological point?</span>",
    "a": [
      "Expiratory capacity equal to tidal volume plus ERV",
      "Functional residual capacity equal to ERV plus RV",
      "Inspiratory capacity equal to tidal volume plus IRV",
      "Residual volume equal to total capacity minus IC",
      "Vital capacity equal to total lung volume minus RV"
    ],
    "c": 1,
    "r": "Functional Residual Capacity (FRC = ERV + RV, ~2,300 mL) is the volume of air remaining in the lungs at the end of a normal quiet expiration."
  },
  {
    "cat": 1,
    "q": "A 40-year-old male athlete undergoes spirometry in both the upright standing and recumbent supine positions. His vital capacity (VC) is measured at 4800 mL while standing, but drops to 4400 mL when measured in the supine position.<span class='q-stem-bold'>Which of the following physiological mechanisms best accounts for the higher vital capacity observed while standing compared to the recumbent position?</span>",
    "a": [
      "Decreased venous return causing alveolar hypoperfusion",
      "Gravitational descent of abdominal viscera freeing the diaphragm",
      "Increased intrapleural pressure compressing alveolar bases",
      "Reflex sympathetic stimulation of bronchial smooth muscle",
      "Shift of systemic blood volume into pulmonary capillaries"
    ],
    "c": 1,
    "r": "Vital capacity is higher when standing because gravity pulls abdominal organs downward away from the diaphragm and decreases thoracic vascular blood pooling."
  },
  {
    "cat": 1,
    "q": "A research study compares pulmonary function parameters between 100 healthy young adult females and 100 healthy young adult males matched for age, physical conditioning, and athletic status.<span class='q-stem-bold'>On average, how do pulmonary volumes and capacities in females compare quantitatively to those measured in males?</span>",
    "a": [
      "Approximately 5% to 10% greater in females than males",
      "Approximately 20% to 25% lower in females than males",
      "Approximately 40% to 50% lower in females than males",
      "Completely identical after correcting for body weight",
      "Greater only in expiratory reserve and residual volumes"
    ],
    "c": 1,
    "r": "All pulmonary volumes and capacities are approximately 20% to 25% lower in women than in men."
  },
  {
    "cat": 1,
    "q": "A 52-year-old male with long-standing dyspnea undergoes comprehensive pulmonary function testing. The technician explains that while tidal volume, inspiratory capacity, and vital capacity can be determined directly with standard bedside water-seal spirometry, certain specific volumes require the helium dilution technique.<span class='q-stem-bold'>Which of the following sets of pulmonary volumes and capacities cannot be measured by direct spirometry alone?</span>",
    "a": [
      "Inspiratory capacity, tidal volume, and expiratory reserve",
      "Residual volume, functional residual capacity, and total capacity",
      "Tidal volume, vital capacity, and inspiratory reserve volume",
      "Vital capacity, expiratory reserve volume, and tidal volume",
      "Vital capacity, inspiratory capacity, and expiratory volume"
    ],
    "c": 1,
    "r": "Residual Volume (RV), Functional Residual Capacity (FRC), and Total Lung Capacity (TLC) cannot be measured by direct spirometry and require helium dilution or plethysmography."
  },
  {
    "cat": 1,
    "q": "A 22-year-old male college sprinter undergoes baseline physiological evaluation at rest. His resting tidal volume (VT) is measured at 500 mL, and his resting respiratory rate is recorded at 14 breaths per minute.<span class='q-stem-bold'>What is this subject's calculated Respiratory Minute Volume (RMV), also termed Pulmonary Ventilation?</span>",
    "a": [
      "3.5 liters of air per minute",
      "5.2 liters of air per minute",
      "7.0 liters of air per minute",
      "8.8 liters of air per minute",
      "10.5 liters of air per minute"
    ],
    "c": 2,
    "r": "Respiratory Minute Volume (RMV) = VT x Respiratory Rate = 500 mL x 14 breaths/min = 7,000 mL/min = 7.0 L/min."
  },
  {
    "cat": 1,
    "q": "The same 22-year-old sprinter (tidal volume 500 mL, respiratory rate 14 breaths per minute) has his anatomical dead space volume (VD) determined to be 150 mL.<span class='q-stem-bold'>What is this athlete's calculated Effective Ventilation Volume (EVV), also known as Alveolar Ventilation?</span>",
    "a": [
      "2.1 liters of gas per minute",
      "3.5 liters of gas per minute",
      "4.9 liters of gas per minute",
      "6.3 liters of gas per minute",
      "7.0 liters of gas per minute"
    ],
    "c": 2,
    "r": "Effective Ventilation Volume (Alveolar Ventilation) = (VT - VD) x RR = (500 - 150) x 14 = 350 x 14 = 4,900 mL/min = 4.9 L/min."
  },
  {
    "cat": 1,
    "q": "A 38-year-old female is evaluated for dyspnea prior to major abdominal surgery. The technician performs a Maximal Breathing Capacity (MBC) test, also termed Maximal Voluntary Ventilation (MVV). The patient breathes as deeply and rapidly as possible through a low-resistance spirometer for 15 seconds, and the total volume exhaled is extrapolated to 1 minute.<span class='q-stem-bold'>Which of the following ranges represents the normal reference value for Maximal Voluntary Ventilation in a healthy adult?</span>",
    "a": [
      "40 to 70 liters of air per minute",
      "80 to 110 liters of air per minute",
      "125 to 170 liters of air per minute",
      "200 to 250 liters of air per minute",
      "300 to 350 liters of air per minute"
    ],
    "c": 2,
    "r": "Normal Maximal Voluntary Ventilation (MVV / MBC) is 125 to 170 L/min."
  },
  {
    "cat": 1,
    "q": "A 19-year-old female with moderate persistent asthma is taught to monitor her airway caliber at home using a portable peak flow meter. She is instructed to inhale to total lung capacity and then exhale forcefully and maximally for 10 milliseconds through the mouthpiece.<span class='q-stem-bold'>What is the expected normal reference range for Peak Expiratory Flow Rate (PEFR), and which airway segment does it primarily assess?</span>",
    "a": [
      "150 to 250 L/min, assessing peripheral terminal bronchioles",
      "250 to 350 L/min, assessing alveolar duct elastic recoil",
      "400 to 600 L/min, assessing caliber of larger airways",
      "650 to 800 L/min, assessing small non-cartilaginous airways",
      "850 to 1000 L/min, assessing respiratory capillary diffusion"
    ],
    "c": 2,
    "r": "Normal PEFR is 400 to 600 L/min and primarily reflects the caliber of larger conducting airways (reduced in asthma, unreliable in small airway disease like emphysema)."
  },
  {
    "cat": 1,
    "q": "A 28-year-old male volunteer with normal respiratory mechanics completes a Forced Vital Capacity (FVC) maneuver in a pulmonary physiology laboratory. His timed expired volumes are recorded sequentially at 1, 2, and 3 seconds.<span class='q-stem-bold'>Which of the following percentage sequences represents the normal physiological values for FEV1, FEV2, and FEV3 expressed as a fraction of total FVC?</span>",
    "a": [
      "FEV1 = 65%, FEV2 = 75%, and FEV3 = 85%",
      "FEV1 = 70%, FEV2 = 80%, and FEV3 = 90%",
      "FEV1 = 75%, FEV2 = 85%, and FEV3 = 95%",
      "FEV1 = 83%, FEV2 = 90%, and FEV3 = 97%",
      "FEV1 = 95%, FEV2 = 98%, and FEV3 = 100%"
    ],
    "c": 3,
    "r": "In healthy adults, FVC is exhaled within 3 seconds with normal timed percentages of FEV1 = 83%, FEV2 = 90%, and FEV3 = 97%."
  },
  {
    "cat": 1,
    "q": "A 29-year-old female presents with chronic episodic dry cough, especially noticeable at night and during cold weather runs. Baseline spirometry shows an FEV1 of 94% of predicted and an FEV1/FVC ratio of 81%. To evaluate for suspected cough-variant asthma, she undergoes bronchochallenge testing with graded concentrations of inhaled methacholine.<span class='q-stem-bold'>Which of the following criteria defines a positive bronchochallenge test diagnostic of airway hyperresponsiveness?</span>",
    "a": [
      "A 10% decrease in baseline forced vital capacity",
      "A 20% decrease in baseline forced expiratory volume (FEV1)",
      "A 35% decrease in baseline peak expiratory flow rate",
      "A 50% decrease in baseline maximal voluntary ventilation",
      "An 80% decrease in baseline airway conductance resistance"
    ],
    "c": 1,
    "r": "A positive methacholine or histamine bronchochallenge test is defined by a >= 20% decrease in baseline FEV1."
  },
  {
    "cat": 2,
    "q": "A 55-year-old female with progressive exertional dyspnea undergoes diagnostic right heart catheterization to evaluate her cardiopulmonary hemodynamics at rest.<span class='q-stem-bold'>Which of the following sets of pressures reflects the normal physiological values within the human pulmonary circulation?</span>",
    "a": [
      "Systolic 15 mmHg, diastolic 5 mmHg, mean arterial 10 mmHg, capillary 4 mmHg",
      "Systolic 25 mmHg, diastolic 8–12 mmHg, mean arterial 15 mmHg, capillary 7 mmHg",
      "Systolic 40 mmHg, diastolic 18 mmHg, mean arterial 25 mmHg, capillary 14 mmHg",
      "Systolic 60 mmHg, diastolic 25 mmHg, mean arterial 35 mmHg, capillary 18 mmHg",
      "Systolic 120 mmHg, diastolic 80 mmHg, mean arterial 93 mmHg, capillary 25 mmHg"
    ],
    "c": 1,
    "r": "Normal pulmonary arterial pressures are systolic ~25 mmHg, diastolic 8–12 mmHg, mean pulmonary arterial pressure ~15 mmHg, and mean capillary pressure ~7 mmHg."
  },
  {
    "cat": 2,
    "q": "A 45-year-old male with early interstitial pulmonary fibrosis undergoes evaluation for exertional dyspnea. Arterial blood gas analysis reveals a resting PaO2 of 80 mmHg with a normal PaCO2 of 38 mmHg. During exercise testing, his PaO2 drops sharply to 62 mmHg, whereas his PaCO2 remains normal at 39 mmHg.<span class='q-stem-bold'>Which of the following physical properties explains why carbon dioxide transfer across the blood-gas barrier is preserved despite structural thickening that impairs oxygen diffusion?</span>",
    "a": [
      "CO2 has a diffusing capacity approximately 20 times that of oxygen",
      "CO2 is actively transported by apical epithelial transport pumps",
      "CO2 utilizes transcellular hemoglobin channels across pneumocytes",
      "O2 has a much higher liquid solubility constant than CO2",
      "Oxygen binds more tightly to plasma albumin than carbon dioxide"
    ],
    "c": 0,
    "r": "Because CO2 is ~24 times more soluble in water/membranes than O2, its diffusing capacity across the blood-gas barrier is approximately 20 times higher than that of oxygen."
  },
  {
    "cat": 2,
    "q": "In a medical physiology laboratory, students analyze time-course curves illustrating the partial pressure of different gases in pulmonary capillary blood as it traverses an alveolar capillary of normal length (transit time ~ 0.75 seconds at rest). For a healthy volunteer breathing room air, capillary blood PO2 reaches complete equilibrium with alveolar PO2 within the first 0.25 seconds (one-third) of capillary transit.<span class='q-stem-bold'>Under normal resting physiological conditions, which of the following terms correctly classifies the gas exchange kinetics for oxygen and nitrous oxide (N2O)?</span>",
    "a": [
      "Active ATP-dependent transport gas exchange",
      "Carrier-saturated facilitated diffusion kinetics",
      "Diffusion-limited alveolar gas exchange",
      "Perfusion-limited pulmonary gas exchange",
      "Surface-area-independent bulk transport"
    ],
    "c": 3,
    "r": "At rest, O2, CO2, and N2O equilibrate completely within the first third of capillary transit (~0.25 s); thus, total transfer depends solely on pulmonary blood flow (perfusion-limited)."
  },
  {
    "cat": 2,
    "q": "A 26-year-old male athlete performs high-intensity running on an inclined treadmill. As his cardiac output increases from a resting baseline of 5 L/min up to 25 L/min, invasive measurements confirm that his pulmonary diffusing capacity for both oxygen and carbon dioxide increases more than twofold.<span class='q-stem-bold'>Which of the following microvascular adaptations in the pulmonary circulation is primarily responsible for this marked increase in diffusing capacity during exercise?</span>",
    "a": [
      "Active vasoconstriction of apical Zone 1 pulmonary arterioles",
      "Capillary recruitment and distension expanding effective surface area",
      "Increased thickness of the alveolar-capillary basement membrane",
      "Reduction in red blood cell 2,3-bisphosphoglycerate concentration",
      "Suppression of alveolar epithelial sodium channel fluid reabsorption"
    ],
    "c": 1,
    "r": "During exercise, recruitment of previously closed apical capillaries and distension of open capillaries markedly expands the effective gas-exchanging surface area."
  },
  {
    "cat": 2,
    "q": "A 21-year-old male is brought to the emergency department by friends after being found unresponsive in a bathroom. Physical examination reveals a respiratory rate of 6 breaths per minute, shallow breathing, cyanotic lips, and pinpoint pupils. Arterial blood gas (ABG) drawn on room air reveals:<table class='lab-table'><thead><tr><th>Parameter</th><th>Patient Value</th><th>Normal Range</th></tr></thead><tbody><tr><td>pH</td><td>7.22</td><td>7.35 – 7.45</td></tr><tr><td>PaCO2</td><td>68 mmHg</td><td>35 – 45 mmHg</td></tr><tr><td>HCO3</td><td>24 mEq/L</td><td>22 – 26 mEq/L</td></tr><tr><td>PaO2</td><td>54 mmHg</td><td>75 – 100 mmHg</td></tr><tr><td>O2 Sat</td><td>84%</td><td>94 – 100%</td></tr></tbody></table><span class='q-stem-bold'>Which of the following acid-base disturbances is present in this patient?</span>",
    "a": [
      "Compensated chronic respiratory acidemic disorder",
      "Partially compensated metabolic alkalotic disorder",
      "Partially compensated respiratory acidemic disorder",
      "Uncompensated acute metabolic alkalotic disturbance",
      "Uncompensated acute respiratory acidemic disorder"
    ],
    "c": 4,
    "r": "pH is low (7.22) and PaCO2 is high (68 mmHg) while HCO3 remains normal (24 mEq/L), defining uncompensated acute respiratory acidosis secondary to opioid respiratory depression."
  },
  {
    "cat": 2,
    "q": "A 68-year-old male with a 50 pack-year smoking history and severe chronic obstructive pulmonary disease (COPD) undergoes routine arterial blood gas analysis during an elective pre-operative evaluation. He is alert and oriented, sitting comfortably on room air:<table class='lab-table'><thead><tr><th>Parameter</th><th>Patient Value</th><th>Normal Range</th></tr></thead><tbody><tr><td>pH</td><td>7.36</td><td>7.35 – 7.45</td></tr><tr><td>PaCO2</td><td>58 mmHg</td><td>35 – 45 mmHg</td></tr><tr><td>HCO3</td><td>32 mEq/L</td><td>22 – 26 mEq/L</td></tr><tr><td>PaO2</td><td>68 mmHg</td><td>75 – 100 mmHg</td></tr><tr><td>O2 Sat</td><td>92%</td><td>94 – 100%</td></tr></tbody></table><span class='q-stem-bold'>Which of the following acid-base states is demonstrated by these blood gas results?</span>",
    "a": [
      "Acute uncompensated metabolic acidemic state",
      "Acute uncompensated respiratory acidemic state",
      "Fully compensated chronic respiratory acidosis",
      "Partially compensated acute respiratory acidosis",
      "Partially compensated primary metabolic alkalosis"
    ],
    "c": 2,
    "r": "pH is within the normal range (7.36) on the acidic side, with elevated PaCO2 (58 mmHg) buffered by renal bicarbonate retention (HCO3 32 mEq/L), indicating fully compensated chronic respiratory acidosis."
  },
  {
    "cat": 2,
    "q": "A 72-year-old female with chronic bronchitis is admitted to the hospital with a 3-day history of worsening productive cough, fever, and dyspnea. Arterial blood gas analysis on 2 L/min nasal cannula oxygen shows:<table class='lab-table'><thead><tr><th>Parameter</th><th>Patient Value</th><th>Normal Range</th></tr></thead><tbody><tr><td>pH</td><td>7.30</td><td>7.35 – 7.45</td></tr><tr><td>PaCO2</td><td>60 mmHg</td><td>35 – 45 mmHg</td></tr><tr><td>HCO3</td><td>29 mEq/L</td><td>22 – 26 mEq/L</td></tr><tr><td>PaO2</td><td>62 mmHg</td><td>75 – 100 mmHg</td></tr></tbody></table><span class='q-stem-bold'>Based on the standard clinical ABG interpretation algorithm, what is the correct diagnosis?</span>",
    "a": [
      "Acute uncompensated metabolic alkalosis",
      "Acute uncompensated respiratory acidosis",
      "Fully compensated respiratory acidosis",
      "Partially compensated respiratory acidosis",
      "Primary uncompensated metabolic acidosis"
    ],
    "c": 3,
    "r": "Acidemic pH (7.30) + elevated PaCO2 (60 mmHg) + elevated HCO3 (29 mEq/L) indicates partially compensated respiratory acidosis."
  },
  {
    "cat": 2,
    "q": "A 19-year-old female university student presents to the urgent care clinic during final examinations experiencing severe anxiety, palpitations, dizziness, and carpopedal spasms in both hands. Physical examination reveals a respiratory rate of 34 breaths per minute and clear breath sounds. Arterial blood gas reveals:<table class='lab-table'><thead><tr><th>Parameter</th><th>Patient Value</th><th>Normal Range</th></tr></thead><tbody><tr><td>pH</td><td>7.56</td><td>7.35 – 7.45</td></tr><tr><td>PaCO2</td><td>24 mmHg</td><td>35 – 45 mmHg</td></tr><tr><td>HCO3</td><td>23 mEq/L</td><td>22 – 26 mEq/L</td></tr><tr><td>PaO2</td><td>108 mmHg</td><td>75 – 100 mmHg</td></tr></tbody></table><span class='q-stem-bold'>Which of the following acid-base disturbances is present in this student?</span>",
    "a": [
      "Acute uncompensated metabolic alkalosis",
      "Acute uncompensated respiratory alkalosis",
      "Compensated chronic respiratory alkalosis",
      "Partially compensated metabolic acidosis",
      "Partially compensated respiratory alkalosis"
    ],
    "c": 1,
    "r": "Alkalemic pH (7.56) + low PaCO2 (24 mmHg) + normal HCO3 (23 mEq/L) confirms acute uncompensated respiratory alkalosis caused by hyperventilation."
  },
  {
    "cat": 2,
    "q": "A 16-year-old male with type 1 diabetes mellitus presents to the emergency department with nausea, abdominal pain, and deep, rapid Kussmaul respirations. Point-of-care capillary blood glucose is 480 mg/dL. An immediate arterial blood gas reveals:<table class='lab-table'><thead><tr><th>Parameter</th><th>Patient Value</th><th>Normal Range</th></tr></thead><tbody><tr><td>pH</td><td>7.24</td><td>7.35 – 7.45</td></tr><tr><td>PaCO2</td><td>38 mmHg</td><td>35 – 45 mmHg</td></tr><tr><td>HCO3</td><td>14 mEq/L</td><td>22 – 26 mEq/L</td></tr><tr><td>PaO2</td><td>96 mmHg</td><td>75 – 100 mmHg</td></tr></tbody></table><span class='q-stem-bold'>Applying the ROME rule and compensation principles, how is this patient's blood gas profile correctly categorized?</span>",
    "a": [
      "Acute uncompensated metabolic acidosis",
      "Acute uncompensated respiratory acidosis",
      "Compensated chronic respiratory alkalosis",
      "Partially compensated metabolic alkalosis",
      "Partially compensated respiratory acidosis"
    ],
    "c": 0,
    "r": "Low pH (7.24) and low HCO3 (14 mEq/L) with PaCO2 still inside the normal 35–45 mmHg window (38 mmHg) classifies as uncompensated metabolic acidosis."
  },
  {
    "cat": 2,
    "q": "A 58-year-old male is admitted to the medical step-down unit with acute dyspnea. A junior resident considers obtaining a venous blood gas (VBG) instead of an arterial blood gas (ABG) to spare the patient an arterial puncture.<span class='q-stem-bold'>According to standard clinical physiology guidelines, which of the following parameters cannot be reliably evaluated from a venous blood gas sample?</span>",
    "a": [
      "Blood bicarbonate chemical buffer level",
      "Dissolved carbon dioxide tension (PCO2)",
      "Dissolved partial pressure of oxygen (PO2)",
      "Plasma base excess equivalent balance",
      "Systemic blood hydrogen ion acidity (pH)"
    ],
    "c": 2,
    "r": "Venous blood gases reliably assess pH, PCO2, and HCO3, but cannot provide reliable PO2 data due to variable peripheral tissue oxygen extraction."
  },
  {
    "cat": 3,
    "q": "A 64-year-old male is admitted with high fever, chills, pleuritic chest pain, and productive cough with rust-colored sputum. Chest radiograph demonstrates dense right middle lobe alveolar consolidation. The admitting physician orders laboratory biomarkers to differentiate acute bacterial pneumonia from viral infection.<span class='q-stem-bold'>Which of the following acute-phase reactants is recognized as a relatively specific biomarker for bacterial pulmonary infection?</span>",
    "a": [
      "C-reactive protein inflammatory reactant",
      "Erythrocyte sedimentation rate non-specific marker",
      "Fibrin degradation D-dimer breakdown fragment",
      "Procalcitonin acute-phase bacterial reactant",
      "Total peripheral white blood cell count"
    ],
    "c": 3,
    "r": "Whereas WBC, CRP, ESR, and D-dimer are non-specific, procalcitonin (PCT) is relatively specific for bacterial infections."
  },
  {
    "cat": 3,
    "q": "A multidisciplinary critical care research team is evaluating novel inflammatory biomarkers in hospitalized patients with severe community-acquired pneumonia to guide early antimicrobial stewardship.<span class='q-stem-bold'>Beyond procalcitonin, which of the following novel biomarkers listed in the respiratory curriculum is relatively specific for bacterial pulmonary infection?</span>",
    "a": [
      "Alanine aminotransferase hepatic enzyme",
      "Creatine kinase myocardial isoenzyme band",
      "Presepsin and soluble TREM-1 biomarkers",
      "Serum amylase and lipase pancreatic enzymes",
      "Urine vanillylmandelic acid degradation product"
    ],
    "c": 2,
    "r": "Relatively specific bacterial biomarkers in CAP include procalcitonin (PCT), soluble TREM-1 (sTREM-1), presepsin, pro-ADM, copeptin, and pro-ANP."
  },
  {
    "cat": 2,
    "q": "A 34-year-old male scuba diver performs a deep wreck dive to 35 meters for 45 minutes. Due to equipment failure, he surfaces rapidly without completing the planned decompression safety stops. Thirty minutes after reaching the boat, he develops severe, deep aching pain localized in his right shoulder and both knees, worsening with limb motion.<span class='q-stem-bold'>Which of the following clinical manifestations of decompression sickness ('the bends') is this diver experiencing?</span>",
    "a": [
      "Cardiopulmonary chokes decompression syndrome",
      "Cutaneous cutis marmorata microvascular occlusion",
      "Lymphatic decompression localized tissue edema",
      "Musculoskeletal bends deep joint pain",
      "Vestibular staggers labyrinthine embolization"
    ],
    "c": 3,
    "r": "Musculoskeletal decompression sickness ('the bends') manifests with periarticular joint pain (shoulders, knees, elbows) due to nitrogen bubble formation."
  },
  {
    "cat": 2,
    "q": "A commercial diver surfaces precipitously from a deep saturation dive. Within 15 minutes, he develops severe substernal chest discomfort, a persistent hacking cough, tachypnea, profound dyspnea, and marked hypoxemia (pulse oximetry 81% on room air).<span class='q-stem-bold'>Which of the following life-threatening presentations of decompression sickness is this diver manifesting?</span>",
    "a": [
      "Cardiopulmonary decompression syndrome ('the chokes')",
      "Isolated cutaneous marbling ('cutis marmorata')",
      "Musculoskeletal articular bubbles ('the bends')",
      "Spinal cord anterior horn ischemia ('the staggers')",
      "Vestibular labyrinthine disruption ('the swoons')"
    ],
    "c": 0,
    "r": "Cardiopulmonary decompression sickness ('the chokes') results from nitrogen microbubble embolization in the pulmonary vasculature, presenting with substernal pain, cough, and dyspnea."
  },
  {
    "cat": 2,
    "q": "A 27-year-old female diver emerges from an ocean dive and notes intense itching across her trunk, shoulders, and thighs. Physical examination reveals patchy, mottled, violaceous and marbled skin discoloration across her abdomen without mucosal involvement or respiratory distress.<span class='q-stem-bold'>Which of the following cutaneous manifestations of decompression sickness is demonstrated in this patient?</span>",
    "a": [
      "Contact dermatitis secondary to neoprene rubber",
      "Cutis marmorata mottled vascular discoloration",
      "Erythema marginatum rheumatic cutaneous rash",
      "Necrotizing cutaneous bacterial gas crepitus",
      "Urticarial wheals from aquatic venom sting"
    ],
    "c": 1,
    "r": "Cutaneous decompression sickness presents with itching and mottled, marbled violaceous skin discoloration known as cutis marmorata."
  },
  {
    "cat": 3,
    "q": "A 66-year-old male with a history of anterior myocardial infarction and chronic left-sided heart failure reports that he cannot sleep flat in bed because he becomes intensely short of breath within two minutes of lying down. He is forced to sleep propped up on three large pillows or upright in an armchair.<span class='q-stem-bold'>Which of the following clinical terms describes this recumbent dyspnea, and what is its primary hemodynamic mechanism?</span>",
    "a": [
      "Dyspnea on exertion caused by lactic metabolic acidosis",
      "Orthopnea caused by pulmonary vascular blood redistribution",
      "Paroxysmal nocturnal dyspnea caused by sleep apnea",
      "Platypnea caused by right-to-left interatrial shunting",
      "Trepopnea caused by unilateral diaphragmatic paralysis"
    ],
    "c": 1,
    "r": "Orthopnea is dyspnea in the recumbent position caused by gravitational redistribution of venous blood from the lower extremities into the pulmonary circulation in left heart failure."
  },
  {
    "cat": 2,
    "q": "A 48-year-old female with acute severe Guillain-Barré syndrome develops progressive weakness of her intercostal muscles and diaphragm. Serial arterial blood gas monitoring shows a progressive rise in her PaCO2 from 40 mmHg up to 64 mmHg alongside a fall in arterial pH from 7.39 to 7.25.<span class='q-stem-bold'>Which of the following ventilatory disorders is directly responsible for this patient's hypercapnia and respiratory acidosis?</span>",
    "a": [
      "Alveolar hyperventilation causing excessive CO2 loss",
      "Alveolar hypoventilation causing retention of CO2",
      "Anatomical right-to-left pulmonary arteriovenous shunt",
      "Increased dead space ventilation with normal breathing",
      "Primary metabolic base depletion from renal failure"
    ],
    "c": 1,
    "r": "Respiratory acidosis is directly caused by alveolar hypoventilation, which results in CO2 retention (hypercapnia)."
  },
  {
    "cat": 3,
    "q": "A 58-year-old male quarry sandblaster presents with progressive exertional dyspnea and dry cough over the past two years. Physical examination reveals fine, 'Velcro-like' bibasilar inspiratory crackles and mild digital clubbing. High-resolution CT shows peripheral, subpleural reticular opacities and honeycombing. Pulmonary function testing demonstrates:<table class='lab-table'><thead><tr><th>Parameter</th><th>Observed</th><th>Predicted Reference</th></tr></thead><tbody><tr><td>FVC</td><td>2.1 L (52%)</td><td>&gt; 80% predicted</td></tr><tr><td>FEV1</td><td>1.8 L (56%)</td><td>&gt; 80% predicted</td></tr><tr><td>FEV1 / FVC</td><td>86%</td><td>70% – 80%</td></tr><tr><td>Total Lung Capacity (TLC)</td><td>3.2 L (55%)</td><td>&gt; 80% predicted</td></tr></tbody></table><span class='q-stem-bold'>Which of the following pathophysiological mechanisms accounts for the normal or elevated FEV1/FVC ratio characteristically seen in restrictive lung disease?</span>",
    "a": [
      "Accelerated destruction of large airway cartilaginous plates",
      "Dynamic expiratory compression of small peripheral airways",
      "Increased parenchymal radial traction stenting airways open",
      "Loss of chest wall elasticity favoring dynamic hyperinflation",
      "Loss of pulmonary vascular resistance increasing compliance"
    ],
    "c": 2,
    "r": "In interstitial fibrosis, increased elastic recoil exerts strong radial traction on bronchioles, stenting them open during forced expiration and preserving or increasing the FEV1/FVC ratio."
  },
  {
    "cat": 1,
    "q": "A pulmonary physiology fellow analyzes flow-volume loops from patients with various respiratory disorders. She reviews a curve from a patient with idiopathic pulmonary fibrosis displaying a normal peak expiratory flow contour but severely reduced vital capacity and total lung volume.<span class='q-stem-bold'>Which of the following visual configurations characteristically describes the flow-volume loop in parenchymal restrictive lung disease?</span>",
    "a": [
      "A broad, flattened loop with truncated inspiratory limb",
      "A horizontally shifted loop with dynamic expiratory scooping",
      "A miniature, narrowed loop with preserved symmetrical contours",
      "A rectangular box-like contour during both flow phases",
      "An asymmetric loop showing selective plateau of expiration"
    ],
    "c": 2,
    "r": "Restrictive lung disease produces a miniature, tall, narrow ('witch-hat') flow-volume loop shifted to the right with preserved expiratory contours."
  },
  {
    "cat": 3,
    "q": "A 62-year-old male with a 40 pack-year smoking history undergoes a routine preoperative chest radiograph prior to elective inguinal hernia repair. The radiologist identifies an incidental, well-circumscribed, non-calcified 2.8 cm solitary focal mass in the right middle lobe.<span class='q-stem-bold'>According to the clinical rule of thumb taught in the respiratory pathology course, how should this radiographic focal mass be managed?</span>",
    "a": [
      "Assumed to represent active tuberculosis until proven otherwise",
      "Assumed to represent lung cancer until proven otherwise",
      "Considered a benign pulmonary hamartoma requiring no workup",
      "Presumed to be a resolving bacterial pneumonia consolidation",
      "Treated empirically with broad-spectrum macrolide antibiotics"
    ],
    "c": 1,
    "r": "Clinical rule of thumb: a focal mass on an adult chest X-ray is lung cancer until proven otherwise (except in the lung apices, where TB is more likely)."
  },
  {
    "cat": 3,
    "q": "A 59-year-old male smoker presents with a 4-month history of a persistent 'brassy' cough and three episodes of frank hemoptysis (coughing up blood-streaked sputum). Bronchoscopy reveals an exophytic mass arising from the right mainstem bronchus with superficial mucosal erosion.<span class='q-stem-bold'>According to the clinicopathological mechanisms of lung cancer symptoms, which of the following mechanisms directly produces his cough and hemoptysis?</span>",
    "a": [
      "Bronchial mucosal ulceration producing hemoptysis; irritation causing cough",
      "Compression of the phrenic nerve producing hemoptysis and cough",
      "Diaphragmatic invasion producing cough; pleural effusion hemoptysis",
      "Left atrial invasion producing hemoptysis; bronchospasm cough",
      "Pulmonary infarction producing cough; alveolar exudate hemoptysis"
    ],
    "c": 0,
    "r": "In bronchogenic carcinoma, irritation of the bronchial mucosa triggers cough, while ulceration of the bronchial mucosa into blood vessels causes hemoptysis."
  },
  {
    "cat": 3,
    "q": "A 67-year-old male with locally advanced non-small cell lung cancer (NSCLC) undergoes staging chest CT with intravenous contrast. The imaging reveals a 6 cm primary tumor arising from the left upper lobe with direct, contiguous tumor invasion into the descending thoracic aorta and the esophagus.<span class='q-stem-bold'>In the TNM staging system, which of the following tumor categories is assigned to this patient, and what does it signify?</span>",
    "a": [
      "T1 signifying tumor confined to visceral pleura",
      "T2 signifying tumor causing partial lobar atelectasis",
      "T3 signifying tumor invading chest wall or pericardium",
      "T4 signifying direct invasion of adjacent vital organs",
      "Tis signifying localized non-invasive carcinoma in situ"
    ],
    "c": 3,
    "r": "T4 in the TNM staging system signifies direct tumor invasion into adjacent vital mediastinal organs (e.g., aorta, heart, esophagus, trachea, vertebral body)."
  },
  {
    "cat": 3,
    "q": "A 61-year-old female is diagnosed with biopsy-proven lung adenocarcinoma following a percutaneous core needle biopsy of a peripheral left lower lobe mass. A preliminary pathology staging form lists her clinical stage as T2 N1 MX.<span class='q-stem-bold'>What does the 'MX' designation specifically signify in the standardized TNM cancer staging system?</span>",
    "a": [
      "Complete absence of any distant organ metastasis",
      "Histologically confirmed micrometastasis in bone marrow",
      "Metastatic involvement of contralateral mediastinal lymph nodes",
      "Presence of biopsy-proven distant metastatic disease",
      "Unknown metastatic status due to lack of radiological scans"
    ],
    "c": 4,
    "r": "In TNM staging, M0 = no distant metastases, M1 = distant metastases present, and MX = metastatic status unknown/not yet assessed by imaging."
  },
  {
    "cat": 3,
    "q": "During a multidisciplinary thoracic oncology conference, the surgical team reviews management strategies for newly diagnosed patients with non-small cell lung cancer (NSCLC), considering tumor anatomical factors and cardiopulmonary functional fitness.<span class='q-stem-bold'>Approximately what percentage of patients with non-small cell lung cancer are suitable candidates for curative surgical resection in clinical practice?</span>",
    "a": [
      "Approximately 5% of diagnosed patients",
      "Approximately 20% of diagnosed patients",
      "Approximately 50% of diagnosed patients",
      "Approximately 75% of diagnosed patients",
      "Approximately 95% of diagnosed patients"
    ],
    "c": 1,
    "r": "Only about 20% of NSCLC patients present with localized disease and sufficient cardiopulmonary fitness to be suitable candidates for curative surgical resection."
  },
  {
    "cat": 3,
    "q": "A 56-year-old male with essential hypertension presents with a 4-week history of a persistent, annoying, dry non-productive cough that worsens at night. He denies fever, chills, postnasal drip, heartburn, or wheezing. A review of his medications reveals he was started on enalapril 10 mg daily 6 weeks ago.<span class='q-stem-bold'>What is the primary mechanism of this patient's drug-induced cough, and what is the definitive management?</span>",
    "a": [
      "Bradykinin and substance P accumulation; discontinue enalapril",
      "Direct stimulation of medullary opioid receptors; add codeine",
      "Hypersensitivity histamine release; add oral antihistamines",
      "Inhibition of alveolar ENaC channels; administer inhaled steroids",
      "Mucosal fungal colonization; prescribe oral antifungal troches"
    ],
    "c": 0,
    "r": "ACE inhibitors (enalapril) block degradation of bradykinin and substance P, which accumulate and irritate airway cough receptors; management requires discontinuing the ACE inhibitor."
  },
  {
    "cat": 3,
    "q": "A 63-year-old male with a history of chronic bronchitis presents with productive cough producing copious thick, purulent green sputum. He requests a prescription for a strong cough suppressant to stop coughing so he can sleep better.<span class='q-stem-bold'>Why are centrally acting cough suppressants (antitussives) generally contraindicated in patients with productive cough secondary to chronic bronchitis?</span>",
    "a": [
      "They cause dangerous systemic fluid overload and pulmonary edema",
      "They cause harmful sputum retention leading to secondary infection",
      "They induce sudden hypertensive crises via alpha-1 stimulation",
      "They precipitate acute hyperkalemia through aldosterone blockade",
      "They trigger severe paradoxical bronchoconstriction via muscarinic activation"
    ],
    "c": 1,
    "r": "In productive cough (especially chronic bronchitis or bronchiectasis), suppressing the cough reflex leads to harmful sputum retention, airway plugging, and secondary infection."
  },
  {
    "cat": 3,
    "q": "A 23-year-old female presents with a tickling, dry, irritating cough following a resolved upper respiratory tract infection. She finds that swallowing warm syrups and lozenges provides prompt, soothing relief.<span class='q-stem-bold'>Which of the following classes of agents relieves dry cough arising above the larynx by forming a soothing protective coating over the pharyngeal mucosa?</span>",
    "a": [
      "Centrally acting opioid receptor agonists",
      "Inhaled long-acting antimuscarinic bronchodilators",
      "Peripheral demulcents containing glycerol syrups",
      "Peripheral mucolytics that cleave disulfide bonds",
      "Systemic beta-2 adrenoreceptor agonist tablets"
    ],
    "c": 2,
    "r": "Demulcents (soothing syrups, glycerol, lozenges) relieve dry cough arising above the larynx by forming a protective coating over sensory endings in the pharyngeal mucosa."
  },
  {
    "cat": 3,
    "q": "A 31-year-old male develops acute tracheobronchitis with a harsh, painful, non-productive cough originating below the larynx. His physician advises non-pharmacological inhalational therapy to soothe irritated lower airway receptors.<span class='q-stem-bold'>According to the pharmacology curriculum, which of the following interventions provides peripheral antitussive relief for cough arising below the larynx?</span>",
    "a": [
      "Cold dry air hyperventilation through mouth",
      "Dry powdered sodium chloride aerosol delivery",
      "High-dose oral codeine phosphate suspension",
      "Inhaled nebulized hypertonic saline solution",
      "Water aerosol and warm steam inhalation with menthol"
    ],
    "c": 4,
    "r": "For dry cough originating below the larynx, water aerosol / warm steam inhalation (often with aromatic benzoin, menthol, or eucalyptus) provides soothing peripheral antitussive relief."
  },
  {
    "cat": 3,
    "q": "A 48-year-old female presents with an intractable dry nocturnal cough following viral bronchitis that is severely disrupting her sleep. Her physician prescribes codeine as a central antitussive agent.<span class='q-stem-bold'>What is the pharmacological mechanism of codeine in cough suppression, and what property contributes to its clinical antitussive efficacy?</span>",
    "a": [
      "Blocks medullary cough center; efficacy aided by sedating effects",
      "Blocks pulmonary c-fibers; efficacy aided by bronchodilation",
      "Cleaves mucus glycoproteins; efficacy aided by expectoration",
      "Inhibits airway sensory nerves; efficacy aided by local anesthesia",
      "Stimulates beta-2 receptors; efficacy aided by ciliary clearance"
    ],
    "c": 0,
    "r": "Codeine suppresses the medullary cough center in the brainstem, and part of its clinical antitussive efficacy is aided by its sedating effect."
  },
  {
    "cat": 3,
    "q": "A 26-year-old commercial airline pilot presents to an outpatient clinic requesting medication for an annoying, dry, tickling cough following a common cold. He emphasizes that he must remain fully alert and non-sedated during daytime work hours.<span class='q-stem-bold'>Which of the following centrally acting opioid antitussive agents is commonly utilized in over-the-counter preparations because it has fewer side effects and lacks significant sedation?</span>",
    "a": [
      "Codeine phosphate oral elixir",
      "Dextromethorphan oral syrup",
      "Hydrocodone polistirex capsule",
      "Methadone hydrochloride solution",
      "Morphine sulfate oral solution"
    ],
    "c": 1,
    "r": "Dextromethorphan (and pholcodine) suppresses the medullary cough center with fewer side effects and minimal sedation, making it standard in OTC cough preparations."
  },
  {
    "cat": 3,
    "q": "A 34-year-old female with moderate persistent asthma experiences daytime wheezing three times per week and nocturnal awakenings twice a month despite daily use of low-dose inhaled budesonide. Her physician prescribes Seretide for maintenance controller therapy.<span class='q-stem-bold'>Which of the following pharmaceutical combinations comprises the active ingredients of the inhaler Seretide?</span>",
    "a": [
      "Albuterol and ipratropium bromide",
      "Formoterol and budesonide dipropionate",
      "Montelukast and theophylline anhydrous",
      "Salmeterol and fluticasone propionate",
      "Vilanterol and fluticasone furoate"
    ],
    "c": 3,
    "r": "Seretide is a combination inhaler composed of salmeterol (LABA) and fluticasone propionate (ICS)."
  },
  {
    "cat": 3,
    "q": "A 42-year-old male with active, drug-susceptible pulmonary tuberculosis successfully completes the 2-month initial intensive phase of standard four-drug therapy (isoniazid, rifampicin, pyrazinamide, and ethambutol). Follow-up sputum smear microscopy is negative for acid-fast bacilli, and liver enzymes are normal.<span class='q-stem-bold'>What is the standard continuation phase regimen and duration for this patient's treatment?</span>",
    "a": [
      "Continuation phase of 2 months using ethambutol and pyrazinamide",
      "Continuation phase of 4 months using isoniazid and rifampicin",
      "Continuation phase of 6 months using rifampicin and ethambutol",
      "Continuation phase of 9 months using isoniazid and pyrazinamide",
      "Continuation phase of 12 months using streptomycin and isoniazid"
    ],
    "c": 1,
    "r": "Following the 2-month intensive phase (HRZE), the standard continuation phase for drug-susceptible TB is 4 months of isoniazid (INH) and rifampicin."
  },
  {
    "cat": 3,
    "q": "A 38-year-old female receiving standard anti-tuberculosis therapy contacts her physician in great distress, reporting that her urine, sweat, and tears have turned a bright orange-red color, staining her contact lenses. She has no fever, abdominal pain, or jaundice.<span class='q-stem-bold'>Which of the following anti-tuberculosis medications is responsible for this side effect, and what major organ toxicity necessitates monitoring?</span>",
    "a": [
      "Ethambutol, requiring monitoring for visual color blindness",
      "Isoniazid, requiring monitoring for peripheral neuropathy",
      "Pyrazinamide, requiring monitoring for acute hyperuricemic gout",
      "Rifampicin, requiring monitoring for clinical hepatotoxicity",
      "Streptomycin, requiring monitoring for vestibulocochlear damage"
    ],
    "c": 3,
    "r": "Rifampicin produces harmless orange-red discoloration of body fluids, but carries a risk of hepatotoxicity requiring liver function monitoring."
  },
  {
    "cat": 3,
    "q": "A community health director gives a grand rounds presentation on population-level strategies for preventing respiratory infections, including pertussis, measles, and influenza. She displays an epidemiological curve demonstrating that when vaccination coverage reaches high thresholds, disease outbreaks cease entirely, even among unimmunized newborns and immunocompromised patients.<span class='q-stem-bold'>Which of the following epidemiological terms describes this indirect population-level protection resulting from high immunization coverage?</span>",
    "a": [
      "Active polyclonal mucosal hypersensitivity",
      "Cross-reactive antibody-dependent enhancement",
      "Herd immunity or community immunity",
      "Negative predictive serological protection",
      "Passive maternal vertical transplacental immunity"
    ],
    "c": 2,
    "r": "Herd immunity (community immunity) occurs when widespread vaccination deprives pathogens of susceptible hosts, protecting unimmunized individuals in the community."
  },
  {
    "cat": 2,
    "q": "A 27-year-old primigravida at 28 weeks of gestation presents for a routine prenatal checkup. She notes mild, non-bothersome shortness of breath when climbing stairs. She is afebrile with normal physical exam. An arterial blood gas drawn as part of a high-altitude travel assessment reveals:<table class='lab-table'><thead><tr><th>Parameter</th><th>Patient Value</th><th>Normal Range</th></tr></thead><tbody><tr><td>pH</td><td>7.44</td><td>7.35 – 7.45</td></tr><tr><td>PaCO2</td><td>30 mmHg</td><td>35 – 45 mmHg</td></tr><tr><td>HCO3</td><td>20 mEq/L</td><td>22 – 26 mEq/L</td></tr><tr><td>PaO2</td><td>102 mmHg</td><td>75 – 100 mmHg</td></tr></tbody></table><span class='q-stem-bold'>Which of the following pregnancy-related hormones is directly responsible for stimulating central respiratory drive to produce this physiological acid-base state?</span>",
    "a": [
      "Elevated serum human chorionic gonadotropin",
      "Elevated serum human placental lactogen",
      "Elevated systemic circulating estrogen levels",
      "Elevated systemic circulating progesterone levels",
      "Elevated systemic circulating prolactin levels"
    ],
    "c": 3,
    "r": "During pregnancy, elevated progesterone directly stimulates the medullary respiratory center, increasing tidal volume and minute ventilation to cause compensated chronic respiratory alkalosis."
  },
  {
    "cat": 0,
    "q": "A 42-year-old male is struck forcefully across the midface with a blunt object, sustaining severe comminuted fractures of the posterior maxilla and lateral nasal wall. Profuse, high-volume venous hemorrhage ensues from the deep infratemporal region.<span class='q-stem-bold'>Nasal mucosal veins accompanying arterial branches that originate from the maxillary artery drain into which of the following venous plexuses?</span>",
    "a": [
      "Cavernous sinus via superior petrosal tributary",
      "Facial vein directly through anterior angular vein",
      "Internal jugular vein via direct lingual branch",
      "Pterygoid plexus of veins in infratemporal fossa",
      "Superior sagittal sinus via parietal emissary vein"
    ],
    "c": 3,
    "r": "Nasal veins accompanying branches of the maxillary artery drain into the pterygoid venous plexus located within the infratemporal fossa."
  },
  {
    "cat": 0,
    "q": "A 2-year-old boy is brought to the pediatric emergency department with a 2-day history of low-grade fever, rhinorrhea, hoarseness, a harsh 'barking' cough, and audible inspiratory stridor that worsens with crying. He is diagnosed with acute viral laryngotracheobronchitis (croup).<span class='q-stem-bold'>Which of the following anatomical characteristics of the young pediatric airway explains why minor mucosal edema causes critical airway narrowing in this infant?</span>",
    "a": [
      "Cricoid ring is the narrowest non-distensible airway point",
      "Extrathoracic trachea possesses excessive fibrous cartilage rings",
      "Hyoid bone is fused solidly to thyroid alar cartilage",
      "Supraglottic aperture is protected by rigid calcified epiglottis",
      "Vocal cords are angled downward in an inverted funnel shape"
    ],
    "c": 0,
    "r": "In young children under 8 years of age, the narrowest portion of the upper airway is the subglottic space at the complete, non-distensible cricoid cartilage ring."
  }
];

// Past Exam Recall Slot (Ready for past exam recalls)
export const respiratoryFinalPastQuestions: Question[] = [
  {
    "cat": 0,
    "q": "A 45-year-old man undergoes fiberoptic bronchoscopy and transbronchial biopsy. Histological examination of progressively distal segments of the conducting and respiratory airways is performed. Which of the following structural components exhibits an increasing relative concentration and functional predominance distally along the bronchial tree toward the terminal and respiratory bronchioles?",
    "a": [
      "Cartilage plates and hyaline rings",
      "Seromucinous submucosal glands",
      "Pseudostratified ciliated columnar cells",
      "Elastic fibers in the lamina propria and inter-alveolar septa",
      "Stratified squamous non-keratinized epithelium"
    ],
    "c": 3,
    "r": "As one proceeds distally along the bronchial tree from the trachea down to the respiratory bronchioles and alveolar ducts, cartilage plates and submucosal glands diminish and completely disappear by the level of bronchioles (<1 mm diameter). In contrast, elastic fibers become progressively more prominent and concentrated, forming a continuous elastic network that provides the essential passive recoil force necessary for quiet expiration and tethering to prevent dynamic airway collapse during forced exhalation.\n\nHigh-Yield Pearl: Elastic fibers increase in relative proportion distally along the respiratory tree, providing essential elastic recoil and radial traction on smaller airways."
  },
  {
    "cat": 3,
    "q": "A 16-year-old high school track athlete presents with a 3-month history of nocturnal coughing twice weekly and daytime dyspnea requiring an albuterol inhaler three to four days per week. Spirometry reveals an FEV1 of 82% predicted that increases by 14% following inhaled bronchodilator. According to clinical asthma guidelines, which of the following is the most appropriate next step in maintenance pharmacotherapy?",
    "a": [
      "Add a daily oral leukotriene receptor antagonist and discontinue albuterol",
      "Initiate daily low-dose inhaled corticosteroid (ICS) maintenance therapy",
      "Prescribe daily high-dose oral prednisone for six months",
      "Initiate long-acting beta-2 agonist (LABA) monotherapy without corticosteroids",
      "Continue as-needed short-acting beta-2 agonist (SABA) alone without daily controller"
    ],
    "c": 1,
    "r": "The patient meets criteria for mild persistent asthma (symptoms >2 days/week but not daily, nighttime awakenings 3–4 times/month, normal or near-normal baseline FEV1). Current USMLE and GINA guidelines establish that low-dose inhaled corticosteroids (ICS) are the preferred first-line daily controller and anti-inflammatory maintenance therapy. ICS suppresses chronic eosinophilic mucosal inflammation, prevents airway remodeling, and dramatically reduces exacerbation risk.\n\nHigh-Yield Pearl: Low-dose inhaled corticosteroids (ICS) are the foundation of controller maintenance therapy for persistent asthma."
  },
  {
    "cat": 2,
    "q": "A 32-year-old neurosurgery intensive care patient is being mechanically ventilated following closed head trauma. Arterial blood gas analysis demonstrates PaCO2 of 52 mmHg and PaO2 of 90 mmHg. The primary driver of central chemoreceptor firing that stimulates the respiratory rhythm generators in the medulla is mediated by which of the following mechanisms?",
    "a": [
      "Direct sensitivity of medullary chemoreceptors to arterial PO2 below 60 mmHg",
      "Direct movement of peripheral arterial hydrogen ions (H+) across the blood-brain barrier",
      "Diffusion of molecular CO2 across the blood-brain barrier generating H+ within cerebrospinal fluid",
      "Direct stimulation by circulating serum bicarbonate (HCO3⁻) ions across tight endothelial junctions",
      "Afferent impulses transmitted exclusively via the glossopharyngeal nerve (CN IX)"
    ],
    "c": 2,
    "r": "Central chemoreceptors located on the ventrolateral surface of the medulla oblongata are exquisitely sensitive to the hydrogen ion (H+) concentration of the brain extracellular fluid and CSF. However, charged arterial H+ and HCO3⁻ ions cannot readily penetrate the lipophilic blood-brain barrier (BBB). Molecular CO2, being lipid-soluble, diffuses freely across the BBB into the CSF, where carbonic anhydrase catalyzes CO2 + H2O ⇌ H2CO3 ⇌ H+ + HCO3⁻. The generated H+ directly stimulates the central chemoreceptors, driving ventilation.\n\nHigh-Yield Pearl: Central chemoreceptors respond directly to CSF H+ generated by the rapid diffusion of arterial CO2 across the blood-brain barrier."
  },
  {
    "cat": 1,
    "q": "During quiet physiological breathing, an inspiratory ramp signal generated by dorsal respiratory group neurons increases steadily for approximately 2 seconds, producing smooth diaphragmatic contraction, followed by abrupt cessation for 3 seconds to permit passive elastic expiration. Which of the following brainstem structures is primarily responsible for transmitting signals that switch off this inspiratory ramp?",
    "a": [
      "Pneumotaxic center located in the rostral dorsal pons (nucleus parabrachialis)",
      "Apneustic center in the caudal pons stimulating prolonged inspiration",
      "Ventral respiratory group (Bötzinger complex) regulating forced active expiration only",
      "Substantia nigra in the midbrain modulating motor tone",
      "Inferior olivary nucleus in the caudal medulla"
    ],
    "c": 0,
    "r": "The pneumotaxic center (nucleus parabrachialis) located dorsally in the upper rostral pons transmits continuous inhibitory impulses to the dorsal respiratory group (DRG) inspiratory center. Its primary function is to terminate the inspiratory ramp signal ('switch-off' mechanism), thereby limiting the duration of inspiration and controlling the respiratory rate. Strong pneumotaxic signaling shortens inspiration, accelerating breathing, whereas its ablation prolongs inspiration (causing apneustic breathing).\n\nHigh-Yield Pearl: The pneumotaxic center in the rostral pons terminates the inspiratory ramp, limiting tidal volume and regulating respiratory frequency."
  },
  {
    "cat": 1,
    "q": "A 62-year-old chronic heavy smoker presents with progressive exertional dyspnea and productive morning cough. Physical examination reveals an increased anteroposterior chest diameter ('barrel chest') and distant heart sounds. Pulmonary function testing demonstrates increased total lung capacity (TLC) and increased functional residual capacity (FRC). The increase in FRC is directly attributable to which of the following mechanical alterations?",
    "a": [
      "Increased pulmonary compliance resulting from loss of alveolar elastance, allowing outward chest wall recoil to dominate",
      "Excessive inward elastic recoil of fibrotic alveolar septa overcoming chest wall expansion",
      "Increased radial traction exerted by alveolar attachments on small conducting bronchioles",
      "Direct hypercontraction of the internal intercostal muscles during resting end-expiration",
      "Decreased chest wall compliance with severe inward thoracic cage collapse"
    ],
    "c": 0,
    "r": "Functional Residual Capacity (FRC) represents the resting equilibrium volume where the inward elastic recoil of the lungs precisely balances the outward springing recoil of the chest wall. In emphysema, cigarette smoke and inflammatory elastases destroy alveolar walls and elastin fibers, markedly decreasing inward lung elastic recoil (increasing pulmonary compliance). Consequently, the unopposed outward springing force of the chest wall establishes equilibrium at a significantly higher lung volume, manifesting as increased FRC and a barrel chest.\n\nHigh-Yield Pearl: Loss of alveolar elastin reduces inward lung recoil, allowing outward thoracic springing forces to expand FRC and produce a barrel chest."
  },
  {
    "cat": 3,
    "q": "A 38-year-old poultry farmer in Southeast Asia develops sudden onset high fever, severe dyspnea, nonproductive cough, and rapidly progressive hypoxemic respiratory failure requiring mechanical ventilation. Bronchoalveolar lavage identifies Avian Influenza A (H5N1). The primary pathophysiological driver of diffuse alveolar epithelial necrosis, pulmonary edema, and multiorgan failure in this infection is:",
    "a": [
      "Selective tropism for upper respiratory ciliated epithelium with negligible lower tract replication",
      "Massive hypercytokinemia ('cytokine storm') characterized by excessive TNF-α, IL-6, and IP-10 production",
      "Immediate clearance by neutralizing secretory IgA antibodies without cellular tissue injury",
      "Exclusive bacterial exotoxin release causing complement-independent septic shock",
      "Autoantibody-mediated destruction of pulmonary surfactant apoproteins SP-A and SP-D"
    ],
    "c": 1,
    "r": "Avian influenza A (H5N1) preferentially binds alpha-2,3 sialic acid galactose receptors found densely on human lower respiratory tract alveolar epithelial cells and terminal bronchioles. Viral replication triggers intense, dysregulated hypercytokinemia—a 'cytokine storm'—characterized by explosive elevation of TNF-alpha, IL-6, IL-1beta, and chemokine IP-10 (CXCL10). This overwhelming hyperinflammation induces severe diffuse alveolar damage, endothelial breakdown, capillary leak, ARDS, and systemic shock.\n\nHigh-Yield Pearl: H5N1 avian influenza targets lower alveolar alpha-2,3 sialic receptors and provokes a lethal hypercytokinemic 'cytokine storm'."
  },
  {
    "cat": 0,
    "q": "During the fourth week of human embryonic development, the respiratory diverticulum (lung bud) branches out from the ventral wall of the caudal primordial foregut. Which of the following morphogens is directly responsible for inducing the expression of the TBX4 transcription factor in the surrounding splanchnic mesoderm, which specifies lower respiratory organ identity?",
    "a": [
      "Retinoic acid (RA)",
      "Sonic hedgehog (SHH) inhibitor",
      "Epidermal growth factor (EGF)",
      "Vascular endothelial growth factor (VEGF)",
      "Thyroid transcription factor-2 (TTF-2)"
    ],
    "c": 0,
    "r": "Respiratory organogenesis begins in the 4th week with formation of the laryngotracheal diverticulum from the ventral foregut endoderm. An increase in retinoic acid (RA) produced by the adjacent visceral/splanchnic mesoderm induces the expression of the transcription factor TBX4 in the endoderm of the gut tube. TBX4 initiates respiratory tract differentiation, directing the formation and continued branching morphogenesis of the trachea, bronchial tree, and lungs.\n\nHigh-Yield Pearl: Mesodermal retinoic acid upregulates TBX4 expression to specify the respiratory diverticulum from the ventral foregut."
  },
  {
    "cat": 0,
    "q": "A neonate born at 39 weeks of gestation presents shortly after birth with excessive oral salivation, choking, and coughing during his first feeding. A nasogastric tube cannot be advanced beyond 10 cm from the nares. A chest radiograph demonstrates the tube coiled in a blind-ending proximal esophageal pouch and a prominent air-filled stomach bubble. Defective separation of which of the following embryonic structures is responsible for this condition?",
    "a": [
      "Failure of lateral tracheoesophageal folds to fuse at the midline to form the tracheoesophageal septum",
      "Failure of neural crest cells to migrate into the myenteric plexus of the distal esophagus",
      "Defective recanalization of the embryonic solid-stage duodenal lumen",
      "Incomplete closure of the pleuroperitoneal membranes resulting in diaphragmatic herniation",
      "Agenesis of the third and fourth pharyngeal pouches"
    ],
    "c": 0,
    "r": "The patient presents with the most common subtype of tracheoesophageal fistula (Type C: proximal esophageal atresia with distal tracheoesophageal fistula, ~85% of cases). During the 4th and 5th weeks of gestation, two longitudinal tracheoesophageal ridges/folds grow inward from the lateral walls of the foregut and fuse in the midline to form the tracheoesophageal septum, partitioning the dorsal esophagus from the ventral trachea. Defective fusion leads to atresia and fistulous communication, allowing swallowed saliva to accumulate and inspired air to enter the stomach.\n\nHigh-Yield Pearl: Defective midline fusion of lateral tracheoesophageal ridges leads to esophageal atresia and distal tracheoesophageal fistula."
  },
  {
    "cat": 3,
    "q": "A 68-year-old retired shipyard worker presents with progressive right-sided pleuritic chest pain, dyspnea, and a 10-kg weight loss. Contrast-enhanced CT of the chest demonstrates extensive nodular thickening of the parietal and visceral pleura encasing the right lung hemithorax, with associated pleural effusion. Thoracoscopic biopsy reveals malignant cells that stain positive for calretinin and cytokeratin 5/6, but negative for CEA. Which of the following statements regarding this condition is most accurate?",
    "a": [
      "Smoking synergistically increases the risk of this specific pleural malignancy by over 50-fold",
      "Heavily exposed asbestos workers carry approximately a 10% lifetime risk of developing malignant mesothelioma after a long latency period",
      "It originates exclusively from bronchial neuroendocrine Kulchitsky cells",
      "Most patients achieve surgical cure with complete pleural decortication",
      "Pleural plaques represent direct obligate premalignant precursors that transform into malignant mesothelioma"
    ],
    "c": 1,
    "r": "Malignant mesothelioma is an aggressive neoplasm of mesothelial cells lining the pleura, strongly associated with occupational asbestos exposure (shipyards, roofing, insulation, pipefitting). In heavily exposed asbestos workers, the lifetime risk approaches 10%, characterized by a prolonged latency of 25–45 years. Mesotheliomas characteristically express calretinin, WT-1, and cytokeratin 5/6 (differentiating them from adenocarcinoma, which is CEA and claudin-4 positive).\n\nHigh-Yield Pearl: Mesothelioma has a ~10% lifetime risk in heavily exposed asbestos workers with a 25–45 year latency; tobacco does NOT increase mesothelioma risk."
  },
  {
    "cat": 3,
    "q": "A 20-year-old university student living in a dormitory presents with a 2-week history of a persistent dry hacking cough, low-grade fever, malaise, and mild headache. Chest auscultation reveals scattered fine crackles, but physical findings are notably mild compared to her chest radiograph, which shows prominent bilateral patchy interstitial reticulonodular infiltrates. High-titer cold agglutinins are identified in her serum. Which of the following antimicrobial regimens represents the first-line empirical oral therapy?",
    "a": [
      "Oral clarithromycin or azithromycin (macrolide)",
      "High-dose oral amoxicillin",
      "Intravenous vancomycin",
      "Oral cephalexin (first-generation cephalosporin)",
      "Intravenous amphotericin B"
    ],
    "c": 0,
    "r": "The presentation is classic for 'walking pneumonia' (atypical pneumonia) caused by Mycoplasma pneumoniae, common in young adults and crowded settings (college dorms, military recruits). Hallmark findings include clinical symptoms milder than radiological infiltrates and elevated cold agglutinins (IgM antibodies against RBC I-antigen). Because Mycoplasma lacks a peptidoglycan cell wall, beta-lactam antibiotics (penicillins and cephalosporins) are completely ineffective. First-line treatment is a macrolide (clarithromycin, azithromycin) or doxycycline, which inhibit bacterial protein synthesis.\n\nHigh-Yield Pearl: Mycoplasma pneumoniae lacks a cell wall, rendering beta-lactams useless; macrolides (clarithromycin, azithromycin) are first-line therapy."
  },
  {
    "cat": 2,
    "q": "In an upright resting individual, regional differences in ventilation and perfusion create variations in the ventilation-perfusion (V/Q) ratio throughout the lung. Alveoli that receive normal ventilation but zero or minimal pulmonary capillary blood flow contribute directly to which of the following physiological compartments?",
    "a": [
      "Physiological dead space (prominent at the lung apex)",
      "Right-to-left anatomical shunt (prominent at the lung base)",
      "Diffusion-limited carbon monoxide transfer",
      "Normal alveolar capillary reserve volume",
      "Total airway viscous resistance"
    ],
    "c": 0,
    "r": "Physiological dead space consists of anatomical dead space (conducting airways) plus alveolar dead space. Alveolar dead space refers to alveoli that are ventilated but underperfused or unperfused (V/Q approaches infinity). In an upright person, gravity significantly reduces pulmonary arterial hydrostatic pressure at the lung apices (Zone 1), where alveolar pressure can exceed pulmonary capillary pressure. This creates maximal V/Q mismatch and physiologic dead space at the lung apex.\n\nHigh-Yield Pearl: Alveoli that are ventilated but unperfused represent alveolar dead space, with V/Q approaching infinity, most pronounced at the lung apices."
  },
  {
    "cat": 2,
    "q": "A 54-year-old man with severe COPD travels to a mountain resort at an elevation of 3,200 meters. Within hours, his arterial PaO2 drops from 72 mmHg to 55 mmHg, triggering an immediate compensatory increase in minute ventilation. Which of the following sensory structures is primarily responsible for detecting this decline in PaO2 and initiating the reflex ventilatory response?",
    "a": [
      "Glomus cells of the carotid bodies, transmitting afferents via the glossopharyngeal nerve (CN IX)",
      "Central chemoreceptors located on the ventral medullary surface",
      "Aortic baroreceptors transmitting afferents via the vagus nerve (CN X)",
      "Pulmonary stretch receptors located in smooth muscle of conducting bronchi",
      "Juxtacapillary (J) receptors in the alveolar interstitium"
    ],
    "c": 0,
    "r": "Peripheral chemoreceptors, predominantly the carotid bodies situated at the bifurcation of the common carotid arteries, contain dopaminergic Type I glomus cells that sense drops in arterial PO2 (specifically PaO2 < 60 mmHg), increases in PaCO2, and decreases in arterial pH. Afferent sensory impulses are transmitted via the carotid sinus nerve (nerve of Hering, branch of glossopharyngeal nerve CN IX) to the nucleus tractus solitarius (NTS) in the medulla, driving hyperventilation.\n\nHigh-Yield Pearl: Carotid body glomus cells sense arterial PaO2 < 60 mmHg and signal via CN IX to stimulate the medullary respiratory center."
  },
  {
    "cat": 1,
    "q": "A 65-year-old patient with chronic respiratory failure is noted to have dark bluish discoloration of his lips, tongue, and nail beds on physical examination. Quantitative spectrophotometry is performed. Clinical cyanosis typically becomes visually evident when the absolute concentration of reduced (deoxygenated) hemoglobin in the subpapillary capillary plexus exceeds which of the following thresholds?",
    "a": [
      "1.0 g/dL",
      "2.5 g/dL",
      "5.0 g/dL",
      "8.5 g/dL",
      "12.0 g/dL"
    ],
    "c": 2,
    "r": "Clinical cyanosis depends on the absolute concentration of reduced (deoxygenated) hemoglobin in the capillary blood, rather than the relative oxygen saturation percentage. Visual cyanosis manifests when reduced hemoglobin exceeds approximately 5.0 g/dL (50 g/L). For this reason, severely anemic patients (e.g., Hb 6 g/dL) rarely show cyanosis even in profound hypoxia because they cannot easily generate 5 g/dL of reduced Hb, whereas polycythemic patients develop cyanosis at much milder hypoxia.\n\nHigh-Yield Pearl: Clinical cyanosis requires an absolute concentration of >5 g/dL of deoxygenated (reduced) hemoglobin in capillary blood."
  },
  {
    "cat": 0,
    "q": "A 7-year-old boy presents with continuous tearing (epiphora) and recurrent localized conjunctivitis of the right eye. An anatomical obstruction of the nasolacrimal drainage pathway is suspected. Under normal physiological conditions, the nasolacrimal duct drains tears directly into which of the following nasal structures?",
    "a": [
      "Superior nasal meatus",
      "Middle nasal meatus via the hiatus semilunaris",
      "Inferior nasal meatus beneath the inferior concha",
      "Sphenoethmoidal recess above the superior concha",
      "Frontal recess into the ethmoidal infundibulum"
    ],
    "c": 2,
    "r": "The lateral wall of the nasal cavity features three bony conchae (turbinates) overlying corresponding meatuses. The nasolacrimal duct drains excess tears from the lacrimal sac into the inferior nasal meatus (beneath the inferior nasal concha), protected by the mucosal valve of Hasner. Failure of this valve to open at birth causes congenital nasolacrimal duct obstruction and persistent epiphora.\n\nHigh-Yield Pearl: The nasolacrimal duct opens into the inferior nasal meatus; the maxillary, frontal, and anterior ethmoidal sinuses drain into the middle meatus."
  },
  {
    "cat": 3,
    "q": "A 64-year-old thin man presents with severe exertional dyspnea. He sits leaning forward with his hands on his knees, breathing through pursed lips. He has a minimal, nonproductive morning cough and no peripheral edema. Chest radiograph reveals hyperlucent lung fields, flattened diaphragms, and a narrow cardiac silhouette. Arterial blood gas shows a PaO2 of 68 mmHg and a PaCO2 of 38 mmHg. Which of the following clinical phenotypes best characterizes this presentation?",
    "a": [
      "Chronic bronchitis ('blue bloater') with prominent right ventricular cor pulmonale",
      "Emphysematous predominant COPD ('pink puffer') maintaining near-normal blood gases through hyperventilation",
      "Bronchiectasis with cystic dilation and copious foul-smelling purulent sputum",
      "Idiopathic pulmonary fibrosis with bibasilar end-inspiratory Velcro crackles",
      "Severe acute extrinsic asthma with mucous plugging"
    ],
    "c": 1,
    "r": "The 'pink puffer' phenotype represents emphysema-predominant COPD. Pathologically, alveolar destruction reduces gas-exchanging surface area and elastic recoil. Patients hyperventilate to compensate, maintaining relatively normal PaCO2 and mild hypoxemia ('pink') at the expense of high work of breathing, leading to marked weight loss, cachexia, tachypnea, and breathing through pursed lips to increase backpressure and prevent distal airway collapse.\n\nHigh-Yield Pearl: 'Pink puffers' (emphysema) hyperventilate with pursed lips, exhibiting dyspnea, weight loss, and near-normal blood gases until terminal stages."
  },
  {
    "cat": 1,
    "q": "During a forced vital capacity (FVC) spirometry maneuver, a patient is instructed to expire as forcefully and rapidly as possible from total lung capacity down to residual volume. Which of the following groups of muscles contract actively to drive this forced expiratory effort?",
    "a": [
      "Diaphragm and external intercostal muscles",
      "Anterior abdominal wall muscles (rectus abdominis, obliques, transversus) and internal intercostal muscles",
      "Sternocleidomastoid and scalene muscles",
      "Pectoralis minor and serratus anterior muscles",
      "Alveolar myofibroblasts and bronchial smooth muscle"
    ],
    "c": 1,
    "r": "Quiet expiration is completely passive, driven by the elastic recoil of the lungs and chest wall. In contrast, active or forced expiration requires powerful contraction of the anterior abdominal wall muscles (rectus abdominis, external and internal obliques, transversus abdominis), which push abdominal viscera upward against the relaxed diaphragm, and the internal intercostal muscles (interosseous portion), which pull the ribs downward and inward.\n\nHigh-Yield Pearl: Forced active expiration relies on anterior abdominal wall muscles and internal intercostal muscles."
  },
  {
    "cat": 0,
    "q": "During inspiration, chest wall expansion increases thoracic cavity volume along three anatomical axes: anteroposterior, transverse, and vertical. The elevation and outward rotation of the middle ribs (ribs 7 through 10) around an anteroposterior axis primarily increases which of the following thoracic dimensions?",
    "a": [
      "Transverse (lateral) thoracic diameter via the 'bucket-handle' movement",
      "Anteroposterior diameter via the 'pump-handle' movement of the upper ribs",
      "Vertical thoracic dimension via inferior descent of the central tendon of the diaphragm",
      "Superior thoracic aperture diameter via clavicular elevation",
      "Mediastinal depth via retrosternal depression"
    ],
    "c": 0,
    "r": "Rib movements during inspiration are classically divided into: 1) 'Pump-handle' movement of the upper ribs (ribs 2–6), where ribs rotate around a transverse axis, elevating the sternum and increasing the anteroposterior diameter; and 2) 'Bucket-handle' movement of the lower and middle ribs (ribs 7–10), where ribs rotate around an anteroposterior axis through their costovertebral and costosternal joints, elevating the rib shafts laterally and increasing the transverse (lateral) thoracic diameter.\n\nHigh-Yield Pearl: The 'bucket-handle' movement of ribs 7–10 expands the transverse thoracic diameter; the 'pump-handle' of ribs 2–6 expands the AP diameter."
  },
  {
    "cat": 0,
    "q": "A 35-year-old trauma victim with severe panfacial fractures and upper airway hemorrhage cannot be intubated or ventilated via face mask. An emergency surgical infraglottic airway must be established immediately at the bedside. To minimize bleeding and safely enter the subglottic laryngeal lumen, the incision should be made through which of the following anatomical structures?",
    "a": [
      "Cricothyroid membrane located between the thyroid cartilage and cricoid cartilage",
      "Thyrohyoid membrane situated between the hyoid bone and thyroid cartilage",
      "Anterior tracheal rings between the 2nd and 4th tracheal rings through the thyroid isthmus",
      "Median glossoepiglottic fold within the vallecula",
      "Cricotracheal ligament inferior to the first tracheal ring"
    ],
    "c": 0,
    "r": "Emergency cricothyroidotomy (cricothyroid puncture) provides rapid infraglottic airway access in a 'cannot intubate, cannot oxygenate' scenario. The cricothyroid membrane is palpable as a soft depression in the midline of the neck between the inferior border of the thyroid cartilage and the superior border of the cricoid cartilage. It is covered only by skin, superficial fascia, and thin cervical fascia, lacking large overlying vascular plexuses or the thyroid gland.\n\nHigh-Yield Pearl: Emergency surgical airway puncture is performed through the cricothyroid membrane, located between thyroid and cricoid cartilages."
  },
  {
    "cat": 0,
    "q": "A 70-year-old man with poorly controlled hypertension presents to the emergency department with profuse bleeding from both nares and blood dripping down the posterior pharynx. Anterior nasal packing fails to arrest the hemorrhage, and a posterior pack is placed. The vessel most frequently responsible for such severe, intractable posterior epistaxis is the terminal branch of which of the following arteries?",
    "a": [
      "Sphenopalatine artery, a terminal branch of the maxillary artery",
      "Anterior ethmoidal artery arising from the ophthalmic artery",
      "Superior labial artery arising from the facial artery",
      "Ascending pharyngeal artery arising from the internal carotid artery",
      "Greater palatine artery entering through the incisive canal"
    ],
    "c": 0,
    "r": "Epistaxis is divided into anterior (90%, Kiesselbach's plexus on the anterior septum) and posterior (10%). Severe, profuse posterior epistaxis typically arises from the sphenopalatine artery, the terminal branch of the maxillary artery (external carotid system), which enters the nasal cavity through the sphenopalatine foramen behind the middle concha. Posterior bleeds cannot be controlled with simple anterior packing and often require endoscopic clipping, embolization, or posterior balloon tamponade.\n\nHigh-Yield Pearl: Severe posterior epistaxis arises predominantly from the sphenopalatine artery, the terminal branch of the maxillary artery."
  },
  {
    "cat": 0,
    "q": "A 58-year-old woman with a large right-sided parapneumonic pleural effusion is scheduled for diagnostic and therapeutic thoracentesis. The needle is introduced at the 8th intercostal space along the midscapular line during end-expiration. To avoid lacerating the major intercostal neurovascular bundle, the needle must be inserted immediately adjacent to which of the following anatomical landmarks?",
    "a": [
      "Superior border of the lower rib (walking over the top of the rib)",
      "Inferior border of the upper rib within the subcostal groove",
      "Midpoint of the intercostal space midway between the ribs",
      "Posterior angle of the upper rib near the sympathetic chain",
      "Directly beneath the lower costal cartilage"
    ],
    "c": 0,
    "r": "Along each intercostal space, the main intercostal neurovascular bundle runs from superior to inferior as Vein, Artery, Nerve ('VAN') sheltered in the costal groove along the inferior border of the upper rib. To avoid puncturing or lacerating these vessels (which can lead to catastrophic intrapleural hemorrhage or hemothorax), thoracentesis needles and chest tubes are always inserted immediately above the superior border of the lower rib ('walking over the rib').\n\nHigh-Yield Pearl: Thoracentesis needles must be placed along the superior border of the lower rib to avoid the intercostal VAN bundle in the subcostal groove."
  },
  {
    "cat": 2,
    "q": "A 31-year-old woman presents to the obstetric triage unit in active labor at 39 weeks of gestation. Review of her medical record confirms that she previously delivered twin infants at 37 weeks of gestation, a singleton at 35 weeks, and had one spontaneous abortion at 10 weeks. By standard obstetric definitions, she is classified as:",
    "a": [
      "Multiparous, having completed two or more pregnancies beyond 20 or 24 weeks of gestation",
      "Nulliparous, because she has not yet delivered at 40 weeks",
      "Primiparous, because only one delivery occurred at full term",
      "Grand multiparous, having delivered five or more viable fetuses",
      "Nulligravid, with no prior registered singleton deliveries"
    ],
    "c": 0,
    "r": "In obstetrics, parity refers to the number of pregnancies that have reached viability (defined conventionally as ≥20 or ≥24 weeks of gestation, regardless of whether the infant was born alive or stillborn). A multiparous woman (multipara) has had two or more pregnancies delivered beyond 20–24 weeks. This patient has had two prior deliveries beyond viability (twins at 37 weeks = 1 delivery event; singleton at 35 weeks = 1 delivery event), making her multiparous.\n\nHigh-Yield Pearl: A multipara is a woman who has delivered two or more pregnancies beyond the threshold of fetal viability (20–24 weeks)."
  },
  {
    "cat": 2,
    "q": "A 34-year-old pregnant woman presents for her first prenatal visit. Her obstetric history reveals: she delivered a child at 39 weeks (alive and healthy), delivered twins at 34 weeks (both alive and healthy), had an ectopic pregnancy terminated at 7 weeks, and had a miscarriage at 11 weeks. Which of the following correctly denotes her GTPAL classification?",
    "a": [
      "G5, T1, P1, A2, L3",
      "G4, T1, P2, A2, L3",
      "G5, T2, P1, A1, L2",
      "G4, T2, P1, A2, L2",
      "G5, T1, P2, A1, L3"
    ],
    "c": 0,
    "r": "GTPAL notation: G (Gravidity) = total number of pregnancies = current pregnancy (1) + term birth (1) + preterm twins (1) + ectopic (1) + miscarriage (1) = 5 pregnancies (G5). T (Term births ≥37 weeks) = 1 (at 39 weeks). P (Preterm births 20–36 weeks) = 1 (the twin delivery counts as 1 preterm birth event). A (Abortions/losses <20 weeks) = 2 (ectopic at 7 weeks + miscarriage at 11 weeks). L (Living children) = 3 (1 from term delivery + 2 from twin delivery). Thus: G5, T1, P1, A2, L3.\n\nHigh-Yield Pearl: GTPAL counts total pregnancies (G), term deliveries (T), preterm delivery events (P), losses <20 weeks (A), and total living children (L)."
  },
  {
    "cat": 2,
    "q": "A 26-year-old primigravida at 28 weeks of gestation undergoes routine arterial blood gas testing during evaluation for mild dyspnea of pregnancy. The results reveal: pH 7.44, PaCO2 30 mmHg, PaO2 102 mmHg, and serum HCO3⁻ 20 mEq/L. Which of the following hormonal mechanisms is responsible for this maternal physiological respiratory alkalosis?",
    "a": [
      "High circulating progesterone directly stimulating the medullary respiratory center and increasing minute ventilation",
      "Human chorionic gonadotropin (hCG) suppressing renal bicarbonate reabsorption in the proximal convoluted tubule",
      "Elevated human placental lactogen causing severe lactic acidosis that drives compensatory hyperventilation",
      "Increased estrogen inhibiting surfactant synthesis and decreasing total pulmonary compliance",
      "Elevated prolactin causing diaphragmatic spasm"
    ],
    "c": 0,
    "r": "During pregnancy, elevated levels of progesterone directly stimulate the central respiratory drive in the medulla oblongata and increase the sensitivity of chemoreceptors to carbon dioxide. This produces a physiological increase in minute ventilation (primarily via increased tidal volume, up to 40–50%), blowing off CO2 and establishing a chronic mild respiratory alkalosis (PaCO2 27–32 mmHg, pH 7.40–7.45). The kidneys compensate by excreting bicarbonate, lowering plasma HCO3⁻ to 18–22 mEq/L, which facilitates maternal-fetal CO2 transfer.\n\nHigh-Yield Pearl: Progesterone stimulates medullary respiratory centers in pregnancy, producing a physiological compensated respiratory alkalosis (PaCO2 ~30 mmHg)."
  },
  {
    "cat": 2,
    "q": "An experimental laboratory model simulates a completely occluded branch of the pulmonary arterial circulation where blood flow to a group of alveoli drops to zero (perfusion Q = 0) while ventilation (V) is maintained with humidified room air. When the alveolar gas achieves dynamic equilibrium, what will be the expected partial pressures of oxygen (PAO2) and carbon dioxide (PACO2) within these occluded alveoli?",
    "a": [
      "PAO2 = 149 mmHg and PACO2 = 0 mmHg",
      "PAO2 = 100 mmHg and PACO2 = 40 mmHg",
      "PAO2 = 40 mmHg and PACO2 = 45 mmHg",
      "PAO2 = 0 mmHg and PACO2 = 100 mmHg",
      "PAO2 = 160 mmHg and PACO2 = 5 mmHg"
    ],
    "c": 0,
    "r": "When an alveolus is ventilated with humidified room air but receives zero capillary perfusion (V/Q = infinity, pure alveolar dead space), no gas exchange occurs between alveolar air and pulmonary blood. Consequently, no oxygen is extracted and no carbon dioxide is added. The alveolar gas equilibrates exactly with humidified inspired tracheal air: PO2 = (760 - 47) × 0.21 ≈ 149 mmHg, and PCO2 = 0 mmHg.\n\nHigh-Yield Pearl: In an unperfused, ventilated alveolus (V/Q = ∞), gas composition equals inspired humidified air: PAO2 = 149 mmHg, PACO2 = 0 mmHg."
  },
  {
    "cat": 3,
    "q": "A 29-year-old woman with severe preeclampsia delivers a healthy term infant. Immediately following placental expulsion, she develops profuse postpartum hemorrhage due to uterine atony. Which of the following uterotonic medications is strictly contraindicated in this patient due to its potent vasoconstrictive mechanism?",
    "a": [
      "Ergometrine (methylergonovine)",
      "Oxytocin infusion",
      "Misoprostol (prostaglandin E1 analogue)",
      "Tranexamic acid",
      "Carboprost tromethamine (prostaglandin F2-alpha)"
    ],
    "c": 0,
    "r": "Ergometrine (methylergonovine) is an ergot alkaloid that induces sustained tetanic uterine contractions and potent systemic alpha-adrenergic vasoconstriction. It is strictly contraindicated in women with gestational hypertension, preeclampsia, eclampsia, or cardiovascular disease because it can precipitate hypertensive crisis, intracerebral hemorrhage, or myocardial infarction. Oxytocin is the first-line uterotonic in hypertensive patients.\n\nHigh-Yield Pearl: Ergometrine (methylergonovine) is strictly contraindicated in preeclampsia and hypertension due to risk of fatal hypertensive crises."
  },
  {
    "cat": 1,
    "q": "A 48-year-old man in septic shock secondary to severe Pseudomonas aeruginosa ventilator-associated pneumonia develops bleeding from vascular puncture sites and petechiae. Coagulation studies demonstrate: Prothrombin Time (PT) 24 seconds (normal 11–13.5 s), Activated Partial Thromboplastin Time (APTT) 62 seconds (normal 25–35 s), Platelet count 45,000/µL, and elevated D-dimer. Which of the following pathophysiological mechanisms accounts for the prolongation of both PT and APTT?",
    "a": [
      "Widespread consumptive coagulopathy with exhaustion of factors in both the extrinsic and intrinsic pathways",
      "Isolated hereditary deficiency of clotting factor VIII (Hemophilia A)",
      "Selective autoimmune destruction of tissue factor pathway inhibitor (TFPI)",
      "Direct pharmacological inhibition of thrombin by circulating heparin-like mucopolysaccharides",
      "Isolated vitamin C deficiency causing impaired collagen cross-linking"
    ],
    "c": 0,
    "r": "The patient presents with Disseminated Intravascular Coagulation (DIC) triggered by severe sepsis. Bacterial lipopolysaccharide (endotoxin) and proinflammatory cytokines (TNF-alpha, IL-1) cause widespread systemic endothelial injury and uncontrolled tissue factor exposure. This initiates massive intravascular thrombin generation and microvascular fibrin thrombi, followed by progressive consumption and depletion of platelets, fibrinogen, and coagulation factors across both the extrinsic (reflected by prolonged PT) and intrinsic (reflected by prolonged APTT) cascades.\n\nHigh-Yield Pearl: DIC secondary to sepsis causes consumptive depletion of platelets and clotting factors, resulting in prolonged PT and APTT with elevated D-dimer."
  },
  {
    "cat": 2,
    "q": "A 28-year-old woman presents for prenatal care. She reports regular 28-day menstrual cycles. The first day of her last normal menstrual period (LMP) was April 10, 2026. Applying Naegele's rule, what is her calculated expected date of delivery (EDD)?",
    "a": [
      "January 17, 2027",
      "January 10, 2027",
      "December 17, 2026",
      "January 24, 2027",
      "February 17, 2027"
    ],
    "c": 0,
    "r": "Naegele's rule calculates the estimated date of delivery (EDD) for a woman with regular 28-day cycles by adding 7 days to the first day of the last menstrual period (LMP), subtracting 3 months, and adding 1 year: LMP: April 10, 2026. Add 7 days → April 17, 2026. Subtract 3 months (April → March → February → January) → January 17. Add 1 year → January 17, 2027.\n\nHigh-Yield Pearl: Naegele's rule: EDD = (LMP + 7 days) - 3 months + 1 year."
  },
  {
    "cat": 0,
    "q": "A newborn infant exhibits respiratory distress immediately after delivery. A chest radiograph reveals a multicystic mass in the left lower hemithorax with mediastinal shift to the right. Histological analysis of the resected mass demonstrates multiple uniformly small cysts (ranging from 0.5 to 2.0 cm in diameter) lined by simple cuboidal to columnar ciliated epithelium, with structures closely resembling dilated terminal and respiratory bronchioles lacking cartilage plates. This presentation is most characteristic of which congenital anomaly?",
    "a": [
      "Congenital Pulmonary Airway Malformation (CPAM) Type 2",
      "CPAM Type 1 with large solitary cyst (>2 cm)",
      "CPAM Type 3 featuring microcystic solid adenomatoid architecture",
      "Bronchogenic cyst arising from the primitive ventral foregut",
      "Extralobar pulmonary sequestration with systemic arterial supply"
    ],
    "c": 0,
    "r": "Congenital Pulmonary Airway Malformation (CPAM, formerly CCAM) is classified according to Stocker's histological criteria: Type 1 (50–65%) consists of large cysts (>2 cm, often solitary) lined by pseudostratified ciliated columnar epithelium. Type 2 (20–25%) consists of multiple uniformly small cysts (0.5–2 cm) resembling dilated bronchioles lined by cuboidal to ciliated columnar epithelium, frequently associated with other congenital anomalies (cardiac, renal). Type 3 (8%) is microcystic or solid. Type 4 involves peripheral alveolar cysts.\n\nHigh-Yield Pearl: CPAM Type 2 is characterized by multiple small cysts (0.5–2 cm) lined by cuboidal/columnar epithelium resembling dilated bronchioles."
  },
  {
    "cat": 3,
    "q": "A 4-year-old boy presents with failure to thrive, foul-smelling greasy bulky stools, recurrent bouts of Pseudomonas bronchitis, and chronic wheezing. Physical examination reveals bilateral inspiratory crackles and prominent digital clubbing with loss of the normal Lovibond angle (>180°). Which of the following genetic alterations is the underlying cause of this child's condition?",
    "a": [
      "Autosomal recessive mutation in the CFTR gene (commonly Delta-F508) causing misfolded chloride channels",
      "Autosomal dominant defect in the COL1A1 gene causing brittle connective tissue",
      "X-linked mutation in the dystrophin gene causing progressive myofiber atrophy",
      "Defect in dynein arms of ciliated cells resulting in primary ciliary dyskinesia",
      "Heterozygous mutation in the alpha-1 antitrypsin (SERPINA1) gene"
    ],
    "c": 0,
    "r": "Cystic fibrosis (CF) is an autosomal recessive disorder caused by mutations in the CFTR gene on chromosome 7, most commonly a 3-base-pair deletion of phenylalanine at position 508 (Delta-F508). This produces misfolded CFTR protein that is degraded in the proteasome. Absent apical chloride channels impair water secretion, leading to hyperviscous mucus in the lungs (causing recurrent Pseudomonas infections, bronchiectasis, and digital clubbing) and exocrine pancreatic insufficiency (causing steatorrhea and failure to thrive).\n\nHigh-Yield Pearl: Cystic fibrosis is caused by CFTR mutations (Delta-F508), presenting with recurrent Pseudomonas infections, bronchiectasis, steatorrhea, and digital clubbing."
  },
  {
    "cat": 3,
    "q": "A 59-year-old male smoker presents with severe bilateral aching pain and swelling over both shins and wrists. Radiographs of the distal radius, ulna, and tibia demonstrate bilateral, symmetrical subperiosteal new bone formation (periostitis). Physical examination reveals prominent digital clubbing. A chest radiograph demonstrates a 4-cm peripheral pulmonary mass. This syndrome (hypertrophic pulmonary osteoarthropathy) is most frequently associated with which histological type of primary lung cancer?",
    "a": [
      "Pulmonary adenocarcinoma",
      "Small cell neuroendocrine carcinoma",
      "Benign bronchial hamartoma",
      "Typical carcinoid tumor of the mainstem bronchus",
      "Tracheal adenoid cystic carcinoma"
    ],
    "c": 0,
    "r": "Hypertrophic pulmonary osteoarthropathy (HPOA / Pierre Marie-Bamberger syndrome) is characterized by the triad of digital clubbing, periostitis of distal long bones (producing severe symmetrical bone pain and swelling), and arthritis. It is a paraneoplastic manifestation most commonly associated with primary non-small cell lung cancer, particularly pulmonary adenocarcinoma. Pathophysiology involves tumor or megakaryocyte release of platelet-derived growth factor (PDGF) and VEGF, stimulating periosteal angiogenesis and osteogenesis.\n\nHigh-Yield Pearl: Hypertrophic pulmonary osteoarthropathy (clubbing + symmetrical periostitis) is strongly associated with pulmonary adenocarcinoma."
  },
  {
    "cat": 3,
    "q": "A 2-month-old infant with meconium ileus at birth and recurrent sinopulmonary symptoms is evaluated for cystic fibrosis. Which of the following laboratory techniques serves as the gold-standard diagnostic modality to confirm or exclude this diagnosis?",
    "a": [
      "Quantitative pilocarpine iontophoresis sweat chloride test",
      "Serum IgE level and skin prick testing",
      "Serum alpha-1 antitrypsin quantitative phenotype assay",
      "Bronchoalveolar lavage bacterial colony count alone",
      "Measurement of stool alpha-1 antitrypsin clearance"
    ],
    "c": 0,
    "r": "The quantitative pilocarpine iontophoresis sweat test is the gold-standard diagnostic test for cystic fibrosis. Pilocarpine is applied to the skin and electrically driven via iontophoresis to induce sweating. Sweat is collected and chloride concentration is measured. A sweat chloride level ≥60 mmol/L on two separate occasions confirms the diagnosis of cystic fibrosis, reflecting defective CFTR-mediated chloride reabsorption in sweat ducts.\n\nHigh-Yield Pearl: The quantitative pilocarpine iontophoresis sweat test is the definitive gold standard for CF; sweat chloride ≥60 mmol/L confirms diagnosis."
  },
  {
    "cat": 0,
    "q": "A 6-month-old infant presents with biphasic stridor, episodic cyanosis, and recurrent severe lower respiratory infections. Bronchoscopy reveals severe narrowing of the distal trachea. Histological examination shows complete circumferential cartilaginous rings encircling the trachea without the normal posterior membranous trachealis muscle. This anomaly is designated as:",
    "a": [
      "Congenital tracheal stenosis with complete tracheal rings",
      "Laryngomalacia with floppy omega-shaped epiglottis",
      "Tracheomalacia with excessive collapse of normal C-shaped rings",
      "Type IV laryngeal cleft with posterior communication",
      "Vascular ring with double aortic arch"
    ],
    "c": 0,
    "r": "Normal trachea contains C-shaped hyaline cartilage rings connected posteriorly by the membranous tracheal wall and trachealis smooth muscle. Congenital tracheal stenosis is a rare anomaly characterized by complete circumferential cartilaginous 'O-shaped' rings lacking the posterior membranous segment. Because the cartilaginous rings are completely rigid and do not grow proportionally, they cause fixed, severe distal airway obstruction and biphasic stridor.\n\nHigh-Yield Pearl: Congenital tracheal stenosis is characterized by complete, rigid circumferential cartilaginous rings lacking a posterior membranous wall."
  },
  {
    "cat": 0,
    "q": "At birth, a full-term infant possesses approximately 20 to 50 million primitive terminal alveoli. By age 8, the total number of mature alveoli expands to approximately 300 to 400 million. Postnatal lung growth and expansion of the gas-exchange surface area are primarily achieved by which of the following biological processes?",
    "a": [
      "Septation and progressive multiplication of true alveoli",
      "Dilation and hypertrophy of pre-existing embryonic bronchioles without new alveolar formation",
      "Proliferation of cartilage rings into the terminal conducting zone",
      "Conversion of type I pneumocytes into goblet cells",
      "Thickening of the capillary basement membrane"
    ],
    "c": 0,
    "r": "The majority of human alveoli form postnatally (the alveolar stage extends from ~36 weeks gestation through approximately 8 years of age). Lung growth during early childhood does not occur merely by enlargement of existing spaces; rather, it is driven by secondary septation—the formation of secondary alveolar septa from existing terminal sacs—which multiplies alveolar numbers roughly ten-fold (from ~30–50 million to 300–400 million).\n\nHigh-Yield Pearl: Postnatal lung development is characterized by secondary septation and marked multiplication of alveolar numbers until ~8 years of age."
  },
  {
    "cat": 2,
    "q": "A 12-year-old girl with cystic fibrosis visits the pulmonary clinic for her annual comprehensive health evaluation. She has maintained stable lung function but has shown poor weight gain over the past six months. According to clinical consensus guidelines, routine annual screening for cystic fibrosis-related diabetes (CFRD) in all patients aged 10 and older is best performed using which of the following tests?",
    "a": [
      "Two-hour 75-gram oral glucose tolerance test (OGTT)",
      "Hemoglobin A1c measurement alone",
      "Random capillary fingerstick glucose check",
      "Fasting serum c-peptide concentration alone",
      "Urinary ketone dipstick evaluation"
    ],
    "c": 0,
    "r": "Cystic fibrosis-related diabetes (CFRD) is the most common comorbidity in CF, affecting up to 50% of adults. It arises from progressive fibrotic destruction of islet architecture by thick pancreatic secretions. The gold standard for CFRD screening recommended by the Cystic Fibrosis Foundation and ADA is an annual 2-hour 75g oral glucose tolerance test (OGTT) starting at age 10. Hemoglobin A1c is notoriously insensitive in CF due to increased red cell turnover and chronic hemolysis.\n\nHigh-Yield Pearl: The 2-hour 75g oral glucose tolerance test (OGTT) is the gold standard annual screen for cystic fibrosis-related diabetes (CFRD)."
  },
  {
    "cat": 3,
    "q": "A 52-year-old woman admitted with severe acute pancreatitis develops sudden respiratory failure with profound hypoxemia (PaO2/FiO2 ratio = 110) and diffuse bilateral alveolar infiltrates on chest radiograph. She is intubated and mechanically ventilated. Open lung biopsy obtained during the acute exudative phase would most characteristically demonstrate which of the following histological hallmarks?",
    "a": [
      "Eosinophilic hyaline membranes lining distended alveolar ducts, composed of fibrin-rich exudate and necrotic epithelial cells",
      "Caseating granulomas with Langhans multinucleated giant cells",
      "Dense peribronchial non-caseating sarcoid granulomas",
      "Extensive intra-alveolar accumulation of surfactant-rich Periodic acid-Schiff (PAS) positive lipoproteinaceous material",
      "Uniform intra-alveolar sheets of malignant squamous cells with keratin pearls"
    ],
    "c": 0,
    "r": "The patient has severe Acute Respiratory Distress Syndrome (ARDS) secondary to acute pancreatitis. The histopathological correlate of ARDS is Diffuse Alveolar Damage (DAD). In the acute exudative phase (days 1–7), inflammatory cytokines cause endothelial and alveolar epithelial necrosis, capillary leak, and intra-alveolar exudation of fibrin and plasma proteins. These precipitate with necrotic epithelial debris to form bright pink, waxy hyaline membranes lining the alveolar ducts.\n\nHigh-Yield Pearl: The acute exudative phase of ARDS (diffuse alveolar damage) is histologically characterized by pink, fibrin-rich hyaline membranes."
  },
  {
    "cat": 3,
    "q": "During acute bacterial bronchopneumonia, activated neutrophils undergo a specialized form of cell death termed NETosis, creating extracellular web-like structures that trap and neutralize extracellular microbes. Biochemical analysis of these neutrophil extracellular traps (NETs) reveals that their primary structural backbone is composed of:",
    "a": [
      "Extruded nuclear chromatin DNA complexed with citrullinated histones and antimicrobial granule proteins (elastase, myeloperoxidase)",
      "Polymerized actin and tubulin microfilaments",
      "Insoluble amyloid beta fibrillar polymers",
      "Aggregated immunoglobulin G light chains",
      "Hyaluronic acid and chondroitin sulfate glycosaminoglycans"
    ],
    "c": 0,
    "r": "Neutrophil Extracellular Traps (NETs) are networks of extracellular fibers released by dying neutrophils during NETosis. The core backbone is composed of unwound nuclear chromatin (double-stranded DNA) and citrullinated histones (modified by peptidylarginine deiminase 4 [PAD4]), decorated with antimicrobial granular proteins including neutrophil elastase, myeloperoxidase, and cathelicidins. NETs trap and kill bacteria but also cause bystander endothelial damage in sepsis and ARDS.\n\nHigh-Yield Pearl: Neutrophil extracellular traps (NETs) consist of extruded chromatin DNA and histones embedded with granular proteases and myeloperoxidase."
  },
  {
    "cat": 3,
    "q": "A 60-year-old man develops severe lobar pneumonia with high fever, chills, and purulent sputum. Within hours of pathogen recognition by alveolar macrophage Toll-like receptors (TLRs), which triad of primary acute proinflammatory cytokines is released to orchestrate systemic fever, hepatic acute-phase reactant synthesis, and massive neutrophil chemotaxis?",
    "a": [
      "Interleukin-1 (IL-1), Interleukin-8 (IL-8), and Tumor Necrosis Factor-alpha (TNF-α)",
      "Interleukin-4 (IL-4), Interleukin-5 (IL-5), and Interleukin-13 (IL-13)",
      "Interleukin-10 (IL-10), Transforming Growth Factor-beta (TGF-β), and IL-35",
      "Interferon-gamma (IFN-γ), IL-12, and IL-2",
      "Erythropoietin, Thrombopoietin, and Granulocyte colony-stimulating factor (G-CSF)"
    ],
    "c": 0,
    "r": "Upon encountering pathogen-associated molecular patterns (such as bacterial LPS or peptidoglycan), alveolar macrophages secrete the primary proinflammatory triad: TNF-alpha and IL-1 (which induce hypothalamic fever, endothelial selectin expression, and hepatic CRP/fibrinogen synthesis) and IL-8 (CXCL8, the premier neutrophil chemotactic cytokine that recruits neutrophils from pulmonary capillaries into infected alveoli).\n\nHigh-Yield Pearl: The primary acute proinflammatory cytokine triad consists of IL-1 (fever/activation), TNF-α (endothelial adhesion/shock), and IL-8 (neutrophil chemotaxis)."
  },
  {
    "cat": 3,
    "q": "A 66-year-old heavy smoker presents with confusion, lethargy, and anorexia. Chest radiograph reveals a large central perihilar mass causing bronchial obstruction and post-obstructive atelectasis. Laboratory evaluation shows: serum sodium 116 mEq/L, serum osmolality 242 mOsm/kg, urine sodium 48 mEq/L, and urine osmolality 480 mOsm/kg. The patient is euvolemic on physical exam. Biopsy shows small, round, dark blue cells with scant cytoplasm, granular 'salt-and-pepper' chromatin, and frequent mitoses. What is the diagnosis?",
    "a": [
      "Small cell lung carcinoma causing paraneoplastic Syndrome of Inappropriate Antidiuretic Hormone (SIADH)",
      "Squamous cell carcinoma causing paraneoplastic hypercalcemia via PTHrP",
      "Pulmonary adenocarcinoma producing ectopic thyroid-stimulating hormone (TSH)",
      "Renal cell carcinoma metastatic to the lung producing renin",
      "Large cell neuroendocrine carcinoma causing primary hypoaldosteronism"
    ],
    "c": 0,
    "r": "Small cell lung carcinoma (SCLC) is a highly aggressive high-grade neuroendocrine tumor strongly linked to tobacco smoking, characteristically arising centrally near major bronchi. Histology shows small round-to-oval blue cells with scant cytoplasm, nuclear molding, and fine chromatin. Up to 10–15% of patients develop SIADH due to ectopic production of arginine vasopressin (ADH), resulting in euvolemic hyponatremia with inappropriately concentrated urine (>100 mOsm/kg) and elevated urine sodium (>40 mEq/L).\n\nHigh-Yield Pearl: Small cell lung carcinoma commonly produces paraneoplastic SIADH, presenting with euvolemic hyponatremia and concentrated urine."
  },
  {
    "cat": 3,
    "q": "Epidemiological analysis of primary bronchogenic malignancies across both males and females, including both smokers and lifelong non-smokers, reveals that the single most common histological subtype of lung cancer in the United States and globally is:",
    "a": [
      "Adenocarcinoma of the lung",
      "Squamous cell carcinoma",
      "Small cell neuroendocrine carcinoma",
      "Large cell undifferentiated carcinoma",
      "Bronchial carcinoid tumor"
    ],
    "c": 0,
    "r": "Adenocarcinoma is the most common histological subtype of primary lung cancer overall in the general population, accounting for ~40–50% of all cases. It is the most common subtype in women, the most common subtype in non-smokers, and has now surpassed squamous cell carcinoma as the most frequent subtype even in cigarette smokers. It typically presents as a peripheral solitary nodule or mass, often staining positive for TTF-1 and napsin A.\n\nHigh-Yield Pearl: Adenocarcinoma is the most common histological subtype of lung cancer overall, as well as in women and non-smokers."
  },
  {
    "cat": 3,
    "q": "A 56-year-old male coal miner with a 15-year history of severe seropositive Rheumatoid Arthritis presents for routine follow-up. Chest CT reveals multiple well-defined bilateral peripheral pulmonary nodules ranging from 1 to 4 cm in diameter, superimposed on background reticulonodular opacities in the upper lung zones. Histopathology of a lung nodule shows central fibrinoid necrosis surrounded by a palisade of histiocytes and multinucleated giant cells embedded with anthracotic coal pigment. This presentation is designated as:",
    "a": [
      "Caplan syndrome (rheumatoid pneumoconiosis)",
      "Löfgren syndrome in acute sarcoidosis",
      "Goodpasture syndrome with anti-GBM antibodies",
      "Churg-Strauss syndrome (EGPA)",
      "Hamman-Rich syndrome (acute interstitial pneumonia)"
    ],
    "c": 0,
    "r": "Caplan syndrome (rheumatoid pneumoconiosis) is the development of multiple large, well-circumscribed necrotizing rheumatoid nodules in the lungs of patients with rheumatoid arthritis who have occupational pneumoconiosis (most commonly coal workers' pneumoconiosis, but also silicosis or asbestosis). Histologically, the nodules resemble subcutaneous rheumatoid nodules with central necrobiosis surrounded by palisading epithelioid histiocytes, marked by embedded anthracotic or mineral dust.\n\nHigh-Yield Pearl: Caplan syndrome is the combination of rheumatoid arthritis with pneumoconiosis, manifesting as necrobiotic pulmonary nodules."
  },
  {
    "cat": 3,
    "q": "A 44-year-old dairy farmer presents with recurrent episodes of fever, chills, nonproductive cough, and severe dyspnea occurring 4 to 8 hours after entering a poorly ventilated barn filled with moldy hay. Bronchoalveolar lavage reveals marked lymphocytosis (>50%) with a decreased CD4+/CD8+ ratio (<1.0). Serum precipitin antibodies against Saccharopolyspora rectivirgula are detected. The acute and subacute immunological mechanisms driving this condition (extrinsic allergic alveolitis / farmer's lung) consist of:",
    "a": [
      "Combined Type III (immune-complex mediated) and Type IV (cell-mediated delayed) hypersensitivity reactions",
      "Type I (IgE-mediated immediate) hypersensitivity alone",
      "Type II (antibody-dependent cytotoxic) hypersensitivity directed against basement membrane laminin",
      "Isolated complement deficiency of factor H",
      "Direct toxic chemical saponification of alveolar membranes"
    ],
    "c": 0,
    "r": "Hypersensitivity pneumonitis (extrinsic allergic alveolitis) is an immunologically induced lung disease caused by repeated inhalation of environmental antigens (e.g., thermophilic actinomycetes in moldy hay causing 'farmer's lung', avian antigens in 'bird fancier's lung'). Pathophysiologically, acute episodes are mediated by Type III hypersensitivity (antigen-antibody immune complexes and complement activation, triggering neutrophil influx), whereas subacute and chronic progressive disease is driven by Type IV hypersensitivity (CD8+ T-cell and macrophage recruitment leading to poorly formed, non-caseating granulomas).\n\nHigh-Yield Pearl: Hypersensitivity pneumonitis is mediated by combined Type III (immune-complex) and Type IV (delayed cell-mediated) hypersensitivity."
  },
  {
    "cat": 3,
    "q": "A 58-year-old chronic heavy smoker meets the clinical criteria for chronic bronchitis (productive cough for at least 3 consecutive months in 2 consecutive years). A bronchial mucosal biopsy is obtained. Which of the following pathological features would be considered UNEXPECTED and NOT characteristic of chronic bronchitis?",
    "a": [
      "Hyperplasia and proliferation of mucosal ciliated epithelial cells",
      "Marked hypertrophy and hyperplasia of submucosal seromucinous glands (increased Reid index >0.5)",
      "Squamous metaplasia of pseudostratified ciliated columnar epithelium",
      "Goblet cell hyperplasia with luminal mucopurulent plugging",
      "Mononuclear inflammatory cell infiltrate in the bronchial lamina propria"
    ],
    "c": 0,
    "r": "Chronic bronchitis is defined pathologically by hypertrophy of mucus-secreting glands (Reid index >0.5), goblet cell hyperplasia, squamous metaplasia, inflammatory infiltrates, and progressive loss/paralysis of cilia (ciliary impairment and squamous metaplasia). Ciliated cells are actively damaged, paralyzed, and replaced by mucus-secreting goblet cells and squamous cells; they NEVER undergo hyperplasia. Ciliary loss impairs the mucociliary escalator, predisposing to recurrent bacterial infections.\n\nHigh-Yield Pearl: Chronic bronchitis is marked by squamous metaplasia and ciliary loss; ciliary hyperplasia does NOT occur."
  },
  {
    "cat": 3,
    "q": "A 62-year-old man with a 40 pack-year smoking history undergoes pulmonary function testing. The spirometry demonstrates: FEV1 48% of predicted, FVC 85% of predicted, FEV1/FVC ratio 0.56, Total Lung Capacity (TLC) 124% of predicted, and DLCO 42% of predicted. These findings definitively establish that emphysema is fundamentally classified as:",
    "a": [
      "An obstructive lung disease characterized by airflow limitation and dynamic hyperinflation",
      "An intrinsic restrictive lung disease characterized by reduced lung volume and increased recoil",
      "An extrinsic restrictive chest wall disorder with normal intrinsic lung parenchyma",
      "A pure central neuromuscular ventilatory failure with normal spirometry",
      "A primary pulmonary vascular disease without ventilatory impairment"
    ],
    "c": 0,
    "r": "Emphysema is a classic obstructive lung disease. By definition, obstructive defects are characterized by a reduced FEV1/FVC ratio (<0.70 or <70%), caused by irreversible narrowing of small airways and loss of alveolar tethering that leads to expiratory airflow obstruction. Total Lung Capacity (TLC) is increased or normal (hyperinflation), distinguishing it unequivocally from restrictive disorders where TLC is reduced (<80%) and FEV1/FVC is normal or increased (>0.75–0.80).\n\nHigh-Yield Pearl: Emphysema is an obstructive lung disease characterized by a decreased FEV1/FVC ratio (<0.70) and elevated TLC."
  },
  {
    "cat": 3,
    "q": "A 14-year-old boy presents to the urgent care clinic during spring with acute wheezing, dyspnea, and nonproductive cough after playing in a grassy meadow. He has a history of seasonal allergic rhinitis and atopic dermatitis. Which of the following inhaled environmental antigens represents the most common trigger of allergen-induced extrinsic (atopic) asthma in this clinical setting?",
    "a": [
      "Airborne floral and grass pollens",
      "Cold dry winter air during exercise",
      "Bacterial endotoxin from inhaled gram-negative rods",
      "Ingested aspirin and nonsteroidal anti-inflammatory drugs",
      "Occupational isocyanate chemical fumes"
    ],
    "c": 0,
    "r": "Extrinsic (atopic) asthma is a classical Type I IgE-mediated hypersensitivity reaction triggered by environmental allergens. Common inhaled triggers include airborne tree, grass, and weed pollens (responsible for seasonal spring/summer exacerbations), animal dander, dust mite feces (Dermatophagoides pteronyssinus), and fungal spores. In a child with the 'atopic triad' (eczema, allergic rhinitis, asthma) reacting in a spring meadow, grass/floral pollen is the classic culprit.\n\nHigh-Yield Pearl: Extrinsic (atopic) asthma is a Type I IgE-mediated response most commonly triggered by pollens, pet dander, and house dust mites."
  },
  {
    "cat": 3,
    "q": "In medical microbiology and public health epidemiology, an important distinction is made between the terms 'infectious' and 'contagious'. Which of the following axioms correctly defines the fundamental relationship between these two epidemiological concepts?",
    "a": [
      "All contagious diseases are infectious, but not all infectious diseases are contagious",
      "All infectious diseases are contagious, but not all contagious diseases are infectious",
      "The terms are completely synonymous and interchangeable in all clinical contexts",
      "Contagious diseases require an intermediate insect vector, whereas infectious diseases do not",
      "Infectious diseases are transmitted exclusively via genetic inheritance"
    ],
    "c": 0,
    "r": "An infectious disease is any illness caused by a microorganism (bacterium, virus, fungus, parasite) invading host tissue. A contagious (communicable) disease is a specific subset of infectious diseases that can be transmitted directly or indirectly from one person to another (e.g., measles, influenza, tuberculosis). Therefore, all contagious diseases are infectious. However, many infectious diseases are NOT contagious (e.g., Legionella acquired from water aerosols, tetanus from soil spores, Lyme disease from ticks, or histoplasmosis from bat guano; none of these spread person-to-person).\n\nHigh-Yield Pearl: All contagious diseases are infectious, but not all infectious diseases are contagious (e.g., tetanus and legionellosis are infectious but non-contagious)."
  },
  {
    "cat": 3,
    "q": "A 52-year-old healthy executive presents for a routine preventive health examination. He has no chronic medical conditions and had mild chickenpox during early childhood. In accordance with current CDC and ACIP immunization guidelines, which of the following recommendations regarding the Recombinant Zoster Vaccine (RZV, Shingrix) is most appropriate?",
    "a": [
      "Administer a 2-dose series of recombinant zoster vaccine separated by 2 to 6 months",
      "Administer a single dose of live attenuated zoster vaccine (Zostavax)",
      "Withhold vaccination until age 65 because healthy adults under 65 derive zero efficacy",
      "Check varicella-zoster virus (VZV) IgG titers before deciding whether vaccination is indicated",
      "Vaccinate only if the patient has experienced at least one prior documented episode of herpes zoster"
    ],
    "c": 0,
    "r": "The ACIP recommends the Recombinant Zoster Vaccine (RZV, Shingrix) for all immunocompetent adults aged 50 years and older, regardless of prior herpes zoster episodes or prior receipt of the older live-attenuated vaccine. It is also recommended for immunocompromised adults aged 19 and older. RZV is administered as a 2-dose intramuscular series separated by 2 to 6 months, demonstrating >90% efficacy in preventing shingles and postherpetic neuralgia.\n\nHigh-Yield Pearl: Recombinant zoster vaccine (RZV) is administered as a 2-dose series (months 0 and 2–6) for all adults aged ≥50 and immunocompromised adults ≥19."
  },
  {
    "cat": 3,
    "q": "During a public health campaign against a newly emerged respiratory viral pathogen with a basic reproduction number (R0) of 4.0, epidemiologists calculate the critical vaccination coverage required to halt endemic community transmission. Which of the following statements best describes the epidemiological principle of 'herd immunity'?",
    "a": [
      "When a sufficient proportion of a population is immune, transmission chains are broken, indirectly protecting unvaccinated and susceptible individuals",
      "Immunization of one individual induces passive transmissible antibodies in their household contacts through aerosolized breath droplets",
      "Herd immunity requires 100% of the entire human population to receive active vaccination",
      "Pathogenic virulence factors spontaneously mutate to non-pathogenic commensal states in vaccinated hosts",
      "Unvaccinated individuals become genetically immune through epigenetic environmental modifications"
    ],
    "c": 0,
    "r": "Herd immunity (community immunity) occurs when a sufficient percentage of a population becomes immune to an infectious agent (through vaccination or prior natural infection), reducing the likelihood that an infected individual will encounter a susceptible host. The herd immunity threshold is calculated as 1 - (1/R0). For R0 = 4, the threshold is 1 - (1/4) = 75%. This interrupts community transmission chains, providing indirect protection to vulnerable, unvaccinated, or immunosuppressed individuals.\n\nHigh-Yield Pearl: Herd immunity threshold = 1 - (1/R0); sufficient population immunity halts transmission chains and indirectly protects susceptible individuals."
  },
  {
    "cat": 3,
    "q": "A 22-year-old woman with a history of severe peanut allergy accidentally ingests a peanut-containing cookie. Within five minutes, cross-linking of surface-bound IgE on tissue mast cells triggers explosive degranulation. In addition to histamine, which group of newly synthesized and preformed mast cell mediators drives prolonged bronchoconstriction, vascular permeability, and mucosal edema?",
    "a": [
      "Tryptase/chymase proteases, Prostaglandin D2 (PGD2), and Cysteinyl Leukotrienes (LTC4, LTD4, LTE4)",
      "Complement proteins C3a, C5a, and membrane attack complex C5b-9",
      "Interferon-alpha, Interferon-beta, and Interleukin-2",
      "Endothelin-1, Angiotensin II, and Vasopressin",
      "Thromboxane A2 and prostacyclin (PGI2) in equal proportions"
    ],
    "c": 0,
    "r": "Mast cell activation upon IgE receptor cross-linking (Fc-epsilon-RI) causes two phases of mediator release: 1) Immediate degranulation of preformed mediators, including histamine, heparin, and neutral proteases (tryptase and chymase; serum tryptase is a clinical biomarker for anaphylaxis); and 2) Rapid de novo lipid mediator synthesis via the arachidonic acid cascade, releasing Prostaglandin D2 (PGD2, causing bronchospasm and vasodilation) and Cysteinyl Leukotrienes (LTC4, LTD4, LTE4, which are 1,000 times more potent than histamine in causing sustained bronchoconstriction and microvascular permeability).\n\nHigh-Yield Pearl: Mast cell activation releases preformed proteases (tryptase) and synthesizes PGD2 and cysteinyl leukotrienes (LTC4, LTD4, LTE4) causing severe bronchospasm."
  },
  {
    "cat": 3,
    "q": "A 42-year-old man with severe refractory eosinophilic asthma experiences frequent disabling exacerbations despite high-dose inhaled fluticasone and salmeterol. Sputum analysis reveals abundant Charcot-Leyden crystals and eosinophils (>8%). His physician considers targeted monoclonal antibody therapy (e.g., mepolizumab or benralizumab). Which of the following cytokines is the essential driver of eosinophil maturation, terminal differentiation in bone marrow, activation, and tissue survival?",
    "a": [
      "Interleukin-5 (IL-5)",
      "Interleukin-4 (IL-4)",
      "Interleukin-13 (IL-13)",
      "Interleukin-2 (IL-2)",
      "Interleukin-17 (IL-17)"
    ],
    "c": 0,
    "r": "Interleukin-5 (IL-5) is produced by Th2 helper T cells and type 2 innate lymphoid cells (ILC2s). It is the premier, non-redundant cytokine governing eosinophil biology: it stimulates bone marrow eosinophil lineage commitment, terminal differentiation, release into circulation, chemotactic migration into respiratory mucosa, and inhibits eosinophil apoptosis. Monoclonal antibodies targeting IL-5 (mepolizumab, reslizumab) or the IL-5 receptor alpha chain (benralizumab) drastically deplete eosinophils and reduce asthma exacerbations.\n\nHigh-Yield Pearl: Interleukin-5 (IL-5) is the primary driver of eosinophil production, activation, and survival; targeted by mepolizumab and benralizumab."
  },
  {
    "cat": 2,
    "q": "A 24-year-old athlete undergoes cardiopulmonary exercise testing. During submaximal steady-state exercise, his respiratory rate is measured at 20 breaths per minute, his tidal volume (VT) is 525 mL, and his physiological dead space (VD) is calculated as 150 mL. What is this individual's effective alveolar ventilation (VA)?",
    "a": [
      "7.5 L/min",
      "10.5 L/min",
      "3.0 L/min",
      "5.25 L/min",
      "12.0 L/min"
    ],
    "c": 0,
    "r": "Alveolar ventilation (VA) represents the volume of fresh inspired air that reaches the gas-exchanging alveoli per minute: VA = Respiratory Rate (RR) × (Tidal Volume [VT] - Dead Space [VD]). Here: VT = 525 mL = 0.525 L; VD = 150 mL = 0.150 L. Effective alveolar volume per breath = 525 - 150 = 375 mL (0.375 L). Total Alveolar Ventilation = 20 breaths/min × 0.375 L/breath = 7.5 L/min (7,500 mL/min).\n\nHigh-Yield Pearl: Alveolar ventilation = Respiratory Rate × (VT - VD); with RR=20, VT=525 mL, and VD=150 mL, VA = 20 × 375 mL = 7.5 L/min."
  },
  {
    "cat": 1,
    "q": "A 50-year-old man with dyspnea undergoes plethysmographic pulmonary function testing. Helium dilution testing reveals a Functional Residual Capacity (FRC) of 2,600 mL. Standard spirometry records an Expiratory Reserve Volume (ERV) of 1,100 mL, a Vital Capacity (VC) of 4,200 mL, and a Tidal Volume (VT) of 500 mL. Based on these measurements, what is the patient's Residual Volume (RV)?",
    "a": [
      "1,500 mL",
      "3,700 mL",
      "1,100 mL",
      "500 mL",
      "2,100 mL"
    ],
    "c": 0,
    "r": "Functional Residual Capacity (FRC) is the volume of gas remaining in the lungs at the end of a normal tidal expiration: FRC = Expiratory Reserve Volume (ERV) + Residual Volume (RV). Rearranging the equation: RV = FRC - ERV. Substituting the patient's values: RV = 2,600 mL - 1,100 mL = 1,500 mL. (Note: Residual volume cannot be measured by simple spirometry alone because the subject cannot exhale below RV; it requires helium dilution, nitrogen washout, or body plethysmography).\n\nHigh-Yield Pearl: Residual Volume (RV) = FRC - ERV; here 2600 mL - 1100 mL = 1500 mL. RV cannot be measured by spirometry alone."
  },
  {
    "cat": 1,
    "q": "A 67-year-old man with advanced idiopathic pulmonary fibrosis undergoes evaluation for exertional dyspnea. Histopathology demonstrates progressive fibrotic expansion of the inter-alveolar interstitium that doubles the diffusion distance across the blood-air barrier (thickness T increases by a factor of 2.0) and progressive honeycomb remodeling that destroys 50% of the functional alveolar capillary surface area (area A decreases by a factor of 2.0). Applying Fick's law of diffusion (V_gas ∝ [A × ΔP × D] / T), what is the net impact on the rate of oxygen transfer across his blood-air barrier?",
    "a": [
      "Four-fold reduction (decreased to 25% of baseline)",
      "Two-fold reduction (decreased to 50% of baseline)",
      "No net change because thickness and area cancel each other out",
      "Eight-fold reduction (decreased to 12.5% of baseline)",
      "Sixteen-fold reduction"
    ],
    "c": 0,
    "r": "According to Fick's Law of Diffusion, the rate of gas transfer across a tissue membrane is directly proportional to the surface area (A), the diffusion constant (D), and the partial pressure difference (ΔP), and inversely proportional to the membrane thickness (T): V_gas ∝ (A / T). If surface area is halved (A' = 0.5 A) and membrane thickness is doubled (T' = 2.0 T), the new diffusion rate becomes: V_gas' ∝ (0.5 / 2.0) = 0.25 (a four-fold reduction, or 25% of baseline).\n\nHigh-Yield Pearl: By Fick's law (V ∝ A/T), halving surface area (0.5) and doubling membrane thickness (2.0) results in a 4-fold reduction (0.25×) in diffusion rate."
  },
  {
    "cat": 0,
    "q": "Transmission electron microscopy of the epithelial lining of a terminal bronchiole reveals non-ciliated dome-shaped cells containing apical secretory granules and abundant smooth endoplasmic reticulum. These cells (Club cells, formerly Clara cells) perform which of the following vital protective functions in the small conducting airways?",
    "a": [
      "Secretion of protective surfactant-like lipoproteins and uteroglobin (Club Cell Secretory Protein / CCSP), and cytochrome P450-mediated detoxification of inhaled xenobiotics",
      "Rapid active phagocytosis of inhaled coal and mineral dust particles",
      "Exclusive production of large volumes of viscous acidic mucin to trap viruses",
      "Direct electrical pace-making of smooth muscle peristaltic contractions",
      "Gas exchange via ultrathin cytoplasmic extensions across capillary fenestrae"
    ],
    "c": 0,
    "r": "Club cells (formerly Clara cells) are specialized non-ciliated, dome-shaped cuboidal cells located predominantly in the terminal and respiratory bronchioles. They have two major functions: 1) Secretory: they secrete a protective surfactant-like mixture of glycosaminoglycans and CCSP (uteroglobin/CC16), which prevents luminal adhesion and airway collapse during expiration and exerts anti-inflammatory effects; 2) Metabolic/Regenerative: their abundant SER contains cytochrome P450 enzymes that detoxify inhaled airborne toxins and xenobiotics, and they act as reserve stem cells to regenerate ciliated epithelium after injury.\n\nHigh-Yield Pearl: Club (Clara) cells in bronchioles secrete protective CCSP/surfactant-like fluid, detoxify xenobiotics via SER P450, and act as reserve stem cells."
  },
  {
    "cat": 0,
    "q": "A medical student examines a histological section of healthy human pulmonary parenchyma. She traces the anatomical path of inspired air from the conducting zone into the respiratory zone. Which of the following microanatomical structures represents the definitive terminal site where the majority of passive external respiratory gas exchange occurs?",
    "a": [
      "Alveoli organized within terminal alveolar sacs",
      "Segmental (tertiary) bronchus",
      "Terminal bronchiole",
      "Cartilaginous lobar bronchus",
      "Tracheal bifurcated carina"
    ],
    "c": 0,
    "r": "The respiratory tract is divided into the conducting zone (generations 0–16: trachea down to terminal bronchioles), which warms, humidifies, and filters air without gas exchange, and the respiratory zone (generations 17–23: respiratory bronchioles, alveolar ducts, and alveolar sacs). The terminal alveolar sacs, surrounded by dense clusters of thin-walled polyhedral alveoli draped in pulmonary capillaries, provide ~75–100 m² of surface area where >95% of passive diffusion and external gas exchange takes place.\n\nHigh-Yield Pearl: External gas exchange occurs exclusively in the respiratory zone, predominantly within terminal alveolar sacs and alveoli."
  },
  {
    "cat": 1,
    "q": "A 30-year-old marathon runner collapses during a mid-summer race in high humidity. His core rectal temperature is measured at 42.0°C (107.6°F). He develops acute encephalopathy, tachypnea, and rapidly evolving acute lung injury. At the molecular level, severe sustained core hyperthermia (>41.5°C) damages the respiratory alveolar epithelium primarily through which of the following biophysical mechanisms?",
    "a": [
      "Thermal denaturation and misfolding of essential cellular proteins and disruption of cell membrane lipid bilayers",
      "Excessive stabilization and hyper-crystallization of respiratory surfactant dipalmitoylphosphatidylcholine",
      "Massive activation of cold-shock transcription factors that downregulate transcription",
      "Inhibition of lactic acid dehydrogenase resulting in profound systemic alkalosis",
      "Permanent opening of aquaporin-1 channels preventing cellular fluid shifts"
    ],
    "c": 0,
    "r": "Extreme core hyperthermia (>41°C / 105.8°F), as seen in heat stroke, causes catastrophic cellular cytotoxicity. High thermal kinetic energy disrupts non-covalent hydrogen and hydrophobic bonds, leading to denaturation, unfolding, and irreversible aggregation of critical structural proteins, transport pumps, and metabolic enzymes. Furthermore, lipid membrane fluidity increases excessively, causing membrane breakdown, cellular swelling, and apoptosis of alveolar epithelial and endothelial cells, triggering non-cardiogenic pulmonary edema (ARDS).\n\nHigh-Yield Pearl: Extreme hyperthermia (>41.5°C) causes direct cellular toxicity via thermal denaturation of proteins and disruption of membrane lipid bilayers."
  },
  {
    "cat": 2,
    "q": "A 28-year-old mountaineer ascends to the Mount Everest base camp (elevation 5,364 meters; barometric pressure ~400 mmHg). Over the course of two weeks, her body undergoes progressive physiological acclimatization to chronic hypobaric hypoxia. Which set of physiological adaptations is characteristically observed during successful high-altitude acclimatization?",
    "a": [
      "Hypoxic hyperventilation, compensatory renal excretion of bicarbonate (restoring pH toward normal), and polycythemia driven by renal erythropoietin",
      "Central hypoventilation to conserve alveolar CO2, decreased 2,3-BPG synthesis, and systemic leukocytosis",
      "Renal retention of bicarbonate to induce acute metabolic alkalosis and suppress respiratory rate",
      "Marked decrease in pulmonary arterial pressure with leftward shift of the oxygen dissociation curve",
      "Severe suppression of hematocrit due to hypoxic bone marrow suppression"
    ],
    "c": 0,
    "r": "Acclimatization to high altitude involves: 1) Immediate carotid body-mediated hypoxic hyperventilation (blowing off CO2, causing respiratory alkalosis); 2) Within 24–48 hours, the kidneys compensate by excreting HCO3⁻ in urine (restoring arterial pH toward 7.40 and allowing sustained hyperventilation); 3) Hypoxia stimulates renal interstitial peritubular cells to produce erythropoietin (EPO), stimulating bone marrow to produce RBCs (polycythemia, increasing oxygen-carrying capacity); 4) Erythrocytes increase 2,3-BPG (DPG), shifting the Hb-O2 curve rightward to facilitate oxygen unloading in hypoxic peripheral tissues.\n\nHigh-Yield Pearl: High-altitude acclimatization triad: hypoxic hyperventilation, compensatory renal HCO3⁻ excretion, and EPO-induced polycythemia."
  },
  {
    "cat": 2,
    "q": "A 68-year-old man with severe end-stage COPD presents for routine evaluation. He is clinically stable and breathing room air. Arterial blood gas reveals: pH 7.36, PaCO2 62 mmHg, PaO2 58 mmHg, and serum HCO3⁻ 35 mEq/L. Which of the following physiological renal adaptations is responsible for maintaining his arterial pH near the normal range?",
    "a": [
      "Increased renal tubular reabsorption and new synthesis of bicarbonate (HCO3⁻) accompanied by enhanced urinary excretion of titratable acid and ammonium (NH4⁺)",
      "Increased renal tubular excretion of bicarbonate in exchange for chloride ions",
      "Selective suppression of carbonic anhydrase activity in proximal tubular brush borders",
      "Direct inhibition of collecting duct H+-ATPase proton secretion",
      "Decreased renal synthesis of 1,25-dihydroxyvitamin D3"
    ],
    "c": 0,
    "r": "The patient has chronic respiratory acidosis (elevated PaCO2 62 mmHg) secondary to severe COPD. Chronic hypoventilation allows CO2 to accumulate. Over 3 to 5 days, the kidneys provide chronic metabolic compensation: renal tubular cells upregulate carbonic anhydrase and apical Na+/H+ exchangers (NHE3) and H+-ATPases, secreting hydrogen ions into the urine (bound to phosphate as titratable acid and to ammonia as NH4⁺) while reabsorbing all filtered bicarbonate and generating new HCO3⁻ (raising serum HCO3⁻ to 35 mEq/L). For every 10 mmHg elevation in PaCO2 in chronic respiratory acidosis, serum HCO3⁻ increases by ~3.5 to 4 mEq/L.\n\nHigh-Yield Pearl: Chronic respiratory acidosis is compensated by renal H+ excretion (as NH4⁺ and titratable acid) and marked HCO3⁻ retention, raising serum bicarbonate."
  },
  {
    "cat": 3,
    "q": "A 72-year-old nursing home resident presents with cough, purulent sputum, fever, and confusion. Chest CT shows right lower lobe consolidation. Initial blood tests reveal a markedly elevated serum procalcitonin level of 4.8 ng/mL (normal <0.15 ng/mL). Which of the following clinical decisions is most strongly indicated by this biomarker profile?",
    "a": [
      "Immediate administration of empirical broad-spectrum antibacterial therapy",
      "Immediate withholding of all antibiotics because high procalcitonin excludes bacterial infection",
      "Administration of high-dose intravenous acyclovir for presumed viral bronchitis",
      "Prescription of oral oseltamivir monotherapy without bacterial coverage",
      "Discharge to home without medical intervention"
    ],
    "c": 0,
    "r": "Procalcitonin (PCT) is a peptide precursor of calcitonin produced ubiquitously by parenchymal cells in response to bacterial endotoxins (LPS) and proinflammatory cytokines (IL-1beta, TNF-alpha, IL-6). In contrast, viral infections stimulate interferon-gamma, which actively downregulates procalcitonin synthesis. A markedly elevated serum PCT (>0.5 to >2.0 ng/mL) has high specificity for invasive bacterial infection and strongly dictates the immediate initiation of empirical antibacterial therapy in community-acquired pneumonia.\n\nHigh-Yield Pearl: Elevated serum procalcitonin (>0.5–2.0 ng/mL) is a specific biomarker for invasive bacterial infection, mandating antibacterial therapy."
  },
  {
    "cat": 3,
    "q": "A previously healthy 35-year-old woman presents to the outpatient clinic with a 3-day history of fever, chills, and productive cough with rust-colored sputum. Physical exam reveals bronchial breath sounds and egophony over the left lower lung base. Chest radiograph confirms left lower lobe consolidation. She has no comorbidities and no recent antibiotic use. In accordance with clinical guidelines for outpatient Community-Acquired Pneumonia (CAP), which of the following represents the preferred first-line oral empirical monotherapy?",
    "a": [
      "Oral amoxicillin (high-dose)",
      "Oral ciprofloxacin",
      "Intravenous meropenem",
      "Oral vancomycin",
      "Oral metronidazole"
    ],
    "c": 0,
    "r": "According to ATS/IDSA guidelines, in healthy outpatient adults with community-acquired pneumonia without comorbidities (e.g., chronic heart, lung, renal disease, diabetes, or immunosuppression) or risk factors for antibiotic resistance, oral amoxicillin (1 g three times daily) is the first-line empirical drug of choice. It provides bactericidal coverage against Streptococcus pneumoniae (the most common cause of typical CAP). Alternative options include doxycycline or a macrolide (if local pneumococcal macrolide resistance is <25%).\n\nHigh-Yield Pearl: High-dose oral amoxicillin is the first-line empirical outpatient regimen for CAP in healthy adults without comorbidities."
  },
  {
    "cat": 3,
    "q": "A 64-year-old mechanically ventilated trauma patient in the surgical intensive care unit develops new-onset purulent endotracheal secretions, high fever, and a new progressive infiltrate on portable chest radiograph on day 6 of mechanical ventilation. Gram stain of endotracheal aspirate demonstrates abundant gram-negative bacilli. Which of the following antimicrobial agents provides reliable empirical coverage against Pseudomonas aeruginosa in hospital-acquired and ventilator-associated pneumonia (HAP/VAP)?",
    "a": [
      "Ciprofloxacin (or levofloxacin)",
      "Ceftriaxone (third-generation cephalosporin)",
      "Erythromycin",
      "Trimethoprim-sulfamethoxazole alone",
      "Amoxicillin-clavulanate"
    ],
    "c": 0,
    "r": "Hospital-acquired pneumonia (HAP) and ventilator-associated pneumonia (VAP) occurring ≥5 days after admission carry high risk for multidrug-resistant pathogens, particularly Pseudomonas aeruginosa and MRSA. Antipseudomonal fluoroquinolones (ciprofloxacin or high-dose levofloxacin) possess potent bactericidal activity against Pseudomonas by inhibiting bacterial DNA gyrase (topoisomerase II) and topoisomerase IV. Other antipseudomonal agents include cefepime, piperacillin-tazobactam, and meropenem.\n\nHigh-Yield Pearl: Ciprofloxacin and levofloxacin are antipseudomonal fluoroquinolones with bactericidal activity against Pseudomonas aeruginosa in HAP/VAP."
  },
  {
    "cat": 3,
    "q": "A 19-year-old college student with known moderate persistent asthma experiences sudden acute chest tightness and expiratory wheezing during cold-weather endurance training. Which of the following pharmacological agents is the preferred, fastest-acting bronchodilator for immediate symptomatic relief of acute bronchospasm?",
    "a": [
      "Inhaled or nebulized salbutamol (albuterol)",
      "Daily oral montelukast",
      "Inhaled fluticasone propionate monotherapy",
      "Subcutaneous omalizumab (anti-IgE)",
      "Oral theophylline extended-release"
    ],
    "c": 0,
    "r": "Salbutamol (albuterol) is a short-acting beta-2 adrenergic agonist (SABA). Binding to beta-2 receptors on bronchial smooth muscle couples to Gs protein, activating adenylyl cyclase to increase intracellular cyclic AMP (cAMP). This activates protein kinase A (PKA), which phosphorylates and inactivates myosin light-chain kinase (MLCK) and reduces intracellular calcium, resulting in prompt smooth muscle relaxation and bronchodilation within 5 minutes. It is the premier first-line 'rescue' therapy for acute bronchospasm.\n\nHigh-Yield Pearl: Inhaled salbutamol (albuterol) stimulates beta-2/Gs/cAMP to provide immediate bronchodilation in acute asthmatic attacks."
  },
  {
    "cat": 3,
    "q": "A 28-year-old asthmatic patient using high-dose inhaled beclomethasone dipropionate via a metered-dose inhaler (MDI) develops a sore mouth and hoarseness (dysphonia). Physical examination reveals curd-like white plaques on the buccal mucosa and posterior pharyngeal wall that scrape off easily with a tongue blade, exposing an erythematous, bleeding base. Which of the following clinical measures could have prevented this complication?",
    "a": [
      "Using a spacer device with the inhaler and thoroughly rinsing the mouth with water and spitting after each administration",
      "Immediately escalating the daily dosage of beclomethasone",
      "Switching from inhaled corticosteroid to daily oral prednisone",
      "Administering broad-spectrum oral ampicillin prophylactically",
      "Co-administering inhaled salmeterol without mouth rinsing"
    ],
    "c": 0,
    "r": "Oropharyngeal candidiasis (thrush) and dysphonia (due to laryngeal myopathy) are the most common local adverse effects of inhaled corticosteroids (ICS) such as beclomethasone, fluticasone, and budesonide. They result from local immunosuppression by corticosteroid deposition in the oral cavity. Prevention requires the use of a spacer chamber (which reduces oropharyngeal particle deposition) and instructing the patient to rinse their mouth and spit after each dose. Treatment is with topical nystatin or oral fluconazole.\n\nHigh-Yield Pearl: Oropharyngeal candidiasis from inhaled corticosteroids is prevented by using a spacer and rinsing the mouth with water after each use."
  },
  {
    "cat": 3,
    "q": "A 46-year-old man suffering from a fractured rib experiences intractable, non-productive coughing that causes excruciating chest wall pain and prevents sleep. The physician prescribes codeine syrup. Codeine exerts its therapeutic antitussive effect primarily by which of the following mechanisms?",
    "a": [
      "Centrally suppressing the cough reflex arc via agonist action at mu-opioid receptors within the medullary cough center",
      "Direct pharmacological blockade of nicotinic acetylcholine receptors on the diaphragm",
      "Cleaving disulfide bridges within acidic mucopolysaccharide chains in bronchial mucus",
      "Selective competitive antagonism of histamine H1 receptors in nasal mucosa",
      "Stimulation of pulmonary J-receptors and vagal C-fibers"
    ],
    "c": 0,
    "r": "Codeine is an opioid agonist that acts centrally within the medulla oblongata to elevate the threshold of the cough reflex center. By stimulating mu-opioid receptors, it inhibits adenylate cyclase, hyperpolarizes neurons via G-protein-coupled inwardly rectifying potassium channels, and reduces presynaptic neurotransmitter release, effectively dampening afferent cough impulses triggered by bronchial or pleural irritation.\n\nHigh-Yield Pearl: Codeine is a centrally acting opioid antitussive that suppresses the medullary cough center via mu-opioid receptor stimulation."
  },
  {
    "cat": 3,
    "q": "A 62-year-old patient with severe chronic bronchitis and chronic hypersecretion of tenaciously thick, viscous bronchial mucus is prescribed carbocisteine. Which of the following biophysical actions represents the primary mechanism of action of carbocisteine and related mucolytics?",
    "a": [
      "Cleaving disulfide bonds between mucin glycoprotein oligomers, thereby reducing sputum viscosity and facilitating expectoration",
      "Direct central suppression of the medullary cough reflex center",
      "Stimulating beta-2 adrenergic receptors to increase ciliary beat frequency without altering mucus structure",
      "Inhibiting bacterial cell wall transpeptidases in the bronchial lumen",
      "Decreasing water and chloride secretion through CFTR channels"
    ],
    "c": 0,
    "r": "Carbocisteine (and N-acetylcysteine) are mucolytic agents. Bronchial mucus hyperviscosity in chronic airway disease is maintained by intermolecular disulfide (-S-S-) bridges cross-linking mucin glycoproteins. Carbocisteine cleaves these disulfide bonds, breaking long mucin oligomers into smaller, lower-molecular-weight fragments. This reduces the viscosity and tenacity of mucus, promoting clearance via the mucociliary escalator and productive coughing.\n\nHigh-Yield Pearl: Carbocisteine and acetylcysteine act as mucolytics by cleaving mucin disulfide bonds, reducing mucus viscosity."
  },
  {
    "cat": 3,
    "q": "A 32-year-old woman with a persistent dry cough following a viral upper respiratory infection requests an effective cough suppressant that does not produce the constipation or high addiction liability associated with traditional opioids like morphine. She is prescribed pholcodine. Which of the following characteristics best describes pholcodine?",
    "a": [
      "A centrally acting opioid-derivative antitussive that depresses the medullary cough center with minimal analgesic, constipating, or respiratory depressant effects",
      "A peripheral local anesthetic that directly blocks pulmonary stretch receptors in alveolar walls",
      "An inhaled muscarinic antagonist that produces bronchodilation and dries secretions",
      "A leukotriene receptor antagonist that blocks LTC4 binding",
      "A direct competitive antagonist of the NMDA receptor"
    ],
    "c": 0,
    "r": "Pholcodine is an opioid-derivative (morpholinoethylmorphine) antitussive. It acts centrally in the medulla oblongata to suppress the cough center, exhibiting potent antitussive efficacy comparable to codeine. However, unlike morphine and codeine, it has minimal affinity for central mu-opioid receptors that mediate euphoria, physical dependence, respiratory depression, or gastrointestinal constipation.\n\nHigh-Yield Pearl: Pholcodine is a centrally acting opioid-derivative antitussive that suppresses the medullary cough reflex with minimal constipation or addictive liability."
  },
  {
    "cat": 3,
    "q": "A 41-year-old immigrant undergoing standard four-drug therapy for active pulmonary tuberculosis reports progressive difficulty reading and notes that green and red traffic lights appear identical and washed out. Visual acuity testing reveals a drop to 20/100 bilaterally, and fundoscopy confirms bilateral optic disc hyperemia. Which of the following antitubercular medications is responsible for this adverse drug reaction?",
    "a": [
      "Ethambutol",
      "Isoniazid",
      "Rifampicin",
      "Pyrazinamide",
      "Streptomycin"
    ],
    "c": 0,
    "r": "Ethambutol inhibits arabinosyltransferase, blocking arabinogalactan polymerization in the mycobacterial cell wall. Its classic dose-dependent adverse effect is retrobulbar optic neuritis. Patients typically present with decreased visual acuity, central scotomas, and loss of red-green color discrimination ('red-green color blindness' - mnemonic: Ethambutol for Eyes). Baseline and periodic visual acuity and red-green color testing are mandatory. The toxicity is usually reversible if discontinued promptly.\n\nHigh-Yield Pearl: Ethambutol causes retrobulbar optic neuritis with red-green color blindness and decreased visual acuity ('E for Eyes')."
  },
  {
    "cat": 3,
    "q": "A public health physician lectures medical students on the clinical management of tuberculosis. She emphasizes that active Mycobacterium tuberculosis infection is never treated with single-agent monotherapy and must always be initiated with a multi-drug regimen (Rifampicin, Isoniazid, Pyrazinamide, and Ethambutol [RIPE]). What is the primary biological rationale for multi-drug combination therapy in active tuberculosis?",
    "a": [
      "To prevent the emergence of drug-resistant mycobacterial mutant bacilli during prolonged therapy",
      "To achieve synergistic destruction of human alveolar macrophages harboring the bacilli",
      "To stimulate the bone marrow to produce high titers of antituberculous IgA antibodies",
      "To induce hepatic cytochrome P450 enzymes to clear toxic bacterial lipopolysaccharides",
      "To bypass the need for renal excretion of therapeutic antimicrobial agents"
    ],
    "c": 0,
    "r": "Active tuberculous cavities contain massive bacterial populations (~10^8 to 10^9 bacilli). Spontaneous chromosomal mutations conferring resistance to any single drug occur naturally at a frequency of 1 in 10^6 to 10^8 divisions (e.g., katG mutations for isoniazid, rpoB mutations for rifampin). Monotherapy eradicates sensitive bacilli but selectively allows pre-existing resistant mutants to proliferate unchecked, resulting in treatment failure and multidrug-resistant tuberculosis (MDR-TB). The mathematical probability of a single bacillus simultaneously possessing spontaneous mutations to two or three unlinked drug classes is vanishingly small (~1 in 10^14).\n\nHigh-Yield Pearl: Multi-drug combination therapy in tuberculosis prevents the selection and proliferation of drug-resistant mycobacterial mutants."
  },
  {
    "cat": 3,
    "q": "A 52-year-old woman with active tuberculosis begins treatment with isoniazid, rifampicin, pyrazinamide, and ethambutol. To prevent the development of isoniazid-induced symmetrical burning paresthesias, numbness, and sensory ataxia in her lower extremities, which of the following vitamins must be co-administered daily?",
    "a": [
      "Pyridoxine (Vitamin B6)",
      "Thiamine (Vitamin B1)",
      "Cyanocobalamin (Vitamin B12)",
      "Riboflavin (Vitamin B2)",
      "Ascorbic acid (Vitamin C)"
    ],
    "c": 0,
    "r": "Isoniazid (INH) is structurally similar to pyridoxine (vitamin B6). It inhibits the enzyme pyridoxine phosphokinase (which converts vitamin B6 to its active cofactor form, pyridoxal-5-phosphate) and directly forms inactive hydrazone complexes with pyridoxal phosphate, accelerating its urinary excretion. Pyridoxal phosphate is an essential cofactor for glutamic acid decarboxylase (producing GABA) and for myelin lipid synthesis. Deficiency results in peripheral neuropathy (burning paresthesias, glove-and-stocking sensory loss). Co-administration of 25–50 mg/day of pyridoxine (vitamin B6) completely prevents this neurotoxicity.\n\nHigh-Yield Pearl: Pyridoxine (Vitamin B6) supplementation is mandatory with isoniazid to prevent peripheral neuropathy caused by vitamin B6 depletion."
  },
  {
    "cat": 2,
    "q": "A 74-year-old man with severe ischemic cardiomyopathy is admitted in cardiogenic shock with a cardiac index of 1.2 L/min/m² (normal >2.5). Arterial blood gas demonstrates PaO2 95 mmHg, SaO2 98%, and normal hemoglobin of 14.5 g/dL. However, mixed venous oxygen saturation (SvO2) drawn from a pulmonary artery catheter is markedly reduced at 42% (normal >70%), and serum lactate is 5.8 mmol/L. This clinical scenario represents which classic category of hypoxia?",
    "a": [
      "Stagnant (ischemic / circulatory) hypoxia",
      "Hypoxic hypoxia (hypoxemia)",
      "Anemic hypoxia",
      "Histotoxic (cytotoxic) hypoxia",
      "Hyperbaric hypoxia"
    ],
    "c": 0,
    "r": "Hypoxia is classified into four physiological categories: 1) Hypoxic hypoxia: low arterial PaO2 and low SaO2 (e.g., altitude, V/Q mismatch); 2) Anemic hypoxia: normal PaO2 but decreased oxygen content due to low hemoglobin or CO poisoning; 3) Stagnant (ischemic) hypoxia: normal arterial PaO2, SaO2, and Hb, but tissue blood flow is severely reduced (e.g., cardiogenic shock, severe heart failure, localized arterial occlusion). Sluggish transit allows tissues to extract extra oxygen, drastically dropping mixed venous oxygen saturation (SvO2) and causing tissue ischemia and lactic acidosis; 4) Histotoxic hypoxia: normal oxygen delivery, but cellular utilization is blocked (e.g., cyanide poisoning).\n\nHigh-Yield Pearl: Stagnant (circulatory) hypoxia is caused by poor cardiac output or low perfusion, characterized by normal arterial PaO2 but markedly decreased SvO2."
  },
  {
    "cat": 1,
    "q": "At the end of a quiet, unforced tidal expiration (the resting equilibrium point of the respiratory system), the outward elastic springing force of the thoracic wall is exactly equal and opposite to the inward elastic recoil force of the lungs. The volume of air contained within the lungs at this resting mechanical equilibrium is designated as:",
    "a": [
      "Functional Residual Capacity (FRC)",
      "Total Lung Capacity (TLC)",
      "Inspiratory Capacity (IC)",
      "Vital Capacity (VC)",
      "Residual Volume (RV)"
    ],
    "c": 0,
    "r": "Functional Residual Capacity (FRC) is the volume of gas in the lungs at the end of a normal, quiet expiration (composed of ERV + RV, ~2.2–2.4 L in a healthy adult). Mechanically, FRC represents the resting equilibrium volume of the respiratory system: the inward elastic recoil of the lungs (which want to collapse inward) precisely balances the outward springing recoil of the chest wall (which wants to expand outward). Because forces balance, alveolar pressure equals atmospheric pressure (0 cmH2O) and no airflow occurs.\n\nHigh-Yield Pearl: Functional Residual Capacity (FRC) is the resting volume where inward lung elastic recoil exactly balances outward chest wall recoil."
  },
  {
    "cat": 1,
    "q": "In a healthy adult sitting at rest at sea level, what are the normal physiological values for intrapleural pressure (P_ip) and alveolar pressure (P_alv) at the resting end-expiratory equilibrium position (at Functional Residual Capacity) before the next breath begins?",
    "a": [
      "Intrapleural pressure: -5 to -6 cmH2O; Alveolar pressure: 0 cmH2O",
      "Intrapleural pressure: 0 cmH2O; Alveolar pressure: +5 cmH2O",
      "Intrapleural pressure: -15 cmH2O; Alveolar pressure: -5 cmH2O",
      "Intrapleural pressure: +5 cmH2O; Alveolar pressure: 0 cmH2O",
      "Intrapleural pressure: -5 cmH2O; Alveolar pressure: -5 cmH2O"
    ],
    "c": 0,
    "r": "At Functional Residual Capacity (resting end-expiration), respiratory muscles are completely relaxed. The outward elastic recoil of the chest wall pulls against the inward elastic recoil of the lung parenchyma, generating a subatmospheric (negative) pressure in the pleural space of approximately -5 to -6 cmH2O (relative to atmospheric pressure). Because the glottis is open and no airflow occurs, alveolar pressure is identical to atmospheric pressure (0 cmH2O). The transmural pressure gradient (P_alv - P_ip = 0 - [-5] = +5 cmH2O) keeps the lungs distended.\n\nHigh-Yield Pearl: At resting end-expiratory FRC, intrapleural pressure is subatmospheric (-5 to -6 cmH2O) and alveolar pressure is 0 cmH2O."
  },
  {
    "cat": 1,
    "q": "A 66-year-old retired industrial worker with progressive exertional dyspnea is diagnosed with idiopathic pulmonary fibrosis (IPF). A pressure-volume curve of the lungs is constructed. Which of the following alterations in pulmonary mechanics and compliance is characteristically observed in this patient?",
    "a": [
      "Decreased pulmonary compliance, requiring significantly greater negative intrapleural pressure changes to achieve a given tidal volume",
      "Markedly increased pulmonary compliance with effortless lung distension at low pressures",
      "Total loss of inward elastic recoil resulting in dynamic expiratory airway collapse",
      "Decreased work of breathing with expansion of total lung capacity",
      "Selective destruction of type II pneumocytes with hypersecretion of surfactant"
    ],
    "c": 0,
    "r": "Idiopathic pulmonary fibrosis is a restrictive lung disease characterized by progressive collagen and extracellular matrix deposition in the alveolar interstitium. The fibrotic lung tissue is stiff and resistant to stretch, manifesting as decreased pulmonary compliance (C = ΔV / ΔP). The pressure-volume curve shifts downward and to the right. Consequently, the patient must generate much greater negative intrapleural pressures via inspiratory muscles to expand the stiff lungs, dramatically increasing elastic work of breathing and causing rapid, shallow tachypnea.\n\nHigh-Yield Pearl: Pulmonary fibrosis causes stiff lungs with decreased compliance (downward-right shift of P-V curve), increasing elastic work of breathing."
  },
  {
    "cat": 1,
    "q": "A premature infant delivered at 28 weeks of gestation develops severe respiratory distress syndrome (neonatal RDS). Administration of exogenous pulmonary surfactant rapidly improves oxygenation and stabilizes the alveoli. The primary biophysical mechanism by which surfactant stabilizes small alveoli is described by the law of Laplace (P = 2T / r). Surfactant achieves this primarily by:",
    "a": [
      "Markedly lowering alveolar surface tension (T), thereby preventing alveolar collapse (atelectasis) and increasing pulmonary compliance",
      "Increasing alveolar surface tension (T) to generate hydrostatic transudate clearing",
      "Directly reducing the alveolar radius (r) to zero during end-expiration",
      "Increasing pulmonary capillary hydrostatic pressure to promote perfusion",
      "Inducing rapid pulmonary vasoconstriction to eliminate dead space"
    ],
    "c": 0,
    "r": "Pulmonary surfactant (secreted by Type II pneumocytes) is primarily dipalmitoylphosphatidylcholine (DPPC). According to Laplace's Law (P = 2T / r), the collapsing pressure (P) of an alveolus is directly proportional to surface tension (T) and inversely proportional to radius (r). Without surfactant, small alveoli would generate higher collapsing pressures and empty into larger alveoli, causing widespread atelectasis. Surfactant molecules compress tightly in smaller alveoli, drastically lowering surface tension (T), eliminating collapsing pressure differentials, preventing end-expiratory atelectasis, and increasing lung compliance.\n\nHigh-Yield Pearl: Surfactant reduces surface tension (T) in alveoli (P = 2T/r), preventing end-expiratory collapse and markedly increasing lung compliance."
  },
  {
    "cat": 1,
    "q": "In human bronchial airways, autonomic regulation of smooth muscle tone involves sympathetic adrenergic fibers, parasympathetic cholinergic fibers, and the non-adrenergic non-cholinergic (NANC) neural system. Which of the following neuropeptides serves as the primary neurotransmitter of the inhibitory NANC system, promoting potent bronchodilation and reducing airway resistance?",
    "a": [
      "Vasoactive intestinal peptide (VIP) and Nitric oxide (NO)",
      "Substance P and Neurokinin A",
      "Acetylcholine acting on muscarinic M3 receptors",
      "Neuropeptide Y causing profound bronchospasm",
      "Endothelin-1 acting on ETA receptors"
    ],
    "c": 0,
    "r": "The inhibitory non-adrenergic non-cholinergic (iNANC) system is the primary neural bronchodilator mechanism in human airways (since direct sympathetic adrenergic innervation of human bronchial smooth muscle is sparse). The major transmitters of the iNANC pathway are Vasoactive Intestinal Peptide (VIP) and Nitric Oxide (NO). VIP binds to VPAC2 receptors, stimulating adenylyl cyclase/cAMP, while NO activates soluble guanylyl cyclase/cGMP. Together, they induce smooth muscle relaxation, bronchodilation, and reduction in total airway resistance.\n\nHigh-Yield Pearl: The inhibitory NANC system mediates bronchodilation primarily through Vasoactive Intestinal Peptide (VIP) and Nitric Oxide (NO)."
  },
  {
    "cat": 2,
    "q": "A 63-year-old chronic smoker with severe emphysema undergoes diffusing capacity of the lungs for carbon monoxide (DLCO) testing. The measured DLCO is 38% of predicted (markedly decreased). In pure emphysema, this profound reduction in DLCO is directly caused by which of the following pathophysiological mechanisms?",
    "a": [
      "Extensive destruction of inter-alveolar septa and permanent loss of the functional alveolar capillary vascular bed",
      "Severe fibrotic thickening of the alveolar-capillary basement membrane",
      "Intra-alveolar accumulation of proteinaceous surfactant-rich fluid",
      "Isolated severe reduction in red blood cell 2,3-bisphosphoglycerate concentration",
      "Dynamic narrowing of large extrathoracic conducting cartilaginous bronchi"
    ],
    "c": 0,
    "r": "Diffusing capacity of the lung for carbon monoxide (DLCO) evaluates the integrity of the alveolar-capillary membrane. In emphysema, cigarette smoke-induced elastases and proteases cause widespread destruction of alveolar walls and inter-alveolar septa. This permanently reduces the total gas-exchange surface area and destroys vast networks of pulmonary capillaries. Consequently, DLCO is characteristically reduced (<80%), which crucially differentiates emphysema from chronic bronchitis and asthma (where DLCO is typically normal or elevated).\n\nHigh-Yield Pearl: DLCO is markedly decreased in emphysema due to the destruction of alveolar walls and the associated pulmonary capillary bed."
  },
  {
    "cat": 1,
    "q": "A 55-year-old woman with systemic sclerosis develops progressive exertional dyspnea. Pulmonary function testing demonstrates a restrictive ventilatory impairment. Which of the following combinations of spirometric parameters and flow-volume loop configurations is characteristic of pure restrictive lung disease?",
    "a": [
      "Proportionally reduced FEV1 and FVC with a preserved or increased FEV1/FVC ratio (>0.80), and a tall, narrow 'witch's hat' flow-volume loop",
      "Disproportionately reduced FEV1 with a markedly reduced FEV1/FVC ratio (<0.70) and expiratory scooping",
      "Severely elevated Total Lung Capacity (TLC > 120%) with normal FEV1",
      "Variable extrathoracic flattening on flow-volume loop with normal lung volumes",
      "Fixed horizontal cutoff of both inspiratory and expiratory limbs of the loop"
    ],
    "c": 0,
    "r": "Restrictive pulmonary disease is defined by a reduction in Total Lung Capacity (TLC < 80% predicted). Because the lungs are stiff (increased inward recoil), both FEV1 and FVC are reduced proportionally, maintaining a normal or increased FEV1/FVC ratio (typically 0.80 to 0.90 or >80%). On a flow-volume loop, high radial elastic traction keeps small airways wide open during forced exhalation; thus, expiratory flow rates are supranormal for lung volume, producing a miniature, narrow, tall flow-volume loop often likened to a 'witch's hat'.\n\nHigh-Yield Pearl: Restrictive lung disease features reduced FVC and TLC, a preserved/increased FEV1/FVC ratio (>0.80), and a narrow 'witch's hat' flow-volume loop."
  },
  {
    "cat": 1,
    "q": "A 50-year-old woman with sarcoidosis undergoes pulmonary function testing. Spirometry records an FEV1 of 1.8 L (60% of predicted), an FVC of 2.0 L (58% of predicted), and a calculated FEV1/FVC ratio of 90% (0.90). Total Lung Capacity (TLC) is 65% of predicted. These findings definitively indicate which of the following physiological conditions?",
    "a": [
      "Restrictive pulmonary impairment with preserved or increased FEV1/FVC ratio and proportionally reduced lung volumes",
      "Obstructive airway disease with severe dynamic hyperinflation",
      "Normal pulmonary mechanics with high athletic performance",
      "Mixed obstructive-restrictive defect with predominant emphysema",
      "Primary tracheobronchial malacia with intrathoracic collapse"
    ],
    "c": 0,
    "r": "The diagnosis of restrictive pulmonary impairment requires a reduced Total Lung Capacity (TLC < 80% predicted; here 65%). In pure restriction, lung parenchymal stiffening causes equal reductions in FEV1 and FVC. Consequently, the FEV1/FVC ratio is preserved or supranormal (>80–85%; here 90%). High radial tethering from fibrotic interstitium keeps conducting airways patent, allowing rapid initial exhalation despite low total volume.\n\nHigh-Yield Pearl: Restrictive ventilatory impairment is characterized by TLC <80% and a preserved/increased FEV1/FVC ratio (>85–90%)."
  },
  {
    "cat": 1,
    "q": "In an upright subject, gravity creates hydrostatic pressure gradients that divide the pulmonary circulation into West zones (Zones 1, 2, and 3). Which of the following statements correctly compares regional pulmonary blood flow and vascular pressures between Zone 1 (apex) and Zone 3 (base)?",
    "a": [
      "Zone 1 features minimal or intermittent blood flow where alveolar pressure may exceed arterial pressure (Palv > Pa > Pv), whereas Zone 3 exhibits continuous high blood flow driven by high hydrostatic arterial and venous pressures (Pa > Pv > Palv)",
      "Zone 1 has the highest continuous blood flow due to low gravitational resistance",
      "Zone 3 experiences zero blood flow because venous pressure compresses capillaries",
      "Capillary recruitment occurs exclusively in Zone 1 during severe hemorrhagic shock",
      "Ventilation and perfusion are both higher at the apex than at the base"
    ],
    "c": 0,
    "r": "According to West's physiological zones of the upright lung: 1) Zone 1 (Apex): Hydrostatic pressure is lowest. If alveolar pressure exceeds arterial pressure (Palv > Pa > Pv), capillaries are compressed, producing minimal or intermittent perfusion (creating alveolar dead space). 2) Zone 2 (Mid-lung): Pa > Palv > Pv; flow is determined by the arterial-alveolar pressure gradient (waterfall effect). 3) Zone 3 (Base): Gravity increases hydrostatic columns, so arterial and venous pressures both exceed alveolar pressure (Pa > Pv > Palv). Capillaries are continuously distended, yielding maximum continuous blood flow.\n\nHigh-Yield Pearl: In Zone 1 (apex), Palv > Pa > Pv (intermittent/minimal flow); in Zone 3 (base), Pa > Pv > Palv (continuous maximal perfusion)."
  },
  {
    "cat": 2,
    "q": "A 58-year-old man with advanced asbestosis presents with exertional hypoxemia. Room air arterial blood gas shows: PaO2 55 mmHg, PaCO2 36 mmHg, and calculated alveolar PO2 (PAO2) 105 mmHg. His alveolar-arterial (A-a) oxygen gradient is calculated as 50 mmHg (normal <15 mmHg). Which of the following pathophysiological mechanisms accounts for the widened A-a gradient and exercise-induced hypoxemia in this patient?",
    "a": [
      "Alveolar-capillary diffusion impairment and V/Q mismatch",
      "Pure hypoventilation secondary to central narcotic overdose",
      "Ascent to extreme high altitude with low ambient FiO2",
      "Severe respiratory alkalosis without parenchymal disease",
      "Severe carbon monoxide poisoning without structural lung damage"
    ],
    "c": 0,
    "r": "The alveolar-arterial (A-a) gradient is calculated as PAO2 - PaO2. Normal is <10–15 mmHg in young adults (<20 mmHg in elderly). Causes of hypoxemia with an INCREASED (widened) A-a gradient include: 1) V/Q mismatch, 2) Right-to-left shunt, and 3) Diffusion impairment (such as pulmonary fibrosis and asbestosis). In asbestosis, thickened alveolar-capillary membranes and capillary destruction impair oxygen diffusion. During exercise, shortened erythrocyte transit time through pulmonary capillaries (<0.25 s) prevents complete equilibration, dramatically worsening hypoxemia and widening the A-a gradient.\n\nHigh-Yield Pearl: Diffusion impairment, V/Q mismatch, and shunts cause hypoxemia with an INCREASED (widened) A-a gradient; hypoventilation and high altitude have a NORMAL gradient."
  },
  {
    "cat": 2,
    "q": "During heavy anaerobic exertion, skeletal muscle tissue exhibits intense metabolic activity. Local physiological changes include a drop in pH (acidosis), elevated PCO2, increased temperature, and high 2,3-bisphosphoglycerate (2,3-BPG). What effect do these local biochemical alterations exert on the oxygen-hemoglobin dissociation curve (the Bohr effect)?",
    "a": [
      "Rightward shift of the curve, reflecting increased P50 and decreased hemoglobin-oxygen affinity that facilitates oxygen unloading to exercising tissues",
      "Leftward shift of the curve, reflecting decreased P50 and increased hemoglobin-oxygen affinity that locks oxygen onto hemoglobin",
      "Downward shift of total hemoglobin carrying capacity without changing P50",
      "Complete prevention of oxygen unloading in peripheral capillaries",
      "Immediate conversion of adult hemoglobin A into methemoglobin"
    ],
    "c": 0,
    "r": "The oxygen-hemoglobin dissociation curve shifts to the RIGHT (the Bohr effect) in response to: 1) Decreased pH (acidosis / increased H+), 2) Increased PCO2, 3) Increased temperature, and 4) Increased 2,3-BPG (DPG) (mnemonic: 'CADET, face Right!' - CO2, Acid, 2,3-DPG, Exercise, Temperature). A rightward shift increases the P50 (the PO2 required to achieve 50% hemoglobin saturation), meaning hemoglobin has lower affinity for oxygen and unloads oxygen more easily and efficiently to metabolically active, exercising tissues.\n\nHigh-Yield Pearl: Elevated H+ (low pH), high PCO2, high temperature, and high 2,3-BPG shift the Hb-O2 curve RIGHTWARD, increasing P50 and promoting O2 unloading."
  },
  {
    "cat": 1,
    "q": "A banked unit of packed red blood cells stored for 4 weeks in citrate-phosphate-dextrose preservative experiences progressive metabolic depletion of intracellular 2,3-bisphosphoglycerate (2,3-BPG). When this blood is rapidly transfused into a hypothermic, alkalemic trauma patient, which of the following alterations in oxygen delivery kinetics occurs?",
    "a": [
      "Leftward shift of the oxygen-hemoglobin dissociation curve, resulting in decreased P50 and excessively tight binding of oxygen to hemoglobin that impedes tissue oxygen unloading",
      "Rightward shift of the curve, accelerating immediate oxygen release into peripheral microcirculation",
      "Immediate irreversible oxidation of heme iron to ferric Fe3+ methemoglobin",
      "Spontaneous intravascular hemolysis caused by high 2,3-BPG binding",
      "Decreased hemoglobin oxygen saturation at high alveolar PO2"
    ],
    "c": 0,
    "r": "Factors that shift the oxygen-hemoglobin dissociation curve to the LEFT include: 1) Decreased 2,3-BPG (as occurs in stored banked blood), 2) Hypothermia (decreased temperature), 3) Alkalosis (increased pH / decreased H+), 4) Decreased PCO2, and 5) Fetal hemoglobin (HbF). A leftward shift lowers P50 and increases hemoglobin's affinity for oxygen, meaning hemoglobin binds oxygen tightly and releases it reluctantly to ischemic peripheral tissues, impairing tissue oxygenation despite high measured arterial oxygen saturation (SaO2).\n\nHigh-Yield Pearl: Decreased 2,3-BPG, hypothermia, and alkalosis shift the Hb-O2 curve LEFTWARD, decreasing P50 and impairing tissue oxygen release."
  },
  {
    "cat": 1,
    "q": "During an all-out 400-meter sprint, an athlete's skeletal muscles exceed their oxidative phosphorylation capacity, producing massive quantities of lactic acid. Lactic acid dissociates into lactate and H+ ions, which enter the systemic circulation. What is the immediate, primary extracellular physiological buffering mechanism that buffers these excess hydrogen ions before respiratory and renal compensations take full effect?",
    "a": [
      "Dynamic buffering by extracellular serum bicarbonate (HCO3⁻ + H+ ⇌ H2CO3 ⇌ H2O + CO2), followed by rapid exhalation of volatile CO2 by hyperventilating lungs",
      "Intracellular buffering exclusively by bone hydroxyapatite crystals",
      "Renal tubular precipitation of insoluble uric acid crystals",
      "Immediate sequestration of H+ ions inside erythrocyte lysosomes",
      "Binding of H+ ions to circulating plasma albumin with immediate albumin denaturation"
    ],
    "c": 0,
    "r": "The bicarbonate-carbonic acid system is the primary extracellular buffer in the human body. When lactic acid floods the circulation during strenuous anaerobic exercise, H+ ions are immediately buffered by plasma bicarbonate: H+ + HCO3⁻ ⇌ H2CO3. Carbonic anhydrase rapidly dehydrates carbonic acid to water and CO2 (H2CO3 ⇌ H2O + CO2). The generated CO2 stimulates peripheral and central chemoreceptors, producing vigorous hyperventilation that blows off CO2, preventing catastrophic arterial acidemia.\n\nHigh-Yield Pearl: Lactic acid generated during strenuous anaerobic exercise is immediately buffered by serum bicarbonate (H+ + HCO3⁻ → H2O + CO2), and CO2 is expired."
  },
  {
    "cat": 2,
    "q": "An experimental neurophysiology protocol selectively exposes central chemoreceptors on the ventral medullary surface to isolated hypoxemia (low PO2) while holding local CSF PCO2 and pH strictly constant. What will be the observed response of the central chemoreceptors to this isolated arterial hypoxemia?",
    "a": [
      "Completely zero stimulation; central chemoreceptors are completely insensitive to direct hypoxemia and respond exclusively to changes in local CSF [H+] / PCO2",
      "Explosive ten-fold increase in firing rate within 50 milliseconds",
      "Direct inhibition of all medullary pacemaker neurons causing immediate apnea",
      "Selective recruitment of abdominal expiratory motor units",
      "Release of substance P into the fourth ventricle"
    ],
    "c": 0,
    "r": "A crucial USMLE physiological principle is that central chemoreceptors are COMPLETELY INSENSITIVE to direct hypoxemia (low PO2). In fact, severe brain tissue hypoxia directly depresses central neuronal activity. The sole sensory organs in the human body capable of detecting arterial hypoxemia (PaO2 < 60 mmHg) are the peripheral chemoreceptors (primarily the carotid bodies, and to a lesser extent the aortic bodies). Central chemoreceptors respond exclusively to hydrogen ion concentration ([H+]) in the brain extracellular fluid and CSF, derived from diffusing CO2.\n\nHigh-Yield Pearl: Central chemoreceptors are completely insensitive to hypoxemia; arterial PO2 is sensed exclusively by peripheral chemoreceptors (carotid bodies)."
  },
  {
    "cat": 1,
    "q": "A 48-year-old trauma patient suffers severe herniation of the cerebellar tonsils through the foramen magnum, resulting in bilateral ischemic destruction of the dorsal and ventral respiratory groups within the medulla oblongata. Which of the following respiratory consequences occurs immediately?",
    "a": [
      "Immediate cessation of autonomous rhythmic breathing (complete apnea) requiring immediate mechanical ventilatory life support",
      "Rapid development of continuous apneustic breathing with prolonged inspiratory gasps",
      "Sustained central neurogenic hyperventilation with high tidal volumes",
      "Transition to ataxic Cheyne-Stokes periodic waxing and waning respiration",
      "Normal breathing maintained by intact spinal cord anterior horn cells"
    ],
    "c": 0,
    "r": "The intrinsic neural pacemaker and rhythm-generating networks responsible for autonomous respiration reside in the medulla oblongata (specifically the pre-Bötzinger complex within the ventral respiratory group and dorsal respiratory group). Bilateral medullary destruction or transection below the medulla (at the spinomedullary junction) immediately obliterates all autonomous rhythmic respiratory drive, producing catastrophic, fatal apnea. Such patients cannot breathe independently and require immediate mechanical ventilation.\n\nHigh-Yield Pearl: Bilateral destruction of the medullary respiratory center immediately abolishes all autonomous rhythmic breathing, causing fatal apnea."
  },
  {
    "cat": 1,
    "q": "In an experimental animal model, bilateral cervical vagotomy is performed, surgically severing both vagus nerves (CN X). When the animal breathes, each inspiration becomes markedly deeper and prolonged. This demonstrates that pulmonary stretch receptors in bronchial smooth muscle normally limit inspiration via the Hering-Breuer reflex by sending vagal inhibitory afferents to which of the following brainstem structures?",
    "a": [
      "The pontine apneustic center and medullary inspiratory neurons",
      "The cerebellar Purkinje cell layer",
      "The substantia nigra pars compacta",
      "The Edinger-Westphal parasympathetic nucleus",
      "The hypothalamic supraoptic nucleus"
    ],
    "c": 0,
    "r": "The Hering-Breuer inflation reflex is a protective negative feedback reflex. When tidal volume exceeds ~1.0 L (during vigorous exertion or mechanical ventilation), slowly adapting stretch receptors in the smooth muscle of large and small conducting airways fire. Afferent signals travel via the vagus nerve (CN X) to the solitary tract nucleus (NTS) in the medulla, which sends inhibitory projections to the pontine apneustic center and medullary inspiratory neurons, terminating inspiration and preventing pulmonary over-distension.\n\nHigh-Yield Pearl: The Hering-Breuer reflex transmits vagal stretch receptor afferents to inhibit pontine apneustic and medullary inspiratory centers, terminating inspiration."
  },
  {
    "cat": 2,
    "q": "A 71-year-old man with severe congestive heart failure (ejection fraction 22%) is monitored during sleep. Polysomnography records a recurring pattern of breathing characterized by a gradual waxing and waning of tidal volume (crescendo-decrescendo breathing) followed by a brief period of central apnea before the cycle repeats every 60 to 90 seconds. Arterial blood gas reveals underlying daytime hypocapnia. This classic respiratory pattern is known as:",
    "a": [
      "Cheyne-Stokes periodic breathing",
      "Kussmaul breathing",
      "Biot's ataxic breathing",
      "Apneustic breathing",
      "Agonal gasping"
    ],
    "c": 0,
    "r": "Cheyne-Stokes respiration is a periodic breathing pattern characterized by alternating cycles of crescendo-decrescendo tidal volumes followed by central apnea. It is classically associated with severe congestive heart failure (due to prolonged circulatory transit time from the lungs to the brainstem chemoreceptors, causing a delayed ventilatory response and feedback overshoot) and bilateral cortical/diencephalic neurological disease. Increased chemosensitivity leads to hyperventilation and hypocapnia; when PaCO2 falls below the apneic threshold, central apnea ensues.\n\nHigh-Yield Pearl: Cheyne-Stokes breathing features cyclical crescendo-decrescendo hyperpnea followed by central apnea, seen in severe heart failure and bilateral stroke."
  },
  {
    "cat": 2,
    "q": "A commercial deep-sea saturation diver breathing a heliox (helium-oxygen) gas mixture descends rapidly to an offshore oil drilling depth of 220 meters (>22 atmospheres absolute). Shortly after arriving at depth, he develops coarse resting tremors of both hands, dizziness, jerky muscle fasciculations, nausea, and marked cognitive slowing. This reversible neurological syndrome, occurring at depths greater than 150 meters, is known as:",
    "a": [
      "High-pressure nervous syndrome (HPNS)",
      "Nitrogen narcosis ('rapture of the deep')",
      "Decompression sickness Type I ('bends')",
      "Carbon dioxide intoxication",
      "Arterial gas embolism from pulmonary barotrauma"
    ],
    "c": 0,
    "r": "High-Pressure Nervous Syndrome (HPNS) is a neurological disorder that occurs in deep saturation divers descending to depths greater than 150 meters (>15–20 ATA) while breathing helium-oxygen (heliox) mixtures. Extreme hydrostatic pressure exerts direct physical compression on neuronal cell membrane lipid bilayers, altering the function of ion channels and synaptic receptors (specifically antagonizing GABA-A receptors and enhancing NMDA receptors, causing hyperexcitability). Manifestations include coarse tremors, myoclonus, ataxia, nausea, and EEG changes. It is prevented by slow descent rates and adding small amounts of narcotic gas (trimix: adding nitrogen).\n\nHigh-Yield Pearl: High-pressure nervous syndrome (HPNS) occurs at deep saturation dives (>150 m) due to hydrostatic pressure effects on neuronal membranes, causing tremors and ataxia."
  },
  {
    "cat": 3,
    "q": "A sputum specimen from a patient with fever, night sweats, and cavitary apical lung disease is subjected to Ziehl-Neelsen acid-fast staining. Slender, bright red bacilli are visualized against a blue methylene blue counterstain. The unique resistance of Mycobacterium tuberculosis to decolorization by acid-alcohol solutions is directly imparted by which of the following biochemical components of its cell envelope?",
    "a": [
      "Long-chain branched-chain beta-hydroxy fatty acids known as mycolic acids",
      "Thick outer capsule composed of poly-D-glutamic acid",
      "Endotoxin consisting of lipopolysaccharide with Lipid A",
      "High concentrations of teichoic and lipoteichoic acids",
      "An outer coat composed entirely of chitin and beta-glucan"
    ],
    "c": 0,
    "r": "Mycobacterium tuberculosis possesses an exceptionally complex, lipid-rich cell envelope that comprises up to 60% of its dry weight. The primary structural determinants of its 'acid-fastness' are mycolic acids—long-chain (C60–C90), branched-chain beta-hydroxy fatty acids linked to arabinogalactan-peptidoglycan complexes. This dense, waxy lipid barrier prevents penetration of water-soluble stains. Once carbolfuchsin dye is driven into the bacilli with heat, it complexes tightly with mycolic acids and resists decolorization by 3% hydrochloric acid in ethanol (acid-alcohol).\n\nHigh-Yield Pearl: Acid-fastness of Mycobacterium tuberculosis is due to long-chain mycolic acids in its waxy, lipid-rich cell wall."
  },
  {
    "cat": 3,
    "q": "A 58-year-old intubated ICU patient with acute respiratory distress syndrome develops a high fever and copious green, sweet-grape-smelling endotracheal secretions on day 8 of mechanical ventilation. Sputum culture on MacConkey agar grows non-lactose fermenting, oxidase-positive, gram-negative bacilli that produce pyocyanin and pyoverdine pigments. Which of the following bacterial pathogens is the most common cause of multidrug-resistant ventilator-associated pneumonia (VAP)?",
    "a": [
      "Pseudomonas aeruginosa",
      "Streptococcus pneumoniae",
      "Haemophilus influenzae",
      "Moraxella catarrhalis",
      "Mycoplasma pneumoniae"
    ],
    "c": 0,
    "r": "Pseudomonas aeruginosa is an aerobic, non-lactose fermenting, oxidase-positive gram-negative bacillus. It is the leading cause of nosocomial and ventilator-associated pneumonia (VAP) in hospitalized ICU patients. It characteristically produces blue-green pigments (pyocyanin and pyoverdine) with a sweet, grape-like or fruity odor. P. aeruginosa forms robust biofilms on endotracheal tubes and produces potent toxins, notably Exotoxin A (which inactivates elongation factor-2 [EF-2] via ADP-ribosylation, halting host protein synthesis, identical to diphtheria toxin).\n\nHigh-Yield Pearl: Pseudomonas aeruginosa is the premier pathogen in ventilator-associated pneumonia (VAP); oxidase-positive, produces pyocyanin and Exotoxin A (EF-2 inhibitor)."
  },
  {
    "cat": 3,
    "q": "A 68-year-old man presents with shaking rigors, high fever, and right-sided pleuritic chest pain. Sputum Gram stain reveals lancet-shaped gram-positive diplococci. He is diagnosed with lobar pneumonia caused by Streptococcus pneumoniae. Which of the following virulence factors is the single most critical determinant of this organism's virulence, enabling it to evade opsonization and phagocytosis by alveolar macrophages?",
    "a": [
      "Extracellular polysaccharide capsule",
      "IgA protease alone",
      "Pneumolysin pore-forming toxin",
      "Surface M-protein filaments",
      "Filamentous hemagglutinin"
    ],
    "c": 0,
    "r": "The polysaccharide capsule is the primary, indispensable virulence factor of Streptococcus pneumoniae. Over 100 distinct capsular serotypes exist. The thick capsule physically shields bacterial surface antigens from complement factor C3b deposition and prevents recognition by Fc and complement receptors on host alveolar macrophages and neutrophils. Non-encapsulated strains are completely avirulent and rapidly cleared by phagocytes. The capsule forms the basis of both the 20-valent pneumococcal conjugate vaccine (PCV20) and the 23-valent polysaccharide vaccine (PPSV23).\n\nHigh-Yield Pearl: The antiphagocytic polysaccharide capsule is the major virulence factor of Streptococcus pneumoniae; non-capsulated strains are avirulent."
  },
  {
    "cat": 3,
    "q": "A clinical microbiology laboratory inoculates an expectorated sputum sample from a patient suspected of having cavitary tuberculosis onto an egg-based, malachite green-containing solid selective medium. Colonies of Mycobacterium tuberculosis appear after 4 weeks of incubation as rough, buff-colored, crumbly 'breadcrumb-like' colonies. What is the specific name of this classic diagnostic solid culture medium?",
    "a": [
      "Lowenstein-Jensen (LJ) medium",
      "Thayer-Martin chocolate agar",
      "MacConkey bile-salt agar",
      "Bordet-Gengou potato-glycerol agar",
      "Buffered Charcoal Yeast Extract (BCYE) agar"
    ],
    "c": 0,
    "r": "Lowenstein-Jensen (LJ) medium is the classic egg-based solid selective medium used for culturing Mycobacterium tuberculosis and other mycobacteria. It contains whole eggs, glycerol, potato flour, and malachite green. Malachite green acts as a selective inhibitor that suppresses the rapid overgrowth of contaminating gram-positive and gram-negative oral bacterial flora during the prolonged 3-to-6-week incubation required for slow-growing mycobacteria. M. tuberculosis characteristically forms dry, rough, crumbly, buff/cream-colored colonies.\n\nHigh-Yield Pearl: Lowenstein-Jensen (LJ) egg-based medium containing malachite green is the classic solid culture medium for Mycobacterium tuberculosis."
  },
  {
    "cat": 3,
    "q": "A 45-year-old immigrant from a high-incidence country presents with chronic productive cough, hemoptysis, night sweats, and progressive weight loss. According to standard international infectious disease protocols, what is the verified, universally recommended diagnostic sequence to establish the definitive diagnosis of active pulmonary tuberculosis?",
    "a": [
      "Chest radiography (CXR) followed immediately by three consecutive morning sputum AFB smears (Ziehl-Neelsen) and mycobacterial culture on LJ / liquid media",
      "Single Mantoux tuberculin skin test (TST) followed by discharge if negative",
      "Immediate blind surgical open lung biopsy without sputum collection",
      "Serum antibody ELISA test followed by broad-spectrum ampicillin monotherapy",
      "Routine 24-hour urine collection for calcium"
    ],
    "c": 0,
    "r": "The standard diagnostic algorithm for suspected pulmonary tuberculosis begins with a posterior-anterior chest radiograph (CXR), which typically demonstrates apical/upper lobe cavitary infiltrates or consolidations. This must be immediately followed by the collection of three consecutive early-morning expectorated sputum specimens for: 1) Acid-Fast Bacilli (AFB) microscopy (Ziehl-Neelsen or auramine-rhodamine fluorochrome staining); 2) Nucleic acid amplification testing (NAAT / GeneXpert MTB/RIF) for rapid confirmation and rifampin resistance detection; and 3) Mycobacterial culture on solid (Lowenstein-Jensen) and automated liquid broth media (the gold standard for definitive diagnosis and drug susceptibility testing).\n\nHigh-Yield Pearl: Standard TB diagnostic sequence: Chest X-ray, followed by 3 consecutive morning sputum AFB smears, NAAT, and mycobacterial culture (LJ medium)."
  },
  {
    "cat": 3,
    "q": "A 36-year-old HIV-infected patient with a CD4+ T-cell count of 45/µL develops subacute headache, low-grade fever, and mild non-productive cough. Lumbar puncture confirms cryptococcal meningoencephalitis with round yeast cells showing wide halos on India ink preparation. Which of the following environmental reservoirs represents the classic, primary ecological source of human infection with Cryptococcus neoformans?",
    "a": [
      "Soil enriched with pigeon droppings (avian guano)",
      "Decaying hollows of Eucalyptus trees in tropical zones exclusively",
      "Inhalation of aerosols from stagnant cooling towers and hotel air conditioners",
      "Direct transmission via rodent flea bites",
      "Consumption of unpasteurized goat cheese"
    ],
    "c": 0,
    "r": "Cryptococcus neoformans is an encapsulated, round, opportunistic yeast found ubiquitously in the environment, with an exceptionally high concentration in soil contaminated with avian excreta, particularly pigeon droppings (guano). Infection occurs via inhalation of aerosolized basidiospores or desiccated yeast cells into the lungs. In immunocompromised individuals (especially advanced AIDS with CD4 < 100/µL), the organism disseminates hematogenously from the respiratory tract to the central nervous system, producing life-threatening cryptococcal meningitis.\n\nHigh-Yield Pearl: Cryptococcus neoformans is acquired by inhaling yeast from soil enriched with pigeon droppings (avian guano); features a thick glucuronoxylomannan capsule."
  },
  {
    "cat": 3,
    "q": "A 52-year-old leukemia patient undergoing induction chemotherapy develops profound neutropenia (absolute neutrophil count < 200/µL), high fever, pleuritic chest pain, and hemoptysis. Chest CT reveals nodular pulmonary consolidations surrounded by a ground-glass halo ('halo sign'). A transbronchial biopsy is stained with Gomori Methenamine Silver (GMS). What are the characteristic microscopic morphological features of Aspergillus fumigatus hyphae?",
    "a": [
      "Narrow, septate hyphae (3–5 µm wide) with regular acute-angle (45-degree) branching",
      "Broad, irregularly ribbon-like non-septate hyphae branching at wide right angles (90 degrees)",
      "Round yeast cells with narrow-based unequal budding",
      "Broad-based budding yeasts with thick double-contoured cell walls",
      "Large thick-walled spherules containing numerous endospores"
    ],
    "c": 0,
    "r": "Aspergillus fumigatus is an angioinvasive mold that characteristically forms narrow (3–5 µm wide), regularly septate hyphae that exhibit dichotomous acute-angle (~45-degree) V-shaped branching (mnemonic: 'A' for Aspergillus = Acute Angle / 45°). In severely neutropenic hosts, the hyphae invade pulmonary blood vessel walls (angioinvasion), causing arterial thrombosis, coagulative necrosis, infarction, and cavitation (seen on CT as the 'halo sign' and 'air crescent sign').\n\nHigh-Yield Pearl: Aspergillus fumigatus features narrow, septate hyphae with acute-angle (45°) branching; contrast with Mucor (broad, non-septate, 90° right-angle branching)."
  },
  {
    "cat": 3,
    "q": "A 48-year-old allogeneic stem cell transplant recipient with graft-versus-host disease on high-dose immunosuppression develops sudden hemoptysis, fever, and wedge-shaped peripheral pulmonary infiltrates on chest CT. Histological examination of lung resection tissue shows extensive vascular occlusion by fungal hyphae with surrounding coagulative ischemic infarction and necrotizing granulomatous inflammation. This pathological condition represents:",
    "a": [
      "Angioinvasive pulmonary aspergillosis",
      "Simple non-invasive pulmonary aspergilloma (fungus ball in a pre-existing cavity)",
      "Allergic bronchopulmonary aspergillosis (ABPA)",
      "Pulmonary histoplasmosis with coin lesions",
      "Pneumocystis jirovecii intra-alveolar foamy exudate"
    ],
    "c": 0,
    "r": "Angioinvasive aspergillosis is a fulminant, life-threatening opportunistic fungal infection seen almost exclusively in severely immunocompromised individuals (e.g., profound neutropenia, hematopoietic stem cell transplants, high-dose corticosteroids). Aspergillus hyphae physically invade and penetrate through the walls of pulmonary arteries and arterioles. This induces vascular thrombosis, tissue ischemia, coagulative hemorrhagic infarction, and necrotizing granulomas. Treatment is immediate intravenous voriconazole or isavuconazole.\n\nHigh-Yield Pearl: Angioinvasive aspergillosis features fungal vascular invasion leading to thrombosis, wedge-shaped hemorrhagic infarction, and necrotizing granulomas."
  },
  {
    "cat": 3,
    "q": "An 18-month-old toddler presents with a 2-day history of low-grade fever, hoarseness, a harsh barking cough resembling a seal, and inspiratory stridor that worsens with crying. A soft-tissue neck radiograph reveals symmetrical subglottic tapering of the tracheal air column, producing the characteristic 'steeple sign'. This clinical syndrome (acute laryngotracheobronchitis / croup) is most commonly caused by which of the following viral pathogens?",
    "a": [
      "Human parainfluenza virus types 1 and 2 (Paramyxoviridae family)",
      "Respiratory syncytial virus (RSV) subgroup B",
      "Adenovirus serotypes 4 and 7",
      "Epstein-Barr virus (EBV)",
      "Influenza A virus H1N1"
    ],
    "c": 0,
    "r": "Croup (acute laryngotracheobronchitis) is an acute viral infection of the upper airway seen characteristically in children aged 6 months to 3 years. The predominant causative agents are Human Parainfluenza Viruses (type 1 is most common, followed by type 2), belonging to the Paramyxoviridae family (enveloped, negative-sense, single-stranded RNA viruses). Inflammation and mucosal edema in the subglottic region (the narrowest part of the pediatric airway) produce the clinical triad of barking cough, hoarseness, and inspiratory stridor, along with the radiological 'steeple sign' (subglottic tracheal narrowing).\n\nHigh-Yield Pearl: Human parainfluenza virus (Paramyxoviridae) is the leading cause of croup (laryngotracheobronchitis), marked by barking cough and the subglottic 'steeple sign'."
  },
  {
    "cat": 3,
    "q": "In 2012, a novel severe viral respiratory illness characterized by acute atypical pneumonia rapidly progressing to acute respiratory distress syndrome (ARDS) and acute renal failure was identified in patients presenting to intensive care units across the Arabian Peninsula. Epidemiological investigation identified dromedary camels as the primary zoonotic animal reservoir. Which of the following coronaviruses was responsible for this outbreak?",
    "a": [
      "Middle East Respiratory Syndrome Coronavirus (MERS-CoV)",
      "Severe Acute Respiratory Syndrome Coronavirus 1 (SARS-CoV-1)",
      "Severe Acute Respiratory Syndrome Coronavirus 2 (SARS-CoV-2)",
      "Human Coronavirus 229E",
      "Human Coronavirus OC43"
    ],
    "c": 0,
    "r": "Middle East Respiratory Syndrome (MERS) is caused by MERS-CoV, a lineage C beta-coronavirus first isolated in Jeddah, Saudi Arabia in 2012. It is a zoonotic virus with dromedary camels serving as the primary animal reservoir and intermediate host (with ancestral origin in bats). MERS-CoV utilizes dipeptidyl peptidase 4 (DPP4 / CD26) as its cellular entry receptor. Clinical infection has a high case fatality rate (~35%), presenting as severe pneumonia, rapid progression to ARDS, multiorgan failure, and acute kidney injury.\n\nHigh-Yield Pearl: MERS-CoV originated in the Arabian Peninsula, utilizes dromedary camels as its reservoir, binds DPP4 (CD26), and causes severe ARDS with ~35% mortality."
  },
  {
    "cat": 3,
    "q": "A 38-year-old HIV-infected man with a CD4+ T-cell count of 80/µL presents with a 3-week history of dry nonproductive cough, exertional dyspnea, and low-grade fever. Bilateral diffuse perihilar ground-glass opacities are present on chest radiograph. Induced sputum is stained with Grocott's Methenamine Silver (GMS). Microscopic examination reveals numerous dark, cup-shaped and disc-shaped cystic structures (4–6 µm) with central dots, resembling 'crushed ping-pong balls'. What is the causative opportunistic pathogen?",
    "a": [
      "Pneumocystis jirovecii",
      "Mycobacterium avium-intracellulare",
      "Cytomegalovirus (CMV)",
      "Legionella pneumophila",
      "Streptococcus agalactiae"
    ],
    "c": 0,
    "r": "Pneumocystis jirovecii (formerly P. carinii) is an atypical, opportunistic unicellular fungus (classified genetically as a fungus, though lacking ergosterol in its cell membrane). It is the premier AIDS-defining opportunistic pulmonary infection in patients with CD4 counts <200/µL. On Grocott's Methenamine Silver (GMS) stain, P. jirovecii cysts stain black or dark brown and appear as round, cup-shaped, disc-shaped, or collapsed 'crushed ping-pong balls' (4–6 µm in diameter) with prominent central eccentric intracystic dot-like parent bodies. First-line prophylaxis and treatment is trimethoprim-sulfamethoxazole (TMP-SMX).\n\nHigh-Yield Pearl: Pneumocystis jirovecii appears as cup-shaped, disc-like silver-staining cysts on GMS; premier opportunistic infection in AIDS patients with CD4 <200."
  },
  {
    "cat": 2,
    "q": "A 60-year-old patient with an acute exacerbation of severe COPD is evaluated in the emergency department. Physical examination reveals central cyanosis, somnolence, flapping tremor of the outstretched hands (asterixis), and tachycardia. Arterial blood gas on room air shows: pH 7.22, PaCO2 70 mmHg, and PaO2 44 mmHg. This classic clinical and physiological triad defines:",
    "a": [
      "Severe acute respiratory insufficiency (hypoxemia, hypercapnia, and clinical cyanosis)",
      "Isolated hypocapnic anxiety-induced hyperventilation",
      "Pure uncompensated metabolic alkalosis",
      "Primary carbon monoxide toxicity with normal tissue oxygenation",
      "Erythrocytosis-induced hyperviscosity syndrome without gas exchange failure"
    ],
    "c": 0,
    "r": "Severe acute respiratory insufficiency (acute respiratory failure) is classically defined by the pathological failure of the respiratory system to maintain adequate arterial oxygenation and/or carbon dioxide elimination. The clinical hallmark triad consists of: 1) Profound arterial hypoxemia (PaO2 < 60 mmHg), 2) Acute hypercapnia (PaCO2 > 50 mmHg) producing respiratory acidosis (pH < 7.35) and CO2 narcosis (somnolence, asterixis, headache, vasodilation), and 3) Clinical cyanosis (reflecting >5 g/dL of reduced deoxygenated hemoglobin).\n\nHigh-Yield Pearl: Severe respiratory insufficiency is clinically defined by the triad of hypoxemia (PaO2 <60), acute hypercapnia (PaCO2 >50), and clinical cyanosis."
  },
  {
    "cat": 0,
    "q": "A 2-year-old toddler is brought to the emergency department after an episode of sudden coughing and choking while eating whole peanuts. Physical examination reveals unilateral wheezing and decreased breath sounds over the right hemithorax. If aspirated in the upright position, into which of the following anatomical airways is an inhaled foreign body statistically most likely to lodge, and for what anatomical reason?",
    "a": [
      "The right main bronchus, because it is wider, shorter (approx. 2.5 cm vs 5 cm), and runs more vertically than the left main bronchus",
      "The left main bronchus, because it has a larger diameter to accommodate the cardiac notch",
      "Equally distributed between right and left main bronchi with zero anatomical difference",
      "Exclusively into the left upper lobe apical bronchus due to tracheal curvature",
      "Immediately trapped in the pyriform sinus without entering the laryngeal vestibule"
    ],
    "c": 0,
    "r": "In aspirated foreign bodies, the anatomical architecture of the tracheobronchial tree creates a marked predilection for the right bronchial tree (~70–80% of aspirates). The right main (primary) bronchus is wider in diameter, significantly shorter (~2.5 cm length vs ~5.0 cm for the left), and branches off the trachea at a steeper, more vertical angle (~25 degrees from midline vs ~45 degrees for the left main bronchus, which is pushed more horizontally by the aortic arch and heart). Therefore, aspirated objects naturally follow the straight, vertical path down into the right main bronchus (and in an upright person, into the right lower lobe).\n\nHigh-Yield Pearl: Foreign bodies preferentially aspirate into the right main bronchus because it is wider, shorter, and more vertically oriented than the left."
  }
];
