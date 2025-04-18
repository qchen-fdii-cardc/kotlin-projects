document.addEventListener('DOMContentLoaded', function () {
    // Header template with pure HTML
    const headerTemplate = `
<div align="center">
    <div style="margin-bottom: 20px;">
        <a href="https://kotlinlang.org"><img src="https://img.shields.io/badge/Kotlin-2.0.10-blue.svg" alt="Kotlin"></a>
        <a href="https://gradle.org"><img src="https://img.shields.io/badge/Gradle-8.10.2-green.svg" alt="Gradle"></a>
        <a href="https://www.oracle.com/java/technologies/downloads/"><img src="https://img.shields.io/badge/JDK-21.0.6-orange.svg" alt="JDK"></a>
        <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License"></a>
    </div>

    <p>A collection of Kotlin projects demonstrating various Kotlin development concepts and practices.</p>

    <p>
        <a href="https://github.com/qchen-fdii-cardc/kotlin-projects">Repository</a> | 
        <a href="https://github.com/qchen-fdii-cardc/">Author</a>
    </p>
</div>

<hr>
`;

    // Footer template with pure HTML
    const footerTemplate = `
<hr>

<div align="center">
    <a href="https://github.com/qchen-fdii-cardc/">
        <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="Author" width="40" height="40" style="border-radius: 50%;"/>
    </a>

    <p><strong>Qin Chen</strong><br>
    <strong>Developer</strong></p>

    <a href="https://github.com/qchen-fdii-cardc/">
        <img src="https://img.shields.io/badge/GitHub-qchen--fdii--cardc-181717?style=flat&logo=github" alt="GitHub">
    </a>
</div>
`;

    // Insert header before the first element in body
    document.body.insertAdjacentHTML('afterbegin', headerTemplate);

    // Insert footer after the last element in body
    document.body.insertAdjacentHTML('beforeend', footerTemplate);
}); 