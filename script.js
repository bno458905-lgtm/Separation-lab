// ===============================
// HOME PAGE → LAB MAP
// ===============================

const homePage = document.getElementById("homePage");
const enterLab = document.getElementById("enterLab");
const labMap = document.getElementById("labMap");

enterLab.addEventListener("click", function () {
    homePage.style.display = "none";
    labMap.style.display = "block";
});


// ===============================
// HAND PICKING
// ===============================

const handPicking = document.getElementById("handPicking");
const handPickingLab = document.getElementById("handPickingLab");

const result = document.getElementById("result");
const missionComplete = document.getElementById("missionComplete");
const backToMap = document.getElementById("backToMap");

handPicking.addEventListener("click", function () {
    labMap.style.display = "none";
    handPickingLab.style.display = "block";
});

document.getElementById("handPickAnswer").addEventListener("click", function () {
    result.textContent =
        "CORRECT! The stones can be picked out by hand because they are large enough to see and handle.";

    missionComplete.style.display = "block";
});

document.getElementById("wrongAnswer").addEventListener("click", function () {
    result.textContent =
        "Not quite. Filtration is used to separate an insoluble solid from a liquid.";
});

backToMap.addEventListener("click", function () {
    handPickingLab.style.display = "none";
    labMap.style.display = "block";
});


// ===============================
// SIEVING
// ===============================

const sieving = document.getElementById("sieving");
const sievingLab = document.getElementById("sievingLab");

const sievingResult = document.getElementById("sievingResult");
const sievingMissionComplete = document.getElementById("sievingMissionComplete");
const sievingBackToMap = document.getElementById("sievingBackToMap");

sieving.addEventListener("click", function () {
    labMap.style.display = "none";
    sievingLab.style.display = "block";
});

document.getElementById("sievingAnswer").addEventListener("click", function () {
    sievingResult.textContent =
        "CORRECT! Sieving separates solid particles of different sizes.";

    sievingMissionComplete.style.display = "block";
});

document.getElementById("sievingWrongAnswer").addEventListener("click", function () {
    sievingResult.textContent =
        "Not quite. Filtration is used to separate an insoluble solid from a liquid.";
});

sievingBackToMap.addEventListener("click", function () {
    sievingLab.style.display = "none";
    labMap.style.display = "block";
});


// ===============================
// FILTRATION
// ===============================

const filtration = document.getElementById("filtration");
const filtrationLab = document.getElementById("filtrationLab");

const filtrationResult = document.getElementById("filtrationResult");
const filtrationMissionComplete =
    document.getElementById("filtrationMissionComplete");
const filtrationBackToMap =
    document.getElementById("filtrationBackToMap");

filtration.addEventListener("click", function () {
    labMap.style.display = "none";
    filtrationLab.style.display = "block";
});

document.getElementById("filtrationAnswer").addEventListener("click", function () {
    filtrationResult.textContent =
        "CORRECT! Filtration separates an insoluble solid from a liquid.";

    filtrationMissionComplete.style.display = "block";
});

document.getElementById("filtrationWrongAnswer").addEventListener("click", function () {
    filtrationResult.textContent =
        "Not quite. Sieving separates solid particles of different sizes.";
});

filtrationBackToMap.addEventListener("click", function () {
    filtrationLab.style.display = "none";
    labMap.style.display = "block";
});

const evaporation =
    document.getElementById("evaporation");

const evaporationLab =
    document.getElementById("evaporationLab");

evaporation.addEventListener("click", function() {
    labMap.style.display = "none";
    evaporationLab.style.display = "block";
});

const evaporationResult =
    document.getElementById("evaporationResult");

const evaporationMissionComplete =
    document.getElementById("evaporationMissionComplete");

const evaporationBackToMap =
    document.getElementById("evaporationBackToMap");

document.getElementById("evaporationAnswer").addEventListener("click", function() {
    evaporationResult.textContent =
        "CORRECT! Evaporation is used to separate a dissolved solid from a solution by removing the solvent.";
    evaporationMissionComplete.style.display = "block";
});

document.getElementById("evaporationWrongAnswer").addEventListener("click", function() {
    evaporationResult.textContent =
        "Not quite. Evaporation is used to obtain a dissolved solid from a solution.";
});

evaporationBackToMap.addEventListener("click", function() {
    evaporationLab.style.display = "none";
    labMap.style.display = "block";
});
// ===============================
// EVAPORATION
// ===============================



// ===============================
// CRYSTALLIZATION
// ===============================

const crystallization = document.getElementById("crystallization");
const crystallizationLab = document.getElementById("crystallizationLab");

const crystallizationResult =
    document.getElementById("crystallizationResult");

const crystallizationMissionComplete =
    document.getElementById("crystallizationMissionComplete");

const crystallizationBackToMap =
    document.getElementById("crystallizationBackToMap");

crystallization.addEventListener("click", function () {
    labMap.style.display = "none";
    crystallizationLab.style.display = "block";
});

document.getElementById("crystallizationAnswer").addEventListener("click", function () {
    crystallizationResult.textContent =
        "CORRECT! Crystallization is used to obtain crystals of a dissolved solid.";

    crystallizationMissionComplete.style.display = "block";
});

document.getElementById("crystallizationWrongAnswer").addEventListener("click", function () {
    crystallizationResult.textContent =
        "Not quite. Filtration separates an insoluble solid from a liquid.";
});

crystallizationBackToMap.addEventListener("click", function () {
    crystallizationLab.style.display = "none";
    labMap.style.display = "block";
});
const simpleDistillation = document.getElementById("simpleDistillation");
const simpleDistillationLab = document.getElementById("simpleDistillationLab");

