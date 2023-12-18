import MarkdownDisplay from "@components/day3/MarkdownDisplay";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

// const copy = `# Introduction
// Welcome to this sample markdown document! In this document, we'll explore various markdown elements.
// ## Text Formatting
// *This text* is italicized.
// **This text** is bold.
// ~~This text~~ is strikethrough.
// ## Lists
// ### Ordered List
// 1. Item 1
// 2. Item 2
// 3. Item 3
// ### Unordered List
// - Bullet 1
// - Bullet 2
//   - Sub-bullet A
//   - Sub-bullet B
// ## Links
// [Visit OpenAI](https://www.openai.com) to learn more about language models.
// ## Images
// ![Markdown Logo](https://markdown-here.com/img/icon256.png)
// ## Block Quote
// > This is a blockquote.

// Inline code: 'print("Hello, Markdown!")'
// ## Tables
// | Header 1 | Header 2 |
// |----------|----------|
// ## Code Block
// \`\`\`
// // This is a code block

// const cool = () => {console.log('?????)
// };
// \`\`\`
// `;

const template = `# Markdown editor

Hello **World**
`;

const EditorScreen = () => {
  const [content, setContent] = useState(template);
  const [tab, setTab] = useState("edit");

  return (
    <View style={styles.page}>
      <View style={styles.tabsContainer}>
        <View style={styles.tab}>
          <Pressable onPress={() => setTab("edit")}>
            <Text
              style={[
                styles.tabText,
                { color: tab === "edit" ? "mediumorchid" : "black" },
              ]}
            >
              Edit
            </Text>
          </Pressable>
        </View>
        <View style={styles.tab}>
          <Pressable onPress={() => setTab("preview")}>
            <Text
              style={[
                styles.tabText,
                { color: tab === "preview" ? "mediumorchid" : "black" },
              ]}
            >
              Preview
            </Text>
          </Pressable>
        </View>
      </View>
      {tab === "edit" ? (
        <TextInput
          value={content}
          onChangeText={setContent}
          numberOfLines={50}
          multiline={true}
          textAlignVertical="top"
          style={styles.input}
        />
      ) : (
        <MarkdownDisplay>{content}</MarkdownDisplay>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "whitesmoke",
    padding: 10,
    flex: 1,
  },
  input: {
    backgroundColor: "white",
    padding: 20,
    paddingTop: 20,
    borderRadius: 10,
    fontSize: 16,
  },
  tabsContainer: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
  },
  tab: {
    flex: 1,
    padding: 10,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
  },
  tabText: {
    fontFamily: "InterBold",
  },
});

export default EditorScreen;
