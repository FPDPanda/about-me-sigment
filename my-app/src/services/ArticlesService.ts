import Articles from "../entities/articles";

var article1 = {
  title: "Communication is Key",
  paragraphs: [
    "The most important aspect of communication is not how well you express yourself, but how effectively you listen and absorb information. Active listening is crucial for effective teamwork; it means fully focusing, understanding, and responding to what others are saying.",
    "True communication happenss when you completely understand what the other person needs from you. By mastering the art of active listening, you can avoid misunderstandings and foster a more collaborative and productive team environment.",
  ],
};

var article2 = {
  title: "Communication Breakdowns",
  paragraphs: [
    "Breakdowns in communication often occur when one party is unable or unwilling to understand the other's perspective. When you practice active listening, you open the door to empathy and mutual understanding.",
    "Developing this skill helps prevent miscommunication and builds trust within your team. A willingness to listen and understand is the foundation for strong, effective collaboration.",
  ],
};

class ArticlesService {
  getArticlesPage(): Articles {
    return {
      title: "Articles",
      articles: [article1, article2],
    };
  }
}

export default ArticlesService;
