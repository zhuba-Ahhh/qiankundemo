#!/bin/bash

# 创建根目录的 dist 文件夹（如果不存在）
mkdir -p ../dist

# 遍历 packages 目录中的每个子目录
for packageDir in ../packages/*; do
  # 获取子目录的名称
  packageName=$(basename $packageDir)

  # 源 dist 目录路径
  sourceDir="$packageDir/dist"

  # 目标 dist 目录路径
  targetDir="../dist/$packageName"

  # 检查源 dist 目录是否存在
  if [ -d "$sourceDir" ]; then
    # 移动源 dist 目录到目标位置
    mv "$sourceDir" "$targetDir"
  else
    echo "源 Dist 目录不存在：$sourceDir"
  fi
done