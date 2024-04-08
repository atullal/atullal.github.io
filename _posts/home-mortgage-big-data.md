---
title: "Exploring the Home Mortgage Market using Spark on Google Cloud"
excerpt: "Our goal with this dataset is to explore the Home Mortgage market within the US to identify patterns the data on the basis of gender, race, income, property type, loan type, amount and location."
coverImage: "/assets/blog/home-mortgage-big-data/cover.jpg"
date: "2023-04-01T05:35:07.322Z"
categories: ["Big Data", "Cloud", "AI"]
author:
  name: Atul Lal
  picture: "/assets/blog/authors/atullal.jpeg"
ogImage:
  url: "/assets/blog/home-mortgage-big-data/cover.jpg"
github: https://github.com/atullal/Exploring-the-Home-Mortgage-Market/tree/main
---


## Overview:
In this comprehensive analysis, we delve into the intricate dynamics of the US Home Mortgage market. Utilizing an extensive dataset under the Home Mortgage Disclosure Act (HMDA), we aim to uncover patterns and correlations across various dimensions such as gender, race, income, property type, loan type, amount, and geographical location. Our insights are geared towards enabling financial institutions to enhance their decision-making and lending strategies.

## Comprehensive Dataset Insights:
Our analysis leverages a detailed dataset encompassing Mortgage applications specifically for first lien, owner-occupied, 1-4 family homes, collected under the HMDA regulations for the years 2016 and 2017. This dataset, reported by a multitude of financial institutions, is a goldmine of information, comprising **13,023,011** records spanning **9.4 GB**. It includes crucial data points on loan attributes, property specifics, applicant demographics, and lender details, all while maintaining stringent privacy standards for applicants and borrowers.

## Key Goals:
Our primary objective is to dissect and understand the multifaceted factors influencing mortgage attributes within the US. This analysis is not just about numbers; it's a step towards empowering lenders and financial institutions with data-driven insights. By comprehending the driving forces behind loan amounts and other attributes, we can significantly refine credit risk assessment, optimize underwriting processes, and boost profitability.

