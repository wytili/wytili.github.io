// 获取导航链接和内容部分
const navLinks = document.querySelectorAll('.sidebar a');
const sections = document.querySelectorAll('section');

// 初始时只显示section0
sections.forEach(section => {
  if (section.id === 'section0') {
    section.style.display = 'block';
  } else {
    section.style.display = 'none';
  }
});

// 添加点击事件监听器
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    // 获取要显示的部分的ID
    const targetSectionId = this.getAttribute('data-section');

    // 遍历所有部分
    sections.forEach(section => {
      if (section.id === targetSectionId) {
        // 如果部分的ID与目标相同，显示该部分，否则隐藏
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });

    // 显示section0（如果点击了Home链接）
    if (targetSectionId === 'section0') {
      section0.style.display = 'block';
    } else {
      section0.style.display = 'none';
    }
  });
});
