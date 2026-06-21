// /components/StagePipeline.tsx
"use client"

import React, { useState } from 'react';

export interface Stage {
    id: string;
    name: string;
}

export interface Client {
    name: string;
    stage: string;
}

export type SecurityClearanceRole = 
  | 'admin' 
  | 'Mortgage Loan Officer' 
  | 'Loan Officer Assistant' 
  | 'Underwriter' 
  | 'Realtor' 
  | 'Processor';

interface StagePipelineProps {
    stages: Stage[];
    clients: Client[];
    userRole: SecurityClearanceRole;
    canDragAndDrop: boolean;
    onUpdatePipelineStructure: (newStages: Stage[], updatedClients?: Client[]) => void;
    onMoveClient: (clientName: string, targetStageId: string) => void
}

export default function StagePipeline({
    stages,
    clients,
    userRole = 'Mortgage Loan Officer',
    canDragAndDrop,
    onUpdatePipelineStructure,
    onMoveClient,
}: StagePipelineProps) {
    const isSystemAdmin = userRole === 'admin';
    const hasDataClearance = ['admin', 'Mortgage Loan Officer', 'Loan Officer Assistant', 'Underwriter', 'Realtor', 'Processor'].includes(userRole);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [activeAction, setActiveAction] = useState<'remove' | 'move' | 'rename' | null>(null);

    const [draftStages, setDraftStages] = useState<Stage[]>(stages);
    const [draftClients, setDraftClients] = useState<Client[]>(clients);

    const [stageToRemove, setStageToRemove] = useState<string | null>(null);
    const [fallbackStageId, setFallbackStageId] = useState<string>('');

    const startEditing = (action: 'remove' | 'move' | 'rename' | null) => {
        if (!isSystemAdmin) return; 
        setDraftStages([...stages]);
        setDraftClients([...clients]);
        setIsEditMode(true);
        setActiveAction(action);
    };

    const handleCancel = () => {
        setDraftStages([...stages]);
        setDraftClients([...clients]);
        setIsEditMode(false);
        setActiveAction(null);
        setStageToRemove(null);
    };

    const handleSave = () => {
        if (!isSystemAdmin) return;
        onUpdatePipelineStructure(draftStages, draftClients);
        setIsEditMode(false);
        setActiveAction(null);
        setStageToRemove(null);
    };

    const handleAddStageClick = () => {
        if (!isSystemAdmin) return;
        const rawName = prompt("Enter the label name for your new workflow node:");
        if (!rawName?.trim()) return;
        const newId = `stage_${Date.now()}`;
        
        setDraftStages([...stages, { id: newId, name: rawName.trim() }]);
        setDraftClients([...clients]);
        setIsEditMode(true);
        setActiveAction('move');
        setIsMenuOpen(false);
    };

    const initiateStageRemoval = (stageId: string) => {
        if (!isSystemAdmin) return;
        const defaultFallback = draftStages.find(stage => stage.id !== stageId)?.id || '';
        setStageToRemove(stageId);
        setFallbackStageId(defaultFallback);
    };

    const executeStageRemovalConfirm = () => {
        if (!isSystemAdmin || !stageToRemove) return;
        const adjustedClients = draftClients.map(client => 
            client.stage === stageToRemove ? { ...client, stage: fallbackStageId} : client
        );
        setDraftClients(adjustedClients);
        setDraftStages(draftStages.filter(stage => stage.id !== stageToRemove));
        setStageToRemove(null);
    };

    const handleRenameStageClick = (stageId: string) => {
        if (!isSystemAdmin) return;
        const currentStage = draftStages.find(stage => stage.id === stageId);
        if(!currentStage) return;
        const updatedName = prompt("Modify step designation name:", currentStage.name);
        if (!updatedName?.trim()) return;
        setDraftStages(draftStages.map(stage => stage.id === stageId ? { ...stage, name: updatedName.trim() }: stage))
    };

    const handleDragStart = (event: React.DragEvent, payload: string, itemType: 'client' | 'stage') => {
        if (!hasDataClearance) return event.preventDefault();
        event.dataTransfer.setData("text/plain", payload);
        event.dataTransfer.setData("itemType", itemType);
        event.dataTransfer.effectAllowed = "move";
    };

    const handleDragOver = (event: React.DragEvent) => {
        if (!hasDataClearance) return;
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    };

    const handleDragEnter = (event: React.DragEvent) => {
        if (!hasDataClearance) return;
        event.preventDefault();
    };

    const handleDropOnStageColumn = (event: React.DragEvent, targetStageId: string) => {
        event.preventDefault();
        if (!hasDataClearance) return;

        const payload = event.dataTransfer.getData("text/plain");
        const itemType = event.dataTransfer.getData("itemType");

        if (!payload || !itemType) return;

        if (itemType === 'client') {
            if (isEditMode && isSystemAdmin) {
                setDraftClients(draftClients.map(client =>    
                    client.name === payload ? { ...client, stage: targetStageId } : client
                ));
            } else if (canDragAndDrop) {
                onMoveClient(payload, targetStageId);
            }
        } else if (itemType === 'stage' && isEditMode && activeAction === 'move' && isSystemAdmin) {
            const draggedStageId = payload;
            if (draggedStageId === targetStageId) return;

            const currentStages = [...draftStages];
            const dragIndex = currentStages.findIndex(stage => stage.id === draggedStageId);
            const hoverIndex = currentStages.findIndex(stage => stage.id === targetStageId);

            const [removed] = currentStages.splice(dragIndex, 1);
            currentStages.splice(hoverIndex, 0, removed);
            setDraftStages(currentStages);
        }
    };

    const currentDisplayStages = isEditMode ? draftStages : stages;
    const currentDisplayClients = isEditMode ? draftClients : clients;

    return (
        <div className='space-y-4 text-slate-100'>
            <div className='bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
                <div>
                    <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-md font-bold uppercase tracking-wider text-slate-400">Interactive Stage Flow Pipeline</h3>
                        <span className="text-[10px] uppercase tracking-widest bg-slate-950 border border-slate-800 px-2 py-0.5 rounded text-emerald-400 font-mono font-bold">
                            Clearance: {userRole || 'None'}
                        </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{isEditMode
                        ? "Reviewing structural configuration drafts. Save changes to finalize."
                        : canDragAndDrop && hasDataClearance
                            ? "Drag-and-drop enabled for your professional clearance profile."
                            : "Drag-and-drop actions locked or unauthorized."
                        }
                    </p>
                </div>

                {isSystemAdmin && (
                    <div className='flex items-center gap-2 self-start sm:self-center relative'>
                        {isEditMode ? (
                            <div className="flex gap-2 border-l border-slate-800 pl-2">
                                <button onClick={handleCancel} className="bg-slate-950 border border-slate-800 hover:bg-slate-900 text-slate-400 font-bold px-4 py-1.5 rounded-lg text-xs uppercase tracking-wide cursor-pointer">Cancel</button>
                                <button onClick={handleSave} className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-4 py-1.5 rounded-lg text-xs uppercase tracking-wide cursor-pointer shadow-lg shadow-emerald-500/20">Save Changes</button>
                            </div>
                        ) : (
                            <div className='relative'>
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200 font-bold p-2 rounded-lg text-sm transition-all cursor-pointer flex items-center justify-center h-9 w-9 hover:bg-slate-800' title="Open Pipeline Configuration Options">⚙️</button>
                                {isMenuOpen && (
                                    <div className='absolute right-0 mt-2 top-full flex flex-col gap-1.5 bg-slate-950 border border-slate-800 rounded-xl p-2 shadow-2xl z-50 min-w-[160px] animate-fadeIn'>
                                        <button onClick={handleAddStageClick} className='w-full text-left bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-slate-950 font-bold px-3 py-2 rounded-lg text-xs tracking-wide uppercase cursor-pointer transition-all'>➕ Add Stage</button>
                                        <button onClick={() => { startEditing('remove'); setIsMenuOpen(false); }} className="w-full text-left bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-slate-950 font-bold px-3 py-2 rounded-lg text-xs tracking-wide uppercase cursor-pointer transition-all">➖ Remove Stage</button>
                                        <button onClick={() => { startEditing('move'); setIsMenuOpen(false); }} className="w-full text-left bg-violet-500/10 hover:bg-violet-500 text-violet-400 hover:text-slate-950 font-bold px-3 py-2 rounded-lg text-xs tracking-wide uppercase cursor-pointer transition-all">🗘 Reorder Stage</button>
                                        <button onClick={() => { startEditing('rename'); setIsMenuOpen(false); }} className="w-full text-left bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-slate-950 font-bold px-3 py-2 rounded-lg text-xs tracking-wide uppercase cursor-pointer transition-all">𝜟 Rename Stage</button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>

            {stageToRemove && isSystemAdmin && (
                <div className="bg-slate-900 border-2 border-rose-500/30 rounded-xl p-5 space-y-4 max-w-xl">
                    <div>
                        <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wide">Route Displaced Leads</h4>
                        <p className="text-xs text-slate-400 mt-0.5">Select the pipeline stage to move clients to from the deleted stage:</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 mt-1">
                        <select value={fallbackStageId} onChange={(event) => setFallbackStageId(event.target.value)} className="bg-slate-950 border border-slate-600 rounded-lg text-xs p-2 text-slate-300 outline-none min-w-[200px]">
                            {draftStages.filter(stage => stage.id !== stageToRemove).map(stage => (
                                <option key={stage.id} value={stage.id}>{stage.name}</option>
                            ))}
                        </select>
                        <div className="flex gap-2">
                            <button onClick={() => setStageToRemove(null)} className="px-3 py-1.5 bg-slate-950 border border-slate-800 text-xs text-slate-400 rounded-lg hover:text-slate-200 cursor-pointer font-bold">Back</button>
                            <button onClick={executeStageRemovalConfirm} className="px-3 py-1.5 bg-rose-500 hover:bg-rose-400 text-slate-950 font-bold text-xs rounded-lg cursor-pointer">Confirm Deletion</button>
                        </div>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-3 overflow-x-auto pb-2">
                {currentDisplayStages.map((stage) => {
                    const associatedClients = currentDisplayClients.filter(client => client.stage === stage.id);
                    const isReorderActive = isEditMode && activeAction === 'move' && isSystemAdmin;

                    return (
                        <div key={stage.id} draggable={isReorderActive} onDragStart={(event) => handleDragStart(event, stage.id, 'stage')} onDragOver={handleDragOver} onDragEnter={handleDragEnter} onDrop={(event) => handleDropOnStageColumn(event, stage.id)} className={`bg-slate-950 border rounded-lg p-3 flex flex-col min-h-36 justify-between transition-all ${isReorderActive ? "border-violet-500/40 bg-slate-950/80 cursor-ew-resize border-dashed" : "border-slate-800 hover:border-slate-700"}`}>
                            <div className="space-y-2 pointer-events-none">
                                <div className="flex flex-row items-start justify-between border-b border-slate-800 pb-1.5 min-h-10 gap-1">
                                    <p className='text-xs font-bold text-slate-300 leading-tight'>{stage.name}</p>
                                    <div className="pointer-events-auto flex gap-1">
                                        {isEditMode && activeAction === 'remove' && currentDisplayStages.length > 1 && isSystemAdmin && (
                                            <button onClick={() => initiateStageRemoval(stage.id)} className='flex items-center justify-center text-red-500 hover:text-red-400 border border-red-500/40 w-4 h-4 rounded-full text-[9px] font-black cursor-pointer bg-red-500/5 hover:bg-red-500/10'>✕</button>
                                        )}
                                        {isEditMode && activeAction === 'rename' && isSystemAdmin && (
                                            <button onClick={() => handleRenameStageClick(stage.id)} className='text-amber-500 hover:text-amber-400 text-[10px] font-bold px-1 cursor-pointer' title="Rename Stage">✎</button>
                                        )}
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    {associatedClients.map((client, idx) => {
                                        const allowDragCard = !isEditMode && canDragAndDrop && hasDataClearance;
                                        return (
                                            <div key={idx} draggable={allowDragCard} onDragStart={(event) => { event.stopPropagation(); handleDragStart(event, client.name, 'client'); }} className={`px-2 py-1 border rounded text-[11px] font-medium truncate select-none transition-all pointer-events-auto ${allowDragCard ? "bg-slate-900 border-slate-800 text-emerald-400 cursor-grab active:cursor-grabbing hover:border-emerald-500/30" : "bg-slate-900/40 border-slate-900 text-slate-500 cursor-not-allowed"}`}>
                                                {client.name}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <span className="text-[10px] font-mono text-slate-600 mt-2 self-end pointer-events-none">Qty: {associatedClients.length}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}