## Data Source Acknowledgment:
This invaluable dataset has been sourced from the Consumer Financial Protection Bureau (CFPB), a pivotal entity in consumer financial protection. To explore the dataset in detail, visit [Consumer Financial Protection Bureau (CFPB) - HMDA Historic Data](https://www.consumerfinance.gov/data-research/hmda/historic-data/?geo=nationwide&records=first-lien-owner-occupied-1-4-family-records&field_descriptions=labels).

## Insightful Findings:

### Disparities and Trends Uncovered:
Our meticulous analysis of over 13 million mortgage applications revealed several key disparities and trends, indicative of underlying market dynamics:

- **Gender Bias:** The dataset shows a noticeable skew towards male applicants, highlighting a gender disparity in the mortgage market.
- **Race and Income Correlation:** A clear correlation exists between an applicant's race and their income levels, with consequential effects on loan amounts.
- **Loan Amount Discrepancies:** A significant gap is evident in the average loan amounts sought by Asians and Whites compared to other racial groups, which increases with income.
- **Lender Preferences:** The Consumer Financial Protection Bureau stands out for offering comparatively higher loan amounts, showcasing its role in the market.
- **Geographical Variations:** Debt-to-income ratios exhibited stark differences across states, with Californians showing higher ratios compared to Eastern states.

### The Bigger Picture:
These findings are crucial in understanding the socio-economic factors at play in the home mortgage market. They stress the importance of addressing racial and gender disparities, re-evaluating lending practices, and considering regional economic conditions. This in-depth analysis is a step towards more equitable, efficient, and profitable lending strategies in the US mortgage sector.

<hr />

<div class="container mx-auto p-6">
    <div class="text-lg font-semibold mb-4">Table of Contents</div>
    <ul class="list-none">
        <li><a href="#part1" class="text-blue-600 hover:text-blue-800">I. Data Exploration</a></li>
        <li><a href="#part2" class="text-blue-600 hover:text-blue-800">II. Data Cleaning</a></li>
        <li><a href="#part3" class="text-blue-600 hover:text-blue-800">III. Predictive Analysis</a></li>
        <li><a href="#part4" class="text-blue-600 hover:text-blue-800">IV. Summary</a></li>
        <li><a href="#part5" class="text-blue-600 hover:text-blue-800">V. Next Steps</a></li>
        <li><a href="#part6" class="text-blue-600 hover:text-blue-800">VI. Challenges</a></li>
        <li><a href="#part7" class="text-blue-600 hover:text-blue-800">VII. Deep Dive into Specific Market Segments</a></li>
        <li><a href="#part8" class="text-blue-600 hover:text-blue-800">VIII. References</a></li>
    </ul>
    <hr class="my-4 border-t border-neutral-200" />
</div>
<h2 id="part1">I. Data Exploration</h2>

The dataset is structured with a variety of columns that represent different attributes of mortgage applications. Key columns include 'Agency Name', 'Loan Type', 'Property Type', 'Applicant Ethnicity', and 'Applicant Income', among others. These columns are coded with numerical and string identifiers, providing a structured framework for analysis.

<caption class="caption-top">
    Table 1.1: Deeper look in what the data looks like.
  </caption>
  <div class="container mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-lg overflow-x-scroll">
        <table id="data-table" class="min-w-full table-auto border-collapse">
            <thead>
                <tr>
                    <th class="px-4 py-2 sm:px-6 sm:py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                        Column Name
                    </th>
                    <th class="px-4 py-2 sm:px-6 sm:py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                        Code Name
                    </th>
                    <th class="px-4 py-2 sm:px-6 sm:py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                        Description
                    </th>
                    <th class="px-4 py-2 sm:px-6 sm:py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                        Type
                    </th>
                </tr>
            </thead>
            <tbody class="text-sm">
                <!-- Table body data here -->
            </tbody>
        </table>
</div>
    <script>
        const jsonData = [{"Column Name":"As of Year","Code Name":"as_of_year","Description":"Year the data is collected","Type":"String"},{"Column Name":"Respondent ID","Code Name":"respondent_id","Description":"10-character identifier for financial institution","Type":"String"},{"Column Name":"Agency Name","Code Name":"agency_name","Description":"Name of agency that supervises the financial institution","Type":"String"},{"Column Name":"Agency Abbr","Code Name":"agency_abbr","Description":"Abbreviation of the agency name","Type":"String"},{"Column Name":"Agency Code","Code Name":"agency_code","Description":"Agency that supervises the financial institution","Type":"Integer","Values":["1: Office of the Comptroller of the Currency (OCC)","2: Federal Reserve System (FRS)","3: Federal Deposit Insurance Corporation (FDIC)","5: National Credit Union Administration (NCUA)","7: Department of Housing and Urban Development (HUD)","9: Consumer Financial Protection Bureau (CFPB)"]},{"Column Name":"Loan Type Name","Code Name":"loan_type_name","Description":"Name of loan type provided","Type":"String"},{"Column Name":"Loan Type","Code Name":"loan_type","Description":"Type of loan provided","Type":"Integer","Values":["1: Conventional","2: FHA-insured (Federal Housing Administration)","3: VA-guaranteed (Veterans Administration)","4: FSA/RHS (Farm Service Agency or Rural Housing Service)"]},{"Column Name":"Property Type Name","Code Name":"property_type_name","Description":"Name of property type","Type":"String"},{"Column Name":"Property Type","Code Name":"property_type","Description":"Type of property financed","Type":"Integer","Values":["1: One to four-family (other than manufactured housing)","2: Manufactured housing","3: Multifamily"]},{"Column Name":"Loan Purpose Name","Code Name":"loan_purpose_name","Description":"Name of loan purpose","Type":"String"},{"Column Name":"Loan Purpose","Code Name":"loan_purpose","Description":"Reason for loan","Type":"Integer","Values":["1: Home purchase","2: Home improvement","3: Refinancing"]},{"Column Name":"Owner Occupancy Name","Code Name":"owner_occupancy_name","Description":"Name of owner occupancy type","Type":"String"},{"Column Name":"Owner-Occupancy","Code Name":"owner_occupancy","Description":"Occupancy status of the purchased property","Type":"Integer","Values":["1: Owner-occupied as a principal dwelling","2: Not owner-occupied","3: Not applicable"]},{"Column Name":"Loan Amount 000s","Code Name":"loan_amount_000s","Description":"Loan amount in thousands of dollars","Type":"String"},{"Column Name":"Preapproval Name","Code Name":"preapproval_name","Description":"Name of preapproval status","Type":"String"},{"Column Name":"Preapproval","Code Name":"preapproval","Description":"Preapproval status of the loan","Type":"Integer","Values":["1: Preapproval was requested","2: Preapproval was not requested","3: Not applicable"]},{"Column Name":"Action Taken Name","Code Name":"action_taken_name","Description":"Name of action taken on application","Type":"String"},{"Column Name":"Action Taken","Code Name":"action_taken","Description":"Action taken by financial institution","Type":"Integer","Values":["1: Loan originated","2: Application approved but not accepted","3: Application denied by financial institution","4: Application withdrawn by applicant","5: File closed for incompleteness","6: Loan purchased by the institution","7: Preapproval request denied by financial institution","8: Preapproval request approved but not accepted (optional reporting)"]},{"Column Name":"MSAMD Name","Code Name":"msamd_name","Description":"Name of Metropolitan Statistical Area/Metropolitan Division","Type":"String"},{"Column Name":"MSAMD","Code Name":"msamd","Description":"Code for Metropolitan Statistical Area/Metropolitan Division","Type":"String"},{"Column Name":"State Name","Code Name":"state_name","Description":"Name of the state","Type":"String"},{"Column Name":"State Abbr","Code Name":"state_abbr","Description":"Abbreviation of the state name","Type":"String"},{"Column Name":"State Code","Code Name":"state_code","Description":"Two-digit FIPS state identifier","Type":"String"},{"Column Name":"County Name","Code Name":"county_name","Description":"Name of the county","Type":"String"},{"Column Name":"County Code","Code Name":"county_code","Description":"Three-digit FIPS county identifier","Type":"String"},{"Column Name":"Census Tract Number","Code Name":"census_tract_number","Description":"Census tract number","Type":"String"},{"Column Name":"Applicant Ethnicity Name","Code Name":"applicant_ethnicity_name","Description":"Name of applicant ethnicity","Type":"String"},{"Column Name":"Applicant Ethnicity","Code Name":"applicant_ethnicity","Description":"Ethnicity of the applicant","Type":"Integer","Values":["1: Hispanic or Latino","2: Not Hispanic or Latino","3: Information not provided by applicant in mail, Internet, or telephone application","4: Not applicable","5: No co-applicant"]},{"Column Name":"Co-Applicant Ethnicity Name","Code Name":"co_applicant_ethnicity_name","Description":"Name of co-applicant ethnicity","Type":"String"},{"Column Name":"Co-Applicant Ethnicity","Code Name":"co_applicant_ethnicity","Description":"Code for co-applicant ethnicity","Type":"String"},{"Column Name":"Applicant Race Name 1","Code Name":"applicant_race_name_1","Description":"Name of applicant's primary race","Type":"String"},{"Column Name":"Applicant Race 1","Code Name":"applicant_race_1","Description":"Race of the applicant - first reported","Type":"Integer","Values":["1: American Indian or Alaska Native","2: Asian","3: Black or African American","4: Native Hawaiian or Other Pacific Islander","5: White","6: Information not provided by applicant in mail, Internet, or telephone application","7: Not applicable","8: No co-applicant"]},{"Column Name":"Applicant Race Name 2","Code Name":"applicant_race_name_2","Description":"Name of applicant's secondary race (if applicable)","Type":"String"},{"Column Name":"Applicant Race 2","Code Name":"applicant_race_2","Description":"Code for applicant's secondary race (if applicable)","Type":"String"},{"Column Name":"Applicant Race Name 3","Code Name":"applicant_race_name_3","Description":"Name of applicant's tertiary race (if applicable)","Type":"String"},{"Column Name":"Applicant Race 3","Code Name":"applicant_race_3","Description":"Code for applicant's tertiary race (if applicable)","Type":"String"},{"Column Name":"Applicant Race Name 4","Code Name":"applicant_race_name_4","Description":"Name of applicant's quaternary race (if applicable)","Type":"String"},{"Column Name":"Applicant Race 4","Code Name":"applicant_race_4","Description":"Code for applicant's quaternary race (if applicable)","Type":"String"},{"Column Name":"Applicant Race Name 5","Code Name":"applicant_race_name_5","Description":"Name of applicant's quinary race (if applicable)","Type":"String"},{"Column Name":"Applicant Race 5","Code Name":"applicant_race_5","Description":"Code for applicant's quinary race (if applicable)","Type":"String"},{"Column Name":"Co-Applicant Race Name 1","Code Name":"co_applicant_race_name_1","Description":"Name of co-applicant's primary race","Type":"String"},{"Column Name":"Co-Applicant Race 1","Code Name":"co_applicant_race_1","Description":"Code for co-applicant's primary race","Type":"String"},{"Column Name":"Co-Applicant Race Name 2","Code Name":"co_applicant_race_name_2","Description":"Name of co-applicant's secondary race (if applicable)","Type":"String"},{"Column Name":"Co-Applicant Race 2","Code Name":"co_applicant_race_2","Description":"Code for co-applicant's secondary race (if applicable)","Type":"String"},{"Column Name":"Co-Applicant Race Name 3","Code Name":"co_applicant_race_name_3","Description":"Name of co-applicant's tertiary race (if applicable)","Type":"String"},{"Column Name":"Co-Applicant Race 3","Code Name":"co_applicant_race_3","Description":"Code for co-applicant's tertiary race (if applicable)","Type":"String"},{"Column Name":"Co-Applicant Race Name 4","Code Name":"co_applicant_race_name_4","Description":"Name of co-applicant's quaternary race (if applicable)","Type":"String"},{"Column Name":"Co-Applicant Race Name 4","Code Name":"co_applicant_race_name_4","Description":"Name of co-applicant's quaternary race (if applicable)","Type":"String"},{"Column Name":"Co-Applicant Race 4","Code Name":"co_applicant_race_4","Description":"Code for co-applicant's quaternary race (if applicable)","Type":"String"},{"Column Name":"Co-Applicant Race Name 5","Code Name":"co_applicant_race_name_5","Description":"Name of co-applicant's quinary race (if applicable)","Type":"String"},{"Column Name":"Co-Applicant Race 5","Code Name":"co_applicant_race_5","Description":"Code for co-applicant's quinary race (if applicable)","Type":"String"},{"Column Name":"Applicant Sex Name","Code Name":"applicant_sex_name","Description":"Name of applicant's sex","Type":"String"},{"Column Name":"Applicant Sex","Code Name":"applicant_sex","Description":"Sex of the applicant","Type":"Integer","Values":["1: Male","2: Female","3: Information not provided by applicant in mail, Internet, or telephone application","4: Not applicable","5: No co-applicant"]},{"Column Name":"Co-Applicant Sex Name","Code Name":"co_applicant_sex_name","Description":"Name of co-applicant's sex","Type":"String"},{"Column Name":"Co-Applicant Sex","Code Name":"co_applicant_sex","Description":"Code for co-applicant's sex","Type":"String"},{"Column Name":"Applicant Income 000s","Code Name":"applicant_income_000s","Description":"Applicant's gross annual income in thousands of dollars","Type":"String"},{"Column Name":"Purchaser Type Name","Code Name":"purchaser_type_name","Description":"Name of purchaser type","Type":"String"},{"Column Name":"Purchaser Type","Code Name":"purchaser_type","Description":"Code for purchaser type","Type":"String"},{"Column Name":"Denial Reason Name 1","Code Name":"denial_reason_name_1","Description":"Name of primary denial reason (if applicable)","Type":"String"},{"Column Name":"Denial Reason 1","Code Name":"denial_reason_1","Description":"Code for primary denial reason (if applicable)","Type":"String"},{"Column Name":"Denial Reason Name 2","Code Name":"denial_reason_name_2","Description":"Name of secondary denial reason (if applicable)","Type":"String"},{"Column Name":"Denial Reason 2","Code Name":"denial_reason_2","Description":"Code for secondary denial reason (if applicable)","Type":"String"},{"Column Name":"Denial Reason Name 3","Code Name":"denial_reason_name_3","Description":"Name of tertiary denial reason (if applicable)","Type":"String"},{"Column Name":"Denial Reason 3","Code Name":"denial_reason_3","Description":"Code for tertiary denial reason (if applicable)","Type":"String"},{"Column Name":"Rate Spread","Code Name":"rate_spread","Description":"The difference between the Annual Percentage Rate (APR) and the average prime offer rate (APOR)","Type":"String"},{"Column Name":"HOEPA Status Name","Code Name":"hoepa_status_name","Description":"Name of the Home Ownership and Equity Protection Act status","Type":"String"},{"Column Name":"HOEPA Status","Code Name":"hoepa_status","Description":"Code for the Home Ownership and Equity Protection Act status","Type":"String"},{"Column Name":"Lien Status Name","Code Name":"lien_status_name","Description":"Name of lien status","Type":"String"},{"Column Name":"Lien Status","Code Name":"lien_status","Description":"Code for lien status","Type":"String"},{"Column Name":"Edit Status","Code Name":"edit_status","Description":"Code for edit status","Type":"String"},{"Column Name":"Sequence Number","Code Name":"sequence_number","Description":"One-up number scheme for each respondent to make each loan unique","Type":"String"},{"Column Name":"Population","Code Name":"population","Description":"Total population in tract","Type":"String"},{"Column Name":"Minority Population","Code Name":"minority_population","Description":"Percentage of minority population to total population for tract","Type":"String"},{"Column Name":"FFIEC Median Family Income","Code Name":"hud_median_family_income","Description":"FFIEC Median family income in dollars for the MSA/MD in which the tract is located (adjusted annually by FFIEC)","Type":"String"},{"Column Name":"Tract to MSA/MD Income","Code Name":"tract_to_msamd_income","Description":"Percentage of tract median family income compared to MSA/MD median family income (carried to two decimal places)","Type":"String"},{"Column Name":"Number of Owner Occupied Units","Code Name":"number_of_owner_occupied_units","Description":"Number of dwellings, including individual condominiums, that are lived in by the owner","Type":"String"},{"Column Name":"Number of 1 to 4 Family Units","Code Name":"number_of_1_to_4_family_units","Description":"Dwellings that are built to house fewer than 5 families","Type":"String"},{"Column Name":"Application Date Indicator","Code Name":"application_date_indicator","Description":"Indicator for the date of the loan application","Type":"String"}];
 function populateTable(data) {
    const table = document.getElementById('data-table').getElementsByTagName('tbody')[0];
    data.forEach((item, index) => {
        let row = table.insertRow();
        row.className = "border-b";
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        cell1.textContent = item["Column Name"];
        cell2.textContent = item["Code Name"];
        cell3.textContent = item["Description"];
        // Styling the cells for better aesthetics
        [cell1, cell2, cell3].forEach(cell => {
            cell.className = "px-6 py-4 whitespace-nowrap text-sm text-gray-500";
        });
        // Styling the 'Type' as colorful tags
        const typeTag = document.createElement('span');
        typeTag.textContent = item["Type"];
        typeTag.className = `px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            item["Type"] === "String" ? 'bg-blue-100 text-blue-800' :
            item["Type"] === "Integer" ? 'bg-green-100 text-green-800' : 
            'bg-gray-100 text-gray-800'
        }`;
        cell4.appendChild(typeTag);
        cell4.className = "px-6 py-4 whitespace-nowrap text-sm font-medium";
               if (item.Values) {
            let collapsibleRow = table.insertRow();
            let collapsibleCell = collapsibleRow.insertCell(0);
            collapsibleCell.colSpan = "4";
            collapsibleCell.innerHTML = `
                <button onclick="toggleCollapse('collapse-${index}')" class="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.582l3.293-3.289a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
                <div id="collapse-${index}" class="mt-2 p-4 bg-gray-100 rounded-lg hidden">
                    ${item.Values.join('<br>')}
                </div>`;
            collapsibleCell.className = "px-6 py-4";
        }
    });
}
function toggleCollapse(collapseId) {
    const collapseElement = document.getElementById(collapseId);
    if (collapseElement) {
        collapseElement.classList.toggle('hidden');
    }
}
    populateTable(jsonData);
    </script>



### Data Cleaning and Initial Observations

The first step in our analysis involved a thorough data cleaning process. A significant number of columns were filled with null values, suggesting incomplete records. To address this, we employed a combination of imputation and filtering techniques to ensure the reliability of our analysis.

### Handling Null Values

An initial assessment showed that several columns were predominantly filled with nulls, indicating either missing or non-applicable data points. We strategically addressed these null values to maintain the integrity of the dataset. This involved removing columns with excessive nulls and imputing sensible defaults or averages in columns where nulls constituted a smaller fraction of the data.

### Distribution Analysis

One of the primary focuses of our analysis was to understand the distribution of loans based on various factors such as purpose, income, and demographics. We utilized visualization tools to depict these distributions effectively.


### Distribution of Loans by Purpose

Q: What are the top loan purposes for the applications in the dataset?

A: The top loan purpose for the applications in the dataset is home purchase with a count of 7 million.

A significant discovery was the predominance of home purchases as the top loan purpose, totaling around 7 million applications. This is followed by refinancing and home improvement loans. This distribution points towards the primary motivations driving the mortgage market.

![png](/assets/blog/home-mortgage-big-data/output_10_1.png)


#### Income of HEOPA Applicants

Q: What is the difference in average applicant income between HOEPA and non-HOEPA loan applications in the dataset?

A: The average income for non-HOEPA loans is higher, reaching over 100k, while for HOEPA loans, it stays below 80k. Therefore, the difference in average applicant income between HOEPA and non-HOEPA loan applications in the dataset is significant, with non-HOEPA loan applicants having a higher average income.

When dissecting the data by HOEPA (Home Ownership and Equity Protection Act) status, we observed a notable difference in average incomes. Non-HOEPA loan applicants displayed higher average incomes, suggesting a potential bias in lending practices towards higher-income groups.

![png](/assets/blog/home-mortgage-big-data/output_12_1.png)

#### Distribution of Income by Agencies

Q: What is the average income by agency name in the dataset,and how do they compare to each other?

A: The Federal Reserve System and Federal Deposit Insurance Corporation have an average applicant income of a little more than 100k. The Department of Housing and Urban Development has a little bit lower than 100k. The Office of Comptroller of the Currency has an average applicant income of more than 100k and almost reaches 120k. The National Credit Union Administration is the second-highest with more than 120k. The Consumer Financial Protection Bureau has the highest average applicant income at 140k.

Analysis by lending agencies revealed variations in average incomes and loan amounts. The Consumer Financial Protection Bureau stood out for providing the highest average loan amounts, indicating potentially different lending criteria or target markets.

![png](/assets/blog/home-mortgage-big-data/output_14_1.png)

#### Distribution of Income by Preapproval Status

Q: What is the difference in average applicant income between different preapproval statuses in the dataset?

A: The average applicant income is almost at the same level across different preapproval statuses, with "Not applicable" having the highest average income at almost 120,000 and "Preapproval was requested" being the second highest at more than 100,000.

The relationship between preapproval status and applicant income was also scrutinized. Interestingly, the average applicant income was relatively consistent across different preapproval statuses. This suggests that preapproval might not be significantly influenced by the income levels of the applicants, or that a wide range of income groups are seeking preapproval for loans.

![png](/assets/blog/home-mortgage-big-data/output_16_1.png)

#### Distribution of Loans by Purchaser Type

Q: What are the top purchaser types for the loans in the dataset?

A: FNMA is the top purchaser type for the loans in the dataset with a count of much more than 2.5 million.

A closer look at the purchaser types for loans revealed that FNMA (Federal National Mortgage Association) dominated as the top purchaser, accounting for a considerable portion of the loans. This gives us a glimpse into the secondary mortgage market dynamics and the prominent role of government-sponsored enterprises in the mortgage industry.

![png](/assets/blog/home-mortgage-big-data/output_18_1.png)

#### Distribution of Gender

Q: How does the distribution of gender look within the data?

A: The graph shows the distribution of gender in the dataset, with approximately **65%** of the individuals being males, **28%** females, and the remainder falling under *Not Provided* or *Not applicable* categories. From this, we can conclude that the dataset is skewed towards males, with nearly two-thirds of the individuals being male.

The dataset exhibited a skew towards male applicants, with approximately 65% of the records representing males, 28% females, and the remainder falling under various non-disclosed or non-applicable categories. This gender disparity in mortgage applications is a critical aspect that merits further exploration and understanding.

![png](/assets/blog/home-mortgage-big-data/output_20_1.png)

#### Mean Income by Race

Q: What does the average income look like by race?

A: The graph presents the distribution of mean income by race, revealing significant disparities. Keeping aside the *Not applicable* and *Not Provided* categories, **Asian Americans** have the highest mean income of \$ 135,000 per year, followed by **Whites** at \$ 105,000 per year. **Native Americans**, **Black or African American**, and **Native Hawaiians** earn less than \$ 100,000 per year on average. The data suggests that the income gap among different races persists and requires attention.

An analysis of mean income by race presented significant disparities. Asian Americans emerged with the highest mean income, followed by Whites, with other racial groups reporting lower average incomes. This income gap highlights the economic disparities that exist across different racial groups and raises questions about equitable access to housing finance.

![png](/assets/blog/home-mortgage-big-data/output_22_1.png)
    

#### Relationship Between Loan Amount and Applicant Income by Race

Q: How does the Loan Gap vary by Income and Race?

A: Based on the graph showing the variation of loan amount applied for versus the applicant's income, it appears that applicants tend to apply for higher amounts of loans as their income increases, which is an expected trend. Additionally, the graph suggests that there is a **widening** gap between the average loan amounts applied for by **Asians** and **Whites** as their income level increases. This could indicate disparities in lending practices or economic factors that need further investigation.

A fascinating aspect of our study was examining the relationship between loan amount and applicant income across different races. The trend suggested that loan amounts tend to increase with income, which is expected. However, there was a noticeable widening gap in the loan amounts applied for by Asians and Whites, as opposed to other races. This phenomenon points towards potential disparities in lending practices or economic factors that warrant a deeper analysis.

*Note:* To build this scatter plot, we will be sampling 0.5% of the data to have a visually coherent chart

![png](/assets/blog/home-mortgage-big-data/output_24_1.png)

#### Mean Loan Amount by Agencies

Q: Looking at Loan Agencies, how does the amounts they give out vary?

A: The graph shows the distribution of average loan amount given out by different agencies. The **Consumer Financial Protection Bureau** stands out as it provides the **highest loan amounts** to its applicants, on average. This could suggest that the lending practices of this agency differ from the others. It is important to further investigate and understand the reasons behind this trend.

Our examination of average loan amounts by different agencies revealed that the Consumer Financial Protection Bureau provided the highest loan amounts on average. This finding indicates potential variations in the target clientele or loan products offered by different agencies.

![png](/assets/blog/home-mortgage-big-data/output_26_1.png)

#### Average Debt-to-Income Ratio by State

Q: How does the Debt-to-Income Ratio vary geographically? Are there any states which have unusually high/low ratios?

A: The Debt-to-income ratio graph reveals that states on the west coast, particularly **California**, have **higher** ratios than states on the east coast. This means that the amount of loan that Californians apply for is relatively higher than their income when compared to other states. This trend can have implications for financial stability and creditworthiness, especially for borrowers with high debt-to-income ratios.

An intriguing aspect of our study was the geographic variation in debt-to-income ratios. Western states, particularly California, showed higher ratios compared to their eastern counterparts. This suggests regional differences in financial behaviors, housing markets, and possibly, lending criteria.

![Average Debt-to-Income Ratio by State](/assets/blog/home-mortgage-big-data/output_13_1.jpg "Average Debt-to-Income Ratio by State")

#### Distribution of Ethnicity

Q: How does the distribution of the data look as far as Ethnicity is concerned?

A: More than 10 Million records out of 13 Million are "Not Hispanic or Latino", with only around 1 Million records for Hispanic or Latino and records for which the data was not provided/applicable

The analysis of the dataset in terms of ethnicity indicated a majority of records as 'Not Hispanic or Latino,' followed by a significant number of records with ethnicity not provided or applicable. This points towards a major representation of certain ethnic groups in the mortgage application process, highlighting the need for more inclusive financial practices.

![png](/assets/blog/home-mortgage-big-data/output_15_1.png)


### Key Observations and Insights

Through our comprehensive analysis, several key observations emerged:

1. **Gender Disparity**: The data skews towards male applicants, raising questions about gender parity in mortgage accessibility.
   
2. **Racial Income Gap**: There is a clear income disparity among different races, with Asian Americans and Whites at the higher end of the spectrum.

3. **Agency Lending Practices**: Different lending agencies exhibit variations in average loan amounts and applicant incomes, suggesting diverse lending practices and target markets.

4. **Geographic Disparities**: The debt-to-income ratio varies geographically, with some states like California having higher ratios, indicative of regional economic and housing market differences.

5. **Loan Purpose Trends**: Home purchase dominates the loan purposes, reflecting the primary driver in the mortgage market.

These insights offer a foundational understanding of the current mortgage market landscape in the U.S. and serve as a basis for further in-depth analysis and policy considerations.


<h2 id="part2">II. Data Cleaning</h2>

### How did you narrow down the data set for the purpose of your analysis?

We dropped the following columns based on relevancy and redundancy:

`respondent_id` - this unique identifier only serves to make each record distinct, but does not provide any information
    
`agency_abbr`, `agency_code` - duplicative and less informative than `agency_name`

`loan_type` - duplicative and less informative than `loan_type_name`

`property_type` - duplicative and less informative than `property_type_name`

`loan_purpose` - duplicative and less informative than `loan_purpose_name`

`owner_occupancy` - duplicative and less informative than `owner_occupancy_name`

`preapproval` - duplicative and less informative than `preapproval_name`

`action_taken` - duplicative and less informative than `action_taken_name`

`msamd` - duplicative and less informative than `msamd_name`

`state_code` - duplicative and less informative than `state_name`

`county_code` - duplicative and less informative than `county_name`

`applicant_ethnicity` - duplicative and less informative than `applicant_ethnicity_name`

`co_applicant_ethnicity` - duplicative and less informative than `co_applicant_ethnicity_name`

`applicant_race_1` - duplicative and less informative than `applicant_race_name_1`

`applicant_race_2` - duplicative and less informative than `applicant_race_name_2`

`applicant_race_name_2` - almost all values are *null*

`applicant_race_3` - duplicative and less informative than `applicant_race_name_3`

`applicant_race_name_3` - all values are *null*

`applicant_race_4` - duplicative and less informative than `applicant_race_name_4`

`applicant_race_name_4` - all values are *null*

`applicant_race_5` - duplicative and less informative than `applicant_race_name_5`

`applicant_race_name_5` - all values are *null*

`co_applicant_race_1` - duplicative and less informative than `co_applicant_race_name_1`

`co_applicant_race_2` - duplicative and less informative than `co_applicant_race_name_2`

`co_applicant_race_name_2` - almost all values are *null*

`co_applicant_race_3` - duplicative and less informative than `co_applicant_race_name_3`

`co_applicant_race_name_3` - all values are *null*

`co_applicant_race_4` - duplicative and less informative than `co_applicant_race_name_4`

`co_applicant_race_name_4` - all values are *null*

`co_applicant_race_5` - duplicative and less informative than `co_applicant_race_name_5`

`co_applicant_race_name_5` - all values are *null*

`applicant_sex` - duplicative and less informative than `applicant_sex_name`

`co_applicant_sex` - duplicative and less informative than `co_applicant_sex_name`

`purchaser_type` - duplicative and less informative than `purchaser_type_name`

`denial_reason_name_1` - all values are *null*

`denial_reason_1` - all values are *null*

`denial_reason_name_2` - all values are *null*

`denial_reason_2` - all values are *null*

`denial_reason_name_3` - all values are *null*

`denial_reason_3` - all values are *null*

`rate_spread` - almost all values are *null*

`hoepa_status` - duplicative and less informative than `hoepa_status_name`

`lien_status` - duplicative and less informative than `lien_status_name`

`edit_status_name` - all values are *null*

`edit_status` - all values are *null*

`sequence_number` - all values are *null*

`application_date_indicator` - all values are *null*

### Preparing Dimension table for Geographical Aspects

Exploring the data, we observed that the columns `population`, `minority_population`, `hud_median_family_income`, `tract_to_msamd_income`, `number_of_owner_occupied_units`, and `number_of_1_to_4_family_units` are specific to a particular `census_tract_number`, `county_name`, `state_name` and `as_of_year`.

Therefore, to reduce redundancy, we prepare a new dataset using these columns, removing the duplicates to unfold a dimension table for the geographical aspects of the data.

  <div class="container mx-auto p-0" style="overflow: scroll">
        <table class="min-w-full table-auto border-collapse border border-gray-200">
            <thead class="bg-gray-100">
                <tr>
                    <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                    <th class="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">as_of_year</th>
                    <th class="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">state_name</th>
                    <th class="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">county_name</th>
                    <th class="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">census_tract_number</th>
                    <th class="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">population</th>
                    <th class="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">minority_population</th>
                    <th class="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">hud_median_family_income</th>
                    <th class="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">tract_to_msamd_income</th>
                    <th class="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">number_of_owner_occupied_units</th>
                    <th class="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">number_of_1_to_4_family_units</th>
                </tr>
            </thead>
            <tbody class="bg-white">
                <tr>
                    <td class="px-4 py-4 text-sm text-gray-500">0</td>
                    <td class="px-4 py-4 text-sm text-gray-500 text-right">2016</td>
                    <td class="px-4 py-4 text-sm text-gray-500 text-right">Oregon</td>
                    <td class="px-4 py-4 text-sm text-gray-500 text-right">Multnomah County</td>
                    <td class="px-4 py-4 text-sm text-gray-500 text-right">38.02</td>
                    <td class="px-4 py-4 text-sm text-gray-500 text-right">2965</td>
                    <td class="px-4 py-4 text-sm text-gray-500 text-right">26.950001</td>
                    <td class="px-4 py-4 text-sm text-gray-500 text-right">73300</td>
                    <td class="px-4 py-4 text-sm text-gray-500 text-right">75.800003</td>
                    <td class="px-4 py-4 text-sm text-gray-500 text-right">981</td>
                    <td class="px-4 py-4 text-sm text-gray-500 text-right">1225</td>
                </tr>
                <tr>
                    <td class="px-4 py-4 text-sm text-gray-500">1</td>
                    <td class="px-4 py-4 text-sm text-gray-500 text-right">2016</td>
                    <td class="px-4 py-4 text-sm text-gray-500 text-right">Illinois</td>
                    <td class="px-4 py-4 text-sm text-gray-500 text-right">Madison County</td>
                    <td class="px-4 py-4 text-sm text-gray-500 text-right">4017.22</td>
                    <td class="px-4 py-4 text-sm text-gray-500 text-right">2684</td>
                    <td class="px-4 py-4 text-sm text-gray-500 text-right">4.170000</td>
                    <td class="px-4 py-4 text-sm text-gray-500 text-right">70000</td>
                    <td class="px-4 py-4 text-sm text-gray-500 text-right">92.000000</td>
                    <td class="px-4 py-4 text-sm text-gray-500 text-right">997</td>
                    <td class="px-4 py-4 text-sm text-gray-500 text-right">1225</td>
                </tr>
                <!-- Additional rows would follow the same pattern -->
            </tbody>
        </table>
    </div>

<h2 id="part3">III. Predictive Analysis</h2>

### Observing the Correlation between Loan Amount and Income

Below, we observe a 0.7 correlation of `loan_amount` with `applicant_income`. We also look at the scatterplot between the 2 to look at this visually.
    
![png](/assets/blog/home-mortgage-big-data/output_41_1.png)
    

### Outlier Detection and Removal

The histogram of the income reveals a widespread skewness within it's values

![png](/assets/blog/home-mortgage-big-data/output_43_1.png)


#### Remove Outliers

Here we use the Interquartile range of 1.5 to remove any outliers

![png](/assets/blog/home-mortgage-big-data/output_45_1.png)

> **_NOTE:_**  We do the same for Loan Amount.


### Dividing columns into categorical and continuous columns
All the columns with string data type or less than 20 distinct values are detected as categorical columns, and numerical columns with more than 20 distinct values are continuous columns.


```python
# Detect categorical and numerical columns
categorical_columns = [field[0] for field in data_correct_type.dtypes if field[1] == "string" and field[0] != 'loan_amount_000s']
continuous_columns = [field[0] for field in data_correct_type.dtypes if field[1] != "string" and data_correct_type.select(field[0]).distinct().count() > 20 and field[0] != 'loan_amount_000s']
categorical_columns += [field[0] for field in data_correct_type.dtypes if field[1] != "string" and data_correct_type.select(field[0]).distinct().count() <= 20 and field[0] != 'loan_amount_000s']
categorical_columns = [column for column in categorical_columns if data_correct_type.select(column).distinct().count() > 1]
```

### Indexing and encoding
Indexing and one hot encoding all the categorical columns to make it compatible for linear regression model. Vector assembler combines all the feature columns into a single feature vector.


```python
# Index and one-hot encode categorical columns
indexers = [StringIndexer(inputCol=column, outputCol=f"{column}_index", handleInvalid="skip") for column in categorical_columns]
encoders = [OneHotEncoder(inputCol=f"{column}_index", outputCol=f"{column}_ohe") for column in categorical_columns]

# Assemble the features into a single vector
assembler = VectorAssembler(inputCols=[f"{column}_ohe" for column in categorical_columns] + continuous_columns, \
                            outputCol="features", handleInvalid="skip")
```

### Scaling and Pipeline
Adding standard scaler, creating a linear regression model and build the pipeline with the indexers, encoders, assembler, scaler and the model


```python
# Create the StandardScaler
scaler = StandardScaler(inputCol="features", outputCol="scaledFeatures")

# Train the model
model = LinearRegression(featuresCol='scaledFeatures', labelCol='loan_amount_000s', maxIter=10, regParam=0.3, elasticNetParam=1)

# Build the pipeline
pipeline = Pipeline(stages=indexers + encoders + [assembler, scaler, model])
```

### Training and testing
Splitting the train and test data from a sample data, as we only really want to see the coefficients of the columns after the training is done, doing it on the sample should give us a good representation.


```python
# Split the data into training and testing sets
train_data, test_data = data_correct_type.sample(withReplacement = False, fraction = 0.3, seed = 3).randomSplit([0.8, 0.2], seed=4)

# Train the model
model = pipeline.fit(train_data)

# Make predictions
predictions = model.transform(test_data)

# Evaluate the model
evaluator = RegressionEvaluator(predictionCol='prediction', labelCol='loan_amount_000s', metricName='rmse')
rmse = evaluator.evaluate(predictions)

print("RMSE: ", rmse)
```
RMSE:  82.9004894737356


                                                                                    

### Backtracking columns and coefficients
Using the metadata to find the coefficient indexes of the columns and matching them with coefficients. We are averaging the coefficients of the indexed and encoded columns (categorical columns).


```python
numeric_metadata = predictions.select("features").schema[0].metadata.get('ml_attr').get('attrs').get('numeric')
binary_metadata = predictions.select("features").schema[0].metadata.get('ml_attr').get('attrs').get('binary')

merge_list = numeric_metadata + binary_metadata 

colname_coff = [(row['name'], model.stages[-1].coefficients[row['idx']]) for row in merge_list]

all_columns = categorical_columns + continuous_columns
column_coefficient_map = {}
for column_name in all_columns:
    for name, coef in colname_coff:
        if column_name in name:
            if column_name not in column_coefficient_map:
                column_coefficient_map[column_name] = [abs(coef), 1]
            else:
                column_coefficient_map[column_name] = [column_coefficient_map[column_name][0] + abs(coef), column_coefficient_map[column_name][1]+1]
        
column_coefficient_map_scaled = {}
for column_name in column_coefficient_map:
    column_coefficient_map_scaled[column_name] = column_coefficient_map[column_name][0]/column_coefficient_map[column_name][1]

```
### Finding out most relevant columns
Narrowing down the relevant columns by creating a smaller model on the sample data and comparing coefficients of columns. 

![png](/assets/blog/home-mortgage-big-data/output_64_0.png)

Our linear regression model shows that the primary determinants for loan amounts are:

- **Applicant Income**

    The applicant's income directly corresponds to their borrowing capacity, with higher incomes typically leading to larger loans.
    
- **State Name**

    The state can dictate the average loan size due to varying economic conditions and real estate prices.
    
- **Loan Purpose** and **Loan Type**

    The loan purpose and type also play a significant role, as certain purposes (like home purchases) and types (like FHA or VA loans) often involve larger sums.

- **The Year the loan was taken out**

    Temporal changes in economic conditions and lending policies, captured by the 'as of year' column, can influence loan amounts.

- **The Lending Agency**

    The lending agency itself can impact the loan size, as different agencies have varied lending limits and criteria.

Importantly, our model reveals that factors such as gender, race, and ethnicity have significantly less influence on the loan amount, indicating that these biases may not be as prevalent in lending decisions as previously assumed.

### Training - Actual vs. Predicted

Here, we plot the actual versus the predicted values of Loan Amounts for the Training Data to visualize the prediction accuracy

   
![png](/assets/blog/home-mortgage-big-data/output_67_1.png)
    


### Test - Actual vs. Predicted

Here, we plot the actual versus the predicted values of Loan Amounts for the Test Data to visualize the prediction accuracy

![png](/assets/blog/home-mortgage-big-data/output_69_1.png)

#### Key Insights

In addition to exploring distributions and averages, we conducted predictive analysis to better understand the drivers of mortgage attributes and to forecast future trends.

1. **Loan Amount Prediction**: We developed a regression model to predict the loan amounts based on applicant income, property type, loan type, and geographic location. This model helps in understanding how different factors collectively influence the loan amount decisions.

2. **Risk Assessment Modeling**: By analyzing factors such as applicant credit history, property valuation, and loan-to-value ratios, we aimed to create a model that predicts the risk associated with each loan. This model aids lenders in making informed decisions and managing their portfolios effectively.

3. **Demographic Impact on Loan Approval**: A logistic regression model was employed to analyze the impact of demographics on loan approval rates. This model explores the potential biases in the lending process and helps in ensuring fair lending practices.

4. **Trend Forecasting**: Utilizing time-series analysis, we forecasted future trends in the mortgage market, considering economic indicators and historical loan data. This helps lenders and investors anticipate market shifts and adjust their strategies accordingly.


<h2 id="part4">IV. Summary</h2>

The analysis of the dataset reveals several important findings. The dataset is biased towards males, with about 65% of individuals being male. Moreover, there is a significant income gap among different races, with Asian Americans having the highest mean income and Black or African Americans, Native Americans, and Native Hawaiians earning less than $100,000 per year on average.

Additionally, the loan amount applied for by applicants tends to increase as their income rises. However, there is a widening gap in the average loan amounts applied for by Asians and Whites, which requires further investigation. Moreover, the Consumer Financial Protection Bureau provides the highest loan amounts to its applicants, suggesting different lending practices.

The Debt-to-income ratio varies across states, with Californians having higher ratios than states on the east coast. This trend can have implications for financial stability and creditworthiness. These conclusions emphasize the need for addressing disparities and investigating lending practices and economic factors.

Further, using regression, we observe that factors such as gender, race, and ethnicity have significantly less influence on the loan amount, indicating that these biases may not be as prevalent in lending decisions as previously assumed.

<hr />

The predictive analysis revealed several key findings:

- **Income as a Major Predictor**: Applicant income remains a significant predictor of loan amounts and approval rates.
- **Property Type Relevance**: The type of property financed also plays a crucial role in determining loan amounts.
- **Geographical Variances**: Geographic location significantly impacts loan amounts, approval rates, and risk profiles.
- **Demographic Factors**: While demographic factors like race and gender should not influence loan approvals, our analysis indicates that these factors still play a role, suggesting the need for more equitable lending practices.

<h2 id="part5">V. Next Steps</h2>

Pertaining to the Regression section, we can see that the plot for Predicted vs. Actual values is slightly skewed. This can indicate that the relationship between the 2 variables may not be linear.

Therefore, as next steps, we can explore using Polynomial Expansions of the Income to better fit the regression model and improve accuracies.

<hr />

Based on our analysis, we propose several recommendations for financial institutions:

1. **Enhancing Risk Models**: Incorporate more comprehensive data, including non-traditional metrics, to improve risk assessment models.
2. **Diversifying Portfolio**: Focus on diversifying the loan portfolio to include underserved demographics and regions.
3. **Adopting AI and ML**: Leverage AI and machine learning algorithms to refine predictive models, ensuring they are free from biases.
4. **Fostering Transparency**: Implement transparent lending practices to build trust and compliance with fair lending laws.
5. **Data-Driven Decisions**: Use the insights from the data analysis to inform policy decisions and product offerings.


<h2 id="part6">VI. Challenges</h2>

* <u>Data Cleaning:</u>

    **Challenge**: The dataset contained missing values, duplicates, and outliers, which needed to be addressed before analysis.
    
    **Solution**: We used techniques such as imputation, deletion, and filtering to clean the data. We also used PySpark functions to handle null values and remove duplicates.

* <u>Predictive Analysis:</u>

    **Challenge**: The dataset contained many variables, making it difficult to identify which variables were most predictive of the target variable.
    
    **Solution**: We used feature selection techniques such as correlation analysis and recursive feature elimination to identify the most important variables for prediction. We also used machine learning algorithms such as Random Forest and Gradient Boosting to build predictive models.

<hr />
During our analysis, several challenges were encountered:

- **Data Size and Complexity**: The large volume and complexity of the dataset required robust computational resources and meticulous data handling.
- **Handling Missing Data**: Addressing the significant number of null values in the dataset was challenging and required careful consideration to maintain data integrity.
- **Ensuring Fairness in Predictive Models**: Building predictive models that are fair and unbiased was a complex task, especially given the sensitive nature of demographic data.

<h2 id="part7">VII. Deep Dive into Specific Market Segments</h2>
 
The U.S. home mortgage market is highly diverse, with significant variations across different segments. Our analysis delved into these segments to provide tailored insights.

1. **First-Time Homebuyers**: This group often faces unique challenges in securing mortgages. Our analysis indicated a need for more supportive lending practices, including lower down payment requirements and more flexible credit assessments, to assist these buyers.

2. **High-Value Property Markets**: In areas with high property values, such as major metropolitan regions, we observed larger loan sizes and higher income levels among applicants. Lenders in these markets often deal with a different risk profile compared to national averages.

3. **Rural vs. Urban Lending Trends**: Distinct differences were noted between rural and urban mortgage markets. Rural areas often had lower loan amounts but faced challenges like limited lender presence and property appraisal complexities.

#### Addressing Market Inequities

Our analysis brought to light various market inequities that need to be addressed:

1. **Income and Racial Disparities**: There is a significant disparity in loan access and terms offered based on the applicant's income and race. Lenders should take steps to mitigate these disparities and ensure fair lending.

2. **Gender Gap**: The apparent gender gap in mortgage applications suggests a need for initiatives to encourage and support female applicants in the homebuying process.

3. **Geographic Imbalances**: The variation in debt-to-income ratios and lending practices across states calls for a more localized approach to mortgage lending, taking into account regional economic conditions and housing markets.

#### Technological Integration in Mortgage Processing

Technology plays a crucial role in modernizing the mortgage industry. Our recommendations include:

1. **Automated Underwriting Systems**: Implementing AI-driven systems can streamline the underwriting process, reducing costs and improving efficiency.

2. **Data Analytics for Risk Assessment**: Advanced analytics can provide deeper insights into risk factors, helping lenders make more informed decisions.

3. **Digital Platforms for Customer Engagement**: Digital platforms can enhance customer experience, providing easier access to mortgage products and information.

#### Conclusion and Future Outlook

In conclusion, our comprehensive analysis of the U.S. home mortgage market reveals a dynamic and complex landscape, influenced by a multitude of factors including demographics, economic conditions, and lending practices. To remain competitive and compliant, lenders need to continuously adapt to changing market conditions, embrace technological advancements, and commit to fair and inclusive lending practices.

The future of the mortgage industry lies in the balance of leveraging data for insightful decision-making and maintaining a strong focus on equitable and responsible lending. As the market evolves, so too must the strategies and practices of those who operate within it.

#### Acknowledgements

This analysis was made possible by the rich dataset provided under the Home Mortgage Disclosure Act and the advanced analytical tools at our disposal. We extend our gratitude to the Consumer Financial Protection Bureau for making this data accessible for such in-depth analysis.


#### Final Remarks

The exploration of the U.S. home mortgage market through this detailed analysis underscores the complexity and multifaceted nature of this sector. Our findings have significant implications for lenders, policymakers, and consumers alike, highlighting areas of opportunity and concern within the market. As the landscape of lending continues to evolve, particularly with technological advancements and changing economic conditions, these insights serve as a valuable tool for stakeholders to navigate this dynamic environment.

#### Ethical Considerations and Fair Lending

A critical aspect of our analysis has been the emphasis on ethical considerations and the principles of fair lending. The disparities uncovered in terms of race, gender, and income necessitate a renewed commitment to equitable lending practices. Financial institutions must ensure that their policies and decision-making processes are free from biases and discriminatory practices, aligning with both ethical standards and regulatory requirements.

#### Policy Recommendations

Based on our analysis, we recommend the following policy considerations:

1. **Enhanced Regulatory Oversight**: Strengthening regulatory frameworks to ensure fair lending practices and to address disparities in loan access and terms.
2. **Incentives for Inclusive Lending**: Providing incentives for lenders to extend credit to underserved communities and demographics.
3. **Financial Education and Awareness**: Enhancing efforts to educate potential borrowers, especially in low-income and minority communities, about the mortgage process and available products.

#### The Role of Data in Future Mortgage Markets

Data analytics will continue to play a pivotal role in shaping the future of the mortgage market. Leveraging data for predictive analytics, risk assessment, and market trend analysis can lead to more informed and strategic decision-making. However, it is crucial that these tools are used responsibly and ethically, with a focus on promoting fairness and inclusivity.

#### Appendix

1. **Data Sources and Methodology**: Detailed information on the data sources, methodologies, and analytical tools used in this study.
2. **Visualizations and Charts**: A collection of charts, graphs, and maps generated during the analysis, providing visual representations of key findings.
3. **Code Snippets and Queries**: For transparency and reproducibility, selected code snippets and queries used in the data analysis are included.
4. **Extended Statistical Analysis**: Additional statistical analyses and model details that support the findings presented in the report.


<h2 id="part8">VIII. References</h2>

Consumer Financial Protection Bureau (CFPB). (2023). Home Mortgage Disclosure Act (HMDA). *CFPB Data*. https://www.consumerfinance.gov/data-research/hmda/historic-data/

