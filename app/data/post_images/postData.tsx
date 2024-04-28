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
      time: "5 min",
      heading: 'What is CrossCare?',
      heading2: 'Start Here',
      authors: "BittermanLab",
      date: 'April 30, 2023',
      imgSrc: '/article.png',
      content: `
      ## What is CrossCare?

      CrossCare is a groundbreaking research initiative that dives deep into the world of large language models (LLMs), specifically focusing on their applications in healthcare. This field has seen incredible growth and is pivotal in advancing how we process and understand natural language across various applications.

      ### The Importance of Benchmarks

      Benchmarks play a crucial role in evaluating the performance, limitations, and robustness of LLMs. Well-known benchmarks like GLUE and SuperGLUE have been foundational in assessing language understanding and task performance. However, the challenges today go beyond these scopes, touching on aspects like domain knowledge, safety, hallucinations, and biases, especially in sensitive areas like healthcare. These issues are crucial because they can influence disparities in healthcare outcomes and the quality of care delivered.

      ### Investigating Representational Biases

      Our research specifically targets representational biases in LLMs concerning medical information. We analyze how biases in the data used to train these models can affect their outputs, particularly how diseases are associated with different demographic groups. By studying data from "The Pile," a large dataset used for training LLMs, we examine these biases and their impact on model behavior.

      ### Bridging the Gap Between Model Perceptions and Reality

      We compare the biases we find in the models to actual disease prevalences in the United States among various demographic groups. This comparison helps us understand the discrepancies between how models perceive the world and the real epidemiological data.

      ### Contributions and Tools for the Community

      Our work contributes to the field by:
      - Analyzing the associations between demographic groups and disease keywords in training datasets.
      - Examining how these biases are represented across different models, regardless of their size or architecture.
      - Comparing model-derived perceptions to real-world data to spotlight the inconsistencies.

      We also offer a web app, available at [crosscare.net](https://crosscare.net), which allows users to explore this data further and download detailed findings for use in further research on model interpretability and robustness.

      This research not only illuminates the biases present in LLMs but also equips researchers and practitioners with the necessary tools to develop more equitable and effective NLP systems for healthcare.

      [Continue reading about Co-Occurrences](/blog/pile-counts)
      `,
  },
  {
    slug: 'pile-counts',
    time: "7 min",
    heading: 'Co-occurrences in the Pile Dataset',
    heading2: 'Subgroup-Disease Associations',
      authors: "BittermanLab",
      date: 'April 29, 2023',
      imgSrc: '/article.png',
      content: `
      In our latest research, we delve into the co-occurrences of biomedical keywords within the Pile dataset. Here's an outline of our methods and key findings:

      ### Datasets

      We utilized the deduplicated version of "The Pile," an 825 GB English text corpus designed for pre-training autoregressive LLMs. This dataset is particularly suitable for our study due to its open access nature and comprehensive coverage of biomedical terms.

      ### Co-occurrence Pipeline Updates

      Our analysis builds on previous methodologies with several enhancements:
      - **Updated Keywords**: We expanded the keyword list to include a wider range of medical and demographic terms, ensuring comprehensive coverage.
      - **Multithreading**: To handle the increased data volume, we implemented multithreading in our text processing, significantly speeding up the analysis.
      - **Real-world Prevalence Calculation**: We conducted a systematic literature review to gather disease prevalence data across different demographics, focusing on the most consistently reported diseases.

      ### Validation of Keyword Frequency and Document Co-Occurrence

      We contrasted our findings with the state-of-the-art Infini-gram engine, which processes n-grams across large text corpora. This comparison helped validate our co-occurrence counts.

      ### Findings

      - **Variation Across Windows**: Our analysis showed consistent disease rankings across different token window sizes (50, 100, and 250). This consistency confirms the robustness of our findings.
      - **Demographic Distributions**: We observed notable disparities in the dataset's representation of different demographic groups compared to real-world disease prevalence data. For instance, White individuals were overrepresented, while Pacific Islanders and Indigenous groups were underrepresented.

      ![Disease Ranking by Demographic](/images/disease_rank_demographic.png)
      _Comparison of disease rankings between the Pile, LLM logits, and real-world data._

      Visit our project page at [CrossCare Downloads](https://crosscare.net/downloads) to explore our methods and results in detail and access the full data set.
      
      [Continue reading about Co-Occurrences](/blog/logits-controlled)
      `,
  },
  {
    slug: 'logits-controlled',  
    time: "5 min",
    heading: 'Model Predictions',
    heading2: 'Data -> Predictions!',
    authors: "BittermanLab",
    date: 'August 27, 2023',
    imgSrc: '/article3.png',
    content: `
      In our research, we've been analyzing how well controlled models, specifically trained on a large dataset called "The Pile," predict the prevalence of diseases across various demographic subgroups. Here’s an easy-to-follow breakdown of our findings:

      ### Overview of Logit Analysis

      Logits are the outputs from a model before it makes a final decision on what to predict. They give us a peek into the model's reasoning, showing which outcomes it considers likely. We averaged these logits across several pre-defined templates to understand how the model views the prevalence of different diseases among various demographic groups.

      ### Key Findings from the Controlled Models

      - **Consistency Across Models**: We observed that larger models tend to deviate more from the training data in predicting demographic distributions. Smaller models often adhered more closely to the data they were trained on.

      - **Gender Distribution Predictions**: The models generally predicted that males were more frequently associated with the diseases we studied, consistent with the training data from "The Pile." However, non-binary genders were rarely predicted as the most affected group, highlighting a potential area for model improvement.

      - **Race Distribution Predictions**: Predictions varied by race, with White and Black demographic groups often ranked higher in disease association. This aligns with their higher representation in the training data. Minority groups such as Pacific Islanders and Indigenous peoples were often ranked lower, which could reflect their underrepresentation in the data.

      ### Comparing Logits to Real-World Data

      We used a statistical method called Kendall's tau to compare the rankings from our model predictions to actual disease prevalence data. Interestingly, our models' predictions did not correlate well with real-world prevalence, suggesting that while the models can mimic the training data, they may not accurately reflect real-world disease distributions.

      - **Gender Analysis**: The correlation between model predictions and real-world data was particularly low for gender, indicating that the models might not be capturing real-world disease prevalence accurately across different gender groups.

      - **Race Analysis**: Similar to gender, the correlation for racial demographics was also low. This suggests a need for models to be trained on more diverse data sets that better represent the global population.

      ![Model Predictions vs. Real Data](/images/model_vs_real_data.png)
      _Comparison of model predictions with real-world disease prevalence data._

      For more detailed insights and to access our full dataset, please visit our project page at [CrossCare Downloads](https://crosscare.net/downloads).

      [Continue reading about Logits and Co-Occurrences](/blog/logits-wild)
      `,
  },
  {
    slug: 'logits-wild',  
    time: "5 min",
    heading: 'Models in the Wild',
    heading2: 'Big vs Real World Data?',
    authors: "BittermanLab",
    date: 'August 26, 2024',
    imgSrc: '/article.png',
    content: `
      In our ongoing research into language models, we've also explored "models in the wild" — these are models that have been trained on diverse data sources and vary in size, alignment methods, and languages. Here's what we found about how these models predict disease prevalence in different demographic groups:

      ### Key Findings

      - **Limited Knowledge of Real-World Prevalence**: Across all models we tested, none showed strong understanding of the actual prevalence of diseases among different genders or races. The best models only reached a modest agreement with real-world data, suggesting that these models may not be reliable for making unbiased healthcare decisions.

      - **Impact of Alignment Strategies**: We specifically looked at models like LLama2 and Mistral that underwent various alignment strategies to see if these could improve predictions. Unfortunately, none of these strategies significantly corrected the models to better reflect real-world data. Interestingly, while some strategies seemed to shift preferences between male and female or among different races, they did not consistently improve the models' accuracy in predicting disease prevalence.

      ![Top Ranked Gender and Race](/images/llama_top_count_race_gender.png)
      _Top ranked gender and race subgroups across diseases using Llama series models across languages._

      ### Variation Across Languages

      - **Differences in Gender and Race Representation**: The models showed varying preferences for gender and race depending on the language of the templates used. For example, some models preferred females in Chinese but males in French. Similarly, Black race was often preferred in English and Spanish templates, while White race was preferred in Chinese and French.

      - **Influence of Training Data**: These differences suggest that the mix of training data, rather than just the alignment strategies, plays a crucial role in how models develop their internal beliefs about disease prevalence across demographics.

      ### Conclusion

      Our findings highlight the complexity of using language models to predict disease prevalence accurately across different demographic groups. The discrepancies in model predictions across languages and the limited effectiveness of alignment strategies indicate that further work is needed to make these models more reliable and unbiased tools in healthcare settings.

      For a deeper dive into our research and to access the full dataset, please visit our project page at [CrossCare Downloads](https://crosscare.net/downloads).

      [Continue reading about Further Model Adjustments](/blog/model-adjustments)
      `,
  },
  {
    slug: 'we-launch-delia5',  
    time: "5 min",
    heading: 'We Launch Delia4',
    heading2: 'Webflow this Week!',
    authors: "Published on Startupon",
    date: 'August 19, 2021',
    imgSrc: '/article2.png',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloremque architecto pariatur sunt cum. Labore, eligendi ipsa consequatur impedit corrupti iure molestiae esse doloribus at officia a explicabo atque tempora!',

  },
  {
    slug: 'we-launch-delia6',  
    time: "5 min",
    heading: 'We Launch Delia5',
    heading2: 'Webflow this Week!',
    authors: "Published on Startupon",
    date: 'August 19, 2021',
    imgSrc: '/article3.png',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloremque architecto pariatur sunt cum. Labore, eligendi ipsa consequatur impedit corrupti iure molestiae esse doloribus at officia a explicabo atque tempora!',

  }
]

