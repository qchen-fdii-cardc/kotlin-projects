package app

import javafx.application.Application
import javafx.application.Platform
import javafx.scene.Scene
import javafx.scene.control.Label
import javafx.scene.layout.VBox
import javafx.geometry.Pos
import javafx.geometry.Insets
import javafx.scene.image.Image
import javafx.stage.Stage

object View {
    val scene = Scene(
        VBox(
        10.0, VBox(
            10.0, Label("Hello"), Label(Model.get())
        ).apply {
            alignment = Pos.CENTER
        }).apply {
        padding = Insets(20.0)
    }, 300.0, 200.0
    )
}


class HelloWorld : Application() {
    override fun start(stage: Stage) {



        stage.title = "Hello World App 2"
        stage.scene = View.scene

        javaClass.getResourceAsStream("/icon.png")?.let { stream ->
            stage.icons.add(Image(stream))
        }

        // Set up window closing behavior
        stage.setOnCloseRequest {
            Platform.exit()  // This will properly exit the JavaFX application
        }

        stage.show()
    }
}