'use client';

import { useState } from 'react';
import { RotateCcw, SkipForward, CheckCircle2, Code2 } from 'lucide-react';

interface ExecutionStep {
  line: number;
  code: string;
  action: string;
  stack: string[];
  heap: number[];
  variables: Record<string, string | number>;
}

const EXECUTION_STEPS: ExecutionStep[] = [
  {
    line: 1,
    code: 'public class QuickSort {',
    action: 'Class QuickSort initialized into runtime memory.',
    stack: ['main()'],
    heap: [52, 19, 88, 34, 12, 67],
    variables: { status: 'idle', elements: 6 },
  },
  {
    line: 4,
    code: '  quickSort(arr, 0, arr.length - 1);',
    action: 'Invoking quickSort(arr, 0, 5) with initial boundary markers.',
    stack: ['main()', 'quickSort(arr, 0, 5)'],
    heap: [52, 19, 88, 34, 12, 67],
    variables: { low: 0, high: 5, pivotCandidate: 67 },
  },
  {
    line: 8,
    code: '  int pivot = partition(arr, low, high);',
    action: 'Partitioning array around pivot 67. Scanning elements.',
    stack: ['main()', 'quickSort(0, 5)', 'partition(0, 5)'],
    heap: [52, 19, 34, 12, 67, 88],
    variables: { pivot: 67, partitionIndex: 4, swaps: 2 },
  },
  {
    line: 11,
    code: '  quickSort(arr, low, pivot - 1);',
    action: 'Recursively sorting left partition [0..3]. Elements smaller than 67.',
    stack: ['main()', 'quickSort(0, 5)', 'quickSort(0, 3)'],
    heap: [12, 19, 34, 52, 67, 88],
    variables: { low: 0, high: 3, pivotCandidate: 52 },
  },
  {
    line: 14,
    code: '  quickSort(arr, pivot + 1, high);',
    action: 'Recursively sorting right partition [5..5]. Base case reached.',
    stack: ['main()', 'quickSort(0, 5)', 'quickSort(5, 5)'],
    heap: [12, 19, 34, 52, 67, 88],
    variables: { low: 5, high: 5, status: 'base_case_returned' },
  },
  {
    line: 18,
    code: '  // Array completely partitioned and sorted',
    action: 'Execution complete. Time complexity O(N log N). Memory in place O(1).',
    stack: ['main() — Finished'],
    heap: [12, 19, 34, 52, 67, 88],
    variables: { sorted: 'true', totalSteps: 5, status: 'COMPLETED' },
  },
];

