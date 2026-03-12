"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

type TabKey = "engineering" | "architecture" | "ai" | "devops";

const skillData: Record<TabKey, { label: string; highlight?: boolean; certified?: boolean }[]> = {
  engineering: [
    { label: "Java 21/25", highlight: true },
    { label: "Spring Boot 3", highlight: true },
    { label: "JPA / Hibernate" },
    { label: "Tomcat / Wildfly" },
    { label: "Python", highlight: true },
    { label: "Django" },
    { label: "FastAPI" },
    { label: "TypeScript", highlight: true },
    { label: "Angular 17+", highlight: true },
    { label: "Playwright" },
    { label: "Swift (iOS)" },
    { label: "R" },
    { label: "C# / Unity" },
    { label: "JavaScript" },
    { label: "HTML / CSS" },
    { label: "jQuery" },
    { label: "Android" },
    { label: "NodeJS" },
    { label: "three.js" },
    { label: "OpenCV" },
  ],
  architecture: [
    { label: "Microservices", highlight: true },
    { label: "Event-Driven Architecture", highlight: true },
    { label: "Domain-Driven Design" },
    { label: "Cloud-native", highlight: true },
    { label: "AWS", highlight: true },
    { label: "Microsoft Azure", highlight: true },
    { label: "API-First (REST/OpenAPI)" },
    { label: "PostgreSQL / SQL", highlight: true },
    { label: "MySQL" },
    { label: "Apache Kafka", highlight: true },
    { label: "RabbitMQ" },
    { label: "MCP (Model Context Protocol)", highlight: true },
    { label: "AsyncAPI" },
    { label: "MQTT" },
    { label: "OPC UA" },
    { label: "Datenmodellierung (OOP)" },
    { label: "Linux" },
    { label: "Clean Architecture" },
  ],
  ai: [
    { label: "Claude Code (Anthropic Certified)", certified: true },
    { label: "LLM-Integration", highlight: true },
    { label: "RAG-Architekturen", highlight: true },
    { label: "KI-Agenten & Agentic Workflows", highlight: true },
    { label: "MCP Server & Agents", highlight: true },
    { label: "N8N", highlight: true },
    { label: "Prompt Engineering" },
    { label: "Machine Learning" },
    { label: "TensorFlow" },
    { label: "Keras" },
    { label: "PyTorch" },
    { label: "MLOps" },
    { label: "Computer Vision" },
    { label: "Data Mining" },
    { label: "Predictive Maintenance" },
    { label: "KI-Compliance (EU AI Act)" },
    { label: "Azure AI / Cognitive Services" },
    { label: "Jupyter Notebooks" },
  ],
  devops: [
    { label: "Docker", highlight: true },
    { label: "Kubernetes", highlight: true },
    { label: "GitLab CI/CD", highlight: true },
    { label: "GitHub" },
    { label: "Jenkins" },
    { label: "Maven" },
    { label: "Gradle" },
    { label: "Nexus" },
    { label: "SonarQube" },
    { label: "Selenium" },
    { label: "Testcontainers" },
    { label: "Infrastructure as Code" },
    { label: "Scrum" },
    { label: "Agiles Projektmanagement" },
    { label: "ECharts / Highcharts" },
    { label: "OBS Studio" },
    { label: "Raspberry Pi" },
  ],
};

const tabOrder: TabKey[] = ["engineering", "architecture", "ai", "devops"];

export default function Skills() {
  const t = useTranslations("skills");
  const tabs = t.raw("tabs") as Record<TabKey, string>;
  const [active, setActive] = useState<TabKey>("engineering");

  return (
    <section id="skills" className="py-24 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="section-tag">{t("tag")}</div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">{t("title")}</h2>
          <p className="text-text-muted max-w-xl mx-auto">{t("subtitle")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {tabOrder.map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 border cursor-pointer ${
                active === key
                  ? "bg-accent text-white border-accent"
                  : "bg-transparent text-text-muted border-border hover:border-accent hover:text-text-primary"
              }`}
            >
              {tabs[key]}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="flex flex-wrap gap-2"
          >
            {skillData[active].map((skill) => (
              <span
                key={skill.label}
                className={`skill-pill ${skill.highlight ? "highlight" : ""} ${skill.certified ? "certified" : ""}`}
              >
                {skill.label}
              </span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
