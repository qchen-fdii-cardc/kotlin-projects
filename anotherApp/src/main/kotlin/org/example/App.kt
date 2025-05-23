/*
 * This source file was generated by the Gradle 'init' task
 */
package org.example

object App {
    val greeting: String
        get() {
            return "Hello World!"
        }
}

fun main(args: Array<String>) {
    println("${App.greeting}")
    args.forEachIndexed { i, arg ->
        println("arg[$i]: $arg")
    }

    val argsWithProg = System.getProperty("sun.java.command")
    println("java args line: $argsWithProg")
}
