document.addEventListener('DOMContentLoaded', function () {
    // Header template
    const headerTemplate = `
<div align="center">

[![Kotlin](https://img.shields.io/badge/Kotlin-2.0.10-blue.svg)](https://kotlinlang.org)
[![Gradle](https://img.shields.io/badge/Gradle-8.10.2-green.svg)](https://gradle.org)
[![JDK](https://img.shields.io/badge/JDK-21.0.6-orange.svg)](https://www.oracle.com/java/technologies/downloads/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A collection of Kotlin projects demonstrating various Kotlin development concepts and practices.

[Repository](https://github.com/qchen-fdii-cardc/kotlin-projects) | [Author](https://github.com/qchen-fdii-cardc/)

</div>

---

`;

    // Footer template
    const footerTemplate = `

---

<div align="center">
<hr>

<a href="https://github.com/qchen-fdii-cardc/">
  <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="Author" width="40" height="40" style="border-radius: 50%;"/>
</a>

**Qin Chen**  
**Developer**

[![GitHub](https://img.shields.io/badge/GitHub-qchen--fdii--cardc-181717?style=flat&logo=github)](https://github.com/qchen-fdii-cardc/)

</div>
`;

    // Get the main content
    const mainContent = document.querySelector('h2');
    if (mainContent) {
        // Add header
        mainContent.insertAdjacentHTML('beforebegin', headerTemplate);
    }
    const footerContent = document.querySelectorAll('p').last();
    if (footerContent) {
        // Add footer
        footerContent.insertAdjacentHTML('afterend', footerTemplate);
    }
}); 