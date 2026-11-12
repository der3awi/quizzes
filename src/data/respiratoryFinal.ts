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
      "Accelerated secretion of bicarbonate ions promoting excessive osmotic luminal water reabsorption",
      "Decreased chloride ion secretion coupled with unregulated hyperactivation of epithelial sodium channels",
      "Excessive apical extrusion of potassium ions causing secondary osmotic transudation into the submucosa",
      "Impaired chloride secretion with compensatory downregulation of epithelial sodium channels",
      "Primary defect in ciliary dynein arms preventing active clearance of normally hydrated secretions"
    ],
    "c": 1,
    "r": "In healthy airway epithelium, the CFTR channel secretes chloride and tonically downregulates/inhibits the epithelial sodium channel (ENaC). In cystic fibrosis, mutated CFTR fails to secrete chloride and loses its inhibitory regulation over ENaC, leading to hyperactivated ENaC channels that excessively reabsorb sodium and water from the airway lumen."
  },
  {
    "cat": 3,
    "q": "A 6-week-old female infant is evaluated following an abnormal newborn screening test demonstrating elevated immunoreactive trypsinogen (IRT). The infant was delivered at 39 weeks of gestation, currently weighs 4.4 kg, and has been feeding well without vomiting or respiratory symptoms. A quantitative pilocarpine iontophoresis sweat test is performed on both forearms.<span class='q-stem-bold'>According to international consensus guidelines taught in the curriculum, which of the following sweat chloride concentrations is unequivocally diagnostic of cystic fibrosis?</span>",
    "a": [
      "A sweat chloride concentration greater than or equal to 60 mmol/L",
      "A sweat chloride concentration greater than or equal to 30 mmol/L",
      "A sweat chloride concentration greater than or equal to 90 mmol/L",
      "A sweat chloride concentration greater than or equal to 45 mmol/L",
      "A sweat chloride concentration greater than or equal to 75 mmol/L"
    ],
    "c": 0,
    "r": "The quantitative pilocarpine iontophoresis sweat chloride test is the gold standard for CF diagnosis. Results >= 60 mmol/L are diagnostic of CF; 30-59 mmol/L is intermediate/borderline; and < 30 mmol/L makes CF unlikely."
  },
  {
    "cat": 1,
    "q": "A 52-year-old male with progressive exertional dyspnea is evaluated in the pulmonary clinic. Helium dilution testing reveals a residual volume (RV) of 1,200 mL and an expiratory reserve volume (ERV) of 1,100 mL. Standard spirometry reveals an inspiratory capacity (IC) of 3,500 mL.<span class='q-stem-bold'>What is this patient's calculated Total Lung Capacity (TLC)?</span>",
    "a": [
      "4,600 mL",
      "3,500 mL",
      "6,900 mL",
      "5,800 mL",
      "4,700 mL"
    ],
    "c": 3,
    "r": "Total Lung Capacity (TLC) = Vital Capacity (VC) + Residual Volume (RV). Vital capacity = IC + ERV = 3,500 + 1,100 = 4,600 mL. TLC = 4,600 + 1,200 = 5,800 mL."
  },
  {
    "cat": 3,
    "q": "A 61-year-old male with a 45 pack-year smoking history presents with worsening shortness of breath and chronic productive cough. Physical examination reveals an increased anteroposterior chest diameter ('barrel chest'), hyperresonance to percussion, and distant heart sounds. Spirometry confirms severe airflow limitation. Microscopic examination of lung parenchyma demonstrates destruction of alveolar septa predominantly centered around the respiratory bronchioles in the upper lung lobes, with relative sparing of distal alveoli.<span class='q-stem-bold'>Which of the following is the most likely diagnosis and underlying pathological distribution?</span>",
    "a": [
      "Chronic bronchitis, predominantly characterized by marked hypertrophy of bronchial smooth muscle and mucus glands.",
      "Distal acinar emphysema, predominantly affecting the subpleural margins associated with spontaneous pneumothorax.",
      "Centriacinar emphysema, predominantly affecting the upper lung zones associated with cigarette smoke.",
      "Panacinar emphysema, predominantly affecting the lower lung zones associated with alpha-1-antitrypsin deficiency.",
      "Idiopathic pulmonary fibrosis, predominantly characterized by fibroblastic foci and peripheral honeycombing."
    ],
    "c": 2,
    "r": "Emphysema in cigarette smokers is predominantly centriacinar (centrilobular) emphysema, which primarily affects the respiratory bronchioles of the upper lobes."
  },
  {
    "cat": 3,
    "q": "A medical student observes a professor discussing pulmonary pathology. The professor asks: 'If emphysema is fundamentally a disease characterized by the loss and destruction of alveolar walls, why does it manifest functionally as an obstructive airways disorder with prolonged expiration and air trapping?'<span class='q-stem-bold'>Which of the following best explains the precise pathophysiological mechanism of expiratory obstruction in emphysema?</span>",
    "a": [
      "Excessive goblet cell hyperplasia in large bronchi causes mechanical lumen obstruction with thick mucus plugs.",
      "Severe hypertrophy of peribronchial smooth muscle leads to irreversible tonic bronchospasm.",
      "Loss of alveolar radial traction and elastic recoil causes premature dynamic collapse of small airways during expiration.",
      "Extensive peri-bronchiolar fibrosis rigidly constricts bronchiolar lumens during both phases of respiration.",
      "Hypersecretion of surfactant creates excessive airway wall surface tension that collapses terminal bronchioles."
    ],
    "c": 2,
    "r": "Alveolar walls provide radial tethering (elastic traction) that holds small non-cartilaginous bronchioles open. Destruction of alveolar septa eliminates this tethering, leading to premature dynamic airway collapse during active expiration."
  },
  {
    "cat": 3,
    "q": "A 34-year-old non-smoking male accountant presents with progressive exertional dyspnea and wheezing over the past 2 years. His father died of liver cirrhosis and respiratory failure at age 42. High-resolution CT of the chest demonstrates diffuse, severe emphysematous changes that are most pronounced in the lower lobes bilaterally. Laboratory evaluation reveals abnormal liver enzymes with elevated ALT and AST.<span class='q-stem-bold'>Which of the following is the underlying molecular defect causing this patient's disease?</span>",
    "a": [
      "Congenital deficiency of dynein arms causing immotile cilia and bronchiectasis.",
      "Defective cystic fibrosis transmembrane conductance regulator causing dehydration of respiratory mucus.",
      "Autoantibodies against the non-collagenous domain of type IV collagen in alveolar basement membranes.",
      "Constitutive overactivation of the epidermal growth factor receptor kinase in bronchiolar epithelium.",
      "Unchecked elastase activity due to a deficiency in an antiprotease enzyme synthesized by hepatocytes."
    ],
    "c": 4,
    "r": "Panacinar emphysema focused in the lower lobes combined with liver disease is classic for alpha-1-antitrypsin (AAT) deficiency, resulting in unchecked neutrophil elastase destruction of alveolar elastic tissue."
  },
  {
    "cat": 3,
    "q": "A 58-year-old male with a 35 pack-year smoking history presents to his family physician complaining of a persistent cough that produces copious white-to-yellow sputum almost every morning. He notes that this cough has occurred for at least 4 consecutive months each year over the past 3 consecutive years. On exam, he is cyanotic and overweight, with bilateral coarse crackles and expiratory rhonchi.<span class='q-stem-bold'>What is the standard clinical diagnostic definition met by this patient?</span>",
    "a": [
      "Emphysema: permanent enlargement of airspaces distal to terminal bronchioles with wall destruction.",
      "Chronic bronchitis: persistent productive cough for at least 3 consecutive months in at least 2 consecutive years.",
      "Simple chronic bronchitis: presence of hyperactive bronchial constriction without mucus production.",
      "Asthma: documented airway hyperresponsiveness with at least 12% and 200 mL reversibility after bronchodilator.",
      "Bronchiectasis: irreversible permanent dilation of bronchi demonstrated on high-resolution chest CT scan."
    ],
    "c": 1,
    "r": "Chronic bronchitis is clinically defined as a persistent cough productive of sputum for at least 3 months in at least 2 consecutive years."
  },
  {
    "cat": 1,
    "q": "A 63-year-old former shipyard worker presents with progressive exertional dyspnea and dry cough. Physical exam demonstrates bilateral end-inspiratory fine velcro crackles and digital clubbing. Chest radiography reveals reticular interstitial opacities and pleural plaques. Spirometry is performed.<span class='q-stem-bold'>Which of the following sets of pulmonary function findings is characteristic of this patient's restrictive pulmonary disorder?</span>",
    "a": [
      "Decreased FVC, normal FEV1, markedly decreased FEV1/FVC ratio (<0.60), and normal TLC.",
      "Normal FVC, normal FEV1, normal FEV1/FVC ratio, and markedly increased residual volume.",
      "Decreased FVC, decreased FEV1, normal or increased FEV1/FVC ratio, and decreased TLC.",
      "Normal FVC, markedly decreased FEV1, decreased FEV1/FVC ratio (<0.70), and increased TLC.",
      "Increased FVC, increased FEV1, markedly decreased FEV1/FVC ratio, and increased FRC."
    ],
    "c": 2,
    "r": "Restrictive lung disorders (e.g., asbestosis, idiopathic pulmonary fibrosis, sarcoidosis) demonstrate reduced FVC, reduced FEV1, a preserved or increased FEV1/FVC ratio (>=0.80), and decreased Total Lung Capacity (TLC)."
  },
  {
    "cat": 1,
    "q": "A 48-year-old woman with systemic sclerosis is referred for flow-volume loop spirometry. The technician reviews the generated flow-volume loop. Compared to a healthy reference loop, her curve shows a markedly reduced vital capacity with preserved peak expiratory flow relative to her smaller lung volume. The loop appears tall and narrow, and the entire curve is shifted along the horizontal axis.<span class='q-stem-bold'>Based on the spirometry lecture, which of the following describes the axis shift and configuration of the flow-volume loop in restrictive disease?</span>",
    "a": [
      "The loop shifts downward below the horizontal zero-flow baseline with a normal vital capacity.",
      "The loop demonstrates flattening of both the inspiratory and expiratory limbs with no horizontal shift.",
      "The loop shifts to the left along the volume axis with a wide horizontal width and increased RV.",
      "The loop shifts to the right along the volume axis with a narrowed horizontal width and reduced TLC.",
      "The loop demonstrates a scooped-out concave expiratory limb with an extreme shift to the left."
    ],
    "c": 3,
    "r": "In restrictive lung disease, reduced lung compliance and volume shift the flow-volume loop to the right along the volume axis with a narrowed, miniature ('witch-hat') profile."
  },
  {
    "cat": 1,
    "q": "A 19-year-old college student with acute asthma exacerbation performs spirometry during her clinic visit. The resulting flow-volume curve is compared against her baseline tracing obtained when she was asymptomatic 6 months earlier.<span class='q-stem-bold'>Which of the following specific changes in the expiratory portion of the flow-volume loop is most characteristic of acute asthma?</span>",
    "a": [
      "Sharp, rapid expiratory ascent with an abnormally elevated linear downward slope and normal RV.",
      "Complete horizontal symmetric narrowing of the loop without altering peak flow rates.",
      "Selective amputation and flattening of only the inspiratory flow curve below the horizontal axis.",
      "Shift of the entire curve to the right along the volume axis due to pulmonary stiffness.",
      "Reduced peak expiratory flow with a concave ('scooped-out') appearance of the expiratory curve."
    ],
    "c": 4,
    "r": "In acute asthma, narrowed airways increase resistance and impair expiratory flow, producing a reduced PEF and a concave ('scooped-out') expiratory curve."
  },
  {
    "cat": 3,
    "q": "A 66-year-old male with a 50 pack-year smoking history presents with a 2-month history of worsening cough and hemoptysis. A chest radiograph demonstrates a 4-cm centrally located hilar mass obstructing the right main bronchus with secondary distal atelectasis. Bronchoscopy with biopsy of the mass is performed. Histopathology reveals sheets of polygonal malignant epithelial cells with abundant eosinophilic cytoplasm, prominent intercellular bridges, and swirling foci of keratinization ('keratin pearls').<span class='q-stem-bold'>Which of the following is the most likely diagnosis?</span>",
    "a": [
      "Large cell neuroendocrine carcinoma",
      "Adenocarcinoma",
      "Small cell lung carcinoma",
      "Bronchial carcinoid tumor",
      "Squamous cell carcinoma"
    ],
    "c": 4,
    "r": "Squamous cell carcinoma of the lung is classically a central hilar mass in smokers characterized histologically by keratin pearls and intercellular bridges."
  },
  {
    "cat": 3,
    "q": "A 5-year-old unimmunized boy is brought to the emergency department by his parents with acute onset of high fever (39.8°C / 103.6°F), severe throat pain, and difficulty swallowing. On physical examination, the child appears toxic, anxious, and sits leaning forward with his neck extended and mouth open, exhibiting continuous drooling. He has inspiratory stridor, a muffled 'hot potato' voice, and no cough. Lateral neck radiography demonstrates marked swelling of the supraglottic tissues ('thumbprint sign').<span class='q-stem-bold'>Which of the following represents the most appropriate immediate step in the management of this child?</span>",
    "a": [
      "Immediate placement of an intravenous catheter to obtain blood cultures and start broad-spectrum antibiotics",
      "Direct pharyngeal inspection using a wooden tongue blade to confirm cherry-red epiglottic swelling",
      "Emergent flexible fiberoptic laryngoscopy performed bedside while keeping the child in the supine position",
      "Administration of nebulized racemic epinephrine and high-dose oral dexamethasone in the triage area",
      "Controlled airway examination and endotracheal intubation in an operating room with a surgical team on standby"
    ],
    "c": 4,
    "r": "Acute epiglottitis (classic 'three Ds': dysphagia, drooling, distress, plus 'thumbprint sign') is a life-threatening airway emergency. The immediate priority is controlled endotracheal intubation in the operating room with an experienced surgical airway team on standby; agitating maneuvers (tongue blades, IV sticks) must be avoided."
  },
  {
    "cat": 3,
    "q": "A 68-year-old male with long-standing smoking history presents with severe sharp right-sided chest pain that worsens markedly with deep inspiration, coughing, and sneezing. Physical exam reveals a localized pleural friction rub over the right lateral chest wall. Chest CT confirms a peripheral subpleural tumor invading into the parietal pleura with an associated exudative effusion.<span class='q-stem-bold'>Based on the symptoms and mechanisms presented in the lecture, what is the underlying mechanism of this patient's pleuritic chest pain?</span>",
    "a": [
      "Mechanical ulceration of the major bronchial mucosa causing bronchospasm.",
      "Localized pleural inflammation and friction synchronized with respiratory chest wall movement.",
      "Irritation of vagal sensory endings located exclusively within the alveolar parenchyma.",
      "Direct stretching of the visceral pleura, which is richly supplied with somatic nociceptive pain fibers.",
      "Spontaneous erosion into the pulmonary arterial trunk producing ischemic chest pain."
    ],
    "c": 1,
    "r": "Pleuritic chest pain is localized pleural pain synchronized with respiration, caused by inflammation or malignant invasion of the somatic-innervated parietal pleura."
  },
  {
    "cat": 3,
    "q": "During a public health outbreak briefing regarding influenza vaccination, an epidemiologist explains that achieving an 85% immunization rate in a metropolitan area will prevent widespread transmission and protect infants under 6 months of age and individuals with severe combined immunodeficiency who cannot receive live vaccines.<span class='q-stem-bold'>Which of the following immunological and epidemiological principles is being described?</span>",
    "a": [
      "Cross-reactive cell-mediated cytotoxicity, where non-specific natural killer cells eliminate all related respiratory viruses.",
      "Original antigenic sin, where memory B cells persistently dominate over naive antibody repertoires.",
      "Antigenic shift, where genetic reassortment creates a novel hemagglutinin subtype in non-immune individuals.",
      "Passive artificial immunity, where circulating maternal antibodies provide lasting lifelong sterilizing immunity.",
      "Herd immunity, where high population coverage denies pathogens sufficient eligible hosts to sustain transmission."
    ],
    "c": 4,
    "r": "Herd (community) immunity occurs when a critical threshold of the population is immunized, depriving a pathogen of eligible hosts to sustain chains of transmission and indirectly protecting unimmunized individuals."
  },
  {
    "cat": 0,
    "q": "A male neonate born at 39 weeks of gestation develops profound cyanosis and severe sternal retractions immediately upon delivery in the labor suite. When the infant cries vigorously, his cyanosis resolves promptly and his oxygen saturation rises to 98% on room air. However, as soon as he calms down and closes his mouth, severe hypoxemia and cyanosis recur. Attempts to gently advance a 6-French catheter through either anterior naris into the nasopharynx meet firm bony obstruction at a depth of 1.5 cm.<span class='q-stem-bold'>Which of the following congenital anomalies is the primary cause of this newborn's cyclical respiratory distress?</span>",
    "a": [
      "Bilateral choanal atresia due to persistence of the embryological bucconasal membrane",
      "Congenital pulmonary airway malformation resulting in large communicating parenchymal cysts",
      "Congenital laryngomalacia with dynamic inspiratory collapse of supraglottic cartilaginous structures",
      "Congenital tracheal stenosis secondary to complete circumferential cartilaginous rings",
      "Unilateral cleft palate with secondary posterior displacement of the tongue into the hypopharynx"
    ],
    "c": 0,
    "r": "Newborns are obligate nasal breathers. Bilateral choanal atresia causes cyclical cyanosis that worsens at rest/feeding and resolves when crying (oral breathing), confirmed by failure to pass a nasal catheter into the nasopharynx."
  },
  {
    "cat": 3,
    "q": "A 10-year-old boy with asthma uses a metered-dose inhaler (MDI) containing fluticasone. His pediatrician notices white curd-like plaques on his buccal mucosa and posterior pharynx that easily scrape off leaving an erythematous base. The pediatrician emphasizes proper inhaler technique and prescribes an add-on device.<span class='q-stem-bold'>Which of the following best describes the clinical benefit of using a spacer device with an inhaled corticosteroid MDI?</span>",
    "a": [
      "It completely eliminates the need for daily maintenance dosing by creating a pulmonary depot.",
      "It chemically conjugates the steroid to albumin to extend its plasma elimination half-life.",
      "It converts the pressurized liquid suspension into a heated vapor to prevent bronchospasm.",
      "It decreases oropharyngeal drug impaction, reducing local candidiasis, and improves lung deposition.",
      "It accelerates aerosol particle velocity to ensure rapid drug absorption through the gastric mucosa."
    ],
    "c": 3,
    "r": "Spacer devices slow aerosol droplet velocity and trap large particles in the chamber, decreasing oropharyngeal impaction (preventing oral thrush and hoarseness) while enhancing lower airway delivery."
  },
  {
    "cat": 3,
    "q": "A 45-year-old immigrant from Southeast Asia with active pulmonary tuberculosis is started on standard four-drug therapy (isoniazid, rifampicin, pyrazinamide, and ethambutol). At his 2-week clinic visit, the patient expresses extreme panic, reporting that his urine and tears have turned bright reddish-orange.<span class='q-stem-bold'>Which of the prescribed medications is responsible for this patient's presentation, and what is the appropriate management?</span>",
    "a": [
      "Pyrazinamide; this indicates acute urate nephropathy requiring intravenous hydration.",
      "Rifampicin; this indicates acute rhabdomyolysis and myoglobinuria requiring hemodialysis.",
      "Rifampicin; this is a benign, harmless adverse effect, and the patient should be reassured.",
      "Ethambutol; this represents retrobulbar optic leakage requiring urgent ophthalmologic surgery.",
      "Isoniazid; this indicates severe hepatic failure requiring immediate drug cessation."
    ],
    "c": 2,
    "r": "Rifampicin imparts a harmless reddish-orange discoloration to urine, tears, and sweat; reassuring the patient prevents unnecessary non-adherence."
  },
  {
    "cat": 0,
    "q": "A newborn female born at 37 weeks of gestation to a mother whose pregnancy was complicated by polyhydramnios presents 20 minutes after birth with copious, frothy oral secretions and mild tachypnea. During her initial attempted feeding, the infant coughs, chokes, and turns transiently cyanotic. A chest radiograph demonstrates a coiled radiopaque feeding tube in the blind-ending upper esophageal pouch and significant gastric distension with bowel gas.<span class='q-stem-bold'>Failure of which of the following embryological events between the 4th and 5th weeks of gestation is responsible for this anomaly?</span>",
    "a": [
      "Incomplete branching morphogenesis of the secondary and tertiary bronchial lung buds",
      "Premature regression of the distal segment of the left fourth aortic vascular arch",
      "Failure of recanalization of the endodermal core filling the primitive laryngeal lumen",
      "Faulty longitudinal partitioning of the foregut by the tracheoesophageal septum",
      "Defective cranial closure of the pleuroperitoneal folds within the pericardioperitoneal canals"
    ],
    "c": 3,
    "r": "Proximal esophageal atresia with a distal tracheoesophageal fistula (Type C, ~86.6% of cases) results from faulty partitioning of the primitive foregut by the tracheoesophageal folds/septum during weeks 4–5 of gestation."
  },
  {
    "cat": 3,
    "q": "A 42-year-old woman undergoing treatment for pulmonary tuberculosis develops numbness, tingling, and burning pain in both feet in a stocking-glove distribution. Physical examination reveals decreased sensation to pinprick and vibration over the bilateral lower extremities.<span class='q-stem-bold'>Which of the following medications is most likely responsible for this neurological complication, and which cofactor deficiency mediates this process?</span>",
    "a": [
      "Isoniazid; mediated by competition with and deficiency of pyridoxine (vitamin B6).",
      "Pyrazinamide; mediated by depletion of nicotinic acid (vitamin B3).",
      "Streptomycin; mediated by oxidative damage to peripheral Schwann cell mitochondria.",
      "Ethambutol; mediated by inhibition of thiamine pyrophosphokinase (vitamin B1).",
      "Rifampicin; mediated by impaired intestinal absorption of cyanocobalamin (vitamin B12)."
    ],
    "c": 0,
    "r": "Isoniazid (INH) promotes excretion of pyridoxine (vitamin B6) and inhibits pyridoxal phosphokinase, causing peripheral neuropathy that is prevented by vitamin B6 supplementation."
  },
  {
    "cat": 3,
    "q": "A 31-year-old male presents with a persistent, non-productive dry nocturnal cough following an uncomplicated viral upper respiratory tract infection. He seeks an over-the-counter antitussive that will suppress his cough reflex without causing drowsiness, significant constipation, or opioid addiction potential. He is recommended dextromethorphan.<span class='q-stem-bold'>Which of the following describes the mechanism of action of dextromethorphan in treating cough?</span>",
    "a": [
      "Competitive blockade of muscarinic M3 receptors on postganglionic parasympathetic nerve terminals.",
      "Peripheral anesthetization of stretch receptors in the respiratory mucosa and pleura.",
      "Centrally acting suppression of the medullary cough center via NMDA/sigma receptor antagonism.",
      "Selective stimulation of beta-2 adrenergic receptors resulting in bronchial smooth muscle relaxation.",
      "Cleavage of disulfide bonds in cross-linked mucoprotein oligomers within bronchial secretions."
    ],
    "c": 2,
    "r": "Dextromethorphan is a centrally acting antitussive that suppresses the medullary cough center without significant opioid analgesia, sedation, or dependence at standard doses."
  },
  {
    "cat": 3,
    "q": "A 50-year-old patient with cystic fibrosis is admitted with thick, tenacious, viscous mucus secretions that are difficult to expectorate. The medical team administers an inhaled mucolytic agent whose biochemical mechanism relies on reducing the viscosity of bronchial secretions by breaking mucus polymers.<span class='q-stem-bold'>Which of the following agents acts through this exact biochemical mechanism?</span>",
    "a": [
      "Ambroxol, which acts primarily by inhibiting pulmonary surfactant production.",
      "Guaifenesin, which acts as an irritant to stimulate respiratory tract fluid flow.",
      "N-acetylcysteine, which hydrolyzes disulfide bonds in mucoproteins.",
      "Codeine, which binds mu-opioid receptors in the brainstem solitary tract.",
      "Dextromethorphan, which blocks glutamate transmission in bronchial ganglia."
    ],
    "c": 2,
    "r": "N-acetylcysteine contains a free sulfhydryl group that directly cleaves disulfide bonds (-S-S-) in mucoproteins, liquefying thick respiratory secretions."
  },
  {
    "cat": 1,
    "q": "A premature neonate delivered at 28 weeks of gestation develops severe tachypnea, grunting, nasal flaring, and intercostal retractions within 30 minutes of birth. Arterial blood gas shows severe hypoxemia and respiratory acidosis. Chest radiograph reveals diffuse ground-glass reticulogranular opacities with prominent air bronchograms. The attending neonatologist explains that the neonate's respiratory distress syndrome is primarily due to deficiency of a phospholipid-rich substance that coats alveolar surfaces.<span class='q-stem-bold'>According to the physics and physiology presented in the lecture, what is the primary role of this substance in the alveoli?</span>",
    "a": [
      "It increases alveolar transpulmonary pressure to exceed atmospheric barometric pressure.",
      "It reduces surface tension, thereby increasing pulmonary compliance and preventing alveolar collapse.",
      "It increases surface tension, thereby increasing elastic recoil and accelerating expiratory flow.",
      "It prevents pulmonary capillary leakage by directly occluding endothelial tight junctions.",
      "It chemically degrades collagen and elastin fibers within the interalveolar interstitium."
    ],
    "c": 1,
    "r": "Pulmonary surfactant (produced by Type II pneumocytes) reduces alveolar surface tension, increasing lung compliance, reducing the work of breathing, and preventing end-expiratory atelectasis."
  },
  {
    "cat": 0,
    "q": "A 26-year-old primigravida presents to the labor and delivery unit in active premature labor at 22 weeks of gestation. Ultrasound confirms intact fetal membranes and a single live fetus with normal anatomical morphology. The obstetrical and neonatal intensive care teams counsel the parents regarding the developmental status of the fetal respiratory system and the physiological threshold for extrauterine survival.<span class='q-stem-bold'>Which stage of pulmonary maturation is active at this gestational age, and what is its hallmark anatomical development?</span>",
    "a": [
      "Terminal sac stage, characterized by extensive thinning of type I pneumocytes and mature alveoli",
      "Alveolar stage, characterized by multiplication of definitive alveoli from secondary connective septa",
      "Embryonic stage, characterized by initial outpouching of the respiratory diverticulum from foregut",
      "Pseudoglandular stage, characterized by formation of the bronchial tree up to terminal bronchioles",
      "Canalicular stage, characterized by formation of respiratory bronchioles and capillary vascularization"
    ],
    "c": 4,
    "r": "The canalicular stage occurs from weeks 16 to 26 of gestation, characterized by enlargement of bronchial lumina, formation of respiratory bronchioles and alveolar ducts, and prominent capillary vascularization."
  },
  {
    "cat": 3,
    "q": "A 35-year-old male with chronic asthma inadvertently sprays an organophosphate insecticide in an enclosed garden shed. Within 20 minutes, he develops severe dyspnea, wheezing, diffuse rhonchi, profuse oral secretions, diaphoresis, and pinpoint pupils. His severe bronchoconstriction and hypersecretion are mediated by massive acetylcholine accumulation stimulating airway receptors.<span class='q-stem-bold'>Which of the following receptor types and autonomic pathways mediates this profound bronchoconstriction and mucus hypersecretion?</span>",
    "a": [
      "Histamine H2 receptors on respiratory pseudostratified ciliated columnar cells.",
      "Alpha-1 adrenergic receptors stimulated by circulating systemic epinephrine.",
      "Nicotinic neuronal receptors on pulmonary vascular endothelial cells.",
      "Muscarinic M3 receptors stimulated by postganglionic parasympathetic vagal fibers.",
      "Beta-2 adrenergic receptors stimulated by sympathetic postganglionic adrenergic fibers."
    ],
    "c": 3,
    "r": "Parasympathetic vagal fibers release acetylcholine onto muscarinic M3 receptors on bronchial smooth muscle and glands, inducing bronchoconstriction and mucus secretion."
  },
  {
    "cat": 3,
    "q": "A 15-month-old girl is brought to the pediatric urgent care clinic by her father due to a 2-day history of clear rhinorrhea, low-grade fever (38.1°C / 100.6°F), and progressive hoarseness. Her father notes that over the past 6 hours, she developed a harsh, barking, 'seal-like' cough and noisy breathing that becomes markedly pronounced whenever she cries or becomes agitated. On physical examination, the child has clear lungs bilaterally, inspiratory stridor at rest, and mild subcostal retractions without drooling or dysphagia.<span class='q-stem-bold'>Which of the following infectious pathogens is the most common etiology of this patient's clinical syndrome?</span>",
    "a": [
      "Haemophilus influenzae type b causing life-threatening supraglottic cellulitis",
      "Group A beta-hemolytic Streptococcus producing severe tonsillopharyngeal exudates",
      "Bordetella pertussis causing toxin-mediated lymphocytic leukocytosis and paroxysms",
      "Human parainfluenza virus types 1 and 2 causing subglottic inflammatory edema",
      "Respiratory syncytial virus causing extensive bronchiolar epithelial necrosis and plugging"
    ],
    "c": 3,
    "r": "Croup (acute laryngotracheobronchitis) presents in children under 3 years with hoarseness, barking 'seal-like' cough, and inspiratory stridor due to subglottic edema, most commonly caused by Parainfluenza virus types 1 and 2."
  },
  {
    "cat": 3,
    "q": "A 22-year-old previously healthy female university student presents with a 10-day history of low-grade fever, non-productive dry hacking cough, sore throat, and bilateral ear pain. Her room-mate had similar symptoms two weeks ago. Physical examination reveals an erythematous posterior pharynx, mild bullous myringitis, and minimal bilateral scattered crackles. Chest radiograph reveals bilateral patchy, diffuse reticular infiltrates that appear significantly worse than suggested by her physical examination.<span class='q-stem-bold'>Which of the following is the most likely pathogen responsible for this presentation of 'walking pneumonia', and what is the first-line oral antibiotic class?</span>",
    "a": [
      "Klebsiella pneumoniae; treated with an Aminoglycoside (gentamicin) monotherapy.",
      "Streptococcus pneumoniae; treated with a First-generation Cephalosporin (cefazolin).",
      "Mycoplasma pneumoniae; treated with a Macrolide (e.g., azithromycin) or Tetracycline (doxycycline).",
      "Pseudomonas aeruginosa; treated with high-dose oral Amoxicillin.",
      "Staphylococcus aureus; treated with oral Vancomycin."
    ],
    "c": 2,
    "r": "Mycoplasma pneumoniae causes atypical 'walking' pneumonia with diffuse interstitial infiltrates worse than physical signs. Lacking a peptidoglycan cell wall, it is treated with macrolides or tetracyclines."
  },
  {
    "cat": 3,
    "q": "A 59-year-old male heavy smoker presents with left shoulder pain radiating down his medial forearm, weakness of his left hand grip, and droopiness of his left eyelid. Physical exam reveals left-sided ptosis, miosis, and facial anhidrosis. Chest radiography reveals an ill-defined focal soft-tissue mass at the extreme apex of the left lung.<span class='q-stem-bold'>Which of the following structures is most likely compressed by this apical tumor to cause his pupillary and eyelid abnormalities?</span>",
    "a": [
      "Recurrent laryngeal nerve looping under the aortic arch",
      "Phrenic nerve traversing along the anterior scalene muscle",
      "Facial nerve (CN VII) within the stylomastoid foramen",
      "Oculomotor nerve (CN III) in the superior orbital fissure",
      "Cervicothoracic (stellate) sympathetic chain ganglion"
    ],
    "c": 4,
    "r": "Apical Pancoast (superior sulcus) tumors compress the cervicothoracic (stellate) sympathetic ganglion, causing ipsilateral Horner syndrome (ptosis, miosis, anhidrosis)."
  },
  {
    "cat": 3,
    "q": "A 64-year-old male with central small cell lung carcinoma is admitted with confusion, lethargy, and seizures. Laboratory evaluation reveals serum sodium of 116 mEq/L (normal 135–145), serum osmolality of 245 mOsm/kg (normal 275–295), and urine osmolality of 520 mOsm/kg. He is euvolemic on examination with no peripheral edema or jugular venous distension.<span class='q-stem-bold'>Which of the following paraneoplastic endocrinopathies is responsible for this patient's severe hyponatremia?</span>",
    "a": [
      "Hypersecretion of Calcitonin by neuroendocrine medullary carcinoma cells.",
      "Autoantibodies directed against presynaptic P/Q-type voltage-gated calcium channels.",
      "Ectopic secretion of Arginine Vasopressin (Antidiuretic Hormone) causing SIADH.",
      "Ectopic secretion of Adrenocorticotropic Hormone (ACTH) causing secondary hyperaldosteronism.",
      "Ectopic secretion of Parathyroid Hormone-related Protein (PTHrP) causing hypercalcemia."
    ],
    "c": 2,
    "r": "Small cell lung carcinoma (SCLC) frequently secretes ectopic ADH (arginine vasopressin), causing euvolemic hyponatremia with concentrated urine (SIADH)."
  },
  {
    "cat": 1,
    "q": "A 60-year-old male with severe emphysema undergoes whole-body plethysmography. Spirometry demonstrates FEV1/FVC of 0.45. Plethysmographic assessment demonstrates a markedly elevated Total Lung Capacity (TLC) of 135% of predicted and a Residual Volume (RV) of 190% of predicted.<span class='q-stem-bold'>Which of the following best explains why residual volume and total lung capacity are increased in this patient?</span>",
    "a": [
      "Hypertrophy of chest wall skeletal musculature prevents the ribcage from returning to its neutral resting position.",
      "Active contraction of the diaphragm maintains excessive negative intrapleural pressure at end-expiration.",
      "Reflex hyperventilation increases tidal volume beyond physiological inspiratory capacity limits.",
      "Proliferation of dense myofibroblasts deposits excessive collagen in the peribronchial spaces.",
      "Severe loss of pulmonary elastic recoil promotes premature small airway closure and significant air trapping."
    ],
    "c": 4,
    "r": "Loss of elastic recoil and alveolar radial tethering in emphysema results in premature small airway closure during expiration, trapping air and elevating RV, FRC, and TLC."
  },
  {
    "cat": 0,
    "q": "A 3-year-old boy is brought to the emergency department after accidentally choking on a raw peanut while running. He has sudden coughing and localized right-sided expiratory wheezing. Chest radiograph demonstrates hyperlucency and air-trapping in the right lower lung lobe during expiration. Flexible bronchoscopy is planned for foreign body retrieval.<span class='q-stem-bold'>Which of the following anatomical features of the right primary bronchus accounts for the predilection of aspirated foreign bodies to lodge in the right bronchial tree?</span>",
    "a": [
      "The right primary bronchus receives a higher velocity jet of air due to the leftward cardiac tilt.",
      "The right primary bronchus is narrower, longer, and branches at a sharper horizontal angle.",
      "The right primary bronchus is wider, shorter, and runs more vertically than the left main bronchus.",
      "The right primary bronchus lacks hyaline cartilage rings, allowing greater luminal distensibility.",
      "The right primary bronchus passes directly beneath the aortic arch, narrowing its entrance."
    ],
    "c": 2,
    "r": "The right main bronchus is wider, shorter (~2.5 cm), and oriented more vertically than the left main bronchus, making it the favored path for aspirated foreign objects."
  },
  {
    "cat": 3,
    "q": "A 71-year-old male with chronic obstructive pulmonary disease presents with high fever, shaking chills, pleuritic chest pain, and productive cough with rust-colored sputum. Physical exam reveals bronchial breath sounds and dullness to percussion over the right middle lobe. Sputum Gram stain reveals abundant lancet-shaped gram-positive diplococci with surrounding halos. Culture demonstrates alpha-hemolytic colonies that are sensitive to optochin and soluble in bile.<span class='q-stem-bold'>Which of the following is the causative organism, and what is its primary virulence factor?</span>",
    "a": [
      "Haemophilus influenzae; polyribosylribitol phosphate (PRP) capsule.",
      "Pseudomonas aeruginosa; exotoxin A that ADP-ribosylates elongation factor 2.",
      "Streptococcus pneumoniae; polysaccharide capsule that inhibits phagocytosis.",
      "Staphylococcus aureus; protein A that binds the Fc portion of IgG.",
      "Klebsiella pneumoniae; hyperviscous mucoid exopolysaccharide capsule."
    ],
    "c": 2,
    "r": "Streptococcus pneumoniae is an alpha-hemolytic, optochin-sensitive, bile-soluble gram-positive lancet diplococcus whose main virulence factor is its antiphagocytic polysaccharide capsule."
  },
  {
    "cat": 3,
    "q": "A 50-year-old male receiving rifampicin, isoniazid, pyrazinamide, and ethambutol for active cavitary tuberculosis complains of exquisite pain, swelling, and redness in his right first metatarsophalangeal joint. Serum uric acid is elevated at 10.4 mg/dL (normal 3.5–7.2). Arthrocentesis reveals needle-shaped, negatively birefringent crystals under polarized light microscopy.<span class='q-stem-bold'>Which of the anti-tuberculosis drugs in this patient's regimen is notorious for competing with uric acid for renal tubular secretion, thereby precipitating acute gout?</span>",
    "a": [
      "Isoniazid",
      "Streptomycin",
      "Pyrazinamide",
      "Rifampicin",
      "Ethambutol"
    ],
    "c": 2,
    "r": "Pyrazinamide competes with uric acid for renal proximal tubular secretion, leading to hyperuricemia and acute gouty arthritis."
  },
  {
    "cat": 3,
    "q": "A 30-year-old male on quadruple anti-tuberculosis therapy undergoes routine vision screening. He reports difficulty distinguishing between the red and green signals at traffic intersections. Automated perimetry confirms a bilateral central scotoma with decreased visual acuity.<span class='q-stem-bold'>Which of the following medications is responsible for this adverse drug reaction, and what monitoring parameter is indicated?</span>",
    "a": [
      "Ciprofloxacin; causes retinal detachment and requires annual B-scan ocular ultrasound.",
      "Rifampicin; causes corneal orange staining and requires monthly intraocular pressure measurements.",
      "Pyrazinamide; causes macular degeneration and requires baseline fluorescein angiography.",
      "Ethambutol; causes retrobulbar optic neuritis and requires baseline and periodic red-green visual acuity testing.",
      "Isoniazid; causes toxic retinopathy and requires routine slit-lamp biomicroscopy."
    ],
    "c": 3,
    "r": "Ethambutol causes dose-dependent retrobulbar optic neuritis manifesting as central scotoma and red-green color blindness."
  },
  {
    "cat": 3,
    "q": "A 35-year-old female living with HIV and stable on an antiretroviral therapy (ART) regimen including efavirenz (a non-nucleoside reverse transcriptase inhibitor) is diagnosed with active pulmonary tuberculosis. Two weeks after starting standard RIPE therapy, her plasma HIV-1 RNA viral load spikes significantly.<span class='q-stem-bold'>Which of the following pharmacological interactions explains this treatment failure of her antiretroviral therapy?</span>",
    "a": [
      "Isoniazid irreversibly inhibits hepatic CYP2C19, causing toxic intracellular ART accumulation.",
      "Rifampicin directly blocks retroviral CD4 coreceptor binding sites on peripheral T lymphocytes.",
      "Pyrazinamide binds tightly to efavirenz in the gastrointestinal lumen, forming an unabsorbable chelate.",
      "Ethambutol promotes renal tubular hypersecretion of reverse transcriptase inhibitors.",
      "Rifampicin is a potent inducer of hepatic cytochrome P450 enzymes (CYP3A4), accelerating ART clearance."
    ],
    "c": 4,
    "r": "Rifampicin potently induces hepatic CYP450 enzymes (including CYP3A4), accelerating the hepatic metabolism and clearance of co-administered antiretrovirals."
  },
  {
    "cat": 3,
    "q": "A 16-year-old boy presents to the emergency room with an acute severe asthma attack. He is tachypneic, speaking in short broken sentences, with widespread expiratory and inspiratory wheezing. He is immediately treated with nebulized albuterol. Within minutes, his dyspnea eases and peak expiratory flow improves significantly.<span class='q-stem-bold'>Which of the following intracellular signaling events is primarily responsible for the rapid bronchodilation induced by albuterol?</span>",
    "a": [
      "Inhibition of phosphodiesterase-4, preventing degradation of cyclic GMP (cGMP) in mast cells.",
      "Activation of adenylyl cyclase, increasing intracellular cyclic AMP (cAMP) and activating protein kinase A.",
      "Antagonism of cysteinyl leukotriene CysLT1 receptors on bronchiolar vascular smooth muscle.",
      "Dephosphorylation and nuclear translocation of cytoplasmic glucocorticoid receptors.",
      "Direct blockade of voltage-gated L-type calcium channels on airway epithelial ciliated borders."
    ],
    "c": 1,
    "r": "Albuterol stimulates Gs-coupled beta-2 adrenergic receptors, activating adenylyl cyclase to raise intracellular cAMP and activate PKA, relaxing bronchial smooth muscle."
  },
  {
    "cat": 3,
    "q": "A 12-year-old girl with mild persistent asthma and aspirin-exacerbated respiratory disease (AERD) experiences recurrent bronchospasm and rhinorrhea. Her pediatric allergist prescribes montelukast as daily oral maintenance therapy.<span class='q-stem-bold'>Which of the following represents the primary mechanism of action of montelukast?</span>",
    "a": [
      "Stabilization of pulmonary mast cell membranes preventing degranulation of histamine.",
      "Irreversible acetylation of cyclooxygenase-1 and cyclooxygenase-2 enzymes.",
      "Recombinant monoclonal antibody binding circulating free immunoglobulin E (IgE).",
      "Direct inhibition of the 5-lipoxygenase (5-LOX) enzyme preventing arachidonate conversion.",
      "Selective competitive antagonism of the cysteinyl leukotriene-1 (CysLT1) receptor."
    ],
    "c": 4,
    "r": "Montelukast is a selective competitive antagonist of CysLT1 receptors, blocking the bronchoconstrictive and inflammatory effects of leukotrienes C4, D4, and E4."
  },
  {
    "cat": 0,
    "q": "A thoracic surgeon reviews anatomical landmarks prior to performing a right middle lobectomy for a localized benign pulmonary lesion. The surgeon identifies the horizontal and oblique fissures of the lung.<span class='q-stem-bold'>Which of the following anatomical descriptions accurately distinguishes the right lung from the left lung?</span>",
    "a": [
      "The right lung is longer and narrower than the left lung due to the position of the underlying liver.",
      "The right lung contains the lingula, an anatomical homologue to the left upper lobe apex.",
      "The right lung has a single pulmonary vein entering the left atrium, whereas the left has three.",
      "The right lung has three lobes and two fissures (oblique and horizontal), whereas the left lung has two lobes.",
      "The right lung has two lobes and a deep cardiac notch, whereas the left lung has three lobes."
    ],
    "c": 3,
    "r": "The right lung consists of 3 lobes separated by 2 fissures (oblique and horizontal), whereas the left lung has 2 lobes separated by 1 oblique fissure and features a cardiac notch and lingula."
  },
  {
    "cat": 1,
    "q": "A 68-year-old male with severe emphysema and an 80 pack-year smoking history undergoes pulmonary compliance testing. A 62-year-old female with idiopathic pulmonary fibrosis (IPF) undergoes identical testing. The compliance curves (change in lung volume dV plotted against change in transpulmonary pressure dP) are compared to a healthy normal baseline curve.<span class='q-stem-bold'>Which of the following correctly pairs the disease state with its corresponding alteration in static pulmonary compliance?</span>",
    "a": [
      "Both emphysema and pulmonary fibrosis demonstrate identically decreased compliance.",
      "Emphysema demonstrates increased compliance (steep curve); Pulmonary fibrosis demonstrates decreased compliance (flattened curve).",
      "Both emphysema and pulmonary fibrosis demonstrate identically increased compliance.",
      "Emphysema demonstrates decreased compliance; Pulmonary fibrosis demonstrates increased compliance.",
      "Emphysema maintains normal compliance; Pulmonary fibrosis demonstrates isolated chest wall hyper-compliance."
    ],
    "c": 1,
    "r": "Loss of elastic tissue in emphysema increases lung compliance (steep curve), whereas interstitial collagen deposition in pulmonary fibrosis decreases lung compliance (stiff, flattened curve)."
  },
  {
    "cat": 3,
    "q": "A 2-year-old boy is brought to the emergency department at 2:00 AM in late autumn with sudden-onset harsh, barking cough, inspiratory stridor, and hoarseness. His symptoms worsen when he is agitated. His mother states he had a mild runny nose and low-grade fever for the preceding two days. On physical exam, he has mild subcostal retractions and clear breath sounds bilaterally. An anteroposterior soft-tissue neck radiograph reveals symmetric subglottic narrowing ('steeple sign').<span class='q-stem-bold'>Which of the following viral agents is the most frequent cause of this clinical syndrome (croup / acute laryngotracheobronchitis)?</span>",
    "a": [
      "Rhinovirus",
      "Adenovirus",
      "Respiratory syncytial virus",
      "Coxsackievirus A",
      "Parainfluenza virus"
    ],
    "c": 4,
    "r": "Acute laryngotracheobronchitis (croup) with barking cough and subglottic 'steeple sign' is most frequently caused by Parainfluenza virus."
  },
  {
    "cat": 3,
    "q": "A 29-year-old pregnant woman at 18 weeks of gestation presents with acute bacterial maxillary sinusitis and fever. She has a documented severe IgE-mediated anaphylactic reaction to amoxicillin (developed urticaria, angioedema, and airway compromise during childhood). She is prescribed an oral macrolide antibiotic.<span class='q-stem-bold'>Which of the following describes the mechanism of antibacterial action of macrolide antibiotics (e.g., azithromycin, clarithromycin)?</span>",
    "a": [
      "Binding to the 30S ribosomal subunit, causing misreading of mRNA codons.",
      "Blockade of dihydrofolate reductase preventing tetrahydrofolic acid synthesis.",
      "Inhibition of bacterial DNA gyrase (topoisomerase II) preventing DNA supercoiling.",
      "Reversible binding to the 50S ribosomal subunit, inhibiting peptide translocation.",
      "Inhibition of transpeptidase enzymes preventing peptidoglycan cell wall cross-linking."
    ],
    "c": 3,
    "r": "Macrolides bind reversibly to the 23S rRNA of the 50S bacterial ribosomal subunit, blocking translocation during protein synthesis."
  },
  {
    "cat": 0,
    "q": "A 24-year-old male presents to the emergency department with severe headache, high spiking fever, and progressive periorbital edema 5 days after developing a painful furuncle in the anterior vestibule of his nose. Physical examination reveals chemosis, bilateral proptosis, and restricted extraocular eye movements. High-resolution contrast-enhanced CT of the head confirms septic thrombosis of the superior sagittal and cavernous sinuses.<span class='q-stem-bold'>Which of the following venous communications provides the direct anatomical conduit through the anterior cranial fossa for the intracranial spread of this infection?</span>",
    "a": [
      "The infraorbital vein draining into maxillary plexus",
      "An emissary vein traversing the foramen cecum",
      "An emissary vein traversing the foramen rotundum",
      "The sphenopalatine vein entering the pterygoid fossa",
      "A posterior ethmoidal vein entering superior petrosal"
    ],
    "c": 1,
    "r": "In some individuals, an emissary vein traverses the foramen cecum in the frontal bone anterior to the crista galli, directly connecting nasal veins with the superior sagittal sinus."
  },
  {
    "cat": 0,
    "q": "A 32-year-old male undergoes surgical excision of an obstructing polyp from the posterior nasal septum and adjacent hard palate under local anesthesia. The operating otolaryngologist plans a selective nerve block to achieve complete anesthesia of the mucosa covering the posterior aspect of the nasal septum and anterior hard palate.<span class='q-stem-bold'>Which of the following nerves must be selectively anesthetized to block general sensation across this specific mucosal territory?</span>",
    "a": [
      "The anterior ethmoidal nerve from ophthalmic division",
      "The superior cervical ganglion sympathetic gray rami",
      "The greater petrosal nerve from the facial trunk",
      "The nasopalatine nerve from the maxillary division",
      "The olfactory nerve filaments within cribriform plate"
    ],
    "c": 3,
    "r": "General sensation to the posterior nasal septum and anterior hard palate is supplied by the nasopalatine nerve (branch of the maxillary nerve, CN V2)."
  },
  {
    "cat": 0,
    "q": "An 11-year-old boy is brought to the outpatient clinic with mild, recurrent bleeding from his right nostril over the past two days. His mother notes that the bleeding typically follows vigorous digital trauma (nose picking) during dry weather. Anterior rhinoscopy reveals minor mucosal oozing and crusted excoriations localized exclusively to the anterior margin of the nasal vestibule.<span class='q-stem-bold'>Which of the following vascular structures was most likely torn to produce this child's clinical presentation?</span>",
    "a": [
      "Pterygoid venous plexus situated in infratemporal fossa",
      "Superior ophthalmic vein draining to cavernous sinus",
      "Deep venous plexus located within the nasal vestibule",
      "Ruptured septal branch of the anterior ethmoidal artery",
      "Major sphenopalatine arterial trunk in posterior septum"
    ],
    "c": 2,
    "r": "While arterial ruptures cause pulsatile spurting, mild epistaxis from nose picking typically tears the veins located in the nasal vestibule."
  },
  {
    "cat": 0,
    "q": "A male neonate born at 39 weeks of gestation is examined in the newborn nursery. Inspection reveals an accessory nostril located superior to the normal left nostril, displaying a smaller but similar contour to the native aperture. On probing, the tract ends blindly at a depth of 2 mm. The underlying left nasal ala appears depressed, while the primary bilateral nostrils are equal in projection and diameter.<span class='q-stem-bold'>Which of the following congenital anomalies best classifies this infant's developmental physical finding?</span>",
    "a": [
      "Supernumerary nostril ending blindly above native ala",
      "Unilateral cleft lip with primary maxillary clefting",
      "Congenital arhinia due to failure of placode formation",
      "Nasal dermoid sinus cyst with intracranial extension",
      "Choanal atresia with posterior bony membranous septation"
    ],
    "c": 0,
    "r": "Supernumerary (accessory) nostril is a rare congenital anomaly characterized by a blind-ending accessory aperture above the native nostril with mild alar depression."
  },
  {
    "cat": 1,
    "q": "A 45-year-old male is seated quietly in an environmental physiology suite. During the onset of unforced, spontaneous inspiration, contraction and descent of his diaphragm increase the craniocaudal and transverse dimensions of his thoracic cavity.<span class='q-stem-bold'>Which of the following physical laws directly explains the resulting reduction in intrapulmonary (alveolar) pressure relative to atmospheric pressure that drives airflow inward?</span>",
    "a": [
      "Henry's law relating dissolved gas volume to pressure",
      "Boyle's law relating inverse pressure to gas volume",
      "Fick's law of passive molecular diffusion through barriers",
      "Dalton's law of additive partial pressures in gas mixtures",
      "Charles's law relating gas volume to Kelvin temperature"
    ],
    "c": 1,
    "r": "Boyle's law (P1V1 = P2V2) states that at constant temperature, gas pressure is inversely proportional to volume; thoracic expansion lowers intrapulmonary pressure below atmospheric pressure."
  },
  {
    "cat": 1,
    "q": "A 28-year-old healthy male volunteer undergoes esophageal manometry and spirometric assessment during an investigation of chest wall mechanics. At the end of a normal tidal expiration (functional residual capacity), with the glottis open and no airflow occurring, his intrapulmonary alveolar pressure is 0 cmH2O and his intrapleural pressure is measured at -5 cmH2O.<span class='q-stem-bold'>Which of the following mathematical differences defines this subject's transpulmonary (recoil) pressure under these resting conditions?</span>",
    "a": [
      "Alveolar pressure minus intrapleural pleural pressure",
      "Alveolar pressure minus atmospheric barometric pressure",
      "Intrapleural pressure minus alveolar airway pressure",
      "Intrapleural pressure minus transthoracic wall pressure",
      "Barometric pressure minus transdiaphragmatic pressure"
    ],
    "c": 0,
    "r": "Transpulmonary (recoil) pressure is the difference between alveolar pressure and intrapleural pressure (Ptp = Palv - Ppl)."
  },
  {
    "cat": 1,
    "q": "A 35-year-old male undergoes lung function testing in a clinical pulmonary physiology laboratory. Stepwise increments in his transpulmonary pressure are recorded while measuring resulting lung volume changes under quasi-static conditions.<span class='q-stem-bold'>In a normal, healthy adult, by what volume will the lungs expand for each 1 cmH2O increase in transpulmonary pressure?</span>",
    "a": [
      "Approximately 1000 milliliters of air per cmH2O",
      "Approximately 200 milliliters of air per cmH2O",
      "Approximately 500 milliliters of air per cmH2O",
      "Approximately 50 milliliters of air per cmH2O",
      "Approximately 100 milliliters of air per cmH2O"
    ],
    "c": 1,
    "r": "Normal total compliance of both lungs combined in an adult is approximately 200 mL of air per cmH2O of transpulmonary pressure."
  },
  {
    "cat": 1,
    "q": "An experimental histology laboratory investigates the mechanical behavior of human pulmonary parenchymal tissue strips under alternating deflation and inflation tensions in a tissue bath.<span class='q-stem-bold'>Which of the following structural arrangements best describes the conformational state of elastin and collagen fibers within the lung parenchyma during resting deflation?</span>",
    "a": [
      "Elastically contracted and kinked conformational arrangements",
      "Degraded soluble fragments suspended in surfactant film",
      "Fully elongated rigid rods transmitting maximal recoil force",
      "Hyperphosphorylated fibrillar complexes anchored to laminin",
      "Cross-linked covalent lattices resisting any initial tension"
    ],
    "c": 0,
    "r": "In deflated lungs, parenchymal elastin and collagen fibers reside in an elastically contracted and kinked state; upon inflation, they unkink and stretch."
  },
  {
    "cat": 1,
    "q": "A neonatologist explains the biophysical principles governing alveolar stability to a medical student rotating in the neonatal intensive care unit. She presents the formula derived from the Law of LaPlace for spherical structures (P = 2T / r), where P is distending pressure, T is wall surface tension, and r is alveolar radius.<span class='q-stem-bold'>According to this physical law, what would occur in interconnected alveoli of differing radii if surface tension were constant throughout the lung?</span>",
    "a": [
      "Smaller alveoli would require higher distending pressures",
      "Larger alveoli would empty into smaller neighboring units",
      "Surface tension would spontaneously drop to zero in all units",
      "Collapsing pressure would remain identical across all units",
      "Larger alveoli would require higher pressures to stay open"
    ],
    "c": 0,
    "r": "By LaPlace's Law (P = 2T/r), smaller alveoli have a smaller radius and generate higher inward collapsing pressures, requiring higher distending pressures to remain open unless surfactant lowers T."
  },
  {
    "cat": 1,
    "q": "A female infant is delivered via urgent cesarean section at 29 weeks of gestation due to placental abruption. Within 20 minutes of birth, the neonate develops severe tachypnea (respiratory rate 78/min), prominent subcostal retractions, expiratory grunting, and cyanosis on room air. Chest radiography reveals diffuse bilateral 'ground-glass' reticulogranular opacities with prominent air bronchograms.<span class='q-stem-bold'>At what gestational age does the physiological synthesis of pulmonary surfactant typically begin in the developing human fetus?</span>",
    "a": [
      "After the thirty-second week of intrauterine pregnancy",
      "After the twentieth week of intrauterine pregnancy",
      "After the thirty-seventh week of intrauterine pregnancy",
      "After the sixteenth week of intrauterine pregnancy",
      "After the twenty-fourth week of intrauterine pregnancy"
    ],
    "c": 0,
    "r": "Physiological synthesis of pulmonary surfactant by Type II pneumocytes begins after the 32nd week of pregnancy; infants born prior are at high risk for IRDS."
  },
  {
    "cat": 1,
    "q": "A premature infant with severe infant respiratory distress syndrome (IRDS) is found to have extensive alveolar atelectasis accompanied by marked fluid retention in both the pulmonary interstitium and alveolar spaces.<span class='q-stem-bold'>Failure of surfactant to stimulate the functional maturation of which of the following transport channels directly accounts for this persistent intra-alveolar fluid retention?</span>",
    "a": [
      "Voltage-gated calcium channels on bronchial smooth muscle",
      "Cystic fibrosis transmembrane conductance regulator channels",
      "Epithelial sodium channels (ENaC) on alveolar pneumocytes",
      "Sodium-potassium-chloride cotransporters on bronchioles",
      "Aquaporin-1 water channels on pulmonary capillary endothelia"
    ],
    "c": 2,
    "r": "Surfactant is required for the functional maturation of epithelial sodium channels (ENaC), which reabsorb sodium and water from the alveoli after birth."
  },
  {
    "cat": 1,
    "q": "A 60-year-old male hospitalized in the intensive care unit is being managed for acute hypoxemic respiratory failure. During a clinical discussion on factors that suppress alveolar type II pneumocyte metabolic activity, several clinical conditions are evaluated.<span class='q-stem-bold'>Which of the following clinical conditions or interventions is explicitly recognized to cause a decrease in pulmonary surfactant production?</span>",
    "a": [
      "Antenatal maternal administration of dexamethasone",
      "Reflex sympathetic stimulation of beta-2 receptors",
      "Moderate endurance exercise in cool environments",
      "Chronic inhalation of 100% supplemental oxygen",
      "Thyroid hormone supplementation in mild hypothyroidism"
    ],
    "c": 3,
    "r": "Surfactant production is decreased by pulmonary artery occlusion, main bronchus occlusion, chronic inhalation of 100% oxygen, and cigarette smoking."
  },
  {
    "cat": 1,
    "q": "A 25-year-old male medical student undergoes baseline pulmonary function testing as part of a physiology laboratory demonstration. Starting from the end of a normal, quiet expiration (normal expiratory level), he is instructed to inspire with maximal effort, distending his lungs to their greatest possible volume.<span class='q-stem-bold'>Which of the following lung capacities did this student just demonstrate, and what is its typical average normal value?</span>",
    "a": [
      "Inspiratory capacity averaging 3500 milliliters",
      "Vital capacity averaging 4600 milliliters",
      "Volume of tidal breathing averaging 500 milliliters",
      "Functional residual capacity averaging 2300 milliliters",
      "Total lung capacity averaging 5800 milliliters"
    ],
    "c": 0,
    "r": "Inspiratory Capacity (IC = VT + IRV) is the maximum volume inspired starting from the normal end-expiratory level, averaging ~3,500 mL."
  },
  {
    "cat": 1,
    "q": "A 30-year-old healthy male volunteer sits upright and breathes quietly into a closed-circuit spirometer. At the exact nadir of an unforced, resting tidal expiration, airflow ceases momentarily prior to the initiation of the next breath.<span class='q-stem-bold'>Which of the following pulmonary capacities represents the volume of air remaining within his respiratory system at this specific physiological point?</span>",
    "a": [
      "Functional residual capacity equal to ERV plus RV",
      "Expiratory capacity equal to tidal volume plus ERV",
      "Vital capacity equal to total lung volume minus RV",
      "Inspiratory capacity equal to tidal volume plus IRV",
      "Residual volume equal to total capacity minus IC"
    ],
    "c": 0,
    "r": "Functional Residual Capacity (FRC = ERV + RV, ~2,300 mL) is the volume of air remaining in the lungs at the end of a normal quiet expiration."
  },
  {
    "cat": 1,
    "q": "A 40-year-old male athlete undergoes spirometry in both the upright standing and recumbent supine positions. His vital capacity (VC) is measured at 4800 mL while standing, but drops to 4400 mL when measured in the supine position.<span class='q-stem-bold'>Which of the following physiological mechanisms best accounts for the higher vital capacity observed while standing compared to the recumbent position?</span>",
    "a": [
      "Decreased venous return causing alveolar hypoperfusion",
      "Shift of systemic blood volume into pulmonary capillaries",
      "Increased intrapleural pressure compressing alveolar bases",
      "Reflex sympathetic stimulation of bronchial smooth muscle",
      "Gravitational descent of abdominal viscera freeing the diaphragm"
    ],
    "c": 4,
    "r": "Vital capacity is higher when standing because gravity pulls abdominal organs downward away from the diaphragm and decreases thoracic vascular blood pooling."
  },
  {
    "cat": 1,
    "q": "A research study compares pulmonary function parameters between 100 healthy young adult females and 100 healthy young adult males matched for age, physical conditioning, and athletic status.<span class='q-stem-bold'>On average, how do pulmonary volumes and capacities in females compare quantitatively to those measured in males?</span>",
    "a": [
      "Greater only in expiratory reserve and residual volumes",
      "Completely identical after correcting for body weight",
      "Approximately 20% to 25% lower in females than males",
      "Approximately 5% to 10% greater in females than males",
      "Approximately 40% to 50% lower in females than males"
    ],
    "c": 2,
    "r": "All pulmonary volumes and capacities are approximately 20% to 25% lower in women than in men."
  },
  {
    "cat": 1,
    "q": "A 52-year-old male with long-standing dyspnea undergoes comprehensive pulmonary function testing. The technician explains that while tidal volume, inspiratory capacity, and vital capacity can be determined directly with standard bedside water-seal spirometry, certain specific volumes require the helium dilution technique.<span class='q-stem-bold'>Which of the following sets of pulmonary volumes and capacities cannot be measured by direct spirometry alone?</span>",
    "a": [
      "Vital capacity, inspiratory capacity, and expiratory volume",
      "Vital capacity, expiratory reserve volume, and tidal volume",
      "Tidal volume, vital capacity, and inspiratory reserve volume",
      "Residual volume, functional residual capacity, and total capacity",
      "Inspiratory capacity, tidal volume, and expiratory reserve"
    ],
    "c": 3,
    "r": "Residual Volume (RV), Functional Residual Capacity (FRC), and Total Lung Capacity (TLC) cannot be measured by direct spirometry and require helium dilution or plethysmography."
  },
  {
    "cat": 1,
    "q": "A 22-year-old male college sprinter undergoes baseline physiological evaluation at rest. His resting tidal volume (VT) is measured at 500 mL, and his resting respiratory rate is recorded at 14 breaths per minute.<span class='q-stem-bold'>What is this subject's calculated Respiratory Minute Volume (RMV), also termed Pulmonary Ventilation?</span>",
    "a": [
      "8.8 liters of air per minute",
      "5.2 liters of air per minute",
      "3.5 liters of air per minute",
      "7.0 liters of air per minute",
      "10.5 liters of air per minute"
    ],
    "c": 3,
    "r": "Respiratory Minute Volume (RMV) = VT x Respiratory Rate = 500 mL x 14 breaths/min = 7,000 mL/min = 7.0 L/min."
  },
  {
    "cat": 1,
    "q": "The same 22-year-old sprinter (tidal volume 500 mL, respiratory rate 14 breaths per minute) has his anatomical dead space volume (VD) determined to be 150 mL.<span class='q-stem-bold'>What is this athlete's calculated Effective Ventilation Volume (EVV), also known as Alveolar Ventilation?</span>",
    "a": [
      "7.0 liters of gas per minute",
      "2.1 liters of gas per minute",
      "6.3 liters of gas per minute",
      "4.9 liters of gas per minute",
      "3.5 liters of gas per minute"
    ],
    "c": 3,
    "r": "Effective Ventilation Volume (Alveolar Ventilation) = (VT - VD) x RR = (500 - 150) x 14 = 350 x 14 = 4,900 mL/min = 4.9 L/min."
  },
  {
    "cat": 1,
    "q": "A 38-year-old female is evaluated for dyspnea prior to major abdominal surgery. The technician performs a Maximal Breathing Capacity (MBC) test, also termed Maximal Voluntary Ventilation (MVV). The patient breathes as deeply and rapidly as possible through a low-resistance spirometer for 15 seconds, and the total volume exhaled is extrapolated to 1 minute.<span class='q-stem-bold'>Which of the following ranges represents the normal reference value for Maximal Voluntary Ventilation in a healthy adult?</span>",
    "a": [
      "40 to 70 liters of air per minute",
      "80 to 110 liters of air per minute",
      "300 to 350 liters of air per minute",
      "125 to 170 liters of air per minute",
      "200 to 250 liters of air per minute"
    ],
    "c": 3,
    "r": "Normal Maximal Voluntary Ventilation (MVV / MBC) is 125 to 170 L/min."
  },
  {
    "cat": 1,
    "q": "A 19-year-old female with moderate persistent asthma is taught to monitor her airway caliber at home using a portable peak flow meter. She is instructed to inhale to total lung capacity and then exhale forcefully and maximally for 10 milliseconds through the mouthpiece.<span class='q-stem-bold'>What is the expected normal reference range for Peak Expiratory Flow Rate (PEFR), and which airway segment does it primarily assess?</span>",
    "a": [
      "250 to 350 L/min, assessing alveolar duct elastic recoil",
      "400 to 600 L/min, assessing caliber of larger airways",
      "150 to 250 L/min, assessing peripheral terminal bronchioles",
      "850 to 1000 L/min, assessing respiratory capillary diffusion",
      "650 to 800 L/min, assessing small non-cartilaginous airways"
    ],
    "c": 1,
    "r": "Normal PEFR is 400 to 600 L/min and primarily reflects the caliber of larger conducting airways (reduced in asthma, unreliable in small airway disease like emphysema)."
  },
  {
    "cat": 1,
    "q": "A 28-year-old male volunteer with normal respiratory mechanics completes a Forced Vital Capacity (FVC) maneuver in a pulmonary physiology laboratory. His timed expired volumes are recorded sequentially at 1, 2, and 3 seconds.<span class='q-stem-bold'>Which of the following percentage sequences represents the normal physiological values for FEV1, FEV2, and FEV3 expressed as a fraction of total FVC?</span>",
    "a": [
      "FEV1 = 83%, FEV2 = 90%, and FEV3 = 97%",
      "FEV1 = 70%, FEV2 = 80%, and FEV3 = 90%",
      "FEV1 = 95%, FEV2 = 98%, and FEV3 = 100%",
      "FEV1 = 75%, FEV2 = 85%, and FEV3 = 95%",
      "FEV1 = 65%, FEV2 = 75%, and FEV3 = 85%"
    ],
    "c": 0,
    "r": "In healthy adults, FVC is exhaled within 3 seconds with normal timed percentages of FEV1 = 83%, FEV2 = 90%, and FEV3 = 97%."
  },
  {
    "cat": 1,
    "q": "A 29-year-old female presents with chronic episodic dry cough, especially noticeable at night and during cold weather runs. Baseline spirometry shows an FEV1 of 94% of predicted and an FEV1/FVC ratio of 81%. To evaluate for suspected cough-variant asthma, she undergoes bronchochallenge testing with graded concentrations of inhaled methacholine.<span class='q-stem-bold'>Which of the following criteria defines a positive bronchochallenge test diagnostic of airway hyperresponsiveness?</span>",
    "a": [
      "An 80% decrease in baseline airway conductance resistance",
      "A 20% decrease in baseline forced expiratory volume (FEV1)",
      "A 35% decrease in baseline peak expiratory flow rate",
      "A 50% decrease in baseline maximal voluntary ventilation",
      "A 10% decrease in baseline forced vital capacity"
    ],
    "c": 1,
    "r": "A positive methacholine or histamine bronchochallenge test is defined by a >= 20% decrease in baseline FEV1."
  },
  {
    "cat": 2,
    "q": "A 55-year-old female with progressive exertional dyspnea undergoes diagnostic right heart catheterization to evaluate her cardiopulmonary hemodynamics at rest.<span class='q-stem-bold'>Which of the following sets of pressures reflects the normal physiological values within the human pulmonary circulation?</span>",
    "a": [
      "Systolic 40 mmHg, diastolic 18 mmHg, mean arterial 25 mmHg, capillary 14 mmHg",
      "Systolic 25 mmHg, diastolic 8–12 mmHg, mean arterial 15 mmHg, capillary 7 mmHg",
      "Systolic 120 mmHg, diastolic 80 mmHg, mean arterial 93 mmHg, capillary 25 mmHg",
      "Systolic 60 mmHg, diastolic 25 mmHg, mean arterial 35 mmHg, capillary 18 mmHg",
      "Systolic 15 mmHg, diastolic 5 mmHg, mean arterial 10 mmHg, capillary 4 mmHg"
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
      "Oxygen binds more tightly to plasma albumin than carbon dioxide",
      "O2 has a much higher liquid solubility constant than CO2",
      "CO2 utilizes transcellular hemoglobin channels across pneumocytes"
    ],
    "c": 0,
    "r": "Because CO2 is ~24 times more soluble in water/membranes than O2, its diffusing capacity across the blood-gas barrier is approximately 20 times higher than that of oxygen."
  },
  {
    "cat": 2,
    "q": "In a medical physiology laboratory, students analyze time-course curves illustrating the partial pressure of different gases in pulmonary capillary blood as it traverses an alveolar capillary of normal length (transit time ~ 0.75 seconds at rest). For a healthy volunteer breathing room air, capillary blood PO2 reaches complete equilibrium with alveolar PO2 within the first 0.25 seconds (one-third) of capillary transit.<span class='q-stem-bold'>Under normal resting physiological conditions, which of the following terms correctly classifies the gas exchange kinetics for oxygen and nitrous oxide (N2O)?</span>",
    "a": [
      "Perfusion-limited pulmonary gas exchange",
      "Surface-area-independent bulk transport",
      "Diffusion-limited alveolar gas exchange",
      "Active ATP-dependent transport gas exchange",
      "Carrier-saturated facilitated diffusion kinetics"
    ],
    "c": 0,
    "r": "At rest, O2, CO2, and N2O equilibrate completely within the first third of capillary transit (~0.25 s); thus, total transfer depends solely on pulmonary blood flow (perfusion-limited)."
  },
  {
    "cat": 2,
    "q": "A 26-year-old male athlete performs high-intensity running on an inclined treadmill. As his cardiac output increases from a resting baseline of 5 L/min up to 25 L/min, invasive measurements confirm that his pulmonary diffusing capacity for both oxygen and carbon dioxide increases more than twofold.<span class='q-stem-bold'>Which of the following microvascular adaptations in the pulmonary circulation is primarily responsible for this marked increase in diffusing capacity during exercise?</span>",
    "a": [
      "Reduction in red blood cell 2,3-bisphosphoglycerate concentration",
      "Increased thickness of the alveolar-capillary basement membrane",
      "Active vasoconstriction of apical Zone 1 pulmonary arterioles",
      "Suppression of alveolar epithelial sodium channel fluid reabsorption",
      "Capillary recruitment and distension expanding effective surface area"
    ],
    "c": 4,
    "r": "During exercise, recruitment of previously closed apical capillaries and distension of open capillaries markedly expands the effective gas-exchanging surface area."
  },
  {
    "cat": 2,
    "q": "A 21-year-old male is brought to the emergency department by friends after being found unresponsive in a bathroom. Physical examination reveals a respiratory rate of 6 breaths per minute, shallow breathing, cyanotic lips, and pinpoint pupils. Arterial blood gas (ABG) drawn on room air reveals:<table class='lab-table'><thead><tr><th>Parameter</th><th>Patient Value</th><th>Normal Range</th></tr></thead><tbody><tr><td>pH</td><td>7.22</td><td>7.35 – 7.45</td></tr><tr><td>PaCO2</td><td>68 mmHg</td><td>35 – 45 mmHg</td></tr><tr><td>HCO3</td><td>24 mEq/L</td><td>22 – 26 mEq/L</td></tr><tr><td>PaO2</td><td>54 mmHg</td><td>75 – 100 mmHg</td></tr><tr><td>O2 Sat</td><td>84%</td><td>94 – 100%</td></tr></tbody></table><span class='q-stem-bold'>Which of the following acid-base disturbances is present in this patient?</span>",
    "a": [
      "Uncompensated acute metabolic alkalotic disturbance",
      "Partially compensated metabolic alkalotic disorder",
      "Uncompensated acute respiratory acidemic disorder",
      "Partially compensated respiratory acidemic disorder",
      "Compensated chronic respiratory acidemic disorder"
    ],
    "c": 2,
    "r": "pH is low (7.22) and PaCO2 is high (68 mmHg) while HCO3 remains normal (24 mEq/L), defining uncompensated acute respiratory acidosis secondary to opioid respiratory depression."
  },
  {
    "cat": 2,
    "q": "A 68-year-old male with a 50 pack-year smoking history and severe chronic obstructive pulmonary disease (COPD) undergoes routine arterial blood gas analysis during an elective pre-operative evaluation. He is alert and oriented, sitting comfortably on room air:<table class='lab-table'><thead><tr><th>Parameter</th><th>Patient Value</th><th>Normal Range</th></tr></thead><tbody><tr><td>pH</td><td>7.36</td><td>7.35 – 7.45</td></tr><tr><td>PaCO2</td><td>58 mmHg</td><td>35 – 45 mmHg</td></tr><tr><td>HCO3</td><td>32 mEq/L</td><td>22 – 26 mEq/L</td></tr><tr><td>PaO2</td><td>68 mmHg</td><td>75 – 100 mmHg</td></tr><tr><td>O2 Sat</td><td>92%</td><td>94 – 100%</td></tr></tbody></table><span class='q-stem-bold'>Which of the following acid-base states is demonstrated by these blood gas results?</span>",
    "a": [
      "Fully compensated chronic respiratory acidosis",
      "Partially compensated primary metabolic alkalosis",
      "Partially compensated acute respiratory acidosis",
      "Acute uncompensated metabolic acidemic state",
      "Acute uncompensated respiratory acidemic state"
    ],
    "c": 0,
    "r": "pH is within the normal range (7.36) on the acidic side, with elevated PaCO2 (58 mmHg) buffered by renal bicarbonate retention (HCO3 32 mEq/L), indicating fully compensated chronic respiratory acidosis."
  },
  {
    "cat": 2,
    "q": "A 72-year-old female with chronic bronchitis is admitted to the hospital with a 3-day history of worsening productive cough, fever, and dyspnea. Arterial blood gas analysis on 2 L/min nasal cannula oxygen shows:<table class='lab-table'><thead><tr><th>Parameter</th><th>Patient Value</th><th>Normal Range</th></tr></thead><tbody><tr><td>pH</td><td>7.30</td><td>7.35 – 7.45</td></tr><tr><td>PaCO2</td><td>60 mmHg</td><td>35 – 45 mmHg</td></tr><tr><td>HCO3</td><td>29 mEq/L</td><td>22 – 26 mEq/L</td></tr><tr><td>PaO2</td><td>62 mmHg</td><td>75 – 100 mmHg</td></tr></tbody></table><span class='q-stem-bold'>Based on the standard clinical ABG interpretation algorithm, what is the correct diagnosis?</span>",
    "a": [
      "Acute uncompensated metabolic alkalosis",
      "Partially compensated respiratory acidosis",
      "Primary uncompensated metabolic acidosis",
      "Acute uncompensated respiratory acidosis",
      "Fully compensated respiratory acidosis"
    ],
    "c": 1,
    "r": "Acidemic pH (7.30) + elevated PaCO2 (60 mmHg) + elevated HCO3 (29 mEq/L) indicates partially compensated respiratory acidosis."
  },
  {
    "cat": 2,
    "q": "A 19-year-old female university student presents to the urgent care clinic during final examinations experiencing severe anxiety, palpitations, dizziness, and carpopedal spasms in both hands. Physical examination reveals a respiratory rate of 34 breaths per minute and clear breath sounds. Arterial blood gas reveals:<table class='lab-table'><thead><tr><th>Parameter</th><th>Patient Value</th><th>Normal Range</th></tr></thead><tbody><tr><td>pH</td><td>7.56</td><td>7.35 – 7.45</td></tr><tr><td>PaCO2</td><td>24 mmHg</td><td>35 – 45 mmHg</td></tr><tr><td>HCO3</td><td>23 mEq/L</td><td>22 – 26 mEq/L</td></tr><tr><td>PaO2</td><td>108 mmHg</td><td>75 – 100 mmHg</td></tr></tbody></table><span class='q-stem-bold'>Which of the following acid-base disturbances is present in this student?</span>",
    "a": [
      "Acute uncompensated metabolic alkalosis",
      "Compensated chronic respiratory alkalosis",
      "Partially compensated respiratory alkalosis",
      "Acute uncompensated respiratory alkalosis",
      "Partially compensated metabolic acidosis"
    ],
    "c": 3,
    "r": "Alkalemic pH (7.56) + low PaCO2 (24 mmHg) + normal HCO3 (23 mEq/L) confirms acute uncompensated respiratory alkalosis caused by hyperventilation."
  },
  {
    "cat": 2,
    "q": "A 16-year-old male with type 1 diabetes mellitus presents to the emergency department with nausea, abdominal pain, and deep, rapid Kussmaul respirations. Point-of-care capillary blood glucose is 480 mg/dL. An immediate arterial blood gas reveals:<table class='lab-table'><thead><tr><th>Parameter</th><th>Patient Value</th><th>Normal Range</th></tr></thead><tbody><tr><td>pH</td><td>7.24</td><td>7.35 – 7.45</td></tr><tr><td>PaCO2</td><td>38 mmHg</td><td>35 – 45 mmHg</td></tr><tr><td>HCO3</td><td>14 mEq/L</td><td>22 – 26 mEq/L</td></tr><tr><td>PaO2</td><td>96 mmHg</td><td>75 – 100 mmHg</td></tr></tbody></table><span class='q-stem-bold'>Applying the ROME rule and compensation principles, how is this patient's blood gas profile correctly categorized?</span>",
    "a": [
      "Compensated chronic respiratory alkalosis",
      "Partially compensated respiratory acidosis",
      "Acute uncompensated respiratory acidosis",
      "Acute uncompensated metabolic acidosis",
      "Partially compensated metabolic alkalosis"
    ],
    "c": 3,
    "r": "Low pH (7.24) and low HCO3 (14 mEq/L) with PaCO2 still inside the normal 35–45 mmHg window (38 mmHg) classifies as uncompensated metabolic acidosis."
  },
  {
    "cat": 2,
    "q": "A 58-year-old male is admitted to the medical step-down unit with acute dyspnea. A junior resident considers obtaining a venous blood gas (VBG) instead of an arterial blood gas (ABG) to spare the patient an arterial puncture.<span class='q-stem-bold'>According to standard clinical physiology guidelines, which of the following parameters cannot be reliably evaluated from a venous blood gas sample?</span>",
    "a": [
      "Dissolved partial pressure of oxygen (PO2)",
      "Dissolved carbon dioxide tension (PCO2)",
      "Systemic blood hydrogen ion acidity (pH)",
      "Plasma base excess equivalent balance",
      "Blood bicarbonate chemical buffer level"
    ],
    "c": 0,
    "r": "Venous blood gases reliably assess pH, PCO2, and HCO3, but cannot provide reliable PO2 data due to variable peripheral tissue oxygen extraction."
  },
  {
    "cat": 3,
    "q": "A 64-year-old male is admitted with high fever, chills, pleuritic chest pain, and productive cough with rust-colored sputum. Chest radiograph demonstrates dense right middle lobe alveolar consolidation. The admitting physician orders laboratory biomarkers to differentiate acute bacterial pneumonia from viral infection.<span class='q-stem-bold'>Which of the following acute-phase reactants is recognized as a relatively specific biomarker for bacterial pulmonary infection?</span>",
    "a": [
      "Procalcitonin acute-phase bacterial reactant",
      "Total peripheral white blood cell count",
      "Erythrocyte sedimentation rate non-specific marker",
      "Fibrin degradation D-dimer breakdown fragment",
      "C-reactive protein inflammatory reactant"
    ],
    "c": 0,
    "r": "Whereas WBC, CRP, ESR, and D-dimer are non-specific, procalcitonin (PCT) is relatively specific for bacterial infections."
  },
  {
    "cat": 3,
    "q": "A multidisciplinary critical care research team is evaluating novel inflammatory biomarkers in hospitalized patients with severe community-acquired pneumonia to guide early antimicrobial stewardship.<span class='q-stem-bold'>Beyond procalcitonin, which of the following novel biomarkers listed in the respiratory curriculum is relatively specific for bacterial pulmonary infection?</span>",
    "a": [
      "Alanine aminotransferase hepatic enzyme",
      "Creatine kinase myocardial isoenzyme band",
      "Urine vanillylmandelic acid degradation product",
      "Presepsin and soluble TREM-1 biomarkers",
      "Serum amylase and lipase pancreatic enzymes"
    ],
    "c": 3,
    "r": "Relatively specific bacterial biomarkers in CAP include procalcitonin (PCT), soluble TREM-1 (sTREM-1), presepsin, pro-ADM, copeptin, and pro-ANP."
  },
  {
    "cat": 2,
    "q": "A 34-year-old male scuba diver performs a deep wreck dive to 35 meters for 45 minutes. Due to equipment failure, he surfaces rapidly without completing the planned decompression safety stops. Thirty minutes after reaching the boat, he develops severe, deep aching pain localized in his right shoulder and both knees, worsening with limb motion.<span class='q-stem-bold'>Which of the following clinical manifestations of decompression sickness ('the bends') is this diver experiencing?</span>",
    "a": [
      "Musculoskeletal bends deep joint pain",
      "Lymphatic decompression localized tissue edema",
      "Cardiopulmonary chokes decompression syndrome",
      "Vestibular staggers labyrinthine embolization",
      "Cutaneous cutis marmorata microvascular occlusion"
    ],
    "c": 0,
    "r": "Musculoskeletal decompression sickness ('the bends') manifests with periarticular joint pain (shoulders, knees, elbows) due to nitrogen bubble formation."
  },
  {
    "cat": 2,
    "q": "A commercial diver surfaces precipitously from a deep saturation dive. Within 15 minutes, he develops severe substernal chest discomfort, a persistent hacking cough, tachypnea, profound dyspnea, and marked hypoxemia (pulse oximetry 81% on room air).<span class='q-stem-bold'>Which of the following life-threatening presentations of decompression sickness is this diver manifesting?</span>",
    "a": [
      "Vestibular labyrinthine disruption ('the swoons')",
      "Isolated cutaneous marbling ('cutis marmorata')",
      "Cardiopulmonary decompression syndrome ('the chokes')",
      "Spinal cord anterior horn ischemia ('the staggers')",
      "Musculoskeletal articular bubbles ('the bends')"
    ],
    "c": 2,
    "r": "Cardiopulmonary decompression sickness ('the chokes') results from nitrogen microbubble embolization in the pulmonary vasculature, presenting with substernal pain, cough, and dyspnea."
  },
  {
    "cat": 2,
    "q": "A 27-year-old female diver emerges from an ocean dive and notes intense itching across her trunk, shoulders, and thighs. Physical examination reveals patchy, mottled, violaceous and marbled skin discoloration across her abdomen without mucosal involvement or respiratory distress.<span class='q-stem-bold'>Which of the following cutaneous manifestations of decompression sickness is demonstrated in this patient?</span>",
    "a": [
      "Urticarial wheals from aquatic venom sting",
      "Erythema marginatum rheumatic cutaneous rash",
      "Contact dermatitis secondary to neoprene rubber",
      "Necrotizing cutaneous bacterial gas crepitus",
      "Cutis marmorata mottled vascular discoloration"
    ],
    "c": 4,
    "r": "Cutaneous decompression sickness presents with itching and mottled, marbled violaceous skin discoloration known as cutis marmorata."
  },
  {
    "cat": 3,
    "q": "A 66-year-old male with a history of anterior myocardial infarction and chronic left-sided heart failure reports that he cannot sleep flat in bed because he becomes intensely short of breath within two minutes of lying down. He is forced to sleep propped up on three large pillows or upright in an armchair.<span class='q-stem-bold'>Which of the following clinical terms describes this recumbent dyspnea, and what is its primary hemodynamic mechanism?</span>",
    "a": [
      "Trepopnea caused by unilateral diaphragmatic paralysis",
      "Orthopnea caused by pulmonary vascular blood redistribution",
      "Platypnea caused by right-to-left interatrial shunting",
      "Paroxysmal nocturnal dyspnea caused by sleep apnea",
      "Dyspnea on exertion caused by lactic metabolic acidosis"
    ],
    "c": 1,
    "r": "Orthopnea is dyspnea in the recumbent position caused by gravitational redistribution of venous blood from the lower extremities into the pulmonary circulation in left heart failure."
  },
  {
    "cat": 2,
    "q": "A 48-year-old female with acute severe Guillain-Barré syndrome develops progressive weakness of her intercostal muscles and diaphragm. Serial arterial blood gas monitoring shows a progressive rise in her PaCO2 from 40 mmHg up to 64 mmHg alongside a fall in arterial pH from 7.39 to 7.25.<span class='q-stem-bold'>Which of the following ventilatory disorders is directly responsible for this patient's hypercapnia and respiratory acidosis?</span>",
    "a": [
      "Increased dead space ventilation with normal breathing",
      "Anatomical right-to-left pulmonary arteriovenous shunt",
      "Alveolar hypoventilation causing retention of CO2",
      "Alveolar hyperventilation causing excessive CO2 loss",
      "Primary metabolic base depletion from renal failure"
    ],
    "c": 2,
    "r": "Respiratory acidosis is directly caused by alveolar hypoventilation, which results in CO2 retention (hypercapnia)."
  },
  {
    "cat": 3,
    "q": "A 58-year-old male quarry sandblaster presents with progressive exertional dyspnea and dry cough over the past two years. Physical examination reveals fine, 'Velcro-like' bibasilar inspiratory crackles and mild digital clubbing. High-resolution CT shows peripheral, subpleural reticular opacities and honeycombing. Pulmonary function testing demonstrates:<table class='lab-table'><thead><tr><th>Parameter</th><th>Observed</th><th>Predicted Reference</th></tr></thead><tbody><tr><td>FVC</td><td>2.1 L (52%)</td><td>&gt; 80% predicted</td></tr><tr><td>FEV1</td><td>1.8 L (56%)</td><td>&gt; 80% predicted</td></tr><tr><td>FEV1 / FVC</td><td>86%</td><td>70% – 80%</td></tr><tr><td>Total Lung Capacity (TLC)</td><td>3.2 L (55%)</td><td>&gt; 80% predicted</td></tr></tbody></table><span class='q-stem-bold'>Which of the following pathophysiological mechanisms accounts for the normal or elevated FEV1/FVC ratio characteristically seen in restrictive lung disease?</span>",
    "a": [
      "Loss of chest wall elasticity favoring dynamic hyperinflation",
      "Dynamic expiratory compression of small peripheral airways",
      "Accelerated destruction of large airway cartilaginous plates",
      "Loss of pulmonary vascular resistance increasing compliance",
      "Increased parenchymal radial traction stenting airways open"
    ],
    "c": 4,
    "r": "In interstitial fibrosis, increased elastic recoil exerts strong radial traction on bronchioles, stenting them open during forced expiration and preserving or increasing the FEV1/FVC ratio."
  },
  {
    "cat": 1,
    "q": "A pulmonary physiology fellow analyzes flow-volume loops from patients with various respiratory disorders. She reviews a curve from a patient with idiopathic pulmonary fibrosis displaying a normal peak expiratory flow contour but severely reduced vital capacity and total lung volume.<span class='q-stem-bold'>Which of the following visual configurations characteristically describes the flow-volume loop in parenchymal restrictive lung disease?</span>",
    "a": [
      "A horizontally shifted loop with dynamic expiratory scooping",
      "A rectangular box-like contour during both flow phases",
      "A broad, flattened loop with truncated inspiratory limb",
      "A miniature, narrowed loop with preserved symmetrical contours",
      "An asymmetric loop showing selective plateau of expiration"
    ],
    "c": 3,
    "r": "Restrictive lung disease produces a miniature, tall, narrow ('witch-hat') flow-volume loop shifted to the right with preserved expiratory contours."
  },
  {
    "cat": 3,
    "q": "A 62-year-old male with a 40 pack-year smoking history undergoes a routine preoperative chest radiograph prior to elective inguinal hernia repair. The radiologist identifies an incidental, well-circumscribed, non-calcified 2.8 cm solitary focal mass in the right middle lobe.<span class='q-stem-bold'>According to the clinical rule of thumb taught in the respiratory pathology course, how should this radiographic focal mass be managed?</span>",
    "a": [
      "Treated empirically with broad-spectrum macrolide antibiotics",
      "Presumed to be a resolving bacterial pneumonia consolidation",
      "Assumed to represent active tuberculosis until proven otherwise",
      "Considered a benign pulmonary hamartoma requiring no workup",
      "Assumed to represent lung cancer until proven otherwise"
    ],
    "c": 4,
    "r": "Clinical rule of thumb: a focal mass on an adult chest X-ray is lung cancer until proven otherwise (except in the lung apices, where TB is more likely)."
  },
  {
    "cat": 3,
    "q": "A 59-year-old male smoker presents with a 4-month history of a persistent 'brassy' cough and three episodes of frank hemoptysis (coughing up blood-streaked sputum). Bronchoscopy reveals an exophytic mass arising from the right mainstem bronchus with superficial mucosal erosion.<span class='q-stem-bold'>According to the clinicopathological mechanisms of lung cancer symptoms, which of the following mechanisms directly produces his cough and hemoptysis?</span>",
    "a": [
      "Pulmonary infarction producing cough; alveolar exudate hemoptysis",
      "Bronchial mucosal ulceration producing hemoptysis; irritation causing cough",
      "Diaphragmatic invasion producing cough; pleural effusion hemoptysis",
      "Compression of the phrenic nerve producing hemoptysis and cough",
      "Left atrial invasion producing hemoptysis; bronchospasm cough"
    ],
    "c": 1,
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
      "Metastatic involvement of contralateral mediastinal lymph nodes",
      "Unknown metastatic status due to lack of radiological scans",
      "Complete absence of any distant organ metastasis",
      "Histologically confirmed micrometastasis in bone marrow",
      "Presence of biopsy-proven distant metastatic disease"
    ],
    "c": 1,
    "r": "In TNM staging, M0 = no distant metastases, M1 = distant metastases present, and MX = metastatic status unknown/not yet assessed by imaging."
  },
  {
    "cat": 3,
    "q": "During a multidisciplinary thoracic oncology conference, the surgical team reviews management strategies for newly diagnosed patients with non-small cell lung cancer (NSCLC), considering tumor anatomical factors and cardiopulmonary functional fitness.<span class='q-stem-bold'>Approximately what percentage of patients with non-small cell lung cancer are suitable candidates for curative surgical resection in clinical practice?</span>",
    "a": [
      "Approximately 95% of diagnosed patients",
      "Approximately 50% of diagnosed patients",
      "Approximately 5% of diagnosed patients",
      "Approximately 20% of diagnosed patients",
      "Approximately 75% of diagnosed patients"
    ],
    "c": 3,
    "r": "Only about 20% of NSCLC patients present with localized disease and sufficient cardiopulmonary fitness to be suitable candidates for curative surgical resection."
  },
  {
    "cat": 3,
    "q": "A 56-year-old male with essential hypertension presents with a 4-week history of a persistent, annoying, dry non-productive cough that worsens at night. He denies fever, chills, postnasal drip, heartburn, or wheezing. A review of his medications reveals he was started on enalapril 10 mg daily 6 weeks ago.<span class='q-stem-bold'>What is the primary mechanism of this patient's drug-induced cough, and what is the definitive management?</span>",
    "a": [
      "Inhibition of alveolar ENaC channels; administer inhaled steroids",
      "Hypersensitivity histamine release; add oral antihistamines",
      "Bradykinin and substance P accumulation; discontinue enalapril",
      "Direct stimulation of medullary opioid receptors; add codeine",
      "Mucosal fungal colonization; prescribe oral antifungal troches"
    ],
    "c": 2,
    "r": "ACE inhibitors (enalapril) block degradation of bradykinin and substance P, which accumulate and irritate airway cough receptors; management requires discontinuing the ACE inhibitor."
  },
  {
    "cat": 3,
    "q": "A 63-year-old male with a history of chronic bronchitis presents with productive cough producing copious thick, purulent green sputum. He requests a prescription for a strong cough suppressant to stop coughing so he can sleep better.<span class='q-stem-bold'>Why are centrally acting cough suppressants (antitussives) generally contraindicated in patients with productive cough secondary to chronic bronchitis?</span>",
    "a": [
      "They cause harmful sputum retention leading to secondary infection",
      "They trigger severe paradoxical bronchoconstriction via muscarinic activation",
      "They induce sudden hypertensive crises via alpha-1 stimulation",
      "They precipitate acute hyperkalemia through aldosterone blockade",
      "They cause dangerous systemic fluid overload and pulmonary edema"
    ],
    "c": 0,
    "r": "In productive cough (especially chronic bronchitis or bronchiectasis), suppressing the cough reflex leads to harmful sputum retention, airway plugging, and secondary infection."
  },
  {
    "cat": 3,
    "q": "A 23-year-old female presents with a tickling, dry, irritating cough following a resolved upper respiratory tract infection. She finds that swallowing warm syrups and lozenges provides prompt, soothing relief.<span class='q-stem-bold'>Which of the following classes of agents relieves dry cough arising above the larynx by forming a soothing protective coating over the pharyngeal mucosa?</span>",
    "a": [
      "Peripheral demulcents containing glycerol syrups",
      "Peripheral mucolytics that cleave disulfide bonds",
      "Inhaled long-acting antimuscarinic bronchodilators",
      "Centrally acting opioid receptor agonists",
      "Systemic beta-2 adrenoreceptor agonist tablets"
    ],
    "c": 0,
    "r": "Demulcents (soothing syrups, glycerol, lozenges) relieve dry cough arising above the larynx by forming a protective coating over sensory endings in the pharyngeal mucosa."
  },
  {
    "cat": 3,
    "q": "A 31-year-old male develops acute tracheobronchitis with a harsh, painful, non-productive cough originating below the larynx. His physician advises non-pharmacological inhalational therapy to soothe irritated lower airway receptors.<span class='q-stem-bold'>According to the pharmacology curriculum, which of the following interventions provides peripheral antitussive relief for cough arising below the larynx?</span>",
    "a": [
      "Inhaled nebulized hypertonic saline solution",
      "Water aerosol and warm steam inhalation with menthol",
      "High-dose oral codeine phosphate suspension",
      "Cold dry air hyperventilation through mouth",
      "Dry powdered sodium chloride aerosol delivery"
    ],
    "c": 1,
    "r": "For dry cough originating below the larynx, water aerosol / warm steam inhalation (often with aromatic benzoin, menthol, or eucalyptus) provides soothing peripheral antitussive relief."
  },
  {
    "cat": 3,
    "q": "A 48-year-old female presents with an intractable dry nocturnal cough following viral bronchitis that is severely disrupting her sleep. Her physician prescribes codeine as a central antitussive agent.<span class='q-stem-bold'>What is the pharmacological mechanism of codeine in cough suppression, and what property contributes to its clinical antitussive efficacy?</span>",
    "a": [
      "Inhibits airway sensory nerves; efficacy aided by local anesthesia",
      "Blocks pulmonary c-fibers; efficacy aided by bronchodilation",
      "Blocks medullary cough center; efficacy aided by sedating effects",
      "Cleaves mucus glycoproteins; efficacy aided by expectoration",
      "Stimulates beta-2 receptors; efficacy aided by ciliary clearance"
    ],
    "c": 2,
    "r": "Codeine suppresses the medullary cough center in the brainstem, and part of its clinical antitussive efficacy is aided by its sedating effect."
  },
  {
    "cat": 3,
    "q": "A 26-year-old commercial airline pilot presents to an outpatient clinic requesting medication for an annoying, dry, tickling cough following a common cold. He emphasizes that he must remain fully alert and non-sedated during daytime work hours.<span class='q-stem-bold'>Which of the following centrally acting opioid antitussive agents is commonly utilized in over-the-counter preparations because it has fewer side effects and lacks significant sedation?</span>",
    "a": [
      "Hydrocodone polistirex capsule",
      "Codeine phosphate oral elixir",
      "Methadone hydrochloride solution",
      "Morphine sulfate oral solution",
      "Dextromethorphan oral syrup"
    ],
    "c": 4,
    "r": "Dextromethorphan (and pholcodine) suppresses the medullary cough center with fewer side effects and minimal sedation, making it standard in OTC cough preparations."
  },
  {
    "cat": 3,
    "q": "A 34-year-old female with moderate persistent asthma experiences daytime wheezing three times per week and nocturnal awakenings twice a month despite daily use of low-dose inhaled budesonide. Her physician prescribes Seretide for maintenance controller therapy.<span class='q-stem-bold'>Which of the following pharmaceutical combinations comprises the active ingredients of the inhaler Seretide?</span>",
    "a": [
      "Formoterol and budesonide dipropionate",
      "Montelukast and theophylline anhydrous",
      "Vilanterol and fluticasone furoate",
      "Salmeterol and fluticasone propionate",
      "Albuterol and ipratropium bromide"
    ],
    "c": 3,
    "r": "Seretide is a combination inhaler composed of salmeterol (LABA) and fluticasone propionate (ICS)."
  },
  {
    "cat": 3,
    "q": "A 42-year-old male with active, drug-susceptible pulmonary tuberculosis successfully completes the 2-month initial intensive phase of standard four-drug therapy (isoniazid, rifampicin, pyrazinamide, and ethambutol). Follow-up sputum smear microscopy is negative for acid-fast bacilli, and liver enzymes are normal.<span class='q-stem-bold'>What is the standard continuation phase regimen and duration for this patient's treatment?</span>",
    "a": [
      "Continuation phase of 12 months using streptomycin and isoniazid",
      "Continuation phase of 6 months using rifampicin and ethambutol",
      "Continuation phase of 4 months using isoniazid and rifampicin",
      "Continuation phase of 9 months using isoniazid and pyrazinamide",
      "Continuation phase of 2 months using ethambutol and pyrazinamide"
    ],
    "c": 2,
    "r": "Following the 2-month intensive phase (HRZE), the standard continuation phase for drug-susceptible TB is 4 months of isoniazid (INH) and rifampicin."
  },
  {
    "cat": 3,
    "q": "A 38-year-old female receiving standard anti-tuberculosis therapy contacts her physician in great distress, reporting that her urine, sweat, and tears have turned a bright orange-red color, staining her contact lenses. She has no fever, abdominal pain, or jaundice.<span class='q-stem-bold'>Which of the following anti-tuberculosis medications is responsible for this side effect, and what major organ toxicity necessitates monitoring?</span>",
    "a": [
      "Rifampicin, requiring monitoring for clinical hepatotoxicity",
      "Streptomycin, requiring monitoring for vestibulocochlear damage",
      "Pyrazinamide, requiring monitoring for acute hyperuricemic gout",
      "Ethambutol, requiring monitoring for visual color blindness",
      "Isoniazid, requiring monitoring for peripheral neuropathy"
    ],
    "c": 0,
    "r": "Rifampicin produces harmless orange-red discoloration of body fluids, but carries a risk of hepatotoxicity requiring liver function monitoring."
  },
  {
    "cat": 3,
    "q": "A community health director gives a grand rounds presentation on population-level strategies for preventing respiratory infections, including pertussis, measles, and influenza. She displays an epidemiological curve demonstrating that when vaccination coverage reaches high thresholds, disease outbreaks cease entirely, even among unimmunized newborns and immunocompromised patients.<span class='q-stem-bold'>Which of the following epidemiological terms describes this indirect population-level protection resulting from high immunization coverage?</span>",
    "a": [
      "Active polyclonal mucosal hypersensitivity",
      "Cross-reactive antibody-dependent enhancement",
      "Passive maternal vertical transplacental immunity",
      "Negative predictive serological protection",
      "Herd immunity or community immunity"
    ],
    "c": 4,
    "r": "Herd immunity (community immunity) occurs when widespread vaccination deprives pathogens of susceptible hosts, protecting unimmunized individuals in the community."
  },
  {
    "cat": 2,
    "q": "A 27-year-old primigravida at 28 weeks of gestation presents for a routine prenatal checkup. She notes mild, non-bothersome shortness of breath when climbing stairs. She is afebrile with normal physical exam. An arterial blood gas drawn as part of a high-altitude travel assessment reveals:<table class='lab-table'><thead><tr><th>Parameter</th><th>Patient Value</th><th>Normal Range</th></tr></thead><tbody><tr><td>pH</td><td>7.44</td><td>7.35 – 7.45</td></tr><tr><td>PaCO2</td><td>30 mmHg</td><td>35 – 45 mmHg</td></tr><tr><td>HCO3</td><td>20 mEq/L</td><td>22 – 26 mEq/L</td></tr><tr><td>PaO2</td><td>102 mmHg</td><td>75 – 100 mmHg</td></tr></tbody></table><span class='q-stem-bold'>Which of the following pregnancy-related hormones is directly responsible for stimulating central respiratory drive to produce this physiological acid-base state?</span>",
    "a": [
      "Elevated serum human chorionic gonadotropin",
      "Elevated systemic circulating progesterone levels",
      "Elevated systemic circulating prolactin levels",
      "Elevated systemic circulating estrogen levels",
      "Elevated serum human placental lactogen"
    ],
    "c": 1,
    "r": "During pregnancy, elevated progesterone directly stimulates the medullary respiratory center, increasing tidal volume and minute ventilation to cause compensated chronic respiratory alkalosis."
  },
  {
    "cat": 0,
    "q": "A 42-year-old male is struck forcefully across the midface with a blunt object, sustaining severe comminuted fractures of the posterior maxilla and lateral nasal wall. Profuse, high-volume venous hemorrhage ensues from the deep infratemporal region.<span class='q-stem-bold'>Nasal mucosal veins accompanying arterial branches that originate from the maxillary artery drain into which of the following venous plexuses?</span>",
    "a": [
      "Superior sagittal sinus via parietal emissary vein",
      "Internal jugular vein via direct lingual branch",
      "Cavernous sinus via superior petrosal tributary",
      "Pterygoid plexus of veins in infratemporal fossa",
      "Facial vein directly through anterior angular vein"
    ],
    "c": 3,
    "r": "Nasal veins accompanying branches of the maxillary artery drain into the pterygoid venous plexus located within the infratemporal fossa."
  },
  {
    "cat": 0,
    "q": "A 2-year-old boy is brought to the pediatric emergency department with a 2-day history of low-grade fever, rhinorrhea, hoarseness, a harsh 'barking' cough, and audible inspiratory stridor that worsens with crying. He is diagnosed with acute viral laryngotracheobronchitis (croup).<span class='q-stem-bold'>Which of the following anatomical characteristics of the young pediatric airway explains why minor mucosal edema causes critical airway narrowing in this infant?</span>",
    "a": [
      "Supraglottic aperture is protected by rigid calcified epiglottis",
      "Hyoid bone is fused solidly to thyroid alar cartilage",
      "Extrathoracic trachea possesses excessive fibrous cartilage rings",
      "Vocal cords are angled downward in an inverted funnel shape",
      "Cricoid ring is the narrowest non-distensible airway point"
    ],
    "c": 4,
    "r": "In young children under 8 years of age, the narrowest portion of the upper airway is the subglottic space at the complete, non-distensible cricoid cartilage ring."
  }
];

// Past Exam Recall Slot
export const respiratoryFinalPastQuestions: Question[] = [
  {
    "cat": 0,
    "q": "A 45-year-old man undergoes fiberoptic bronchoscopy and transbronchial biopsy. Histological examination of progressively distal segments of the conducting and respiratory airways is performed. Which of the following structural components exhibits an increasing relative concentration and functional predominance distally along the bronchial tree toward the terminal and respiratory bronchioles?",
    "a": [
      "Stratified squamous non-keratinized epithelium",
      "Cartilage plates and hyaline rings",
      "Pseudostratified ciliated columnar cells",
      "Elastic fibers in the lamina propria and inter-alveolar septa",
      "Seromucinous submucosal glands"
    ],
    "c": 3,
    "r": "As one proceeds distally along the bronchial tree from the trachea down to the respiratory bronchioles and alveolar ducts, cartilage plates and submucosal glands diminish and completely disappear by the level of bronchioles (<1 mm diameter). In contrast, elastic fibers become progressively more prominent and concentrated, forming a continuous elastic network that provides the essential passive recoil force necessary for quiet expiration and tethering to prevent dynamic airway collapse during forced exhalation.\n\nHigh-Yield Pearl: Elastic fibers increase in relative proportion distally along the respiratory tree, providing essential elastic recoil and radial traction on smaller airways."
  },
  {
    "cat": 3,
    "q": "A 16-year-old high school track athlete presents with a 3-month history of nocturnal coughing twice weekly and daytime dyspnea requiring an albuterol inhaler three to four days per week. Spirometry reveals an FEV1 of 82% predicted that increases by 14% following inhaled bronchodilator. According to clinical asthma guidelines, which of the following is the most appropriate next step in maintenance pharmacotherapy?",
    "a": [
      "Continue as-needed short-acting beta-2 agonist (SABA) alone without daily controller",
      "Add a daily oral leukotriene receptor antagonist and discontinue albuterol",
      "Initiate long-acting beta-2 agonist (LABA) monotherapy without corticosteroids",
      "Prescribe daily high-dose oral prednisone for six months",
      "Initiate daily low-dose inhaled corticosteroid (ICS) maintenance therapy"
    ],
    "c": 4,
    "r": "The patient meets criteria for mild persistent asthma (symptoms >2 days/week but not daily, nighttime awakenings 3–4 times/month, normal or near-normal baseline FEV1). Current USMLE and GINA guidelines establish that low-dose inhaled corticosteroids (ICS) are the preferred first-line daily controller and anti-inflammatory maintenance therapy. ICS suppresses chronic eosinophilic mucosal inflammation, prevents airway remodeling, and dramatically reduces exacerbation risk.\n\nHigh-Yield Pearl: Low-dose inhaled corticosteroids (ICS) are the foundation of controller maintenance therapy for persistent asthma."
  },
  {
    "cat": 2,
    "q": "A 32-year-old neurosurgery intensive care patient is being mechanically ventilated following closed head trauma. Arterial blood gas analysis demonstrates PaCO2 of 52 mmHg and PaO2 of 90 mmHg. The primary driver of central chemoreceptor firing that stimulates the respiratory rhythm generators in the medulla is mediated by which of the following mechanisms?",
    "a": [
      "Diffusion of molecular CO2 across the blood-brain barrier generating H+ within cerebrospinal fluid",
      "Direct stimulation by circulating serum bicarbonate (HCO3⁻) ions across tight endothelial junctions",
      "Direct movement of peripheral arterial hydrogen ions (H+) across the blood-brain barrier",
      "Afferent impulses transmitted exclusively via the glossopharyngeal nerve (CN IX)",
      "Direct sensitivity of medullary chemoreceptors to arterial PO2 below 60 mmHg"
    ],
    "c": 0,
    "r": "Central chemoreceptors located on the ventrolateral surface of the medulla oblongata are exquisitely sensitive to the hydrogen ion (H+) concentration of the brain extracellular fluid and CSF. However, charged arterial H+ and HCO3⁻ ions cannot readily penetrate the lipophilic blood-brain barrier (BBB). Molecular CO2, being lipid-soluble, diffuses freely across the BBB into the CSF, where carbonic anhydrase catalyzes CO2 + H2O ⇌ H2CO3 ⇌ H+ + HCO3⁻. The generated H+ directly stimulates the central chemoreceptors, driving ventilation.\n\nHigh-Yield Pearl: Central chemoreceptors respond directly to CSF H+ generated by the rapid diffusion of arterial CO2 across the blood-brain barrier."
  },
  {
    "cat": 1,
    "q": "During quiet physiological breathing, an inspiratory ramp signal generated by dorsal respiratory group neurons increases steadily for approximately 2 seconds, producing smooth diaphragmatic contraction, followed by abrupt cessation for 3 seconds to permit passive elastic expiration. Which of the following brainstem structures is primarily responsible for transmitting signals that switch off this inspiratory ramp?",
    "a": [
      "Substantia nigra in the midbrain modulating motor tone",
      "Inferior olivary nucleus in the caudal medulla",
      "Apneustic center in the caudal pons stimulating prolonged inspiration",
      "Pneumotaxic center located in the rostral dorsal pons (nucleus parabrachialis)",
      "Ventral respiratory group (Bötzinger complex) regulating forced active expiration only"
    ],
    "c": 3,
    "r": "The pneumotaxic center (nucleus parabrachialis) located dorsally in the upper rostral pons transmits continuous inhibitory impulses to the dorsal respiratory group (DRG) inspiratory center. Its primary function is to terminate the inspiratory ramp signal ('switch-off' mechanism), thereby limiting the duration of inspiration and controlling the respiratory rate. Strong pneumotaxic signaling shortens inspiration, accelerating breathing, whereas its ablation prolongs inspiration (causing apneustic breathing).\n\nHigh-Yield Pearl: The pneumotaxic center in the rostral pons terminates the inspiratory ramp, limiting tidal volume and regulating respiratory frequency."
  },
  {
    "cat": 1,
    "q": "A 62-year-old chronic heavy smoker presents with progressive exertional dyspnea and productive morning cough. Physical examination reveals an increased anteroposterior chest diameter ('barrel chest') and distant heart sounds. Pulmonary function testing demonstrates increased total lung capacity (TLC) and increased functional residual capacity (FRC). The increase in FRC is directly attributable to which of the following mechanical alterations?",
    "a": [
      "Increased pulmonary compliance resulting from loss of alveolar elastance, allowing outward chest wall recoil to dominate",
      "Direct hypercontraction of the internal intercostal muscles during resting end-expiration",
      "Decreased chest wall compliance with severe inward thoracic cage collapse",
      "Excessive inward elastic recoil of fibrotic alveolar septa overcoming chest wall expansion",
      "Increased radial traction exerted by alveolar attachments on small conducting bronchioles"
    ],
    "c": 0,
    "r": "Functional Residual Capacity (FRC) represents the resting equilibrium volume where the inward elastic recoil of the lungs precisely balances the outward springing recoil of the chest wall. In emphysema, cigarette smoke and inflammatory elastases destroy alveolar walls and elastin fibers, markedly decreasing inward lung elastic recoil (increasing pulmonary compliance). Consequently, the unopposed outward springing force of the chest wall establishes equilibrium at a significantly higher lung volume, manifesting as increased FRC and a barrel chest.\n\nHigh-Yield Pearl: Loss of alveolar elastin reduces inward lung recoil, allowing outward thoracic springing forces to expand FRC and produce a barrel chest."
  },
  {
    "cat": 3,
    "q": "A 38-year-old poultry farmer in Southeast Asia develops sudden onset high fever, severe dyspnea, nonproductive cough, and rapidly progressive hypoxemic respiratory failure requiring mechanical ventilation. Bronchoalveolar lavage identifies Avian Influenza A (H5N1). The primary pathophysiological driver of diffuse alveolar epithelial necrosis, pulmonary edema, and multiorgan failure in this infection is:",
    "a": [
      "Exclusive bacterial exotoxin release causing complement-independent septic shock",
      "Autoantibody-mediated destruction of pulmonary surfactant apoproteins SP-A and SP-D",
      "Immediate clearance by neutralizing secretory IgA antibodies without cellular tissue injury",
      "Massive hypercytokinemia ('cytokine storm') characterized by excessive TNF-α, IL-6, and IP-10 production",
      "Selective tropism for upper respiratory ciliated epithelium with negligible lower tract replication"
    ],
    "c": 3,
    "r": "Avian influenza A (H5N1) preferentially binds alpha-2,3 sialic acid galactose receptors found densely on human lower respiratory tract alveolar epithelial cells and terminal bronchioles. Viral replication triggers intense, dysregulated hypercytokinemia—a 'cytokine storm'—characterized by explosive elevation of TNF-alpha, IL-6, IL-1beta, and chemokine IP-10 (CXCL10). This overwhelming hyperinflammation induces severe diffuse alveolar damage, endothelial breakdown, capillary leak, ARDS, and systemic shock.\n\nHigh-Yield Pearl: H5N1 avian influenza targets lower alveolar alpha-2,3 sialic receptors and provokes a lethal hypercytokinemic 'cytokine storm'."
  },
  {
    "cat": 0,
    "q": "During the fourth week of human embryonic development, the respiratory diverticulum (lung bud) branches out from the ventral wall of the caudal primordial foregut. Which of the following morphogens is directly responsible for inducing the expression of the TBX4 transcription factor in the surrounding splanchnic mesoderm, which specifies lower respiratory organ identity?",
    "a": [
      "Thyroid transcription factor-2 (TTF-2)",
      "Sonic hedgehog (SHH) inhibitor",
      "Retinoic acid (RA)",
      "Vascular endothelial growth factor (VEGF)",
      "Epidermal growth factor (EGF)"
    ],
    "c": 2,
    "r": "Respiratory organogenesis begins in the 4th week with formation of the laryngotracheal diverticulum from the ventral foregut endoderm. An increase in retinoic acid (RA) produced by the adjacent visceral/splanchnic mesoderm induces the expression of the transcription factor TBX4 in the endoderm of the gut tube. TBX4 initiates respiratory tract differentiation, directing the formation and continued branching morphogenesis of the trachea, bronchial tree, and lungs.\n\nHigh-Yield Pearl: Mesodermal retinoic acid upregulates TBX4 expression to specify the respiratory diverticulum from the ventral foregut."
  },
  {
    "cat": 0,
    "q": "A neonate born at 39 weeks of gestation presents shortly after birth with excessive oral salivation, choking, and coughing during his first feeding. A nasogastric tube cannot be advanced beyond 10 cm from the nares. A chest radiograph demonstrates the tube coiled in a blind-ending proximal esophageal pouch and a prominent air-filled stomach bubble. Defective separation of which of the following embryonic structures is responsible for this condition?",
    "a": [
      "Failure of neural crest cells to migrate into the myenteric plexus of the distal esophagus",
      "Incomplete closure of the pleuroperitoneal membranes resulting in diaphragmatic herniation",
      "Defective recanalization of the embryonic solid-stage duodenal lumen",
      "Failure of lateral tracheoesophageal folds to fuse at the midline to form the tracheoesophageal septum",
      "Agenesis of the third and fourth pharyngeal pouches"
    ],
    "c": 3,
    "r": "The patient presents with the most common subtype of tracheoesophageal fistula (Type C: proximal esophageal atresia with distal tracheoesophageal fistula, ~85% of cases). During the 4th and 5th weeks of gestation, two longitudinal tracheoesophageal ridges/folds grow inward from the lateral walls of the foregut and fuse in the midline to form the tracheoesophageal septum, partitioning the dorsal esophagus from the ventral trachea. Defective fusion leads to atresia and fistulous communication, allowing swallowed saliva to accumulate and inspired air to enter the stomach.\n\nHigh-Yield Pearl: Defective midline fusion of lateral tracheoesophageal ridges leads to esophageal atresia and distal tracheoesophageal fistula."
  },
  {
    "cat": 3,
    "q": "A 68-year-old retired shipyard worker presents with progressive right-sided pleuritic chest pain, dyspnea, and a 10-kg weight loss. Contrast-enhanced CT of the chest demonstrates extensive nodular thickening of the parietal and visceral pleura encasing the right lung hemithorax, with associated pleural effusion. Thoracoscopic biopsy reveals malignant cells that stain positive for calretinin and cytokeratin 5/6, but negative for CEA. Which of the following statements regarding this condition is most accurate?",
    "a": [
      "Most patients achieve surgical cure with complete pleural decortication",
      "It originates exclusively from bronchial neuroendocrine Kulchitsky cells",
      "Smoking synergistically increases the risk of this specific pleural malignancy by over 50-fold",
      "Pleural plaques represent direct obligate premalignant precursors that transform into malignant mesothelioma",
      "Heavily exposed asbestos workers carry approximately a 10% lifetime risk of developing malignant mesothelioma after a long latency period"
    ],
    "c": 4,
    "r": "Malignant mesothelioma is an aggressive neoplasm of mesothelial cells lining the pleura, strongly associated with occupational asbestos exposure (shipyards, roofing, insulation, pipefitting). In heavily exposed asbestos workers, the lifetime risk approaches 10%, characterized by a prolonged latency of 25–45 years. Mesotheliomas characteristically express calretinin, WT-1, and cytokeratin 5/6 (differentiating them from adenocarcinoma, which is CEA and claudin-4 positive).\n\nHigh-Yield Pearl: Mesothelioma has a ~10% lifetime risk in heavily exposed asbestos workers with a 25–45 year latency; tobacco does NOT increase mesothelioma risk."
  },
  {
    "cat": 3,
    "q": "A 20-year-old university student living in a dormitory presents with a 2-week history of a persistent dry hacking cough, low-grade fever, malaise, and mild headache. Chest auscultation reveals scattered fine crackles, but physical findings are notably mild compared to her chest radiograph, which shows prominent bilateral patchy interstitial reticulonodular infiltrates. High-titer cold agglutinins are identified in her serum. Which of the following antimicrobial regimens represents the first-line empirical oral therapy?",
    "a": [
      "Oral cephalexin (first-generation cephalosporin)",
      "High-dose oral amoxicillin",
      "Intravenous vancomycin",
      "Intravenous amphotericin B",
      "Oral clarithromycin or azithromycin (macrolide)"
    ],
    "c": 4,
    "r": "The presentation is classic for 'walking pneumonia' (atypical pneumonia) caused by Mycoplasma pneumoniae, common in young adults and crowded settings (college dorms, military recruits). Hallmark findings include clinical symptoms milder than radiological infiltrates and elevated cold agglutinins (IgM antibodies against RBC I-antigen). Because Mycoplasma lacks a peptidoglycan cell wall, beta-lactam antibiotics (penicillins and cephalosporins) are completely ineffective. First-line treatment is a macrolide (clarithromycin, azithromycin) or doxycycline, which inhibit bacterial protein synthesis.\n\nHigh-Yield Pearl: Mycoplasma pneumoniae lacks a cell wall, rendering beta-lactams useless; macrolides (clarithromycin, azithromycin) are first-line therapy."
  },
  {
    "cat": 2,
    "q": "In an upright resting individual, regional differences in ventilation and perfusion create variations in the ventilation-perfusion (V/Q) ratio throughout the lung. Alveoli that receive normal ventilation but zero or minimal pulmonary capillary blood flow contribute directly to which of the following physiological compartments?",
    "a": [
      "Normal alveolar capillary reserve volume",
      "Diffusion-limited carbon monoxide transfer",
      "Physiological dead space (prominent at the lung apex)",
      "Total airway viscous resistance",
      "Right-to-left anatomical shunt (prominent at the lung base)"
    ],
    "c": 2,
    "r": "Physiological dead space consists of anatomical dead space (conducting airways) plus alveolar dead space. Alveolar dead space refers to alveoli that are ventilated but underperfused or unperfused (V/Q approaches infinity). In an upright person, gravity significantly reduces pulmonary arterial hydrostatic pressure at the lung apices (Zone 1), where alveolar pressure can exceed pulmonary capillary pressure. This creates maximal V/Q mismatch and physiologic dead space at the lung apex.\n\nHigh-Yield Pearl: Alveoli that are ventilated but unperfused represent alveolar dead space, with V/Q approaching infinity, most pronounced at the lung apices."
  },
  {
    "cat": 2,
    "q": "A 54-year-old man with severe COPD travels to a mountain resort at an elevation of 3,200 meters. Within hours, his arterial PaO2 drops from 72 mmHg to 55 mmHg, triggering an immediate compensatory increase in minute ventilation. Which of the following sensory structures is primarily responsible for detecting this decline in PaO2 and initiating the reflex ventilatory response?",
    "a": [
      "Aortic baroreceptors transmitting afferents via the vagus nerve (CN X)",
      "Juxtacapillary (J) receptors in the alveolar interstitium",
      "Glomus cells of the carotid bodies, transmitting afferents via the glossopharyngeal nerve (CN IX)",
      "Central chemoreceptors located on the ventral medullary surface",
      "Pulmonary stretch receptors located in smooth muscle of conducting bronchi"
    ],
    "c": 2,
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
      "Inferior nasal meatus beneath the inferior concha",
      "Superior nasal meatus",
      "Sphenoethmoidal recess above the superior concha",
      "Frontal recess into the ethmoidal infundibulum",
      "Middle nasal meatus via the hiatus semilunaris"
    ],
    "c": 0,
    "r": "The lateral wall of the nasal cavity features three bony conchae (turbinates) overlying corresponding meatuses. The nasolacrimal duct drains excess tears from the lacrimal sac into the inferior nasal meatus (beneath the inferior nasal concha), protected by the mucosal valve of Hasner. Failure of this valve to open at birth causes congenital nasolacrimal duct obstruction and persistent epiphora.\n\nHigh-Yield Pearl: The nasolacrimal duct opens into the inferior nasal meatus; the maxillary, frontal, and anterior ethmoidal sinuses drain into the middle meatus."
  },
  {
    "cat": 3,
    "q": "A 64-year-old thin man presents with severe exertional dyspnea. He sits leaning forward with his hands on his knees, breathing through pursed lips. He has a minimal, nonproductive morning cough and no peripheral edema. Chest radiograph reveals hyperlucent lung fields, flattened diaphragms, and a narrow cardiac silhouette. Arterial blood gas shows a PaO2 of 68 mmHg and a PaCO2 of 38 mmHg. Which of the following clinical phenotypes best characterizes this presentation?",
    "a": [
      "Idiopathic pulmonary fibrosis with bibasilar end-inspiratory Velcro crackles",
      "Severe acute extrinsic asthma with mucous plugging",
      "Emphysematous predominant COPD ('pink puffer') maintaining near-normal blood gases through hyperventilation",
      "Chronic bronchitis ('blue bloater') with prominent right ventricular cor pulmonale",
      "Bronchiectasis with cystic dilation and copious foul-smelling purulent sputum"
    ],
    "c": 2,
    "r": "The 'pink puffer' phenotype represents emphysema-predominant COPD. Pathologically, alveolar destruction reduces gas-exchanging surface area and elastic recoil. Patients hyperventilate to compensate, maintaining relatively normal PaCO2 and mild hypoxemia ('pink') at the expense of high work of breathing, leading to marked weight loss, cachexia, tachypnea, and breathing through pursed lips to increase backpressure and prevent distal airway collapse.\n\nHigh-Yield Pearl: 'Pink puffers' (emphysema) hyperventilate with pursed lips, exhibiting dyspnea, weight loss, and near-normal blood gases until terminal stages."
  },
  {
    "cat": 1,
    "q": "During a forced vital capacity (FVC) spirometry maneuver, a patient is instructed to expire as forcefully and rapidly as possible from total lung capacity down to residual volume. Which of the following groups of muscles contract actively to drive this forced expiratory effort?",
    "a": [
      "Anterior abdominal wall muscles (rectus abdominis, obliques, transversus) and internal intercostal muscles",
      "Alveolar myofibroblasts and bronchial smooth muscle",
      "Pectoralis minor and serratus anterior muscles",
      "Sternocleidomastoid and scalene muscles",
      "Diaphragm and external intercostal muscles"
    ],
    "c": 0,
    "r": "Quiet expiration is completely passive, driven by the elastic recoil of the lungs and chest wall. In contrast, active or forced expiration requires powerful contraction of the anterior abdominal wall muscles (rectus abdominis, external and internal obliques, transversus abdominis), which push abdominal viscera upward against the relaxed diaphragm, and the internal intercostal muscles (interosseous portion), which pull the ribs downward and inward.\n\nHigh-Yield Pearl: Forced active expiration relies on anterior abdominal wall muscles and internal intercostal muscles."
  },
  {
    "cat": 0,
    "q": "During inspiration, chest wall expansion increases thoracic cavity volume along three anatomical axes: anteroposterior, transverse, and vertical. The elevation and outward rotation of the middle ribs (ribs 7 through 10) around an anteroposterior axis primarily increases which of the following thoracic dimensions?",
    "a": [
      "Mediastinal depth via retrosternal depression",
      "Anteroposterior diameter via the 'pump-handle' movement of the upper ribs",
      "Superior thoracic aperture diameter via clavicular elevation",
      "Transverse (lateral) thoracic diameter via the 'bucket-handle' movement",
      "Vertical thoracic dimension via inferior descent of the central tendon of the diaphragm"
    ],
    "c": 3,
    "r": "Rib movements during inspiration are classically divided into: 1) 'Pump-handle' movement of the upper ribs (ribs 2–6), where ribs rotate around a transverse axis, elevating the sternum and increasing the anteroposterior diameter; and 2) 'Bucket-handle' movement of the lower and middle ribs (ribs 7–10), where ribs rotate around an anteroposterior axis through their costovertebral and costosternal joints, elevating the rib shafts laterally and increasing the transverse (lateral) thoracic diameter.\n\nHigh-Yield Pearl: The 'bucket-handle' movement of ribs 7–10 expands the transverse thoracic diameter; the 'pump-handle' of ribs 2–6 expands the AP diameter."
  },
  {
    "cat": 0,
    "q": "A 24-year-old medical student is examining a prosected sagittal specimen of the human larynx in the anatomy laboratory. The prosector asks the student to classify the intrinsic laryngeal musculature according to their anatomical compartments relative to the true vocal folds (vocal cords).<span class='q-stem-bold'>Which of the following intrinsic muscles of the larynx is unique in being located in the infraglottic (subglottic) compartment below the level of the rima glottidis?</span>",
    "a": [
      "Posterior cricoarytenoid muscle",
      "Lateral cricoarytenoid muscle",
      "Cricothyroid muscle",
      "Thyroarytenoid (vocalis) muscle",
      "Transverse and oblique arytenoid muscles"
    ],
    "c": 2,
    "r": "The cricothyroid muscle is unique among the intrinsic muscles of the larynx in two major anatomical respects:\n1. Infraglottic location: It is the only intrinsic laryngeal muscle positioned in the infraglottic compartment below the level of the vocal cords (lying on the anterolateral outer surface of the cricoid and thyroid cartilages), whereas all other intrinsic laryngeal muscles reside supraglottically or at the level of the glottis inside the laryngeal cavity.\n2. Innervation: It is the only intrinsic laryngeal muscle innervated by the external branch of the superior laryngeal nerve, whereas all other intrinsic muscles are supplied by the recurrent laryngeal nerve.\n\nHigh-Yield Pearl: The cricothyroid is the only intrinsic laryngeal muscle located infraglottically (below the vocal folds) and the only one innervated by the external laryngeal nerve."
  },
  {
    "cat": 0,
    "q": "A 70-year-old man with poorly controlled hypertension presents to the emergency department with profuse bleeding from both nares and blood dripping down the posterior pharynx. Anterior nasal packing fails to arrest the hemorrhage, and a posterior pack is placed. The vessel most frequently responsible for such severe, intractable posterior epistaxis is the terminal branch of which of the following arteries?",
    "a": [
      "Superior labial artery arising from the facial artery",
      "Sphenopalatine artery, a terminal branch of the maxillary artery",
      "Ascending pharyngeal artery arising from the internal carotid artery",
      "Greater palatine artery entering through the incisive canal",
      "Anterior ethmoidal artery arising from the ophthalmic artery"
    ],
    "c": 1,
    "r": "Epistaxis is divided into anterior (90%, Kiesselbach's plexus on the anterior septum) and posterior (10%). Severe, profuse posterior epistaxis typically arises from the sphenopalatine artery, the terminal branch of the maxillary artery (external carotid system), which enters the nasal cavity through the sphenopalatine foramen behind the middle concha. Posterior bleeds cannot be controlled with simple anterior packing and often require endoscopic clipping, embolization, or posterior balloon tamponade.\n\nHigh-Yield Pearl: Severe posterior epistaxis arises predominantly from the sphenopalatine artery, the terminal branch of the maxillary artery."
  },
  {
    "cat": 0,
    "q": "A 58-year-old woman with a large right-sided parapneumonic pleural effusion is scheduled for diagnostic and therapeutic thoracentesis. The needle is introduced at the 8th intercostal space along the midscapular line during end-expiration. To avoid lacerating the major intercostal neurovascular bundle, the needle must be inserted immediately adjacent to which of the following anatomical landmarks?",
    "a": [
      "Superior border of the lower rib (walking over the top of the rib)",
      "Inferior border of the upper rib within the subcostal groove",
      "Directly beneath the lower costal cartilage",
      "Posterior angle of the upper rib near the sympathetic chain",
      "Midpoint of the intercostal space midway between the ribs"
    ],
    "c": 0,
    "r": "Along each intercostal space, the main intercostal neurovascular bundle runs from superior to inferior as Vein, Artery, Nerve ('VAN') sheltered in the costal groove along the inferior border of the upper rib. To avoid puncturing or lacerating these vessels (which can lead to catastrophic intrapleural hemorrhage or hemothorax), thoracentesis needles and chest tubes are always inserted immediately above the superior border of the lower rib ('walking over the rib').\n\nHigh-Yield Pearl: Thoracentesis needles must be placed along the superior border of the lower rib to avoid the intercostal VAN bundle in the subcostal groove."
  },
  {
    "cat": 2,
    "q": "A 31-year-old woman presents to the obstetric triage unit in active labor at 39 weeks of gestation. Review of her medical record confirms that she previously delivered twin infants at 37 weeks of gestation, a singleton at 35 weeks, and had one spontaneous abortion at 10 weeks. By standard obstetric definitions, she is classified as:",
    "a": [
      "Grand multiparous, having delivered five or more viable fetuses",
      "Nulligravid, with no prior registered singleton deliveries",
      "Primiparous, because only one delivery occurred at full term",
      "Nulliparous, because she has not yet delivered at 40 weeks",
      "Multiparous, having completed two or more pregnancies beyond 20 or 24 weeks of gestation"
    ],
    "c": 4,
    "r": "In obstetrics, parity refers to the number of pregnancies that have reached viability (defined conventionally as ≥20 or ≥24 weeks of gestation, regardless of whether the infant was born alive or stillborn). A multiparous woman (multipara) has had two or more pregnancies delivered beyond 20–24 weeks. This patient has had two prior deliveries beyond viability (twins at 37 weeks = 1 delivery event; singleton at 35 weeks = 1 delivery event), making her multiparous.\n\nHigh-Yield Pearl: A multipara is a woman who has delivered two or more pregnancies beyond the threshold of fetal viability (20–24 weeks)."
  },
  {
    "cat": 2,
    "q": "A 34-year-old pregnant woman presents for her first prenatal visit. Her obstetric history reveals: she delivered a child at 39 weeks (alive and healthy), delivered twins at 34 weeks (both alive and healthy), had an ectopic pregnancy terminated at 7 weeks, and had a miscarriage at 11 weeks. Which of the following correctly denotes her GTPAL classification?",
    "a": [
      "G5, T1, P2, A1, L3",
      "G4, T1, P2, A2, L3",
      "G4, T2, P1, A2, L2",
      "G5, T1, P1, A2, L3",
      "G5, T2, P1, A1, L2"
    ],
    "c": 3,
    "r": "GTPAL notation: G (Gravidity) = total number of pregnancies = current pregnancy (1) + term birth (1) + preterm twins (1) + ectopic (1) + miscarriage (1) = 5 pregnancies (G5). T (Term births ≥37 weeks) = 1 (at 39 weeks). P (Preterm births 20–36 weeks) = 1 (the twin delivery counts as 1 preterm birth event). A (Abortions/losses <20 weeks) = 2 (ectopic at 7 weeks + miscarriage at 11 weeks). L (Living children) = 3 (1 from term delivery + 2 from twin delivery). Thus: G5, T1, P1, A2, L3.\n\nHigh-Yield Pearl: GTPAL counts total pregnancies (G), term deliveries (T), preterm delivery events (P), losses <20 weeks (A), and total living children (L)."
  },
  {
    "cat": 2,
    "q": "A 26-year-old primigravida at 28 weeks of gestation undergoes routine arterial blood gas testing during evaluation for mild dyspnea of pregnancy. The results reveal: pH 7.44, PaCO2 30 mmHg, PaO2 102 mmHg, and serum HCO3⁻ 20 mEq/L. Which of the following hormonal mechanisms is responsible for this maternal physiological respiratory alkalosis?",
    "a": [
      "Human chorionic gonadotropin (hCG) suppressing renal bicarbonate reabsorption in the proximal convoluted tubule",
      "High circulating progesterone directly stimulating the medullary respiratory center and increasing minute ventilation",
      "Elevated human placental lactogen causing severe lactic acidosis that drives compensatory hyperventilation",
      "Increased estrogen inhibiting surfactant synthesis and decreasing total pulmonary compliance",
      "Elevated prolactin causing diaphragmatic spasm"
    ],
    "c": 1,
    "r": "During pregnancy, elevated levels of progesterone directly stimulate the central respiratory drive in the medulla oblongata and increase the sensitivity of chemoreceptors to carbon dioxide. This produces a physiological increase in minute ventilation (primarily via increased tidal volume, up to 40–50%), blowing off CO2 and establishing a chronic mild respiratory alkalosis (PaCO2 27–32 mmHg, pH 7.40–7.45). The kidneys compensate by excreting bicarbonate, lowering plasma HCO3⁻ to 18–22 mEq/L, which facilitates maternal-fetal CO2 transfer.\n\nHigh-Yield Pearl: Progesterone stimulates medullary respiratory centers in pregnancy, producing a physiological compensated respiratory alkalosis (PaCO2 ~30 mmHg)."
  },
  {
    "cat": 2,
    "q": "An experimental laboratory model simulates a completely occluded branch of the pulmonary arterial circulation where blood flow to a group of alveoli drops to zero (perfusion Q = 0) while ventilation (V) is maintained with humidified room air. When the alveolar gas achieves dynamic equilibrium, what will be the expected partial pressures of oxygen (PAO2) and carbon dioxide (PACO2) within these occluded alveoli?",
    "a": [
      "PAO2 = 160 mmHg and PACO2 = 5 mmHg",
      "PAO2 = 149 mmHg and PACO2 = 0 mmHg",
      "PAO2 = 100 mmHg and PACO2 = 40 mmHg",
      "PAO2 = 0 mmHg and PACO2 = 100 mmHg",
      "PAO2 = 40 mmHg and PACO2 = 45 mmHg"
    ],
    "c": 1,
    "r": "When an alveolus is ventilated with humidified room air but receives zero capillary perfusion (V/Q = infinity, pure alveolar dead space), no gas exchange occurs between alveolar air and pulmonary blood. Consequently, no oxygen is extracted and no carbon dioxide is added. The alveolar gas equilibrates exactly with humidified inspired tracheal air: PO2 = (760 - 47) × 0.21 ≈ 149 mmHg, and PCO2 = 0 mmHg.\n\nHigh-Yield Pearl: In an unperfused, ventilated alveolus (V/Q = ∞), gas composition equals inspired humidified air: PAO2 = 149 mmHg, PACO2 = 0 mmHg."
  },
  {
    "cat": 3,
    "q": "A 29-year-old woman with severe preeclampsia delivers a healthy term infant. Immediately following placental expulsion, she develops profuse postpartum hemorrhage due to uterine atony. Which of the following uterotonic medications is strictly contraindicated in this patient due to its potent vasoconstrictive mechanism?",
    "a": [
      "Carboprost tromethamine (prostaglandin F2-alpha)",
      "Tranexamic acid",
      "Ergometrine (methylergonovine)",
      "Oxytocin infusion",
      "Misoprostol (prostaglandin E1 analogue)"
    ],
    "c": 2,
    "r": "Ergometrine (methylergonovine) is an ergot alkaloid that induces sustained tetanic uterine contractions and potent systemic alpha-adrenergic vasoconstriction. It is strictly contraindicated in women with gestational hypertension, preeclampsia, eclampsia, or cardiovascular disease because it can precipitate hypertensive crisis, intracerebral hemorrhage, or myocardial infarction. Oxytocin is the first-line uterotonic in hypertensive patients.\n\nHigh-Yield Pearl: Ergometrine (methylergonovine) is strictly contraindicated in preeclampsia and hypertension due to risk of fatal hypertensive crises."
  },
  {
    "cat": 3,
    "q": "A 31-year-old G2P1 woman at 39 weeks of gestation undergoes uncomplicated induction of labor. Minutes after the delivery of a healthy infant, she suddenly develops acute severe dyspnea, cyanosis, seizure activity, and profound cardiovascular collapse with blood pressure dropping to 60/35 mm Hg. Tracheal intubation and aggressive fluid resuscitation are initiated. Shortly thereafter, torrential continuous dark blood is noted oozing from her IV puncture sites, venipuncture sites, and vaginal lacerations.\n\nLaboratory evaluation reveals:\n<table class='lab-table'><thead><tr><th>Parameter</th><th>Patient Value</th><th>Reference Range</th></tr></thead><tbody><tr><td>Prothrombin Time (PT)</td><td>26.4 seconds</td><td>11.0–13.5 seconds</td></tr><tr><td>Activated Partial Thromboplastin Time (APTT)</td><td>68.2 seconds</td><td>25.0–35.0 seconds</td></tr><tr><td>Fibrinogen</td><td>65 mg/dL</td><td>200–400 mg/dL</td></tr><tr><td>Platelet Count</td><td>38,000/µL</td><td>150,000–450,000/µL</td></tr><tr><td>D-dimer</td><td>14,500 ng/mL D-DU</td><td>< 500 ng/mL D-DU</td></tr></tbody></table><span class='q-stem-bold'>Which of the following primary pathophysiological triggers explains the profound prolongation of both PT and APTT in this patient?</span>",
    "a": [
      "Primary hyperfibrinolysis mediated by excessive placental release of urokinase-type plasminogen activator (uPA)",
      "Massive entry of fetal thromboplastin-like tissue factor into the maternal circulation triggering consumptive disseminated intravascular coagulation (DIC)",
      "Isolated hepatic microvascular thrombosis leading to sudden cessation of prothrombin and factor VII synthesis",
      "Autoimmune production of antibodies directed against phospholipid-protein complexes and factor VIII",
      "Circulating maternal anti-thrombin III excess induced by acute right ventricular strain"
    ],
    "c": 1,
    "r": "This patient presents with classic Amniotic Fluid Embolism (AFE), a catastrophic obstetric emergency characterized by the triad of sudden cardiopulmonary arrest (or profound hypotension and hypoxia), seizures, and rapid-onset disseminated intravascular coagulation (DIC) with consumptive coagulopathy.\n\nPathophysiology of Prolonged PT and APTT:\n1. Tissue Factor (Thromboplastin) Release: Amniotic fluid contains large quantities of fetal tissue factor (thromboplastin-like procoagulants) and mucin. Breaches in the endocervical or uterine veins allow amniotic fluid to enter the maternal venous circulation.\n2. Massive Coagulation Cascade Activation: Circulating tissue factor complexes with maternal factor VIIa, initiating extensive extrinsic coagulation that rapidly activates the common and intrinsic pathways.\n3. Consumptive Coagulopathy: Uncontrolled widespread microvascular fibrin thrombus deposition consumes clotting factors (factors II, V, VII, VIII, IX, X, and fibrinogen) and platelets faster than the liver and bone marrow can replenish them. Because factors in both the extrinsic (factor VII, tissue factor) and intrinsic (factors VIII, IX, XI, XII) as well as common (factors X, V, II, fibrinogen) pathways are depleted, both the Prothrombin Time (PT) and Activated Partial Thromboplastin Time (APTT) become markedly prolonged.\n\nHigh-Yield Pearl: Amniotic fluid embolism introduces abundant fetal tissue factor into the maternal circulation, triggering widespread consumptive DIC that depletes both extrinsic and intrinsic clotting factors, resulting in markedly prolonged PT and APTT, hypofibrinogenemia, thrombocytopenia, and high D-dimer."
  },
  {
    "cat": 2,
    "q": "A 28-year-old woman presents for prenatal care. She reports regular 28-day menstrual cycles. The first day of her last normal menstrual period (LMP) was April 10, 2026. Applying Naegele's rule, what is her calculated expected date of delivery (EDD)?",
    "a": [
      "January 10, 2027",
      "January 17, 2027",
      "December 17, 2026",
      "January 24, 2027",
      "February 17, 2027"
    ],
    "c": 1,
    "r": "Naegele's rule calculates the estimated date of delivery (EDD) for a woman with regular 28-day cycles by adding 7 days to the first day of the last menstrual period (LMP), subtracting 3 months, and adding 1 year: LMP: April 10, 2026. Add 7 days → April 17, 2026. Subtract 3 months (April → March → February → January) → January 17. Add 1 year → January 17, 2027.\n\nHigh-Yield Pearl: Naegele's rule: EDD = (LMP + 7 days) - 3 months + 1 year."
  },
  {
    "cat": 0,
    "q": "A newborn infant exhibits respiratory distress immediately after delivery. A chest radiograph reveals a multicystic mass in the left lower hemithorax with mediastinal shift to the right. Histological analysis of the resected mass demonstrates multiple uniformly small cysts (ranging from 0.5 to 2.0 cm in diameter) lined by simple cuboidal to columnar ciliated epithelium, with structures closely resembling dilated terminal and respiratory bronchioles lacking cartilage plates. This presentation is most characteristic of which congenital anomaly?",
    "a": [
      "CPAM Type 1 with large solitary cyst (>2 cm)",
      "Bronchogenic cyst arising from the primitive ventral foregut",
      "Congenital Pulmonary Airway Malformation (CPAM) Type 2",
      "CPAM Type 3 featuring microcystic solid adenomatoid architecture",
      "Extralobar pulmonary sequestration with systemic arterial supply"
    ],
    "c": 2,
    "r": "Congenital Pulmonary Airway Malformation (CPAM, formerly CCAM) is classified according to Stocker's histological criteria: Type 1 (50–65%) consists of large cysts (>2 cm, often solitary) lined by pseudostratified ciliated columnar epithelium. Type 2 (20–25%) consists of multiple uniformly small cysts (0.5–2 cm) resembling dilated bronchioles lined by cuboidal to ciliated columnar epithelium, frequently associated with other congenital anomalies (cardiac, renal). Type 3 (8%) is microcystic or solid. Type 4 involves peripheral alveolar cysts.\n\nHigh-Yield Pearl: CPAM Type 2 is characterized by multiple small cysts (0.5–2 cm) lined by cuboidal/columnar epithelium resembling dilated bronchioles."
  },
  {
    "cat": 3,
    "q": "A 4-year-old boy presents with failure to thrive, foul-smelling greasy bulky stools, recurrent bouts of Pseudomonas bronchitis, and chronic wheezing. Physical examination reveals bilateral inspiratory crackles and prominent digital clubbing with loss of the normal Lovibond angle (>180°). Which of the following genetic alterations is the underlying cause of this child's condition?",
    "a": [
      "Heterozygous mutation in the alpha-1 antitrypsin (SERPINA1) gene",
      "Autosomal dominant defect in the COL1A1 gene causing brittle connective tissue",
      "Autosomal recessive mutation in the CFTR gene (commonly Delta-F508) causing misfolded chloride channels",
      "Defect in dynein arms of ciliated cells resulting in primary ciliary dyskinesia",
      "X-linked mutation in the dystrophin gene causing progressive myofiber atrophy"
    ],
    "c": 2,
    "r": "Cystic fibrosis (CF) is an autosomal recessive disorder caused by mutations in the CFTR gene on chromosome 7, most commonly a 3-base-pair deletion of phenylalanine at position 508 (Delta-F508). This produces misfolded CFTR protein that is degraded in the proteasome. Absent apical chloride channels impair water secretion, leading to hyperviscous mucus in the lungs (causing recurrent Pseudomonas infections, bronchiectasis, and digital clubbing) and exocrine pancreatic insufficiency (causing steatorrhea and failure to thrive).\n\nHigh-Yield Pearl: Cystic fibrosis is caused by CFTR mutations (Delta-F508), presenting with recurrent Pseudomonas infections, bronchiectasis, steatorrhea, and digital clubbing."
  },
  {
    "cat": 3,
    "q": "A 19-year-old man with cystic fibrosis (homozygous for the Delta-F508 mutation) presents to the pulmonary clinic with a 2-month history of worsening deep, aching pain and non-pitting edema over his distal forearms, wrists, and bilateral lower legs. The pain is worse with dependency and partially relieved by elevation and nonsteroidal anti-inflammatory drugs. Physical examination reveals prominent digital clubbing (Lovibond angle > 180 degrees), warmth and exquisite tenderness along the distal shafts of the radius, ulna, and tibia, and bilateral ankle joint effusions.\n\nPlain radiographs of the distal lower extremities demonstrate bilateral, symmetrical, linear subperiosteal new bone formation along the diaphyses of the tibia and fibula, without cortical destruction.<span class='q-stem-bold'>Which of the following conditions best accounts for this patient's presentation?</span>",
    "a": [
      "Pseudomonas-induced acute bacterial osteomyelitis of the long bone diaphyses",
      "Hypertrophic pulmonary osteoarthropathy (HPOA) secondary to chronic suppurative lung disease",
      "Vitamin D deficiency and secondary hyperparathyroidism causing renal osteodystrophy",
      "Ciprofloxacin-induced tendinitis and subperiosteal hematoma",
      "Chronic immune-complex-mediated systemic juvenile idiopathic arthritis"
    ],
    "c": 1,
    "r": "This patient presents with Hypertrophic Pulmonary Osteoarthropathy (HPOA, also known as Pierre Marie-Bamberger syndrome) occurring as an established extrapulmonary complication of cystic fibrosis (CF) and chronic suppurative lung disease.\n\nKey Clinical & Pathophysiological Features of HPOA in Cystic Fibrosis:\n1. Triad: Digital clubbing, periostitis (new subperiosteal bone formation producing deep, burning, or aching long bone pain and tender swelling over distal extremities), and symmetrical oligo- or polyarthritis/effusions.\n2. Mechanism: In healthy individuals, megakaryocytes and large platelet clumps originating in bone marrow are fragmented into mature platelets within the pulmonary capillary bed. In CF with chronic pulmonary infection, severe ventilation-perfusion mismatch, and right-to-left shunting (or bronchopulmonary anastomoses), intact megakaryocytes bypass pulmonary fragmentation and impact in the peripheral microcirculation of the distal extremities. Once lodged, they release high concentrations of platelet-derived growth factor (PDGF) and vascular endothelial growth factor (VEGF). These cytokines trigger intense endothelial activation, periosteal angiogenesis, fibroblast proliferation, and rapid subperiosteal osteogenesis.\n3. Classic Radiography: Bilateral, symmetrical 'onion-skin' or linear subperiosteal appositional new bone formation along the diaphyses and metaphyses of distal tubular bones (tibia, fibula, radius, ulna), without focal osseous lytic destruction.\n\nHigh-Yield Pearl: In young patients, cystic fibrosis and bronchiectasis are classic pulmonary causes of hypertrophic pulmonary osteoarthropathy (HPOA), marked by digital clubbing, burning extremity pain, and symmetrical diaphyseal periostitis driven by peripheral megakaryocyte VEGF/PDGF release."
  },
  {
    "cat": 3,
    "q": "A 2-month-old infant with meconium ileus at birth and recurrent sinopulmonary symptoms is evaluated for cystic fibrosis. Which of the following laboratory techniques serves as the gold-standard diagnostic modality to confirm or exclude this diagnosis?",
    "a": [
      "Quantitative pilocarpine iontophoresis sweat chloride test",
      "Measurement of stool alpha-1 antitrypsin clearance",
      "Bronchoalveolar lavage bacterial colony count alone",
      "Serum alpha-1 antitrypsin quantitative phenotype assay",
      "Serum IgE level and skin prick testing"
    ],
    "c": 0,
    "r": "The quantitative pilocarpine iontophoresis sweat test is the gold-standard diagnostic test for cystic fibrosis. Pilocarpine is applied to the skin and electrically driven via iontophoresis to induce sweating. Sweat is collected and chloride concentration is measured. A sweat chloride level ≥60 mmol/L on two separate occasions confirms the diagnosis of cystic fibrosis, reflecting defective CFTR-mediated chloride reabsorption in sweat ducts.\n\nHigh-Yield Pearl: The quantitative pilocarpine iontophoresis sweat test is the definitive gold standard for CF; sweat chloride ≥60 mmol/L confirms diagnosis."
  },
  {
    "cat": 0,
    "q": "A 6-month-old infant presents with biphasic stridor, episodic cyanosis, and recurrent severe lower respiratory infections. Bronchoscopy reveals severe narrowing of the distal trachea. Histological examination shows complete circumferential cartilaginous rings encircling the trachea without the normal posterior membranous trachealis muscle. This anomaly is designated as:",
    "a": [
      "Laryngomalacia with floppy omega-shaped epiglottis",
      "Type IV laryngeal cleft with posterior communication",
      "Congenital tracheal stenosis with complete tracheal rings",
      "Vascular ring with double aortic arch",
      "Tracheomalacia with excessive collapse of normal C-shaped rings"
    ],
    "c": 2,
    "r": "Normal trachea contains C-shaped hyaline cartilage rings connected posteriorly by the membranous tracheal wall and trachealis smooth muscle. Congenital tracheal stenosis is a rare anomaly characterized by complete circumferential cartilaginous 'O-shaped' rings lacking the posterior membranous segment. Because the cartilaginous rings are completely rigid and do not grow proportionally, they cause fixed, severe distal airway obstruction and biphasic stridor.\n\nHigh-Yield Pearl: Congenital tracheal stenosis is characterized by complete, rigid circumferential cartilaginous rings lacking a posterior membranous wall."
  },
  {
    "cat": 0,
    "q": "At birth, a full-term infant possesses approximately 20 to 50 million primitive terminal alveoli. By age 8, the total number of mature alveoli expands to approximately 300 to 400 million. Postnatal lung growth and expansion of the gas-exchange surface area are primarily achieved by which of the following biological processes?",
    "a": [
      "Thickening of the capillary basement membrane",
      "Dilation and hypertrophy of pre-existing embryonic bronchioles without new alveolar formation",
      "Proliferation of cartilage rings into the terminal conducting zone",
      "Conversion of type I pneumocytes into goblet cells",
      "Septation and progressive multiplication of true alveoli"
    ],
    "c": 4,
    "r": "The majority of human alveoli form postnatally (the alveolar stage extends from ~36 weeks gestation through approximately 8 years of age). Lung growth during early childhood does not occur merely by enlargement of existing spaces; rather, it is driven by secondary septation—the formation of secondary alveolar septa from existing terminal sacs—which multiplies alveolar numbers roughly ten-fold (from ~30–50 million to 300–400 million).\n\nHigh-Yield Pearl: Postnatal lung development is characterized by secondary septation and marked multiplication of alveolar numbers until ~8 years of age."
  },
  {
    "cat": 2,
    "q": "A 32-year-old man with cystic fibrosis (CF) attends his scheduled adult transition clinic. He is currently on pancreatic enzyme replacement therapy, inhaled dornase alfa, and elexacaftor/tezacaftor/ivacaftor triple therapy. During a multidisciplinary review on long-term endocrine and metabolic comorbidities in surviving adult CF patients, the pulmonologist discusses screening for cystic fibrosis-related diabetes (CFRD).<span class='q-stem-bold'>Approximately what proportion of adults with cystic fibrosis aged 30 to 39 years develop cystic fibrosis-related diabetes (CFRD)?</span>",
    "a": [
      "Approximately 5%",
      "Approximately 15%",
      "Approximately 25%",
      "Approximately 50%",
      "Approximately 85%"
    ],
    "c": 3,
    "r": "Cystic fibrosis-related diabetes (CFRD) is the most common non-pulmonary comorbidity in cystic fibrosis. Its prevalence increases dramatically with advancing age:\n- Children and adolescents: ~15–20% by late adolescence.\n- Adults: Approximates 40–50% in patients aged 30 years and older.\n\nPathophysiology & Clinical Pearls:\n1. Pathophysiology: Thick, inspissated pancreatic exocrine secretions cause ductal obstruction, autodigestion, chronic pancreatitis, and extensive fatty-fibrotic architectural remodeling of the pancreas. This progressive fibrosis collateralizes into islet destruction with selective depletion of insulin-producing beta cells, combined with peripheral insulin resistance exacerbated by chronic pulmonary infections and systemic inflammation.\n2. Screening: The gold-standard screening test is an annual 2-hour 75-gram oral glucose tolerance test (OGTT) starting at age 10. Hemoglobin A1c is notoriously unreliable and insensitive in CF due to rapid red blood cell turnover and chronic hemolysis.\n3. Impact: CFRD is an independent predictor of worsening pulmonary function (accelerated FEV1 decline), catabolism/weight loss, and increased mortality unless treated with insulin replacement.\n\nHigh-Yield Pearl: Up to 50% of adult CF patients (aged 30+) develop cystic fibrosis-related diabetes (CFRD) due to progressive fibrotic destruction of pancreatic islets."
  },
  {
    "cat": 3,
    "q": "A 52-year-old woman admitted with severe acute pancreatitis develops sudden respiratory failure with profound hypoxemia (PaO2/FiO2 ratio = 110) and diffuse bilateral alveolar infiltrates on chest radiograph. She is intubated and mechanically ventilated. Open lung biopsy obtained during the acute exudative phase would most characteristically demonstrate which of the following histological hallmarks?",
    "a": [
      "Caseating granulomas with Langhans multinucleated giant cells",
      "Uniform intra-alveolar sheets of malignant squamous cells with keratin pearls",
      "Eosinophilic hyaline membranes lining distended alveolar ducts, composed of fibrin-rich exudate and necrotic epithelial cells",
      "Dense peribronchial non-caseating sarcoid granulomas",
      "Extensive intra-alveolar accumulation of surfactant-rich Periodic acid-Schiff (PAS) positive lipoproteinaceous material"
    ],
    "c": 2,
    "r": "The patient has severe Acute Respiratory Distress Syndrome (ARDS) secondary to acute pancreatitis. The histopathological correlate of ARDS is Diffuse Alveolar Damage (DAD). In the acute exudative phase (days 1–7), inflammatory cytokines cause endothelial and alveolar epithelial necrosis, capillary leak, and intra-alveolar exudation of fibrin and plasma proteins. These precipitate with necrotic epithelial debris to form bright pink, waxy hyaline membranes lining the alveolar ducts.\n\nHigh-Yield Pearl: The acute exudative phase of ARDS (diffuse alveolar damage) is histologically characterized by pink, fibrin-rich hyaline membranes."
  },
  {
    "cat": 3,
    "q": "During acute bacterial bronchopneumonia, activated neutrophils undergo a specialized form of cell death termed NETosis, creating extracellular web-like structures that trap and neutralize extracellular microbes. Biochemical analysis of these neutrophil extracellular traps (NETs) reveals that their primary structural backbone is composed of:",
    "a": [
      "Polymerized actin and tubulin microfilaments",
      "Extruded nuclear chromatin DNA complexed with citrullinated histones and antimicrobial granule proteins (elastase, myeloperoxidase)",
      "Aggregated immunoglobulin G light chains",
      "Hyaluronic acid and chondroitin sulfate glycosaminoglycans",
      "Insoluble amyloid beta fibrillar polymers"
    ],
    "c": 1,
    "r": "Neutrophil Extracellular Traps (NETs) are networks of extracellular fibers released by dying neutrophils during NETosis. The core backbone is composed of unwound nuclear chromatin (double-stranded DNA) and citrullinated histones (modified by peptidylarginine deiminase 4 [PAD4]), decorated with antimicrobial granular proteins including neutrophil elastase, myeloperoxidase, and cathelicidins. NETs trap and kill bacteria but also cause bystander endothelial damage in sepsis and ARDS.\n\nHigh-Yield Pearl: Neutrophil extracellular traps (NETs) consist of extruded chromatin DNA and histones embedded with granular proteases and myeloperoxidase."
  },
  {
    "cat": 3,
    "q": "A 60-year-old man develops severe lobar pneumonia with high fever, chills, and purulent sputum. Within hours of pathogen recognition by alveolar macrophage Toll-like receptors (TLRs), which triad of primary acute proinflammatory cytokines is released to orchestrate systemic fever, hepatic acute-phase reactant synthesis, and massive neutrophil chemotaxis?",
    "a": [
      "Interleukin-1 (IL-1), Interleukin-8 (IL-8), and Tumor Necrosis Factor-alpha (TNF-α)",
      "Interleukin-4 (IL-4), Interleukin-5 (IL-5), and Interleukin-13 (IL-13)",
      "Interferon-gamma (IFN-γ), IL-12, and IL-2",
      "Interleukin-10 (IL-10), Transforming Growth Factor-beta (TGF-β), and IL-35",
      "Erythropoietin, Thrombopoietin, and Granulocyte colony-stimulating factor (G-CSF)"
    ],
    "c": 0,
    "r": "Upon encountering pathogen-associated molecular patterns (such as bacterial LPS or peptidoglycan), alveolar macrophages secrete the primary proinflammatory triad: TNF-alpha and IL-1 (which induce hypothalamic fever, endothelial selectin expression, and hepatic CRP/fibrinogen synthesis) and IL-8 (CXCL8, the premier neutrophil chemotactic cytokine that recruits neutrophils from pulmonary capillaries into infected alveoli).\n\nHigh-Yield Pearl: The primary acute proinflammatory cytokine triad consists of IL-1 (fever/activation), TNF-α (endothelial adhesion/shock), and IL-8 (neutrophil chemotaxis)."
  },
  {
    "cat": 3,
    "q": "A 66-year-old heavy smoker presents with confusion, lethargy, and anorexia. Chest radiograph reveals a large central perihilar mass causing bronchial obstruction and post-obstructive atelectasis. Laboratory evaluation shows: serum sodium 116 mEq/L, serum osmolality 242 mOsm/kg, urine sodium 48 mEq/L, and urine osmolality 480 mOsm/kg. The patient is euvolemic on physical exam. Biopsy shows small, round, dark blue cells with scant cytoplasm, granular 'salt-and-pepper' chromatin, and frequent mitoses. What is the diagnosis?",
    "a": [
      "Squamous cell carcinoma causing paraneoplastic hypercalcemia via PTHrP",
      "Small cell lung carcinoma causing paraneoplastic Syndrome of Inappropriate Antidiuretic Hormone (SIADH)",
      "Pulmonary adenocarcinoma producing ectopic thyroid-stimulating hormone (TSH)",
      "Renal cell carcinoma metastatic to the lung producing renin",
      "Large cell neuroendocrine carcinoma causing primary hypoaldosteronism"
    ],
    "c": 1,
    "r": "Small cell lung carcinoma (SCLC) is a highly aggressive high-grade neuroendocrine tumor strongly linked to tobacco smoking, characteristically arising centrally near major bronchi. Histology shows small round-to-oval blue cells with scant cytoplasm, nuclear molding, and fine chromatin. Up to 10–15% of patients develop SIADH due to ectopic production of arginine vasopressin (ADH), resulting in euvolemic hyponatremia with inappropriately concentrated urine (>100 mOsm/kg) and elevated urine sodium (>40 mEq/L).\n\nHigh-Yield Pearl: Small cell lung carcinoma commonly produces paraneoplastic SIADH, presenting with euvolemic hyponatremia and concentrated urine."
  },
  {
    "cat": 3,
    "q": "Epidemiological analysis of primary bronchogenic malignancies across both males and females, including both smokers and lifelong non-smokers, reveals that the single most common histological subtype of lung cancer in the United States and globally is:",
    "a": [
      "Small cell neuroendocrine carcinoma",
      "Bronchial carcinoid tumor",
      "Large cell undifferentiated carcinoma",
      "Squamous cell carcinoma",
      "Adenocarcinoma of the lung"
    ],
    "c": 4,
    "r": "Adenocarcinoma is the most common histological subtype of primary lung cancer overall in the general population, accounting for ~40–50% of all cases. It is the most common subtype in women, the most common subtype in non-smokers, and has now surpassed squamous cell carcinoma as the most frequent subtype even in cigarette smokers. It typically presents as a peripheral solitary nodule or mass, often staining positive for TTF-1 and napsin A.\n\nHigh-Yield Pearl: Adenocarcinoma is the most common histological subtype of lung cancer overall, as well as in women and non-smokers."
  },
  {
    "cat": 3,
    "q": "A 56-year-old male coal miner with a 15-year history of severe seropositive Rheumatoid Arthritis presents for routine follow-up. Chest CT reveals multiple well-defined bilateral peripheral pulmonary nodules ranging from 1 to 4 cm in diameter, superimposed on background reticulonodular opacities in the upper lung zones. Histopathology of a lung nodule shows central fibrinoid necrosis surrounded by a palisade of histiocytes and multinucleated giant cells embedded with anthracotic coal pigment. This presentation is designated as:",
    "a": [
      "Hamman-Rich syndrome (acute interstitial pneumonia)",
      "Löfgren syndrome in acute sarcoidosis",
      "Caplan syndrome (rheumatoid pneumoconiosis)",
      "Churg-Strauss syndrome (EGPA)",
      "Goodpasture syndrome with anti-GBM antibodies"
    ],
    "c": 2,
    "r": "Caplan syndrome (rheumatoid pneumoconiosis) is the development of multiple large, well-circumscribed necrotizing rheumatoid nodules in the lungs of patients with rheumatoid arthritis who have occupational pneumoconiosis (most commonly coal workers' pneumoconiosis, but also silicosis or asbestosis). Histologically, the nodules resemble subcutaneous rheumatoid nodules with central necrobiosis surrounded by palisading epithelioid histiocytes, marked by embedded anthracotic or mineral dust.\n\nHigh-Yield Pearl: Caplan syndrome is the combination of rheumatoid arthritis with pneumoconiosis, manifesting as necrobiotic pulmonary nodules."
  },
  {
    "cat": 3,
    "q": "A 44-year-old dairy farmer presents with recurrent episodes of fever, chills, nonproductive cough, and severe dyspnea occurring 4 to 8 hours after entering a poorly ventilated barn filled with moldy hay. Bronchoalveolar lavage reveals marked lymphocytosis (>50%) with a decreased CD4+/CD8+ ratio (<1.0). Serum precipitin antibodies against Saccharopolyspora rectivirgula are detected. The acute and subacute immunological mechanisms driving this condition (extrinsic allergic alveolitis / farmer's lung) consist of:",
    "a": [
      "Isolated complement deficiency of factor H",
      "Direct toxic chemical saponification of alveolar membranes",
      "Combined Type III (immune-complex mediated) and Type IV (cell-mediated delayed) hypersensitivity reactions",
      "Type I (IgE-mediated immediate) hypersensitivity alone",
      "Type II (antibody-dependent cytotoxic) hypersensitivity directed against basement membrane laminin"
    ],
    "c": 2,
    "r": "Hypersensitivity pneumonitis (extrinsic allergic alveolitis) is an immunologically induced lung disease caused by repeated inhalation of environmental antigens (e.g., thermophilic actinomycetes in moldy hay causing 'farmer's lung', avian antigens in 'bird fancier's lung'). Pathophysiologically, acute episodes are mediated by Type III hypersensitivity (antigen-antibody immune complexes and complement activation, triggering neutrophil influx), whereas subacute and chronic progressive disease is driven by Type IV hypersensitivity (CD8+ T-cell and macrophage recruitment leading to poorly formed, non-caseating granulomas).\n\nHigh-Yield Pearl: Hypersensitivity pneumonitis is mediated by combined Type III (immune-complex) and Type IV (delayed cell-mediated) hypersensitivity."
  },
  {
    "cat": 3,
    "q": "A 58-year-old chronic heavy smoker meets the clinical criteria for chronic bronchitis (productive cough for at least 3 consecutive months in 2 consecutive years). A bronchial mucosal biopsy is obtained. Which of the following pathological features would be considered UNEXPECTED and NOT characteristic of chronic bronchitis?",
    "a": [
      "Hyperplasia and proliferation of mucosal ciliated epithelial cells",
      "Squamous metaplasia of pseudostratified ciliated columnar epithelium",
      "Mononuclear inflammatory cell infiltrate in the bronchial lamina propria",
      "Goblet cell hyperplasia with luminal mucopurulent plugging",
      "Marked hypertrophy and hyperplasia of submucosal seromucinous glands (increased Reid index >0.5)"
    ],
    "c": 0,
    "r": "Chronic bronchitis is defined pathologically by hypertrophy of mucus-secreting glands (Reid index >0.5), goblet cell hyperplasia, squamous metaplasia, inflammatory infiltrates, and progressive loss/paralysis of cilia (ciliary impairment and squamous metaplasia). Ciliated cells are actively damaged, paralyzed, and replaced by mucus-secreting goblet cells and squamous cells; they NEVER undergo hyperplasia. Ciliary loss impairs the mucociliary escalator, predisposing to recurrent bacterial infections.\n\nHigh-Yield Pearl: Chronic bronchitis is marked by squamous metaplasia and ciliary loss; ciliary hyperplasia does NOT occur."
  },
  {
    "cat": 3,
    "q": "A 62-year-old man with a 40 pack-year smoking history undergoes pulmonary function testing. The spirometry demonstrates: FEV1 48% of predicted, FVC 85% of predicted, FEV1/FVC ratio 0.56, Total Lung Capacity (TLC) 124% of predicted, and DLCO 42% of predicted. These findings definitively establish that emphysema is fundamentally classified as:",
    "a": [
      "A pure central neuromuscular ventilatory failure with normal spirometry",
      "An intrinsic restrictive lung disease characterized by reduced lung volume and increased recoil",
      "A primary pulmonary vascular disease without ventilatory impairment",
      "An obstructive lung disease characterized by airflow limitation and dynamic hyperinflation",
      "An extrinsic restrictive chest wall disorder with normal intrinsic lung parenchyma"
    ],
    "c": 3,
    "r": "Emphysema is a classic obstructive lung disease. By definition, obstructive defects are characterized by a reduced FEV1/FVC ratio (<0.70 or <70%), caused by irreversible narrowing of small airways and loss of alveolar tethering that leads to expiratory airflow obstruction. Total Lung Capacity (TLC) is increased or normal (hyperinflation), distinguishing it unequivocally from restrictive disorders where TLC is reduced (<80%) and FEV1/FVC is normal or increased (>0.75–0.80).\n\nHigh-Yield Pearl: Emphysema is an obstructive lung disease characterized by a decreased FEV1/FVC ratio (<0.70) and elevated TLC."
  },
  {
    "cat": 3,
    "q": "A 14-year-old boy presents to the urgent care clinic during spring with acute wheezing, dyspnea, and nonproductive cough after playing in a grassy meadow. He has a history of seasonal allergic rhinitis and atopic dermatitis. Which of the following inhaled environmental antigens represents the most common trigger of allergen-induced extrinsic (atopic) asthma in this clinical setting?",
    "a": [
      "Airborne floral and grass pollens",
      "Ingested aspirin and nonsteroidal anti-inflammatory drugs",
      "Occupational isocyanate chemical fumes",
      "Bacterial endotoxin from inhaled gram-negative rods",
      "Cold dry winter air during exercise"
    ],
    "c": 0,
    "r": "Extrinsic (atopic) asthma is a classical Type I IgE-mediated hypersensitivity reaction triggered by environmental allergens. Common inhaled triggers include airborne tree, grass, and weed pollens (responsible for seasonal spring/summer exacerbations), animal dander, dust mite feces (Dermatophagoides pteronyssinus), and fungal spores. In a child with the 'atopic triad' (eczema, allergic rhinitis, asthma) reacting in a spring meadow, grass/floral pollen is the classic culprit.\n\nHigh-Yield Pearl: Extrinsic (atopic) asthma is a Type I IgE-mediated response most commonly triggered by pollens, pet dander, and house dust mites."
  },
  {
    "cat": 3,
    "q": "In medical microbiology and public health epidemiology, an important distinction is made between the terms 'infectious' and 'contagious'. Which of the following axioms correctly defines the fundamental relationship between these two epidemiological concepts?",
    "a": [
      "Contagious diseases require an intermediate insect vector, whereas infectious diseases do not",
      "The terms are completely synonymous and interchangeable in all clinical contexts",
      "Infectious diseases are transmitted exclusively via genetic inheritance",
      "All infectious diseases are contagious, but not all contagious diseases are infectious",
      "All contagious diseases are infectious, but not all infectious diseases are contagious"
    ],
    "c": 4,
    "r": "An infectious disease is any illness caused by a microorganism (bacterium, virus, fungus, parasite) invading host tissue. A contagious (communicable) disease is a specific subset of infectious diseases that can be transmitted directly or indirectly from one person to another (e.g., measles, influenza, tuberculosis). Therefore, all contagious diseases are infectious. However, many infectious diseases are NOT contagious (e.g., Legionella acquired from water aerosols, tetanus from soil spores, Lyme disease from ticks, or histoplasmosis from bat guano; none of these spread person-to-person).\n\nHigh-Yield Pearl: All contagious diseases are infectious, but not all infectious diseases are contagious (e.g., tetanus and legionellosis are infectious but non-contagious)."
  },
  {
    "cat": 3,
    "q": "A 54-year-old man visits the primary care clinic for an annual health maintenance evaluation. His past medical history is significant for well-controlled mild asthma, and his childhood immunizations were completed per schedule. During the visit, he asks about preventing herpes zoster (shingles) and postherpetic neuralgia after an acquaintance was hospitalized with severe ophthalmic zoster. In accordance with current Advisory Committee on Immunization Practices (ACIP) and CDC guidelines,<span class='q-stem-bold'>which of the following summarizes the correct vaccine formulation, schedule, and indicated target populations for shingles prophylaxis?</span>",
    "a": [
      "RZV (2 doses, 50+ age, immunocompromised)",
      "ZVL (1 dose, 65+ age only, strictly immunocompetent)",
      "RZV (1 dose, 60+ age, immunocompromised)",
      "Varicella live vaccine (2 doses, 50+ age, immunocompetent only)",
      "ZVL (2 doses, 50+ age, immunocompromised)"
    ],
    "c": 0,
    "r": "According to current CDC and ACIP guidelines, the Recombinant Zoster Vaccine (RZV, Shingrix) is the preferred vaccine formulation for herpes zoster prevention:\n1. Formulation & Dosing: RZV is a non-live recombinant adjuvanted glycoprotein E subunit vaccine administered as a 2-dose intramuscular series (0 and 2–6 months apart).\n2. Target Populations:\n   - Immunocompetent adults aged 50 years and older (50+ age).\n   - Immunocompromised adults aged 19 years and older (including patients with hematologic malignancies, solid tumors, HIV, or on immunosuppressive therapy).\n3. Superiority over ZVL: The older live-attenuated zoster vaccine (ZVL, Zostavax) is discontinued in the United States and contraindicated in immunocompromised patients due to risk of disseminated viral infection. In contrast, RZV is safe in immunocompromised patients because it is a non-live recombinant vaccine, delivering >90% efficacy against shingles and postherpetic neuralgia across all age groups.\n\nHigh-Yield Pearl: Herpes zoster prevention is achieved using RZV (2 doses, 50+ age, immunocompromised individuals ≥19 years)."
  },
  {
    "cat": 3,
    "q": "During a public health campaign against a newly emerged respiratory viral pathogen with a basic reproduction number (R0) of 4.0, epidemiologists calculate the critical vaccination coverage required to halt endemic community transmission. Which of the following statements best describes the epidemiological principle of 'herd immunity'?",
    "a": [
      "Pathogenic virulence factors spontaneously mutate to non-pathogenic commensal states in vaccinated hosts",
      "When a sufficient proportion of a population is immune, transmission chains are broken, indirectly protecting unvaccinated and susceptible individuals",
      "Herd immunity requires 100% of the entire human population to receive active vaccination",
      "Immunization of one individual induces passive transmissible antibodies in their household contacts through aerosolized breath droplets",
      "Unvaccinated individuals become genetically immune through epigenetic environmental modifications"
    ],
    "c": 1,
    "r": "Herd immunity (community immunity) occurs when a sufficient percentage of a population becomes immune to an infectious agent (through vaccination or prior natural infection), reducing the likelihood that an infected individual will encounter a susceptible host. The herd immunity threshold is calculated as 1 - (1/R0). For R0 = 4, the threshold is 1 - (1/4) = 75%. This interrupts community transmission chains, providing indirect protection to vulnerable, unvaccinated, or immunosuppressed individuals.\n\nHigh-Yield Pearl: Herd immunity threshold = 1 - (1/R0); sufficient population immunity halts transmission chains and indirectly protects susceptible individuals."
  },
  {
    "cat": 3,
    "q": "A 22-year-old woman with a history of severe peanut allergy accidentally ingests a peanut-containing cookie. Within five minutes, cross-linking of surface-bound IgE on tissue mast cells triggers explosive degranulation. In addition to histamine, which group of newly synthesized and preformed mast cell mediators drives prolonged bronchoconstriction, vascular permeability, and mucosal edema?",
    "a": [
      "Interferon-alpha, Interferon-beta, and Interleukin-2",
      "Endothelin-1, Angiotensin II, and Vasopressin",
      "Thromboxane A2 and prostacyclin (PGI2) in equal proportions",
      "Complement proteins C3a, C5a, and membrane attack complex C5b-9",
      "Tryptase/chymase proteases, Prostaglandin D2 (PGD2), and Cysteinyl Leukotrienes (LTC4, LTD4, LTE4)"
    ],
    "c": 4,
    "r": "Mast cell activation upon IgE receptor cross-linking (Fc-epsilon-RI) causes two phases of mediator release: 1) Immediate degranulation of preformed mediators, including histamine, heparin, and neutral proteases (tryptase and chymase; serum tryptase is a clinical biomarker for anaphylaxis); and 2) Rapid de novo lipid mediator synthesis via the arachidonic acid cascade, releasing Prostaglandin D2 (PGD2, causing bronchospasm and vasodilation) and Cysteinyl Leukotrienes (LTC4, LTD4, LTE4, which are 1,000 times more potent than histamine in causing sustained bronchoconstriction and microvascular permeability).\n\nHigh-Yield Pearl: Mast cell activation releases preformed proteases (tryptase) and synthesizes PGD2 and cysteinyl leukotrienes (LTC4, LTD4, LTE4) causing severe bronchospasm."
  },
  {
    "cat": 3,
    "q": "A 42-year-old man with severe refractory eosinophilic asthma experiences frequent disabling exacerbations despite high-dose inhaled fluticasone and salmeterol. Sputum analysis reveals abundant Charcot-Leyden crystals and eosinophils (>8%). His physician considers targeted monoclonal antibody therapy (e.g., mepolizumab or benralizumab). Which of the following cytokines is the essential driver of eosinophil maturation, terminal differentiation in bone marrow, activation, and tissue survival?",
    "a": [
      "Interleukin-17 (IL-17)",
      "Interleukin-4 (IL-4)",
      "Interleukin-13 (IL-13)",
      "Interleukin-2 (IL-2)",
      "Interleukin-5 (IL-5)"
    ],
    "c": 4,
    "r": "Interleukin-5 (IL-5) is produced by Th2 helper T cells and type 2 innate lymphoid cells (ILC2s). It is the premier, non-redundant cytokine governing eosinophil biology: it stimulates bone marrow eosinophil lineage commitment, terminal differentiation, release into circulation, chemotactic migration into respiratory mucosa, and inhibits eosinophil apoptosis. Monoclonal antibodies targeting IL-5 (mepolizumab, reslizumab) or the IL-5 receptor alpha chain (benralizumab) drastically deplete eosinophils and reduce asthma exacerbations.\n\nHigh-Yield Pearl: Interleukin-5 (IL-5) is the primary driver of eosinophil production, activation, and survival; targeted by mepolizumab and benralizumab."
  },
  {
    "cat": 2,
    "q": "A 24-year-old athlete undergoes cardiopulmonary exercise testing. During submaximal steady-state exercise, his respiratory rate is measured at 20 breaths per minute, his tidal volume (VT) is 525 mL, and his physiological dead space (VD) is calculated as 150 mL. What is this individual's effective alveolar ventilation (VA)?",
    "a": [
      "12.0 L/min",
      "5.25 L/min",
      "3.0 L/min",
      "7.5 L/min",
      "10.5 L/min"
    ],
    "c": 3,
    "r": "Alveolar ventilation (VA) represents the volume of fresh inspired air that reaches the gas-exchanging alveoli per minute: VA = Respiratory Rate (RR) × (Tidal Volume [VT] - Dead Space [VD]). Here: VT = 525 mL = 0.525 L; VD = 150 mL = 0.150 L. Effective alveolar volume per breath = 525 - 150 = 375 mL (0.375 L). Total Alveolar Ventilation = 20 breaths/min × 0.375 L/breath = 7.5 L/min (7,500 mL/min).\n\nHigh-Yield Pearl: Alveolar ventilation = Respiratory Rate × (VT - VD); with RR=20, VT=525 mL, and VD=150 mL, VA = 20 × 375 mL = 7.5 L/min."
  },
  {
    "cat": 1,
    "q": "A 50-year-old man with dyspnea undergoes plethysmographic pulmonary function testing. Helium dilution testing reveals a Functional Residual Capacity (FRC) of 2,600 mL. Standard spirometry records an Expiratory Reserve Volume (ERV) of 1,100 mL, a Vital Capacity (VC) of 4,200 mL, and a Tidal Volume (VT) of 500 mL. Based on these measurements, what is the patient's Residual Volume (RV)?",
    "a": [
      "500 mL",
      "2,100 mL",
      "1,100 mL",
      "3,700 mL",
      "1,500 mL"
    ],
    "c": 4,
    "r": "Functional Residual Capacity (FRC) is the volume of gas remaining in the lungs at the end of a normal tidal expiration: FRC = Expiratory Reserve Volume (ERV) + Residual Volume (RV). Rearranging the equation: RV = FRC - ERV. Substituting the patient's values: RV = 2,600 mL - 1,100 mL = 1,500 mL. (Note: Residual volume cannot be measured by simple spirometry alone because the subject cannot exhale below RV; it requires helium dilution, nitrogen washout, or body plethysmography).\n\nHigh-Yield Pearl: Residual Volume (RV) = FRC - ERV; here 2600 mL - 1100 mL = 1500 mL. RV cannot be measured by spirometry alone."
  },
  {
    "cat": 1,
    "q": "A 67-year-old man with advanced idiopathic pulmonary fibrosis undergoes evaluation for exertional dyspnea. Histopathology demonstrates progressive fibrotic expansion of the inter-alveolar interstitium that doubles the diffusion distance across the blood-air barrier (thickness T increases by a factor of 2.0) and progressive honeycomb remodeling that destroys 50% of the functional alveolar capillary surface area (area A decreases by a factor of 2.0). Applying Fick's law of diffusion (V_gas ∝ [A × ΔP × D] / T), what is the net impact on the rate of oxygen transfer across his blood-air barrier?",
    "a": [
      "Four-fold reduction (decreased to 25% of baseline)",
      "Eight-fold reduction (decreased to 12.5% of baseline)",
      "Sixteen-fold reduction",
      "No net change because thickness and area cancel each other out",
      "Two-fold reduction (decreased to 50% of baseline)"
    ],
    "c": 0,
    "r": "According to Fick's Law of Diffusion, the rate of gas transfer across a tissue membrane is directly proportional to the surface area (A), the diffusion constant (D), and the partial pressure difference (ΔP), and inversely proportional to the membrane thickness (T): V_gas ∝ (A / T). If surface area is halved (A' = 0.5 A) and membrane thickness is doubled (T' = 2.0 T), the new diffusion rate becomes: V_gas' ∝ (0.5 / 2.0) = 0.25 (a four-fold reduction, or 25% of baseline).\n\nHigh-Yield Pearl: By Fick's law (V ∝ A/T), halving surface area (0.5) and doubling membrane thickness (2.0) results in a 4-fold reduction (0.25×) in diffusion rate."
  },
  {
    "cat": 0,
    "q": "Transmission electron microscopy of the epithelial lining of a terminal bronchiole reveals non-ciliated dome-shaped cells containing apical secretory granules and abundant smooth endoplasmic reticulum. These cells (Club cells, formerly Clara cells) perform which of the following vital protective functions in the small conducting airways?",
    "a": [
      "Gas exchange via ultrathin cytoplasmic extensions across capillary fenestrae",
      "Exclusive production of large volumes of viscous acidic mucin to trap viruses",
      "Rapid active phagocytosis of inhaled coal and mineral dust particles",
      "Secretion of protective surfactant-like lipoproteins and uteroglobin (Club Cell Secretory Protein / CCSP), and cytochrome P450-mediated detoxification of inhaled xenobiotics",
      "Direct electrical pace-making of smooth muscle peristaltic contractions"
    ],
    "c": 3,
    "r": "Club cells (formerly Clara cells) are specialized non-ciliated, dome-shaped cuboidal cells located predominantly in the terminal and respiratory bronchioles. They have two major functions: 1) Secretory: they secrete a protective surfactant-like mixture of glycosaminoglycans and CCSP (uteroglobin/CC16), which prevents luminal adhesion and airway collapse during expiration and exerts anti-inflammatory effects; 2) Metabolic/Regenerative: their abundant SER contains cytochrome P450 enzymes that detoxify inhaled airborne toxins and xenobiotics, and they act as reserve stem cells to regenerate ciliated epithelium after injury.\n\nHigh-Yield Pearl: Club (Clara) cells in bronchioles secrete protective CCSP/surfactant-like fluid, detoxify xenobiotics via SER P450, and act as reserve stem cells."
  },
  {
    "cat": 0,
    "q": "A medical student examines a histological section of healthy human pulmonary parenchyma. She traces the anatomical path of inspired air from the conducting zone into the respiratory zone. Which of the following microanatomical structures represents the definitive terminal site where the majority of passive external respiratory gas exchange occurs?",
    "a": [
      "Cartilaginous lobar bronchus",
      "Segmental (tertiary) bronchus",
      "Tracheal bifurcated carina",
      "Terminal bronchiole",
      "Alveoli organized within terminal alveolar sacs"
    ],
    "c": 4,
    "r": "The respiratory tract is divided into the conducting zone (generations 0–16: trachea down to terminal bronchioles), which warms, humidifies, and filters air without gas exchange, and the respiratory zone (generations 17–23: respiratory bronchioles, alveolar ducts, and alveolar sacs). The terminal alveolar sacs, surrounded by dense clusters of thin-walled polyhedral alveoli draped in pulmonary capillaries, provide ~75–100 m² of surface area where >95% of passive diffusion and external gas exchange takes place.\n\nHigh-Yield Pearl: External gas exchange occurs exclusively in the respiratory zone, predominantly within terminal alveolar sacs and alveoli."
  },
  {
    "cat": 1,
    "q": "A 30-year-old marathon runner collapses during a mid-summer race in high humidity. His core rectal temperature is measured at 42.0°C (107.6°F). He develops acute encephalopathy, tachypnea, and rapidly evolving acute lung injury. At the molecular level, severe sustained core hyperthermia (>41.5°C) damages the respiratory alveolar epithelium primarily through which of the following biophysical mechanisms?",
    "a": [
      "Permanent opening of aquaporin-1 channels preventing cellular fluid shifts",
      "Excessive stabilization and hyper-crystallization of respiratory surfactant dipalmitoylphosphatidylcholine",
      "Massive activation of cold-shock transcription factors that downregulate transcription",
      "Thermal denaturation and misfolding of essential cellular proteins and disruption of cell membrane lipid bilayers",
      "Inhibition of lactic acid dehydrogenase resulting in profound systemic alkalosis"
    ],
    "c": 3,
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
      "Direct inhibition of collecting duct H+-ATPase proton secretion",
      "Decreased renal synthesis of 1,25-dihydroxyvitamin D3",
      "Increased renal tubular excretion of bicarbonate in exchange for chloride ions",
      "Selective suppression of carbonic anhydrase activity in proximal tubular brush borders"
    ],
    "c": 0,
    "r": "The patient has chronic respiratory acidosis (elevated PaCO2 62 mmHg) secondary to severe COPD. Chronic hypoventilation allows CO2 to accumulate. Over 3 to 5 days, the kidneys provide chronic metabolic compensation: renal tubular cells upregulate carbonic anhydrase and apical Na+/H+ exchangers (NHE3) and H+-ATPases, secreting hydrogen ions into the urine (bound to phosphate as titratable acid and to ammonia as NH4⁺) while reabsorbing all filtered bicarbonate and generating new HCO3⁻ (raising serum HCO3⁻ to 35 mEq/L). For every 10 mmHg elevation in PaCO2 in chronic respiratory acidosis, serum HCO3⁻ increases by ~3.5 to 4 mEq/L.\n\nHigh-Yield Pearl: Chronic respiratory acidosis is compensated by renal H+ excretion (as NH4⁺ and titratable acid) and marked HCO3⁻ retention, raising serum bicarbonate."
  },
  {
    "cat": 3,
    "q": "A 72-year-old nursing home resident presents with cough, purulent sputum, fever, and confusion. Chest CT shows right lower lobe consolidation. Initial blood tests reveal a markedly elevated serum procalcitonin level of 4.8 ng/mL (normal <0.15 ng/mL). Which of the following clinical decisions is most strongly indicated by this biomarker profile?",
    "a": [
      "Administration of high-dose intravenous acyclovir for presumed viral bronchitis",
      "Discharge to home without medical intervention",
      "Prescription of oral oseltamivir monotherapy without bacterial coverage",
      "Immediate withholding of all antibiotics because high procalcitonin excludes bacterial infection",
      "Immediate administration of empirical broad-spectrum antibacterial therapy"
    ],
    "c": 4,
    "r": "Procalcitonin (PCT) is a peptide precursor of calcitonin produced ubiquitously by parenchymal cells in response to bacterial endotoxins (LPS) and proinflammatory cytokines (IL-1beta, TNF-alpha, IL-6). In contrast, viral infections stimulate interferon-gamma, which actively downregulates procalcitonin synthesis. A markedly elevated serum PCT (>0.5 to >2.0 ng/mL) has high specificity for invasive bacterial infection and strongly dictates the immediate initiation of empirical antibacterial therapy in community-acquired pneumonia.\n\nHigh-Yield Pearl: Elevated serum procalcitonin (>0.5–2.0 ng/mL) is a specific biomarker for invasive bacterial infection, mandating antibacterial therapy."
  },
  {
    "cat": 3,
    "q": "A previously healthy 35-year-old woman presents to the outpatient clinic with a 3-day history of fever, chills, and productive cough with rust-colored sputum. Physical exam reveals bronchial breath sounds and egophony over the left lower lung base. Chest radiograph confirms left lower lobe consolidation. She has no comorbidities and no recent antibiotic use. In accordance with clinical guidelines for outpatient Community-Acquired Pneumonia (CAP), which of the following represents the preferred first-line oral empirical monotherapy?",
    "a": [
      "Intravenous meropenem",
      "Oral ciprofloxacin",
      "Oral metronidazole",
      "Oral amoxicillin (high-dose)",
      "Oral vancomycin"
    ],
    "c": 3,
    "r": "According to ATS/IDSA guidelines, in healthy outpatient adults with community-acquired pneumonia without comorbidities (e.g., chronic heart, lung, renal disease, diabetes, or immunosuppression) or risk factors for antibiotic resistance, oral amoxicillin (1 g three times daily) is the first-line empirical drug of choice. It provides bactericidal coverage against Streptococcus pneumoniae (the most common cause of typical CAP). Alternative options include doxycycline or a macrolide (if local pneumococcal macrolide resistance is <25%).\n\nHigh-Yield Pearl: High-dose oral amoxicillin is the first-line empirical outpatient regimen for CAP in healthy adults without comorbidities."
  },
  {
    "cat": 3,
    "q": "A 64-year-old mechanically ventilated trauma patient in the surgical intensive care unit develops new-onset purulent endotracheal secretions, high fever, and a new progressive infiltrate on portable chest radiograph on day 6 of mechanical ventilation. Gram stain of endotracheal aspirate demonstrates abundant gram-negative bacilli. Which of the following antimicrobial agents provides reliable empirical coverage against Pseudomonas aeruginosa in hospital-acquired and ventilator-associated pneumonia (HAP/VAP)?",
    "a": [
      "Erythromycin",
      "Trimethoprim-sulfamethoxazole alone",
      "Ciprofloxacin (or levofloxacin)",
      "Ceftriaxone (third-generation cephalosporin)",
      "Amoxicillin-clavulanate"
    ],
    "c": 2,
    "r": "Hospital-acquired pneumonia (HAP) and ventilator-associated pneumonia (VAP) occurring ≥5 days after admission carry high risk for multidrug-resistant pathogens, particularly Pseudomonas aeruginosa and MRSA. Antipseudomonal fluoroquinolones (ciprofloxacin or high-dose levofloxacin) possess potent bactericidal activity against Pseudomonas by inhibiting bacterial DNA gyrase (topoisomerase II) and topoisomerase IV. Other antipseudomonal agents include cefepime, piperacillin-tazobactam, and meropenem.\n\nHigh-Yield Pearl: Ciprofloxacin and levofloxacin are antipseudomonal fluoroquinolones with bactericidal activity against Pseudomonas aeruginosa in HAP/VAP."
  },
  {
    "cat": 3,
    "q": "A 19-year-old college student with known moderate persistent asthma experiences sudden acute chest tightness and expiratory wheezing during cold-weather endurance training. Which of the following pharmacological agents is the preferred, fastest-acting bronchodilator for immediate symptomatic relief of acute bronchospasm?",
    "a": [
      "Oral theophylline extended-release",
      "Inhaled fluticasone propionate monotherapy",
      "Subcutaneous omalizumab (anti-IgE)",
      "Daily oral montelukast",
      "Inhaled or nebulized salbutamol (albuterol)"
    ],
    "c": 4,
    "r": "Salbutamol (albuterol) is a short-acting beta-2 adrenergic agonist (SABA). Binding to beta-2 receptors on bronchial smooth muscle couples to Gs protein, activating adenylyl cyclase to increase intracellular cyclic AMP (cAMP). This activates protein kinase A (PKA), which phosphorylates and inactivates myosin light-chain kinase (MLCK) and reduces intracellular calcium, resulting in prompt smooth muscle relaxation and bronchodilation within 5 minutes. It is the premier first-line 'rescue' therapy for acute bronchospasm.\n\nHigh-Yield Pearl: Inhaled salbutamol (albuterol) stimulates beta-2/Gs/cAMP to provide immediate bronchodilation in acute asthmatic attacks."
  },
  {
    "cat": 3,
    "q": "A 28-year-old asthmatic patient using high-dose inhaled beclomethasone dipropionate (beclomethazone) via a metered-dose inhaler (MDI) develops a sore mouth and hoarseness (dysphonia). Physical examination reveals curd-like white plaques on the buccal mucosa and posterior pharyngeal wall that scrape off easily with a tongue blade, exposing an erythematous, bleeding base.<span class='q-stem-bold'>Which of the following clinical measures could have prevented this complication associated with inhaled beclomethasone (beclomethazone)?</span>",
    "a": [
      "Switching from inhaled beclomethazone to daily oral prednisone therapy",
      "Using a spacer device with the inhaler and thoroughly rinsing the mouth with water and spitting after each beclomethazone administration",
      "Immediately escalating the daily dosage of inhaled beclomethazone dipropionate",
      "Co-administering inhaled salmeterol without subsequent mouth rinsing",
      "Administering prophylactic broad-spectrum oral ampicillin before each dose"
    ],
    "c": 1,
    "r": "Oropharyngeal candidiasis (thrush) and dysphonia (due to steroid-induced laryngeal myopathy) are the most frequent local adverse effects of inhaled corticosteroids (ICS) such as beclomethasone (beclomethazone), fluticasone, and budesonide. They result from local immunosuppression caused by drug deposition in the oropharyngeal cavity.\n\nPrevention & Management:\n1. Spacer Chamber: Greatly reduces oropharyngeal impaction of large aerosol droplets while facilitating pulmonary delivery.\n2. Mouth Rinsing: Instructing patients to rinse their mouth thoroughly with water and spit after each beclomethasone (beclomethazone) administration clears deposited steroid residue from the oral mucosa.\n3. Treatment: Topical antifungal therapy with nystatin oral suspension or oral fluconazole.\n\nHigh-Yield Pearl: Local adverse effects of inhaled corticosteroids like beclomethasone (beclomethazone), including oral candidiasis and dysphonia, are prevented by using a spacer and rinsing the mouth after each use."
  },
  {
    "cat": 3,
    "q": "A 46-year-old man suffering from a fractured rib experiences intractable, non-productive coughing that causes excruciating chest wall pain and prevents sleep. The physician prescribes codeine syrup. Codeine exerts its therapeutic antitussive effect primarily by which of the following mechanisms?",
    "a": [
      "Selective competitive antagonism of histamine H1 receptors in nasal mucosa",
      "Stimulation of pulmonary J-receptors and vagal C-fibers",
      "Direct pharmacological blockade of nicotinic acetylcholine receptors on the diaphragm",
      "Cleaving disulfide bridges within acidic mucopolysaccharide chains in bronchial mucus",
      "Centrally suppressing the cough reflex arc via agonist action at mu-opioid receptors within the medullary cough center"
    ],
    "c": 4,
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
      "A direct competitive antagonist of the NMDA receptor",
      "A centrally acting opioid-derivative antitussive that depresses the medullary cough center with minimal analgesic, constipating, or respiratory depressant effects",
      "A leukotriene receptor antagonist that blocks LTC4 binding",
      "A peripheral local anesthetic that directly blocks pulmonary stretch receptors in alveolar walls",
      "An inhaled muscarinic antagonist that produces bronchodilation and dries secretions"
    ],
    "c": 1,
    "r": "Pholcodine is an opioid-derivative (morpholinoethylmorphine) antitussive. It acts centrally in the medulla oblongata to suppress the cough center, exhibiting potent antitussive efficacy comparable to codeine. However, unlike morphine and codeine, it has minimal affinity for central mu-opioid receptors that mediate euphoria, physical dependence, respiratory depression, or gastrointestinal constipation.\n\nHigh-Yield Pearl: Pholcodine is a centrally acting opioid-derivative antitussive that suppresses the medullary cough reflex with minimal constipation or addictive liability."
  },
  {
    "cat": 3,
    "q": "A 41-year-old immigrant undergoing standard four-drug therapy for active pulmonary tuberculosis reports progressive difficulty reading and notes that green and red traffic lights appear identical and washed out. Visual acuity testing reveals a drop to 20/100 bilaterally, and fundoscopy confirms bilateral optic disc hyperemia. Which of the following antitubercular medications is responsible for this adverse drug reaction?",
    "a": [
      "Ethambutol",
      "Rifampicin",
      "Isoniazid",
      "Streptomycin",
      "Pyrazinamide"
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
      "To bypass the need for renal excretion of therapeutic antimicrobial agents",
      "To induce hepatic cytochrome P450 enzymes to clear toxic bacterial lipopolysaccharides"
    ],
    "c": 0,
    "r": "Active tuberculous cavities contain massive bacterial populations (~10^8 to 10^9 bacilli). Spontaneous chromosomal mutations conferring resistance to any single drug occur naturally at a frequency of 1 in 10^6 to 10^8 divisions (e.g., katG mutations for isoniazid, rpoB mutations for rifampin). Monotherapy eradicates sensitive bacilli but selectively allows pre-existing resistant mutants to proliferate unchecked, resulting in treatment failure and multidrug-resistant tuberculosis (MDR-TB). The mathematical probability of a single bacillus simultaneously possessing spontaneous mutations to two or three unlinked drug classes is vanishingly small (~1 in 10^14).\n\nHigh-Yield Pearl: Multi-drug combination therapy in tuberculosis prevents the selection and proliferation of drug-resistant mycobacterial mutants."
  },
  {
    "cat": 3,
    "q": "A 52-year-old woman with active tuberculosis begins treatment with isoniazid, rifampicin, pyrazinamide, and ethambutol. To prevent the development of isoniazid-induced symmetrical burning paresthesias, numbness, and sensory ataxia in her lower extremities, which of the following vitamins must be co-administered daily?",
    "a": [
      "Ascorbic acid (Vitamin C)",
      "Thiamine (Vitamin B1)",
      "Riboflavin (Vitamin B2)",
      "Pyridoxine (Vitamin B6)",
      "Cyanocobalamin (Vitamin B12)"
    ],
    "c": 3,
    "r": "Isoniazid (INH) is structurally similar to pyridoxine (vitamin B6). It inhibits the enzyme pyridoxine phosphokinase (which converts vitamin B6 to its active cofactor form, pyridoxal-5-phosphate) and directly forms inactive hydrazone complexes with pyridoxal phosphate, accelerating its urinary excretion. Pyridoxal phosphate is an essential cofactor for glutamic acid decarboxylase (producing GABA) and for myelin lipid synthesis. Deficiency results in peripheral neuropathy (burning paresthesias, glove-and-stocking sensory loss). Co-administration of 25–50 mg/day of pyridoxine (vitamin B6) completely prevents this neurotoxicity.\n\nHigh-Yield Pearl: Pyridoxine (Vitamin B6) supplementation is mandatory with isoniazid to prevent peripheral neuropathy caused by vitamin B6 depletion."
  },
  {
    "cat": 2,
    "q": "A 74-year-old man with severe ischemic cardiomyopathy is admitted in cardiogenic shock with a cardiac index of 1.2 L/min/m² (normal >2.5). Arterial blood gas demonstrates PaO2 95 mmHg, SaO2 98%, and normal hemoglobin of 14.5 g/dL. However, mixed venous oxygen saturation (SvO2) drawn from a pulmonary artery catheter is markedly reduced at 42% (normal >70%), and serum lactate is 5.8 mmol/L. This clinical scenario represents which classic category of hypoxia?",
    "a": [
      "Hyperbaric hypoxia",
      "Hypoxic hypoxia (hypoxemia)",
      "Histotoxic (cytotoxic) hypoxia",
      "Anemic hypoxia",
      "Stagnant (ischemic / circulatory) hypoxia"
    ],
    "c": 4,
    "r": "Hypoxia is classified into four physiological categories: 1) Hypoxic hypoxia: low arterial PaO2 and low SaO2 (e.g., altitude, V/Q mismatch); 2) Anemic hypoxia: normal PaO2 but decreased oxygen content due to low hemoglobin or CO poisoning; 3) Stagnant (ischemic) hypoxia: normal arterial PaO2, SaO2, and Hb, but tissue blood flow is severely reduced (e.g., cardiogenic shock, severe heart failure, localized arterial occlusion). Sluggish transit allows tissues to extract extra oxygen, drastically dropping mixed venous oxygen saturation (SvO2) and causing tissue ischemia and lactic acidosis; 4) Histotoxic hypoxia: normal oxygen delivery, but cellular utilization is blocked (e.g., cyanide poisoning).\n\nHigh-Yield Pearl: Stagnant (circulatory) hypoxia is caused by poor cardiac output or low perfusion, characterized by normal arterial PaO2 but markedly decreased SvO2."
  },
  {
    "cat": 1,
    "q": "At the end of a quiet, unforced tidal expiration (the resting equilibrium point of the respiratory system), the outward elastic springing force of the thoracic wall is exactly equal and opposite to the inward elastic recoil force of the lungs. The volume of air contained within the lungs at this resting mechanical equilibrium is designated as:",
    "a": [
      "Vital Capacity (VC)",
      "Residual Volume (RV)",
      "Functional Residual Capacity (FRC)",
      "Inspiratory Capacity (IC)",
      "Total Lung Capacity (TLC)"
    ],
    "c": 2,
    "r": "Functional Residual Capacity (FRC) is the volume of gas in the lungs at the end of a normal, quiet expiration (composed of ERV + RV, ~2.2–2.4 L in a healthy adult). Mechanically, FRC represents the resting equilibrium volume of the respiratory system: the inward elastic recoil of the lungs (which want to collapse inward) precisely balances the outward springing recoil of the chest wall (which wants to expand outward). Because forces balance, alveolar pressure equals atmospheric pressure (0 cmH2O) and no airflow occurs.\n\nHigh-Yield Pearl: Functional Residual Capacity (FRC) is the resting volume where inward lung elastic recoil exactly balances outward chest wall recoil."
  },
  {
    "cat": 1,
    "q": "In a healthy adult sitting at rest at sea level, what are the normal physiological values for intrapleural pressure (P_ip) and alveolar pressure (P_alv) at the resting end-expiratory equilibrium position (at Functional Residual Capacity) before the next breath begins?",
    "a": [
      "Intrapleural pressure: -15 cmH2O; Alveolar pressure: -5 cmH2O",
      "Intrapleural pressure: 0 cmH2O; Alveolar pressure: +5 cmH2O",
      "Intrapleural pressure: +5 cmH2O; Alveolar pressure: 0 cmH2O",
      "Intrapleural pressure: -5 cmH2O; Alveolar pressure: -5 cmH2O",
      "Intrapleural pressure: -5 to -6 cmH2O; Alveolar pressure: 0 cmH2O"
    ],
    "c": 4,
    "r": "At Functional Residual Capacity (resting end-expiration), respiratory muscles are completely relaxed. The outward elastic recoil of the chest wall pulls against the inward elastic recoil of the lung parenchyma, generating a subatmospheric (negative) pressure in the pleural space of approximately -5 to -6 cmH2O (relative to atmospheric pressure). Because the glottis is open and no airflow occurs, alveolar pressure is identical to atmospheric pressure (0 cmH2O). The transmural pressure gradient (P_alv - P_ip = 0 - [-5] = +5 cmH2O) keeps the lungs distended.\n\nHigh-Yield Pearl: At resting end-expiratory FRC, intrapleural pressure is subatmospheric (-5 to -6 cmH2O) and alveolar pressure is 0 cmH2O."
  },
  {
    "cat": 1,
    "q": "A 66-year-old retired industrial worker with progressive exertional dyspnea is diagnosed with idiopathic pulmonary fibrosis (IPF). A pressure-volume curve of the lungs is constructed. Which of the following alterations in pulmonary mechanics and compliance is characteristically observed in this patient?",
    "a": [
      "Markedly increased pulmonary compliance with effortless lung distension at low pressures",
      "Total loss of inward elastic recoil resulting in dynamic expiratory airway collapse",
      "Decreased work of breathing with expansion of total lung capacity",
      "Selective destruction of type II pneumocytes with hypersecretion of surfactant",
      "Decreased pulmonary compliance, requiring significantly greater negative intrapleural pressure changes to achieve a given tidal volume"
    ],
    "c": 4,
    "r": "Idiopathic pulmonary fibrosis is a restrictive lung disease characterized by progressive collagen and extracellular matrix deposition in the alveolar interstitium. The fibrotic lung tissue is stiff and resistant to stretch, manifesting as decreased pulmonary compliance (C = ΔV / ΔP). The pressure-volume curve shifts downward and to the right. Consequently, the patient must generate much greater negative intrapleural pressures via inspiratory muscles to expand the stiff lungs, dramatically increasing elastic work of breathing and causing rapid, shallow tachypnea.\n\nHigh-Yield Pearl: Pulmonary fibrosis causes stiff lungs with decreased compliance (downward-right shift of P-V curve), increasing elastic work of breathing."
  },
  {
    "cat": 1,
    "q": "A premature infant delivered at 28 weeks of gestation develops severe respiratory distress syndrome (neonatal RDS). Administration of exogenous pulmonary surfactant rapidly improves oxygenation and stabilizes the alveoli. The primary biophysical mechanism by which surfactant stabilizes small alveoli is described by the law of Laplace (P = 2T / r). Surfactant achieves this primarily by:",
    "a": [
      "Markedly lowering alveolar surface tension (T), thereby preventing alveolar collapse (atelectasis) and increasing pulmonary compliance",
      "Directly reducing the alveolar radius (r) to zero during end-expiration",
      "Increasing pulmonary capillary hydrostatic pressure to promote perfusion",
      "Increasing alveolar surface tension (T) to generate hydrostatic transudate clearing",
      "Inducing rapid pulmonary vasoconstriction to eliminate dead space"
    ],
    "c": 0,
    "r": "Pulmonary surfactant (secreted by Type II pneumocytes) is primarily dipalmitoylphosphatidylcholine (DPPC). According to Laplace's Law (P = 2T / r), the collapsing pressure (P) of an alveolus is directly proportional to surface tension (T) and inversely proportional to radius (r). Without surfactant, small alveoli would generate higher collapsing pressures and empty into larger alveoli, causing widespread atelectasis. Surfactant molecules compress tightly in smaller alveoli, drastically lowering surface tension (T), eliminating collapsing pressure differentials, preventing end-expiratory atelectasis, and increasing lung compliance.\n\nHigh-Yield Pearl: Surfactant reduces surface tension (T) in alveoli (P = 2T/r), preventing end-expiratory collapse and markedly increasing lung compliance."
  },
  {
    "cat": 1,
    "q": "In human bronchial airways, autonomic regulation of smooth muscle tone involves sympathetic adrenergic fibers, parasympathetic cholinergic fibers, and the non-adrenergic non-cholinergic (NANC) neural system. Which of the following neuropeptides serves as the primary neurotransmitter of the inhibitory NANC system, promoting potent bronchodilation and reducing airway resistance?",
    "a": [
      "Acetylcholine acting on muscarinic M3 receptors",
      "Vasoactive intestinal peptide (VIP) and Nitric oxide (NO)",
      "Substance P and Neurokinin A",
      "Neuropeptide Y causing profound bronchospasm",
      "Endothelin-1 acting on ETA receptors"
    ],
    "c": 1,
    "r": "The inhibitory non-adrenergic non-cholinergic (iNANC) system is the primary neural bronchodilator mechanism in human airways (since direct sympathetic adrenergic innervation of human bronchial smooth muscle is sparse). The major transmitters of the iNANC pathway are Vasoactive Intestinal Peptide (VIP) and Nitric Oxide (NO). VIP binds to VPAC2 receptors, stimulating adenylyl cyclase/cAMP, while NO activates soluble guanylyl cyclase/cGMP. Together, they induce smooth muscle relaxation, bronchodilation, and reduction in total airway resistance.\n\nHigh-Yield Pearl: The inhibitory NANC system mediates bronchodilation primarily through Vasoactive Intestinal Peptide (VIP) and Nitric Oxide (NO)."
  },
  {
    "cat": 2,
    "q": "A 63-year-old chronic smoker with severe emphysema undergoes diffusing capacity of the lungs for carbon monoxide (DLCO) testing. The measured DLCO is 38% of predicted (markedly decreased). In pure emphysema, this profound reduction in DLCO is directly caused by which of the following pathophysiological mechanisms?",
    "a": [
      "Extensive destruction of inter-alveolar septa and permanent loss of the functional alveolar capillary vascular bed",
      "Intra-alveolar accumulation of proteinaceous surfactant-rich fluid",
      "Dynamic narrowing of large extrathoracic conducting cartilaginous bronchi",
      "Isolated severe reduction in red blood cell 2,3-bisphosphoglycerate concentration",
      "Severe fibrotic thickening of the alveolar-capillary basement membrane"
    ],
    "c": 0,
    "r": "Diffusing capacity of the lung for carbon monoxide (DLCO) evaluates the integrity of the alveolar-capillary membrane. In emphysema, cigarette smoke-induced elastases and proteases cause widespread destruction of alveolar walls and inter-alveolar septa. This permanently reduces the total gas-exchange surface area and destroys vast networks of pulmonary capillaries. Consequently, DLCO is characteristically reduced (<80%), which crucially differentiates emphysema from chronic bronchitis and asthma (where DLCO is typically normal or elevated).\n\nHigh-Yield Pearl: DLCO is markedly decreased in emphysema due to the destruction of alveolar walls and the associated pulmonary capillary bed."
  },
  {
    "cat": 1,
    "q": "A 55-year-old woman with systemic sclerosis develops progressive exertional dyspnea. Pulmonary function testing demonstrates a restrictive ventilatory impairment. Which of the following combinations of spirometric parameters and flow-volume loop configurations is characteristic of pure restrictive lung disease?",
    "a": [
      "Disproportionately reduced FEV1 with a markedly reduced FEV1/FVC ratio (<0.70) and expiratory scooping",
      "Variable extrathoracic flattening on flow-volume loop with normal lung volumes",
      "Proportionally reduced FEV1 and FVC with a preserved or increased FEV1/FVC ratio (>0.80), and a tall, narrow 'witch's hat' flow-volume loop",
      "Severely elevated Total Lung Capacity (TLC > 120%) with normal FEV1",
      "Fixed horizontal cutoff of both inspiratory and expiratory limbs of the loop"
    ],
    "c": 2,
    "r": "Restrictive pulmonary disease is defined by a reduction in Total Lung Capacity (TLC < 80% predicted). Because the lungs are stiff (increased inward recoil), both FEV1 and FVC are reduced proportionally, maintaining a normal or increased FEV1/FVC ratio (typically 0.80 to 0.90 or >80%). On a flow-volume loop, high radial elastic traction keeps small airways wide open during forced exhalation; thus, expiratory flow rates are supranormal for lung volume, producing a miniature, narrow, tall flow-volume loop often likened to a 'witch's hat'.\n\nHigh-Yield Pearl: Restrictive lung disease features reduced FVC and TLC, a preserved/increased FEV1/FVC ratio (>0.80), and a narrow 'witch's hat' flow-volume loop."
  },
  {
    "cat": 1,
    "q": "A 50-year-old woman with sarcoidosis undergoes pulmonary function testing. Spirometry records an FEV1 of 1.8 L (60% of predicted), an FVC of 2.0 L (58% of predicted), and a calculated FEV1/FVC ratio of 90% (0.90). Total Lung Capacity (TLC) is 65% of predicted. These findings definitively indicate which of the following physiological conditions?",
    "a": [
      "Normal pulmonary mechanics with high athletic performance",
      "Primary tracheobronchial malacia with intrathoracic collapse",
      "Mixed obstructive-restrictive defect with predominant emphysema",
      "Restrictive pulmonary impairment with preserved or increased FEV1/FVC ratio and proportionally reduced lung volumes",
      "Obstructive airway disease with severe dynamic hyperinflation"
    ],
    "c": 3,
    "r": "The diagnosis of restrictive pulmonary impairment requires a reduced Total Lung Capacity (TLC < 80% predicted; here 65%). In pure restriction, lung parenchymal stiffening causes equal reductions in FEV1 and FVC. Consequently, the FEV1/FVC ratio is preserved or supranormal (>80–85%; here 90%). High radial tethering from fibrotic interstitium keeps conducting airways patent, allowing rapid initial exhalation despite low total volume.\n\nHigh-Yield Pearl: Restrictive ventilatory impairment is characterized by TLC <80% and a preserved/increased FEV1/FVC ratio (>85–90%)."
  },
  {
    "cat": 1,
    "q": "In an upright subject, gravity creates hydrostatic pressure gradients that divide the pulmonary circulation into West zones (Zones 1, 2, and 3). Which of the following statements correctly compares regional pulmonary blood flow and vascular pressures between Zone 1 (apex) and Zone 3 (base)?",
    "a": [
      "Zone 1 has the highest continuous blood flow due to low gravitational resistance",
      "Zone 1 features minimal or intermittent blood flow where alveolar pressure may exceed arterial pressure (Palv > Pa > Pv), whereas Zone 3 exhibits continuous high blood flow driven by high hydrostatic arterial and venous pressures (Pa > Pv > Palv)",
      "Capillary recruitment occurs exclusively in Zone 1 during severe hemorrhagic shock",
      "Ventilation and perfusion are both higher at the apex than at the base",
      "Zone 3 experiences zero blood flow because venous pressure compresses capillaries"
    ],
    "c": 1,
    "r": "According to West's physiological zones of the upright lung: 1) Zone 1 (Apex): Hydrostatic pressure is lowest. If alveolar pressure exceeds arterial pressure (Palv > Pa > Pv), capillaries are compressed, producing minimal or intermittent perfusion (creating alveolar dead space). 2) Zone 2 (Mid-lung): Pa > Palv > Pv; flow is determined by the arterial-alveolar pressure gradient (waterfall effect). 3) Zone 3 (Base): Gravity increases hydrostatic columns, so arterial and venous pressures both exceed alveolar pressure (Pa > Pv > Palv). Capillaries are continuously distended, yielding maximum continuous blood flow.\n\nHigh-Yield Pearl: In Zone 1 (apex), Palv > Pa > Pv (intermittent/minimal flow); in Zone 3 (base), Pa > Pv > Palv (continuous maximal perfusion)."
  },
  {
    "cat": 2,
    "q": "A 58-year-old man with advanced asbestosis presents with exertional hypoxemia. Room air arterial blood gas shows: PaO2 55 mmHg, PaCO2 36 mmHg, and calculated alveolar PO2 (PAO2) 105 mmHg. His alveolar-arterial (A-a) oxygen gradient is calculated as 50 mmHg (normal <15 mmHg). Which of the following pathophysiological mechanisms accounts for the widened A-a gradient and exercise-induced hypoxemia in this patient?",
    "a": [
      "Alveolar-capillary diffusion impairment and V/Q mismatch",
      "Severe respiratory alkalosis without parenchymal disease",
      "Pure hypoventilation secondary to central narcotic overdose",
      "Ascent to extreme high altitude with low ambient FiO2",
      "Severe carbon monoxide poisoning without structural lung damage"
    ],
    "c": 0,
    "r": "The alveolar-arterial (A-a) gradient is calculated as PAO2 - PaO2. Normal is <10–15 mmHg in young adults (<20 mmHg in elderly). Causes of hypoxemia with an INCREASED (widened) A-a gradient include: 1) V/Q mismatch, 2) Right-to-left shunt, and 3) Diffusion impairment (such as pulmonary fibrosis and asbestosis). In asbestosis, thickened alveolar-capillary membranes and capillary destruction impair oxygen diffusion. During exercise, shortened erythrocyte transit time through pulmonary capillaries (<0.25 s) prevents complete equilibration, dramatically worsening hypoxemia and widening the A-a gradient.\n\nHigh-Yield Pearl: Diffusion impairment, V/Q mismatch, and shunts cause hypoxemia with an INCREASED (widened) A-a gradient; hypoventilation and high altitude have a NORMAL gradient."
  },
  {
    "cat": 2,
    "q": "During heavy anaerobic exertion, skeletal muscle tissue exhibits intense metabolic activity. Local physiological changes include a drop in pH (acidosis), elevated PCO2, increased temperature, and high 2,3-bisphosphoglycerate (2,3-BPG). What effect do these local biochemical alterations exert on the oxygen-hemoglobin dissociation curve (the Bohr effect)?",
    "a": [
      "Immediate conversion of adult hemoglobin A into methemoglobin",
      "Leftward shift of the curve, reflecting decreased P50 and increased hemoglobin-oxygen affinity that locks oxygen onto hemoglobin",
      "Complete prevention of oxygen unloading in peripheral capillaries",
      "Downward shift of total hemoglobin carrying capacity without changing P50",
      "Rightward shift of the curve, reflecting increased P50 and decreased hemoglobin-oxygen affinity that facilitates oxygen unloading to exercising tissues"
    ],
    "c": 4,
    "r": "The oxygen-hemoglobin dissociation curve shifts to the RIGHT (the Bohr effect) in response to: 1) Decreased pH (acidosis / increased H+), 2) Increased PCO2, 3) Increased temperature, and 4) Increased 2,3-BPG (DPG) (mnemonic: 'CADET, face Right!' - CO2, Acid, 2,3-DPG, Exercise, Temperature). A rightward shift increases the P50 (the PO2 required to achieve 50% hemoglobin saturation), meaning hemoglobin has lower affinity for oxygen and unloads oxygen more easily and efficiently to metabolically active, exercising tissues.\n\nHigh-Yield Pearl: Elevated H+ (low pH), high PCO2, high temperature, and high 2,3-BPG shift the Hb-O2 curve RIGHTWARD, increasing P50 and promoting O2 unloading."
  },
  {
    "cat": 1,
    "q": "A banked unit of packed red blood cells stored for 4 weeks in citrate-phosphate-dextrose preservative experiences progressive metabolic depletion of intracellular 2,3-bisphosphoglycerate (2,3-BPG). When this blood is rapidly transfused into a hypothermic, alkalemic trauma patient, which of the following alterations in oxygen delivery kinetics occurs?",
    "a": [
      "Leftward shift of the oxygen-hemoglobin dissociation curve, resulting in decreased P50 and excessively tight binding of oxygen to hemoglobin that impedes tissue oxygen unloading",
      "Immediate irreversible oxidation of heme iron to ferric Fe3+ methemoglobin",
      "Rightward shift of the curve, accelerating immediate oxygen release into peripheral microcirculation",
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
      "Binding of H+ ions to circulating plasma albumin with immediate albumin denaturation",
      "Immediate sequestration of H+ ions inside erythrocyte lysosomes",
      "Renal tubular precipitation of insoluble uric acid crystals",
      "Intracellular buffering exclusively by bone hydroxyapatite crystals",
      "Dynamic buffering by extracellular serum bicarbonate (HCO3⁻ + H+ ⇌ H2CO3 ⇌ H2O + CO2), followed by rapid exhalation of volatile CO2 by hyperventilating lungs"
    ],
    "c": 4,
    "r": "The bicarbonate-carbonic acid system is the primary extracellular buffer in the human body. When lactic acid floods the circulation during strenuous anaerobic exercise, H+ ions are immediately buffered by plasma bicarbonate: H+ + HCO3⁻ ⇌ H2CO3. Carbonic anhydrase rapidly dehydrates carbonic acid to water and CO2 (H2CO3 ⇌ H2O + CO2). The generated CO2 stimulates peripheral and central chemoreceptors, producing vigorous hyperventilation that blows off CO2, preventing catastrophic arterial acidemia.\n\nHigh-Yield Pearl: Lactic acid generated during strenuous anaerobic exercise is immediately buffered by serum bicarbonate (H+ + HCO3⁻ → H2O + CO2), and CO2 is expired."
  },
  {
    "cat": 2,
    "q": "An experimental neurophysiology protocol selectively exposes central chemoreceptors on the ventral medullary surface to isolated hypoxemia (low PO2) while holding local CSF PCO2 and pH strictly constant. What will be the observed response of the central chemoreceptors to this isolated arterial hypoxemia?",
    "a": [
      "Release of substance P into the fourth ventricle",
      "Completely zero stimulation; central chemoreceptors are completely insensitive to direct hypoxemia and respond exclusively to changes in local CSF [H+] / PCO2",
      "Direct inhibition of all medullary pacemaker neurons causing immediate apnea",
      "Selective recruitment of abdominal expiratory motor units",
      "Explosive ten-fold increase in firing rate within 50 milliseconds"
    ],
    "c": 1,
    "r": "A crucial USMLE physiological principle is that central chemoreceptors are COMPLETELY INSENSITIVE to direct hypoxemia (low PO2). In fact, severe brain tissue hypoxia directly depresses central neuronal activity. The sole sensory organs in the human body capable of detecting arterial hypoxemia (PaO2 < 60 mmHg) are the peripheral chemoreceptors (primarily the carotid bodies, and to a lesser extent the aortic bodies). Central chemoreceptors respond exclusively to hydrogen ion concentration ([H+]) in the brain extracellular fluid and CSF, derived from diffusing CO2.\n\nHigh-Yield Pearl: Central chemoreceptors are completely insensitive to hypoxemia; arterial PO2 is sensed exclusively by peripheral chemoreceptors (carotid bodies)."
  },
  {
    "cat": 1,
    "q": "A 48-year-old trauma patient suffers severe herniation of the cerebellar tonsils through the foramen magnum, resulting in bilateral ischemic destruction of the dorsal and ventral respiratory groups within the medulla oblongata. Which of the following respiratory consequences occurs immediately?",
    "a": [
      "Normal breathing maintained by intact spinal cord anterior horn cells",
      "Sustained central neurogenic hyperventilation with high tidal volumes",
      "Immediate cessation of autonomous rhythmic breathing (complete apnea) requiring immediate mechanical ventilatory life support",
      "Rapid development of continuous apneustic breathing with prolonged inspiratory gasps",
      "Transition to ataxic Cheyne-Stokes periodic waxing and waning respiration"
    ],
    "c": 2,
    "r": "The intrinsic neural pacemaker and rhythm-generating networks responsible for autonomous respiration reside in the medulla oblongata (specifically the pre-Bötzinger complex within the ventral respiratory group and dorsal respiratory group). Bilateral medullary destruction or transection below the medulla (at the spinomedullary junction) immediately obliterates all autonomous rhythmic respiratory drive, producing catastrophic, fatal apnea. Such patients cannot breathe independently and require immediate mechanical ventilation.\n\nHigh-Yield Pearl: Bilateral destruction of the medullary respiratory center immediately abolishes all autonomous rhythmic breathing, causing fatal apnea."
  },
  {
    "cat": 1,
    "q": "In an experimental animal model, bilateral cervical vagotomy is performed, surgically severing both vagus nerves (CN X). When the animal breathes, each inspiration becomes markedly deeper and prolonged. This demonstrates that pulmonary stretch receptors in bronchial smooth muscle normally limit inspiration via the Hering-Breuer reflex by sending vagal inhibitory afferents to which of the following brainstem structures?",
    "a": [
      "The substantia nigra pars compacta",
      "The cerebellar Purkinje cell layer",
      "The pontine apneustic center and medullary inspiratory neurons",
      "The hypothalamic supraoptic nucleus",
      "The Edinger-Westphal parasympathetic nucleus"
    ],
    "c": 2,
    "r": "The Hering-Breuer inflation reflex is a protective negative feedback reflex. When tidal volume exceeds ~1.0 L (during vigorous exertion or mechanical ventilation), slowly adapting stretch receptors in the smooth muscle of large and small conducting airways fire. Afferent signals travel via the vagus nerve (CN X) to the solitary tract nucleus (NTS) in the medulla, which sends inhibitory projections to the pontine apneustic center and medullary inspiratory neurons, terminating inspiration and preventing pulmonary over-distension.\n\nHigh-Yield Pearl: The Hering-Breuer reflex transmits vagal stretch receptor afferents to inhibit pontine apneustic and medullary inspiratory centers, terminating inspiration."
  },
  {
    "cat": 2,
    "q": "A 71-year-old man with severe congestive heart failure (ejection fraction 22%) is monitored during sleep. Polysomnography records a recurring pattern of breathing characterized by a gradual waxing and waning of tidal volume (crescendo-decrescendo breathing) followed by a brief period of central apnea before the cycle repeats every 60 to 90 seconds. Arterial blood gas reveals underlying daytime hypocapnia. This classic respiratory pattern is known as:",
    "a": [
      "Kussmaul breathing",
      "Agonal gasping",
      "Apneustic breathing",
      "Cheyne-Stokes periodic breathing",
      "Biot's ataxic breathing"
    ],
    "c": 3,
    "r": "Cheyne-Stokes respiration is a periodic breathing pattern characterized by alternating cycles of crescendo-decrescendo tidal volumes followed by central apnea. It is classically associated with severe congestive heart failure (due to prolonged circulatory transit time from the lungs to the brainstem chemoreceptors, causing a delayed ventilatory response and feedback overshoot) and bilateral cortical/diencephalic neurological disease. Increased chemosensitivity leads to hyperventilation and hypocapnia; when PaCO2 falls below the apneic threshold, central apnea ensues.\n\nHigh-Yield Pearl: Cheyne-Stokes breathing features cyclical crescendo-decrescendo hyperpnea followed by central apnea, seen in severe heart failure and bilateral stroke."
  },
  {
    "cat": 2,
    "q": "A commercial deep-sea saturation diver breathing a heliox (helium-oxygen) gas mixture descends rapidly to an offshore oil drilling depth of 220 meters (>22 atmospheres absolute). Shortly after arriving at depth, he develops coarse resting tremors of both hands, dizziness, jerky muscle fasciculations, nausea, and marked cognitive slowing. This reversible neurological syndrome, occurring at depths greater than 150 meters, is known as:",
    "a": [
      "Arterial gas embolism from pulmonary barotrauma",
      "Decompression sickness Type I ('bends')",
      "Carbon dioxide intoxication",
      "High-pressure nervous syndrome (HPNS)",
      "Nitrogen narcosis ('rapture of the deep')"
    ],
    "c": 3,
    "r": "High-Pressure Nervous Syndrome (HPNS) is a neurological disorder that occurs in deep saturation divers descending to depths greater than 150 meters (>15–20 ATA) while breathing helium-oxygen (heliox) mixtures. Extreme hydrostatic pressure exerts direct physical compression on neuronal cell membrane lipid bilayers, altering the function of ion channels and synaptic receptors (specifically antagonizing GABA-A receptors and enhancing NMDA receptors, causing hyperexcitability). Manifestations include coarse tremors, myoclonus, ataxia, nausea, and EEG changes. It is prevented by slow descent rates and adding small amounts of narcotic gas (trimix: adding nitrogen).\n\nHigh-Yield Pearl: High-pressure nervous syndrome (HPNS) occurs at deep saturation dives (>150 m) due to hydrostatic pressure effects on neuronal membranes, causing tremors and ataxia."
  },
  {
    "cat": 3,
    "q": "A sputum specimen from a patient with fever, night sweats, and cavitary apical lung disease is subjected to Ziehl-Neelsen acid-fast staining. Slender, bright red bacilli are visualized against a blue methylene blue counterstain. The unique resistance of Mycobacterium tuberculosis to decolorization by acid-alcohol solutions is directly imparted by which of the following biochemical components of its cell envelope?",
    "a": [
      "High concentrations of teichoic and lipoteichoic acids",
      "Long-chain branched-chain beta-hydroxy fatty acids known as mycolic acids",
      "An outer coat composed entirely of chitin and beta-glucan",
      "Endotoxin consisting of lipopolysaccharide with Lipid A",
      "Thick outer capsule composed of poly-D-glutamic acid"
    ],
    "c": 1,
    "r": "Mycobacterium tuberculosis possesses an exceptionally complex, lipid-rich cell envelope that comprises up to 60% of its dry weight. The primary structural determinants of its 'acid-fastness' are mycolic acids—long-chain (C60–C90), branched-chain beta-hydroxy fatty acids linked to arabinogalactan-peptidoglycan complexes. This dense, waxy lipid barrier prevents penetration of water-soluble stains. Once carbolfuchsin dye is driven into the bacilli with heat, it complexes tightly with mycolic acids and resists decolorization by 3% hydrochloric acid in ethanol (acid-alcohol).\n\nHigh-Yield Pearl: Acid-fastness of Mycobacterium tuberculosis is due to long-chain mycolic acids in its waxy, lipid-rich cell wall."
  },
  {
    "cat": 3,
    "q": "A 58-year-old intubated ICU patient with acute respiratory distress syndrome develops a high fever and copious green, sweet-grape-smelling endotracheal secretions on day 8 of mechanical ventilation. Sputum culture on MacConkey agar grows non-lactose fermenting, oxidase-positive, gram-negative bacilli that produce pyocyanin and pyoverdine pigments. Which of the following bacterial pathogens is the most common cause of multidrug-resistant ventilator-associated pneumonia (VAP)?",
    "a": [
      "Mycoplasma pneumoniae",
      "Moraxella catarrhalis",
      "Haemophilus influenzae",
      "Pseudomonas aeruginosa",
      "Streptococcus pneumoniae"
    ],
    "c": 3,
    "r": "Pseudomonas aeruginosa is an aerobic, non-lactose fermenting, oxidase-positive gram-negative bacillus. It is the leading cause of nosocomial and ventilator-associated pneumonia (VAP) in hospitalized ICU patients. It characteristically produces blue-green pigments (pyocyanin and pyoverdine) with a sweet, grape-like or fruity odor. P. aeruginosa forms robust biofilms on endotracheal tubes and produces potent toxins, notably Exotoxin A (which inactivates elongation factor-2 [EF-2] via ADP-ribosylation, halting host protein synthesis, identical to diphtheria toxin).\n\nHigh-Yield Pearl: Pseudomonas aeruginosa is the premier pathogen in ventilator-associated pneumonia (VAP); oxidase-positive, produces pyocyanin and Exotoxin A (EF-2 inhibitor)."
  },
  {
    "cat": 3,
    "q": "A 68-year-old man presents with shaking rigors, high fever, and right-sided pleuritic chest pain. Sputum Gram stain reveals lancet-shaped gram-positive diplococci. He is diagnosed with lobar pneumonia caused by Streptococcus pneumoniae. Which of the following virulence factors is the single most critical determinant of this organism's virulence, enabling it to evade opsonization and phagocytosis by alveolar macrophages?",
    "a": [
      "Pneumolysin pore-forming toxin",
      "Extracellular polysaccharide capsule",
      "Filamentous hemagglutinin",
      "Surface M-protein filaments",
      "IgA protease alone"
    ],
    "c": 1,
    "r": "The polysaccharide capsule is the primary, indispensable virulence factor of Streptococcus pneumoniae. Over 100 distinct capsular serotypes exist. The thick capsule physically shields bacterial surface antigens from complement factor C3b deposition and prevents recognition by Fc and complement receptors on host alveolar macrophages and neutrophils. Non-encapsulated strains are completely avirulent and rapidly cleared by phagocytes. The capsule forms the basis of both the 20-valent pneumococcal conjugate vaccine (PCV20) and the 23-valent polysaccharide vaccine (PPSV23).\n\nHigh-Yield Pearl: The antiphagocytic polysaccharide capsule is the major virulence factor of Streptococcus pneumoniae; non-capsulated strains are avirulent."
  },
  {
    "cat": 3,
    "q": "A clinical microbiology laboratory inoculates an expectorated sputum sample from a patient suspected of having cavitary tuberculosis onto an egg-based, malachite green-containing solid selective medium. Colonies of Mycobacterium tuberculosis appear after 4 weeks of incubation as rough, buff-colored, crumbly 'breadcrumb-like' colonies. What is the specific name of this classic diagnostic solid culture medium?",
    "a": [
      "Bordet-Gengou potato-glycerol agar",
      "Thayer-Martin chocolate agar",
      "MacConkey bile-salt agar",
      "Buffered Charcoal Yeast Extract (BCYE) agar",
      "Lowenstein-Jensen (LJ) medium"
    ],
    "c": 4,
    "r": "Lowenstein-Jensen (LJ) medium is the classic egg-based solid selective medium used for culturing Mycobacterium tuberculosis and other mycobacteria. It contains whole eggs, glycerol, potato flour, and malachite green. Malachite green acts as a selective inhibitor that suppresses the rapid overgrowth of contaminating gram-positive and gram-negative oral bacterial flora during the prolonged 3-to-6-week incubation required for slow-growing mycobacteria. M. tuberculosis characteristically forms dry, rough, crumbly, buff/cream-colored colonies.\n\nHigh-Yield Pearl: Lowenstein-Jensen (LJ) egg-based medium containing malachite green is the classic solid culture medium for Mycobacterium tuberculosis."
  },
  {
    "cat": 3,
    "q": "A 45-year-old immigrant from a high-incidence country presents with chronic productive cough, hemoptysis, night sweats, and progressive weight loss. According to standard international infectious disease protocols, what is the verified, universally recommended diagnostic sequence to establish the definitive diagnosis of active pulmonary tuberculosis?",
    "a": [
      "Serum antibody ELISA test followed by broad-spectrum ampicillin monotherapy",
      "Chest radiography (CXR) followed immediately by three consecutive morning sputum AFB smears (Ziehl-Neelsen) and mycobacterial culture on LJ / liquid media",
      "Routine 24-hour urine collection for calcium",
      "Immediate blind surgical open lung biopsy without sputum collection",
      "Single Mantoux tuberculin skin test (TST) followed by discharge if negative"
    ],
    "c": 1,
    "r": "The standard diagnostic algorithm for suspected pulmonary tuberculosis begins with a posterior-anterior chest radiograph (CXR), which typically demonstrates apical/upper lobe cavitary infiltrates or consolidations. This must be immediately followed by the collection of three consecutive early-morning expectorated sputum specimens for: 1) Acid-Fast Bacilli (AFB) microscopy (Ziehl-Neelsen or auramine-rhodamine fluorochrome staining); 2) Nucleic acid amplification testing (NAAT / GeneXpert MTB/RIF) for rapid confirmation and rifampin resistance detection; and 3) Mycobacterial culture on solid (Lowenstein-Jensen) and automated liquid broth media (the gold standard for definitive diagnosis and drug susceptibility testing).\n\nHigh-Yield Pearl: Standard TB diagnostic sequence: Chest X-ray, followed by 3 consecutive morning sputum AFB smears, NAAT, and mycobacterial culture (LJ medium)."
  },
  {
    "cat": 3,
    "q": "A 36-year-old HIV-infected patient with a CD4+ T-cell count of 45/µL develops subacute headache, low-grade fever, and mild non-productive cough. Lumbar puncture confirms cryptococcal meningoencephalitis with round yeast cells showing wide halos on India ink preparation. Which of the following environmental reservoirs represents the classic, primary ecological source of human infection with Cryptococcus neoformans?",
    "a": [
      "Soil enriched with pigeon droppings (avian guano)",
      "Decaying hollows of Eucalyptus trees in tropical zones exclusively",
      "Consumption of unpasteurized goat cheese",
      "Direct transmission via rodent flea bites",
      "Inhalation of aerosols from stagnant cooling towers and hotel air conditioners"
    ],
    "c": 0,
    "r": "Cryptococcus neoformans is an encapsulated, round, opportunistic yeast found ubiquitously in the environment, with an exceptionally high concentration in soil contaminated with avian excreta, particularly pigeon droppings (guano). Infection occurs via inhalation of aerosolized basidiospores or desiccated yeast cells into the lungs. In immunocompromised individuals (especially advanced AIDS with CD4 < 100/µL), the organism disseminates hematogenously from the respiratory tract to the central nervous system, producing life-threatening cryptococcal meningitis.\n\nHigh-Yield Pearl: Cryptococcus neoformans is acquired by inhaling yeast from soil enriched with pigeon droppings (avian guano); features a thick glucuronoxylomannan capsule."
  },
  {
    "cat": 3,
    "q": "A 52-year-old leukemia patient undergoing induction chemotherapy develops profound neutropenia (absolute neutrophil count < 200/µL), high fever, pleuritic chest pain, and hemoptysis. Chest CT reveals nodular pulmonary consolidations surrounded by a ground-glass halo ('halo sign'). A transbronchial biopsy is stained with Gomori Methenamine Silver (GMS). What are the characteristic microscopic morphological features of Aspergillus fumigatus hyphae?",
    "a": [
      "Narrow, septate hyphae (3–5 µm wide) with regular acute-angle (45-degree) branching",
      "Round yeast cells with narrow-based unequal budding",
      "Large thick-walled spherules containing numerous endospores",
      "Broad, irregularly ribbon-like non-septate hyphae branching at wide right angles (90 degrees)",
      "Broad-based budding yeasts with thick double-contoured cell walls"
    ],
    "c": 0,
    "r": "Aspergillus fumigatus is an angioinvasive mold that characteristically forms narrow (3–5 µm wide), regularly septate hyphae that exhibit dichotomous acute-angle (~45-degree) V-shaped branching (mnemonic: 'A' for Aspergillus = Acute Angle / 45°). In severely neutropenic hosts, the hyphae invade pulmonary blood vessel walls (angioinvasion), causing arterial thrombosis, coagulative necrosis, infarction, and cavitation (seen on CT as the 'halo sign' and 'air crescent sign').\n\nHigh-Yield Pearl: Aspergillus fumigatus features narrow, septate hyphae with acute-angle (45°) branching; contrast with Mucor (broad, non-septate, 90° right-angle branching)."
  },
  {
    "cat": 3,
    "q": "A 48-year-old allogeneic stem cell transplant recipient with graft-versus-host disease on high-dose immunosuppression develops sudden hemoptysis, fever, and wedge-shaped peripheral pulmonary infiltrates on chest CT. Histological examination of lung resection tissue shows extensive vascular occlusion by fungal hyphae with surrounding coagulative ischemic infarction and necrotizing granulomatous inflammation. This pathological condition represents:",
    "a": [
      "Simple non-invasive pulmonary aspergilloma (fungus ball in a pre-existing cavity)",
      "Pulmonary histoplasmosis with coin lesions",
      "Allergic bronchopulmonary aspergillosis (ABPA)",
      "Pneumocystis jirovecii intra-alveolar foamy exudate",
      "Angioinvasive pulmonary aspergillosis"
    ],
    "c": 4,
    "r": "Angioinvasive aspergillosis is a fulminant, life-threatening opportunistic fungal infection seen almost exclusively in severely immunocompromised individuals (e.g., profound neutropenia, hematopoietic stem cell transplants, high-dose corticosteroids). Aspergillus hyphae physically invade and penetrate through the walls of pulmonary arteries and arterioles. This induces vascular thrombosis, tissue ischemia, coagulative hemorrhagic infarction, and necrotizing granulomas. Treatment is immediate intravenous voriconazole or isavuconazole.\n\nHigh-Yield Pearl: Angioinvasive aspergillosis features fungal vascular invasion leading to thrombosis, wedge-shaped hemorrhagic infarction, and necrotizing granulomas."
  },
  {
    "cat": 3,
    "q": "An 18-month-old toddler presents with a 2-day history of low-grade fever, hoarseness, a harsh barking cough resembling a seal, and inspiratory stridor that worsens with crying. A soft-tissue neck radiograph reveals symmetrical subglottic tapering of the tracheal air column, producing the characteristic 'steeple sign'. This clinical syndrome (acute laryngotracheobronchitis / croup) is most commonly caused by which of the following viral pathogens?",
    "a": [
      "Adenovirus serotypes 4 and 7",
      "Influenza A virus H1N1",
      "Epstein-Barr virus (EBV)",
      "Respiratory syncytial virus (RSV) subgroup B",
      "Human parainfluenza virus types 1 and 2 (Paramyxoviridae family)"
    ],
    "c": 4,
    "r": "Croup (acute laryngotracheobronchitis) is an acute viral infection of the upper airway seen characteristically in children aged 6 months to 3 years. The predominant causative agents are Human Parainfluenza Viruses (type 1 is most common, followed by type 2), belonging to the Paramyxoviridae family (enveloped, negative-sense, single-stranded RNA viruses). Inflammation and mucosal edema in the subglottic region (the narrowest part of the pediatric airway) produce the clinical triad of barking cough, hoarseness, and inspiratory stridor, along with the radiological 'steeple sign' (subglottic tracheal narrowing).\n\nHigh-Yield Pearl: Human parainfluenza virus (Paramyxoviridae) is the leading cause of croup (laryngotracheobronchitis), marked by barking cough and the subglottic 'steeple sign'."
  },
  {
    "cat": 3,
    "q": "In 2012, a novel severe viral respiratory illness characterized by acute atypical pneumonia rapidly progressing to acute respiratory distress syndrome (ARDS) and acute renal failure was identified in patients presenting to intensive care units across the Arabian Peninsula. Epidemiological investigation identified dromedary camels as the primary zoonotic animal reservoir. Which of the following coronaviruses was responsible for this outbreak?",
    "a": [
      "Human Coronavirus 229E",
      "Human Coronavirus OC43",
      "Middle East Respiratory Syndrome Coronavirus (MERS-CoV)",
      "Severe Acute Respiratory Syndrome Coronavirus 1 (SARS-CoV-1)",
      "Severe Acute Respiratory Syndrome Coronavirus 2 (SARS-CoV-2)"
    ],
    "c": 2,
    "r": "Middle East Respiratory Syndrome (MERS) is caused by MERS-CoV, a lineage C beta-coronavirus first isolated in Jeddah, Saudi Arabia in 2012. It is a zoonotic virus with dromedary camels serving as the primary animal reservoir and intermediate host (with ancestral origin in bats). MERS-CoV utilizes dipeptidyl peptidase 4 (DPP4 / CD26) as its cellular entry receptor. Clinical infection has a high case fatality rate (~35%), presenting as severe pneumonia, rapid progression to ARDS, multiorgan failure, and acute kidney injury.\n\nHigh-Yield Pearl: MERS-CoV originated in the Arabian Peninsula, utilizes dromedary camels as its reservoir, binds DPP4 (CD26), and causes severe ARDS with ~35% mortality."
  },
  {
    "cat": 3,
    "q": "A 38-year-old HIV-infected man with a CD4+ T-cell count of 80/µL presents with a 3-week history of dry nonproductive cough, exertional dyspnea, and low-grade fever. Bilateral diffuse perihilar ground-glass opacities are present on chest radiograph. Induced sputum is stained with Grocott's Methenamine Silver (GMS). Microscopic examination reveals numerous dark, cup-shaped and disc-shaped cystic structures (4–6 µm) with central dots, resembling 'crushed ping-pong balls'. What is the causative opportunistic pathogen?",
    "a": [
      "Cytomegalovirus (CMV)",
      "Pneumocystis jirovecii",
      "Streptococcus agalactiae",
      "Legionella pneumophila",
      "Mycobacterium avium-intracellulare"
    ],
    "c": 1,
    "r": "Pneumocystis jirovecii (formerly P. carinii) is an atypical, opportunistic unicellular fungus (classified genetically as a fungus, though lacking ergosterol in its cell membrane). It is the premier AIDS-defining opportunistic pulmonary infection in patients with CD4 counts <200/µL. On Grocott's Methenamine Silver (GMS) stain, P. jirovecii cysts stain black or dark brown and appear as round, cup-shaped, disc-shaped, or collapsed 'crushed ping-pong balls' (4–6 µm in diameter) with prominent central eccentric intracystic dot-like parent bodies. First-line prophylaxis and treatment is trimethoprim-sulfamethoxazole (TMP-SMX).\n\nHigh-Yield Pearl: Pneumocystis jirovecii appears as cup-shaped, disc-like silver-staining cysts on GMS; premier opportunistic infection in AIDS patients with CD4 <200."
  },
  {
    "cat": 2,
    "q": "A 60-year-old patient with an acute exacerbation of severe COPD is evaluated in the emergency department. Physical examination reveals central cyanosis, somnolence, flapping tremor of the outstretched hands (asterixis), and tachycardia. Arterial blood gas on room air shows: pH 7.22, PaCO2 70 mmHg, and PaO2 44 mmHg. This classic clinical and physiological triad defines:",
    "a": [
      "Primary carbon monoxide toxicity with normal tissue oxygenation",
      "Pure uncompensated metabolic alkalosis",
      "Isolated hypocapnic anxiety-induced hyperventilation",
      "Erythrocytosis-induced hyperviscosity syndrome without gas exchange failure",
      "Severe acute respiratory insufficiency (hypoxemia, hypercapnia, and clinical cyanosis)"
    ],
    "c": 4,
    "r": "Severe acute respiratory insufficiency (acute respiratory failure) is classically defined by the pathological failure of the respiratory system to maintain adequate arterial oxygenation and/or carbon dioxide elimination. The clinical hallmark triad consists of: 1) Profound arterial hypoxemia (PaO2 < 60 mmHg), 2) Acute hypercapnia (PaCO2 > 50 mmHg) producing respiratory acidosis (pH < 7.35) and CO2 narcosis (somnolence, asterixis, headache, vasodilation), and 3) Clinical cyanosis (reflecting >5 g/dL of reduced deoxygenated hemoglobin).\n\nHigh-Yield Pearl: Severe respiratory insufficiency is clinically defined by the triad of hypoxemia (PaO2 <60), acute hypercapnia (PaCO2 >50), and clinical cyanosis."
  },
  {
    "cat": 0,
    "q": "A 2-year-old toddler is brought to the emergency department after an episode of sudden coughing and choking while eating whole peanuts. Physical examination reveals unilateral wheezing and decreased breath sounds over the right hemithorax. If aspirated in the upright position, into which of the following anatomical airways is an inhaled foreign body statistically most likely to lodge, and for what anatomical reason?",
    "a": [
      "Equally distributed between right and left main bronchi with zero anatomical difference",
      "Exclusively into the left upper lobe apical bronchus due to tracheal curvature",
      "The right main bronchus, because it is wider, shorter (approx. 2.5 cm vs 5 cm), and runs more vertically than the left main bronchus",
      "The left main bronchus, because it has a larger diameter to accommodate the cardiac notch",
      "Immediately trapped in the pyriform sinus without entering the laryngeal vestibule"
    ],
    "c": 2,
    "r": "In aspirated foreign bodies, the anatomical architecture of the tracheobronchial tree creates a marked predilection for the right bronchial tree (~70–80% of aspirates). The right main (primary) bronchus is wider in diameter, significantly shorter (~2.5 cm length vs ~5.0 cm for the left), and branches off the trachea at a steeper, more vertical angle (~25 degrees from midline vs ~45 degrees for the left main bronchus, which is pushed more horizontally by the aortic arch and heart). Therefore, aspirated objects naturally follow the straight, vertical path down into the right main bronchus (and in an upright person, into the right lower lobe).\n\nHigh-Yield Pearl: Foreign bodies preferentially aspirate into the right main bronchus because it is wider, shorter, and more vertically oriented than the left."
  }
,
  {
    "cat": 0,
    "q": "A newborn male delivered at 38 weeks of gestation develops severe respiratory distress, cyanosis, and grunting within 15 minutes of birth. Physical examination reveals a scaphoid abdomen, absent vesicular breath sounds over the left hemithorax, and heart sounds displaced prominently to the right lateral thoracic wall. An emergent plain radiograph of the chest and abdomen demonstrates multiple air-filled loops of bowel within the left thoracic cavity and marked mediastinal shift.<span class='q-stem-bold'>Defective formation or incomplete fusion of which of the following embryological structures is the primary cause of this neonate's anatomical malformation?</span>",
    "a": [
      "Incomplete cranial development of the transverse fibrous septum transversum",
      "Defective lateral muscular ingrowth derived from the adjacent body wall",
      "Faulty closure of the posterolateral embryological pleuroperitoneal membrane",
      "Aberrant longitudinal development and migration of the esophageal mesentery",
      "Incomplete separation of the primitive foregut by lateral esophageal folds"
    ],
    "c": 2,
    "r": "This infant presents with a classic Bochdalek hernia (congenital diaphragmatic hernia), which accounts for >85% of cases and characteristically occurs on the left posterolateral side. It results from defective closure of the pleuroperitoneal membrane with the septum transversum and esophageal mesentery during the 6th to 8th weeks of development. Herniation of abdominal viscera into the thoracic cavity compresses developing bronchial buds, causing severe ipsilateral and contralateral pulmonary hypoplasia.\n\nDistractor Breakdown: Option A: The septum transversum forms the central tendon of the diaphragm; defects here cause central or anterior (Morgagni) hernias. Option B: Body wall muscular ingrowth forms the peripheral rim of the diaphragm; it is not the primary site of Bochdalek herniation. Option D: The dorsal mesentery of the esophagus forms the diaphragmatic crura; defects result in hiatal or paraesophageal hernias. Option E: Faulty tracheoesophageal septation results in tracheoesophageal fistulae, not diaphragmatic defects."
  },
  {
    "cat": 0,
    "q": "A routine prenatal ultrasound performed at 21 weeks of gestation demonstrates a fetus with massive, symmetrically enlarged and intensely echogenic lungs, flattened-to-inverted diaphragms, a centrally compressed heart, and severe fetal ascites with generalized subcutaneous soft tissue edema (hydrops fetalis). The trachea and bronchi distal to the larynx appear prominently dilated and fluid-distended.<span class='q-stem-bold'>Which of the following developmental errors is the underlying embryological cause of this fetal syndrome?</span>",
    "a": [
      "Failure of the lateral tracheoesophageal folds to fuse in the midline",
      "Arrest of distal branching morphogenesis at the pseudoglandular phase",
      "Agenesis of secondary interalveolar connective tissue septa",
      "Complete failure of recanalization of the primitive laryngeal lumen",
      "Premature regression of embryonic pulmonary arterial vascular branches"
    ],
    "c": 3,
    "r": "The fetus exhibits Congenital High Airway Obstruction Syndrome (CHAOS) secondary to complete laryngeal atresia. During normal laryngeal development, endodermal epithelial proliferation occludes the lumen, which then undergoes recanalization during the 10th week. Complete failure of this recanalization traps fetal pulmonary fluid secreted by the developing alveolar epithelium. The resulting intrapulmonary pressure distends distal airways, flattens or inverts the diaphragm, compresses the heart and inferior vena cava, impairs venous return, and precipitates fatal non-immune hydrops fetalis.\n\nDistractor Breakdown: Option A: Midline fusion failure of tracheoesophageal folds causes tracheoesophageal fistula (TEF), where lungs are not fluid-hyperinflated. Option B: Arrest of branching morphogenesis causes pulmonary hypoplasia or agenesis, resulting in abnormally small (not distended) lungs. Option C: Failure of secondary septation occurs late in gestation (saccular/alveolar stages) and characterizes bronchopulmonary dysplasia. Option E: Pulmonary vascular regression causes pulmonary arterial hypoplasia, which does not trap fluid or distend distal lung parenchyma."
  },
  {
    "cat": 0,
    "q": "A 54-year-old male dining at a restaurant suffers sudden foreign body airway obstruction while eating steak. Witnesses perform abdominal thrusts (Heimlich maneuver) repeatedly without success. The patient collapses, becomes unresponsive, and demonstrates profound facial cyanosis. Emergency medical personnel arrive and identify complete supraglottic obstruction that cannot be relieved with Magill forceps or endotracheal intubation. An immediate emergency surgical airway must be established.<span class='q-stem-bold'>Which of the following anatomical structures should be directly incised to establish an immediate subglottic airway?</span>",
    "a": [
      "The thyrohyoid membrane connecting the thyroid lamina to the hyoid bone",
      "The median cricothyroid ligament bridging the thyroid and cricoid cartilages",
      "The anterior tracheal fibroelastic rings situated between the 4th and 5th rings",
      "The posterior membranous trachealis wall separating trachea from esophagus",
      "The lateral quadrangular membrane superior to the false vestibular vocal cords"
    ],
    "c": 1,
    "r": "When acute upper airway obstruction cannot be relieved by basic life support maneuvers or endotracheal intubation (\"cannot intubate, cannot oxygenate\"), an emergency cricothyroidotomy is the procedure of choice. The median cricothyroid ligament (part of the conus elasticus) lies subcutaneously between the inferior border of the thyroid cartilage and the superior border of the cricoid ring. It provides the thinnest, most accessible subglottic entry point devoid of overlying major vascular structures or thyroid parenchyma.\n\nDistractor Breakdown: Option A: The thyrohyoid membrane lies superior to the vocal cords (supraglottic); incising it enters the pharyngeal cavity above the obstruction. Option C: Tracheostomy between the 4th and 5th rings is an elective surgical procedure obscured by the thyroid isthmus and inferior veins. Option D: The trachealis muscle forms the posterior wall of the trachea; incising it risks esophageal perforation. Option E: The quadrangular membrane lies within the supraglottic laryngeal vestibule above the obstruction."
  },
  {
    "cat": 0,
    "q": "A neurobiologist studies the microscopic organization of the human nasal cavity mucosa lining the roof of each nasal cavity, the superior nasal concha, and the upper third of the nasal septum. Histological sections reveal a pseudostratified columnar neuroepithelium containing non-motile modified cilia, apical microvilli, supporting sustentacular cells, and basal stem cells.<span class='q-stem-bold'>Which of the following cell types in this specialized epithelium serves as the primary primary sensory receptor cell capable of transducing chemical odorants into electrical action potentials?</span>",
    "a": [
      "Sustentacular supporting cells equipped with apical secretory granules",
      "Bipolar sensory neurons with specialized non-motile apical olfactory cilia",
      "Basal stem cells exhibiting high rates of symmetrical mitotic division",
      "Submucosal Bowman serous cells that synthesize odorant-binding proteins",
      "Brush cells possessing blunt microvilli innervated by the trigeminal nerve"
    ],
    "c": 1,
    "r": "The primary sensory receptor cells in the olfactory mucosa are bipolar neurons. Their apical dendrites extend to the mucosal surface as swollen olfactory knobs bearing long, non-motile cilia containing G-protein coupled odorant receptors (Golf). Their unmyelinated basal axons coalesce into olfactory nerve bundles (filia olfactoria, CN I) that traverse the cribriform plate of the ethmoid bone to synapse in the olfactory bulb. Notably, they are unique true neurons capable of continuous neurogenesis from basal stem cells throughout adult life.\n\nDistractor Breakdown: Option A: Sustentacular cells are metabolic and structural supporting cells analogous to glial cells. Option C: Basal cells are reserve stem cells that replenish olfactory neurons and sustentacular cells; they do not detect odorants. Option D: Bowman glands secrete a watery fluid that flushes away odorants; they are secretory cells, not sensory transducers. Option E: Brush cells transmit general somatosensory sensation (irritation) via CN V, not true olfaction."
  },
  {
    "cat": 2,
    "q": "In an experimental mammalian model, patch-clamp microelectrodes record from various neuronal clusters throughout the brainstem during spontaneous breathing. A distinct localized cluster of specialized interneurons in the ventrolateral medulla oblongata demonstrates rhythmic, intrinsic burst discharges that persist even after pharmacological blockade of all synaptic sensory afferents and pontine inputs.<span class='q-stem-bold'>Which of the following anatomical structures is the primary neuroanatomical pacemaker responsible for initiating this basal respiratory rhythm?</span>",
    "a": [
      "Dorsal respiratory group situated within the nucleus tractus solitarius",
      "Pontine pneumotaxic center in the nucleus parabrachialis medialis",
      "Pre-Bötzinger complex located within the ventrolateral medullary column",
      "Caudal apneustic center located within the lower pontine reticular formation",
      "Chemosensitive neuronal zone situated on the ventrolateral medullary surface"
    ],
    "c": 2,
    "r": "The primary rhythm-generating pacemaker for automatic, involuntary respiration is the pre-Bötzinger complex, situated within the ventral respiratory column of the rostral ventrolateral medulla. Neurons in this complex exhibit intrinsic autorhythmic pacemaker properties (analogous to the sinoatrial node of the heart) that set the fundamental baseline cadence of inspiratory ramp generation, subsequently driving motor neurons in the phrenic and intercostal motor pools.\n\nDistractor Breakdown: Option A: The dorsal respiratory group (DRG) integrates sensory input (from CN IX and X) and relays inspiratory signals, but does not contain the primary pacemaker. Option B: The pneumotaxic center terminates inspiration to modulate rate and depth; it is not the primary pacemaker. Option D: The apneustic center provides excitatory input to prolong inspiration; it does not set the intrinsic pace. Option E: Central chemoreceptors detect CSF H+ to modulate ventilatory amplitude, not initiate basic rhythmic pacing."
  },
  {
    "cat": 0,
    "q": "A 38-year-old female opera singer presents with progressive dysphonia and voice fatigue after intense concert rehearsals. Laryngoscopy reveals bilateral small, smooth nodules located symmetrically at the junction of the anterior one-third and posterior two-thirds of the true vocal folds (vocal cords). A biopsy is obtained to confirm vocal cord nodules (singer's nodes).<span class='q-stem-bold'>Which of the following types of epithelium normally lines the surface of the true vocal cords to provide mechanical protection against repetitive vibratory stress?</span>",
    "a": [
      "Pseudostratified ciliated columnar epithelium containing goblet mucus cells",
      "Simple columnar epithelium with prominent apical microvillous borders",
      "Non-keratinized stratified squamous epithelium devoid of ciliated cells",
      "Keratinized stratified squamous epithelium possessing a stratum corneum",
      "Simple cuboidal epithelium interspersed with Clara secretory lipoproteins"
    ],
    "c": 2,
    "r": "While the vast majority of the conducting respiratory tract is lined by pseudostratified ciliated columnar epithelium, areas subject to mechanical friction, abrasion, and high-velocity airflow transition to non-keratinized stratified squamous epithelium. In the larynx, the true vocal folds (cords) and the superior surface of the epiglottis are lined by stratified squamous epithelium to withstand intense mechanical stress during phonation and swallowing.\n\nDistractor Breakdown: Option A: Pseudostratified ciliated columnar lines the vestibular (false) vocal cords, laryngeal ventricle, and infraglottic space. Option B: Simple columnar epithelium is found in the gastrointestinal tract, not the laryngeal folds. Option D: Keratinized stratified squamous epithelium is found on the external skin epidermis, not on mucosal vocal folds. Option E: Simple cuboidal epithelium with Clara (club) cells characterizes terminal bronchioles."
  },
  {
    "cat": 0,
    "q": "A 62-year-old male with decompensated heart failure develops a massive right-sided pleural effusion causing severe orthopnea. Diagnostic and therapeutic thoracocentesis (pleural tap) is planned to evacuate 1.5 L of fluid. With the patient seated leaning forward, the physician identifies the right midaxillary line and prepares to insert a needle into the costodiaphragmatic recess.<span class='q-stem-bold'>To avoid damaging thoracic and subdiaphragmatic structures, which intercostal space along the midaxillary line should be safely entered, and along which rib border should the needle advance?</span>",
    "a": [
      "Fourth intercostal space, advancing the needle along the inferior border of the fourth rib",
      "Sixth intercostal space, advancing the needle along the inferior border of the sixth rib",
      "Ninth intercostal space, advancing the needle along the superior border of the tenth rib",
      "Eleventh intercostal space, advancing the needle along the superior border of the twelfth rib",
      "Twelfth intercostal space, advancing the needle along the inferior border of the twelfth rib"
    ],
    "c": 2,
    "r": "Along the midaxillary line, the inferior border of the lung reaches the 8th rib, whereas the parietal pleura extends down to the 10th rib, creating the costodiaphragmatic recess between ribs 8 and 10. The ideal site for midaxillary thoracocentesis is the 8th or 9th intercostal space (typically the 9th intercostal space). The needle must be advanced directly over the superior border of the lower rib (10th rib) to avoid injuring the intercostal neurovascular bundle (Vein, Artery, Nerve: VAN) situated in the costal groove along the inferior border of the upper rib.\n\nDistractor Breakdown: Option A & B: The 4th and 6th spaces lie within pulmonary parenchyma; advancing along the inferior border injures the intercostal neurovascular bundle. Option D & E: The 11th and 12th intercostal spaces risk penetrating the diaphragm and lacerating the liver (on the right) or spleen (on the left)."
  },
  {
    "cat": 3,
    "q": "A 45-year-old male lung transplant recipient maintained on tacrolimus and mycophenolate mofetil develops high fever, hemoptysis, and chest pain 6 months post-transplant. Chest CT reveals multiple nodular cavitary lesions with halo signs. Bronchoalveolar lavage culture grows a filamentous fungus identified as <em>Scedosporium apiospermum</em> (asexual state of <em>Pseudallescheria boydii</em>).<span class='q-stem-bold'>Which of the following antifungal agents is clinically ineffective against this specific fungal pathogen due to inherent intrinsic pharmacological resistance?</span>",
    "a": [
      "Voriconazole",
      "Posaconazole",
      "Amphotericin B",
      "Isavuconazole",
      "Itraconazole"
    ],
    "c": 2,
    "r": "Scedosporium species (including Scedosporium apiospermum and Lomentospora prolificans) are opportunistic filamentous molds increasingly recognized in immunocompromised hosts. They are notoriously characterized by intrinsic resistance to Amphotericin B (polyenes). Voriconazole is the primary antifungal of choice for Scedosporium infections.\n\nDistractor Breakdown: Option A: Voriconazole is the first-line treatment of choice for invasive scedosporiosis. Option B, D, & E: Extended-spectrum triazoles exhibit variable to good activity against Scedosporium , unlike amphotericin B which is completely ineffective."
  },
  {
    "cat": 3,
    "q": "A 58-year-old female with acute myeloid leukemia undergoing induction chemotherapy develops profound neutropenia (absolute neutrophil count 120/mcL). On day 14 of chemotherapy, she develops persistent fever refractory to broad-spectrum piperacillin-tazobactam, right pleuritic chest pain, and dry cough. High-resolution chest CT reveals a macronodule surrounded by a ground-glass perimeter (\"CT halo sign\"). A non-invasive serum enzyme immunoassay is ordered to detect a major fungal cell wall carbohydrate antigen.<span class='q-stem-bold'>Which of the following diagnostic biomarkers is specific for confirming invasive infection caused by <em>Aspergillus</em> species?</span>",
    "a": [
      "Serum cryptococcal glucuronoxylomannan antigen assay",
      "Serum and bronchoalveolar lavage galactomannan antigen",
      "Urinary Histoplasma capsulatum polysaccharide antigen",
      "Serum (1,3)-beta-D-glucan pan-fungal cell wall assay",
      "Serum cold agglutinin IgM autoantibody titer measurement"
    ],
    "c": 1,
    "r": "The detection of galactomannan antigen (a polysaccharide component of the cell wall released during active hyphal growth of Aspergillus) in serum or bronchoalveolar lavage (BAL) fluid is a sensitive, validated biomarker for early diagnosis of Invasive Pulmonary Aspergillosis (IPA) in neutropenic patients.\n\nDistractor Breakdown: Option A: Cryptococcal antigen tests for Cryptococcus neoformans , which forms yeast cells in bird/pigeon guano. Option C: Urinary Histoplasma antigen tests for Histoplasma capsulatum , an endemic dimorphic fungus. Option D: (1,3)-beta-D-glucan is a broad pan-fungal marker (positive in Candida, Aspergillus, and Pneumocystis) and lacks specificity for Aspergillus. Option E: Cold agglutinins are IgM antibodies seen in Mycoplasma pneumoniae infections."
  },
  {
    "cat": 3,
    "q": "A 66-year-old male with a 45 pack-year smoking history presents for evaluation of chronic breathlessness and morning cough. Post-bronchodilator spirometry demonstrates an FEV1/FVC ratio of 0.58 and an FEV1 of 62% of predicted. His COPD Assessment Test (CAT) score is 16. In the past 12 months, he experienced zero moderate exacerbations and has never required emergency room evaluation or hospital admission.<span class='q-stem-bold'>According to international COPD guidelines (GOLD Category B / symptomatic, non-exacerbator) taught in the pharmacology curriculum, which of the following represents the preferred initial maintenance pharmacological therapy?</span>",
    "a": [
      "As-needed short-acting beta2-agonist monotherapy during daytime activity",
      "Combination long-acting muscarinic antagonist plus long-acting beta2-agonist",
      "High-dose inhaled corticosteroid combined with an oral leukotriene antagonist",
      "Daily oral phosphodiesterase-4 inhibitor combined with prophylactic azithromycin",
      "Inhaled corticosteroid plus long-acting beta2-agonist as first-line controller"
    ],
    "c": 1,
    "r": "This patient meets criteria for GOLD Category B (or Group E in recent revisions): high symptom burden (CAT &ge; 10, here 16) but low exacerbation risk (0 exacerbations, no hospitalizations). For patients with significant dyspnea and exercise limitation, first-line maintenance is dual bronchodilator therapy: a Long-Acting Muscarinic Antagonist (LAMA) combined with a Long-Acting Beta2-Agonist (LABA) (e.g., tiotropium + olodaterol or umeclidinium + vilanterol). Dual bronchodilation provides superior improvements in FEV1, hyperinflation, and dyspnea compared to either monotherapy.\n\nDistractor Breakdown: Option A: SABA monotherapy is inadequate for persistent dyspnea with a CAT score &ge; 10. Option C & E: Inhaled corticosteroids are reserved for patients with frequent exacerbations (&ge;2/year or &ge;1 hospitalization) and elevated blood eosinophils (&ge;300 cells/mcL); they are not indicated as first-line in non-exacerbators due to increased pneumonia risk. Option D: PDE-4 inhibitors (roflumilast) and azithromycin are add-on options for severe COPD with chronic bronchitis and frequent exacerbations on triple therapy."
  },
  {
    "cat": 3,
    "q": "A 67-year-old male presents with a 9-month history of worsening dry cough and progressive exertional dyspnea. Physical examination reveals digital clubbing and bilateral fine, end-inspiratory \"Velcro-like\" crackles predominantly audible at the lung bases. High-resolution CT of the chest demonstrates bilateral, peripheral, subpleural reticular opacities with subpleural cystic airspaces (\"honeycombing\") and traction bronchiectasis without discreet mass lesions.<span class='q-stem-bold'>Which of the following histopathological patterns on surgical lung biopsy is diagnostic of this condition?</span>",
    "a": [
      "Diffuse uniform alveolar wall thickening with non-caseating sarcoid granulomas",
      "Patchy parenchymal interstitial fibrosis alternating with normal lung and fibroblastic foci",
      "Alveolar airspace filling by dense, intra-alveolar polypoid plugs of granulation tissue",
      "Widespread intra-alveolar accumulation of pigmented smoker's macrophages in distal sacs",
      "Diffuse necrotizing vasculitis of small arteries with neutrophilic nuclear debris"
    ],
    "c": 1,
    "r": "The clinical presentation and HRCT features represent Idiopathic Pulmonary Fibrosis (IPF), whose morphological hallmark is the Usual Interstitial Pneumonia (UIP) pattern. The diagnostic histological hallmark of UIP is spatial and temporal heterogeneity: patchy interstitial fibrosis that varies from field to field, where densely fibrotic collagenous areas with honeycomb change alternate with normal lung parenchyma, accompanied by active fibroblastic foci.\n\nDistractor Breakdown: Option A: Non-caseating granulomas along lymphatic routes characterize pulmonary sarcoidosis. Option C: Intra-alveolar plugs of loose organizing connective tissue (Masson bodies) define Cryptogenic Organizing Pneumonia (COP / BOOP). Option D: Intra-alveolar accumulation of pigmented macrophages defines Respiratory Bronchiolitis-Interstitial Lung Disease (RB-ILD) and Desquamative Interstitial Pneumonia (DIP). Option E: Necrotizing vasculitis defines Granulomatosis with Polyangiitis (Wegener's)."
  },
  {
    "cat": 3,
    "q": "A 34-year-old female with a childhood history of severe necrotizing adenovirus pneumonia presents with chronic daily production of copious, foul-smelling, purulent, three-layered sputum and recurrent hemoptysis. Chest CT reveals abnormal, irreversible dilation of segmental and subsegmental bronchi extending to within 1 cm of the pleural surface, with signet-ring airway configurations. Spirometry demonstrates an obstructive pattern with an FEV1/FVC ratio of 0.61.<span class='q-stem-bold'>Which of the following microscopic descriptions represents the hallmark histopathological finding within the affected bronchial walls?</span>",
    "a": [
      "Marked hypertrophy of smooth muscle bundles with prominent eosinophilic crystalline Charcot-Leyden deposits",
      "Transmural intense mixed acute and chronic inflammation with destruction of elastic and muscular wall layers",
      "Marked hyperplasia of submucosal seromucous glands with a Reid index exceeding fifty percent",
      "Extensive replacement of pseudostratified epithelium by well-differentiated keratinizing stratified squamous sheets",
      "Subpleural non-inflammatory destruction of terminal alveolar septa without architectural fibrosis"
    ],
    "c": 1,
    "r": "The patient has bronchiectasis, characterized by permanent abnormal dilation of bronchi and bronchioles caused by a vicious cycle of infection and transmural inflammation. Histopathologically, the bronchial walls show intense, mixed acute and chronic inflammatory cell infiltration (neutrophils, lymphocytes, plasma cells), mucosal ulceration, and complete enzymatic destruction of supporting elastic fibers, smooth muscle, and cartilage, leading to structural collapse and dilation.\n\nDistractor Breakdown: Option A: Smooth muscle hypertrophy with eosinophils and Charcot-Leyden crystals defines bronchial asthma. Option C: Submucosal gland hyperplasia with an elevated Reid index (>0.50) defines chronic bronchitis. Option D: Squamous metaplasia is an adaptive response to cigarette smoke, but not the primary destructive hallmark of bronchiectasis. Option E: Destruction of alveolar septa without fibrosis defines emphysema."
  },
  {
    "cat": 3,
    "q": "A 23-year-old male presents with a 4-day history of hemoptysis, dyspnea, fatigue, and dark cola-colored urine. Laboratory evaluation reveals a serum creatinine of 3.8 mg/dL (baseline 0.9 mg/dL), urinalysis with red blood cell casts and proteinuria, and diffuse alveolar infiltrates on chest radiograph. Direct immunofluorescence of a renal core biopsy demonstrates smooth, linear deposition of IgG and complement along the glomerular basement membranes.<span class='q-stem-bold'>Which of the following molecular targets is the autoantigen bound by the pathogenic antibodies responsible for this patient's pulmonary and renal manifestations?</span>",
    "a": [
      "Neutrophil cytoplasmic proteinase-3 enzyme within azurophilic granules",
      "Non-collagenous domain of the alpha-3 chain of basement membrane type IV collagen",
      "Epithelial transmembrane chloride conductance regulator channel protein",
      "Desmosomal cadherin desmoglein-3 bridging intercellular epidermal junctions",
      "Myeloperoxidase enzyme associated with surrounding nuclear membranes"
    ],
    "c": 1,
    "r": "The patient presents with Goodpasture syndrome (Anti-Glomerular Basement Membrane [Anti-GBM] disease), a classic Type II hypersensitivity autoimmune disease. Circulating pathogenic antibodies target the non-collagenous domain 1 (NC1) of the alpha-3 chain of Type IV collagen (found in both glomerular and pulmonary alveolar basement membranes). Cross-reactivity between alveolar septa and renal glomeruli results in the clinical triad of diffuse pulmonary hemorrhage (hemoptysis) and rapidly progressive glomerulonephritis (hematuria, RBC casts, renal failure), characterized by pathognomonic linear IgG immunofluorescence.\n\nDistractor Breakdown: Option A: Proteinase-3 (PR3-ANCA / c-ANCA) is the target in Granulomatosis with Polyangiitis (Wegener's), which shows pauci-immune crescentic GN (not linear IgG). Option C: CFTR protein mutation causes cystic fibrosis. Option D: Desmoglein-3 autoantibodies cause pemphigus vulgaris (blistering skin disease). Option E: Myeloperoxidase (MPO-ANCA / p-ANCA) is targeted in microscopic polyangiitis and Churg-Strauss syndrome."
  },
  {
    "cat": 3,
    "q": "A 60-year-old male in the intensive care unit with acute hypoxemic respiratory failure requires arterial blood gas (ABG) analysis to assess acid-base balance and oxygenation. A junior resident prepares to draw the sample from the right radial artery following a normal modified Allen's test.<span class='q-stem-bold'>According to standard clinical laboratory protocols detailed in the course curriculum, which of the following represents the appropriate blood volume and processing timeframe for an un-iced sample?</span>",
    "a": [
      "Collect approximately 1 mL into a pre-heparinized syringe and analyze within twenty minutes",
      "Collect approximately 5 mL into a non-heparinized tube and analyze within sixty minutes",
      "Collect approximately 10 mL into an EDTA tube and centrifuge immediately within five minutes",
      "Collect approximately 3 mL into a sodium citrate tube and process within ninety minutes",
      "Collect approximately 0.5 mL into a lithium fluoride vial and store at room temperature overnight"
    ],
    "c": 0,
    "r": "According to the clinical laboratory protocols in the curriculum, standard arterial blood gas collection requires approximately 1 mL of arterial blood drawn into a pre-heparinized syringe (to prevent clotting while avoiding dilutional artifact from liquid heparin). The sample must be analyzed within 20 minutes if kept at room temperature. Delaying analysis causes continued cellular metabolism (leukocytes and erythrocytes consume O2 and generate CO2), leading to falsely low PaO2, elevated PaCO2, and acidosis.\n\nDistractor Breakdown: Option B, C, D, & E: Tubes without heparin will clot immediately; collecting 5–10 mL is unnecessary for gas analysis; delaying analysis to 60–90 minutes without ice severely alters blood gas values through erythrocyte metabolism."
  },
  {
    "cat": 2,
    "q": "A 28-year-old primigravida at 30 weeks of gestation presents for routine prenatal care. She reports mild, gradual exertional shortness of breath when climbing stairs, but denies cough, wheezing, orthopnea, or chest pain. Her physical examination is entirely normal. Blood pressure is 114/72 mmHg, pulse is 76/min, and respiratory rate is 16 breaths per minute with an oxygen saturation of 99% on room air.<span class='q-stem-bold'>Which of the following physiological respiratory parameters typically remains **unchanged** throughout normal, uncomplicated pregnancy?</span>",
    "a": [
      "Tidal volume (VT)",
      "Minute ventilation (VE)",
      "Resting respiratory rate (RR)",
      "Maternal oxygen consumption (VO2)",
      "Functional residual capacity (FRC)"
    ],
    "c": 2,
    "r": "Under the influence of elevated circulating progesterone, maternal minute ventilation increases by 30% to 50% primarily via an increase in tidal volume (VT) (deeper breaths), while the resting respiratory rate remains essentially unchanged. FRC decreases by ~20% as the enlarging gravid uterus elevates the diaphragm by up to 4 cm; maternal oxygen consumption increases by 20% to 30% to meet fetal and placental metabolic demands.\n\nDistractor Breakdown: Option A & B: Tidal volume and minute ventilation increase substantially due to progesterone-mediated stimulation of the respiratory center. Option D: Maternal oxygen consumption increases significantly throughout gestation. Option E: Functional residual capacity (FRC) decreases as diaphragmatic elevation reduces resting lung volume."
  },
  {
    "cat": 3,
    "q": "A 12-year-old boy with mild persistent asthma and allergic rhinitis is prescribed oral montelukast tablets once daily at bedtime. Four weeks later, his mother brings him back to the clinic expressing grave concern. She reports that he has become uncharacteristically irritable and aggressive, has experienced frequent night terrors with vivid nightmares, and has expressed sudden feelings of depression.<span class='q-stem-bold'>Which of the following regulatory warnings is associated with this class of leukotriene receptor antagonists?</span>",
    "a": [
      "Irreversible sensorineural cochlear ototoxicity requiring auditory screening",
      "Boxed warning regarding serious neuropsychiatric and behavioral disturbances",
      "Accelerated renal tubular calcification leading to nephrogenic diabetes",
      "Severe acute hemolytic anemia associated with erythrocyte glucose-6-phosphate deficiency",
      "Fatal bone marrow aplasia secondary to idiosyncratic stem cell suppression"
    ],
    "c": 1,
    "r": "Montelukast (a CysLT1 receptor antagonist) carries an explicit FDA Boxed Warning regarding serious neuropsychiatric events. Reported adverse effects include agitation, aggressive behavior, nightmares, sleep disturbances, hallucinations, depression, and suicidal thoughts. Clinicians are instructed to counsel families regarding these behavioral risks and discontinue the medication promptly if psychiatric symptoms arise.\n\nDistractor Breakdown: Option A: Ototoxicity is associated with aminoglycosides (streptomycin) and loop diuretics. Option C: Nephrogenic diabetes insipidus is linked to lithium therapy. Option D: Hemolytic anemia in G6PD deficiency is triggered by dapsone, primaquine, and rasburicase. Option E: Aplastic anemia is famously associated with chloramphenicol and carbamazepine."
  },
  {
    "cat": 3,
    "q": "A 19-year-old military recruit presents with 2 weeks of dry cough, malaise, and low-grade fever. Physical examination reveals mild pallor and scattered bilateral rhonchi. A peripheral blood smear exhibits red blood cell clumping at room temperature that dissolves upon warming to 37°C. Sputum PCR confirms <em>Mycoplasma pneumoniae</em>.<span class='q-stem-bold'>Which of the following immunoglobulins and target erythrocyte surface antigens mediates this autoimmune agglutination phenomenon?</span>",
    "a": [
      "Monomeric IgG antibodies directed against the erythrocyte Rh(D) protein antigen",
      "Pentameric IgM autoantibodies directed against the erythrocyte I carbohydrate antigen",
      "Secretory dimeric IgA antibodies directed against glycophorin A surface glycoproteins",
      "Circulating IgE antibodies directed against spectrin intracellular scaffolding fibers",
      "Polyclonal IgG antibodies binding directly to Duffy chemokine surface receptors"
    ],
    "c": 1,
    "r": "Mycoplasma pneumoniae shares antigenic mimicry with erythrocyte membrane carbohydrates. Infection triggers the production of cold agglutinins: polyclonal IgM antibodies directed against the I antigen on human erythrocytes. At lower temperatures (e.g., in peripheral acral capillary beds at 0°C to 4°C), these pentameric IgM antibodies bind erythrocytes and fix complement, leading to agglutination, transient acrocyanosis, and mild extravascular hemolysis.\n\nDistractor Breakdown: Option A: Warm autoimmune hemolytic anemia is mediated by warm-reactive IgG directed against Rh antigens. Option C, D, & E: Cold agglutinin disease is mediated by IgM against the I antigen, not IgA, IgE, or Duffy/spectrin interactions."
  },
  {
    "cat": 3,
    "q": "A 48-year-old male immigrant from an area with high prevalence of refractory tuberculosis is admitted with persistent cavitary pulmonary disease despite compliance with multiple antitubercular courses. Sputum cultures grow <em>Mycobacterium tuberculosis</em>. Drug susceptibility testing confirms resistance to isoniazid, rifampicin, levofloxacin, and amikacin.<span class='q-stem-bold'>According to World Health Organization criteria detailed in the pharmacology course, which of the following categories correctly classifies this mycobacterial strain?</span>",
    "a": [
      "Monoresistant tuberculosis",
      "Polyresistant tuberculosis",
      "Multidrug-resistant tuberculosis (MDR-TB)",
      "Extensively drug-resistant tuberculosis (XDR-TB)",
      "Pan-susceptible tuberculosis"
    ],
    "c": 3,
    "r": "By definition, Multidrug-Resistant TB (MDR-TB) refers to resistance to at least both Isoniazid and Rifampicin. Extensively Drug-Resistant TB (XDR-TB) is defined as MDR-TB (resistant to both isoniazid and rifampicin) plus resistance to any fluoroquinolone (e.g., levofloxacin or moxifloxacin) AND at least one second-line injectable agent (e.g., amikacin, capreomycin, or kanamycin) or bedaquiline/linezolid in updated WHO definitions.\n\nDistractor Breakdown: Option A: Monoresistant TB is resistance to only one first-line drug. Option B: Polyresistant TB is resistance to two or more first-line drugs, but not to both isoniazid and rifampicin together. Option C: MDR-TB is resistant to isoniazid and rifampicin, but retains susceptibility to fluoroquinolones and second-line injectables. Option E: Pan-susceptible implies full susceptibility to all first-line agents."
  },
  {
    "cat": 3,
    "q": "An 81-year-old female with severe chronic kidney disease (baseline estimated GFR 18 mL/min/1.73m²) is admitted to the hospital with acute community-acquired lobar pneumonia. Empiric therapy requires an intravenous third-generation cephalosporin active against <em>Streptococcus pneumoniae</em>.<span class='q-stem-bold'>Which of the following beta-lactam antibiotics can be administered at standard therapeutic doses without requiring dosage reduction in patients with severe renal impairment?</span>",
    "a": [
      "Cefotaxime",
      "Cefepime",
      "Ceftriaxone",
      "Ceftazidime",
      "Ampicillin"
    ],
    "c": 2,
    "r": "Unlike almost all other cephalosporins and beta-lactams, which are eliminated primarily by glomerular filtration and tubular secretion and thus accumulate toxically in renal failure, ceftriaxone undergoes dual elimination. It is excreted predominantly via the biliary system into the feces (~40% to 50%) as well as via the kidneys. Consequently, no dosage adjustment is necessary in patients with isolated renal impairment unless concomitant severe hepatic failure is present.\n\nDistractor Breakdown: Option A, B, D, & E: Cefotaxime, cefepime, ceftazidime, and ampicillin are eliminated almost exclusively via renal clearance; failure to reduce doses in severe renal failure can cause drug accumulation and severe neurotoxicity (encephalopathy, myoclonus, seizures)."
  },
  {
    "cat": 3,
    "q": "The parents of a 5-year-old girl present to an outpatient clinic seeking a safe over-the-counter remedy for their daughter's dry, irritating cough associated with a mild viral upper respiratory tract infection. The mother is hesitant to give opioid suppressants or synthetic chemical antitussives and requests an evidence-based plant-derived herbal preparation.<span class='q-stem-bold'>Which of the following botanical extracts is clinically indicated in pediatric patients to relieve respiratory spasms and facilitate secretolysis?</span>",
    "a": [
      "Standardized dried ivy leaf extract (Hedera helix)",
      "St. John's Wort extract (Hypericum perforatum)",
      "Concentrated Gingko biloba leaf extract",
      "Purified evening primrose oil suspension",
      "Standardized black cohosh root extract"
    ],
    "c": 0,
    "r": "Dried ivy leaf extract (Hedera helix) is a recognized herbal preparation used in cough syrups (e.g., Prospan) for children and adults. Its active triterpene saponins (notably hederacoside C and alpha-hederin) inhibit the internalization of beta2-adrenergic receptors in airway smooth muscle cells and alveolar type II cells. This produces dual therapeutic actions: secretolysis (reduces mucus viscosity by promoting surfactant release) and bronchospasmolysis (smooth muscle relaxation).\n\nDistractor Breakdown: Option B: St. John's Wort is an herbal remedy for mild depression notorious for inducing cytochrome P450 enzymes. Option C: Ginkgo biloba is marketed for cognitive enhancement and peripheral vascular disease. Option D & E: Evening primrose oil and black cohosh are used for gynecological symptoms and menopausal flushes."
  }
,
  {
    "cat": 0,
    "q": "A newborn male presents with respiratory distress that resolves when he cries vigorously but worsens during feeding. Attempts to pass a small nasogastric catheter through either naris meet firm resistance in the posterior nasal cavity. Physical examination reveals bilateral iris colobomas, low-set cup-shaped ears with sensorineural deafness, micropenis, and a harsh holosystolic murmur secondary to a ventricular septal defect.<span class='q-stem-bold'>Which of the following genetic syndromes is most strongly associated with this constellation of congenital findings?</span>",
    "a": [
      "DiGeorge syndrome (22q11.2 deletion syndrome)",
      "CHARGE syndrome (CHD7 gene mutation)",
      "Pierre Robin sequence with mandibular hypoplasia",
      "Treacher Collins syndrome (mandibulofacial dysostosis)",
      "VACTERL association with vertebral abnormalities"
    ],
    "c": 1,
    "r": "The patient exhibits CHARGE syndrome, an autosomal dominant disorder caused by mutations in the CHD7 gene. The classic mnemonic includes: Coloboma (most commonly chorioretinal or iris), Heart defects (e.g., VSD, tetralogy of Fallot), Atresia of the choanae (bilateral bony/membranous obstruction causing obligate mouth breathing), Retardation of growth and development, Genital hypoplasia, and Ear abnormalities/deafness. Over 50% of bilateral choanal atresia cases occur in the setting of CHARGE syndrome.\n\nDistractor Breakdown: Option A: DiGeorge syndrome presents with thymic hypoplasia, hypocalcemia, and conotruncal cardiac defects, but not classic bilateral choanal atresia. Option C: Pierre Robin sequence features micrognathia, glossoptosis, and cleft palate, without choanal atresia or iris colobomas. Option D: Treacher Collins features downward-slanting palpebral fissures and zygomatic hypoplasia without colobomas or choanal atresia. Option E: VACTERL includes vertebral, anal, cardiac, tracheoesophageal fistula, renal, and limb anomalies, not choanal atresia or colobomas."
  },
  {
    "cat": 0,
    "q": "A newborn female undergoes evaluation for tachypnea and mild intercostal retractions. Chest CT demonstrates a multicystic lesion in the right lower lobe comprising numerous, uniform, small cysts measuring approximately 0.5 to 1.5 cm in diameter. Renal ultrasound reveals concomitant bilateral renal agenesis (Potter sequence phenotype). Histopathological examination of the resected lobe reveals cyst walls lined by simple ciliated cuboidal-to-columnar epithelium resembling terminal bronchioles, devoid of cartilage or mucous cells.<span class='q-stem-bold'>According to the Stocker classification of Congenital Pulmonary Airway Malformations (CPAM), which of the following types is present in this infant?</span>",
    "a": [
      "Type 0 CPAM (Acinar dysgenesis)",
      "Type 1 CPAM (Large dominant cysts)",
      "Type 2 CPAM (Multiple uniform small cysts)",
      "Type 3 CPAM (Microcystic / solid adenomatoid)",
      "Type 4 CPAM (Distal alveolar peripheral cysts)"
    ],
    "c": 2,
    "r": "CPAM Type 2 accounts for 15% to 20% of cases and consists of multiple, uniform small cysts (typically &lt;2 cm in diameter) lined by bronchiolar-type epithelium. Notably, Type 2 CPAM is notorious for its strong association with other congenital anomalies (in over 50% of cases), particularly renal anomalies (renal agenesis/dysgenesis), cardiovascular defects, and skeletal malformations.\n\nDistractor Breakdown: Option A: Type 0 is rare acinar dysgenesis affecting the entire lung, incompatible with life. Option B: Type 1 is the most common (60–70%) and features large single or multiple macroscopic cysts (>2 cm, up to 10 cm) with good prognosis. Option D: Type 3 is bulky, microcystic or solid ( Option E: Type 4 features large peripheral thin-walled cysts derived from alveolar saccular tissue, prone to pleuropulmonary blastoma."
  },
  {
    "cat": 0,
    "q": "A full-term male newborn is noted to have a hoarse, weak, barely audible cry since birth. Over the subsequent 48 hours, he exhibits mild biphasic stridor that becomes prominent when agitated. Direct flexible laryngoscopy reveals a translucent, web-like fibrous sheet connecting the vocal cords anteriorly across the glottic aperture, occluding approximately 40% of the anterior laryngeal lumen.<span class='q-stem-bold'>Which of the following embryological mechanisms is responsible for the formation of this congenital laryngeal web?</span>",
    "a": [
      "Incomplete recanalization of the primitive laryngeal lumen during the 10th week",
      "Failure of the neural crest mesenchyme of the 4th arch to migrate into the arytenoid swellings",
      "Premature regression of the second pharyngeal arch cartilage (Reichert's cartilage)",
      "Defective lateral fusion of the right and left medial nasal prominences",
      "Aberrant longitudinal development of the tracheoesophageal septum"
    ],
    "c": 0,
    "r": "During normal laryngeal morphogenesis, rapid endodermal epithelial proliferation temporarily obliterates the laryngeal lumen. In the 10th week of gestation, this epithelial lamina undergoes recanalization via programmed apoptosis, forming the laryngeal ventricles and vocal folds. Incomplete recanalization leaves a persistent tissue bridge, usually at the level of the true vocal cords anteriorly, resulting in a congenital laryngeal web manifested by a hoarse cry and stridor.\n\nDistractor Breakdown: Option B: Defective 4th/6th arch neural crest migration results in severe cartilage agenesis or tracheobronchomalacia. Option C: The 2nd arch forms the stapes, styloid process, and lesser horn of the hyoid, having no role in glottic recanalization. Option D: Medial nasal prominence fusion forms the intermaxillary segment (philtrum and primary palate). Option E: Tracheoesophageal septum defects result in tracheoesophageal fistulae."
  },
  {
    "cat": 1,
    "q": "A 35-year-old male is brought to the trauma center following a high-speed motor vehicle collision where his chest impacted the steering wheel. He exhibits severe dyspnea, tachypnea (34/min), and localized chest wall contusions. During spontaneous breathing, a segment of the left anterior chest wall moves inward during inspiration and bulges outward during expiration.<span class='q-stem-bold'>Which of the following pathophysiological descriptions accurately defines this mechanical breathing abnormality?</span>",
    "a": [
      "Increased outward compliance of the thoracic cage due to isolated sternal fracture",
      "Paradoxical chest wall motion due to segmental fractures of at least 3 consecutive ribs in 2 places",
      "Asymmetric diaphragmatic excursion resulting from complete unilateral phrenic nerve transection",
      "Dynamic airway collapse caused by rupture of the membranous posterior trachealis muscle",
      "Mediastinal fluttering triggered by unilateral open sucking pneumothorax"
    ],
    "c": 1,
    "r": "The patient has a flail chest, defined by the fracture of &ge;3 contiguous ribs in &ge;2 separate locations (or rib fractures combined with sternal separation). This detaches an isolated segment of the thoracic cage from the remainder of the chest wall. During inspiration, the generation of negative intrathoracic pressure sucks the flail segment inward; during expiration, positive pleural pressure pushes the unstable segment outward. This paradoxical chest wall motion significantly increases the work of breathing and is typically complicated by underlying pulmonary contusion.\n\nDistractor Breakdown: Option A: Isolated single fractures do not create a free-floating segment capable of paradoxical breathing. Option C: Phrenic nerve palsy causes elevated hemidiaphragm with paradoxical upward diaphragmatic movement, not chest wall flail. Option D & E: Trachealis rupture or open pneumothorax causes air leaks and mediastinal shift, but not localized multi-segmental paradoxical chest wall instability."
  },
  {
    "cat": 1,
    "q": "A 26-year-old male sustains a penetrating knife wound to the right lateral chest wall, creating a 4 cm gaping defect in the thoracic cage. Air is heard audibly sucking in and out through the wound with each respiratory effort. Arterial blood gas reveals severe hypoxemia and respiratory acidosis.<span class='q-stem-bold'>Under these pathological conditions, which of the following values best characterizes the static intrapleural pressure within the affected right hemithorax?</span>",
    "a": [
      "Maintained at normal resting subatmospheric levels (-4 to -6 cmH2O)",
      "Equilibrates with atmospheric pressure (zero cmH2O transpulmonary pressure gradient)",
      "Exceeds atmospheric pressure by more than +20 cmH2O throughout inspiration",
      "Fluctuates between -15 cmH2O on inspiration and -8 cmH2O on expiration",
      "Becomes strongly negative due to unopposed diaphragmatic contraction"
    ],
    "c": 1,
    "r": "In an open (\"sucking\") pneumothorax, a defect in the chest wall directly communicates the intrapleural space with the external environment. As atmospheric air rushes in through the path of least resistance, the normally negative (subatmospheric) intrapleural pressure is lost and equilibrates with atmospheric pressure (intrapleural pressure becomes zero). Without a negative intrapleural pressure, transpulmonary pressure (P_alveolar - P_intrapleural) drops to zero, and the natural elastic recoil of the lung causes immediate complete ipsilateral lung collapse.\n\nDistractor Breakdown: Option A: Subatmospheric pressure is abolished as atmospheric air enters the pleural space. Option C: Persistent pressures >+20 cmH2O characterize a tension pneumothorax with a one-way ball-valve mechanism. Option D & E: Strongly negative pressures occur during vigorous inspiration against an occluded airway (Müller maneuver), not an open chest wall defect."
  },
  {
    "cat": 2,
    "q": "A 24-year-old elite triathlete performs maximal exercise testing on a cycle ergometer at high workload. At peak exertion, his cardiac output increases from a baseline of 5 L/min to 25 L/min. Pulmonary blood flow velocity increases substantially, reducing the transit time of erythrocytes through pulmonary capillaries from the resting 0.75 seconds down to approximately 0.22 seconds.<span class='q-stem-bold'>Under these conditions of extreme physiological stress or in the presence of alveolar-capillary thickening, which of the following describes the dynamics of pulmonary oxygen transfer?</span>",
    "a": [
      "Oxygen transfer remains strictly perfusion-limited because diffusion capacity increases linearly",
      "Oxygen transfer shifts from perfusion-limited to diffusion-limited due to incomplete equilibration",
      "Carbon dioxide transfer becomes diffusion-limited before oxygen due to lower solubility",
      "Alveolar-arterial (A-a) oxygen gradient narrows to zero as capillary recruitment peaks",
      "Pulmonary capillary transit time exceeds the minimum required equilibration threshold"
    ],
    "c": 1,
    "r": "Under normal resting conditions, oxygen is perfusion-limited: capillary blood PO2 completely equilibrates with alveolar PO2 within the first 0.25 seconds (one-third) of the 0.75-second capillary transit time. During strenuous exercise (or in diseases with alveolar membrane thickening like pulmonary fibrosis), transit time decreases dramatically (diffusion-limited, resulting in exercise-induced hypoxemia and an widened A-a gradient.\n\nDistractor Breakdown: Option A: Oxygen transfer does not remain perfusion-limited when transit time falls below the equilibration threshold. Option C: CO2 has a diffusing capacity ~20 times higher than O2 due to its high solubility, making O2 diffusion-limited long before CO2. Option D: The A-a gradient widens (increases), rather than narrowing to zero. Option E: Transit time drops below (not exceeds) the threshold necessary for complete equilibration."
  },
  {
    "cat": 2,
    "q": "Two medical students participate in a pulmonary physiology lab. Both subjects maintain an identical minute ventilation of 6,000 mL/min. Subject 1 breathes shallowly and rapidly at a tidal volume of 250 mL and a respiratory rate of 24 breaths/min. Subject 2 breathes deeply and slowly at a tidal volume of 600 mL and a respiratory rate of 10 breaths/min. Both have an anatomical dead space of 150 mL.<span class='q-stem-bold'>Which of the following physiological principles best explains why Subject 2 achieves significantly higher effective alveolar ventilation than Subject 1?</span>",
    "a": [
      "Slower breathing rates cause a physical decrease in anatomical dead space volume",
      "Larger tidal volumes minimize the fraction of each breath wasted in physiological dead space",
      "Rapid shallow breathing increases the diffusing capacity of the alveolar-capillary membrane",
      "High respiratory rates stimulate pulmonary surfactant secretion via vagal mechanoreceptors",
      "Slower breathing rates completely eliminate turbulent airflow in conducting airways"
    ],
    "c": 1,
    "r": "Alveolar ventilation is calculated as: $V_A = (V_T - V_D) \\times RR$. For Subject 1: $(250 - 150) \\times 24 = 2,400\\text{ mL/min}$. For Subject 2: $(600 - 150) \\times 10 = 4,500\\text{ mL/min}$. Although total minute ventilation ($V_E = V_T \\times RR$) is identical (6,000 mL/min), Subject 2 achieves almost double the effective alveolar ventilation because a larger tidal volume dilutes dead space, **decreasing the proportion of ventilation wasted in physiological dead space** and reducing the gap between minute ventilation and alveolar ventilation.\n\nDistractor Breakdown: Option A: Anatomical dead space is a fixed physical volume (~150 mL) determined by conducting airway geometry, not breathing frequency. Option C: Rapid shallow breathing does not increase membrane diffusing capacity. Option D & E: Surfactant and turbulent flow dynamics do not explain the quantitative difference in dead space fraction."
  },
  {
    "cat": 3,
    "q": "A 72-year-old male with severe COPD and a history of ischemic heart disease with frequent paroxysmal atrial fibrillation presents with acute worsening of breathlessness. His resting heart rate is 108/min. The clinical team requires an inhaled bronchodilator that will provide effective relief of bronchoconstriction while minimizing the risk of worsening sinus tachycardia or precipitating supraventricular tachyarrhythmias.<span class='q-stem-bold'>Which of the following inhaled bronchodilator agents has the lowest potential to cause cardiovascular arrhythmias in this patient?</span>",
    "a": [
      "Inhaled salbutamol (albuterol)",
      "Inhaled formoterol",
      "Inhaled ipratropium bromide",
      "Intravenous aminophylline",
      "Subcutaneous terbutaline"
    ],
    "c": 2,
    "r": "Ipratropium bromide is a quaternary ammonium Short-Acting Muscarinic Antagonist (SAMA). Because of its permanent positive charge, it is minimally absorbed across mucosal surfaces into the systemic circulation. By acting locally to block M3 muscarinic receptors in bronchial smooth muscle, it produces bronchodilation with **virtually no systemic antimuscarinic or chronotropic cardiac side effects**. In contrast, beta2-agonists (salbutamol, formoterol) and methylxanthines directly stimulate cardiac beta1/beta2 receptors, carrying significant risks of tachycardia and arrhythmias.\n\nDistractor Breakdown: Option A, B, & E: Beta2-agonists stimulate cardiac receptors and cause hypokalemia, both of which trigger tachyarrhythmias. Option D: Aminophylline inhibits phosphodiesterase and blocks adenosine receptors, possessing a narrow therapeutic index with high proarrhythmic potential."
  },
  {
    "cat": 3,
    "q": "A 16-year-old female with moderate persistent allergic asthma and seasonal allergic rhinitis asks her physician whether taking over-the-counter second-generation H1-receptor antihistamines (e.g., cetirizine) will improve her daily asthma control and reduce her frequency of wheezing exacerbations.<span class='q-stem-bold'>Which of the following immunological and pharmacological principles explains why H1 antihistamines are ineffective in the clinical management of bronchial asthma?</span>",
    "a": [
      "Airway mast cells do not synthesize or store preformed histamine granules",
      "Bronchoconstriction in asthma is mediated primarily by leukotrienes and other mediators rather than histamine",
      "Histamine H1 receptors are entirely absent from human bronchial smooth muscle membranes",
      "Second-generation antihistamines undergo rapid local enzymatic cleavage by airway epithelial peptidases",
      "Antihistamines paradoxically trigger the recruitment of eosinophils via major basic protein induction"
    ],
    "c": 1,
    "r": "Although histamine is released from mast cells during early acute allergen exposure, it plays only a minor, transient role in bronchospasm. The sustained bronchoconstriction, airway hyperresponsiveness, mucus hypersecretion, and tissue remodeling of asthma are driven primarily by **cysteinyl leukotrienes (LTC4, LTD4, LTE4)—which are 1,000 times more potent than histamine**—along with PGD2, PAF, and Th2 cytokines (IL-4, IL-5, IL-13). Consequently, selective **blockade of H1 receptors is ineffective** for asthma maintenance.\n\nDistractor Breakdown: Option A: Airway mast cells contain abundant histamine stored in preformed granules. Option C: H1 receptors are present on bronchial smooth muscle, but their activation contributes little to chronic asthma symptoms compared to leukotrienes. Option D & E: Antihistamines are not broken down by airway peptidases nor do they induce eosinophilia."
  },
  {
    "cat": 3,
    "q": "A 52-year-old female with severe adult-onset asthma refractory to high-dose inhaled corticosteroids undergoes endotypic phenotyping. Sputum cytology reveals 68% neutrophils and &lt;1% eosinophils. Serum total IgE is 18 IU/mL (normal &lt;100 IU/mL), and fractional exhaled nitric oxide (FeNO) is 12 ppb (normal &lt;25 ppb). Genetic testing shows no upregulation of IL-4 or IL-13 receptors.<span class='q-stem-bold'>Which of the following inflammatory features is characteristically associated with **Type 2-low (non-T2)** asthma rather than Type 2-high asthma?</span>",
    "a": [
      "Prominent eosinophilic airway infiltration mediated by interleukin-5",
      "Elevated fractional exhaled nitric oxide driven by interleukin-13",
      "High circulating serum IgE antibodies directed against aeroallergens",
      "Neutrophilic airway inflammation mediated by Th17 cells and interleukin-8",
      "Excellent clinical responsiveness to anti-IL-4/13 monoclonal antibodies"
    ],
    "c": 3,
    "r": "Asthma is classified into **Type 2-high (T2-high)** and **Type 2-low (non-T2)** endotypes. T2-high is driven by Th2 cells and ILC2s producing IL-4, IL-5, and IL-13, leading to eosinophilia, elevated FeNO, high IgE, and excellent response to corticosteroids and biologics (omalizumab, mepolizumab, dupilumab). In contrast, **Type 2-low asthma is characterized by neutrophilic or paucigranulocytic inflammation**, driven by Th1/Th17 pathways and cytokines like **IL-8, IL-17, and TNF-alpha**, and is notoriously resistant to standard steroid therapy.\n\nDistractor Breakdown: Options A, B, C, & E: Eosinophils, elevated FeNO, high IgE, and responsiveness to dupilumab are classic hallmarks of T2-high asthma, not T2-low asthma."
  },
  {
    "cat": 3,
    "q": "A 28-year-old male with aspirin-exacerbated respiratory disease (AERD) presents with recurrent nasal polyps, severe asthma attacks following NSAID ingestion, and chronic rhinosinusitis. His physician prescribes an oral medication that directly blocks the biochemical conversion of arachidonic acid to 5-hydroperoxyeicosatetraenoic acid (5-HPETE).<span class='q-stem-bold'>Which of the following pharmacological agents acts through this exact enzymatic inhibitory mechanism?</span>",
    "a": [
      "Montelukast",
      "Zafirlukast",
      "Zileuton",
      "Pranlukast",
      "Roflumilast"
    ],
    "c": 2,
    "r": "Leukotriene modifiers are divided into two distinct mechanistic classes: 1. **5-Lipoxygenase (5-LO) inhibitors:** **Zileuton** is the sole approved agent in this class; it directly inhibits the 5-LO enzyme, preventing the synthesis of all leukotrienes (LTB4, LTC4, LTD4, LTE4). 2. **CysLT1 receptor antagonists:** Montelukast, zafirlukast, and pranlukast selectively block the CysLT1 receptor downstream, without inhibiting 5-LO.\n\nDistractor Breakdown: Option A, B, & D: Montelukast, zafirlukast, and pranlukast are CysLT1 receptor antagonists; they do not inhibit 5-lipoxygenase enzyme synthesis. Option E: Roflumilast is a phosphodiesterase-4 (PDE-4) inhibitor used in severe COPD."
  },
  {
    "cat": 3,
    "q": "A 58-year-old male with severe chronic alcohol use disorder is found unresponsive on the floor of his apartment. Four days later, he presents to the emergency department with high fever, foul-smelling putrid sputum, and right-sided pleuritic chest pain. Physical examination reveals poor dentition with heavy periodontal disease. Chest CT demonstrates a thick-walled cavitary lesion containing an air-fluid level located in the superior segment of the right lower lobe.<span class='q-stem-bold'>Which of the following bacterial genera is the most common anaerobic pathogen implicated in this patient's necrotizing lung abscess?</span>",
    "a": [
      "Pseudomonas",
      "Bacteroides",
      "Mycoplasma",
      "Legionella",
      "Streptococcus"
    ],
    "c": 1,
    "r": "The patient has an **aspiration lung abscess**, classic in alcoholics and patients with altered consciousness or compromised gag reflexes. Microaspiration of oral flora from periodontal crevices seeds dependent segments (superior segment of lower lobes or posterior segment of upper lobes). The characteristic **putrid, foul-smelling sputum** and cavitation are pathognomonic for **oral anaerobes**, predominantly ***Bacteroides* species (e.g., *B. melaninogenicus / Prevotella* and *B. fragilis*)**, *Peptostreptococcus*, and *Fusobacterium nucleatum*.\n\nDistractor Breakdown: Option A: Pseudomonas aeruginosa is an aerobic Gram-negative rod causing ventilator-associated pneumonia, not putrid anaerobic abscesses. Option C & D: Mycoplasma and Legionella are atypical pathogens causing non-cavitary interstitial or lobar pneumonia. Option E: Streptococcus pneumoniae causes typical lobar consolidation with rust-colored sputum, rarely causing cavitary abscesses."
  },
  {
    "cat": 3,
    "q": "A 49-year-old female undergoing allogeneic stem cell transplantation for refractory leukemia develops severe neutropenia (ANC 50/mcL). On day 21, she develops persistent high fever, cough, and multiple tender, erythematous skin nodules with central necrotic ecthyma-gangrenosum-like eschars. Blood cultures are positive for a filamentous hyaline mold. Microscopic evaluation demonstrates branched hyphae with characteristic curved, multiseptate, sickle- or canoe-shaped macroconidia.<span class='q-stem-bold'>Which of the following opportunistic fungi is the causative agent of this disseminated hyalohyphomycosis?</span>",
    "a": [
      "Aspergillus fumigatus",
      "Cryptococcus neoformans",
      "Fusarium solani",
      "Rhizopus arrhizus",
      "Histoplasma capsulatum"
    ],
    "c": 2,
    "r": "***Fusarium* species** are opportunistic hyaline molds (hyalohyphomycosis) that cause severe, often fatal disseminated disease in severely neutropenic hematology patients. Unlike *Aspergillus* (which rarely yields positive blood cultures), ***Fusarium* characteristically produces positive blood cultures in &gt;50% of disseminated cases** and metastatic necrotic targetoid cutaneous lesions. Microscopically, it is recognized by its pathognomonic **sickle-, boat-, or canoe-shaped, multicellular macroconidia**.\n\nDistractor Breakdown: Option A: Aspergillus produces dichotomous 45° acute branching hyphae with conidiophores bearing phialides; blood cultures are almost always negative. Option B: Cryptococcus is an encapsulated monomorphic budding yeast, not a mold with macroconidia. Option D: Rhizopus (Mucorales) produces broad, non-septate, right-angle (90°) ribbon-like hyphae. Option E: Histoplasma is a dimorphic fungus exhibiting intracellular oval yeasts in macrophages."
  },
  {
    "cat": 0,
    "q": "A 64-year-old female undergoes transoral surgical resection of a pyriform sinus tumor. During dissection along the lateral wall of the laryngeal vestibule, a nerve piercing the thyrohyoid membrane alongside the superior laryngeal artery is accidentally transected. Postoperatively, the patient's voice is unaffected and vocal cord abduction/adduction is fully preserved, but she repeatedly aspirates thin liquids and fails to cough when foreign particles enter the supraglottic laryngeal vestibule.<span class='q-stem-bold'>Which of the following nerves was transected during the procedure?</span>",
    "a": [
      "Recurrent laryngeal nerve",
      "External branch of the superior laryngeal nerve",
      "Internal branch of the superior laryngeal nerve",
      "Pharyngeal branch of the glossopharyngeal nerve",
      "Hypoglossal nerve motor trunk"
    ],
    "c": 2,
    "r": "The **internal branch of the superior laryngeal nerve** (a branch of CN X) pierces the thyrohyoid membrane together with the superior laryngeal artery. It is purely sensory and carries general sensation from the laryngeal mucosa **above the vocal cords (the supraglottic region and vocal folds)**, serving as the essential afferent limb of the cough reflex to prevent aspiration. Transection abolishes the protective cough reflex without causing motor paralysis of the intrinsic laryngeal muscles.\n\nDistractor Breakdown: Option A: The recurrent laryngeal nerve provides sensory innervation below the vocal cords and motor innervation to all intrinsic laryngeal muscles except the cricothyroid. Option B: The external branch of the superior laryngeal nerve provides motor innervation to the cricothyroid muscle (tenses vocal cords). Option D: Glossopharyngeal branches innervate the oropharynx, base of tongue, and gag reflex afferent. Option E: The hypoglossal nerve is the motor nerve to intrinsic and extrinsic tongue muscles."
  },
  {
    "cat": 0,
    "q": "A 14-year-old boy presents to the clinic with recurrent epistaxis from the anterior nasal septum. Anterior rhinoscopy identifies active bleeding from a dilated mucosal vascular network located in Little's area (Kiesselbach's plexus). The attending physician reviews the four anastomosing arterial sources supplying this region.<span class='q-stem-bold'>Which of the following arteries supplying this vascular plexus is a direct branch of the **internal carotid artery** system?</span>",
    "a": [
      "Sphenopalatine artery",
      "Greater palatine artery",
      "Superior labial artery (septal branch)",
      "Anterior ethmoidal artery",
      "Ascending pharyngeal artery"
    ],
    "c": 3,
    "r": "Kiesselbach's plexus (Little's area) on the anteroinferior nasal septum is the site of >90% of epistaxis episodes. It is formed by an anastomosis of four arteries: 1. **Anterior ethmoidal artery** (from the ophthalmic artery, which is a branch of the **Internal Carotid Artery**). 2. Sphenopalatine artery (from the maxillary artery, external carotid). 3. Greater palatine artery (from the maxillary artery, external carotid). 4. Superior labial artery (from the facial artery, external carotid). The anterior ethmoidal artery is the unique participant supplied via the internal carotid artery.\n\nDistractor Breakdown: Options A, B, & C: The sphenopalatine, greater palatine, and superior labial arteries are all derived from the External Carotid Artery system. Option E: The ascending pharyngeal artery is an external carotid branch that does not contribute to Kiesselbach's plexus."
  },
  {
    "cat": 2,
    "q": "A 31-year-old G2P1 at 39 weeks of gestation undergoes acute induction of labor. Shortly after artificial rupture of membranes, she experiences sudden, catastrophic breathlessness, cyanosis, profound hypotension (BP 60/40 mmHg), and generalized tonic-clonic seizures, followed by profuse hemorrhage from her episiotomy wound and IV insertion sites. The clinical team immediately suspects Amniotic Fluid Embolism (AFE).<span class='q-stem-bold'>Which of the following clinical or laboratory features is **NOT** a recognized pathological manifestation of Amniotic Fluid Embolism?</span>",
    "a": [
      "Sudden acute hypoxemic respiratory failure and pulmonary edema",
      "Severe cardiogenic shock and hemodynamic collapse",
      "Disseminated intravascular coagulation with consumptive hemorrhage",
      "Secondary maternal absolute polycythemia (erythrocytosis)",
      "Neurological manifestations including seizures and coma"
    ],
    "c": 3,
    "r": "**Amniotic Fluid Embolism (AFE)** is an acute, fulminant peripartum catastrophe characterized by the classic tetrad of: 1. Acute respiratory distress and profound hypoxemia. 2. Hemodynamic collapse and cardiogenic shock. 3. Consumptive coagulopathy / DIC with massive hemorrhage. 4. Neurological insult (seizures, altered mental status, coma). Because AFE is an acute, catastrophic event occurring over minutes to hours, **maternal polycythemia (erythrocytosis) does NOT occur** (polycythemia requires weeks of chronic hypoxia to stimulate renal erythropoietin).\n\nDistractor Breakdown: Options A, B, C, & E: Acute hypoxemic failure, cardiogenic shock, DIC with consumptive bleeding, and seizures are hallmark recognized manifestations of AFE."
  },
  {
    "cat": 2,
    "q": "A clinical physiologist presents a lecture on systemic acid-base buffering mechanisms following metabolic or respiratory disturbances. He contrasts the rapid chemical buffering by extracellular bicarbonate, intracellular hemoglobin/proteins, and the immediate ventilatory response of the respiratory center with the slower organ-based regulatory mechanisms.<span class='q-stem-bold'>Which of the following organ systems provides the most powerful, complete, but slowest-acting physiological mechanism for long-term compensation of acid-base disorders?</span>",
    "a": [
      "Pulmonary alveolar ventilation via carbon dioxide elimination",
      "Hepatic ureagenesis and ammonium transamination",
      "Renal regulation via hydrogen excretion and bicarbonate reabsorption",
      "Skeletal bone mineralization via calcium phosphate dissolution",
      "Gastrointestinal secretion of hydrochloric acid into gastric juice"
    ],
    "c": 2,
    "r": "The body maintains acid-base balance across three progressive lines of defense: 1. **Chemical buffers (bicarbonate, phosphate, proteins):** Act in fractions of a second. 2. **Respiratory center (CO2 blow-off or retention):** Acts within minutes to hours. 3. **Renal mechanism:** The **slowest but most definitive and powerful buffer system**. It requires **2 to 5 days** to achieve maximal compensation by modulating H+ excretion, reabsorbing filtered HCO3-, and generating new bicarbonate via ammoniagenesis ($NH_4^+$) and titratable acid ($H_2PO_4^-$).\n\nDistractor Breakdown: Option A: The respiratory system acts rapidly (minutes to hours), but cannot fully restore pH to normal and cannot eliminate fixed metabolic acids. Option B, D, & E: The liver, bones, and GI tract contribute to buffering, but the kidneys represent the ultimate physiological regulatory system for bicarbonate homeostasis."
  },
  {
    "cat": 3,
    "q": "A 50-year-old male with chronic bronchitis presents with persistent productive cough and complaints of thick, tenacious, stringy sputum that is extremely difficult to expectorate. His physician prescribes oral ambroxol tablets as adjunctive mucolytic therapy.<span class='q-stem-bold'>Which of the following biochemical actions describes the primary mechanism by which ambroxol reduces sputum viscosity?</span>",
    "a": [
      "Depolymerization and breakdown of acidic mucopolysaccharide fibers in bronchial secretions",
      "Irreversible covalent cleavage of disulfide bridges between mucin monomers via free sulfhydryl groups",
      "Direct enzymatic degradation of extracellular DNA polymers derived from autolyzed neutrophils",
      "Osmotic extraction of water from the submucosa via selective activation of apical CFTR channels",
      "Competitive inhibition of neutral endopeptidase preventing breakdown of substance P"
    ],
    "c": 0,
    "r": "**Ambroxol** (the active metabolite of bromhexine) is a mucolytic agent that acts by **depolymerizing and breaking down acidic mucopolysaccharide fibers** within bronchial secretions. Additionally, ambroxol stimulates alveolar type II pneumocytes to synthesize and secrete pulmonary surfactant, which reduces the adhesiveness of secretions against the mucosal surface, facilitating mucociliary transport and expectoration.\n\nDistractor Breakdown: Option B: Cleavage of disulfide bonds via free sulfhydryl groups is the mechanism of N-acetylcysteine (NAC). Option C: Enzymatic degradation of extracellular neutrophil DNA is the mechanism of recombinant human dornase alfa (DNase). Option D: Inhaled hypertonic saline draws water osmotically, not ambroxol. Option E: Neutral endopeptidase inhibition is related to neprilysin inhibitors, not mucolytics."
  },
  {
    "cat": 3,
    "q": "A 32-year-old female presents with a 2-week history of an exhausting, dry, hacking non-productive cough following an uncomplicated viral URI. Physical examination and chest radiograph are completely normal. She works as a high-school bus driver and requires an effective antitussive that does not cause central sedation, respiratory depression, or physical dependence, and has no structural or chemical relationship to opioid alkaloids.<span class='q-stem-bold'>Which of the following centrally acting non-opioid antitussive agents is most appropriate for this patient?</span>",
    "a": [
      "Codeine phosphate syrup",
      "Pholcodine linctus",
      "Butamirate citrate",
      "Hydrocodone polistirex",
      "Morphine sulfate drops"
    ],
    "c": 2,
    "r": "**Butamirate citrate** (Sinecod) is a widely prescribed **centrally acting non-opioid antitussive**. It acts directly on the medullary cough center to suppress dry, irritative cough without possessing any structural relationship to opium or morphine alkaloids. It is non-sedating, does not depress the respiratory drive, does not induce tolerance or physical dependence, and exhibits mild non-specific anticholinergic and bronchodilating activity.\n\nDistractor Breakdown: Options A, B, D, & E: Codeine, pholcodine, hydrocodone, and morphine are opioid antitussives that carry risks of sedation, constipation, respiratory depression, and dependence."
  },
  {
    "cat": 0,
    "q": "A medical student performs physical examination on a patient suspected of having right middle lobe pneumonia. To delineate the surface anatomical boundaries of the right middle lobe, she must correctly locate the horizontal fissure on the anterior and lateral thoracic wall.<span class='q-stem-bold'>Which of the following thoracic surface landmarks accurately corresponds to the anatomical course of the **horizontal fissure of the right lung**?</span>",
    "a": [
      "Begins at the spine of the T3 vertebra posteriorly and descends obliquely to the 6th costochondral junction",
      "Begins at the 4th costal cartilage anteriorly and extends horizontally laterally to meet the oblique fissure at the 5th rib in the midaxillary line",
      "Follows the inferior border of the 2nd rib horizontally from the sternal angle to the midclavicular line",
      "Extends vertically from the 1st costal cartilage downward along the lateral sternal border to the 7th costal margin",
      "Originates at the T6 spinous process posteriorly and traverses horizontally across the scapular spine"
    ],
    "c": 1,
    "r": "The right lung has two fissures: the oblique fissure and the horizontal fissure. The **horizontal fissure** separates the superior lobe from the middle lobe. Surface anatomically, it begins anteriorly at the **4th costal cartilage** (at the level of the right sternal border) and passes horizontally laterally around the chest wall to intersect the oblique fissure near the **5th rib (or 6th rib) in the midaxillary line**.\n\nDistractor Breakdown: Option A: Describes the course of the oblique fissure (from T3/T4 spinous process posteriorly down to the 6th costochondral junction anteriorly). Option C, D, & E: Do not correspond to standard thoracic surface fissure landmarks."
  },
  {
    "cat": 0,
    "q": "A 45-year-old male develops a localized inflammatory subdiaphragmatic abscess following a perforated appendectomy. The abscess is located adjacent to the peripheral, costal muscular rim of the right hemidiaphragm. The patient complains of severe, sharp, localized abdominal and thoracic pain referred along the right lower costal margin and anterolateral abdominal wall.<span class='q-stem-bold'>Which of the following nerves carries general sensory pain afferents from the **peripheral muscular rim and adjacent parietal peritoneum/pleura of the diaphragm**?</span>",
    "a": [
      "Phrenic nerve (C3–C5 roots)",
      "Lower six intercostal and subcostal nerves (T7–T12)",
      "Vagus nerve (CN X sensory fibers)",
      "Iliohypogastric and ilioinguinal nerves (L1)",
      "Greater splanchnic sympathetic nerves (T5–T9)"
    ],
    "c": 1,
    "r": "The diaphragm has dual sensory innervation: 1. **Central tendon and mediastinal/central diaphragmatic pleura/peritoneum:** Innervated by the **phrenic nerve (C3, C4, C5)**; pain here is referred to the **ipsilateral shoulder tip / supraclavicular region (C4 dermatome)**. 2. **Peripheral muscular rim and costal diaphragmatic pleura/peritoneum:** Innervated by the **lower 6 intercostal and subcostal nerves (T7–T12)**; pain here is referred locally to the **thoracic cage and anterolateral abdominal wall (T7–T12 dermatomes)**.\n\nDistractor Breakdown: Option A: The phrenic nerve supplies motor innervation to the entire diaphragm and sensory innervation to the central tendon (referring pain to the shoulder tip). Option C: The vagus nerve does not provide somatosensory innervation to the diaphragmatic parietal pleura. Option D & E: Iliohypogastric/ilioinguinal nerves and splanchnic nerves do not innervate the diaphragm."
  },
  {
    "cat": 0,
    "q": "A pathologist examines a cross-section of the human cervical trachea. She identifies 16 to 20 C-shaped hyaline cartilage rings that maintain patency of the anterior and lateral walls. The posterior wall is devoid of cartilage and bridged by a fibroelastic membrane containing a band of transverse smooth muscle fibers directly abutting the anterior esophageal wall.<span class='q-stem-bold'>What is the anatomical name of this posterior smooth muscle band, and which autonomic pathway stimulates its contraction during the explosive phase of coughing?</span>",
    "a": [
      "Vocalis muscle, stimulated by postganglionic sympathetic cervical fibers",
      "Cricopharyngeus muscle, stimulated by somatic recurrent laryngeal motor axons",
      "Trachealis muscle, stimulated by parasympathetic vagal fibers",
      "Thyroarytenoid muscle, stimulated by external superior laryngeal fibers",
      "Sternothyroid muscle, stimulated by ansa cervicalis motor branches"
    ],
    "c": 2,
    "r": "The posterior gap of the C-shaped tracheal cartilages is bridged by the **trachealis muscle**, composed of transverse smooth muscle bundles embedded in a fibroelastic membrane. Parasympathetic innervation from the **vagus nerve (recurrent laryngeal nerve)** stimulates trachealis contraction. During forced expiration and coughing, active contraction of the trachealis narrows the tracheal lumen by up to 40%, which markedly increases linear airflow velocity (Bernoulli effect), dislodging mucus and foreign particles.\n\nDistractor Breakdown: Option A, B, & D: Vocalis, cricopharyngeus, and thyroarytenoid are striated skeletal muscles of the larynx and pharynx, not the tracheal wall. Option E: Sternothyroid is an infrahyoid strap muscle in the anterior neck."
  },
  {
    "cat": 3,
    "q": "An industrial worker accidentally inhales concentrated ammonia fumes and sulfur dioxide vapor. Within seconds, he develops intense substernal airway irritation, severe coughing spasms, reflex bronchoconstriction, and rapid shallow tachypneic breathing.<span class='q-stem-bold'>Which of the following sensory receptors located within the airway mucosal epithelial lining is primarily responsible for triggering this protective reflex response?</span>",
    "a": [
      "Slowly adapting pulmonary stretch receptors in bronchial smooth muscle",
      "Rapidly adapting irritant receptors (I-receptors) located between epithelial cells",
      "Juxtacapillary (J-receptors) embedded within alveolar capillary walls",
      "Glomus cells situated within the carotid body bifurcations",
      "Central chemosensitive neurons located on the ventrolateral medulla"
    ],
    "c": 1,
    "r": "**Irritant receptors (I-receptors)** are **rapidly adapting sensory nerve endings** located between epithelial cells lining the conducting airways (trachea, bronchi, and large bronchioles). They are stimulated by noxious gases (ammonia, cigarette smoke, SO2), chemical irritants, cold air, and histamine. Sensory afferents travel via **myelinated vagal fibers** to trigger reflex **coughing, sneezing, bronchoconstriction, and hyperpnea/tachypnea**.\n\nDistractor Breakdown: Option A: Slowly adapting stretch receptors are located in airway smooth muscle and mediate the Hering-Breuer inflation reflex. Option C: J-receptors (C-fiber endings) lie adjacent to alveolar capillaries and respond to pulmonary engorgement/edema (causing dyspnea in heart failure). Option D & E: Carotid and central chemoreceptors monitor blood gases (PaO2, PaCO2, pH), not mechanical or surface chemical airway irritants."
  },
  {
    "cat": 2,
    "q": "During mechanical ventilation of an anesthetized 30-year-old patient undergoing abdominal surgery, the ventilator accidentally delivers an excessively large tidal volume of 1,400 mL (normal resting tidal volume ~500 mL). Immediately, spontaneous inspiratory diaphragmatic efforts cease and expiration is prolonged.<span class='q-stem-bold'>Which of the following physiological reflexes was activated by this extreme lung distension?</span>",
    "a": [
      "The Bainbridge reflex stimulating sinus node tachycardia",
      "The Hering-Breuer inflation reflex terminating inspiration to prevent overdistension",
      "The diving reflex producing profound peripheral vasoconstriction",
      "The Bezold-Jarisch reflex inducing profound hypotension and bradycardia",
      "The Cushing reflex triggering hypertension and irregular breathing"
    ],
    "c": 1,
    "r": "The **Hering-Breuer inflation reflex** is a protective negative-feedback reflex. When the lungs are inflated to large tidal volumes (typically **&gt;1,000 mL to 1,500 mL** in humans, or >3 times normal tidal volume), **slowly adapting pulmonary stretch receptors** embedded within the smooth muscle layer of small airways are activated. These receptors send inhibitory afferent impulses via **myelinated vagus nerve (CN X)** fibers to the dorsal respiratory group (DRG) in the medulla, switching off the inspiratory ramp and preventing mechanical overinflation and alveolar barotrauma.\n\nDistractor Breakdown: Option A: The Bainbridge reflex increases heart rate in response to elevated right atrial venous pressure. Option C: The diving reflex triggers bradycardia and peripheral vasoconstriction upon facial immersion in cold water. Option D: The Bezold-Jarisch reflex causes bradycardia and hypotension in response to ventricular chemical or mechanical stimulation. Option E: The Cushing reflex is the triad of hypertension, bradycardia, and irregular respiration seen with elevated intracranial pressure."
  },
  {
    "cat": 1,
    "q": "A biomechanics researcher uses three-dimensional kinematic motion analysis to evaluate thoracic cage expansion during vigorous inspiration. She observes that elevation of the upper true ribs (ribs 2 through 6) primarily pushes the sternum upward and forward, whereas elevation of the lower false ribs (ribs 7 through 10) causes the lateral curved margins of the ribs to swing outward and upward.<span class='q-stem-bold'>Which of the following pairs correctly identifies the biomechanical motion and resulting dimensional increase produced by the movement of **ribs 2 through 6**?</span>",
    "a": [
      "Bucket-handle movement, increasing the lateral transverse diameter of the thoracic cage",
      "Pump-handle movement, increasing the anteroposterior (AP) diameter of the thoracic cage",
      "Caliper movement, increasing the vertical dimension of the thoracic cavity",
      "Piston movement, increasing the intrathoracic subatmospheric negative pressure",
      "Torsion movement, decreasing the costochondral compliance of the rib cage"
    ],
    "c": 1,
    "r": "Thoracic cage expansion during inspiration occurs across distinct anatomical axes: 1. **Upper ribs (ribs 2 to 6):** Rotate around a transverse axis passing through the costovertebral and costotransverse joints. Elevation pushes the sternum upward and forward like a water pump handle (**\"pump-handle movement\"**), which primarily **increases the anteroposterior (AP) diameter** of the thorax. 2. **Lower ribs (ribs 7 to 10):** Rotate around an anteroposterior axis. The lateral middle portions of the ribs swing outward and upward (**\"bucket-handle movement\"**), which primarily **increases the transverse (lateral) diameter** of the thorax.\n\nDistractor Breakdown: Option A: The bucket-handle movement is performed by lower ribs (7–10) and increases transverse diameter, not the pump-handle motion of ribs 2–6. Option C & D: Vertical dimension is increased by diaphragmatic contraction (piston-like descent), while caliper movement applies to floating ribs (11–12). Option E: Torsion is an internal strain, not a kinematic classification of chest wall expansion."
  }
];
