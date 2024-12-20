import simpleGit, { SimpleGit } from 'simple-git';
import path from 'path';

// 创建 simple-git 实例，指定 Git 仓库路径（可以使用当前目录）
const git: SimpleGit = simpleGit(path.resolve(__dirname));

// 获取 commit 历史信息的函数
async function getGitCommits(): Promise<void> {
  try {
    // 获取 Git commit 历史，传入参数来限制信息数量或格式
    const log = await git.log();

    // 打印所有 commit 信息
    console.log('Git Commit History:');
    log.all.forEach((commit) => {
      console.log(`Commit Hash: ${commit.hash}`);
      console.log(`Author: ${commit.author_name} <${commit.author_email}>`);
      console.log(`Date: ${commit.date}`);
      console.log(`Message: ${commit.message}`);
      console.log('---');
    });
  } catch (error) {
    console.error('Error fetching git commits:', error);
  }
}

// 调用函数获取 commit 信息
getGitCommits();
