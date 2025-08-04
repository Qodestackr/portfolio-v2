"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { Badge } from "../../components/ui/badge"
import { Progress } from "../../components/ui/progress"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../../components/ui/collapsible"
import { CheckCircle2, Target, Zap, Brain, AlertCircle, ChevronDown, Plus, X } from "lucide-react"

export default function FocusCommandCenter() {
  const [signals, setSignals] = useState([])
  const [noise, setNoise] = useState([])
  const [currentTask, setCurrentTask] = useState("")
  const [subtasks, setSubtasks] = useState(["", "", ""])
  const [timeboxMinutes, setTimeboxMinutes] = useState(25)
  const [isTimerActive, setIsTimerActive] = useState(false)
  const [timeLeft, setTimeLeft] = useState(25 * 60)
  const [currentSubtask, setCurrentSubtask] = useState(0)
  const [completedTasks, setCompletedTasks] = useState(0)
  const [noiseInput, setNoiseInput] = useState("")
  const [showNoise, setShowNoise] = useState(false)
  const [expandedSignals, setExpandedSignals] = useState({})

  // Load from localStorage on mount
  useEffect(() => {
    const savedSignals = localStorage.getItem("focus-signals")
    const savedNoise = localStorage.getItem("focus-noise")
    const savedCompleted = localStorage.getItem("focus-completed")

    if (savedSignals) setSignals(JSON.parse(savedSignals))
    if (savedNoise) setNoise(JSON.parse(savedNoise))
    if (savedCompleted) setCompletedTasks(Number.parseInt(savedCompleted))
  }, [])

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("focus-signals", JSON.stringify(signals))
  }, [signals])

  useEffect(() => {
    localStorage.setItem("focus-noise", JSON.stringify(noise))
  }, [noise])

  useEffect(() => {
    localStorage.setItem("focus-completed", completedTasks.toString())
  }, [completedTasks])

  // Timer logic
  useEffect(() => {
    let interval = null
    if (isTimerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      setIsTimerActive(false)
      if (currentSubtask < 2) {
        setCurrentSubtask((prev) => prev + 1)
        setTimeLeft(timeboxMinutes * 60)
      }
    }
    return () => clearInterval(interval)
  }, [isTimerActive, timeLeft, currentSubtask, timeboxMinutes])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const addSubtaskToSignal = (signalId, subtaskIndex) => {
    setSignals((prev) =>
      prev.map((s) => {
        if (s.id === signalId) {
          const newSubtasks = [...s.subtasks]
          newSubtasks[subtaskIndex].breakdown = [...(newSubtasks[subtaskIndex].breakdown || []), ""]
          return { ...s, subtasks: newSubtasks }
        }
        return s
      }),
    )
  }

  const updateSubtaskBreakdown = (signalId, subtaskIndex, breakdownIndex, value) => {
    setSignals((prev) =>
      prev.map((s) => {
        if (s.id === signalId) {
          const newSubtasks = [...s.subtasks]
          if (!newSubtasks[subtaskIndex].breakdown) {
            newSubtasks[subtaskIndex].breakdown = []
          }
          newSubtasks[subtaskIndex].breakdown[breakdownIndex] = value
          return { ...s, subtasks: newSubtasks }
        }
        return s
      }),
    )
  }

  const addSignal = () => {
    if (currentTask.trim() && subtasks.every((st) => st.trim())) {
      const newSignal = {
        id: Date.now(),
        task: currentTask,
        subtasks: subtasks
          .filter((st) => st.trim())
          .map((st) => ({
            name: st,
            completed: false,
            breakdown: [],
          })),
        completed: false,
        startTime: null,
      }
      setSignals((prev) => [...prev, newSignal])
      setCurrentTask("")
      setSubtasks(["", "", ""])
    }
  }

  const addNoise = () => {
    if (noiseInput.trim()) {
      const newNoise = {
        id: Date.now(),
        text: noiseInput,
        timestamp: new Date().toLocaleTimeString(),
      }
      setNoise((prev) => [...prev, newNoise])
      setNoiseInput("")
    }
  }

  const startTask = (signalId) => {
    setSignals((prev) =>
      prev.map((s) => (s.id === signalId ? { ...s, startTime: new Date().toLocaleTimeString() } : s)),
    )
    setCurrentSubtask(0)
    setTimeLeft(timeboxMinutes * 60)
    setIsTimerActive(true)
  }

  const completeSubtask = (signalId, subtaskIndex) => {
    setSignals((prev) =>
      prev.map((s) => {
        if (s.id === signalId) {
          const newSubtasks = [...s.subtasks]
          newSubtasks[subtaskIndex].completed = true
          return { ...s, subtasks: newSubtasks }
        }
        return s
      }),
    )
  }

  const completeTask = (signalId) => {
    setSignals((prev) => prev.map((s) => (s.id === signalId ? { ...s, completed: true } : s)))
    setCompletedTasks((prev) => prev + 1)
    setIsTimerActive(false)
  }

  const toggleSignalExpansion = (signalId) => {
    setExpandedSignals((prev) => ({
      ...prev,
      [signalId]: !prev[signalId],
    }))
  }

  const progress = signals.length > 0 ? (completedTasks / signals.length) * 100 : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-2">
      <div className="max-w-6xl mx-auto space-y-3">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-light text-white flex items-center justify-center gap-2">
            <Target className="text-gray-400" />
            SIGNAL COMMAND CENTER
          </h1>
          <p className="text-gray-300">Work expands to fill the time given. So give it LESS time.</p>
          <Progress value={progress} className="w-64 mx-auto" />
          <p className="text-sm text-gray-400">
            {completedTasks}/{signals.length} Signals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Signal Input */}
          <Card className="bg-gray-800/50 border-gray-600/20">
            <CardHeader>
              <CardTitle className="text-gray-300 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Add Signal (High Impact Task)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Main Task  "
                value={currentTask}
                onChange={(e) => setCurrentTask(e.target.value)}
                className="bg-gray-700 border-gray-600/30 text-white"
              />

              <div className="space-y-2">
                <p className="text-sm text-gray-300">Break into 3 subtasks:</p>
                {subtasks.map((subtask, idx) => (
                  <Input
                    key={idx}
                    placeholder={`Subtask ${idx + 1}`}
                    value={subtask}
                    onChange={(e) => {
                      const newSubtasks = [...subtasks]
                      newSubtasks[idx] = e.target.value
                      setSubtasks(newSubtasks)
                    }}
                    className="bg-gray-700 border-gray-600/30 text-white text-sm"
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  placeholder="25"
                  value={timeboxMinutes}
                  onChange={(e) => setTimeboxMinutes(Number(e.target.value))}
                  className="bg-gray-700 border-gray-600/30 text-white w-20"
                />
                <span className="text-gray-300 text-sm">minutes per subtask</span>
              </div>

              <Button
                onClick={addSignal}
                className="w-full bg-gray-600 hover:bg-gray-700"
                disabled={!currentTask.trim() || !subtasks.every((st) => st.trim())}
              >
                Add to Signal Queue
              </Button>
            </CardContent>
          </Card>

          {/* Active Signals */}
          <Card className="bg-gray-800/50 border-green-600/20">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Today's Signals ({signals.filter((s) => !s.completed).length})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {signals
                .filter((s) => !s.completed)
                .map((signal) => (
                  <div key={signal.id} className="border border-green-600/20 rounded p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-white font-medium text-sm">{signal.task}</h4>
                      {signal.startTime && (
                        <Badge variant="outline" className="text-green-400 border-green-400">
                          Started {signal.startTime}
                        </Badge>
                      )}
                    </div>

                    <Collapsible
                      open={expandedSignals[signal.id]}
                      onOpenChange={() => toggleSignalExpansion(signal.id)}
                    >
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" className="w-full justify-between p-0 h-auto text-gray-300">
                          <span className="text-xs">
                            Subtasks ({signal.subtasks.filter((st) => st.completed).length}/{signal.subtasks.length})
                          </span>
                          <ChevronDown className="w-4 h-4" />
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-2 mt-2">
                        {signal.subtasks.map((subtask, idx) => (
                          <div
                            key={idx}
                            className={`text-xs p-2 rounded border ${
                              subtask.completed
                                ? "bg-green-900/30 text-green-300 border-green-500/30"
                                : signal.startTime && idx === currentSubtask
                                  ? "bg-yellow-900/30 text-yellow-300 border-yellow-500/30"
                                  : "text-gray-400 border-gray-600/20"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span>
                                {idx + 1}. {subtask.name}
                              </span>
                              {signal.startTime && idx === currentSubtask && (
                                <span className="font-mono">{formatTime(timeLeft)}</span>
                              )}
                              {!subtask.completed && (
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => completeSubtask(signal.id, idx)}
                                  className="h-6 w-6 p-0"
                                >
                                  <CheckCircle2 className="w-3 h-3" />
                                </Button>
                              )}
                            </div>

                            {/* Breakdown tasks */}
                            <div className="mt-2 space-y-1">
                              {subtask.breakdown?.map((breakdown, breakdownIdx) => (
                                <Input
                                  key={breakdownIdx}
                                  placeholder={`Micro-task ${breakdownIdx + 1}`}
                                  value={breakdown}
                                  onChange={(e) => updateSubtaskBreakdown(signal.id, idx, breakdownIdx, e.target.value)}
                                  className="bg-gray-700/50 border-gray-600/20 text-white text-xs h-6"
                                />
                              ))}
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => addSubtaskToSignal(signal.id, idx)}
                                className="h-6 w-full text-xs"
                              >
                                <Plus className="w-3 h-3 mr-1" />
                                Add micro-task
                              </Button>
                            </div>
                          </div>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>

                    <div className="flex gap-2">
                      {!signal.startTime && (
                        <Button
                          size="sm"
                          onClick={() => startTask(signal.id)}
                          className="bg-green-600 hover:bg-green-700 text-xs"
                        >
                          Start
                        </Button>
                      )}
                      {signal.startTime && (
                        <>
                          <Button
                            size="sm"
                            onClick={() => setIsTimerActive(!isTimerActive)}
                            variant="outline"
                            className="text-xs"
                          >
                            {isTimerActive ? "Pause" : "Resume"}
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => completeTask(signal.id)}
                            className="bg-green-600 hover:bg-green-700 text-xs"
                          >
                            Ship It
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                ))}

              {signals.filter((s) => !s.completed).length === 0 && (
                <div className="text-center text-gray-400 py-8">
                  <Target className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>No active signals. Add one above.</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Noise Capture - Hidden by default */}
          <Card className="bg-gray-800/50 border-yellow-600/20">
            <CardHeader>
              <CardTitle className="text-yellow-400 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  Noise Dump
                </div>
                <Button variant="ghost" size="sm" onClick={() => setShowNoise(!showNoise)} className="text-yellow-400">
                  {showNoise ? <X className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                </Button>
              </CardTitle>
            </CardHeader>
            {showNoise && (
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Textarea
                    placeholder="Brain dump random thoughts here... (discouraged but necessary)"
                    value={noiseInput}
                    onChange={(e) => setNoiseInput(e.target.value)}
                    className="bg-gray-700 border-yellow-600/30 text-white text-sm"
                    rows={3}
                  />
                  <Button
                    onClick={addNoise}
                    size="sm"
                    className="w-full bg-yellow-600 hover:bg-yellow-700"
                    disabled={!noiseInput.trim()}
                  >
                    Dump & Return to Signal
                  </Button>
                </div>

                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {noise
                    .slice(-3)
                    .reverse()
                    .map((item) => (
                      <div key={item.id} className="bg-gray-700/30 p-2 rounded text-xs border-l-2 border-yellow-600/50">
                        <p className="text-yellow-200">{item.text}</p>
                        <p className="text-gray-500 mt-1">{item.timestamp}</p>
                      </div>
                    ))}
                </div>
              </CardContent>
            )}
          </Card>
        </div>

        {/* Completed Tasks */}
        {signals.filter((s) => s.completed).length > 0 && (
          <Card className="bg-gray-800/50 border-blue-600/20">
            <CardHeader>
              <CardTitle className="text-blue-400 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Shipped Today ({signals.filter((s) => s.completed).length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {signals
                  .filter((s) => s.completed)
                  .map((signal) => (
                    <div key={signal.id} className="bg-blue-900/20 border border-blue-600/20 rounded p-3">
                      <h4 className="text-blue-200 font-medium text-sm mb-2">{signal.task}</h4>
                      <div className="space-y-1">
                        {signal.subtasks.map((subtask, idx) => (
                          <div key={idx} className="text-xs text-blue-300/70 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            {subtask.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Steve Jobs Quote */}
        <div className="text-center">
          <blockquote className="text-gray-400 italic text-sm max-w-2xl mx-auto">
            "People think focus means saying yes to the thing you've got to focus on. But that's not what it means at
            all. It means saying no to the hundred other good ideas."
          </blockquote>
          <p className="text-gray-500 text-xs mt-2">— Steve Jobs</p>
        </div>
      </div>
    </div>
  )
}
