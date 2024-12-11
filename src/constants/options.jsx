    export const SelectTravelesList = [
        {
            id: 1,
            title: 'Just me',
            desc: "A sole traveler looking for a relaxing getaway",
            icon:'✈️',
            people:1,
            toolTipText:"The model is assuming 1 person if you select this,",
            estimatedBudget: 'Assumed budget $500 - $1,000',
        },
        {
            id:2,
            title:'Couple',
            desc:" Two people looking for a romantic getaway",
            icon:'🥂',
            people:2,
            toolTipText:"The model is assuming 2 person if you select this,",
            estimatedBudget: 'Assumed budget $1,500 - $2,5000',
        },
        {
            id:3,
            title:'Family',
            desc:"A family of 4 looking for a fun-filled getaway",
            icon:'🏡',
            people: 6,
            toolTipText:"The model is assuming 3-8 person if you select this,",
            estimatedBudget: 'Assumed budget $2,500 - $6,000',
        },
        {
            id:4,
            title:'Friends',
            desc:"A group of friends looking for a lively adventure",
            icon:'⛵',
            people: 10,
            toolTipText:"The model is assuming 4-10 person if you select this,",
            estimatedBudget: 'Assumed budget $5,500 - $10,000',
        }
    ]

    export const SelectBudgetOptions = [
        {
            id:1,
            title:'Cheap',
            desc:"Stays conscious of costs",
            icon:'💵',
            estimatedBudget: 'The model is assuming budget of $500 - $1,000 (may vary)',
        },
        {
            id:2,
            title:'Moderate',
            desc:"Keeps costs on average side",
            icon:'💰',
            estimatedBudget: 'The model is assuming budget of $2,500 - $4,000 (may vary)',
        },
        {
            id:3,
            title:'Luxury',
            desc:"Don`t care about the costs",
            icon:'💸',
            estimatedBudget: 'The model is assuming budget of $4,000+ (may vary)',
        }
    ]

    export const AI_PROMPT = "Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveler} with a {budget} budget, give me Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggestitinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format."