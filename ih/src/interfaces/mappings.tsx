export function tierMappings(tier: string): string {
    const pathToEmblems: string = "/assets/ranked_emblems/";
    const pathToProvisional: string = "/assets/base-icons/provisional.png"
    const mappings: { [key: string]: string } = {
        "unranked": pathToProvisional,
        "iron": pathToEmblems + "Emblem_Iron.png",
        "bronze": pathToEmblems + "Emblem_Bronze.png",
        "silver": pathToEmblems + "Emblem_Silver.png",
        "gold": pathToEmblems + "Emblem_Gold.png",
        "platinum": pathToEmblems + "Emblem_Platinum.png",
        "diamond": pathToEmblems + "Emblem_Diamond.png",
        "master": pathToEmblems + "Emblem_Master.png",
        "grandmaster": pathToEmblems + "Emblem_Grandmaster.png",
        "challenger": pathToEmblems + "Emblem_Challenger.png",
    };
    return mappings[tier.toLowerCase()];
}