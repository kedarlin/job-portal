type education = {
    id?: number,
    educationName: string,
    educationInstitution: string,
    score: number,
    specialization: string,
    startDate: Date,
    endDate: Date,
    status: "completed" | "current" | "incomplete",
    userProfileId: number
}