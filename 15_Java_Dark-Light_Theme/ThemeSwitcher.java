import javax.swing.*;
import java.awt.*;

public class ThemeSwitcher {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Dark/Light Theme Switcher");
        frame.setSize(400, 300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JPanel panel = new JPanel();
        JLabel label = new JLabel("Hello! Toggle the theme below.");
        JButton toggleButton = new JButton("Switch to Dark Mode");

        panel.setBackground(Color.WHITE);
        label.setForeground(Color.BLACK);

        toggleButton.addActionListener(e -> {
            if (panel.getBackground().equals(Color.WHITE)) {
                panel.setBackground(Color.DARK_GRAY);
                label.setForeground(Color.WHITE);
                toggleButton.setText("Switch to Light Mode");
            } else {
                panel.setBackground(Color.WHITE);
                label.setForeground(Color.BLACK);
                toggleButton.setText("Switch to Dark Mode");
            }
        });

        panel.add(label);
        panel.add(toggleButton);
        frame.add(panel);
        frame.setVisible(true);
    }
}