simpleDistillation.addEventListener("click", function() {
    labMap.style.display = "none";
    simpleDistillationLab.style.display = "block";
});

const simpleDistillationResult =
    document.getElementById("simpleDistillationResult");

const simpleDistillationMissionComplete =
    document.getElementById("simpleDistillationMissionComplete");

const simpleDistillationBackToMap =
    document.getElementById("simpleDistillationBackToMap");

document.getElementById("simpleDistillationAnswer").addEventListener("click", function() {
    simpleDistillationResult.textContent =
        "CORRECT! Simple distillation can be used to obtain water from a salt solution.";

    simpleDistillationMissionComplete.style.display = "block";
});

document.getElementById("simpleDistillationWrongAnswer").addEventListener("click", function() {
    simpleDistillationResult.textContent =
        "Not quite. Sieving separates solid particles of different sizes.";
});

simpleDistillationBackToMap.addEventListener("click", function() {
    simpleDistillationLab.style.display = "none";
    labMap.style.display = "block";
});
const fractionalDistillation =
    document.getElementById("fractionalDistillation");

const fractionalDistillationLab =
    document.getElementById("fractionalDistillationLab");

fractionalDistillation.addEventListener("click", function() {
    labMap.style.display = "none";
    fractionalDistillationLab.style.display = "block";
});

const fractionalDistillationResult =
    document.getElementById("fractionalDistillationResult");

const fractionalDistillationMissionComplete =
    document.getElementById("fractionalDistillationMissionComplete");

const fractionalDistillationBackToMap =
    document.getElementById("fractionalDistillationBackToMap");

document.getElementById("fractionalDistillationAnswer").addEventListener("click", function() {
    fractionalDistillationResult.textContent =
        "CORRECT! Fractional distillation separates miscible liquids with different boiling points.";

    fractionalDistillationMissionComplete.style.display = "block";
});

document.getElementById("fractionalDistillationWrongAnswer").addEventListener("click", function() {
    fractionalDistillationResult.textContent =
        "Not quite. Filtration separates an insoluble solid from a liquid.";
});

fractionalDistillationBackToMap.addEventListener("click", function() {
    fractionalDistillationLab.style.display = "none";
    labMap.style.display = "block";
});

const separatingFunnel =
    document.getElementById("separatingFunnel");

const separatingFunnelLab =
    document.getElementById("separatingFunnelLab");

separatingFunnel.addEventListener("click", function() {
    labMap.style.display = "none";
    separatingFunnelLab.style.display = "block";
});

const separatingFunnelResult =
    document.getElementById("separatingFunnelResult");

const separatingFunnelMissionComplete =
    document.getElementById("separatingFunnelMissionComplete");

const separatingFunnelBackToMap =
    document.getElementById("separatingFunnelBackToMap");

document.getElementById("separatingFunnelAnswer").addEventListener("click", function() {
    separatingFunnelResult.textContent =
        "CORRECT! A separating funnel is used to separate two immiscible liquids.";
    separatingFunnelMissionComplete.style.display = "block";
});

document.getElementById("separatingFunnelWrongAnswer").addEventListener("click", function() {
    separatingFunnelResult.textContent =
        "Not quite. Filtration separates an insoluble solid from a liquid.";
});

separatingFunnelBackToMap.addEventListener("click", function() {
    separatingFunnelLab.style.display = "none";
    labMap.style.display = "block";
});
const chromatography =
    document.getElementById("chromatography");

const chromatographyLab =
    document.getElementById("chromatographyLab");

chromatography.addEventListener("click", function() {
    labMap.style.display = "none";
    chromatographyLab.style.display = "block";
});

const chromatographyResult =
    document.getElementById("chromatographyResult");

const chromatographyMissionComplete =
    document.getElementById("chromatographyMissionComplete");

const chromatographyBackToMap =
    document.getElementById("chromatographyBackToMap");

document.getElementById("chromatographyAnswer").addEventListener("click", function() {
    chromatographyResult.textContent =
        "CORRECT! Chromatography can separate the different dyes present in ink.";
    chromatographyMissionComplete.style.display = "block";
});

document.getElementById("chromatographyWrongAnswer").addEventListener("click", function() {
    chromatographyResult.textContent =
        "Not quite. Sieving separates solid particles of different sizes.";
});

chromatographyBackToMap.addEventListener("click", function() {
    chromatographyLab.style.display = "none";
    labMap.style.display = "block";
});

const centrifugation =
    document.getElementById("centrifugation");

const centrifugationLab =
    document.getElementById("centrifugationLab");

centrifugation.addEventListener("click", function() {
    labMap.style.display = "none";
    centrifugationLab.style.display = "block";
});

const centrifugationResult =
    document.getElementById("centrifugationResult");

const centrifugationMissionComplete =
    document.getElementById("centrifugationMissionComplete");

const centrifugationBackToMap =
    document.getElementById("centrifugationBackToMap");

document.getElementById("centrifugationAnswer").addEventListener("click", function() {
    centrifugationResult.textContent =
        "CORRECT! Centrifugation uses rapid spinning to separate substances based on density.";
    centrifugationMissionComplete.style.display = "block";
});

document.getElementById("centrifugationWrongAnswer").addEventListener("click", function() {
    centrifugationResult.textContent =
        "Not quite. Chromatography separates substances based on how far they travel through a medium.";
});

centrifugationBackToMap.addEventListener("click", function() {
    centrifugationLab.style.display = "none";
    labMap.style.display = "block";
});