export default function JavaVisualizerWorkbench() {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const step = EXECUTION_STEPS[currentStepIdx];

  const handleNext = () => {
    setCurrentStepIdx((prev) => (prev < EXECUTION_STEPS.length - 1 ? prev + 1 : prev));
  };

  const handleReset = () => {
    setCurrentStepIdx(0);
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-[#09090E] overflow-hidden shadow-2xl">
      {/* Workbench Header */}
      <div className="flex flex-wrap items-center justify-between px-5 py-3.5 bg-[#0D0D14] border-b border-white/[0.08] gap-3">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-white/70">
            <Code2 size={14} className="text-cyan-400" />
            <span className="font-semibold text-white">JavaVisualizer &mdash; QuickSort.java</span>
            <span className="text-white/40">|</span>
            <span className="text-cyan-400">Step {currentStepIdx + 1} of {EXECUTION_STEPS.length}</span>
          </div>
        </div>

        {/* Step Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-white/80 transition-colors"
            title="Reset to beginning"
          >
            <RotateCcw size={12} />
            <span>Reset</span>
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={currentStepIdx === EXECUTION_STEPS.length - 1}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 text-xs font-mono text-cyan-300 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <span>Step Forward</span>
            <SkipForward size={12} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
        {/* Code Editor Pane (7 cols) */}
        <div className="lg:col-span-7 p-5 font-mono text-xs leading-relaxed overflow-x-auto">
          <div className="text-white/40 mb-3">&#47;&#47; Interactive JVM Bytecode Step Simulator</div>
          <div className="flex flex-col gap-1">
            <div className={`px-2 py-1 rounded transition-colors ${step.line === 1 ? 'bg-cyan-950/80 text-cyan-200 border-l-2 border-cyan-400' : 'text-white/50'}`}>
              <span className="text-white/30 mr-3 select-none">01</span>public class QuickSort &#123;
            </div>
            <div className="px-2 py-0.5 text-white/50">
              <span className="text-white/30 mr-3 select-none">02</span>  public void sort(int[] arr) &#123;
            </div>
            <div className="px-2 py-0.5 text-white/50">
              <span className="text-white/30 mr-3 select-none">03</span>    if (arr == null || arr.length &lt;= 1) return;
            </div>
            <div className={`px-2 py-1 rounded transition-colors ${step.line === 4 ? 'bg-cyan-950/80 text-cyan-200 border-l-2 border-cyan-400 font-semibold' : 'text-white/50'}`}>
              <span className="text-white/30 mr-3 select-none">04</span>    quickSort(arr, 0, arr.length - 1);
            </div>
            <div className="px-2 py-0.5 text-white/50">
              <span className="text-white/30 mr-3 select-none">05</span>  &#125;
            </div>
            <div className="px-2 py-0.5 text-white/50">
              <span className="text-white/30 mr-3 select-none">06</span>
            </div>
            <div className="px-2 py-0.5 text-white/50">
              <span className="text-white/30 mr-3 select-none">07</span>  private void quickSort(int[] arr, int low, int high) &#123;
            </div>
            <div className={`px-2 py-1 rounded transition-colors ${step.line === 8 ? 'bg-cyan-950/80 text-cyan-200 border-l-2 border-cyan-400 font-semibold' : 'text-white/50'}`}>
              <span className="text-white/30 mr-3 select-none">08</span>    int pivot = partition(arr, low, high);
            </div>
            <div className="px-2 py-0.5 text-white/50">
              <span className="text-white/30 mr-3 select-none">09</span>    if (low &lt; pivot - 1)
            </div>
            <div className="px-2 py-0.5 text-white/50">
              <span className="text-white/30 mr-3 select-none">10</span>      quickSort(arr, low, pivot - 1);
            </div>
            <div className={`px-2 py-1 rounded transition-colors ${step.line === 11 ? 'bg-cyan-950/80 text-cyan-200 border-l-2 border-cyan-400 font-semibold' : 'text-white/50'}`}>
              <span className="text-white/30 mr-3 select-none">11</span>    quickSort(arr, low, pivot - 1);
            </div>
            <div className="px-2 py-0.5 text-white/50">
              <span className="text-white/30 mr-3 select-none">12</span>    if (pivot &lt; high)
            </div>
            <div className="px-2 py-0.5 text-white/50">
              <span className="text-white/30 mr-3 select-none">13</span>      quickSort(arr, pivot, high);
            </div>
            <div className={`px-2 py-1 rounded transition-colors ${step.line === 14 ? 'bg-cyan-950/80 text-cyan-200 border-l-2 border-cyan-400 font-semibold' : 'text-white/50'}`}>
              <span className="text-white/30 mr-3 select-none">14</span>    quickSort(arr, pivot + 1, high);
            </div>
            <div className="px-2 py-0.5 text-white/50">
              <span className="text-white/30 mr-3 select-none">15</span>  &#125;
            </div>
            <div className={`px-2 py-1 rounded transition-colors ${step.line === 18 ? 'bg-emerald-950/80 text-emerald-200 border-l-2 border-emerald-400 font-semibold' : 'text-white/50'}`}>
              <span className="text-white/30 mr-3 select-none">16</span>  &#47;&#47; Execution finished cleanly
            </div>
            <div className="px-2 py-0.5 text-white/50">
              <span className="text-white/30 mr-3 select-none">17</span>&#125;
            </div>
          </div>
        </div>

        {/* Runtime State & Heap Inspector (5 cols) */}
        <div className="lg:col-span-5 p-5 flex flex-col justify-between bg-[#08080C] gap-5">
          {/* Action explanation */}
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-white/40 mb-1.5">
              RUNTIME EXECUTOR NARRATIVE
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-white/90 leading-relaxed">
              {step.action}
            </div>
          </div>

          {/* Call Stack Inspector */}
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-white/40 mb-1.5 flex items-center justify-between">
              <span>CALL STACK FRAMES</span>
              <span className="text-cyan-400">{step.stack.length} Frame(s)</span>
            </div>
            <div className="flex flex-col gap-1.5">
              {step.stack.map((frame, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-xs font-mono text-cyan-300 flex items-center justify-between"
                >
                  <span>{frame}</span>
                  <span className="text-[10px] text-white/40">Frame #{idx}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Array Heap Memory State */}
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-white/40 mb-1.5">
              HEAP ARRAY MUTATION STATE
            </div>
            <div className="flex items-center gap-1.5">
              {step.heap.map((val, idx) => (
                <div
                  key={idx}
                  className="flex-1 text-center py-2 rounded-lg bg-white/[0.04] border border-white/[0.1] text-xs font-mono font-bold text-white transition-all"
                >
                  {val}
                </div>
              ))}
            </div>
          </div>

          {/* Variables Snapshot */}
          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-white/60">
            <span>MEM: O(1) IN-PLACE</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <CheckCircle2 size={11} /> TYPE-SAFE JVM EXECUTION
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
