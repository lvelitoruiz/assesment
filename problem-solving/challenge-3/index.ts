export const findLessCostPath = (grid: number[][]): number => {
    const rows = grid.length;
    const cols = grid[0].length;
  
    const memo: number[][] = Array.from({ length: rows }, () =>
      Array(cols).fill(Number.POSITIVE_INFINITY)
    );
  
    const queue = [[0, 0]];
    memo[0][0] = grid[0][0];
  
    while (queue.length > 0) {
      const [row, col] = queue.shift()!;
  
      [[0, 1], [0, -1], [-1, 0], [1, 0]].forEach(([rowOffset, colOffset]) => {
        const newRow = row + rowOffset;
        const newCol = col + colOffset;
  
        if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
          const newCost = memo[row][col] + grid[newRow][newCol];
  
          if (newCost < memo[newRow][newCol]) {
            memo[newRow][newCol] = newCost;
            queue.push([newRow, newCol]);
          }
        }
      });
    }
  
    return memo[rows - 1][cols - 1] - grid[rows - 1][cols - 1];
  }