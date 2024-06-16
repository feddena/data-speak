export const ANALITIC_ROLE_PROMPT = 
`
YOU ARE A PROFESSIONAL BUSINESS ANALYTICS ASSISTANT WHO WRITES SQL QUERIES FOR A DIGITAL COMPANY THAT PROVIDES CREATIVE SERVICES. YOUR TASK IS TO WRITE OPTIMIZED SQL QUERIES FOR A DATABASE WHERE THE MAIN BUSINESS IS TO PROVIDE CUSTOMERS (TEAMS) WITH CREATIVE ASSETS REQUESTED VIA PROJECTS. THE COST IS CALCULATED BASED ON THE HOURS LOGGED BY CREATIVES NECESSARY TO CREATE AN ASSET TO DELIVER TO CUSTOMERS.
`

export const INSTRUCTIONS_PROMPT = 
`
###INSTRUCTIONS###

- RETURN THE SQL CODE ALWAYS AT THE END AND WRAPP IT IN \`\`\`sql\`\`\`
- PREFIX EVERY TABLE NAME WITH "WAREHOUSE." WHEN WRITING SQL QUERIES.
- JOIN TABLES BASED ON COLUMNS WITH THE SAME NAME (e.g., project_id WITH project_id, team_id WITH team_id, user_id WITH user_id), UNLESS SPECIFICALLY REQUESTED OTHERWISE BY THE USER.
- SELECT ALL FIELDS WITHOUT SPECIFYING FIELD NAMES LIKE 'SELECT field1, field2, field3 WAREHOUSE.table'.
- OPTIMIZE ALL QUERIES FOR BEST PERFORMANCE, AVOIDING UNNECESSARY AND REDUNDANT CODE.
- IF A REQUEST IS UNCLEAR, ASK FOR MORE CONTEXT USING THIS ANSWER WITH REPLACED BY MATCHING TO SCHEMA PLACEHOLDERS: 'placeholder of unclear request' doesn't seem to relate to any fields or terms that I recognize in the database schema. Could you please clarify or provide more context?
- IF YOU THINK YOU KNOW HOW TO CORRECT UNCLEAR REQUEST, ADD TO THE ANSWER: If you meant 'placeholder of the closes request you know how to answer to', or something similar, please let me know.
`

export const CHAIN_OF_THOUGHTS_PROMPT = 
`
###CHAIN OF THOUGHTS###

1. **UNDERSTAND THE REQUEST:**
   - IDENTIFY THE MAIN OBJECTIVE OF THE QUERY.
   - DETERMINE THE TABLES AND FIELDS INVOLVED BASED ON THE USER'S DESCRIPTION.

2. **CONSTRUCT THE QUERY:**
   - START WITH THE BASIC SELECT STATEMENT.
   - JOIN NECESSARY TABLES USING THE PREFIX "WAREHOUSE.".
   - APPLY CONDITIONS AND AGGREGATIONS AS REQUIRED.

3. **OPTIMIZE THE QUERY:**
   - REMOVE REDUNDANT CODE AND ENSURE EFFICIENT JOIN CONDITIONS.
   - UTILIZE INDEXES AND OTHER OPTIMIZATION TECHNIQUES.

4. **VALIDATE AND FINALIZE:**
   - DOUBLE-CHECK THE QUERY FOR ACCURACY AND PERFORMANCE.
   - ENSURE THE QUERY RETURNS THE DESIRED RESULTS AS PER THE REQUEST.
`

export const WAHT_NOT_TO_DO_PROMPT = 
`
###WHAT NOT TO DO###

OBEY AND NEVER:
- NEVER RETURN SQL CODE WITH ANY WRAPPERS (E.G., QUOTATION MARKS, CODE BLOCKS).
- NEVER JOIN TABLES ON NON-MATCHING COLUMN NAMES UNLESS SPECIFIED.
- NEVER USE SPECIFIC FIELD NAMES IF SELECTING ALL FIELDS.
- NEVER WRITE INEFFICIENT OR REDUNDANT CODE.
- NEVER ASSUME REQUESTS WITHOUT CLARIFICATION IF UNCERTAIN.
`

export const EXAMPLE_CONFIRMATION = 
`
###EXAMPLE CONFIRMATION###

WHEN REQUESTED, PROVIDE A CLEAR AND CONCISE SUMMARY OF UNDERSTANDING:
"I UNDERSTAND THAT MY ROLE IS TO WRITE OPTIMIZED SQL QUERIES FOR A CREATIVE SERVICES COMPANY, ENSURING ALL TABLE NAMES ARE PREFIXED WITH 'WAREHOUSE.' AND JOINED BASED ON MATCHING COLUMN NAMES, UNLESS OTHERWISE SPECIFIED. I WILL PROVIDE SQL CODE ONLY, WITHOUT ANY WRAPPER, AND SEEK CLARIFICATION IF THE REQUEST IS UNCLEAR."
`

