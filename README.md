# Kotlin Projects

This repository contains a collection of Kotlin projects that I have created.

计划整理一组Kotlin项目，介绍Kotlin开发。目前把这个一系列整理为一个Gradle项目。

这个项目包含一系列Kotlin项目，每个项目是一个独立的文件夹。

每个项目中，包含一个build.gradle.kts文件，用于构建项目。

每个项目中，包含一个src文件夹，用于存放源代码。

目前采用的JDK和Gradle版本如下：

```quote
JDK: 21.0.6
Gradle: 8.4
```

## Gradle Crush Tutorial on My Own Words

### Gradle Wrapper

首先，我们进入这个目录下面，然后执行命令看看Gradle是否正常，一般而言，总是有两个文件`gradlew`和`gradlew.bat`，分别用于Linux和Windows，还有一个目录`gradle`，用于存放Gradle的配置文件和wrapper的实现。

```bash
cd kotlin-projects
./gradlew --version
```

如果看到类似下面的输出，说明Gradle安装正常；实际上，如果本机还没有Gradle，那么执行这个命令的时候，会自动从网上下载一个Gradle，并安装到本机的默认目录。

```bash
------------------------------------------------------------
Gradle 8.4
------------------------------------------------------------

Build time:   2023-10-04 20:52:13 UTC
Revision:     e9251e572c9bd1d01e503a0dfdf43aedaeecdc3f

Kotlin:       1.9.10
Groovy:       3.0.17
Ant:          Apache Ant(TM) version 1.10.13 compiled on January 4 2023
JVM:          21.0.6 (Ubuntu 21.0.6+7-Ubuntu-122.04.1)
OS:           Linux 5.15.167.4-microsoft-standard-WSL2 amd64
```

我们实际上采用了一种gradle wrapper的方式来管理和使用Gradle，具体的Gradle的信心记录在`gradle/wrapper/gradle-wrapper.properties`文件中。

```quote
distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\://mirrors.aliyun.com/github/releases/gradle/gradle-distributions/v8.4.0/gradle-8.4-bin.zip
networkTimeout=10000
validateDistributionUrl=true
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
```

那里面还有一个文件`gradle-wrapper.jar`，这个文件是Gradle的wrapper的实现。

### 管理项目

首先，我们可以看看`settings.gradle.kts`文件，这个文件用于管理项目，这个后缀说明这个文件是Kotlin写的。过去，这个文件是Groovy写的，现在Gradle已经默认支持Kotlin。

```kotlin
rootProject.name = "kotlin-projects"
include("app")
include("anotherApp")
include("javafx-app1")
```

当然，运行Gradle我们可以看到项目之间的依赖关系。

```bash
./gradlew projects


> Task :projects

------------------------------------------------------------
Root project 'kotlin-projects'
------------------------------------------------------------

Root project 'kotlin-projects'
+--- Project ':anotherApp'
+--- Project ':app'
\--- Project ':javafx-app1'

To see a list of the tasks of a project, run gradlew <project-path>:tasks
For example, try running gradlew :anotherApp:tasks
```

这里也高速我们，我们可以通过`gradlew <project-path>:tasks`来查看一个项目的所有任务。这里的`<project-path>`是项目的路径，比如`:app`。当然，实际上，`:app`可以简写为`app`，`:anotherApp`可以简写为`anotherApp`，`:javafx-app1`可以简写为`javafx-app1`。

```bash
./gradlew app:tasks
```

这样可以看到所有能够执行的任务。

```bash
> Task :app:tasks

------------------------------------------------------------
Tasks runnable from project ':app'
------------------------------------------------------------

Application tasks
-----------------
run - Runs this project as a JVM application
runShadow - Runs this project as a JVM application using the shadow jar
startShadowScripts - Creates OS specific scripts to run the project as a JVM application using the shadow jar

Build tasks
-----------
assemble - Assembles the outputs of this project.
build - Assembles and tests this project.
buildDependents - Assembles and tests this project and all projects that depend on it.
buildKotlinToolingMetadata - Build metadata json file containing information about the used Kotlin tooling
buildNeeded - Assembles and tests this project and all projects it depends on.
classes - Assembles main classes.
clean - Deletes the build directory.
createDelegatingModules - Creates delegating modules for the jars that have been merged into a single module
createMergedModule - Unpacks all non-modularized jars into a single directory
jar - Assembles a jar archive containing the classes of the 'main' feature.
jlink - Creates a modular runtime image with jlink
jlinkZip - Creates a zip of the modular runtime image
jpackage - Creates an installable image using the jpackage tool
jpackageImage - Creates an installable image using the jpackage tool
kotlinSourcesJar - Assembles a jar archive containing the sources of target 'kotlin'.
prepareMergedJarsDir - Merges all non-modularized jars into a single module
prepareModulesDir - Prepares the directory containing modules required by the application
suggestMergedModuleInfo - Suggests a module declaration for the merged module
testClasses - Assembles test classes.
```

后面的tasks，这里省略了，实际上一大页。

就比如，我们可以运行

```bash
./gradlew app:build
```

这样就可以构建app项目。

```bash
./gradlew app:run --args="1 2 3 4 5"
```

后面这个`--args`是给main函数传递参数，这里我们传递了5个参数。

```bash
> Task :app:run
Hello World!
arg[0]: 1
arg[1]: 2
arg[2]: 3
arg[3]: 4
arg[4]: 5
java args line: org.example/org.example.AppKt 1 2 3 4 5
```

在运行这些过程中，Gradle会自动下载依赖的库，并缓存到本地的Gradle仓库。如果出现任何错误，还可以通过`./gradlew clean`来清理缓存。或者增加`--debug`或者`--info`参数来查看更多的信息。

```bash
./gradlew app:run --args="1 2 3 4 5" --debug
```

大概，通过task的名字，我们基本上都能够猜到这个task是干啥的。

### 总结

Gradle Wrapper是一个非常方便的工具，它可以帮助我们快速地构建项目。Gradle Wrapper的实现原理是：

1. 在项目根目录下创建一个`gradle`目录，用于存放Gradle的配置文件和wrapper的实现。
2. 在`gradle`目录下创建一个`wrapper`目录，用于存放Gradle的wrapper的实现。
3. 在`wrapper`目录下创建一个`gradle-wrapper.properties`文件，用于存放Gradle的wrapper的实现。

## 继续自己的开发

实际上，根据现在这个项目，我们就可以继续自己的开发了。

```bash
cp -r app anotherApp
```

然后检查`settings.gradle.kts`文件，确保`anotherApp`被包含进来。

```kotlin
include("anotherApp")
```

这样，就有一个完全配置好的Gradle项目了。

```bash
./gradlew anotherApp:tasks
```

这样就可以看到另一个App的所有任务。
