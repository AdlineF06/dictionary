import java.util.*;

public class NewsApp {
    public static void main(String[] args) {
        // Sample offline news feed (replace with a real News API call if you have an API key)
        String[][] articles = {
            {"Local Team Wins Championship", "The city celebrates a historic sports victory."},
            {"New Tech Breakthrough Announced", "Researchers unveil a major innovation in AI."},
            {"Markets Rally After Policy Update", "Stock markets respond positively to new economic policy."},
            {"Weather Alert Issued", "Authorities warn of heavy rainfall in the region."},
            {"New Movie Tops Box Office", "The latest blockbuster breaks opening weekend records."}
        };

        System.out.println("--- NEWS FEED ---");
        for (String[] article : articles) {
            System.out.println("\nHeadline: " + article[0]);
            System.out.println("Summary : " + article[1]);
        }

        System.out.println("\n(Tip: Integrate a real News API like NewsAPI.org by making an HTTP request with HttpURLConnection or a library like OkHttp, then parse the JSON response.)");
    }
}
