type user = {
    id?: number,
    userName: string,
    email: string,
    password: string,
    role: string,
    profileId?: userProfile,
    companyProfileId?: companyProfile,
}