package app

import javafx.application.Application
import javafx.application.Platform
import javafx.geometry.Insets
import javafx.geometry.Pos
import javafx.scene.Scene
import javafx.scene.control.Button
import javafx.scene.control.Label
import javafx.scene.effect.BlendMode
import javafx.scene.image.Image
import javafx.scene.image.ImageView
import javafx.scene.layout.HBox
import javafx.scene.layout.VBox
import javafx.scene.text.Font
import javafx.stage.Stage

class HelloWorld : Application() {
    override fun start(stage: Stage) {
        val label = Label("Hello" + World.get())
        label.font = Font.font(24.0)  // Increase font size to 24
        label.alignment = Pos.CENTER

        // Create a container for the button and its icon
        val buttonContainer = HBox(10.0).apply {
            alignment = Pos.CENTER
            padding = Insets(10.0)
        }

        // Create the icon with color inversion
        val iconView = javaClass.getResourceAsStream("/icon.png")?.let { stream ->
            ImageView(Image(stream)).apply {
                fitWidth = 32.0
                fitHeight = 32.0
                isPreserveRatio = true
                blendMode = BlendMode.DIFFERENCE  // This will invert the colors
            }
        }

        // Create the button with text
        val button = Button("Open Another Window").apply {
            graphic = iconView
            graphicTextGap = 10.0
            setOnAction {
                val anotherWindow = Stage()
                val anotherScene = Scene(Label("Another Window"), 300.0, 250.0)
                anotherWindow.title = "Another Window"
                anotherWindow.scene = anotherScene
                anotherWindow.show()
            }
        }

        buttonContainer.children.add(button)

        val scene = Scene(VBox(10.0, label, buttonContainer).apply {
            alignment = Pos.CENTER
            padding = Insets(20.0)
        }, 300.0, 250.0)

        stage.title = "Hello World"
        stage.scene = scene

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

fun main() {
    Application.launch(HelloWorld::class.java)
}
