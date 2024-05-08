export interface DataType {
  slug: string;
  time: string;
  heading: string;
  heading2: string;
  date: string;
  imgSrc: string;
  authors: string;
  content: string;
}

export const postData: DataType[] = [
  {
    slug: 'crosscare-intro',
    time: '3 min',
    heading: 'What is Cross-Care?',
    heading2: 'Start Here',
    authors: 'BittermanLab',
    date: 'April 30, 2023',
    imgSrc: '/home.png',
    content: `
    ## Cross-Care
    Cross-Care is a **research** initiative that explores the world of large language models (LLMs), specifically focusing on their applications in healthcare.

    ### The Importance of Benchmarks
    Benchmarks play a crucial role in evaluating the performance, limitations, and robustness of LLMs. Well-known benchmarks like GLUE and SuperGLUE have been foundational in assessing language understanding and task performance. However, the challenges today go beyond these scopes, touching on aspects like domain knowledge, safety, hallucinations, and biases, especially in sensitive areas like healthcare. These issues are crucial because they can influence disparities in healthcare outcomes and the quality of care delivered.

    ### Investigating Representational Biases
    Our research specifically targets representational biases in LLMs concerning medical information. We analyze how biases in the data used to train these models can affect their outputs, particularly how diseases are associated with different demographic groups. By studying data from "The Pile," a large dataset used for training LLMs, we examine these biases and their impact on model behavior.

    ### Bridging the Gap Between Model Perceptions and Reality
    We compare the model likelihoods of disease across demographic groups to actual disease prevalences in the United States among various demographic groups. This comparison helps us understand the discrepancies between how models perceive the world and the real epidemiological data.

    ### Contributions and Tools for the Community
    Our work contributes to the field by:
    - Analyzing the associations between demographic groups and disease keywords in training datasets.
    - Examining how these biases are represented across different models, regardless of their size or architecture.
    - Comparing model-derived perceptions to real-world data to spotlight the inconsistencies.

    This website ( [crosscare.net](https://crosscare.net) ), allows users to explore this data further and download detailed findings for use in further research on model interpretability and robustness.

    This research not only illuminates the biases present in LLMs but also equips researchers and practitioners with the necessary tools to develop more equitable and effective NLP systems for healthcare.

    [Continue reading about what we found in language models training data...](https://crosscare.net/blog/pile-counts)
    `
  },
  {
    slug: 'pile-counts',
    time: '7 min',
    heading: 'Co-occurrences in the Pile Dataset',
    heading2: 'Subgroup-Disease Associations',
    authors: 'BittermanLab',
    date: 'April 29, 2023',
    imgSrc: '/crosscare-flowchart-cropped.png',
    content: `
    ## Pile Dataset Analysis
    Our first step was to look for how common the co-occurrences of biomedical keywords were within the Pile dataset.

    ### Datasets
    "The Pile" is an 825 GB English text corpus designed for pre-training autoregressive LLMs, the same style as chatGPT. Our analysis builds on previous works to count how often a specific demographic keyword is mentioned near a disease keyword. We repeat this process throughout the whole of the dataset for different diseases and demographic words to get the final totals across different window sizes. In addition, we collected Real-world prevalence using the National Health Interview Survey results.

    ![Workflow](../crosscare-flowchart-cropped.png)

    ### Findings
    - **Variation Across Windows**: Our analysis showed consistent disease rankings across different token window sizes (50, 100, and 250). This consistency confirms the robustness of our findings.
    - **Demographic Distributions**: We observed notable disparities in the dataset's representation of different demographic groups compared to real-world disease prevalence data. For instance, White individuals were overrepresented, while Pacific Islanders and Indigenous groups were underrepresented.

    ![Disease Ranking by Demographic](../disease_rank_demographic.png) "_Comparison of disease rankings between the Pile, LLM logits, and real-world data._"

    Visit our project page at [Cross-Care Downloads](https://crosscare.net/downloads) to explore our methods and results in detail and access the full data set.

    [Continue reading about what models thought was the most common ...](/blog/logits-controlled)
    `
  },
  {
    slug: 'logits-controlled',
    time: '5 min',
    heading: 'Model Predictions',
    heading2: 'Data → Predictions!',
    authors: 'BittermanLab',
    date: 'April 30, 2024',
    imgSrc: '/pythia_mamba_top_count_match.png',
    content: `
    ## Looking at Logits
    Here, we look at how different models (Pythia/Mamba) rank diseases based on demographic factors like gender and race.

    ### Logits Rank vs Co-occurrence
    We compared two methods: one based on the model's internal calculations (logits), and the other based on how often diseases and demographics appear together in a large dataset called ThePile.

    The stacked bar chart below shows how often certain genders and races are associated with different diseases. The black line indicates how often the model's top-ranked demographic matches the demographic most frequently associated with each disease in ThePile. We found that as the models got bigger, they became less accurate in reflecting the real-world distribution of demographics.

    ![Top ranked gender and race subgroups across diseases](../pythia_mamba_top_count_match.png)

    ### Logits Rank vs Co-occurrence vs Real Prevalence
    In this part, we compared the model's rankings with real-world prevalence data. Surprisingly, we found that the model's rankings did not match up with how often diseases actually occur in different demographic groups. This suggests that the models may not be accurately reflecting real-world medical knowledge.

    However, we did find that the models tended to align better with ThePile's co-occurrence data than with real-world prevalence. This means that while the models weren't great at predicting real-world disease prevalence, they were somewhat better at reflecting how often diseases and demographics appear together in large datasets.

    ![Kendall's tau of mamba and pythia's logits vs co-occurrence, and real prevalence](../pythia_mamba_real_logits_pile.png)

    ### Rank vs Co-occurrence Counts
    Finally, we looked at how the frequency of diseases mentioned in ThePile affected the model's performance. We found that the models performed similarly across different quartiles of disease co-occurrence counts. This suggests that the model's accuracy didn't improve based on how often diseases were mentioned in the dataset.

    For more detailed insights and to access our full dataset, please visit our project page at [Cross-Care Downloads](https://crosscare.net/downloads).

    [Continue reading about Logits and Co-Occurrences](/blog/logits-wild)
    `
  },
  {
    slug: 'logits-wild',
    time: '5 min',
    heading: 'Models in the Wild',
    heading2: 'Big Models vs Real World Data?',
    authors: 'BittermanLab',
    date: 'April 29, 2024',
    imgSrc: '/llama_top_count_race_gender.png',
    content: `
    ## Models in the Wild
    In this section, we delve into how various models perform in real-world scenarios, considering factors like size, alignment method, and language.

    ### Variation Across Alignment Strategies
    We examined how different alignment strategies affected the performance of the LLama2 70b series models concerning race and gender. Surprisingly, none of the alignment methods or in-domain continued pre-training improved the base models' accuracy in reflecting real-world prevalence. In fact, some alignment strategies seemed to influence the models' decisions in unexpected ways.

    We observed similar trends across different models, such as Mistral and Qwen, where alignment methods didn't significantly alter the models' rankings of races or genders. However, models that underwent specific alignment methods or continued pre-training on medical domain data showed more noticeable variations in their rankings.

    ![Top ranked gender and race subgroups across diseases using the LLama series](../llama_top_count_race_gender.png)

    ### Models' Representation Across Different Languages
    We also noticed differences in how models represented genders and races across different languages. For example, models generally showed a preference toward females in Chinese but males in French. Similarly, the racial preferences varied depending on the language, with templates in English and Spanish favoring Black race, while those in Chinese and French favored White race.

    Interestingly, the Qwen1.5 models, which were predominantly trained on English and Chinese data, exhibited strong biases toward Asian race in Chinese and English templates, and Black race in Spanish and French templates.

    Despite attempts to correct these biases through alignment methods or continued pre-training on in-domain text, the underlying biases persisted, highlighting the complexity of mitigating biases in language models.
    `
  }
];
