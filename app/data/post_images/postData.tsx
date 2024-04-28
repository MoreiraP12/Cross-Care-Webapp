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
    slug: 'we-launch-delia3',  
    time: "5 min",
    heading: 'We Launch Delia2',
    heading2: 'Webflow this Week!',
    authors: "Published on Startupon",
    date: 'August 19, 2021',
    imgSrc: '/article3.png',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloremque architecto pariatur sunt cum. Labore, eligendi ipsa consequatur impedit corrupti iure molestiae esse doloribus at officia a explicabo atque tempora!',
  },
  {
    slug: 'we-launch-delia4',  
    time: "5 min",
    heading: 'We Launch Delia3',
    heading2: 'Webflow this Week!',
    authors: "Published on Startupon",
    date: 'August 19, 2021',
    imgSrc: '/article.png',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloremque architecto pariatur sunt cum. Labore, eligendi ipsa consequatur impedit corrupti iure molestiae esse doloribus at officia a explicabo atque tempora!',

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

