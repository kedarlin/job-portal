-- Create Table Users
CREATE TABLE Users (
    id BIGINT PRIMARY KEY,
    userName VARCHAR,
    email VARCHAR UNIQUE,
    password VARCHAR,
    Role VARCHAR,
    profileId BIGINT REFERENCES UserProfile(id),
    companyProfileId BIGINT REFERENCES CompanyProfile(id)
);

-- Create Table UserProfile
CREATE TABLE UserProfile (
    id BIGINT PRIMARY KEY,
    profileImage BYTEA,
    profileDescription VARCHAR,
    age INT,
    phone BIGINT,
    about VARCHAR,
    resumePDF BYTEA
);

-- Create Table Skills
CREATE TABLE Skills (
    id BIGINT PRIMARY KEY,
    skillName VARCHAR UNIQUE,
    userProfileId BIGINT REFERENCES UserProfile(id)
);

-- Create Table Education
CREATE TABLE Education (
    id BIGINT PRIMARY KEY,
    educationName VARCHAR,
    educationInstitution VARCHAR,
    score FLOAT,
    specialization VARCHAR,
    startDate DATE,
    endDate DATE,
    status VARCHAR CHECK (status IN ('completed', 'current', 'incomplete')),
    userProfileId BIGINT REFERENCES UserProfile(id)
);

-- Create Table WorkExperience
CREATE TABLE WorkExperience (
    id BIGINT PRIMARY KEY,
    companyName VARCHAR,
    roleName VARCHAR,
    currentJob BOOLEAN,
    workStart DATE,
    workEnd DATE,
    description VARCHAR,
    userProfileId BIGINT REFERENCES UserProfile(id),
    companyProfileId BIGINT REFERENCES CompanyProfile(id)
);

-- Create Table ApplicationForms
CREATE TABLE ApplicationForms (
    id BIGINT PRIMARY KEY,
    jobTitle VARCHAR,
    qualification VARCHAR,
    education VARCHAR,
    requirements VARCHAR,
    salary BIGINT,
    location VARCHAR,
    createdAt DATE,
    lastDate DATE,
    recruitTeam BIGINT REFERENCES RecruitersTeam(id),
    companyProfileId BIGINT REFERENCES CompanyProfile(id)
);

-- Create Table Applications
CREATE TABLE Applications (
    id BIGINT PRIMARY KEY,
    appliedAt DATE,
    status VARCHAR CHECK (status IN ('shortlisted', 'rejected', 'pending')),
    applicationFormId BIGINT REFERENCES ApplicationForms(id),
    profileId BIGINT REFERENCES UserProfile(id)
);

-- Create Table CompanyProfile
CREATE TABLE CompanyProfile (
    id BIGINT PRIMARY KEY,
    companyName VARCHAR,
    email VARCHAR UNIQUE,
    establishedYear DATE,
    description VARCHAR,
    address VARCHAR,
    website VARCHAR,
    contactPhone BIGINT,
    companyProfileImage BYTEA
);

-- Create Table RecruitersTeam
CREATE TABLE RecruitersTeam (
    id BIGINT PRIMARY KEY,
    teamName VARCHAR,
    companyProfileId BIGINT REFERENCES CompanyProfile(id)
);

-- Create Table TeamMembers
CREATE TABLE TeamMembers (
    id BIGINT PRIMARY KEY,
    userId BIGINT REFERENCES UserProfile(id),
    teamId BIGINT REFERENCES RecruitersTeam(id)
);

-- Create Table WishList
CREATE TABLE WishList (
    id BIGINT PRIMARY KEY,
    profileId BIGINT REFERENCES UserProfile(id),
    applicationFormId BIGINT REFERENCES ApplicationForms(id)
);

-- Create Table Feedback
CREATE TABLE Feedback (
    id BIGINT PRIMARY KEY,
    review VARCHAR,
    ratings INT CHECK (ratings BETWEEN 1 AND 5),
    applicationId BIGINT REFERENCES Applications(id)
);