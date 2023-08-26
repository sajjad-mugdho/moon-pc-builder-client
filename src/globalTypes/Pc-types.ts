interface ComponentCategory {
  name: string;
  image: string;
}

const componentCategories: ComponentCategory[] = [
  {
    name: "CPU / Processor",
    image:
      "https://www.newegg.com/insider/wp-content/uploads/2015/03/iStock_000021630424_Large.jpg",
  },
  {
    name: "Motherboard",
    image: "https://us.aorus.com/upload/Product/F_20211026122289R8jZW_.JPG",
  },
  {
    name: "RAM",
    image:
      "https://media.istockphoto.com/id/1223621398/photo/computer-random-access-memory-ram-close-up.jpg?s=612x612&w=0&k=20&c=YMEmqFyGE5ZXa4xfxVJYgBIRlhSBHpKjqdpdPXYD6CM=",
  },
  {
    name: "Power Supply Unit",
    image:
      "https://media.istockphoto.com/id/1414944172/photo/computer-equipment-powerful-power-supply-studio-shot-retouched-image.jpg?s=612x612&w=0&k=20&c=zyfYpFSQB2klMiMy3gYnY6kmRiuh1ieEMfHywjOTndc=",
  },
  {
    name: "Storage Device",
    image:
      "https://1.bp.blogspot.com/-BArs1qdoeLI/YFjop9VzL1I/AAAAAAAARos/qBPbc1AbNk02MUlUGu2ESBeZmRrji8ECgCLcBGAsYHQ/s1200/%25D8%25A3%25D9%2581%25D8%25B6%25D9%2584%2B%25D9%2587%25D8%25A7%25D8%25B1%25D8%25AF%2BSSD.jpg",
  },
  {
    name: "Monitor",
    image:
      "https://media.us.lg.com/transform/f1dd8ce7-4bfe-48c6-b1f2-e11f6acce9d8/49GR85DC_UG_Monitors_hero_card_900x600",
  },
  {
    name: "Others (GPU, Mouse, Keyboard, etc…)",
    image: "https://devicetests.com/wp-content/uploads/2022/05/15-1.jpg",
  },
];

export default componentCategories;
