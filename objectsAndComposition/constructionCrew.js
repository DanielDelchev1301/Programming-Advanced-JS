function constructionCrew(worker) {
    if (worker.dizziness == true) {
        worker.levelOfHydrated += 0.1 * worker.experience * worker.weight;
    }
    return worker;
}
constructionCrew({ weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true });