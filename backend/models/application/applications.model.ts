enum applicationStatus {"shortlisted", "rejected", "pending"}

type application = {
    id?: number,
    appliedOn: Date,
    status: applicationStatus
    applicationFormId: number,
    profileId: number,
}