export const DB_SCHEMA = 
`
Info about the tables in tsv format:
TABLE_NAME	TABLE_DESCRIPTION	COLUMN_NAME	DATA_TYPE	COLUMN_DESCRIPTION	EXAMPLES
DIM_ASSET	All assets, including folders, files, links, Key Arts and Key Art Variants, created in Projects, Brand Lab, as chat attachments, asset comment sor deliverables. This table joins entity_id with the corresponding entity_type	SOURCE_TYPE	NUMBER		
DIM_ASSET	All assets, including folders, files, links, Key Arts and Key Art Variants, created in Projects, Brand Lab, as chat attachments, asset comment sor deliverables. This table joins entity_id with the corresponding entity_type	FILE_INFO_UUID	TEXT		
DIM_ASSET	All assets, including folders, files, links, Key Arts and Key Art Variants, created in Projects, Brand Lab, as chat attachments, asset comment sor deliverables. This table joins entity_id with the corresponding entity_type	AUTHOR_USER_ID	NUMBER		
DIM_ASSET	All assets, including folders, files, links, Key Arts and Key Art Variants, created in Projects, Brand Lab, as chat attachments, asset comment sor deliverables. This table joins entity_id with the corresponding entity_type	DATE_ASSET_CREATED	TIMESTAMP_NTZ		
DIM_ASSET	All assets, including folders, files, links, Key Arts and Key Art Variants, created in Projects, Brand Lab, as chat attachments, asset comment sor deliverables. This table joins entity_id with the corresponding entity_type	VISIBLE_FOR_CUSTOMER	BOOLEAN		
DIM_ASSET	All assets, including folders, files, links, Key Arts and Key Art Variants, created in Projects, Brand Lab, as chat attachments, asset comment sor deliverables. This table joins entity_id with the corresponding entity_type	FILE_INFO_ID	NUMBER		
DIM_ASSET	All assets, including folders, files, links, Key Arts and Key Art Variants, created in Projects, Brand Lab, as chat attachments, asset comment sor deliverables. This table joins entity_id with the corresponding entity_type	VERSION	NUMBER		
DIM_ASSET	All assets, including folders, files, links, Key Arts and Key Art Variants, created in Projects, Brand Lab, as chat attachments, asset comment sor deliverables. This table joins entity_id with the corresponding entity_type	TYPE	TEXT		"[
  ""FILE"",
  ""FOLDER"",
  ""KEY_ART"",
  ""KEY_ART_VARIANT"",
  ""LINK""
]"
DIM_ASSET	All assets, including folders, files, links, Key Arts and Key Art Variants, created in Projects, Brand Lab, as chat attachments, asset comment sor deliverables. This table joins entity_id with the corresponding entity_type	VERSION_NUMBER	NUMBER		
DIM_ASSET	All assets, including folders, files, links, Key Arts and Key Art Variants, created in Projects, Brand Lab, as chat attachments, asset comment sor deliverables. This table joins entity_id with the corresponding entity_type	TITLE	TEXT		
DIM_ASSET	All assets, including folders, files, links, Key Arts and Key Art Variants, created in Projects, Brand Lab, as chat attachments, asset comment sor deliverables. This table joins entity_id with the corresponding entity_type	ENTITY_TYPE	TEXT		"[
  ""ASSET_COMMENT"",
  ""BRAND_LAB"",
  ""CHAT_ATTACHMENT"",
  ""DELIVERABLE"",
  ""PROJECT""
]"
DIM_ASSET	All assets, including folders, files, links, Key Arts and Key Art Variants, created in Projects, Brand Lab, as chat attachments, asset comment sor deliverables. This table joins entity_id with the corresponding entity_type	COMPANY_ID	NUMBER		
DIM_ASSET	All assets, including folders, files, links, Key Arts and Key Art Variants, created in Projects, Brand Lab, as chat attachments, asset comment sor deliverables. This table joins entity_id with the corresponding entity_type	PATH	TEXT		
DIM_ASSET	All assets, including folders, files, links, Key Arts and Key Art Variants, created in Projects, Brand Lab, as chat attachments, asset comment sor deliverables. This table joins entity_id with the corresponding entity_type	PRIMARY_KEY_ART_ID	NUMBER		
DIM_ASSET	All assets, including folders, files, links, Key Arts and Key Art Variants, created in Projects, Brand Lab, as chat attachments, asset comment sor deliverables. This table joins entity_id with the corresponding entity_type	DATE_ASSET_UPDATED	TIMESTAMP_NTZ		
DIM_ASSET	All assets, including folders, files, links, Key Arts and Key Art Variants, created in Projects, Brand Lab, as chat attachments, asset comment sor deliverables. This table joins entity_id with the corresponding entity_type	COVER_FILE_INFO_ID	NUMBER		
DIM_ASSET	All assets, including folders, files, links, Key Arts and Key Art Variants, created in Projects, Brand Lab, as chat attachments, asset comment sor deliverables. This table joins entity_id with the corresponding entity_type	DRAFT_NUMBER	NUMBER		
DIM_ASSET	All assets, including folders, files, links, Key Arts and Key Art Variants, created in Projects, Brand Lab, as chat attachments, asset comment sor deliverables. This table joins entity_id with the corresponding entity_type	ASSET_UUID	TEXT		
DIM_ASSET	All assets, including folders, files, links, Key Arts and Key Art Variants, created in Projects, Brand Lab, as chat attachments, asset comment sor deliverables. This table joins entity_id with the corresponding entity_type	CATEGORY_KEY	TEXT		
DIM_ASSET	All assets, including folders, files, links, Key Arts and Key Art Variants, created in Projects, Brand Lab, as chat attachments, asset comment sor deliverables. This table joins entity_id with the corresponding entity_type	COVER_FILE_INFO_UUID	TEXT		
DIM_ASSET	All assets, including folders, files, links, Key Arts and Key Art Variants, created in Projects, Brand Lab, as chat attachments, asset comment sor deliverables. This table joins entity_id with the corresponding entity_type	CONTENT_TYPE	TEXT		
DIM_ASSET	All assets, including folders, files, links, Key Arts and Key Art Variants, created in Projects, Brand Lab, as chat attachments, asset comment sor deliverables. This table joins entity_id with the corresponding entity_type	CONTENT_LENGTH	NUMBER		
DIM_ASSET	All assets, including folders, files, links, Key Arts and Key Art Variants, created in Projects, Brand Lab, as chat attachments, asset comment sor deliverables. This table joins entity_id with the corresponding entity_type	AUTHOR_USER_UUID	TEXT		
DIM_ASSET	All assets, including folders, files, links, Key Arts and Key Art Variants, created in Projects, Brand Lab, as chat attachments, asset comment sor deliverables. This table joins entity_id with the corresponding entity_type	ASSET_ID	TEXT		
DIM_ASSET	All assets, including folders, files, links, Key Arts and Key Art Variants, created in Projects, Brand Lab, as chat attachments, asset comment sor deliverables. This table joins entity_id with the corresponding entity_type	LATEST_SENT_TO_CUSTOMER_DATE	TIMESTAMP_NTZ		
DIM_ASSET	All assets, including folders, files, links, Key Arts and Key Art Variants, created in Projects, Brand Lab, as chat attachments, asset comment sor deliverables. This table joins entity_id with the corresponding entity_type	DELIVERY_TYPE	NUMBER		
DIM_ASSET	All assets, including folders, files, links, Key Arts and Key Art Variants, created in Projects, Brand Lab, as chat attachments, asset comment sor deliverables. This table joins entity_id with the corresponding entity_type	DATE_ASSET_DELETED	TIMESTAMP_NTZ		
DIM_ASSET	All assets, including folders, files, links, Key Arts and Key Art Variants, created in Projects, Brand Lab, as chat attachments, asset comment sor deliverables. This table joins entity_id with the corresponding entity_type	ENTITY_ID	TEXT		
DIM_MILESTONE	Most recent information of all project milestones	TEAM_ID	TEXT	the unique identifier of the team	
DIM_MILESTONE	Most recent information of all project milestones	MILESTONE_ID	TEXT	the unique identifier of the milestone	
DIM_MILESTONE	Most recent information of all project milestones	PROJECT_ID	TEXT	the unique identifier of the project	
DIM_MILESTONE	Most recent information of all project milestones	DATE_MILESTONE_DELETED	TIMESTAMP_NTZ	if the milestone was deleted, it show the date of this action	
DIM_MILESTONE	Most recent information of all project milestones	CREATOR_STAFF_ID	TEXT	the staff_id of user who created the milestone (if staff)	
DIM_MILESTONE	Most recent information of all project milestones	IS_DELETED	BOOLEAN	if the milestone was deleted or not	
DIM_MILESTONE	Most recent information of all project milestones	CREATOR_USER_ID	TEXT	the user who created the milestone	
DIM_MILESTONE	Most recent information of all project milestones	DATE_MILESTONE_LAST_UPDATED	TIMESTAMP_NTZ		
DIM_MILESTONE	Most recent information of all project milestones	TYPE	TEXT	the type of the milestone	
DIM_MILESTONE	Most recent information of all project milestones	DATE_MILESTONE_DEADLINE	TIMESTAMP_NTZ	the deadline for the milestone to be delivered	
DIM_MILESTONE	Most recent information of all project milestones	NOTES	TEXT	opened field to add notes to the milestone	
DIM_MILESTONE	Most recent information of all project milestones	CREATOR_USERNAME	TEXT		
DIM_MILESTONE	Most recent information of all project milestones	NAME	TEXT	the name of the milestone	
DIM_MILESTONE	Most recent information of all project milestones	DATE_MILESTONE_CREATED	TIMESTAMP_NTZ	when the milestone was first created	
DIM_PROJECT	Dimension table containing all projects and project specific data.	NAME	TEXT		
DIM_PROJECT	Dimension table containing all projects and project specific data.	SP_ESTIMATE	FLOAT		
DIM_PROJECT	Dimension table containing all projects and project specific data.	AD_ESTIMATE	FLOAT		
DIM_PROJECT	Dimension table containing all projects and project specific data.	DATE_PROJECT_DEADLINE	TIMESTAMP_NTZ		
DIM_PROJECT	Dimension table containing all projects and project specific data.	PRODUCT_ID	NUMBER		
DIM_PROJECT	Dimension table containing all projects and project specific data.	DATE_PROJECT_UPDATED	TIMESTAMP_NTZ		
DIM_PROJECT	Dimension table containing all projects and project specific data.	MAX_ESTIMATE	FLOAT		
DIM_PROJECT	Dimension table containing all projects and project specific data.	FOLDER	TEXT		
DIM_PROJECT	Dimension table containing all projects and project specific data.	PM_ESTIMATE	FLOAT		
DIM_PROJECT	Dimension table containing all projects and project specific data.	DELIVERY	TEXT		
DIM_PROJECT	Dimension table containing all projects and project specific data.	TEAM	TEXT		
DIM_PROJECT	Dimension table containing all projects and project specific data.	DATE_PROJECT_GRABBED	TIMESTAMP_NTZ		
DIM_PROJECT	Dimension table containing all projects and project specific data.	TEAM_TYPE	TEXT		
DIM_PROJECT	Dimension table containing all projects and project specific data.	SUB_SERVICE	TEXT		
DIM_PROJECT	Dimension table containing all projects and project specific data.	STAFFING_VERSION	TEXT	Takes values V1, V2, V3, V3_5, V4 corresponding to versions 2.0, 3.0, 3.x, 4.0, etc.	
DIM_PROJECT	Dimension table containing all projects and project specific data.	DISCOUNT	FLOAT		
DIM_PROJECT	Dimension table containing all projects and project specific data.	IS_SUBMITTED_FROM_INTERNAL	BOOLEAN		
DIM_PROJECT	Dimension table containing all projects and project specific data.	PROJECT_ID	TEXT		
DIM_PROJECT	Dimension table containing all projects and project specific data.	TEAM_ID	TEXT		
DIM_PROJECT	Dimension table containing all projects and project specific data.	IS_CREATED_WITH_DELIVERABLES	BOOLEAN		
DIM_PROJECT	Dimension table containing all projects and project specific data.	RATE	FLOAT		
DIM_PROJECT	Dimension table containing all projects and project specific data.	DATE_PROJECT_SUBMITTED	TIMESTAMP_NTZ		
DIM_PROJECT	Dimension table containing all projects and project specific data.	INTERNAL_DESCRIPTION	TEXT		
DIM_PROJECT	Dimension table containing all projects and project specific data.	STATUS	TEXT		
DIM_PROJECT	Dimension table containing all projects and project specific data.	SOURCE_APP	TEXT	The App/Integration used to create the brief	
DIM_PROJECT	Dimension table containing all projects and project specific data.	IS_PROJECT_AI_ENABLED	BOOLEAN	True if the customer allow us to use AI to enhance the project output. This flag is set at the project level.	
DIM_PROJECT	Dimension table containing all projects and project specific data.	DATE_PROJECT_ENDED	TIMESTAMP_NTZ		
DIM_PROJECT	Dimension table containing all projects and project specific data.	MIN_ESTIMATE	FLOAT		
DIM_PROJECT	Dimension table containing all projects and project specific data.	ID	TEXT		
DIM_PROJECT	Dimension table containing all projects and project specific data.	CPM	TEXT		
DIM_PROJECT	Dimension table containing all projects and project specific data.	TIMEZONE	TEXT		
DIM_PROJECT	Dimension table containing all projects and project specific data.	SERVICE	TEXT		
DIM_PROJECT	Dimension table containing all projects and project specific data.	PROJECT_SERVICE_ID	NUMBER		
DIM_PROJECT	Dimension table containing all projects and project specific data.	DIM_CPM_ID	TEXT		
DIM_PROJECT	Dimension table containing all projects and project specific data.	IS_CRITICAL_DELIVERY	BOOLEAN		
DIM_PROJECT	Dimension table containing all projects and project specific data.	CPM_ID	TEXT		
DIM_PROJECT	Dimension table containing all projects and project specific data.	PRODUCT	TEXT		
DIM_PROJECT	Dimension table containing all projects and project specific data.	CUSTOMER_ID	NUMBER		
DIM_PROJECT	Dimension table containing all projects and project specific data.	DESCRIPTION	TEXT		
DIM_PROJECT	Dimension table containing all projects and project specific data.	QUALITY	TEXT		
DIM_PROJECT	Dimension table containing all projects and project specific data.	DATE_PROJECT_STARTED	TIMESTAMP_NTZ		
DIM_PROJECT	Dimension table containing all projects and project specific data.	DATE_PROJECT_CREATED	TIMESTAMP_NTZ		
DIM_PROJECT_ASSETS	Brings data about design assets related to a project. It contains the final designs and their versions.	HOURS_BETWEEN_ASSETS_SENT_TO_CUSTOMER	NUMBER	Calculate the amount of hours between two designs shared with the customer	
DIM_PROJECT_ASSETS	Brings data about design assets related to a project. It contains the final designs and their versions.	DATE_PROJECT_CREATED	TIMESTAMP_NTZ	The date the project was created	
DIM_PROJECT_ASSETS	Brings data about design assets related to a project. It contains the final designs and their versions.	IS_FIRST_ASSET_SENT_TO_CUSTOMER	BOOLEAN	True if the asset was the first to be sent to the customer in the project	
DIM_PROJECT_ASSETS	Brings data about design assets related to a project. It contains the final designs and their versions.	DATE_PROJECT_SUBMITTED	TIMESTAMP_NTZ	The date the project was submitted	
DIM_PROJECT_ASSETS	Brings data about design assets related to a project. It contains the final designs and their versions.	DATE_ASSET_UPDATED	TIMESTAMP_NTZ	The date it asset was updated. For the ones that were shared with the customer, the updated date is the same as the date shared with customer	
DIM_PROJECT_ASSETS	Brings data about design assets related to a project. It contains the final designs and their versions.	DRAFT_NUMBER	NUMBER	For the DESIGN_VERSION, counts which is the version of the draf	
DIM_PROJECT_ASSETS	Brings data about design assets related to a project. It contains the final designs and their versions.	IS_LAST_ASSET_SENT_TO_CUSTOMER	BOOLEAN	True if the asset was the last to be sent to the customer in the project	
DIM_PROJECT_ASSETS	Brings data about design assets related to a project. It contains the final designs and their versions.	ASSET_ID	TEXT	The unique ID of the asset	
DIM_PROJECT_ASSETS	Brings data about design assets related to a project. It contains the final designs and their versions.	AUTHOR_USER_ID	NUMBER	The user_id of the person who uploaded the design	
DIM_PROJECT_ASSETS	Brings data about design assets related to a project. It contains the final designs and their versions.	PROJECT_ID	TEXT	The unique ID of the project	
DIM_PROJECT_ASSETS	Brings data about design assets related to a project. It contains the final designs and their versions.	TEAM_ID	TEXT		
DIM_PROJECT_ASSETS	Brings data about design assets related to a project. It contains the final designs and their versions.	DATE_LATEST_SENT_TO_CUSTOMER	TIMESTAMP_NTZ	The most updated date of when the design was shared with the customer	
DIM_PROJECT_ASSETS	Brings data about design assets related to a project. It contains the final designs and their versions.	IS_VISIBLE_TO_CUSTOMER	BOOLEAN	True if the design was shared with the customer	
DIM_PROJECT_ASSETS	Brings data about design assets related to a project. It contains the final designs and their versions.	DATE_PROJECT_STARTED	TIMESTAMP_NTZ	The date the project was started	
DIM_PROJECT_ASSETS	Brings data about design assets related to a project. It contains the final designs and their versions.	ASSET_TYPE	TEXT	Type of the Asset, DESIGN_VERSION is for each version of the design, DESIGN is a set of DESIGN_VERSION.	"[
  ""KEY_ART"",
  ""KEY_ART_VARIANT"",
  ""LINK""
]"
DIM_PROJECT_ASSETS	Brings data about design assets related to a project. It contains the final designs and their versions.	DATE_ASSET_CREATED	TIMESTAMP_NTZ	The date the asset or the version was uploaded for the first time	
DIM_PROJECT_ASSETS	Brings data about design assets related to a project. It contains the final designs and their versions.	ASSET_CREATION_ORDER	NUMBER	The order (rank) of the asset within the project by creation date	
DIM_PROJECT_POSITION	A table containing all the info of project positions. Includes the position role (Creative or Creative Lead), the skill and skill level, as well as the version.	INVITED_BY_ID	TEXT		
DIM_PROJECT_POSITION	A table containing all the info of project positions. Includes the position role (Creative or Creative Lead), the skill and skill level, as well as the version.	SERVICE	TEXT	The service of the project.	
DIM_PROJECT_POSITION	A table containing all the info of project positions. Includes the position role (Creative or Creative Lead), the skill and skill level, as well as the version.	PROJECT_ID	TEXT		
DIM_PROJECT_POSITION	A table containing all the info of project positions. Includes the position role (Creative or Creative Lead), the skill and skill level, as well as the version.	PROJECT_POSITION_ID	TEXT		
DIM_PROJECT_POSITION	A table containing all the info of project positions. Includes the position role (Creative or Creative Lead), the skill and skill level, as well as the version.	DATE_PROJECT_POSITION_UPDATED	TIMESTAMP_NTZ		
DIM_PROJECT_POSITION	A table containing all the info of project positions. Includes the position role (Creative or Creative Lead), the skill and skill level, as well as the version.	SKILL	TEXT	The skill specified for the position.	
DIM_PROJECT_POSITION	A table containing all the info of project positions. Includes the position role (Creative or Creative Lead), the skill and skill level, as well as the version.	ESTIMATED_HOURS_BY_SPECIALIST	FLOAT		
DIM_PROJECT_POSITION	A table containing all the info of project positions. Includes the position role (Creative or Creative Lead), the skill and skill level, as well as the version.	INVITED_SPECIALIST_ID	TEXT		
DIM_PROJECT_POSITION	A table containing all the info of project positions. Includes the position role (Creative or Creative Lead), the skill and skill level, as well as the version.	STAFFING_VERSION	TEXT	Takes values V1, V2, V3 or V3_5 corresponding to versions 2.0, 3.0, 3.1, etc.	
DIM_PROJECT_POSITION	A table containing all the info of project positions. Includes the position role (Creative or Creative Lead), the skill and skill level, as well as the version.	SKILL_LEVEL	TEXT	The skill level specified for the position.	
DIM_PROJECT_POSITION	A table containing all the info of project positions. Includes the position role (Creative or Creative Lead), the skill and skill level, as well as the version.	POSITION_ROLE	TEXT	The role of the position. Differentiate between Creative and Creative Lead positions.	
DIM_PROJECT_POSITION	A table containing all the info of project positions. Includes the position role (Creative or Creative Lead), the skill and skill level, as well as the version.	PRODUCT	TEXT	The product of the project.	
DIM_PROJECT_POSITION	A table containing all the info of project positions. Includes the position role (Creative or Creative Lead), the skill and skill level, as well as the version.	DATE_PROJECT_POSITION_CREATED	TIMESTAMP_NTZ		
DIM_PROJECT_POSITION	A table containing all the info of project positions. Includes the position role (Creative or Creative Lead), the skill and skill level, as well as the version.	DATE_PROJECT_POSITION_REJECTED	TIMESTAMP_NTZ		
DIM_PROJECT_POSITION	A table containing all the info of project positions. Includes the position role (Creative or Creative Lead), the skill and skill level, as well as the version.	DATE_PROJECT_POSITION_ASSIGNED	TIMESTAMP_NTZ		
DIM_PROJECT_POSITION	A table containing all the info of project positions. Includes the position role (Creative or Creative Lead), the skill and skill level, as well as the version.	NOTE_BY_PROJECT_MANAGER	TEXT		
DIM_PROJECT_POSITION	A table containing all the info of project positions. Includes the position role (Creative or Creative Lead), the skill and skill level, as well as the version.	NOTE_BY_SPECIALIST	TEXT		
DIM_PROJECT_POSITION	A table containing all the info of project positions. Includes the position role (Creative or Creative Lead), the skill and skill level, as well as the version.	DATE_PROJECT_POSITION_DELETED	TIMESTAMP_NTZ		
DIM_PROJECT_POSITION	A table containing all the info of project positions. Includes the position role (Creative or Creative Lead), the skill and skill level, as well as the version.	ESTIMATED_HOURS_BY_PROJECT_MANAGER	FLOAT		
DIM_PROJECT_POSITION	A table containing all the info of project positions. Includes the position role (Creative or Creative Lead), the skill and skill level, as well as the version.	ROLE	TEXT		
DIM_PROJECT_POSITION	A table containing all the info of project positions. Includes the position role (Creative or Creative Lead), the skill and skill level, as well as the version.	ASSIGNED_SPECIALIST_ID	TEXT		
DIM_PROJECT_POSITION	A table containing all the info of project positions. Includes the position role (Creative or Creative Lead), the skill and skill level, as well as the version.	TEAM_ID	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	VALID_TO	TIMESTAMP_NTZ		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	MANAGER_USERNAME	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	MANAGER_OF_MANAGER_STAFF_ID	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	LANGUAGES	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	SKILL_TAGS	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	POSITION_LEVEL	NUMBER		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	JOB_LEVEL	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	MANAGER_STAFF_ID	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	POSITION	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	ROLE	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	CURRENT_MANAGER_USERNAME	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	MANAGER_EMAIL	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	USERNAME	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	W_8_OR_W_9	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	PRIMARY_CATEGORY	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	TITLE	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	SLACK_NAME	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	CREATED	TIMESTAMP_NTZ		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	RSA	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	USER_UUID	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	GENDER	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	EXPERT_INDUSTRIES	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	SLACK_USER_ID	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	END_DATE	TIMESTAMP_NTZ		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	ENTITY	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	PEOPLE_CARE_SPECIALIST	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	TEAM	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	SOFTWARES	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	OFFBOARDED_DATE	TIMESTAMP_NTZ		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	FUNCTION	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	WRITING_STYLES	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	CITIZENSHIP	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	FULL_NAME	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	HIRED_DATE	TIMESTAMP_NTZ		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	RESIDENCY	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	START_DATE	TIMESTAMP_NTZ		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	JOB_CATEGORY	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	TIMEZONE	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	VALID_FROM	TIMESTAMP_NTZ		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	SALESFORCE_USER_ID	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	ID	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	CURRENT_MANAGER_EMAIL	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	EMPLOYEE_CONTRACTOR	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	FOLDER	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	CURRENT_MANAGER_OF_MANAGER_EMAIL	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	ROLE_SF	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	FUNCTIONAL_GROUP	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	KONSUS_EMAIL	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	UPDATED	TIMESTAMP_NTZ		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	USER_ID	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	SECONDARY_CATEGORY	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	STAFF_ID	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	CURRENT_MANAGER_OF_MANAGER_USERNAME	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	DEPARTMENT	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	CURRENT_MANAGER_STAFF_ID	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	CPM_TEAM	NUMBER		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	DESIGN_STYLES	TEXT		
DIM_STAFF	A table containing all staff, including organisational information and historical changes in role, manager, department, sub-department, job level and job category.	IS_CURRENT	BOOLEAN		
DIM_SUBSCRIPTION_PLAN	Dimension table containing all the relevant data retaled to our subscription plans. The 'custom' plans have been asigned a subscription level = 5. This table contains a surrogate key, as a result of combining data from our internal database and from Salesforce.	CREDITS_VALIDITY_MONTHS	NUMBER		
DIM_SUBSCRIPTION_PLAN	Dimension table containing all the relevant data retaled to our subscription plans. The 'custom' plans have been asigned a subscription level = 5. This table contains a surrogate key, as a result of combining data from our internal database and from Salesforce.	IN_PLAN_RATE	FLOAT		
DIM_SUBSCRIPTION_PLAN	Dimension table containing all the relevant data retaled to our subscription plans. The 'custom' plans have been asigned a subscription level = 5. This table contains a surrogate key, as a result of combining data from our internal database and from Salesforce.	IS_ADDON_SOLUTION	BOOLEAN	Boolean value that flags if the susbcription plan is an ADD-ON one.	
DIM_SUBSCRIPTION_PLAN	Dimension table containing all the relevant data retaled to our subscription plans. The 'custom' plans have been asigned a subscription level = 5. This table contains a surrogate key, as a result of combining data from our internal database and from Salesforce.	IN_PLAN_FT_24H_OVERAGE_RATE	FLOAT		
DIM_SUBSCRIPTION_PLAN	Dimension table containing all the relevant data retaled to our subscription plans. The 'custom' plans have been asigned a subscription level = 5. This table contains a surrogate key, as a result of combining data from our internal database and from Salesforce.	PRODUCT_NAME	TEXT	Name of the product attached to the subscription.	
DIM_SUBSCRIPTION_PLAN	Dimension table containing all the relevant data retaled to our subscription plans. The 'custom' plans have been asigned a subscription level = 5. This table contains a surrogate key, as a result of combining data from our internal database and from Salesforce.	PRODUCT_PRICE	FLOAT	Price for the product.	
DIM_SUBSCRIPTION_PLAN	Dimension table containing all the relevant data retaled to our subscription plans. The 'custom' plans have been asigned a subscription level = 5. This table contains a surrogate key, as a result of combining data from our internal database and from Salesforce.	SOLUTION_VERSION	TEXT	Historic version of the solution attached to the product.	"[
  ""1.0"",
  ""2.0"",
  ""3.0"",
  ""3.1"",
  ""3.1a"",
  ""4.0""
]"
DIM_SUBSCRIPTION_PLAN	Dimension table containing all the relevant data retaled to our subscription plans. The 'custom' plans have been asigned a subscription level = 5. This table contains a surrogate key, as a result of combining data from our internal database and from Salesforce.	IS_STANDALONE_SOLUTION	BOOLEAN	Boolean value that flags if the susbcription plan is a STANDALONE one.	
DIM_SUBSCRIPTION_PLAN	Dimension table containing all the relevant data retaled to our subscription plans. The 'custom' plans have been asigned a subscription level = 5. This table contains a surrogate key, as a result of combining data from our internal database and from Salesforce.	OUT_OF_PLAN_OVERAGE_RATE	FLOAT		
DIM_SUBSCRIPTION_PLAN	Dimension table containing all the relevant data retaled to our subscription plans. The 'custom' plans have been asigned a subscription level = 5. This table contains a surrogate key, as a result of combining data from our internal database and from Salesforce.	OUT_OF_PLAN_FT_12H_OVERAGE_RATE	FLOAT		
DIM_SUBSCRIPTION_PLAN	Dimension table containing all the relevant data retaled to our subscription plans. The 'custom' plans have been asigned a subscription level = 5. This table contains a surrogate key, as a result of combining data from our internal database and from Salesforce.	SOLUTION_VERSION_NAME	TEXT	Historic version of the solution attached to the subscription.	"[
  ""4.0 Deals"",
  ""Axolotl Deals"",
  ""Baldr Deals"",
  ""Subscription Deals""
]"
DIM_SUBSCRIPTION_PLAN	Dimension table containing all the relevant data retaled to our subscription plans. The 'custom' plans have been asigned a subscription level = 5. This table contains a surrogate key, as a result of combining data from our internal database and from Salesforce.	FT_MONTHLY_CREDITS_LIMIT	FLOAT		
DIM_SUBSCRIPTION_PLAN	Dimension table containing all the relevant data retaled to our subscription plans. The 'custom' plans have been asigned a subscription level = 5. This table contains a surrogate key, as a result of combining data from our internal database and from Salesforce.	SUBSCRIPTION_PLAN_ID	TEXT		
DIM_SUBSCRIPTION_PLAN	Dimension table containing all the relevant data retaled to our subscription plans. The 'custom' plans have been asigned a subscription level = 5. This table contains a surrogate key, as a result of combining data from our internal database and from Salesforce.	IS_ONEOFF_SOLUTION	BOOLEAN	Boolean value that flags if the susbcription plan is a ONE-OFF one.	
DIM_SUBSCRIPTION_PLAN	Dimension table containing all the relevant data retaled to our subscription plans. The 'custom' plans have been asigned a subscription level = 5. This table contains a surrogate key, as a result of combining data from our internal database and from Salesforce.	IN_PLAN_FT_12H_OVERAGE_RATE	FLOAT		
DIM_SUBSCRIPTION_PLAN	Dimension table containing all the relevant data retaled to our subscription plans. The 'custom' plans have been asigned a subscription level = 5. This table contains a surrogate key, as a result of combining data from our internal database and from Salesforce.	PRODUCT_ID	TEXT	Unique identifier for the product.	
DIM_SUBSCRIPTION_PLAN	Dimension table containing all the relevant data retaled to our subscription plans. The 'custom' plans have been asigned a subscription level = 5. This table contains a surrogate key, as a result of combining data from our internal database and from Salesforce.	OUT_OF_PLAN_FT_24H_OVERAGE_RATE	FLOAT		
DIM_SUBSCRIPTION_PLAN	Dimension table containing all the relevant data retaled to our subscription plans. The 'custom' plans have been asigned a subscription level = 5. This table contains a surrogate key, as a result of combining data from our internal database and from Salesforce.	IS_PRODUCT_ACTIVE	BOOLEAN	Boolean value that flags if the subscription plan has an active product.	
DIM_SUBSCRIPTION_PLAN	Dimension table containing all the relevant data retaled to our subscription plans. The 'custom' plans have been asigned a subscription level = 5. This table contains a surrogate key, as a result of combining data from our internal database and from Salesforce.	SOLUTION_TYPE	TEXT	Type of the solution attached to the subscription.	
DIM_SUBSCRIPTION_PLAN	Dimension table containing all the relevant data retaled to our subscription plans. The 'custom' plans have been asigned a subscription level = 5. This table contains a surrogate key, as a result of combining data from our internal database and from Salesforce.	SOLUTION_NAME	TEXT	Name of the solution attached to the product.	
DIM_SUBSCRIPTION_PLAN	Dimension table containing all the relevant data retaled to our subscription plans. The 'custom' plans have been asigned a subscription level = 5. This table contains a surrogate key, as a result of combining data from our internal database and from Salesforce.	SOLUTION_LEVEL	TEXT	Level of the solution associated with the product.	"[
  ""100"",
  ""150"",
  ""50"",
  ""Custom"",
  ""Level 1"",
  ""Level 2"",
  ""Level 3"",
  ""Level 4"",
  ""Level 5""
]"
DIM_SUBSCRIPTION_PLAN	Dimension table containing all the relevant data retaled to our subscription plans. The 'custom' plans have been asigned a subscription level = 5. This table contains a surrogate key, as a result of combining data from our internal database and from Salesforce.	IS_MAIN_SOLUTION	BOOLEAN	Boolean value that flags if the susbcription plan is a MAIN one.	
DIM_SUBSCRIPTION_PLAN	Dimension table containing all the relevant data retaled to our subscription plans. The 'custom' plans have been asigned a subscription level = 5. This table contains a surrogate key, as a result of combining data from our internal database and from Salesforce.	IN_PLAN_OVERAGE_RATE	FLOAT		
DIM_SUBSCRIPTION_PLAN	Dimension table containing all the relevant data retaled to our subscription plans. The 'custom' plans have been asigned a subscription level = 5. This table contains a surrogate key, as a result of combining data from our internal database and from Salesforce.	MONTHLY_CREDITS_AMOUNT	FLOAT		
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	TEAM_TYPE	TEXT	"Specifies the usage of the team between:
  - Customer: Account used by Superside Customers
  - Internal: account used by Superside Staff
  - Test: Account used by Developers for testing
  - Demo: Account used for Demo purposed
"	"[
  ""CUSTOMER"",
  ""DEMO"",
  ""INTERNAL"",
  ""TEST""
]"
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	ACCOUNT_ID	TEXT		
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	DATE_FIRST_AI_ENHANCED_PROJECT_SUBMITTED	TIMESTAMP_NTZ	The date when the first AI-enhanced project was submitted by the team.	
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	HAS_ACTIVE_SLACK_INTEGRATION	BOOLEAN	Flags true if the team has SlackApp active integration, false if not (or disabled)	
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	IS_SLACK_FULL_SYNC_ENABLED	BOOLEAN	Whether the company has enabled full synchronization with Slack within the Superside App. This field is set within the Settings page of the team.	
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	IS_SLACK_DM_NOTIFICATIONS_ENABLED	BOOLEAN	Whether the company has enabled direct message (DM) notifications from Superside within Slack. This field is set within the Settings page of the team.	
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	ID	TEXT		
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	HAS_ASANA_INTEGRATION_EVENTS	BOOLEAN	Flags true if the team has at least one event made using the Asana Integration via Zapier Webhook	
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	INDUSTRY	TEXT		
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	ACCOUNT_NAME	TEXT		
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	BILLING_STREET	TEXT		
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	DATE_ASANA_INTEGRATION_FIRST_EVENT_CREATED	TIMESTAMP_NTZ	The timestamp when the first event using the Asana Integration via Zapier Webhook was triggered	
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	DATE_FIRST_PROJECT_SUBMITTED	TIMESTAMP_NTZ	The date when the first project was submitted by the team.	
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	ACCOUNT_TIER	TEXT	Specifies how important is the account/team for the leadership team being 1 the most important one.	
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	AI_PREFERENCE	TEXT	Preference selection regarding whether the team prefers to utilize AI-based enhancements on projects. This is set within the Settings page of the team and applies to all team projects.	
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	DATE_TEAM_CHURN	TIMESTAMP_NTZ		
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	BILLING_POSTCODE	TEXT		
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	COMPANY_SIZE	TEXT		
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	BILLING_COMPANY_NAME	TEXT		
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	BILLING_PREFERRED_PAYMENT_METHOD	TEXT		
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	IS_INTERNAL_SUPERSIDE_ACCOUNT	BOOLEAN		
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	DATE_AI_PREFERENCE_UPDATED	TIMESTAMP_NTZ	Timestamp when the AI preference settings for the team were last updated or modified	
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	IS_SLACK_NOTIFICATION_HUB_ENABLED	BOOLEAN	Whether the company has enabled the Slack Notification Hub feature within the Superside App for Slack. This field is set within the Settings page of the team.	
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	HEALTH_SCORE	FLOAT	The health status of an Account. This metric is calculated in Planhat by CSM team and pushed to Salesforce.	
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	PARTNER_SEGMENTATION	TEXT		
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	INITIAL_RELATIONSHIP_SOURCE	TEXT		
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	IS_ACCOUNT_ONBOARDING_IN_PROGRESS	BOOLEAN	Indicate whether the company is currently in the process of onboarding	
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	DATE_SLACK_INTEGRATION_CREATED	TIMESTAMP_NTZ	The timestamp when the SlackApp integration was created	
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	VERTICAL	TEXT	vertical of the contract	
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	BILLING_FIRST_NAME	TEXT		
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	IS_TEAM_AI_ENABLED	BOOLEAN	True if ai_preference is 'ON'. False otherwise.	
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	DATE_FIRST_PROJECT_CREATED	TIMESTAMP_NTZ	The date when the first project was created by the team.	
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	BILLING_EMAIL	TEXT		
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	CONTRACT_ID	TEXT	Unique identifier of the team contract	
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	BILLING_STATE	TEXT		
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	CUSTOMER_TYPE	TEXT		
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	DATE_SUBSCRIPTION_END	DATE	Last subscription's date which indicate an end billing period with Superside. Note: It can change if the team decides to renew their contract.	
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	DATE_FIRST_AI_ENHANCED_PROJECT_CLOSED	TIMESTAMP_NTZ	The date when the first AI-enhanced project was closed by the team.	
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	DATE_SUBSCRIPTION_START	DATE	First subscription's date which indicate a starting billing period with Superside.	
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	IS_ACTIVE_TEAM	BOOLEAN		
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	DATE_TEAM_CREATED	TIMESTAMP_NTZ		
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	BILLING_LAST_NAME	TEXT		
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	DATE_FIRST_PROJECT_CLOSED	TIMESTAMP_NTZ	The date when the first project was closed by the team.	
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	TEAM_NAME	TEXT		
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	SEGMENT	TEXT		
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	PARENT_ACCOUNT_ID	TEXT		
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	DATE_FIRST_AI_ENHANCED_PROJECT_CREATED	TIMESTAMP_NTZ	The date when the first AI-enhanced project was created by the team.	
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	PARENT_ACCOUNT_NAME	TEXT		
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	BILLING_EMAILS	ARRAY		
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	BILLING_COUNTRY	TEXT	Billing Country details as ISO2 format	
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	BUYER_PERSONA	TEXT	Buyer persona segmentation provided by the sales team on closing a contract with the client (team).	
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	PARTNER	TEXT		
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	ORGANIZATION_ID	TEXT	Unique identifier of the organization owning the parent company of the team	
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	TEAM_ID	TEXT		
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	BILLING_CITY	TEXT		
DIM_TEAM	A team here means the customer team, where all the customers team members interact with each other. They will share the DAM, and could also easily invite and share the project with each other easily	AFFILIATED_TEAM_ID	TEXT		
DIM_USER	A table containing all superside users with their respective (staff + customers) ids	CUSTOMER_STATE	TEXT	The customer invitation status in our platform	
DIM_USER	A table containing all superside users with their respective (staff + customers) ids	USER_UUID	TEXT	Unique hashed identifier of the user	
DIM_USER	A table containing all superside users with their respective (staff + customers) ids	ENABLED	BOOLEAN	Flags whether the user is enabled to login to our platform	
DIM_USER	A table containing all superside users with their respective (staff + customers) ids	EMAIL	TEXT	The email of the user	
DIM_USER	A table containing all superside users with their respective (staff + customers) ids	CONFIRMED	BOOLEAN	Flags whether the user confirmed the email to login to our platform	
DIM_USER	A table containing all superside users with their respective (staff + customers) ids	USER_ID	TEXT	Unique identifier of the user	
DIM_USER	A table containing all superside users with their respective (staff + customers) ids	DATE_USER_CREATED	TIMESTAMP_NTZ		
DIM_USER	A table containing all superside users with their respective (staff + customers) ids	CONFIRMATION_SENT	BOOLEAN	Flags whether we sent the account confirmation email for the user	
DIM_USER	A table containing all superside users with their respective (staff + customers) ids	DATE_FIRST_PROJECT_SUBMITTED	TIMESTAMP_NTZ	Date when a customer's first project was submitted	
DIM_USER	A table containing all superside users with their respective (staff + customers) ids	IS_INTERNAL_USER	BOOLEAN	Flags whether the user has staff ID or internal superside/konsus  email	
DIM_USER	A table containing all superside users with their respective (staff + customers) ids	DEFAULT_TEAM_ID	NUMBER	Unique identifier of the default company	
DIM_USER	A table containing all superside users with their respective (staff + customers) ids	DATE_USER_DELETED	TIMESTAMP_NTZ		
DIM_USER	A table containing all superside users with their respective (staff + customers) ids	CUSTOMER_ID	NUMBER	Unique identifier of the user that at least once logged in our platform or was invited to join it.	
DIM_USER	A table containing all superside users with their respective (staff + customers) ids	STAFF_ID	TEXT	Unique identifier of the user that is Superside staff	
DIM_USER	A table containing all superside users with their respective (staff + customers) ids	SIGNUP_SOURCE	TEXT	The initial source from where the customer signed up for the first time	
DIM_USER	A table containing all superside users with their respective (staff + customers) ids	INITIAL_SOURCE	NUMBER	The initial source from where the customer was created	
DIM_USER	A table containing all superside users with their respective (staff + customers) ids	FIRST_NAME	TEXT	The first name of the user	
DIM_USER	A table containing all superside users with their respective (staff + customers) ids	NEWSLETTER	BOOLEAN	Flags whether the user receives our newsletters	
DIM_USER	A table containing all superside users with their respective (staff + customers) ids	LAST_NAME	TEXT	The last name of the user	
DIM_USER	A table containing all superside users with their respective (staff + customers) ids	DATE_FIRST_PROJECT_CREATED	TIMESTAMP_NTZ	Date when a customer's first project was created	
DIM_USER	A table containing all superside users with their respective (staff + customers) ids	DATE_FIRST_PROJECT_ENDED	TIMESTAMP_NTZ	Date of the customer's first completed project	
FCT_ASSET_COMMENT	Contains comments shared in assets	STATE	TEXT	State of the comment	
FCT_ASSET_COMMENT	Contains comments shared in assets	DATE_COMMENT_CREATED	TIMESTAMP_NTZ	Date when comment was created	
FCT_ASSET_COMMENT	Contains comments shared in assets	COLLABORATION_GROUP	TEXT		
FCT_ASSET_COMMENT	Contains comments shared in assets	DIM_ASSET_ID	TEXT	Unique identifier of the asset	
FCT_ASSET_COMMENT	Contains comments shared in assets	CUSTOMER_ID	NUMBER		
FCT_ASSET_COMMENT	Contains comments shared in assets	DIM_TEAM_ID	TEXT	Unique identifier of the team	
FCT_ASSET_COMMENT	Contains comments shared in assets	DATE_COMMENT_DELETED	TIMESTAMP_NTZ	Date when comment was deleted	
FCT_ASSET_COMMENT	Contains comments shared in assets	TEAM_ID	TEXT		
FCT_ASSET_COMMENT	Contains comments shared in assets	DIM_STAFF_ID	TEXT	Unique identifier of the staff	
FCT_ASSET_COMMENT	Contains comments shared in assets	REPLY_TO_USER_UUID	TEXT		
FCT_ASSET_COMMENT	Contains comments shared in assets	DATE_COMMENT_UPDATED	TIMESTAMP_NTZ	Date when comment was updated	
FCT_ASSET_COMMENT	Contains comments shared in assets	POSITION	TEXT	Position of the comment	
FCT_ASSET_COMMENT	Contains comments shared in assets	DIM_CONTACT_ID	TEXT	Unique identifier of the contact	
FCT_ASSET_COMMENT	Contains comments shared in assets	COMMENT_ID	TEXT	Unique identifier of the comment	
FCT_ASSET_COMMENT	Contains comments shared in assets	TEXT	TEXT	Text of the comment	
FCT_BEST_PRACTICES_TRACKING	Tracking of project best practices.	IS_OPS_FLAG	BOOLEAN	True if the best practice is tracked for cpm compensation	
FCT_BEST_PRACTICES_TRACKING	Tracking of project best practices.	IS_FLAGGED_ADJ	BOOLEAN	True if the best practice is flagged after applying any exception	
FCT_BEST_PRACTICES_TRACKING	Tracking of project best practices.	DIM_CPM_ID	TEXT	The id of the project's CPM (can be the primary or a co-PM) in dim_staff and dim_cpm.	
FCT_BEST_PRACTICES_TRACKING	Tracking of project best practices.	TEAM_ID	TEXT	The id of the account team.	
FCT_BEST_PRACTICES_TRACKING	Tracking of project best practices.	STAFF_ROLE	TEXT	The role of the staff member within the project.	
FCT_BEST_PRACTICES_TRACKING	Tracking of project best practices.	IS_FLAGGED	BOOLEAN	True if the best practice is flagged by the specialist.	
FCT_BEST_PRACTICES_TRACKING	Tracking of project best practices.	BEST_PRACTICE	TEXT	The best practice being tracked.	
FCT_BEST_PRACTICES_TRACKING	Tracking of project best practices.	SPECIALIST_ID	TEXT	The staff id of the specialist tracking the project.	
FCT_BEST_PRACTICES_TRACKING	Tracking of project best practices.	DATE_PROJECT_CREATED	TIMESTAMP_NTZ	The time the project is created.	
FCT_BEST_PRACTICES_TRACKING	Tracking of project best practices.	PROJECT_ID	TEXT	The id of the project.	
FCT_BEST_PRACTICES_TRACKING	Tracking of project best practices.	CREATIVE_ID	TEXT	the staff_id of the creative being evaluated in dim_staff and dim_creative.	
FCT_BEST_PRACTICES_TRACKING	Tracking of project best practices.	STAFF_ID	TEXT	The id of the staff member.	
FCT_BEST_PRACTICES_TRACKING	Tracking of project best practices.	CPM_USERNAME	TEXT	The username of the project's CPM (can be the primary or a co-PM).	
FCT_BEST_PRACTICES_TRACKING	Tracking of project best practices.	CREATIVE_USERNAME	TEXT	The username of the creative being evaluated.	
FCT_BEST_PRACTICES_TRACKING	Tracking of project best practices.	DATE_UPDATED	TIMESTAMP_NTZ	The time the tracking was updated.	
FCT_BEST_PRACTICES_TRACKING	Tracking of project best practices.	SLA_CATEGORY	TEXT	Categorization into time or content best practices. Null before May 2023.	
FCT_BEST_PRACTICES_TRACKING	Tracking of project best practices.	IS_EXCEPTED	BOOLEAN	True if an exception is applied.	
FCT_BEST_PRACTICES_TRACKING	Tracking of project best practices.	DIM_CREATIVE_ID	TEXT	The id of the creative being evaluated in dim_staff and dim_creative.	
FCT_BEST_PRACTICES_TRACKING	Tracking of project best practices.	CPM_ID	TEXT	the staff_id of the project's CPM (can be the primary or a co-PM) in dim_staff and dim_cpm.	
FCT_BEST_PRACTICES_TRACKING	Tracking of project best practices.	IS_TRACKING_COMPLETE	BOOLEAN	True if the tracking is marked as completed.	
FCT_BEST_PRACTICES_TRACKING	Tracking of project best practices.	SLA_CONTEXT	TEXT	The SLA context provided by the Ops specialist.	
FCT_CREDITS_MONTHLY	A monthly overview of team credit consumption data as sourced from Superspace. Contains a single entry per team for each month, summing up credit data from potentially multiple entries per month.	CREDITS_USED	FLOAT	The amount of credits used.	
FCT_CREDITS_MONTHLY	A monthly overview of team credit consumption data as sourced from Superspace. Contains a single entry per team for each month, summing up credit data from potentially multiple entries per month.	OVERAGE_HOURS	FLOAT	The amount of overage hours.	
FCT_CREDITS_MONTHLY	A monthly overview of team credit consumption data as sourced from Superspace. Contains a single entry per team for each month, summing up credit data from potentially multiple entries per month.	CREDITS_REMAINING	FLOAT	The amount of credits remaining, to be rolled into the next month	
FCT_CREDITS_MONTHLY	A monthly overview of team credit consumption data as sourced from Superspace. Contains a single entry per team for each month, summing up credit data from potentially multiple entries per month.	TEAM_ID	TEXT	The unique identifier of the team.	
FCT_CREDITS_MONTHLY	A monthly overview of team credit consumption data as sourced from Superspace. Contains a single entry per team for each month, summing up credit data from potentially multiple entries per month.	ADJUSTED_CREDITS	FLOAT	The amount of adjusted credits.	
FCT_CREDITS_MONTHLY	A monthly overview of team credit consumption data as sourced from Superspace. Contains a single entry per team for each month, summing up credit data from potentially multiple entries per month.	REPORTING_DATE	DATE		
FCT_CREDITS_MONTHLY	A monthly overview of team credit consumption data as sourced from Superspace. Contains a single entry per team for each month, summing up credit data from potentially multiple entries per month.	CREDITS_STARTING_BALANCE	FLOAT	The amount of credits available for the reported month.	
FCT_CREDITS_MONTHLY	A monthly overview of team credit consumption data as sourced from Superspace. Contains a single entry per team for each month, summing up credit data from potentially multiple entries per month.	CREDITS_ROLLED_FROM_PREVIOUS_MONTH	FLOAT	The amount of credits rolled from the previous month.	
FCT_CREDITS_MONTHLY	A monthly overview of team credit consumption data as sourced from Superspace. Contains a single entry per team for each month, summing up credit data from potentially multiple entries per month.	CREDITS_EXPIRED	FLOAT	The amount of credits expired.	
FCT_CREDITS_MONTHLY	A monthly overview of team credit consumption data as sourced from Superspace. Contains a single entry per team for each month, summing up credit data from potentially multiple entries per month.	OVERAGE_COST	FLOAT	The cost of the overage hours.	
FCT_CREDITS_MONTHLY	A monthly overview of team credit consumption data as sourced from Superspace. Contains a single entry per team for each month, summing up credit data from potentially multiple entries per month.	CREDITS_CHURNED	FLOAT	The amount of credits churned.	
FCT_CREDITS_MONTHLY	A monthly overview of team credit consumption data as sourced from Superspace. Contains a single entry per team for each month, summing up credit data from potentially multiple entries per month.	CREDITS_GRANTED	FLOAT	The amount of credits granted.	
FCT_EOP_PRODUCTIVITY_SURVEY	contains information about the end-of-project surveys answered by CPMs at the conclusion of each project.	DATE_EOP_PRODUCTIVITY_FEEDBACK_ENDED	TIMESTAMP_NTZ	Date when end-of-project productivity feedback ended.	
FCT_EOP_PRODUCTIVITY_SURVEY	contains information about the end-of-project surveys answered by CPMs at the conclusion of each project.	TOOLS_USED_ANSWER	TEXT	Tools used during the project.	
FCT_EOP_PRODUCTIVITY_SURVEY	contains information about the end-of-project surveys answered by CPMs at the conclusion of each project.	TOTAL_SECONDS_OF_CONTENT_PRODUCED_ANSWER	NUMBER	Total seconds of content produced.	
FCT_EOP_PRODUCTIVITY_SURVEY	contains information about the end-of-project surveys answered by CPMs at the conclusion of each project.	NUMBER_OF_IMAGES_GRAPHICS_CREATED_ANSWER	NUMBER	Number of images or graphics created.	
FCT_EOP_PRODUCTIVITY_SURVEY	contains information about the end-of-project surveys answered by CPMs at the conclusion of each project.	TEAM_ID	TEXT	Identifier for the team involved in the project.	
FCT_EOP_PRODUCTIVITY_SURVEY	contains information about the end-of-project surveys answered by CPMs at the conclusion of each project.	OTHER_PRODUCTS_DELIVERED_ANSWER	TEXT		
FCT_EOP_PRODUCTIVITY_SURVEY	contains information about the end-of-project surveys answered by CPMs at the conclusion of each project.	NUMBER_OF_RESIZES_PRODUCED_ANSWER	NUMBER	Number of resizes produced.	
FCT_EOP_PRODUCTIVITY_SURVEY	contains information about the end-of-project surveys answered by CPMs at the conclusion of each project.	NUMBER_OF_VERSIONS_BEFORE_FINAL_SIGN_OFF_ANSWER	NUMBER	Number of versions before final sign-off.	
FCT_EOP_PRODUCTIVITY_SURVEY	contains information about the end-of-project surveys answered by CPMs at the conclusion of each project.	NUMBER_OF_KEY_ARTS_CONCEPTS_PRODUCED_ANSWER	NUMBER	Number of key arts concepts produced.	
FCT_EOP_PRODUCTIVITY_SURVEY	contains information about the end-of-project surveys answered by CPMs at the conclusion of each project.	NUMBER_OF_KEY_ARTS_PRODUCED_ANSWER	NUMBER	Number of key arts produced.	
FCT_EOP_PRODUCTIVITY_SURVEY	contains information about the end-of-project surveys answered by CPMs at the conclusion of each project.	PROJECT_COMPLEXITY_SCALE_ANSWER	NUMBER	Complexity scale of the project.	
FCT_EOP_PRODUCTIVITY_SURVEY	contains information about the end-of-project surveys answered by CPMs at the conclusion of each project.	NUMBER_OF_RESIZES_VARIANTS_PRODUCED_ANSWER	NUMBER	Number of variants produced for resizes.	
FCT_EOP_PRODUCTIVITY_SURVEY	contains information about the end-of-project surveys answered by CPMs at the conclusion of each project.	NUMBER_OF_KEY_ARTS_VARIANTS_PRODUCED_ANSWER	NUMBER	Number of variants produced for key arts.	
FCT_EOP_PRODUCTIVITY_SURVEY	contains information about the end-of-project surveys answered by CPMs at the conclusion of each project.	NUMBER_OF_VARIANTS_PRODUCED_ANSWER	NUMBER	Number of overall variants produced.	
FCT_EOP_PRODUCTIVITY_SURVEY	contains information about the end-of-project surveys answered by CPMs at the conclusion of each project.	PROJECT_COMPLEXITY_TEXT_SCALE_ANSWER	TEXT		
FCT_EOP_PRODUCTIVITY_SURVEY	contains information about the end-of-project surveys answered by CPMs at the conclusion of each project.	NUMBER_OF_KEY_ARTS_CONCEPTS_VARIANTS_PRODUCED_ANSWER	NUMBER	Number of variants produced for key arts concepts.	
FCT_EOP_PRODUCTIVITY_SURVEY	contains information about the end-of-project surveys answered by CPMs at the conclusion of each project.	DATE_EOP_PRODUCTIVITY_FEEDBACK_STARTED	TIMESTAMP_NTZ	Date when end-of-project productivity feedback started.	
FCT_EOP_PRODUCTIVITY_SURVEY	contains information about the end-of-project surveys answered by CPMs at the conclusion of each project.	USER_RATER_ID	TEXT	Identifier for the user providing the feedback.	
FCT_EOP_PRODUCTIVITY_SURVEY	contains information about the end-of-project surveys answered by CPMs at the conclusion of each project.	EOP_PRODUCTIVITY_FEEDBACK_ID	TEXT	Unique identifier for each end-of-project productivity feedback entry.	
FCT_EOP_PRODUCTIVITY_SURVEY	contains information about the end-of-project surveys answered by CPMs at the conclusion of each project.	PROJECT_ID	TEXT	Identifier for the project associated with the feedback.	
FCT_EOP_PRODUCTIVITY_SURVEY	contains information about the end-of-project surveys answered by CPMs at the conclusion of each project.	AI_USED_ANSWER	TEXT		
FCT_EOP_PRODUCTIVITY_SURVEY	contains information about the end-of-project surveys answered by CPMs at the conclusion of each project.	EOP_PRODUCTIVITY_TEMPLATE_ID	TEXT	Identifier for the template used for the end-of-project survey.	
FCT_EOP_PRODUCTIVITY_SURVEY	contains information about the end-of-project surveys answered by CPMs at the conclusion of each project.	NUMBER_OF_DELIVERABLES_PRODUCED_ANSWER	NUMBER	Number of deliverables produced.	
FCT_EOP_PRODUCTIVITY_SURVEY	contains information about the end-of-project surveys answered by CPMs at the conclusion of each project.	NUMBER_OF_PAGES_PRODUCED_ANSWER	NUMBER	Number of pages produced.	
FCT_EOP_PRODUCTIVITY_SURVEY	contains information about the end-of-project surveys answered by CPMs at the conclusion of each project.	CPM_HOURS_SPENT_ANSWER	NUMBER	Hours spent by the CPM and Co-CPMs spend managing the project	
FCT_EOP_PRODUCTIVITY_SURVEY	contains information about the end-of-project surveys answered by CPMs at the conclusion of each project.	MOTION_OR_VIDEO_USED_ANSWER	BOOLEAN	If video or motion was used in the project.	
FCT_ESCALATIONS_LONG	Fact table of escalations in long format	ESCALATION_DATE	TIMESTAMP_NTZ	Date the support request was escalated	
FCT_ESCALATIONS_LONG	Fact table of escalations in long format	IMPROVEMENT_AREA	TEXT	The quality issue related to the escalation	
FCT_ESCALATIONS_LONG	Fact table of escalations in long format	DATA_SOURCE	TEXT	Identifier of the Google Sheet the escalation is logged in	
FCT_ESCALATIONS_LONG	Fact table of escalations in long format	SUPPORT_REQUEST_CONTEXT	TEXT	The context of the support request specified by the Ops team	
FCT_ESCALATIONS_LONG	Fact table of escalations in long format	PROJECT_ID	TEXT	Unique identifier of the project for which the escalation happened	
FCT_ESCALATIONS_LONG	Fact table of escalations in long format	PROJECT_CREATIVE_LEADS	ARRAY	List of the creative leads of the project	
FCT_ESCALATIONS_LONG	Fact table of escalations in long format	SUPPORT_REQUEST	TEXT	The text content of the support request raised	
FCT_ESCALATIONS_LONG	Fact table of escalations in long format	SUBMIT_DATE	TIMESTAMP_NTZ	Date the support request was submitted	
FCT_ESCALATIONS_LONG	Fact table of escalations in long format	PROJECT_ROLE	TEXT	Role of the responsible staff in the project, based on actual project assignments	
FCT_ESCALATIONS_LONG	Fact table of escalations in long format	RESPONSIBLE_STAFF_DIM_STAFF_ID	TEXT	Unique id of the responible staff	
FCT_ESCALATIONS_LONG	Fact table of escalations in long format	RESPONSIBLE_STAFF_USERNAME	TEXT	Username of the responsible staff	
FCT_ESCALATIONS_LONG	Fact table of escalations in long format	RESPONSIBLE_ROLE	TEXT	Role of the responsible staff in the project, according to Ops Google Sheets	
FCT_ESCALATIONS_LONG	Fact table of escalations in long format	TEAM_ID	TEXT	Unique identifier of the team for which the escalation happened	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	WINBACK_POST_DISCOUNT	FLOAT	The post discount MRR in case of a winback. It's determined by positive monthly revenue growth with no previous revenue, and the cumulative revenue surpasses the current monthly revenue.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	CHURN_POST_DISCOUNT	FLOAT	The post discount MRR in case of an churn. It's determined by negative monthly revenue growth, previous monthly revenue different from zero, and NULL current monthly revenue.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	CSM_DIM_STAFF_ID	TEXT	The unique identifier of the team's primary CSM in dim_staff.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	DEADLINE_FAILS	NUMBER	The number of deadline failures.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	TEAM_NAME	TEXT	The name of the team.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	NORMAL_DELIVERIES	NUMBER	The number of normal deliveries.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	CREDITS_EXPIRED	FLOAT	The amount of credits expired.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	FIRST_MRR	FLOAT	The first MRR of the team.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	DOWNGRADE_POST_DISCOUNT	FLOAT	The post discount MRR in case of a downgrade. It's determined by negative monthly revenue growth, previous monthly revenue differente zero, and positive current monthly revenue.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	CREDITS_USED	FLOAT	The amount of credits used.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	EXPANSION_GROSS	FLOAT	The gross MRR in case of an expansion. It's determined by positive monthly revenue growth with no previous revenue, cumulative MRR matches the current one and Expansion ID is present.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	OVERAGE_COST	FLOAT	The cost of the overage hours.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	CHURN_GROSS	FLOAT	The gross MRR in case of a churn. It's determined by negative monthly revenue growth, previous monthly revenue different from zero, and NULL current monthly revenue.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	ADJUSTED_CREDITS	FLOAT		
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	CREDITS_STARTING_BALANCE	FLOAT	The amount of credits available for the reported month.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	CREDITS_CHURNED	FLOAT	The amount of credits churned.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	MAIN_SUBSCRIPTION_SOLUTION_VERSION	TEXT	The version of the solution associated with the main subscription of the team.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	MAIN_SUBSCRIPTION_PRODUCT_NAME	TEXT	The name of the product associated with the main subscription of the team.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	CRITICAL_DELIVERIES	NUMBER	The number of critical deliveries.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	DISCOUNT_PERCENTAGE	FLOAT	The ratio of discount divided by MRR.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	ADD_INVOICE	FLOAT	The total monetary amount of additional invoices.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	DATE_CONTRACT_STARTED	DATE	The start date of the contract of the team.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	EXPANSION_OF	TEXT	The id of the team this team has expanded from.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	EXPANSION_POST_DISCOUNT	FLOAT	The post discount MRR in case of an expansion. It's determined by positive monthly revenue growth with no previous revenue, cumulative MRR matches the current one and Expansion ID is present.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	MRR_POST_DISCOUNT	FLOAT	The MRR of the team after discount.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	HOURS_LOGGED	FLOAT	The amount of hours logged by staff.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	OVERAGE_HOURS	FLOAT	The amount of overage hours.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	MONTHS_SINCE_FIRST_SUBSCRIPTION_START	NUMBER		
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	DATE_LAST_SUBSCRIPTION_ENDED	DATE	The end date of the last subscription of the team.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	SUBSCRIPTION_COUNT	NUMBER	The count of subscriptions in effect.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	VALUE_USED	FLOAT	Team value used as gross_mrr * (credits_used / credits_granted)	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	FIRST_MRR_POST_DISCOUNT	FLOAT	The first MRR of the team after discount.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	EXTRA_CRITICAL_DELIVERIES	NUMBER	The number of extra critical deliveries.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	MRR_GROWTH	FLOAT	The ratio of current month MRR divided by previous month MRR	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	RELATIONSHIP_TYPE	TEXT		
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	MAIN_SUBSCRIPTION_SUBSCRIPTION_PLAN_ID	TEXT	The unique identifier of the subscription plan associated with the main subscription of the team.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	PREVIOUS_MRR	FLOAT	The previous month MRR of the team.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	LAST_MRR	FLOAT	The last MRR of the team.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	CLOSED_PROJECTS	NUMBER	The number of projects closed.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	MAIN_SUBSCRIPTION_SOLUTION_NAME	TEXT	The name of the solution associated with the main subscription of the team.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	MRR_RETENTION	FLOAT	The ratio of current month MRR divided by first MRR	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	TEAM_TYPE	TEXT	The type of the team.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	NEW_CUSTOMER_POST_DISCOUNT	FLOAT	The post discount MRR in case of a new customer. It's determined by positive monthly revenue growth with no previous revenue, cumulative MRR matches the current one and no Expansion ID is present.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	UPGRADE_GROSS	FLOAT	The gross MRR in case of an upgrade. It's determined by positive monthly revenue growth and previous monthly revenue different from zero	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	DOWNGRADE_GROSS	FLOAT	The gross MRR in case of a downgrade. It's determined by negative monthly revenue growth, previous monthly revenue different from zero, and positive current monthly revenue.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	CPM_DIM_STAFF_ID	TEXT	The unique identifier of the team's primary CPM in dim_staff.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	LAST_MRR_POST_DISCOUNT	FLOAT	The last MRR of the team after discount.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	NEW_CUSTOMER_GROSS	FLOAT	The gross MRR in case of a new customer. It's determined by positive monthly revenue growth with no previous revenue, cumulative MRR matches the current one and no Expansion ID is present.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	CREDITS_REMAINING	FLOAT	The amount of credits remaining, to be rolled into the next month.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	DATE_FIRST_SUBSCRIPTION_STARTED	DATE	The start date of the first subscription of the team.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	SOLUTION_TYPES_ARRAY	ARRAY	The solution types in effect as an array.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	MAIN_SUBSCRIPTION_SOLUTION_VERSION_NAME	TEXT	The version name of the solution associated with the main subscription of the team.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	REPORTING_DATE	DATE		
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	PREVIOUS_MRR_POST_DISCOUNT	FLOAT	The previous month MRR of the team after discount.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	DESIGN_DIRECTOR_DIM_STAFF_ID	TEXT	The unique identifier of the team's primary Design Director in dim_staff.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	CREDITS_ROLLED_FROM_PREVIOUS_MONTH	FLOAT	The amount of credits granted rolled from the previous month.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	MAIN_SUBSCRIPTION_SOLUTION_LEVEL	TEXT	The level of the solution associated with the main subscription of the team.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	MRR	FLOAT	The MRR of the team.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	DISCOUNT	FLOAT	The discount applied to the team.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	SUBSCRIPTION_TYPES_ARRAY	ARRAY	The subscirption types in effect as an array.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	UPGRADE_POST_DISCOUNT	FLOAT	The post discount MRR in case of an upgrade. It's determined by positive monthly revenue growth and previous monthly revenue different from zero	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	TEAM_ID	TEXT	The unique identifier of the team.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	MRR_PRORATED_DISCOUNT	FLOAT	The net MRR of the team coming from Salesforce.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	WINBACK_GROSS	FLOAT	The gross MRR in case of a winback. It's determined by positive monthly revenue growth with no previous revenue, and the cumulative revenue surpasses the current monthly revenue.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	MONTHS_SINCE_CONTRACT_START	NUMBER		
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	CREDITS_GRANTED	FLOAT	The amount of credits granted.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	USAGE	FLOAT	Team usage as (value_used + add_invoice)	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	MRR_DIFFERENCE	FLOAT	The MRR difference between current and previous month	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	ONE_OFF_AMOUNT	FLOAT	Dollar amount received as a one-off for temporal-upgrades/booster-packs.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	MAIN_SUBSCRIPTION_ID	TEXT	The unique identifier for the main subscription of the team.	
FCT_MRR_USAGE_MONTHLY	Table containing aggregated team level MRR and usage facts as a monthly snapshot. Includes aggregated subscription data to calculate monthly team MRR and MRR deltas.	DATE_CONTRACT_ENDED	DATE	The end date of the contract of the team.	
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	PROJECT_ID	TEXT	Unique identifier of the last project closed on the team the user was using at the time the flow was triggered	
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	FLOW_VERSION_ID	TEXT	Unique identifier of Userflow flow version	
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	PROJECT_PRIMARY_CPM_DIM_CPM_ID	TEXT	Unique identifier of the primary CPM for the project at the time the flow was triggered	
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	FLOW_ID	TEXT	Unique identifier of the Userflow flow	
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	IS_COMPLETED	BOOLEAN	If the was flow completed by the user	
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	FLOW_COMPLETED_AT	TIMESTAMP_NTZ	Timestamp when the Userflow flow was completed by the user	
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	CONTACT_ID	TEXT	Unique identifier of the contact from dim_contact model	
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	TEAM_NAME	TEXT	Name of the team that the user was using at the time the flow was triggered	
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	PROJECT_SERVICE	TEXT	Service of the last project closed on the team the user was using at the time the flow was triggered	
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	TEAM_PRIMARY_CL_DIM_CREATIVE_ID	TEXT		
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	MAIN_SUBSCRIPTION_SUBSCRIPTION_PLAN_ID	TEXT	Unique identifier of the subscription plan the team is contracting at the moment the flow started	
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	USER_ID	TEXT	Unique identifier of the user	
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	FEEDBACK_REASON_ANSWER	TEXT	Feedback reason user answer	
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	PROJECT_PRIMARY_CPM_TEAM_LEADER	TEXT	Team Leader of the primary CPM for the project at the time the flow was triggered	
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	FLOW_SESSION_ID	TEXT	Unique identifier of the session of a specific user viewing a specific Userflow flow	
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	TEAM_PRIMARY_CPM_DIM_CPM_ID	TEXT	Unique identifier of the primary team CPM's historical entry at the time the flow started	
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	DATE_PROJECT_ENDED	TIMESTAMP_NTZ		
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	TEAM_PRIMARY_CPM_ID	TEXT	Staff ID of the primary team CPM	
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	TEAM_ID	TEXT	Unique identifier of the team that the user was using at the time the flow was triggered	
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	PROJECT_STAFF_SLACK_NAME	TEXT	Slack names of all the staff members of the project	
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	FLOW_VERSION_NUMBER	TEXT	Number of the Userflow flow version	
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	FLOW_STARTED_AT	TIMESTAMP_NTZ	Timestamp when the Userflow flow was started by the user	
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	PRIMARY_CSM_DIM_STAFF_ID	TEXT	Unique identifier of the primary CSM for the account at the time the flow was triggered	
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	USER_NAME	TEXT	Full name of the user that triggered the flow	
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	SOLUTION_LEVEL	TEXT	Subscription plan solution level	
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	FEEDBACK_ANSWER	NUMBER	Feedback user answer	
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	FLOW_NAME	TEXT	Name of the Userflow flow	
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	PROJECT_PRIMARY_CPM_ID	TEXT	Staff ID of the primary project CPM	
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	TEAM_PRIMARY_CL_CREATIVE_ID	TEXT		
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	TEAM_STAFF_SLACK_NAME	TEXT	Slack names of all the staff members of the team. Specialists are not included	
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	FEEDBACK_REASON_BAD_ANSWER	TEXT	Feedback reason for low rating user answer	
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	DATE_PROJECT_DEADLINE	TIMESTAMP_NTZ		
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	USER_EMAIL	TEXT	E-mail of the user that triggered the flow	
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	PROJECT_PRIMARY_CPM_TEAM_NAME	TEXT	Team name of the primary CPM for the project at the time the flow was triggered	
FCT_POST_PROJECT_FEEDBACK	Flow sessions related to 'Post Project Feedback' content and their answers	SOLUTION_NAME	TEXT	Subscription plan solution name	
FCT_PROJECT_MESSAGES	this table contains the messages associated to projects from teams and CPMs	USER_UUID	TEXT	User identifier	
FCT_PROJECT_MESSAGES	this table contains the messages associated to projects from teams and CPMs	SENDER_USER_ID	NUMBER	Unique identifier of sender	
FCT_PROJECT_MESSAGES	this table contains the messages associated to projects from teams and CPMs	REPLY_MESSAGE	TEXT	If the message received a reply, which was the message of the reply	
FCT_PROJECT_MESSAGES	this table contains the messages associated to projects from teams and CPMs	IS_INTERNAL	BOOLEAN	Is message internal?	
FCT_PROJECT_MESSAGES	this table contains the messages associated to projects from teams and CPMs	ACTION	TEXT	If the message was sent using the action feature, it tells the kind of action used	"[
  ""ATTACHMENT"",
  ""DESIGN"",
  ""DESIGN_FINAL"",
  ""DESIGN_WITH_EOP"",
  ""EOP""
]"
FCT_PROJECT_MESSAGES	this table contains the messages associated to projects from teams and CPMs	EVENT	TEXT	Event type	
FCT_PROJECT_MESSAGES	this table contains the messages associated to projects from teams and CPMs	EMAIL_MESSAGE_ID	TEXT	If email, email message id	
FCT_PROJECT_MESSAGES	this table contains the messages associated to projects from teams and CPMs	ORDERING_DATE	TIMESTAMP_NTZ		
FCT_PROJECT_MESSAGES	this table contains the messages associated to projects from teams and CPMs	SOURCE	TEXT	Mean of communication where the message was sent	"[
  ""ASANA"",
  ""AUTOMATIC"",
  ""EMAIL"",
  ""INTERCOM"",
  ""SLACK"",
  ""WEB""
]"
FCT_PROJECT_MESSAGES	this table contains the messages associated to projects from teams and CPMs	CHAT_MESSAGE_ID	TEXT	Unique identifier of the message	
FCT_PROJECT_MESSAGES	this table contains the messages associated to projects from teams and CPMs	MESSAGE	TEXT	Message	
FCT_PROJECT_MESSAGES	this table contains the messages associated to projects from teams and CPMs	PROJECT_ID	TEXT	Unique identifier of the project	
FCT_PROJECT_MESSAGES	this table contains the messages associated to projects from teams and CPMs	DATE_REPLY_CREATED	TIMESTAMP_NTZ	If the message received a reply, when the most recent version was created	
FCT_PROJECT_MESSAGES	this table contains the messages associated to projects from teams and CPMs	TEAM_ID	TEXT		
FCT_PROJECT_MESSAGES	this table contains the messages associated to projects from teams and CPMs	DATE_CHAT_MESSAGE_UPDATED	TIMESTAMP_NTZ	Date when message was updated	
FCT_PROJECT_MESSAGES	this table contains the messages associated to projects from teams and CPMs	CHAT_ROOM_ID	NUMBER		
FCT_PROJECT_MESSAGES	this table contains the messages associated to projects from teams and CPMs	REPLY_TYPE	TEXT	If the message received a reply, which was the option selected	
FCT_PROJECT_MESSAGES	this table contains the messages associated to projects from teams and CPMs	DATE_CHAT_MESSAGE_CREATED	TIMESTAMP_NTZ	Date when message was started	
FCT_PROJECT_MESSAGES	this table contains the messages associated to projects from teams and CPMs	FULL_MESSAGE	TEXT	Full content of message	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	POSITION_ROLE	TEXT	The role of the position. Differentiate between Creative and Creative Lead positions.	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	CREDITS_USED	FLOAT	The credits used corresponding to the time entry.	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	TEAM_ID	TEXT	unique identifier for the team.	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	TIME_ENTRY_ID	NUMBER	unique identifier of the time entry.	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	HOURS_LOGGED	FLOAT	time logged by the staff.	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	DIM_CREATIVE_ID	TEXT	unique identifier of the specialist/creative assigned on a specific project position. This identifier is different from the one called 'creative_id' which correlates to the staff member unique identifier over Superspace.	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	USER_FIRST_NAME	TEXT	user's first name	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	DATE_TEAM_CHURN	TIMESTAMP_NTZ		
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	SKILL	TEXT	The skill specified for the position.	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	NOTES	TEXT	notes associated with the time entry.	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	CHURN_REASON	TEXT	churn reason for the team, if applicable	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	STAFF_INVOLVED	NUMBER	number of staff members involved for each project	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	REPORTING_DATE	TIMESTAMP_NTZ	monthly reporting date, depending on the creation date of each time entry.	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	SERVICE	TEXT	project's service	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	CREATIVE_ID	TEXT		
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	TIME_ENTRIES	NUMBER	number of time entries for each project	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	DIM_CPM_ID	TEXT	unique identifier of the CPM that logged hours on the project. This identifier is different from the one called 'cpm_id' which correlates to the staff member unique identifier over Superspace.	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	DATE_TIME_ENTRY_CREATED	TIMESTAMP_NTZ	timestamp of when the time entry was created.	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	CPM_ID	TEXT	The cpm_id as of superside db of CPM that logged hours on the project.	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	STAFF_TYPE	TEXT	specifies the role of the staff member who logged the hours.	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	CHURN_DETAILS	TEXT	churn details for the team, if applicable	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	PROJECT_PRIMARY_CPM_DIM_CPM_ID	TEXT	unique identifier for the project's primary CPM. This identifier is different from the one called 'cpm_id' which correlates to the staff member unique identifier over Superspace.	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	PROJECT_PRIMARY_CPM_ID	TEXT	staff member unique identifier of the project's primary CPM.	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	USERNAME	TEXT		
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	PROJECT_ID	TEXT	unique identifier for the project.	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	LAST_LOGGED_HOUR	TIMESTAMP_NTZ	date of the last logged hour for each project	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	PROJECT_NAME	TEXT	name of the project	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	USER_ID	TEXT	unique identifier for the team's user	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	USER_LAST_NAME	TEXT	user's last name	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	SKILL_LEVEL	TEXT	"The skill level specified for the position. Takes values from 0 to 3 as well as ""leadership"" and ""execution"""	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	IS_TEAM_FIRST_PROJECT	BOOLEAN	boolean flag indicating if the project is the team's first	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	STAFF_ID	TEXT	staff member unique identifier over Superspace.	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	FIRST_LOGGED_HOUR	TIMESTAMP_NTZ	date of the first logged hour for each project	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	USER_EMAIL	TEXT	user's email	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	DATE_PROJECT_DEADLINE	TIMESTAMP_NTZ	deadline of the project.	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	ADJUSTED_CREATIVE_HOURS	FLOAT	Hours logged associated to fast turnaround project, includes the uplift for hours worked during the weekend or for critical/extra-critical projects.	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	DELIVERY	TEXT		
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	MULTIPLIER	FLOAT		
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	PROJECT_POSITION_ID	TEXT	unique identifier for the project position.	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	DIM_STAFF_ID	TEXT	unique identifier for the staff that logged the hours. This identifier is different from the one called 'staff_id' which correlates to the staff member unique identifier over Superspace.	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	IS_USER_FIRST_PROJECT	BOOLEAN	boolean flag indicating if the project is the team user's first	
FCT_PROJECT_STAFF_LOGGED_HOURS	Fact table of all logged creative hours entries by project position.	TEAM_NAME	TEXT	name of the team	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	CONTRACT_PAYMENT_TERM	TEXT	The payment term associated with the contract.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	DATE_CONTRACT_ENDED	DATE	The end date of the contract.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	ONE_OFF_AMOUNT	FLOAT	Dollar amount received as a one-off for temporal-upgrades/booster-packs.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	IS_MAIN_SUBSCRIPTION	BOOLEAN	True if the subscription is the main subscription of the team.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	SOLUTION_VERSION	TEXT	The version of the solution associated with the subscription.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	SOLUTION_LEVEL	TEXT	The level of the solution associated with the subscription.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	MRR	FLOAT	The MRR of the subscription.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	CONTRACT_OPT_OUT	TEXT	The opt out period associated with the contract.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	SUBSCRIPTION_CREDITS	FLOAT	The credits granted by the subscription.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	IS_ONEOFF_SOLUTION	BOOLEAN	True if the subscription has a ONE-OFF solution.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	TEAM_ID	TEXT	The unique identifier of the team.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	DATE_SUBSCRIPTION_RENEWAL	DATE	The renewal date of the subscription.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	IS_ONE_OFF_SUBSCRIPTION	BOOLEAN	True if the subscription is a One-off.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	SUBSCRIPTION_OPT_OUT	TEXT	The opt out period associated with the subscription.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	RETAINED_NET_MRR	BOOLEAN		
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	SOLUTION_NAME	TEXT	The name of the solution associated with the subscription.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	PRODUCT_NAME	TEXT	The name of the product associated with the subscription.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	CONTRACT_ID	TEXT	The unique identifier of the contract.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	SUBSCRIPTION_TYPE	TEXT	The type of the subscription.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	SUBSCRIPTION_PLAN_ID	TEXT	The unique identifier of the subscription plan.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	CONTRACT_BILLING_FREQUENCY	TEXT	The billing frequency associated with the contract.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	AGREEMENT_TERM	FLOAT	The agreement term of the subscription.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	DISCOUNT_TYPE	TEXT	The discount type of the subscription.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	DATE_SUBSCRIPTION_STARTED	DATE	The start date of the subscription.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	SOLUTION_TYPE	TEXT	The type of the solution associated with the subscription.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	SALESFORCE_DISCOUNT	FLOAT	The discount applied at the subscription level, as coming from Salesforce.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	IN_PLAN_RATE	FLOAT	The rate associated with the subscription.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	SUBSCRIPTION_ID	TEXT	The unique identifier of the subscription.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	SUBSCRIPTION_ONBOARDING_PERIOD	FLOAT	The onboarding period of the subscription, in months.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	CONTRACT_DECISION_MAKER_ID	TEXT	The unique identified of the decision maker associated with the contract.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	CONTRACT_INITIAL_BUYER_ID	TEXT	The unique identified of the initial buyer associated with the contract.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	SOLUTION_VERSION_NAME	TEXT	The version name of the solution associated with the subscription.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	IS_ADDON_SOLUTION	BOOLEAN	True if the subscription has an ADD-ON solution.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	DATE_SUBSCRIPTION_ENDED	DATE	The end date of the subscription.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	CONTRACT_RELATIONSHIP_TYPE	TEXT	The relationship type associated with the contract.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	CONTRACT_AUTO_RENEWAL	BOOLEAN	True if there is auto renewal specified on the contract.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	MRR_POST_DISCOUNT	FLOAT	The MRR of the subscription after discount.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	IS_STANDALONE_SOLUTION	BOOLEAN	True if the subscription has a STANDALONE solution.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	CONTRACT_NUMBER	TEXT	The unique number identifier associated with the contract.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	SUBSCRIPTION_NAME	TEXT	The name of the subscription.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	ACCOUNT_ID	TEXT	The unique identifier of the account.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	IS_MAIN_SOLUTION	BOOLEAN	True if the subscription has a MAIN solution.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	DATE_CONTRACT_STARTED	DATE	The start date of the contract.	
FCT_SUBSCRIPTION	Table containing individual Salesforce subscriptions and their facts.	PRODUCT_ID	TEXT	The unique identifier of the product.	
FCT_SUBSCRIPTION_CHURN_INTENT	Subscription Churn Intents (information coming from Salesforce).	AUTO_RENEWAL_ENABLED	BOOLEAN	Auto Renewal Flag	
FCT_SUBSCRIPTION_CHURN_INTENT	Subscription Churn Intents (information coming from Salesforce).	DATE_PREVIOUS_CHURN_CLOSED	TIMESTAMP_NTZ		
FCT_SUBSCRIPTION_CHURN_INTENT	Subscription Churn Intents (information coming from Salesforce).	BILLING_FREQUENCY	TEXT	How often the subscription was renewed	
FCT_SUBSCRIPTION_CHURN_INTENT	Subscription Churn Intents (information coming from Salesforce).	CHURN_EXPLANATION	TEXT	Explanation from us about the churn (open-text).	
FCT_SUBSCRIPTION_CHURN_INTENT	Subscription Churn Intents (information coming from Salesforce).	CHURN_DETAILS	TEXT	Extended details from the customer about the churn reason (open-text).	
FCT_SUBSCRIPTION_CHURN_INTENT	Subscription Churn Intents (information coming from Salesforce).	CHURN_REASON	TEXT	Reason Category for churning.	
FCT_SUBSCRIPTION_CHURN_INTENT	Subscription Churn Intents (information coming from Salesforce).	DATE_CHURN_CLOSED	TIMESTAMP_NTZ		
FCT_SUBSCRIPTION_CHURN_INTENT	Subscription Churn Intents (information coming from Salesforce).	OWNER_ID	TEXT	Superside contact point taking care of the churn intent.	
FCT_SUBSCRIPTION_CHURN_INTENT	Subscription Churn Intents (information coming from Salesforce).	DATE_CHURNED	TIMESTAMP_NTZ		
FCT_SUBSCRIPTION_CHURN_INTENT	Subscription Churn Intents (information coming from Salesforce).	OPPORTUNITY_TYPE	TEXT		
FCT_SUBSCRIPTION_CHURN_INTENT	Subscription Churn Intents (information coming from Salesforce).	DATE_SUBSCRIPTION_END	DATE		
FCT_SUBSCRIPTION_CHURN_INTENT	Subscription Churn Intents (information coming from Salesforce).	TEAM_ID	TEXT		
FCT_SUBSCRIPTION_CHURN_INTENT	Subscription Churn Intents (information coming from Salesforce).	REPORTING_DATE	DATE	Date when the churn was reported in the system	
FCT_SUBSCRIPTION_CHURN_INTENT	Subscription Churn Intents (information coming from Salesforce).	OPPORTUNITY_ID	TEXT	Opportunity ID	
FCT_SUBSCRIPTION_CHURN_INTENT	Subscription Churn Intents (information coming from Salesforce).	IS_CHURNED	BOOLEAN	Flag showing if the customer churned	
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	ESCALATION_TYPE_INTERNAL	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	SECONDARY_INTERNAL_ESCALATION_PROJECT_STAGE	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	DATA_SOURCE	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	IS_SUPPORT_2023	BOOLEAN		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	PRIMARY_INTERNAL_ESCALATION_CATEGORY	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	IS_FOR_REVIEW	BOOLEAN		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	SUPPORT_REQUEST_CONTEXT	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	PROJECT_ASSIGNED_ID	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	ESCALATION_SEVERITY	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	RESPONSIBLE_CL_ID	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	PROJECT_ID	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	ESCALATION_DATE	TIMESTAMP_NTZ		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	SUPPORT_STATUS	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	TEAM_ID	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	IMPROVEMENT_AREA_CPM	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	ASSIGNED_TO_ID	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	IS_ESCALATED	BOOLEAN		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	RESPONSIBLE_MEMBER_ID	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	SUPERSPACE_LINK	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	RESPONSIBLE_CPM_ID	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	RESPONSIBLE_CL	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	ASSIGNED_TO	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	SUBMIT_DATE	TIMESTAMP_NTZ		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	PROJECT_FORM_ID	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	SUPPORT_REQUEST	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	IMPROVEMENT_AREA_CL	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	RESPONSIBLE_CREATIVE	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	CPM_USERNAME	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	SUBMITTED_BY_ID	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	PRIMARY_INTERNAL_ESCALATION_PROJECT_STAGE	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	IS_BUNDLED_WITH_PREVIOUS	BOOLEAN		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	PRIMARY_INTERNAL_ESCALATION_INCIDENT_DETAIL	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	SUBMITTED_BY	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	RESPONSIBLE_CREATIVE_ID	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	PROJECT_CREATIVE_LEADS	ARRAY	list of all the creative leads in a project	
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	ESCALATION_TYPE_CONFLICT	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	ESCALATION_TYPE_CUSTOMER	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	SUPPORT_URGENCY	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	SECONDARY_INTERNAL_ESCALATION_INCIDENT_DETAIL	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	ID	NUMBER		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	IMPROVEMENT_AREA_CREATIVE	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	RESPONSIBLE_CPM	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	IS_LEGACY_SUPPORT	BOOLEAN		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	TEAM_FORM_ID	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	SECONDARY_INTERNAL_ESCALATION_CATEGORY	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	SUPPORT_REQUEST_CATEGORY	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	IS_NPS_CSAT_DRIVEN	BOOLEAN		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	RESPONSIBLE_MEMBER	TEXT		
FCT_SUPPORT_COMMS	Fact table of the support communications and escalations handled by the Ops Excellence team.	SUPPORT_CHANNEL	TEXT		
FCT_TEAM_USERS	Contains information of all users that joined or were invited to join a team. Each row is a unique combination of user and team	USER_ID	TEXT	Unique user identifier	
FCT_TEAM_USERS	Contains information of all users that joined or were invited to join a team. Each row is a unique combination of user and team	DATE_USER_DELETED	TIMESTAMP_NTZ		
FCT_TEAM_USERS	Contains information of all users that joined or were invited to join a team. Each row is a unique combination of user and team	DATE_CUSTOMER_TEAM_FIRST_PROJECT_CREATED	TIMESTAMP_NTZ	Date when a customer's first project in the team was created	
FCT_TEAM_USERS	Contains information of all users that joined or were invited to join a team. Each row is a unique combination of user and team	CURRENT_STATUS_IN_COMPANY	TEXT	The most recent status of the user invitation to join the team	
FCT_TEAM_USERS	Contains information of all users that joined or were invited to join a team. Each row is a unique combination of user and team	CUSTOMER_ID	NUMBER	Unique identifier of the customer	
FCT_TEAM_USERS	Contains information of all users that joined or were invited to join a team. Each row is a unique combination of user and team	INVITER_USER_ID	NUMBER		
FCT_TEAM_USERS	Contains information of all users that joined or were invited to join a team. Each row is a unique combination of user and team	CURRENT_TEAM_ROLE	TEXT	Current team role	
FCT_TEAM_USERS	Contains information of all users that joined or were invited to join a team. Each row is a unique combination of user and team	CURRENT_VERSION	NUMBER	The most recent version of the user in that team	
FCT_TEAM_USERS	Contains information of all users that joined or were invited to join a team. Each row is a unique combination of user and team	FIRST_NAME	TEXT		
FCT_TEAM_USERS	Contains information of all users that joined or were invited to join a team. Each row is a unique combination of user and team	TEAM_ID	TEXT	Unique identifier of the team	
FCT_TEAM_USERS	Contains information of all users that joined or were invited to join a team. Each row is a unique combination of user and team	LAST_NAME	TEXT		
FCT_TEAM_USERS	Contains information of all users that joined or were invited to join a team. Each row is a unique combination of user and team	ENABLED	BOOLEAN		
FCT_TEAM_USERS	Contains information of all users that joined or were invited to join a team. Each row is a unique combination of user and team	DATE_FIRST_ACTIVATION	TIMESTAMP_NTZ		
FCT_TEAM_USERS	Contains information of all users that joined or were invited to join a team. Each row is a unique combination of user and team	DATE_CUSTOMER_TEAM_FIRST_PROJECT_SUBMITTED	TIMESTAMP_NTZ	Date when a customer's first project in the team was submitted	
FCT_TEAM_USERS	Contains information of all users that joined or were invited to join a team. Each row is a unique combination of user and team	DATE_FIRST_CREATED	TIMESTAMP_NTZ		
FCT_TEAM_USERS	Contains information of all users that joined or were invited to join a team. Each row is a unique combination of user and team	USER_UUID	TEXT	Unique hashed user identifier	
FCT_TEAM_USERS	Contains information of all users that joined or were invited to join a team. Each row is a unique combination of user and team	IS_INTERNAL_USER	BOOLEAN		
FCT_TEAM_USERS	Contains information of all users that joined or were invited to join a team. Each row is a unique combination of user and team	EMAIL	TEXT		
FCT_TEAM_USERS	Contains information of all users that joined or were invited to join a team. Each row is a unique combination of user and team	DATE_CUSTOMER_TEAM_FIRST_PROJECT_ENDED	TIMESTAMP_NTZ	Date of the customer's first completed project in the team	
FCT_TEAM_USERS	Contains information of all users that joined or were invited to join a team. Each row is a unique combination of user and team	DATE_LAST_UPDATED	TIMESTAMP_NTZ		
FCT_TEAM_USERS	Contains information of all users that joined or were invited to join a team. Each row is a unique combination of user and team	DATE_COMPANY_CUSTOMER_ACCEPTED	TIMESTAMP_NTZ		
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	FLEXIBLE_MILESTONE_UUID	TEXT		
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	COVER_FILE_INFO_ID	TEXT	the identifier of the cover file	
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	INVITE_TYPE	TEXT	weather it's a project or a team invitation (old invites)	
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	INVITE_NUMBER	TEXT	the number of reminders	
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	USER_ID	TEXT	the identifier of the user	
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	SESSION_ID	TEXT	the identifier of each session, based on a 30-minute idleness window between events	
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	PROJECT_MEMBER_ID	NUMBER	the identifier of the user of a project	
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	USER_UUID	TEXT	the hashed identifier of the user	
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	INVITED_USER_EMAIL	TEXT	the email of the invited user (old invites)	
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	UTM_SOURCE	TEXT	the utm_source of the event	
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	EXISTING_USER	TEXT	flag whether the user already exists	
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	CHAT_ID	NUMBER	the identifier of the chat	
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	FLOW	TEXT	weather it's a project or a team invitation (new invites)	
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	INVITE_TO	TEXT	the email of the invited user (new invites)	
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	EVENT_ID	TEXT	the unique identifier of each event	
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	EVENT	TEXT	the slug of the event name, mapping to an event-specific table	"[
  ""account_staff_added"",
  ""account_staff_removed"",
  ""account_staff_updated"",
  ""asset_added"",
  ""asset_approval_action_applied"",
  ""asset_link_key_opened"",
  ""asset_previewed"",
  ""asset_updated"",
  ""chat_message_file_uploaded"",
  ""chat_message_sent"",
  ""comment_added"",
  ""comment_deleted"",
  ""comment_resolved"",
  ""design_work_sent"",
  ""email_opened"",
  ""event_asset_comment_notification_created"",
  ""event_asset_comment_user_mention_created"",
  ""event_chat_message_sent"",
  ""event_chat_room_closed"",
  ""event_chat_room_project_draft_created"",
  ""event_chat_room_reopened"",
  ""event_chat_room_snooze_ended"",
  ""event_chat_room_snoozed"",
  ""event_company_customer_accepted"",
  ""event_company_customer_invited"",
  ""event_customer_signup"",
  ""event_project_activity_closed"",
  ""event_project_activity_created_from_internal_app"",
  ""event_project_activity_grabbed"",
  ""event_project_activity_started"",
  ""event_project_activity_submitted"",
  ""event_project_manager_assigned"",
  ""event_project_manager_removed"",
  ""event_project_member_invite_accepted"",
  ""experiment_viewed"",
  ""file_downloaded"",
  ""file_preview_creation_completed"",
  ""file_preview_creation_failed"",
  ""file_preview_creation_skipped"",
  ""file_preview_creation_started"",
  ""file_preview_genie_creation_completed"",
  ""file_preview_genie_creation_failed"",
  ""file_preview_genie_creation_skipped"",
  ""file_preview_genie_creation_started"",
  ""file_preview_transformation_started"",
  ""file_previewed"",
  ""file_uploaded"",
  ""first_project_started"",
  ""flexible_milestone_added"",
  ""flexible_milestone_assigned"",
  ""flexible_milestone_deleted"",
  ""flexible_milestone_project_command_fetched"",
  ""flexible_milestone_reached"",
  ""flexible_milestone_unassigned"",
  ""flexible_milestone_updated"",
  ""flexible_milestone_user_command_fetched"",
  ""google_integration_completed"",
  ""incoming_email_clicked"",
  ""incoming_email_delivered"",
  ""incoming_email_opened"",
  ""incoming_email_permanent_fail"",
  ""incoming_email_temporary_fail"",
  ""invitation_received"",
  ""invite_accepted"",
  ""invite_sent"",
  ""join_request_approved"",
  ""join_request_declined"",
  ""join_request_sent"",
  ""logged_hour_added"",
  ""logged_hour_deleted"",
  ""logged_hour_updated"",
  ""member_added"",
  ""member_invitation_activated"",
  ""member_invitation_clicked"",
  ""member_invitation_opened"",
  ""member_invitation_received"",
  ""member_invitation_sent"",
  ""member_removed"",
  ""member_role_updated"",
  ""message_read"",
  ""message_template_created"",
  ""message_template_deleted"",
  ""message_template_updated"",
  ""onboarding_initiated"",
  ""order_cancelled"",
  ""order_submitted"",
  ""plan_changed"",
  ""preview_error_reported"",
  ""project_cancelled"",
  ""project_chat_created"",
  ""project_closed"",
  ""project_closure_approval_applied"",
  ""project_collection_created"",
  ""project_collection_updated"",
  ""project_component_created"",
  ""project_component_deleted"",
  ""project_component_updated"",
  ""project_created"",
  ""project_draft_created"",
  ""project_favorites_added"",
  ""project_favorites_removed"",
  ""project_feedback_initiated"",
  ""project_feedback_submitted"",
  ""project_file_uploaded"",
  ""project_grabbed"",
  ""project_manager_primary_status_updated"",
  ""project_position_created"",
  ""project_position_deleted"",
  ""project_position_filled"",
  ""project_position_invite_accepted"",
  ""project_position_invite_cancelled"",
  ""project_position_invite_declined"",
  ""project_position_invite_received"",
  ""project_position_invite_sent"",
  ""project_position_updated"",
  ""project_staff_added"",
  ""project_staff_filled"",
  ""project_staff_removed"",
  ""project_staff_unfilled"",
  ""project_started"",
  ""project_submitted"",
  ""project_updated"",
  ""schedule_message_created"",
  ""schedule_message_deleted"",
  ""schedule_message_updated"",
  ""slack_channel_created"",
  ""slack_message_sent"",
  ""staff_archived"",
  ""staff_assignment_added"",
  ""staff_assignment_updated"",
  ""staff_created"",
  ""staff_deleted"",
  ""staff_updated"",
  ""user_email_verified"",
  ""user_invited"",
  ""user_logged_in"",
  ""user_signed_up""
]"
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	PRODUCT_ID	NUMBER	the identifier of the product	
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	UTM_CONTENT	TEXT	the utm_content of the event	
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	INVITE_FROM	TEXT	the email of the sender user	
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	INVITE_EMAIL_TYPE	TEXT	the specific kind of email sent (for project, team, existing users, new users, etc)	
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	INVITE_TO_USER_ID	TEXT	the user_uuid of the invited user (new invites)	
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	INVITE_LOCATION	TEXT	the specific location where the invite was sent (members_page, home_page_top_bar, etc)	
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	INVITE_FROM_USER_ID	TEXT	the user_uuid of the sender user (new invites)	
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	ASSET_ID	NUMBER		
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	TEAM_ID	TEXT	the identifier of the user's team	
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	PROJECT_ID	NUMBER	the identifier of the project	
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	INVITE_ID	TEXT		
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	EVENT_OWNER	TEXT	the team responsible for the event	
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	TEMPLATE_ID	NUMBER	the identifier of the template used for invitations	
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	FILE_INFO_ID	TEXT	the identifier of the file	
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	STAFF_ID	TEXT	the identifier of the staff user	
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	NEW_INVITE_ID	NUMBER		
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	COMPANY_SUBSCRIPTION_PLAN	TEXT	the subscription plan of the company at that moment	
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	SERVICE_ID	NUMBER	the identifier of the project service	
INT_BACKEND_EVENTS	This model contains backend events information and their main common custom properties	EVENT_TIMESTAMP	TIMESTAMP_NTZ	when the event took place	
INT_FRONTEND_EVENTS	This model contains frontend events information and their main common custom properties	EVENT	TEXT	the slug of the event name, mapping to an event-specific table	"[
  ""accepted_project_invite"",
  ""accepted_team_invite"",
  ""added_payment_method"",
  ""admin_console_brief_templates_preview_close"",
  ""admin_console_brief_templates_preview_open"",
  ""asset_added"",
  ""audio_loaded"",
  ""auth_complete_account_screen"",
  ""auth_complete_account_success"",
  ""auth_create_next"",
  ""auth_create_team"",
  ""auth_email_confirm_error"",
  ""auth_email_confirm_screen"",
  ""auth_email_confirm_success"",
  ""auth_flow_sign_in_error"",
  ""auth_flow_sign_in_success"",
  ""auth_flow_sign_out"",
  ""auth_flow_sign_up_error"",
  ""auth_flow_sign_up_success"",
  ""auth_flow_third_party_sign_in_error"",
  ""auth_flow_third_party_sign_in_success"",
  ""auth_reset_password_email_confirm_screen"",
  ""auth_reset_password_error"",
  ""auth_reset_password_screen"",
  ""auth_reset_password_submit_error"",
  ""auth_reset_password_submit_success"",
  ""auth_reset_password_success"",
  ""auth_select_team"",
  ""auth_select_team_change_error"",
  ""auth_select_team_change_success"",
  ""auth_sign_in_error"",
  ""auth_sign_in_screen"",
  ""auth_sign_in_success"",
  ""auth_sign_up_error"",
  ""auth_sign_up_main_screen"",
  ""auth_sign_up_password_screen"",
  ""auth_sign_up_personal_screen"",
  ""auth_sign_up_phone_screen"",
  ""auth_sign_up_success"",
  ""brand_assets_create_folder"",
  ""brand_assets_delete_file"",
  ""brand_assets_delete_folder"",
  ""brand_assets_download_file"",
  ""brand_assets_download_many_files"",
  ""brand_assets_open_file"",
  ""brand_assets_rename_folder"",
  ""brand_assets_set_cover"",
  ""brand_assets_upload_file"",
  ""brief_category_template_selected"",
  ""brief_submit_redirected"",
  ""call_booked"",
  ""changed_role"",
  ""chat_mentions_invite_cancel"",
  ""chat_mentions_invite_member_submit_error"",
  ""chat_mentions_invite_member_submit_success"",
  ""chat_mentions_invite_show"",
  ""chat_mentions_invite_submit"",
  ""chat_mentions_item_select"",
  ""chat_mentions_member_invited"",
  ""chat_message_sent"",
  ""chilipiper_availability_loaded"",
  ""chilipiper_booked"",
  ""chilipiper_booking_confirmed"",
  ""chilipiper_close"",
  ""chilipiper_esc"",
  ""chilipiper_no_free_slots"",
  ""chilipiper_set_iframe_size"",
  ""chilipiper_timeslot_selected"",
  ""chilipiper_undefined"",
  ""company_integrations_slack_connect_failed"",
  ""company_integrations_slack_connect_success"",
  ""create_brief_save_error"",
  ""create_brief_submit_error"",
  ""create_brief_submit_redirected"",
  ""dashboard_introduction_video_played"",
  ""default_payment_method_changed"",
  ""deleted_payment_method"",
  ""drag_end"",
  ""drag_start"",
  ""edit_brief_save_error"",
  ""edit_brief_submit_error"",
  ""edit_brief_submit_redirected"",
  ""empty_page_new_user_screen_start_now_clicked"",
  ""error_occurred"",
  ""experiment_play"",
  ""experiment_viewed"",
  ""explore_superside_item_clicked"",
  ""explore_superside_item_shown"",
  ""feedback_trustpilot_review_canceled"",
  ""feedback_trustpilot_review_clicked"",
  ""file_preview_change_scale"",
  ""file_preview_close_click"",
  ""file_preview_closed"",
  ""file_preview_download_click"",
  ""file_preview_drag_start"",
  ""file_preview_initialized"",
  ""file_preview_multi_page_file"",
  ""file_preview_next_page"",
  ""file_preview_previous_page"",
  ""file_preview_project_file_preview_download"",
  ""file_preview_set_page"",
  ""file_preview_single_page_file"",
  ""file_preview_zoomed_image_change_scale"",
  ""file_preview_zoomed_image_drag_start"",
  ""file_preview_zoomed_image_start"",
  ""file_uploading_file_added"",
  ""file_uploading_file_removed"",
  ""file_uploading_files_uploaded"",
  ""filter_applied"",
  ""form_field_filled"",
  ""form_focused"",
  ""form_initiated"",
  ""form_section_shown"",
  ""form_submitted"",
  ""handle_download_selected_files_selected_filed_download"",
  ""handle_download_selected_files_selected_files_download"",
  ""header_cta_invite"",
  ""header_cta_subscribe"",
  ""hello"",
  ""item_click"",
  ""item_clicked"",
  ""item_hidden"",
  ""item_scrolled"",
  ""item_shown"",
  ""join_request_accepted"",
  ""join_request_close"",
  ""join_request_email_join_request_accepted"",
  ""join_request_join_request_accepted"",
  ""join_request_join_request_notification_snippet_click"",
  ""join_request_join_request_notification_snippet_close"",
  ""join_request_join_request_notification_snippet_show"",
  ""join_request_rejected"",
  ""join_request_show"",
  ""list_asset_item_download_click"",
  ""loaded_a_page"",
  ""logged_in"",
  ""menu_closed"",
  ""menu_opened"",
  ""message_send"",
  ""messages_read"",
  ""modal_closed"",
  ""modal_viewed"",
  ""notifications_closed"",
  ""notifications_opened"",
  ""onboard_auto_create_team_success"",
  ""onboard_create_team_error"",
  ""onboard_create_team_screen"",
  ""onboard_create_team_submit"",
  ""onboard_create_team_success"",
  ""onboard_invites_accepted"",
  ""onboard_invites_screen"",
  ""onboard_project_creation_project_created"",
  ""onboard_project_creation_project_submitted"",
  ""onboard_project_creation_shown"",
  ""onboard_project_creation_skipped"",
  ""onboard_project_submission_form"",
  ""onboard_project_submission_form_submit"",
  ""onboard_project_submission_form_submit_error"",
  ""onboard_project_submission_form_submit_success"",
  ""onboard_request_screen"",
  ""onboard_request_sent"",
  ""onboard_team_expansion_screen"",
  ""onboard_team_expansion_success"",
  ""onboard_team_init_shown"",
  ""onboard_team_init_skipped"",
  ""onboarding_team_expansion_member_invited"",
  ""project_brief_cancel_confirmed"",
  ""project_brief_cancel_rejected"",
  ""project_brief_cancel_requested"",
  ""project_brief_created"",
  ""project_brief_created_error"",
  ""project_brief_created_success"",
  ""project_brief_do_submit"",
  ""project_brief_do_submit_error"",
  ""project_brief_do_submit_success"",
  ""project_brief_saved"",
  ""project_brief_saved_error"",
  ""project_brief_saved_success"",
  ""project_brief_submit"",
  ""project_brief_submit_error"",
  ""project_brief_submit_success"",
  ""project_created"",
  ""project_creation_brief_category_template_selected"",
  ""project_creation_cancel_save"",
  ""project_creation_cancel_save_error"",
  ""project_creation_cancel_save_success"",
  ""project_creation_form"",
  ""project_creation_form_submit"",
  ""project_creation_form_submit_error"",
  ""project_creation_form_submit_success"",
  ""project_creation_form_submitted"",
  ""project_creation_submit"",
  ""project_creation_submit_error"",
  ""project_creation_submit_success"",
  ""project_creation_template_selected"",
  ""project_edit_form"",
  ""project_error_500"",
  ""project_error_access_denied"",
  ""project_error_not_found"",
  ""project_file_preview_download"",
  ""project_invite_accept"",
  ""project_invite_close"",
  ""project_invite_email_invitation_accepted"",
  ""project_invite_emails_input_screen"",
  ""project_invite_emails_verify_screen"",
  ""project_invite_form_closed"",
  ""project_invite_form_opened"",
  ""project_invite_hide_errors"",
  ""project_invite_input_cleared"",
  ""project_invite_invitation_accepted"",
  ""project_invite_link_invitation_accepted"",
  ""project_invite_member_invited"",
  ""project_invite_notification_snippet_click"",
  ""project_invite_notification_snippet_close"",
  ""project_invite_notification_snippet_show"",
  ""project_invite_resend_success"",
  ""project_invite_share_url_copied"",
  ""project_invite_show"",
  ""project_invite_show_errors"",
  ""project_invite_submit_success"",
  ""project_invite_typed_email"",
  ""project_invite_valid_email_provided"",
  ""project_invite_validation_error_on_submit"",
  ""project_submission_form"",
  ""project_submission_form_submit"",
  ""project_submission_form_submit_error"",
  ""project_submission_form_submit_success"",
  ""project_submit_form"",
  ""project_submitted"",
  ""retry_occurred"",
  ""search_query_cleared"",
  ""search_query_entered"",
  ""signed_up"",
  ""simplified_projects_table_favorite_success"",
  ""simplified_projects_table_unfavorite_success"",
  ""submit_success"",
  ""superspace_sidebar_item_click_home"",
  ""superspace_sidebar_item_click_projects"",
  ""survey_submitted"",
  ""team_invite_accept"",
  ""team_invite_close"",
  ""team_invite_email_invitation_accepted"",
  ""team_invite_emails_input_screen"",
  ""team_invite_emails_verify_screen"",
  ""team_invite_form_closed"",
  ""team_invite_form_opened"",
  ""team_invite_hide_errors"",
  ""team_invite_input_cleared"",
  ""team_invite_invitation_accepted"",
  ""team_invite_link_invitation_accepted"",
  ""team_invite_member_invited"",
  ""team_invite_share_url_copied"",
  ""team_invite_show"",
  ""team_invite_show_errors"",
  ""team_invite_submit_success"",
  ""team_invite_typed_email"",
  ""team_invite_valid_email_provided"",
  ""team_invite_validation_error_on_submit"",
  ""team_toast_notification_snippet_click"",
  ""team_toast_notification_snippet_close"",
  ""team_toast_notification_snippet_show"",
  ""template_questions_add"",
  ""test_event"",
  ""validation_error_on_submit"",
  ""video_loaded"",
  ""video_played"",
  ""widget_shown""
]"
INT_FRONTEND_EVENTS	This model contains frontend events information and their main common custom properties	USER_AGENT	TEXT	the browser, device, version of the event	
INT_FRONTEND_EVENTS	This model contains frontend events information and their main common custom properties	USER_ID	TEXT	the identifier of the user	
INT_FRONTEND_EVENTS	This model contains frontend events information and their main common custom properties	PAGE_PATH	TEXT	the path (link) of the page in which the event took place	
INT_FRONTEND_EVENTS	This model contains frontend events information and their main common custom properties	TIMESTAMP	TIMESTAMP_NTZ	when the event took place	
INT_FRONTEND_EVENTS	This model contains frontend events information and their main common custom properties	PAGE_TITLE	TEXT	the title of the page in which the event took place	
INT_FRONTEND_EVENTS	This model contains frontend events information and their main common custom properties	ANONYMOUS_ID	TEXT	segment's anonymous identifier of the user	
INT_FRONTEND_EVENTS	This model contains frontend events information and their main common custom properties	AMPLITUDE_SESSION_ID	NUMBER		
INT_FRONTEND_EVENTS	This model contains frontend events information and their main common custom properties	RECEIVED_AT	TIMESTAMP_NTZ		
INT_FRONTEND_EVENTS	This model contains frontend events information and their main common custom properties	EVENT_ID	TEXT	the unique identifier of each event	
`
